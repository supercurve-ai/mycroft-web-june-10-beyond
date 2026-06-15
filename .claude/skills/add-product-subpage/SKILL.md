---
name: add-product-subpage
description: Add a new /product/* subpage (e.g. a new product capability) using the shared product-subpage template. Creates the route's content.tsx + page.tsx with the standard hero, benefits, feature slider, platform grid, testimonial and FAQ, plus the sitemap entry. Use when the user says "add a product page for X" or wants a new entry under /product.
---

# Add a product subpage

The five `/product/*` subpages render ONE shared template
(`src/app/product/_shared/product-subpage.tsx`) and differ only in content.
Adding one = **a new folder with a `content.tsx` + `page.tsx` + sitemap entry**.
Copy the closest existing subpage (`cloud-security/` is the cleanest reference);
`audit-and-compliance/` is the exception that adds its own custom hero/carousel
and is NOT the model to copy.

## Where things go

| Artifact | Location |
| --- | --- |
| Page content | `src/app/product/<slug>/content.tsx` (exports a `ProductSubpageContent`) |
| The route | `src/app/product/<slug>/page.tsx` |
| Sitemap entry | `src/app/sitemap.ts` — add `/product/<slug>` in the product block |
| Feature/platform images | `public/assets/screenshots/…` (reuse where possible) |
| OG share image | `public/assets/meta/<slug>-meta-img-v1.jpg` |

The slug is the capability, kebab-cased (`cloud-security`, `app-security`).
Confirm with the user.

## Build it

1. **Copy a sibling.** Duplicate `product/cloud-security/` to
   `product/<slug>/`, then rewrite both files.
2. **`content.tsx`** exports a typed `ProductSubpageContent` (interface in
   `_shared/product-subpage.tsx`). Fill:
   - `hero` — use the shared `<ProductHero …/>` (`_shared/product-hero.tsx`)
     unless the page needs a bespoke hero.
   - `benefits` — use the shared `<ProductBenefits …/>` 3-up
     (`_shared/product-benefits.tsx`).
   - `slides` — the sticky scroll-slider feature slides (`ScrollFeatureSlide[]`).
     Each slide's image is a **screenshot stem** resolved by `screenshot()` and
     must exist in `src/lib/static-images.ts`.
   - `platform` — heading, dek, and the "Platform features" 3-up `items`
     (img + title + body).
   - `pullquote` — the client testimonial (`labelTheme`, optional `theme`/
     `imgTint`, `img`, `quote`, `name`, `role`, `logo`). Reuse a real customer.
   - `faq` — a list of `<FaqItem>` elements (these feed the FAQ schema via
     `extractFaqs`).
   - `ctaVariant` — `"fireplace"` or `"lamp"`.
3. **`page.tsx`** — copy cloud-security's verbatim and swap the names. It must
   keep all three pieces: the `metadata` export (title/description/OG), the
   `pageSchema(...)` JSON-LD, AND mount `WebflowInteractions` alongside
   `<ProductSubpage {...content} />` (the sticky slider + FAQ accordions need
   it). Pattern:
   ```tsx
   import type { Metadata } from "next";
   import { WebflowInteractions } from "@/components/webflow-interactions";
   import { JsonLd } from "@/components/json-ld";
   import { extractFaqs, pageSchema } from "@/lib/structured-data";
   import { ProductSubpage } from "../_shared/product-subpage";
   import { <slug>Content } from "./content";

   const TITLE = "…";
   const DESCRIPTION = "…";
   export const metadata: Metadata = { title: TITLE, description: DESCRIPTION,
     openGraph: { title: TITLE, description: DESCRIPTION, type: "website", images: ["/assets/meta/<slug>-meta-img-v1.jpg"] },
     twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/assets/meta/<slug>-meta-img-v1.jpg"] } };

   const schema = pageSchema({ name: TITLE, description: DESCRIPTION, path: "/product/<slug>", appName: "Mycroft",
     featureList: [...<slug>Content.slides.map((s) => s.heading), ...<slug>Content.platform.items.map((i) => i.title)],
     faqs: extractFaqs(<slug>Content.faq) });

   export default function Product<Slug>Page() {
     return (<><JsonLd data={schema} /><ProductSubpage {...<slug>Content} /><WebflowInteractions /></>);
   }
   ```
4. **Sitemap:** add `{ url: \`${SITE_URL}/product/<slug>\` }` to
   `src/app/sitemap.ts` in the product block. (Confirm findability per Rule 1.)

## Images

- Reuse existing screenshot stems in `src/lib/static-images.ts` where you can.
  Any NEW screenshot must be added there (static import, not manifest) — see the
  **swap-image** skill.
- `meta` OG image should point at a real `/assets/meta/...` file; flag any
  placeholder.

## Cross-links

- Add the new subpage to the `/product` overview page and the site nav's Product
  dropdown (`src/components/site-nav.tsx`) if it should appear there — confirm
  with the user.

## Verify

- `pnpm build` must pass and produce `.next/server/app/product/<slug>.html`.
  Never build while a `pnpm start` server is running.
- `grep -rl "cdn.prod.website-files.com" src/` must not list the new files.
- Confirm the sitemap body contains the new URL.

## ⚠️ Required: completeness report

End with a short report:

- **OG image** — real or placeholder? Name the file to replace.
- **Screenshots** — any reused as stand-ins vs. purpose-made.
- **Testimonial** — which customer; flag if a placeholder quote was reused.
- **Copy gaps** — sections drafted/assumed from a thin brief.
- **Nav / overview cross-links** — added or left pending the user's call.
- **Assumptions** — slug chosen, anything ambiguous.
