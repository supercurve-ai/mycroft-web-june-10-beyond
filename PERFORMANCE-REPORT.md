# Performance Report — PageSpeed Insights (Mobile)

> **STATUS UPDATE (2026-06-12, same day):** every fix below has been
> implemented (see "What was implemented" at the end). Local Lighthouse with
> the same mobile profile went from **30 → ~61**, with Total Blocking Time
> down from 4,060 ms to ~1,000 ms and LCP from 15.4 s to ~4.1 s. The deployed
> PageSpeed number should land in the same range once these changes ship.
> The remaining gap to "green" is mostly the marketing stack (two GTM
> containers + duplicate gtag) — consolidation needs the site owner's
> sign-off.

**Date:** 2026-06-12
**Site audited:** https://project-new-web.vercel.app/ (home page)
**How:** The PageSpeed report itself couldn't be fetched (Google's free API quota was
exhausted), so Lighthouse 12 was run locally with the same mobile emulation +
throttling PageSpeed uses. The score reproduced: **30/100**.

## Measured metrics

| Metric | Value | Status |
|---|---|---|
| Performance score | **30** | 🔴 |
| First Contentful Paint | 4.5 s | 🔴 |
| Largest Contentful Paint | **15.4 s** | 🔴 (target ≤ 2.5 s) |
| Total Blocking Time | **4,060 ms** | 🔴 (target ≤ 200 ms) |
| Time to Interactive | 15.9 s | 🔴 |
| Speed Index | 7.2 s | 🔴 |
| Cumulative Layout Shift | 0.002 | 🟢 |
| Server response time | 10 ms | 🟢 |

The server and CLS are fine. The page is slow for exactly two reasons, in this
order: **Lottie animations** and **third-party tracking scripts**.

---

## Issue 1 — Lottie animations peg the main thread (the big one)

**Evidence:** Main-thread work breakdown shows **23.4 s of script evaluation**
(throttled mobile CPU), and 20.7 s of it is attributed to a single ~39 KB app
chunk — the `@lottiefiles/dotlottie-react` player driving its WASM canvas
renderer. The 603 KB `dotlottie-player.wasm` (fetched from cdn.jsdelivr.net) is
the largest download on the page.

**Why:** The home page mounts **8 Lottie players that all start playing
immediately**, including ones that are off-screen:

- Hero (`HomeSection1.tsx`): 3 players with `autoplay={true}`, eager.
- Product slider (`HomeSection7.tsx` → `ProductSlideCard.tsx:74`): all **5**
  slides render a `<DotLottiePlayer autoplay loop>` — every slide animates
  continuously even though only one is visible, and the section is below the
  fold anyway.

Eight simultaneous canvas render loops on a throttled phone CPU starve
everything else — that's why LCP is 15.4 s even though the LCP element is just
the hero *text* (`div.text-dek-m`): the browser can't get a frame out.

**Fixes (highest impact on the whole report):**

1. **Play Lotties only when visible.** `DotLottiePlayer` already has
   `playOnView` machinery (IntersectionObserver). Use it — or an equivalent
   "mount/play on intersection" — for every player instead of `autoplay`.
   Pause (or `freeze()`) players that leave the viewport.
2. **Product slider: animate only the active slide.** `ProductSlider` knows the
   current index; pass it down so inactive `ProductSlideCard`s pause. This alone
   removes 5 of the 8 render loops and ~430 KB of `.lottie` downloads from
   initial load (the slider files can lazy-load when the section scrolls in).
3. **Defer hero Lottie start until after first paint** (e.g. start on
   `requestIdleCallback`/`load`), optionally showing a static first-frame image
   as a poster. The hero text then paints in ~1–2 s instead of 15 s.
