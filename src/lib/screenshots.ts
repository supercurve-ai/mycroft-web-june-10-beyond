import type { StaticImageData } from "next/image";
import { staticImage } from "@/lib/static-images";

/**
 * Resolve a screenshot reference to its statically-imported object (build-time
 * dimensions, no manifest lookup). Accepts either a base stem
 * ("product-dashboard") — as the framework/pricing call sites pass — or a full
 * "/assets/screenshots/x.webp" path. Delegates to the shared static-image map.
 */
export function screenshot(ref: string): StaticImageData | string {
  return staticImage(ref.startsWith("/") ? ref : `/assets/screenshots/${ref}.webp`);
}
