# Cleanup audit — pre-handoff report

Audited 2026-06-11. Report only; no changes were made. Findings are ordered by
importance. "Owner" below means the non-technical site owner the repo is being
handed to.

---

## 1. Critical — the owner's documented workflow doesn't exist

**Finding:** Both docs promise commands/skills that are not present anywhere:

- `EDITING-GUIDE.md` tells the owner to use `/start`, `/stop`, `/preview`,
  `/publish`, `/undo`, `/guide`.
- `CLAUDE.md` instructs Claude to use the `add-page` and `add-blog-post`
  skills and says "`/guide` shows it in chat".

The project `.claude/` directory contains **only** `settings.json` and
`settings.local.json` — there is no `.claude/skills/` (or commands) directory,
and none of these exist at the user level either. The owner's entire
plain-English workflow depends on commands that will silently do nothing
(Claude will improvise instead of following a vetted procedure — risky for
`/publish` and `/undo` especially).

**Fix:** Create the skills under `.claude/skills/` (start, stop, preview,
publish, undo, guide, add-page, add-blog-post) and commit them, or rewrite
EDITING-GUIDE.md and CLAUDE.md to match what actually exists. Verify each
command in a fresh session before handoff.

## 2. Critical — `bypassPermissions` is the default for the owner

**Finding:** `.claude/settings.json` sets
`"permissions": { "defaultMode": "bypassPermissions" }`. Handing this to a
non-technical owner means every command Claude runs (including destructive
git/shell operations) executes without confirmation. Already flagged as
TASKS.md item "remove bypassPermissions…".

**Fix:** Remove `defaultMode: bypassPermissions`, keep the curated `allow`
list. Also note `.claude/` is currently **untracked** — commit
`.claude/settings.json` (after fixing) so the owner inherits it, and add
`.claude/settings.local.json` and `.claude/worktrees/` to `.gitignore`.



## 4. High — uncommitted work in progress on `main`

**Finding:** The working tree has 5 modified tracked files (`.gitignore`,
`TASKS.md`, `next.config.mjs`, `src/app/_shared/SiteNav.tsx`,
`src/app/layout.tsx` — the layout change removes the partnerships-page
metadata that was leaking site-wide, which looks correct and worth keeping)
and 3 untracked directories (`.claude/`, `reference/`, `scripts/`).

**Fix:** Review and commit (or discard) before handoff so `main` is the real
site. Recommended: commit `reference/webflow-ix2/` (irreplaceable extracted
animation specs used as documentation) and `scripts/fan-out-tasks.sh`;
see item 2 for `.claude/`.



## 7. Medium — 20 unused images in `public/assets/`

**Finding:** Never referenced anywhere in `src/`:

- The entire `mycroft-features1-v2` … `mycroft-features4-v1` families
  (base + `-p-500` + `-p-800` each = 12 files).
- Orphaned responsive variants whose base image *is* used:
  `smashsend-cover-square-p-{500,800}.webp`, `unifiedcs-hero-v1-p-{500,800}.webp`,
  `weavecs-hero-v1-p-{500,800}.webp`, `wisedocscs-hero-v1-p-{500,800}.webp`
  (8 files).

All fonts, icons, and lottie files are referenced.

**Fix:** Delete the 20 files. (Re-run the reference check first if any code
has changed since this audit.)


## 10. Low — naming inconsistencies

**Finding:**
- `src/content/caseStudies/` and `src/lib/caseStudies.ts` are camelCase while
  sibling collections (`blog`, `frameworks`, `product`) and the route
  (`case-studies`) are kebab/lowercase.
- Shared components live in two places with two conventions:
  `src/app/_shared/*.tsx` (PascalCase) and `src/components/*.tsx`
  (kebab-case: `mdx-components.tsx`, `case-study-mdx.tsx`).
- TASKS.md already plans a repo-wide kebab-case rename; fold these in then.
- `package.json` is still named `webflow-clone` — rename to `mycroft-website`.
- Note: the blog slug `automate-user-acces-reviews` ("acces") matches the live
  site's URL — do **not** "fix" it without adding a redirect.

## 11. Low — disabled ESLint rules (already tracked)

**Finding:** `eslint.config.mjs` turns off `react/no-unescaped-entities` and
`@next/next/no-img-element`, with a comment explaining why. TASKS.md already
has items to fix the violations and re-enable both. Fine for launch; keep the
tasks.

## 12. Low — dev-only config to strip before handoff (already tracked)

**Finding:** `allowedDevOrigins` in `next.config.mjs` contains two specific
LAN IPs (`192.168.4.59`, `10.10.98.18`). Dev-only and harmless in production,
and TASKS.md already says to remove it; at minimum drop the two
machine-specific IPs since the wildcard ranges cover them.

## 13. Low — filesystem clutter (untracked, ignored)

**Finding:** `.DS_Store` at repo root, `public/.DS_Store`, `src/.DS_Store`,
and `tsconfig.tsbuildinfo` exist on disk. All are gitignored, so this is local
noise only.

**Fix:** `find . -name .DS_Store -not -path './node_modules/*' -delete` for
tidiness; nothing to commit.

## 14. For awareness (no action required)

- **`/resources` listings are hardcoded snapshots**
  (`src/app/resources/_snapshot/ResourcesCollection*.data.ts`), not generated
  from `src/content/blog/`. A new blog post will NOT appear on `/resources`
  unless those data files are also updated — make sure the `add-blog-post`
  skill (item 1) does this, and say so in EDITING-GUIDE.md.
- **Google Fonts `@import`** in `globals.css` loads Inter + Libre Baskerville.
  These *are* used (they back the deprecated Webflow font variables that style
  `body`, `h1`, buttons, etc.), so don't remove it — but self-hosting them
  like the other fonts in `public/fonts/` would cut an external render-blocking
  request.
- **Snapshot numbering gaps** (e.g. there is no `HomeSection2.tsx` or
  `ProductSection3.tsx`) are an artifact of the cloner's generated names, not
  missing files. Harmless; renumber only if doing the kebab-case rename anyway.
- **Lottie filenames** keep their Webflow asset-hash prefixes
  (`67f56c6d…_Mycroft-Product_Animation-HERO2_v1.lottie`). Cosmetic; renaming
  requires updating every `data-src`/`src` reference, so low value.

---

## Suggested order of operations

1. Fix the owner workflow (items 1–2) — nothing else matters if the owner
   can't safely drive the site.
2. Fix `/security` + sitemap (item 3) and commit the in-flight work (item 4).
3. Delete dead code and unused assets in one commit (items 5–9), verifying
   with `pnpm build` after each deletion group.
4. Batch the cosmetic work (items 10–13) into the already-planned kebab-case /
   lint passes.
