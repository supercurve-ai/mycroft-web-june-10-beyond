import type { ReactNode } from "react";
import { createElement } from "react";
import Script from "next/script";
import { mdxComponents } from "./mdx-components";

/**
 * One titled block of a case study ("About …", "The Challenge", …).
 * Mirrors the original Webflow markup: sections with a label get the
 * eyebrow + heading wrapper, the intro "About" section is heading-only.
 */
function Section({
  id,
  label,
  heading,
  children,
}: {
  id: string;
  label?: string;
  heading: string;
  children: ReactNode;
}) {
  const h2 = <h2 className="h4_v2 color_unblack">{heading}</h2>;
  return (
    <section id={id} className="cs-subsection">
      {label ? (
        <div className="cs-sub-hed">
          <div className="eyebrow-label-small cs-label">
            <div className="eyebrow-small color_charcoal">{label}</div>
          </div>
          {h2}
        </div>
      ) : (
        h2
      )}
      <div className="cs-richtext w-richtext [&_blockquote_p]:mb-0! [&_blockquote_p]:text-inherit! [&_blockquote_p]:[font-size:inherit]! [&_blockquote_p]:leading-[inherit]! [&_blockquote_p]:tracking-[inherit]! [&_blockquote_p]:[font-weight:inherit]!">{children}</div>
    </section>
  );
}

/** Wistia video embed (the original page embeds these in the rich text). */
function Wistia({ mediaId, aspect = "1.7777777777777777" }: { mediaId: string; aspect?: string }) {
  return (
    <div className="w-embed w-script">
      <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
      <Script src={`https://fast.wistia.com/embed/${mediaId}.js`} strategy="afterInteractive" type="module" />
      <style>{`wistia-player[media-id='${mediaId}']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }`}</style>
      {/* custom element — not in JSX.IntrinsicElements */}
      {createElement("wistia-player", { "media-id": mediaId, aspect })}
    </div>
  );
}

export const caseStudyMdxComponents = { ...mdxComponents, Section, Wistia };
