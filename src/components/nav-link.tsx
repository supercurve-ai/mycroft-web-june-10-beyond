"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

/** Link that marks itself as the current page (Webflow's `w--current` styling). */
export function NavLink({ href, className, ...rest }: ComponentProps<typeof Link>) {
  const current = usePathname() === href;
  return (
    <Link
      href={href}
      aria-current={current ? "page" : undefined}
      className={current ? `${className} w--current` : className}
      {...rest}
    />
  );
}
