import Link from "next/link";
import type { ReactNode } from "react";

/** Small underlined text link with the inline arrow svg (`text-link link_embed`). */
export function ArrowTextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-link link_embed w-inline-block"
      style={{ alignItems: "center" }}
    >
      <div className="body-text-small color_aubergine text-500 link_underline">
        {children}
      </div>
      <img
        src="/assets/arrow-icon-small-aubergine.svg"
        alt=""
        className="arrow-icon-small"
      />
    </Link>
  );
}
