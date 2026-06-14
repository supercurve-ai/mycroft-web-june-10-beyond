import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowTextLink } from "@/components/arrow-text-link";

export interface ProductFeatureRowProps {
  /** anchor id on the <section> (kept 1:1 with the original Webflow DOM) */
  id?: string;
  /** 0-based position; odd rows swap to media-left ("even-child") */
  index: number;
  /** total rows, so the final one drops its divider ("last-child") */
  count: number;
  title: ReactNode;
  copy: ReactNode;
  /** inner content of .product-feature-img — a lottie player or a screenshot */
  media: ReactNode;
  /** the arrow text-link; omit href when the whole card is itself a link */
  cta: { label: string; href?: string };
  /** when set, the whole card links here (the /product overview → subpages) */
  href?: string;
}

/**
 * One alternating "platform feature" card: a text column and a media column
 * that slide in from opposite sides as you scroll. This is Webflow IX2
 * a-50 / a-51 ("product-col-left" x −100→0, "product-col-right" x +100→0) — a
 * SCROLLING_IN_VIEW scrub that reverses on scroll-up (opacity over 0–15%, slide
 * over 0–25%), wired by WebflowInteractions through the .wf-scrub data-attrs
 * below.
 *
 * Shared by the /product overview ("5-in-1 platform": lottie media, each card a
 * link to its subpage) and every /frameworks/* "platform solutions" section
 * (screenshot media, a "Book a demo" link) so the animation lives in one place.
 * The DOM + class names mirror the original Webflow markup 1:1.
 */
export function ProductFeatureRow({
  id,
  index,
  count,
  title,
  copy,
  media,
  cta,
  href,
}: ProductFeatureRowProps) {
  const swapped = index % 2 === 1; // odd rows: media left, text right
  const last = index === count - 1;
  const textX = swapped ? 100 : -100;
  const text = (
    <div
      className={swapped ? "product-text text-right wf-scrub" : "product-text wf-scrub"}
      data-wf-scrub="0,15"
      data-wf-scrub-move="0,25"
      data-wf-scrub-from={`x,${textX}px,0`}
      style={{ opacity: "0", transform: `translate3d(${textX}px, 0px, 0px)` }}
    >
      <h4 className="h4_v2 color_rg">{title}</h4>
      <div className="body-text-medium">{copy}</div>
      <ArrowTextLink href={cta.href}>{cta.label}</ArrowTextLink>
    </div>
  );

  const mediaCol = (
    <div
      className={swapped ? "product-feature-img img-left wf-scrub" : "product-feature-img wf-scrub"}
      data-wf-scrub="0,15"
      data-wf-scrub-move="0,25"
      data-wf-scrub-from={`x,${-textX}px,0`}
      style={{ opacity: "0", transform: `translate3d(${-textX}px, 0px, 0px)` }}
    >
      {media}
    </div>
  );

  const body = swapped ? (
    <>
      {mediaCol}
      {text}
    </>
  ) : (
    <>
      {text}
      {mediaCol}
    </>
  );
  
  return (
    <section
      id={id}
      className={`product-feature${swapped ? " even-child" : ""}${last ? " last-child" : ""}`}
    >
      {href ? (
        <Link
          href={href}
          className={`product-feature link_block${swapped ? " even-child" : ""} w-inline-block`}
        >
          {body}
        </Link>
      ) : (
        body
      )}
    </section>
  );
}
