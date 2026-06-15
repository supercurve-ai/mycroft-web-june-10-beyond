import { OptimizedImage } from "@/components/optimized-image";
import wgyc1Img from "@public/assets/photos/wgyc-1-no-performative-security.webp";
import wgyc4Img from "@public/assets/photos/wgyc-4-real-experts-always-here.webp";
import featuresImg2 from "@public/assets/screenshots/features-img2.webp";
import featuresImg3 from "@public/assets/screenshots/features-img3.webp";

/** Features section of /home. */
export function HomeFeatures() {
  return (
    <section id="features" className="section_v2 color_sand">
      <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
        <div className="w-full max-w-300 ml-auto mr-auto">
          <div className="w-full pt-(--sizing--rem--10rem) max-tablet:pt-(--sizing--rem--8rem) max-landscape:pt-(--sizing--rem--6rem) max-portrait:pt-(--sizing--rem--4-5rem)">
            <div className="w-full pb-(--sizing--rem--10rem) max-tablet:pb-(--sizing--rem--8rem) max-landscape:pb-(--sizing--rem--6rem) max-portrait:pb-(--sizing--rem--4-5rem)">
              <div className="container-flex space-between features">
                <div className="features-col-left">
                  <div className="feature-padding">
                    <h2 className="h2_v2 color_rg">
                      We&#39;ve got you covered
                    </h2>
                    <div className="w-full pt-(--sizing--rem--1-25rem) max-tablet:pt-(--sizing--rem--1rem) max-landscape:pt-(--sizing--rem--0-75rem) max-portrait:pt-(--sizing--rem--0-5rem)">
                      <div className="text-dek-m">
                        Eliminate the need for multiple solutions. Everything
                        you need is included.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features-col-right">
                  <div className="feature-tile-container">
                    <div className="container-flex">
                      <div className="slant-label">
                        <div className="eyebrow-large text_smoke">
                          PRIVACY & SECURITY
                        </div>
                      </div>
                      <OptimizedImage
                        src="/assets/icons/triangle-shape.svg"
                        loading="lazy"
                        alt=""
                        className="triangle-shape"
                      />
                    </div>
                    <div className="feature-tile-content">

                      <OptimizedImage src={wgyc1Img} loading="lazy" width="512" height="320" sizes="(max-width: 767px) 100vw, 512px" alt="" className="feature-tile-img" />
                      <div className="feature-tile-label">
                        <OptimizedImage
                          src="/assets/icons/crest-icon.svg"
                          loading="lazy"
                          alt=""
                          className="feature-tile-icon"
                        />
                        <h6 className="h6 color_rg">
                          <strong>No performative security</strong>
                        </h6>
                      </div>
                      <div className="w-full pt-(--sizing--rem--1-25rem) max-tablet:pt-(--sizing--rem--1rem) max-landscape:pt-(--sizing--rem--0-75rem) max-portrait:pt-(--sizing--rem--0-5rem)">
                        <div className="body-text-large">
                          No more security theater. Enhance your security and
                          compliance posture to enterprise requirements with all
                          the solutions you need – from your laptops to your
                          policies.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="feature-tile-container wf-scrub"
                    data-wf-scrub="0,20"
                    data-wf-scrub-from="y,15%,0.5"
                    style={{
                      willChange: "opacity, transform",
                      opacity: "0.5",
                      transform: "translate3d(0px, 15%, 0px)",
                    }}
                  >
                    <div className="container-flex">
                      <div className="slant-label">
                        <div className="eyebrow-large text_smoke">
                          ARTIFICIAL INTELLIGENCE
                        </div>
                      </div>
                      <OptimizedImage
                        src="/assets/icons/triangle-shape.svg"
                        loading="lazy"
                        alt=""
                        className="triangle-shape"
                      />
                    </div>
                    <div className="feature-tile-content">
                      <OptimizedImage
                        src={featuresImg2}
                        loading="lazy"
                        width="512"
                        height="320"
                        sizes="(max-width: 767px) 100vw, 512px"
                        alt=""
                        className="feature-tile-img"
                      />
                      <div className="feature-tile-label">
                        <OptimizedImage
                          src="/assets/icons/gear-icon.svg"
                          loading="lazy"
                          alt=""
                          className="feature-tile-icon"
                        />
                        <h6 className="h6 color_rg">Autonomous compliance</h6>
                      </div>
                      <div className="w-full pt-(--sizing--rem--1-25rem) max-tablet:pt-(--sizing--rem--1rem) max-landscape:pt-(--sizing--rem--0-75rem) max-portrait:pt-(--sizing--rem--0-5rem)">
                        <div className="body-text-large">
                          With Mycroft’s AI Agents, your security and compliance
                          programs are managed autonomously — leveraging your
                          integrations to respond, automate and scale
                          seamlessly.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="feature-tile-container wf-scrub"
                    data-wf-scrub="0,20"
                    data-wf-scrub-from="y,15%,0.5"
                    style={{
                      willChange: "opacity, transform",
                      opacity: "0.5",
                      transform: "translate3d(0px, 15%, 0px)",
                    }}
                  >
                    <div className="container-flex">
                      <div className="slant-label">
                        <div className="eyebrow-large text_smoke">
                          MANAGED REMEDIATIONS
                        </div>
                      </div>
                      <OptimizedImage
                        src="/assets/icons/triangle-shape.svg"
                        loading="lazy"
                        alt=""
                        className="triangle-shape"
                      />
                    </div>
                    <div className="feature-tile-content">
                      <OptimizedImage
                        src={featuresImg3}
                        loading="lazy"
                        width="512"
                        height="320"
                        sizes="(max-width: 767px) 100vw, 512px"
                        alt=""
                        className="feature-tile-img"
                      />
                      <div className="feature-tile-label">
                        <OptimizedImage
                          src="/assets/icons/push-icon.svg"
                          loading="lazy"
                          alt=""
                          className="feature-tile-icon"
                        />
                        <h6 className="h6 color_rg">
                          <strong>Time saved, time gained</strong>
                        </h6>
                      </div>
                      <div className="w-full pt-(--sizing--rem--1-25rem) max-tablet:pt-(--sizing--rem--1rem) max-landscape:pt-(--sizing--rem--0-75rem) max-portrait:pt-(--sizing--rem--0-5rem)">
                        <div className="body-text-large">
                          Mycroft contextualizes and can automatically remediate
                          issues on your behalf, allowing you to spend your
                          resources more efficiently.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="feature-tile-container wf-scrub"
                    data-wf-scrub="0,20"
                    data-wf-scrub-from="y,15%,0.5"
                    style={{
                      willChange: "opacity, transform",
                      opacity: "0.5",
                      transform: "translate3d(0px, 15%, 0px)",
                    }}
                  >
                    <div className="container-flex">
                      <div className="slant-label">
                        <div className="eyebrow-large text_smoke">
                          EXPERT-LED SUPPORT
                        </div>
                      </div>
                      <OptimizedImage
                        src="/assets/icons/triangle-shape.svg"
                        loading="lazy"
                        alt=""
                        className="triangle-shape"
                      />
                    </div>
                    <div className="feature-tile-content">
                      <OptimizedImage
                        src={wgyc4Img}
                        loading="lazy"
                        width="512"
                        height="320"
                        sizes="(max-width: 767px) 100vw, 512px"
                        alt=""
                        className="feature-tile-img"
                      />
                      <div className="feature-tile-label">
                        <OptimizedImage
                          src="/assets/icons/star-icon.svg"
                          loading="lazy"
                          alt=""
                          className="feature-tile-icon"
                        />
                        <h6 className="h6 color_rg">
                          Real experts, always here
                        </h6>
                      </div>
                      <div className="w-full pt-(--sizing--rem--1-25rem) max-tablet:pt-(--sizing--rem--1rem) max-landscape:pt-(--sizing--rem--0-75rem) max-portrait:pt-(--sizing--rem--0-5rem)">
                        <div className="body-text-large">
                          Mycroft&#39;s customer success team are made of
                          security and compliance experts, watching your
                          environment 24/7/365, supported by your AI Security
                          and Compliance Officer.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
