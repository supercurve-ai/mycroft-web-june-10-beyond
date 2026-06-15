---
name: add-page
description: Create a brand-new standalone page (a new route like /partners or /resources/guide), wired with metadata, the section structure this site uses, and the right Google-findability setting. Use when the user says "add a new page", "create a page for X", or "I need a new section of the site". For framework or product pages use add-framework-page / add-product-subpage instead; for blog posts use add-blog-post.
---

# Add a page

Create a new route the way the rest of this site is built. This skill is for a
**generic standalone page** (e.g. `/partners`, `/changelog`, a landing page).
For the templated page types, stop and use the dedicated skill instead:

- A `/frameworks/*` compliance page → **add-framework-page**
- A `/product/*` subpage → **add-product-subpage**
- A blog post → **add-blog-post**
- A case study → **add-case-study**

## Decide the route first

The folder name **is** the URL. `src/app/partners/page.tsx` → `/partners`;
`src/app/resources/guide/page.tsx` → `/resources/guide`. Kebab-case it. If the
user didn't give a path, propose one from the page title and confirm.

## Where things go

| Artifact | Location |
| --- | --- |
| The route | `src/app/<route>/page.tsx` |
| The page's sections | `src/app/<route>/_sections/<descriptive-name>.tsx` |
| The composed body | `src/app/<route>/_sections/<Route>PageContent.tsx` |
| Sitemap entry | `src/app/sitemap.ts` (only if it should be findable — see below) |
| Hide-from-Google override | `src/app/<route>/layout.tsx` (only if it should be hidden) |

Mirror the existing pages: `page.tsx` sets `metadata` and renders the page's
`<Route>PageContent`, which composes the descriptively-named section components
in `_sections/`. See `src/app/thank-you/` for the minimal shape and
`src/app/faqs/` for one with structured data.

## Build it

1. Create `src/app/<route>/_sections/` and write each section as its own
   component with a descriptive name (`PartnersHero`, `PartnersBenefits`), not
   `SectionN`. Compose them in `<Route>PageContent`.
2. Write `page.tsx`:
   ```tsx
   import type { Metadata } from "next";
   import { PartnersPageContent } from "./_sections/partners-page-content";
   import { WebflowInteractions } from "@/components/webflow-interactions";

   export const metadata: Metadata = {
     title: "…",            // the browser-tab / search title
     description: "…",      // the search snippet
     openGraph: { title: "…", description: "…", type: "website", images: ["/assets/meta/…"] },
     twitter: { card: "summary_large_image", title: "…", description: "…", images: ["/assets/meta/…"] },
   };

   export default function PartnersPage() {
     return (
       <>
         <PartnersPageContent />
         <WebflowInteractions />
       </>
     );
   }
   ```
3. Reuse shared chrome and primitives instead of rebuilding them: `SiteNav`,
   `SiteFooter`, `CtaSection`, `ButtonLarge`, `ArrowTextLink`, `OptimizedImage`
   from `@/components/...`, and the type tokens in `src/lib/tokens.ts`
   (`t.type.h2`, `t.layout.*`) for NET-NEW markup. New components built here use
   plain Tailwind utilities (they override the Webflow layer automatically).
4. **Keep `WebflowInteractions` mounted** if the page uses any Webflow widget
   markup (sliders, tabs, scroll-reveals, lightboxes). A plain text page doesn't
   need it, but it's harmless to include.
5. Images: content images render through `OptimizedImage` and need
   intrinsic dimensions. Screenshots/logos/photos/team shots are **static
   imports** — add them in `src/lib/static-images.ts`. See the **swap-image**
   skill for the exact wiring. SVGs and `/assets/meta/` OG images need neither.

## Findability — ALWAYS ask

Before finishing, ask the user plainly: **"Should this page be findable by
Google?"** (CLAUDE.md Rule 1). Then:

- **Findable (the usual case):** add `{ url: \`${SITE_URL}/<route>\` }` to
  `src/app/sitemap.ts`, in a sensible spot near related URLs.
- **Hidden** (internal/landing pages not for search): do NOT add it to the
  sitemap, and add a route `layout.tsx` that no-indexes it, mirroring
  `src/app/style-guide/layout.tsx`:
  ```tsx
  import type { Metadata } from "next";
  export const metadata: Metadata = { robots: { index: false, follow: false, nocache: true } };
  export default function Layout({ children }: { children: React.ReactNode }) { return children; }
  ```

If the page should be reachable from the menu, add the link in
`src/components/site-nav.tsx` (and/or `site-footer.tsx`) — but confirm with the
user, since not every page belongs in the nav.

## Verify

- `pnpm build` must pass and produce `.next/server/app/<route>.html`. Never
  build while a `pnpm start` server is running.
- `grep -rl "cdn.prod.website-files.com" src/` must not list the new files
  (CLAUDE.md Rule 5 — self-host any asset instead of hotlinking Webflow).
- Confirm the sitemap body contains the new URL (or, if hidden, that it does
  NOT and the no-index layout exists).

## ⚠️ Required: completeness report

End with a short report. List anything that needs the user's attention:

- **Findability** — state the choice made (in sitemap / no-indexed) so it's on
  the record.
- **Metadata** — was a title/description/OG image provided, or invented? Flag a
  placeholder OG image to replace.
- **Placeholder content or images** — anything stubbed that needs real content.
- **Nav/footer** — whether a menu link was added, or left out pending the
  user's call.
- **Assumptions** — the route chosen, anything ambiguous in the request.
