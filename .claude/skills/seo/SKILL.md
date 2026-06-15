---
name: seo
description: Review or change a page's SEO — the search title, meta description, social-share (OG/Twitter) image, and whether the page is findable by Google (sitemap + indexing). Use when the user says "update the SEO", "change the meta description", "fix the share preview", "should this show up on Google?", or "make this page (not) findable".
---

# SEO / metadata

Each page controls how it appears in Google and in social-share previews through
its `metadata` export, plus two findability levers (the sitemap and the robots
index flag). This skill reviews or edits those. For body wording use
**edit-text**; for the share image file itself use **swap-image**.

## Where SEO lives

| Lever | Location |
| --- | --- |
| Search title (`<title>`) + meta description | `metadata` in `src/app/<route>/page.tsx` |
| Social-share preview (OG + Twitter) | `openGraph` / `twitter` in the same `metadata` |
| Framework pages | `meta` block in `src/app/frameworks/<slug>/content.tsx` (fed to `frameworkMetadata`) |
| Product subpages | `TITLE`/`DESCRIPTION`/images in `src/app/product/<slug>/page.tsx` |
| Blog / case studies | `title` / `excerpt` / cover image in the `.mdx` frontmatter |
| Findable by Google? | listed in `src/app/sitemap.ts` (yes) / no-index `layout.tsx` (no) |
| Structured data (JSON-LD) | `src/lib/structured-data.ts` + per-page `pageSchema(...)` |

## Editing title / description / share image

A standard page's `metadata` looks like:

```tsx
export const metadata: Metadata = {
  title: "…",            // ~50–60 chars; shows as the blue Google link & tab
  description: "…",      // ~150–160 chars; the grey snippet under the link
  openGraph: { title: "…", description: "…", type: "website", images: ["/assets/meta/…"] },
  twitter: { card: "summary_large_image", title: "…", description: "…", images: ["/assets/meta/…"] },
};
```

- Keep `openGraph`/`twitter` title+description in sync with the main ones unless
  the user wants them different for social.
- The share **image** must be a real file under `public/assets/meta/`
  (≈1200×630). If the user gives a new one, place it there and point all the
  `images: [...]` at it. Never point at `cdn.prod.website-files.com` (Rule 5).
- `metadataBase` in `src/app/layout.tsx` makes relative image paths absolute for
  scrapers — leave it; just use a leading-slash path.

## Findability — the two levers

To make a page **findable by Google**:
1. Add `{ url: \`${SITE_URL}/<route>\` }` to `src/app/sitemap.ts`.
2. Ensure it is NOT no-indexed (no `robots: { index: false }` in its layout).

To **hide** a page from Google:
1. Remove it from `src/app/sitemap.ts`.
2. Add a route `layout.tsx` no-indexing it, mirroring
   `src/app/style-guide/layout.tsx`:
   ```tsx
   import type { Metadata } from "next";
   export const metadata: Metadata = { robots: { index: false, follow: false, nocache: true } };
   export default function Layout({ children }: { children: React.ReactNode }) { return children; }
   ```

Site-wide crawl rules live in `src/app/robots.ts` (currently allow-all + sitemap
pointer) — don't change that for a single page; use the per-page levers above.

## Reviewing a page's SEO (no changes)

When the user asks "is this page set up for SEO?", report:
- Title present and a reasonable length?
- Description present and a reasonable length?
- OG/Twitter image set to a real local file?
- In the sitemap (findable) or no-indexed (hidden)? Is that what they want?
- Is it linked from anywhere (nav/footer/other pages) so it can be discovered?

## Verify

- `pnpm build` must pass. Never build while `pnpm start` runs.
- `grep -rl "cdn.prod.website-files.com" src/` must not list the page (catches a
  Webflow-hosted share image).
- Confirm the sitemap body does / doesn't contain the URL, matching intent.

## ⚠️ Required: report

End with a short report:

- **What changed** — title / description / share image / findability.
- **Findability state** — in sitemap or no-indexed, stated explicitly.
- **Share image** — real file vs placeholder; name any to replace.
- **Length flags** — title or description well over/under the comfortable range.
- **Discoverability** — note if a findable page isn't linked anywhere yet.
