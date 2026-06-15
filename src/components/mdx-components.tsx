import type { ComponentProps } from "react";
import { OptimizedImage } from "@/components/optimized-image";

/**
 * Rewrite an absolute link to the main Mycroft marketing site into a
 * site-relative one, so links written in MDX content follow whatever host is
 * serving the page (prod, staging, or a Vercel preview) instead of hard-jumping
 * to www.mycroft.io. Other hosts — including Mycroft's separate subdomains
 * (app./trust./status./h./try.) and external sites — are left untouched.
 */
function toSiteRelative(href: string): string {
  const rel = href.replace(/^https?:\/\/(www\.)?mycroft\.io(?![\w.])/i, "");
  if (rel === href) return href; // not the main site — leave it alone
  return rel.startsWith("/") ? rel : `/${rel}`;
}

/** MDX element → component map. Extend to style article elements. */
export const mdxComponents = {
  a: ({ href, ...props }: ComponentProps<"a">) => (
    <a href={typeof href === "string" ? toSiteRelative(href) : href} {...props} />
  ),
  img: ({ src, ...props }: ComponentProps<"img">) => (
    <OptimizedImage
      {...props}
      src={typeof src === "string" ? src : undefined}
      alt={props.alt ?? ""}
      style={{ maxWidth: "100%", height: "auto" }}
    />
  ),
  // GFM pipe tables only need the scroll wrapper; the visual styling lives
  // in tokens.css (.rich-text-v2 table …) so markdown and raw HTML tables
  // in posts look the same.
  table: (props: ComponentProps<"table">) => (
    <div style={{ overflowX: "auto", margin: "1.5em 0" }}>
      <table {...props} />
    </div>
  ),
  // Colored comparison-table symbols (palette tokens from tokens.css).
  // Usage in MDX: <Check />, <Partial />, <Cross />
  Check: () => (
    <span aria-label="Yes" style={{ color: "var(--color-velvet-green)", fontWeight: 700 }}>✓</span>
  ),
  Partial: () => (
    <span aria-label="Partial" style={{ color: "var(--color-smoke)" }}>◐</span>
  ),
  Cross: () => (
    <span aria-label="No" style={{ color: "var(--color-ember)", fontWeight: 700 }}>✗</span>
  ),
};
