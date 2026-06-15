/**
 * Renders one or more JSON-LD structured-data blocks.
 *
 * Server component: the <script type="application/ld+json"> is emitted in the
 * SSR HTML so search crawlers read the schema without executing JS. The cloned
 * Webflow site shipped (mostly placeholder) JSON-LD this way; this replaces it
 * with real, content-driven schema (see src/lib/structured-data.ts).
 */
function serializeJsonLd(item: object): string {
  return JSON.stringify(item).replace(/</g, "\\u003c");
}

export function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(item) }}
        />
      ))}
    </>
  );
}