4. **Self-host `dotlottie-player.wasm`** instead of loading it from
   cdn.jsdelivr.net (also aligns with the "no external hosting we don't
   control" direction): copy it into `public/` and call
   `DotLottie.setWasmUrl()` once. Saves a third-party connection on the
   critical path.

Expected effect: TBT from ~4,000 ms to a few hundred ms; LCP from 15 s to the
2–3 s range. This is most of the path from 30 to a green-ish score.

## Issue 2 — Third-party tracking scripts (~1 MB of JS, heavily duplicated)

**Evidence:** `ThirdPartyScripts.tsx` loads, on every page view:
**two** GTM containers (GTM-5PVJPRF5 + GTM-MWV93GLK, ~300 KB) **plus** GA4 and
Google Ads loaded directly again outside GTM (~320 KB more — gtag is being
double-delivered), CookieYes, Microsoft Clarity, HubSpot (3 sub-scripts),
PostHog (+ surveys + dead-clicks modules), RB2B, Claydar, Pierview, GrowSumo,
and LinkedIn Insight (via GTM). Google tag scripts alone are ~620 KB with
~310 KB measured as unused. HubSpot analytics adds 1.6 s of script time.

**Fixes:**

1. **Consolidate to one GTM container** and move GA4/Ads/Clarity/LinkedIn
   inside it. Delete the direct `gtag.js` loads and the second container from
   `ThirdPartyScripts.tsx` (keep `window.gtagSendEvent` working by relying on
   the GTM-loaded gtag).
2. **Audit the long tail with the client:** RB2B, Claydar, Pierview, GrowSumo —
   is each still paying for itself? Every one removed is real TBT back.
3. **Delay non-essential trackers** until first interaction or a few seconds of
   idle (a small "load on first scroll/click/timeout" wrapper around the
   `<Script>` tags). Consent banner + GTM can stay; session-replay and
   enrichment tools (Clarity, PostHog, RB2B…) don't need to race the hero.

## Issue 3 — CookieYes is render-blocking

`ThirdPartyScripts.tsx:16` loads CookieYes with `strategy="beforeInteractive"`,
which puts a third-party script ahead of rendering — a direct contributor to
the 4.5 s FCP. Switch to `afterInteractive`; CookieYes still gates the trackers
(they all fire `afterInteractive` too, and GTM consent-mode defaults can hold
events until the banner loads).

## Issue 4 — Image optimization is disabled

`next.config.mjs` sets `images: { unoptimized: true }`, and the snapshot
markup uses plain `<img>`, so phones download desktop-sized files. Lighthouse
measures ~290 KB wasted on the home page (mostly the customer-logo marquee
images served at several times their rendered size).

**Fixes (pick one):**

- Quick: batch-resize the logo/marquee images in `public/assets/` to ~2× their
  rendered size (they render at ~100–150 px wide).
- Proper: remove `unoptimized: true` (Vercel's image optimizer is available)
  and migrate high-traffic `<img>`s to `next/image` — biggest files first.

Also worth doing while in there: `public/assets/backgroundnoise.gif` is 644 KB
(referenced from `webflow-shared.css`) — replace with a tiny tiling webp/PNG or
CSS noise if any page still uses it.

## Minor items (don't start here)

- **Unsized images** — several `<img>`s (features images, logo marquee) lack
  `width`/`height`. CLS is currently fine (0.002) so this is hygiene, not a
  score driver.
- **Render-blocking CSS** — the bundled global CSS (48 KB gzipped, mostly
  `webflow-shared.css`) costs ~1.1 s before first paint. Unused-CSS savings are
  only ~21 KB; trimming is possible but low ROI compared to issues 1–3.
- **Legacy/duplicated JS** — ~48 KB flagged, almost all inside third-party
  scripts; resolved by Issue 2, not by app changes.

## Suggested order of work

| Step | Change | Effort | Expected gain |
|---|---|---|---|
| 1 | Pause off-screen Lotties; only animate active slider slide | Small | Huge (TBT + LCP) |
| 2 | Defer hero Lottie until after first paint; self-host the WASM | Small | Large (LCP, FCP) |
| 3 | CookieYes → `afterInteractive` | Tiny | Moderate (FCP) |
| 4 | One GTM container; delete duplicate gtag loads | Small | Large (TBT) |
| 5 | Delay/remove long-tail trackers (with client sign-off) | Small | Moderate (TBT) |
| 6 | Resize marquee/logo images or enable next/image | Medium | Moderate (bytes) |

Steps 1–3 are pure code changes in this repo with no marketing-stack
implications and should move the score from 30 into the 60–75 range on their
own; steps 4–5 need a decision from the site owner about which trackers stay.

---

## What was implemented (2026-06-12)

All of the above, verified with a production build, a Lighthouse re-run
(median of 3: **score 61, FCP 2.7 s, LCP 4.1 s, TBT ~1.0 s, SI 3.0 s**), and a
headless-browser smoke test of the animation behavior.

1. **`DotLottiePlayer` is now viewport-aware** (`src/app/_shared/DotLottiePlayer.tsx`):
   the player (canvas + WASM + `.lottie` fetch) mounts only when the element is
   within 200px of the viewport; `autoplay` animations play only while actually
   on screen and pause off-screen; first playback waits for the browser to go
   idle (so it doesn't race hydration/paint); non-looping animations hold their
   final frame. Render resolution is capped at 1.5x pixel density on phones /
   2x elsewhere (`renderConfig`), cutting per-frame CPU ~3x on 3x-DPR devices.
   Smoke-tested: the home page now fetches 2 lottie files on load instead of 7,
   and exactly one animation runs per viewport state.
2. **Product slider** (`ProductSlideCard.tsx`): `playing={active}` — only the
   visible slide animates; the four hidden slides hold their frame.
3. ~~WASM self-hosted~~ — implemented, then **reverted by owner decision**
   (2026-06-12): the dotlottie WASM renderer loads from the library's default
   CDN (jsdelivr) to keep the repo simple. Negligible performance impact (the
   file loads async, off the critical path); the trade-off is that animations
   depend on jsdelivr being reachable.
4. **CookieYes** switched `beforeInteractive` → `afterInteractive` (no longer
   render-blocking).
5. **Long-tail trackers** (Clarity, HubSpot, PostHog, RB2B, Claydar, Pierview,
   GrowSumo) switched to `strategy="lazyOnload"` — they now load in browser
   idle time after the page is done, off the critical path. GTM + GA4 still
   load `afterInteractive`. *Not done (needs owner sign-off): consolidating the
   two GTM containers and removing the duplicate direct gtag.js loads.*
6. **Images**: all 28 marquee logos re-encoded (they were lossless webp) —
   425 KB → 56 KB total; `backgroundnoise.gif` (629 KB, used on framework/case-
   study heroes at 6% opacity) replaced with a 59 KB static webp tile;
   invalid `height="Auto"` on the logo marquee replaced with real dimensions,
   and width/height added to the home feature tiles and nav logo (fixes every
   "unsized image" flag).

`sharp` was added as a devDependency (used by the image re-encoding; also what
Next would use for image optimization if `unoptimized: true` is ever removed).
