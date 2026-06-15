---
description: Check the site is healthy before publishing (build, links, images, search setup)
allowed-tools: Bash, Read, Grep, Glob
---

Run a quick pre-publish health check and tell the user, in plain English, whether
the site is safe to publish. This is the safety net before `/publish` — it should
catch the things a non-technical user can't see: a broken build, a leftover
Webflow link, a new page that won't show up on Google.

Run these checks and summarize the results simply (✅/⚠️ per item, no raw stack
traces dumped on her):

1. **Does the site build?** Run `pnpm build`. This is the big one — if it fails,
   the site can't go live. Explain the problem in plain English and offer to fix
   it. (Never run a build while a `pnpm start` preview is running — if one is up,
   say so and ask to stop it first, or use the already-built output.)

2. **No Webflow leftovers (Rule 5).** Run
   `grep -rl "cdn.prod.website-files.com" src/`. If anything shows up, a file is
   still pointing at the old Webflow host — name the file(s) and offer to
   self-host the asset. Nothing found = good.

3. **New pages are findable.** Compare the routes that exist
   (`src/app/**/page.tsx`) against the URLs listed in `src/app/sitemap.ts`. If a
   real, public page is missing from the sitemap, flag it — it won't show up on
   Google. (Intentionally-hidden pages with a no-index `layout.tsx`, like
   `style-guide`, are fine to be absent — don't flag those.)

4. **No obviously broken internal links.** Spot-check that internal links
   (`href="/..."`) point at routes that exist or known assets. Flag links to
   pages that don't exist. Keep this lightweight — a sanity sweep, not an
   exhaustive crawler.

5. **Uncommitted work is intact.** Run `git status` so the user sees what's about
   to be included, in plain terms.

At the end, give a one-line verdict: either *"All clear — safe to /publish"* or
*"Hold on — here's what to fix first: …"*. This command never publishes or
changes anything; it only reports.
