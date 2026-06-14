// Generates src/lib/image-dimensions.json: intrinsic { w, h } for the raster
// images that reach OptimizedImage as RUNTIME STRINGS — i.e. the .mdx/CMS
// content under public/assets/{blog,case-studies}. next/image needs explicit
// width/height for string srcs, and these paths come from frontmatter/markdown
// at runtime, so they have no static-import site to carry dimensions.
//
// Everything else (screenshots, logos, customers, photos, …) is a STATIC IMPORT
// resolved through src/lib/static-images.ts and must NOT be added here. Decor
// backgrounds (CSS url()) and meta/OG images never reach OptimizedImage, so they
// don't belong here either. Re-run after adding/replacing blog or case-study
// images:  node scripts/build-image-manifest.mjs
import sharp from "sharp";
import { readdirSync, statSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ROOTS = ["public/assets/blog", "public/assets/case-studies"];
const RASTER = /\.(jpe?g|png|webp|gif)$/i;

const files = [];
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full);
    else if (RASTER.test(name)) files.push(full);
  }
}
for (const root of ROOTS) walk(root);

const out = {};
for (const f of files) {
  const meta = await sharp(f).metadata();
  if (!meta.width || !meta.height) {
    console.warn(`skip (no dims): ${f}`);
    continue;
  }
  out["/" + f.replace(/^public\//, "")] = { w: meta.width, h: meta.height };
}

mkdirSync("src/lib", { recursive: true });
const sorted = Object.fromEntries(Object.keys(out).sort().map((k) => [k, out[k]]));
writeFileSync("src/lib/image-dimensions.json", JSON.stringify(sorted, null, 2) + "\n");
console.log(`wrote ${Object.keys(out).length} entries to src/lib/image-dimensions.json`);
