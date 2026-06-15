---
name: swap-image
description: Replace or add a content image (screenshot, logo, photo, headshot, badge, blog/case-study image) and wire it up correctly so it actually renders optimized. Handles the static-images.ts registration and the blog/case-study dimensions manifest that a non-technical edit silently gets wrong. Use when the user says "swap this image", "replace the logo", "use this new screenshot", or "add this photo".
---

# Swap an image

Images on this site do NOT "just work" by dropping a file in `public/`. Almost
every content image renders through `OptimizedImage` (`next/image`), which needs
intrinsic dimensions, and those come from one of two places depending on the
folder. Pick the wrong path and the image either fails the build or silently
falls back to an unoptimized `<img>` with layout shift. This skill exists to get
that wiring right every time.

## First: which kind of image is it?

| Folder | How it's resolved | What to update |
| --- | --- | --- |
| `public/assets/screenshots/` | **Static import** | `src/lib/static-images.ts` |
| `public/assets/logos/` | **Static import** | `src/lib/static-images.ts` |
| `public/assets/customers/` (pull-quote headshots) | **Static import** | `src/lib/static-images.ts` |
| `public/assets/photos/` | **Static import** | `src/lib/static-images.ts` |
| `public/assets/team/` (founder/author headshots) | **Static import** | `src/lib/static-images.ts` (or a direct `@public/...` import in the section) |
| `public/assets/blog/<slug>/` | **Dimensions manifest** | run `pnpm manifest` |
| `public/assets/case-studies/<slug>/` | **Dimensions manifest** | run `pnpm manifest` |
| SVGs (icons, badges), `public/assets/meta/` OG images, CSS `url()` decor | none | just place the file |

If you're unsure where an image is used, grep for the current filename:
`grep -rn "<current-file-stem>" src/`.

## Replacing an existing image (same slot)

Easiest case — keep the existing filename so nothing else changes:

1. Convert the new image to the same format the slot uses (usually `.webp`;
   keep transparency for logos). Match aspect ratio closely to avoid reflow.
2. Overwrite the file in its `public/assets/<category>/` folder, same name.
3. If it's a **blog/case-study** image and the dimensions changed, run
   `pnpm manifest` to refresh `src/lib/image-dimensions.json`.
4. Static-import images need no further step when the filename is unchanged
   (the import already points at it) — but if dimensions changed drastically,
   double-check the call site's `width`/`sizes` props still make sense.

## Adding a NEW image (new filename / new slot)

### Static-import folders (screenshots, logos, customers, photos, team)
1. Place the file, e.g. `public/assets/screenshots/new-feature.webp`.
2. In `src/lib/static-images.ts`, add an import at the top (alphabetical within
   its group) and a map entry (alphabetical within its group):
   ```ts
   import newFeature from "@public/assets/screenshots/new-feature.webp";
   // …then in the byPath map:
   "/assets/screenshots/new-feature.webp": newFeature,
   ```
3. Reference it from a component via the resolver, not a raw string:
   - screenshots: `screenshot("new-feature")` (stem) — see `src/lib/screenshots.ts`
   - anything else: `staticImage("/assets/logos/new-co.webp")`
   `OptimizedImage` then gets a `StaticImageData` with build-time dimensions.

### Blog / case-study folders
1. Place the file under `public/assets/blog/<slug>/` or
   `public/assets/case-studies/<slug>/`.
2. Reference it by its `/assets/...` string (that's how MDX/CMS images work).
3. Run `pnpm manifest` to add its dimensions to
   `src/lib/image-dimensions.json` (the script scans only those two folders).

### SVGs / OG images / decor
Just place the file and reference its path. No registration. (Remember: badges
live in `public/assets/badges/`, OG share images in `public/assets/meta/`.)

## Call-site width/sizes are load-bearing

`OptimizedImage` uses the `width`/`sizes` props at each call site to build the
responsive srcset. If you change an image's shape, sanity-check that the call
site's props still fit, or the new image may render too small/large. Don't strip
existing `width`/`sizes`/`fetchPriority` props when swapping a `src`.

## No Webflow CDN (Rule 5)

Never point an image at `cdn.prod.website-files.com` or any Webflow URL.
Download the asset into `public/assets/...` and reference the local copy.
Verify: `grep -rl "cdn.prod.website-files.com" src/`.

## Verify

- `pnpm build` must pass (a missing static import or bad path fails the build —
  that's the wiring catching the mistake). Never build while `pnpm start` runs.
- For a quick visual check, run the dev server (`/start`) and look at the page.
- Confirm the rendered `<img>` has a real `srcset` (optimized), not a bare
  unoptimized fallback — if it fell back, the manifest/registration step was
  missed.

## ⚠️ Required: report

End with a short report:

- **Which file** changed/added and **where it renders**.
- **Wiring done** — static-import entry added, or `pnpm manifest` run, or
  neither needed (SVG/OG).
- **Placeholder?** — if you reused an existing image as a stand-in, say so and
  name the file to replace.
- **Shape mismatch** — if the new image's aspect ratio differs from the old and
  the layout may shift, flag it.
