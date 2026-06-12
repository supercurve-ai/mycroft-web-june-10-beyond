# Mycroft website

The marketing site for [mycroft.io](https://www.mycroft.io) — a Next.js
(App Router) app, originally ported from Webflow. The DOM and class names
mirror the original Webflow site and are styled by the captured Webflow
stylesheet, which is being migrated to Tailwind incrementally.

## Getting started

```bash
pnpm install
pnpm dev      # development server at http://localhost:3000
pnpm build    # production build (also type-checks)
pnpm start    # serve the production build
pnpm lint     # ESLint
```

### Environment variables

Copy `.env.example` to `.env.local` and fill in:

- `ZAPIER_WEBHOOK_URL` — receives "Book a demo" form leads
  (`src/app/api/demo-form/route.ts`). Without it the form returns 503 and
  leads are dropped.
- `NEXT_PUBLIC_SITE_URL` — the production domain; used by the sitemap and
  page metadata. Set it before launch.

## Project structure

```
src/
  app/
    page.tsx              Home page route
    <route>/page.tsx      One folder per page (about, pricing, faqs, …)
    <route>/_sections/    That page's section components. Each route renders
                          its <Page>PageContent composer, which assembles
                          descriptively named sections (HomeHero,
                          PricingPlans, FaqsAccordion, …)
    _sections/            The home page's sections
    _shared/              Components shared across pages: SiteNav, SiteFooter,
                          WebflowInteractions (Webflow widget behavior),
                          ThirdPartyScripts (consent-gated analytics), forms
    frameworks/_shared/   FrameworkPage — shared template behind the nine
                          /frameworks/* pages (each route keeps a content.tsx)
    product/_shared/      ProductSubpage — same pattern for the five
                          /product/* subpages
    api/                  Route handlers (demo form → Zapier webhook)
    sitemap.ts            Sitemap (new indexable pages must be added here)
    globals.css           CSS entry: Tailwind + webflow-shared.css + tokens.css
    webflow-shared.css    The captured Webflow stylesheet (legacy, shrinking)
    tokens.css            Design tokens: palette, fonts, breakpoints, chrome
  content/                MDX content: blog/, caseStudies/, frameworks/, product/
  lib/                    Content loaders (blog.ts, …), MDX compiler, and
                          tokens.ts (Tailwind class tokens for new components)
  components/             MDX element renderers
public/
  assets/                 Site images, organized by kind (logos/, screenshots/,
                          blog/<post-slug>/, badges/, team/, …)
  fonts/, lottie/         Self-hosted fonts and Lottie animations
scripts/                  Maintainer tools: Webflow→Tailwind class converter,
                          visual-diff pixel-parity checker, asset organizer
```

## Further documentation

- **`CLAUDE.md`** — the architecture deep-dive: CSS layering (Webflow cascade
  layer vs. Tailwind utilities), the Tailwind migration workflow, design
  tokens, asset conventions, and the gotchas worth reading before editing
  styles or copy.
- **`EDITING-GUIDE.md`** — plain-English guide for non-technical content
  edits via Claude Code.
- **`docs/FONT-LICENSING.md`** — licensing notes for the self-hosted fonts.

## Conventions

- New pages need a sitemap entry (`src/app/sitemap.ts`) and follow the
  `page.tsx` + `_sections/` pattern; net-new components use Tailwind
  utilities and `src/lib/tokens.ts` rather than Webflow classes.
- Blog posts are MDX files in `src/content/blog/` with images in
  `public/assets/blog/<post-slug>/`.
- No Webflow-hosted dependencies: never reference `cdn.prod.website-files.com`;
  assets are self-hosted under `public/`.
