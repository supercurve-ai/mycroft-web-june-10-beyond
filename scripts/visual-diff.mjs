// Visual regression harness for the Tailwind CSS migration.
//
//   node scripts/visual-diff.mjs capture <outDir>   — screenshot every route
//   node scripts/visual-diff.mjs compare <dirA> <dirB> [--diff <diffDir>]
//
// Renders each route at the four Webflow breakpoints against the local prod
// server (port 3199) under deterministic conditions: animations/transitions
// frozen, scroll-reveals forced visible, lottie canvases hidden (their pixels
// are WASM-rendered and irrelevant to CSS changes), the cursor glow hidden,
// and all non-localhost network blocked (no consent banners / tracker DOM).
// Identical conditions on both sides means any pixel diff is a CSS change.
import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync, readdirSync, readFileSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const CHROME =
  process.env.HOME +
  "/Library/Caches/ms-playwright/chromium_headless_shell-1223/chrome-headless-shell-mac-arm64/chrome-headless-shell";
const BASE = "http://localhost:3199";
// Webflow breakpoints: portrait <=479, landscape <=767, tablet <=991, desktop >=992
const WIDTHS = [390, 600, 900, 1280];

const FREEZE_CSS = `
  *, *::before, *::after {
    animation: none !important;
    transition: none !important;
    caret-color: transparent !important;
  }
  .wf-reveal { opacity: 1 !important; transform: none !important; }
  canvas { visibility: hidden !important; }
  .cursor-glow { display: none !important; }
  /* cross-origin iframes render out-of-process: the freeze CSS and network
     blocks don't reach them, so their load state is a race. Their content
     isn't styled by our CSS anyway. */
  iframe { visibility: hidden !important; }
  /* backgroundnoise.gif is an animated GIF; CSS can't pause GIF playback, so
     each capture lands on a random frame and the whole layer diffs as speckle.
     Hide it — it sits at opacity .06 and is irrelevant to CSS changes. */
  .hero-background.cs_noise { background-image: none !important; }
`;

async function routes() {
  // every statically known route, from the sitemap plus unindexed pages
  const xml = await (await fetch(`${BASE}/sitemap.xml`)).text();
  const fromSitemap = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
    new URL(m[1]).pathname.replace(/\/$/, "") || "/",
  );
  const extra = ["/style-guide", "/thank-you", "/subscribe"];
  return [...new Set([...fromSitemap, ...extra])].sort();
}

function launchChrome() {
  const chrome = spawn(CHROME, [
    "--headless=new",
    "--no-sandbox",
    "--remote-debugging-port=0",
    "--no-first-run",
    "--hide-scrollbars",
    "--force-color-profile=srgb",
    "--disable-lcd-text",
    `--user-data-dir=/tmp/visual-diff-profile-${process.pid}`,
  ]);
  const wsUrl = new Promise((resolve, reject) => {
    let buf = "";
    chrome.stderr.on("data", (d) => {
      buf += d;
      const m = buf.match(/DevTools listening on (ws:\/\/\S+)/);
      if (m) resolve(m[1]);
    });
    setTimeout(() => reject(new Error("chrome did not start")), 15000);
  });
  return { chrome, wsUrl };
}

function rpc(ws) {
  let nextId = 1;
  const pending = new Map();
  const listeners = new Set();
  ws.onmessage = (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg);
      pending.delete(msg.id);
    } else if (msg.method) {
      listeners.forEach((fn) => fn(msg));
    }
  };
  return {
    send(method, params = {}, sessionId) {
      const id = nextId++;
      ws.send(JSON.stringify({ id, method, params, sessionId }));
      return new Promise((resolve, reject) => {
        pending.set(id, (msg) =>
          msg.error
            ? reject(new Error(`${method}: ${JSON.stringify(msg.error)}`))
            : resolve(msg.result),
        );
      });
    },
    on(fn) {
      listeners.add(fn);
    },
  };
}

