import type { ComponentProps } from "react";

/**
 * The site's plain `<img>`. Webflow-ported images carry hand-built srcSets
 * pointing at the `-p-500/-p-800/…` variants in `public/assets`, which
 * `next/image` can't reproduce (it generates its own srcset and optimization
 * is disabled in next.config.mjs anyway) — so this wrapper is the one place
 * allowed to render a raw `<img>`, and `@next/next/no-img-element` stays on
 * to keep stray `<img>` tags out of everything else.
 */
export function WfImage(props: ComponentProps<"img">) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img {...props} alt={props.alt ?? ""} />;
}
