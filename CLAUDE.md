# This site — cloned from Webflow by the Webflow Cloner agent

A Next.js (App Router) app. Faithful clone: the DOM + class names mirror the
original Webflow site 1:1 and are styled by the captured Webflow stylesheet.

## Layout

- `src/app/<route>/page.tsx` — one folder per page (the home page is
  `src/app/page.tsx`); each composes section components from `_snapshot/`.
- `src/app/_shared/` — components shared across pages: `SiteNav*`,
  `SiteFooter*`, `WebflowInteractions` (dropdowns/tabs/sliders/reveals),
  `ThirdPartyScripts` (re-wired analytics/pixels), `DotLottiePlayer`.
- `src/app/webflow-shared.css` — the captured global Webflow stylesheet.
  `src/app/<route>/<route>.css` — page-specific CSS. Don't rewrite these to
  Tailwind wholesale; the class names are what keeps the clone faithful.
- `src/content/<collection>/*.mdx` — CMS articles (blog posts). One file per
  post, gray-matter frontmatter + Markdown body.
- `src/app/sitemap.ts` — the sitemap, mirroring the original site's. Served at
  `/sitemap.xml`. New indexable pages MUST be added here.
- `clone-manifest.json` — clone bookkeeping. Don't edit by hand.

## Rules

1. **New pages:** use the `add-page` skill (or `/add-page`). ALWAYS ask the
   user whether the page should be findable by Google before finishing.
2. **New blog posts:** use the `add-blog-post` skill (or `/add-blog-post`).
3. Keep `WebflowInteractions` mounted on every page that uses Webflow widget
   markup (dropdowns, sliders, tabs) — it wires those after hydration.
4. Set `NEXT_PUBLIC_SITE_URL` to the production domain before launch so the
   sitemap + metadata point at the right host.
5. **No Webflow dependencies.** The client is leaving Webflow, so this site
   must not rely on anything Webflow-hosted. Never add a new reference to
   `cdn.prod.website-files.com` (or any other Webflow-served URL) in code,
   CSS, or metadata. The clone still contains legacy references (images,
   OG/Twitter share images, CSS `url(...)` assets) — these are being migrated
   to self-hosted copies under `public/`. When touching a file that still
   points at the Webflow CDN, download the asset into `public/` and reference
   the local copy instead. Verify with:
   `grep -rl "cdn.prod.website-files.com" src/`

## Non-technical owner

The site owner may not be a developer. `EDITING-GUIDE.md` (project root) is
their plain-English cheat sheet — `/guide` shows it in chat. The operator
commands `/start`, `/stop`, `/publish`, `/undo` exist for them: keep replies
friendly and jargon-free when these are used, and never discard or publish
work without confirming first.

Run `pnpm dev` to develop, `pnpm build` to verify production builds.
