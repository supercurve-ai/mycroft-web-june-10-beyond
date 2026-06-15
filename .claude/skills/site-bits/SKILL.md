---
name: site-bits
description: Add or edit the small recurring content blocks on the site — a team/leadership member, a customer or investor logo, a client testimonial / pull-quote, or an FAQ entry. Handles the per-block wiring (headshot/logo registration, where each list lives) that's fiddly to do by hand. Use when the user says "add a team member", "add this logo", "add a testimonial", or "add/edit an FAQ".
---

# Site bits — small recurring blocks

The everyday "add one more of these" edits. Each block type has a home and a
little wiring. Find the matching section below. Images involved here are static
imports — when in doubt about image wiring, defer to the **swap-image** skill.

---

## Team / leadership member

- **Lives in:** `src/app/about/_sections/about-leadership.tsx` (the
  `founder-grid` of `founder-tile` blocks).
- **Headshot:** `public/assets/team/<name>.webp`, imported at the top of that
  file (`import janeImg from "@public/assets/team/jane.webp";`) and rendered via
  `<OptimizedImage src={janeImg} width="280" sizes="(max-width: 479px) 100vw, 280px" … />`.
- **To add one:** copy an existing `founder-tile` block, swap the name, the
  `eyebrow-small` role, the bio paragraph, and the headshot import/usage. Keep
  the `wf-scrub` reveal markup and bump the `data-wf-scrub="x,y"` values in the
  same cadence as the neighbours.
- **Blog/author headshots** are different: those go in `public/assets/team/` AND
  must be registered in `src/lib/static-images.ts` (they render via
  `staticImage`/`authorImage`), not imported directly into a section.

## Customer / investor / partner logo

- **Logo wall / marquee:** `src/components/logo-marquee.tsx` (the "trusted by"
  strip) and the investor/partner sections under `src/app/about/_sections/`.
- **File:** `public/assets/logos/<name>.webp` (or `.svg` for crisp marks).
- **Wiring:** if it's rendered through `staticImage(...)`, add the import + map
  entry in `src/lib/static-images.ts` (alphabetical within the logos group) —
  see **swap-image**. Then add it to the relevant logo list/array.
- Prefer monochrome/transparent logos consistent with the existing wall. Confirm
  with the user where it should appear (customers vs investors vs partners).

## Client testimonial / pull-quote

- **Framework pages:** the reusable quotes are in
  `src/app/frameworks/_shared/testimonials.tsx` as `Testimonial` objects
  (`labelTint`, `boxTint`, `imgTint`, `img`, `quote`, `name`, `title`, `logo`).
  Add a new export there, then reference it from a framework `content.tsx`.
- **Product subpages:** the quote is inlined in each
  `product/<slug>/content.tsx` as the `pullquote` field.
- **Headshot:** `public/assets/customers/<name>.webp`, registered in
  `src/lib/static-images.ts` (it's resolved via `staticImage`). Logo goes in
  `public/assets/logos/`.
- **Quote text gotcha:** the existing quotes include a trailing closing curly
  quote `”` inside the string (the opening quote is rendered separately as a
  hanging glyph). Match that pattern. Watch for non-breaking spaces in pasted
  quotes (`grep -P '\xC2\xA0'`).

## FAQ entry

- **Standalone /faqs page:** `src/app/faqs/_sections/faqs-accordion.tsx`.
- **Framework page FAQ:** the `faq.items` array in
  `frameworks/<slug>/content.tsx`.
- **Product subpage FAQ:** the `faq` JSX (`<FaqItem>` list) in
  `product/<slug>/content.tsx`.
- **To add one:** add a `{ question, answer }` item (frameworks) or a
  `<FaqItem question="…">answer</FaqItem>` (product/faqs), matching the
  surrounding shape. These feed the page's FAQ structured data automatically
  (via `extractFaqs`/the schema builder) — no separate schema edit needed.
- Keep the first/last flags correct if the component uses them (see how existing
  items pass `first`/`last`).

---

## No Webflow CDN (Rule 5)

Any new headshot/logo must be a local file under `public/assets/...`, never a
`cdn.prod.website-files.com` URL. Verify:
`grep -rl "cdn.prod.website-files.com" src/`.

## Verify

- `pnpm build` must pass (an unregistered static import fails the build). Never
  build while `pnpm start` runs.
- Run the dev server (`/start`) and eyeball the block on its page.

## ⚠️ Required: report

End with a short report:

- **What was added/edited** and **where it shows**.
- **Image wiring** — file added + registered in `static-images.ts` (or not
  needed).
- **Placeholder?** — flag any reused stand-in image/quote and the file to
  replace.
- **Assumptions** — which section/page it was placed on if the user wasn't
  specific.
