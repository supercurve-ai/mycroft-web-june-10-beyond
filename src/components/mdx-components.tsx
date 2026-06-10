import type { ComponentProps } from "react";

/** MDX element → component map. Extend to style article elements. */
export const mdxComponents = {
  img: (props: ComponentProps<"img">) => (
     
    <img {...props} alt={props.alt ?? ""} style={{ maxWidth: "100%", height: "auto" }} />
  ),
  // Webflow rich text has no native tables, so its stylesheet won't style
  // them — give GFM tables sane defaults that inherit the site's fonts.
  table: (props: ComponentProps<"table">) => (
    <div style={{ overflowX: "auto", margin: "1.5em 0" }}>
      <table {...props} style={{ width: "100%", borderCollapse: "collapse", ...props.style }} />
    </div>
  ),
  th: (props: ComponentProps<"th">) => (
    <th {...props} style={{ border: "1px solid currentColor", padding: "8px 12px",
      textAlign: "left", ...props.style }} />
  ),
  td: (props: ComponentProps<"td">) => (
    <td {...props} style={{ border: "1px solid currentColor", padding: "8px 12px",
      ...props.style }} />
  ),
};
