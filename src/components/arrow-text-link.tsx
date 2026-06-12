import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Small underlined text link with the inline arrow svg (`text-link link_embed`).
 * Omit `href` when the component sits inside a parent link (e.g. a whole-card
 * `<Link>`) — it then renders a plain div so anchors don't nest.
 */
export function ArrowTextLink({
  href,
  children,
}: {
  href?: string;
  children: ReactNode;
}) {
  const inner = (
    <>
      <div className="body-text-small color_aubergine text-500 link_underline">
        {children}
      </div>
      <img
        src="/assets/icons/arrow-icon-small-aubergine.svg"
        alt=""
        className="arrow-icon-small"
      />
    </>
  );
  if (!href) {
    return <div className="text-link link_embed">{inner}</div>;
  }
  return (
    <Link
      href={href}
      className="text-link link_embed w-inline-block"
      style={{ alignItems: "center" }}
    >
      {inner}
    </Link>
  );
}
