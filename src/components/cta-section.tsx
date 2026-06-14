import { ButtonLarge } from "./button-large";
import { OptimizedImage } from "@/components/optimized-image";
import fireplaceGlowhover from "@public/assets/decor/fireplace-glowhover.webp";
import fireplaceHover from "@public/assets/decor/fireplace-hover.webp";
import fireplaceImg from "@public/assets/decor/fireplace.webp";
import lamp2Img from "@public/assets/decor/lamp2.webp";
import glow2aImg from "@public/assets/decor/glow2a.webp";
import chairV4Img from "@public/assets/decor/chair-v4.webp";

/**
 * The closing "Book a demo" banner every page ends with. Two art variants
 * exist in the design: the armchair-by-the-fireplace and the desk lamp.
 */
export function CtaSection({ variant }: { variant: "fireplace" | "lamp" }) {
  return (
    <section id="demo-cta" className="section_v2 color_smoke overflow-hidden">
      <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
        <div className="w-full max-w-300 ml-auto mr-auto">
          <div className="w-full pt-(--sizing--rem--8-5rem) max-tablet:pt-(--sizing--rem--6-5rem) max-landscape:pt-(--sizing--rem--4-5rem) max-portrait:pt-(--sizing--rem--3-5rem)">
            <div className="w-full pb-(--sizing--rem--10rem) max-tablet:pb-(--sizing--rem--8rem) max-landscape:pb-(--sizing--rem--6rem) max-portrait:pb-(--sizing--rem--4-5rem)">
              <div
                className={`container-flex space-between ${
                  variant === "fireplace" ? "cta-custom2" : "cta-custom"
                }`}
              >
                <div className="col-cta-left">
                  <div className="container-flex vertical mobile-center">
                    <h3 className="h3_v2 color_white">
                      Stop managing tools. Start automating security.
                    </h3>
                    <div className="w-full pt-(--sizing--rem--1-25rem) max-tablet:pt-(--sizing--rem--1rem) max-landscape:pt-(--sizing--rem--0-75rem) max-portrait:pt-(--sizing--rem--0-5rem)">
                      <div className="text-dek-m color_40eg">
                        Mycroft is the only platform that performs the full end-to-end delivery of your entire security and compliance requirements in a single platform powered by its AI Agents. Navigate security and compliance challenges without adding headcount.
                      </div>
                    </div>
                  </div>
                  <ButtonLarge href="/demo" shine>
                    Get Started
                  </ButtonLarge>
                </div>
                {variant === "fireplace" ? (
                  <div className="col-cta-right fireplace">
                    <OptimizedImage src={fireplaceGlowhover} loading="lazy" width="497" sizes="(max-width: 767px) 100vw, 497px" alt="" className="cta-fireplace-glow-img" style={{ opacity: "0.5" }} />
                    <OptimizedImage src={fireplaceHover} loading="lazy" width="497" sizes="(max-width: 767px) 100vw, 497px" alt="" className="cta-fireplace-hover-img" style={{ opacity: "0" }} />
                    <OptimizedImage src={fireplaceImg} loading="lazy" width="497" sizes="(max-width: 767px) 100vw, 497px" alt="" />
                  </div>
                ) : (
                  <div className="col-cta-right">
                    <div className="cta-lamp-container">
                      <OptimizedImage src={lamp2Img} loading="lazy" width="240" alt="" className="cta-lamp-img" />
                      <OptimizedImage src={glow2aImg} loading="lazy" width="240" alt="" className="cta-glow2a-img" />
                      <OptimizedImage src={glow2aImg} loading="lazy" width="240" alt="" className="cta-glow2b-img" style={{ opacity: "0" }} />
                    </div>
                    <OptimizedImage src={chairV4Img} loading="lazy" width="398.5" sizes="(max-width: 479px) 100vw, 399px" alt="" className="cta-chair-img" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cta-background smoke-pattern"></div>
    </section>
  );
}
