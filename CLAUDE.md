# This site — cloned from Webflow by the Webflow Cloner agent

A Next.js (App Router) app. Faithful clone: the DOM + class names mirror the
original Webflow site 1:1 and are styled by the captured Webflow stylesheet.

## Layout

- `src/app/<route>/page.tsx` — one folder per page (the home page is
  `src/app/page.tsx`); each renders its route's `_sections/<Page>PageContent`,
  which composes the descriptively named section components in that folder
  (e.g. `HomeHero`, `PricingPlans`; renamed June 2026 from the cloner's
  `_snapshot/<Page>SectionN` scheme).
- `src/app/frameworks/_shared/FrameworkPage.tsx` — the shared template behind
  all nine `/frameworks/*` pages (their per-page snapshots were consolidated
  June 2026, pixel-parity verified). Each route keeps only a `content.tsx`
  (that framework's copy, images, FAQ, testimonial pick) and a thin
  `page.tsx`. Edit copy in `content.tsx`; edit layout once in the template;
  a new framework page = new folder with those two files + a sitemap entry.
- `src/app/product/_shared/ProductSubpage.tsx` — the same treatment for the
  five `/product/*` subpages (consolidated June 2026, pixel-parity verified),
  with `ProductHero`/`ProductBenefits` for the standard hero and 3-up benefits
  sections. Each route keeps a `content.tsx` + thin `page.tsx`;
  audit-and-compliance additionally keeps its unique `AuditHero` and
  `ComplianceCarousel` sections, passed in through the template's
  `hero`/`benefits` slots. The `/product` overview page is unrelated and still
  uses its own `_sections/`. NOTE: ported Webflow copy can contain non-breaking
  spaces (U+00A0) that look like plain spaces — when moving copy around, check
  with `grep -P '\xC2\xA0'` or line wrapping will silently change.
- `src/app/_shared/` — components shared across pages: `SiteNav` (self-contained,
  manages its own dropdowns/hamburger with React state), `SiteFooter`, `NavLink`
  (current-page-aware link), `WebflowInteractions` (tabs/sliders/reveals/lightbox),
  `ThirdPartyScripts` (re-wired analytics/pixels), `DotLottiePlayer`.
- `src/app/webflow-shared.css` — the captured Webflow stylesheet, being
  migrated to Tailwind utilities tranche by tranche (owner-approved June
  2026; page CSS files and the atomic spacing/container classes are already
  converted). It is imported into the `webflow` cascade layer, which sits
  BELOW Tailwind's `utilities` layer (see globals.css) — so plain Tailwind
  utilities in JSX always override Webflow rules without `!`. Two traps:
  (1) a Webflow class whose name collides with a Tailwind utility now loses
  to it — rename the Webflow class (e.g. `container` → `wf-container`) or
  re-assert it in tokens.css like `.product-text.text-right`; (2) element
  selectors added to tokens.css must go inside `@layer webflow { … }` or
  they'll override every Webflow class rule regardless of specificity.
  **Migration workflow:** convert classes with
  `scripts/convert-webflow-classes.py` (edit TARGETS), then prove pixel
  parity with `scripts/visual-diff.mjs` (capture baseline → change →
  capture → compare; run against `pnpm build` + `pnpm start --port 3199`,
  never build while the server is running). Treat sub-0.01% diffs on
  product_*@390 as known flakes.
- `src/app/tokens.css` — the design-token layer: the Mycroft palette, fonts,
  and Webflow breakpoints as Tailwind `@theme` tokens, plus the site-wide
  chrome (selection color, nav dropdown hover, marquee keyframes, …) that was
  formerly duplicated in every page's CSS. webflow-shared.css's `:root`
  palette/font vars alias these tokens — change a color here and the whole
  site follows. Must stay imported AFTER webflow-shared.css in globals.css.
- `src/lib/tokens.ts` — TS class-name tokens (`t.type.h2`, `t.layout.*`) that
  reproduce the site's type scale with Tailwind utilities. Use these when
  building NET-NEW components; ported section components keep their remaining
  Webflow class names until their tranche of the Tailwind migration. Custom responsive variants `max-tablet:` (≤991px),
  `max-landscape:` (≤767px), `max-portrait:` (≤479px) match Webflow's
  breakpoints — Tailwind's default `sm/md/lg` do not.
- `src/content/<collection>/*.mdx` — CMS articles (blog posts). One file per
  post, gray-matter frontmatter + Markdown body.
- `src/app/sitemap.ts` — the sitemap, mirroring the original site's. Served at
  `/sitemap.xml`. New indexable pages MUST be added here.
- `public/assets/<category>/` — all site images, organized by kind (June
  2026): `blog/<post-slug>/` (one folder per post), `screenshots/` (product
  UI shots, incl. the bases used by FrameworkPage solution cards and pricing
  FeatureTileSmall — their srcSets hardcode this folder), `logos/` (customer/
  partner/investor marks), `badges/` (compliance framework badges), `icons/`,
  `meta/` (OG/social share images), `team/` (Mycroft team headshots),
  `customers/` (customer testimonial/pull-quote headshots), `case-studies/`,
  `photos/` (page photography), `decor/` (backgrounds, patterns, glows),
  `brand/` (Mycroft lockups). Put new assets in the matching folder; an
  image's `-p-500/-p-800/…` responsive variants must live beside it (srcSet
  builders derive variant paths from the base path).

## Rules

1. **New pages:** use the `add-page` skill (or `/add-page`). ALWAYS ask the
   user whether the page should be findable by Google before finishing.
2. **New blog posts:** use the `add-blog-post` skill (or `/add-blog-post`).
3. Keep `WebflowInteractions` mounted on every page that uses Webflow widget
   markup (sliders, tabs, scroll reveals, lightboxes) — it wires those after
   hydration. The nav/footer don't need it.
4. Set `NEXT_PUBLIC_SITE_URL` to the production domain before launch so the
   sitemap + metadata point at the right host. Also set `ZAPIER_WEBHOOK_URL`
   (see `.env.example`) — without it the "Book a demo" form
   (`src/app/_shared/BookDemoForm.tsx` → `/api/demo-form`) drops every lead
   with a 503.
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
