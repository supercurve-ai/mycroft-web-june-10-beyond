import type { CSSProperties, ReactNode } from "react";
import { WfImage } from "@/components/wf-image";

/**
 * One tile of the "Skip the security grind" grid on /pricing.
 *
 * Reveal animation reproduces the original IX2 action lists a-65..a-68
 * ("fade-up-in 1–4"): initial state y=50px / opacity 0, then on scroll into
 * view y→0 (350ms inQuad) + fade to 1 (350ms ease), with per-tile delays of
 * 0/250/500/750ms. Runs via the shared `.wf-reveal` mechanism, which (like
 * the original's main/medium-only media queries) is disabled on ≤767px.
 */
export function FeatureTileSmall({
  id,
  delay,
  eyebrow,
  imageBase,
  icon,
  title,
  body,
  smallLabel = false,
}: {
  /** Webflow grid-node id (only the first tile has one). */
  id?: string;
  /** Stagger delay in ms (0/250/500/750 on the original). */
  delay: number;
  eyebrow: string;
  /** Asset basename under /assets, e.g. "mycroft-features1-v2". */
  imageBase: string;
  /** Icon path under /assets. */
  icon: string;
  title: ReactNode;
  body: ReactNode;
  /** Tiles 1–2 use the `feature-small-tile-label` variant on the original. */
  smallLabel?: boolean;
}) {
  const revealStyle = {
    transform:
      "translate3d(0px, 50px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
    transformStyle: "preserve-3d",
    opacity: 0,
    "--wf-op-dur": "350ms",
    "--wf-op-delay": `${delay}ms`,
    "--wf-op-ease": "ease",
    "--wf-tr-dur": "350ms",
    "--wf-tr-delay": `${delay}ms`,
    "--wf-tr-ease": "cubic-bezier(0.55,0.085,0.68,0.53)",
  } as CSSProperties;

  return (
    <div id={id} className="feature-tile-small-container wf-reveal" style={revealStyle}>
      <div className="container-flex">
        <div className="slant-label-small">
          <div className="eyebrow-small small_feature">
            {eyebrow}
          </div>
        </div>
        <WfImage src="/assets/icons/triangle-shape.svg" loading="lazy" alt="" className="triangle-shape small_feature" />
      </div>
      <div className="feature-tile-content-small">
        <WfImage
          src={`/assets/screenshots/${imageBase}.webp`}
          loading="lazy"
          width="512"
          sizes="(max-width: 479px) 100vw, 512px"
          alt=""
          srcSet={`/assets/screenshots/${imageBase}-p-500.webp 500w, /assets/screenshots/${imageBase}-p-800.webp 800w, /assets/screenshots/${imageBase}.webp 1024w`}
          className="feature-tile-img"
        />
        <div className={smallLabel ? "feature-small-tile-label" : "feature-tile-label"}>
          <WfImage
            src={icon}
            loading="lazy"
            alt=""
            className={smallLabel ? "feature-tile-icon small_feature" : "feature-tile-icon"}
          />
          <h6 className="h6 small_feature">
            {title}
          </h6>
        </div>
        <div className="body-text-large small_feature">
          {body}
          <br />
        </div>
      </div>
    </div>
  );
}
