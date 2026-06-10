import { ButtonLarge } from "./ButtonLarge";

/**
 * The closing "Book a demo" banner every page ends with. Two art variants
 * exist in the design: the armchair-by-the-fireplace and the desk lamp.
 */
export function CtaSection({ variant }: { variant: "fireplace" | "lamp" }) {
  return (
    <section id="demo-cta" className="section_v2 color_smoke overflow-hidden">
      <div className="page-padding">
        <div className="container-large">
          <div className="padding-top xl">
            <div className="padding-btm xxl">
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
                    <div className="padding-top xxs">
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
                    <img src="/assets/fireplace-glowhover.webp" loading="lazy" width="497" sizes="(max-width: 767px) 100vw, 497px" alt="" srcSet="/assets/fireplace-glowhover-p-500.webp 500w, /assets/fireplace-glowhover-p-800.webp 800w, /assets/fireplace-glowhover.webp 994w" className="cta-fireplace-glow-img" style={{ opacity: "0.5" }} />
                    <img src="/assets/fireplace-hover.webp" loading="lazy" width="497" sizes="(max-width: 767px) 100vw, 497px" alt="" srcSet="/assets/fireplace-hover-p-500.webp 500w, /assets/fireplace-hover-p-800.webp 800w, /assets/fireplace-hover.webp 994w" className="cta-fireplace-hover-img" style={{ opacity: "0" }} />
                    <img src="/assets/fireplace.webp" loading="lazy" width="497" sizes="(max-width: 767px) 100vw, 497px" alt="" srcSet="/assets/fireplace-p-500.webp 500w, /assets/fireplace-p-800.webp 800w, /assets/fireplace.webp 994w" />
                  </div>
                ) : (
                  <div className="col-cta-right">
                    <div className="cta-lamp-container">
                      <img src="/assets/lamp2.webp" loading="lazy" width="240" alt="" className="cta-lamp-img" />
                      <img src="/assets/glow2a.webp" loading="lazy" width="240" alt="" className="cta-glow2a-img" />
                      <img src="/assets/glow2a.webp" loading="lazy" width="240" alt="" className="cta-glow2b-img" style={{ opacity: "0" }} />
                    </div>
                    <img src="/assets/chair-v4.webp" loading="lazy" width="398.5" sizes="(max-width: 479px) 100vw, 399px" alt="" srcSet="/assets/chair-v4-p-500.webp 500w, /assets/chair-v4.webp 797w" className="cta-chair-img" />
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
