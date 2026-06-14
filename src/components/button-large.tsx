import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { OptimizedImage } from "@/components/optimized-image";

/* Webflow IX2 freezes elements with these inline transforms; the captured
   markup carries them, so the component reproduces them 1:1. */
const IX2_RESET: CSSProperties = {
  transform:
    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
  transformStyle: "preserve-3d",
};
const IX2_SHINE: CSSProperties = {
  transform:
    "translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
  transformStyle: "preserve-3d",
};

type ButtonLargeProps = {
  href: string;
  /** button label */
  children: ReactNode;
  /** dark velvet background: mint text + mint arrow + darker shine */
  velvet?: boolean;
  /** hero placement variant (`btn-large hero`) */
  hero?: boolean;
  /** render the animated shine-sweep div */
  shine?: boolean;
  /** Webflow's `w--current` marker (link points at the current page/anchor) */
  current?: boolean;
  /** for duplicated carousel slides: remove from the a11y tree + tab order */
  decorative?: boolean;
};

/** The site-wide large pill CTA button (`btn-large` in the Webflow styles). */
export function ButtonLarge({
  href,
  children,
  velvet,
  hero,
  shine,
  current,
  decorative,
}: ButtonLargeProps) {
  const className = [
    "btn-large",
    hero && "hero",
    velvet && "color_velvet",
    "w-inline-block",
    current && "w--current",
  ]
    .filter(Boolean)
    .join(" ");
  const hidden = decorative
    ? ({ tabIndex: -1, "aria-hidden": true } as const)
    : {};
  const body = (
    <>
      <div className={velvet ? "btn-text-large color_mint" : "btn-text-large"}>
        {children}
      </div>
      <OptimizedImage
        src={velvet ? "/assets/icons/arrow-icon-mint-v1.svg" : "/assets/icons/arrow-icon-v2.svg"}
        loading="lazy"
        alt=""
        className="btn-arrow-large"
        style={IX2_RESET}
      />
      {shine && (
        <div
          className={velvet ? "hero-btn-shine darker" : "hero-btn-shine"}
          style={IX2_SHINE}
        ></div>
      )}
    </>
  );
  // internal routes go through Next's client-side router; external URLs and
  // same-page anchors stay plain <a> like the captured markup
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} {...hidden}>
        {body}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={className}
      {...(href.startsWith("http") ? { target: "_blank" } : {})}
      {...hidden}
    >
      {body}
    </a>
  );
}
