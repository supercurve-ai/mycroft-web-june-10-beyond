import type { ReactNode } from "react";
import Link from "next/link";
import { ButtonLarge } from "./ButtonLarge";
import { DotLottiePlayer } from "./DotLottiePlayer";

export type FrameworkDial = {
  href: string;
  /** Framework name shown on the tile; the trailing arrow is added here. */
  label: string;
  /** The compliance-dial lottie for this tile (Compliance-Dial_NN.json). */
  lottie: string;
};

/**
 * The "Unlock other frameworks" section shared by all /frameworks/* pages:
 * three dial tiles linking to other framework pages, each with a
 * compliance-dial lottie that plays once on first scroll-in with the
 * original IX2 stagger (750/1250/1750ms) and then holds its end state — see
 * DotLottiePlayer's playOnView. Followed by a "Book a demo" button. Tiles
 * other than the last carry the vertical divider, matching the captured
 * Webflow markup.
 */
export function UnlockFrameworksSection({ blurb, dials }: { blurb: ReactNode; dials: FrameworkDial[] }) {
  return (
    <div className="negative-margin-wrapper reduce_top">
      <section id="Features" className="section_v2 color_smoke">
        <div className="page-padding">
          <div className="padding-top xl">
            <div className="container-medium tab_mob_100">
              <div className="container-small narrower_desktop">
                <div className="container-flex vertical">
                  <h2 className="h2_v2 color_white text_center">
                    Unlock other frameworks
                  </h2>
                  <div className="padding-top xxxs">
                    <div className="text-dek-m color_40eg text_center">
                      {blurb}
                    </div>
                  </div>
                </div>
              </div>
              <div className="padding-top small">
                <div className="padding-btm large">
                  <div className="container-flex vertical">
                    <div className="w-layout-grid fw-dials-grid">
                      {dials.map((dial, i) => (
                        <Link key={dial.href} href={dial.href} className="fw-tile-link w-inline-block">
                          <div className="fw-dial-tile">
                            {i < dials.length - 1 && <div className="fw-vertical-hr"></div>}
                            <div style={{ opacity: 0 }} className="dial-tile-background"></div>
                            <div style={{ opacity: 0 }} className="dial-tile-stroke"></div>
                            <div data-is-ix2-target="1" className="fw-dial-lottie" data-animation-type="lottie" data-src={dial.lottie} data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-default-duration="0" data-duration="0" data-loading="eager">
                              <DotLottiePlayer src={dial.lottie} loop={false} autoplay={false} width={500} height={500} playOnView={750 + i * 500} />
                            </div>
                            <div className="body-text-small color_white font_600 underline fw_dial">
                              {dial.label} →
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="container-flex vertical center">
                      <div className="padding-top small flex_center">
                        <ButtonLarge href="/demo" shine>
                          Book a demo
                        </ButtonLarge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
