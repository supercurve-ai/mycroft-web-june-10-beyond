#!/usr/bin/env node
// Decode IX2 action lists into readable timelines.
//   node decode.mjs a-22 a-23 ...        (no args = list every action list)
// Remember: groups run sequentially; when useFirstGroupAsInitialState is
// true, group 0 is applied instantly as the pre-animation state.
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const cfg = JSON.parse(readFileSync(join(here, "ix2-config.json"), "utf8"));

const ids = process.argv.slice(2);
if (ids.length === 0) {
  for (const [id, l] of Object.entries(cfg.actionLists))
    console.log(id.padEnd(14), l.title || "(untitled)");
  process.exit(0);
}

for (const id of ids) {
  const list = cfg.actionLists[id];
  if (!list) {
    console.log(`!! no action list ${id}`);
    continue;
  }
  console.log(`\n=== ${id}: "${list.title || ""}" useFirstGroupAsInitialState=${list.useFirstGroupAsInitialState}`);
  const triggers = Object.values(cfg.events).filter(
    (e) => e.action?.config?.actionListId === id,
  );
  const types = [...new Set(triggers.map((e) => e.eventTypeId))];
  console.log(` triggered by: ${types.join(", ")} (${triggers.length} events)`);
  (list.actionItemGroups || []).forEach((g, gi) => {
    console.log(` group ${gi}:`);
    g.actionItems.forEach((it) => {
      const c = it.config || {};
      const t = c.target || {};
      const sel =
        (t.useEventTarget ? `${t.useEventTarget}:` : "") +
        (t.selector || t.id || (t.useEventTarget ? "SELF" : "?"));
      const vals = Object.entries(c)
        .filter(([k]) => !["delay", "duration", "easing", "target"].includes(k))
        .map(([k, v]) => `${k}=${typeof v === "object" ? JSON.stringify(v) : v}`)
        .join(" ");
      console.log(
        `   ${it.actionTypeId.padEnd(20)} delay=${c.delay} dur=${c.duration} ease=${c.easing || "(default)"} target=${sel} ${vals}`,
      );
    });
  });
}