async function capture(outDir) {
  mkdirSync(outDir, { recursive: true });
  const urls = await routes();
  console.log(`${urls.length} routes x ${WIDTHS.length} widths`);
  const { chrome, wsUrl } = launchChrome();
  const ws = new WebSocket(await wsUrl);
  await new Promise((r) => (ws.onopen = r));
  const cdp = rpc(ws);

  const { targetId } = await cdp.send("Target.createTarget", { url: "about:blank" });
  const { sessionId } = await cdp.send("Target.attachToTarget", { targetId, flatten: true });
  const loadFired = () =>
    new Promise((r) => {
      const fn = (msg) => {
        if (msg.method === "Page.loadEventFired" && msg.sessionId === sessionId) r();
      };
      cdp.on(fn);
    });
  await cdp.send("Page.enable", {}, sessionId);
  await cdp.send("Runtime.enable", {}, sessionId);
  await cdp.send("Network.enable", {}, sessionId);
  // block everything that isn't the local server: third-party DOM is
  // nondeterministic and irrelevant to the CSS migration
  await cdp.send("Network.setBlockedURLs", { urls: ["https://*", "http://*:80/*", "ws://*", "wss://*"] }, sessionId);
  await cdp.send(
    "Page.addScriptToEvaluateOnNewDocument",
    {
      source: `document.addEventListener("DOMContentLoaded", () => {
        const s = document.createElement("style");
        s.textContent = ${JSON.stringify(FREEZE_CSS)};
        document.head.appendChild(s);
      });`,
    },
    sessionId,
  );

  for (const width of WIDTHS) {
    await cdp.send(
      "Emulation.setDeviceMetricsOverride",
      { width, height: 900, deviceScaleFactor: 1, mobile: width < 768 },
      sessionId,
    );
    for (const route of urls) {
      const name = `${route === "/" ? "home" : route.slice(1).replace(/\//g, "_")}@${width}.png`;
      const loaded = loadFired();
      await cdp.send("Page.navigate", { url: BASE + route }, sessionId);
      await loaded;
      await cdp.send(
        "Runtime.evaluate",
        {
          expression: `(async () => {
            await document.fonts.ready;
            // lazy images below the fold may or may not decode before a
            // beyond-viewport capture — force them and wait
            document.querySelectorAll('img[loading="lazy"]').forEach((i) => (i.loading = "eager"));
            await Promise.all([...document.images].filter((i) => !i.complete).map((i) => new Promise((r) => { i.onload = i.onerror = r; })));
            await Promise.all([...document.images].map((i) => i.decode().catch(() => {})));
            await new Promise(r => setTimeout(r, 700));
          })()`,
          awaitPromise: true,
        },
        sessionId,
      );
      const shot = await cdp.send(
        "Page.captureScreenshot",
        { format: "png", captureBeyondViewport: true },
        sessionId,
      );
      writeFileSync(join(outDir, name), Buffer.from(shot.data, "base64"));
      process.stdout.write(".");
    }
    console.log(` ${width}px done`);
  }
  chrome.kill();
  process.exit(0);
}

async function compare(dirA, dirB, diffDir) {
  const sharp = (await import("sharp")).default;
  const names = readdirSync(dirA).filter((f) => f.endsWith(".png"));
  let identical = 0;
  const changed = [];
  for (const name of names) {
    const pa = join(dirA, name);
    const pb = join(dirB, name);
    if (!existsSync(pb)) {
      changed.push({ name, why: "missing in B" });
      continue;
    }
    const a = readFileSync(pa);
    const b = readFileSync(pb);
    if (createHash("sha256").update(a).digest("hex") === createHash("sha256").update(b).digest("hex")) {
      identical++;
      continue;
    }
    // hash differs: count actually differing pixels
    const ia = sharp(a).ensureAlpha().raw();
    const ib = sharp(b).ensureAlpha().raw();
    const [da, db] = await Promise.all([ia.toBuffer({ resolveWithObject: true }), ib.toBuffer({ resolveWithObject: true })]);
    if (da.info.width !== db.info.width || da.info.height !== db.info.height) {
      changed.push({ name, why: `size ${da.info.width}x${da.info.height} -> ${db.info.width}x${db.info.height}` });
      continue;
    }
    let diff = 0;
    const len = Math.min(da.data.length, db.data.length);
    for (let i = 0; i < len; i += 4) {
      if (
        Math.abs(da.data[i] - db.data[i]) > 2 ||
        Math.abs(da.data[i + 1] - db.data[i + 1]) > 2 ||
        Math.abs(da.data[i + 2] - db.data[i + 2]) > 2
      )
        diff++;
    }
    if (diff === 0) {
      identical++; // sub-threshold encoder noise
      continue;
    }
    changed.push({ name, why: `${diff}px differ (${((100 * diff) / (len / 4)).toFixed(3)}%)` });
    if (diffDir) {
      mkdirSync(diffDir, { recursive: true });
      // red overlay where pixels differ, on top of a faded A
      const overlay = Buffer.alloc(len);
      for (let i = 0; i < len; i += 4) {
        const d =
          Math.abs(da.data[i] - db.data[i]) > 2 ||
          Math.abs(da.data[i + 1] - db.data[i + 1]) > 2 ||
          Math.abs(da.data[i + 2] - db.data[i + 2]) > 2;
        overlay[i] = d ? 255 : da.data[i];
        overlay[i + 1] = d ? 0 : da.data[i + 1];
        overlay[i + 2] = d ? 0 : da.data[i + 2];
        overlay[i + 3] = 255;
      }
      await sharp(overlay, { raw: { width: da.info.width, height: da.info.height, channels: 4 } })
        .png()
        .toFile(join(diffDir, name));
    }
  }
  console.log(`identical: ${identical}/${names.length}`);
  for (const c of changed) console.log(`CHANGED  ${c.name}  ${c.why}`);
  process.exit(changed.length ? 1 : 0);
}

const [, , cmd, a, b, ...rest] = process.argv;
if (cmd === "capture") await capture(a);
else if (cmd === "compare") await compare(a, b, rest[0] === "--diff" ? rest[1] : null);
else {
  console.log("usage: visual-diff.mjs capture <dir> | compare <a> <b> [--diff <dir>]");
  process.exit(2);
}
