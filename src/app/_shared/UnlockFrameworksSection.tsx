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
        <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
          <div className="w-full pt-(--sizing--rem--8-5rem) max-tablet:pt-(--sizing--rem--6-5rem) max-landscape:pt-(--sizing--rem--4-5rem) max-portrait:pt-(--sizing--rem--3-5rem)">
            <div className="w-full max-w-240 ml-auto mr-auto max-tablet:w-full max-tablet:max-w-none max-landscape:w-full max-portrait:w-full">
              <div className="w-full max-w-184 ml-auto mr-auto max-tablet:w-[80%] max-tablet:max-w-none max-landscape:w-[92%] max-portrait:w-full">
                <div className="container-flex vertical">
                  <h2 className="h2_v2 color_white text_center">
                    Unlock other frameworks
                  </h2>
                  <div className="w-full pt-(--sizing--rem--0-75rem) max-tablet:pt-[.65rem] max-portrait:pt-[.4rem]">
                    <div className="text-dek-m color_40eg text_center">
                      {blurb}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pt-(--sizing--rem--2-5rem) max-tablet:pt-(--sizing--rem--2rem) max-landscape:pt-(--sizing--rem--1-5rem) max-portrait:pt-(--sizing--rem--1rem)">
                <div className="w-full pb-(--sizing--rem--6rem) max-tablet:pb-(--sizing--rem--5rem) max-landscape:pb-(--sizing--rem--3-5rem) max-portrait:pb-(--sizing--rem--2-5rem)">
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
                      <div className="w-full pt-(--sizing--rem--2-5rem) max-tablet:pt-(--sizing--rem--2rem) max-landscape:pt-(--sizing--rem--1-5rem) max-portrait:pt-(--sizing--rem--1rem) justify-center items-center flex">
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
