---
name: add-framework-page
description: Add a new /frameworks/* compliance page (e.g. PCI DSS, NIST CSF) using the shared framework template. Creates the route's content.tsx + thin page.tsx, picks a testimonial, and adds the sitemap entry. Use when the user says "add a framework page for X", "we need a page for <compliance standard>", or wants a new entry under /frameworks.
---

# Add a framework page

All nine `/frameworks/*` pages render ONE shared template
(`src/app/frameworks/_shared/framework-page.tsx`) and differ only in content.
Adding a framework = **a new folder with two files + a sitemap entry**. You do
NOT write any layout/markup — only fill in a content object. Copy the closest
existing framework as your starting point (e.g. `soc2/content.tsx` is the
canonical reference).

## Where things go

| Artifact | Location |
| --- | --- |
| Page content | `src/app/frameworks/<slug>/content.tsx` (exports a `FrameworkPageData`) |
| The route | `src/app/frameworks/<slug>/page.tsx` (3-line wrapper) |
| Sitemap entry | `src/app/sitemap.ts` — add `/frameworks/<slug>` in the frameworks block |
| Hero badge | `public/assets/badges/<slug>-badge.svg` |
| Feature/solution images | `public/assets/screenshots/…` (reuse existing where possible) |
| OG share image | `public/assets/meta/frameworks-<slug>-meta-v1.jpg` |

The slug is the standard, kebab-cased and lowercase (`soc2`, `iso27001`,
`pcidss`). Confirm with the user.

## Build it

1. **Copy a sibling.** Duplicate `frameworks/soc2/` to
   `frameworks/<slug>/` as a starting point, then rewrite `content.tsx`.
2. **`content.tsx`** exports a typed `FrameworkPageData` (the interface is in
   `_shared/framework-page.tsx`). Fill every section:
   - `meta` — `path`, `title`, `description`, `image` (the OG image).
   - `hero` — `title`, `dek`, `badge` (src + alt), `whyTitle`, `whyDek`, and the
     three `features` (icon + title + copy).
   - `solutions` — heading, dek, and the alternating feature `cards`. Each card's
     `img.base` is a **screenshot stem** resolved by `screenshot()` (e.g.
     `"ai-policy-generator"`) — it must exist in `src/lib/static-images.ts`.
   - `grid` — the "additional features" tiles. (Keep the long `nodeId` on the
     odd-last tile only if you copied it; it's a Webflow grid-placement id.)
   - `testimonial` — import one from `_shared/testimonials.tsx` (don't inline a
     new shape unless the brief gives a genuinely new customer quote; if so, add
     it to that file).
   - `unlock` — the cross-link "dials" to three sibling frameworks (href + label
     + lottie path).
   - `faq` — dek + question/answer items (these also feed the page's FAQ schema).
   - `ctaVariant` — `"fireplace"` or `"lamp"`.
   - Use a small `whitespace-nowrap` span helper (like soc2's `<Soc2/>`) to keep
     the standard's name from wrapping mid-line.
3. **`page.tsx`** is the standard thin wrapper — copy soc2's verbatim, swapping
   the import and component name:
   ```tsx
   import { FrameworkPage, frameworkMetadata } from "../_shared/framework-page";
   import { <slug> } from "./content";

   export const metadata = frameworkMetadata(<slug>);

   export default function Frameworks<Slug>Page() {
     return <FrameworkPage data={<slug>} />;
   }
   ```
   The template already mounts `WebflowInteractions` and the JSON-LD — don't add
   them again.
4. **Sitemap:** add `{ url: \`${SITE_URL}/frameworks/<slug>\` }` to
   `src/app/sitemap.ts` in the frameworks block. (Framework pages are always
   findable — but still confirm with the user per Rule 1.)

## Images

- **Badge:** if the user supplied one, add it as
  `public/assets/badges/<slug>-badge.svg`; otherwise reuse the closest existing
  badge as a flagged placeholder and warn.
- **Solution/feature images:** prefer reusing existing screenshot stems already
  in `src/lib/static-images.ts`. Any NEW screenshot must be added there (it's a
  static import, not a manifest lookup) — see the **swap-image** skill. SVG
  badges and `/assets/meta/` OG images need no registration.
- **OG image:** `meta.image` should point at a real `/assets/meta/...` file;
  flag a placeholder to replace.

## Cross-links

- Add this framework to the `unlock.dials` of the most related sibling pages so
  it's discoverable from them (optional but matches the existing cross-linking).
- Update any "frameworks we support" lists if one exists.

## Verify

- `pnpm build` must pass and produce `.next/server/app/frameworks/<slug>.html`.
  Never build while a `pnpm start` server is running.
- `grep -rl "cdn.prod.website-files.com" src/` must not list the new files.
- Confirm the sitemap body contains the new URL.

## ⚠️ Required: completeness report

End with a short report listing anything needing attention:

- **Badge / OG image** — real or placeholder? Name the exact files to replace.
- **Testimonial** — which one was used; flag if a placeholder customer was
  reused rather than a real quote for this framework.
- **Screenshots** — any reused as stand-ins vs. purpose-made.
- **Copy gaps** — sections where the brief was thin and copy was drafted/assumed
  (hero dek, FAQ answers, feature copy).
- **Cross-links** — which sibling pages now link here, if any.
- **Assumptions** — slug chosen, anything ambiguous.
