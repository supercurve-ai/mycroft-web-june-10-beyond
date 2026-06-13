import type { ComponentProps } from "react";
import { WfImage } from "@/components/wf-image";

/** MDX element → component map. Extend to style article elements. */
export const mdxComponents = {
  img: (props: ComponentProps<"img">) => (
     
    <WfImage {...props} alt={props.alt ?? ""} style={{ maxWidth: "100%", height: "auto" }} />
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
