import { WfImage } from "@/components/wf-image";

/** Features section of /home. Ported from Webflow by the Webflow Cloner agent. */
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
                        Eliminate the need for multiple solutions. Everything you need is included.
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
                      <WfImage src="/assets/icons/triangle-shape.svg" loading="lazy" alt="" className="triangle-shape" />
                    </div>
                    <div className="feature-tile-content">
                      <WfImage src="/assets/photos/wgyc-1-no-performative-security.webp" loading="lazy" width="512" height="320" sizes="(max-width: 767px) 100vw, 512px" alt="" srcSet="/assets/photos/wgyc-1-no-performative-security-p-500.webp 500w, /assets/photos/wgyc-1-no-performative-security-p-800.webp 800w, /assets/photos/wgyc-1-no-performative-security-p-1080.webp 1080w, /assets/photos/wgyc-1-no-performative-security.webp 1128w" className="feature-tile-img" />
                      <div className="feature-tile-label">
                        <WfImage src="/assets/icons/crest-icon.svg" loading="lazy" alt="" className="feature-tile-icon" />
                        <h6 className="h6 color_rg">
                          <strong>
                            No performative security
                          </strong>
                        </h6>
                      </div>
                      <div className="w-full pt-(--sizing--rem--1-25rem) max-tablet:pt-(--sizing--rem--1rem) max-landscape:pt-(--sizing--rem--0-75rem) max-portrait:pt-(--sizing--rem--0-5rem)">
                        <div className="body-text-large">
                          No more security theater. Enhance your security and compliance posture to enterprise requirements with all the solutions you need – from your laptops to your policies.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="feature-tile-container wf-reveal" style={{"willChange": "opacity, transform", "opacity": "0.5", "transform": "translate3d(0px, 15%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d", "--wf-op-dur": "1000ms", "--wf-op-delay": "0ms", "--wf-op-ease": "cubic-bezier(0.165,0.84,0.44,1)", "--wf-tr-dur": "1000ms", "--wf-tr-delay": "0ms", "--wf-tr-ease": "cubic-bezier(0.165,0.84,0.44,1)"}}>
                    <div className="container-flex">
                      <div className="slant-label">
                        <div className="eyebrow-large text_smoke">
                          ARTIFICIAL INTELLIGENCE
                        </div>
                      </div>
                      <WfImage src="/assets/icons/triangle-shape.svg" loading="lazy" alt="" className="triangle-shape" />
                    </div>
                    <div className="feature-tile-content">
                      <WfImage src="/assets/screenshots/features-img2.webp" loading="lazy" width="512" height="320" sizes="(max-width: 767px) 100vw, 512px" alt="" srcSet="/assets/screenshots/features-img2-p-500.webp 500w, /assets/screenshots/features-img2-p-800.webp 800w, /assets/screenshots/features-img2-p-1080.webp 1080w, /assets/screenshots/features-img2.webp 1125w" className="feature-tile-img" />
                      <div className="feature-tile-label">
                        <WfImage src="/assets/icons/gear-icon.svg" loading="lazy" alt="" className="feature-tile-icon" />
                        <h6 className="h6 color_rg">
                          Autonomous compliance
                        </h6>
                      </div>
                      <div className="w-full pt-(--sizing--rem--1-25rem) max-tablet:pt-(--sizing--rem--1rem) max-landscape:pt-(--sizing--rem--0-75rem) max-portrait:pt-(--sizing--rem--0-5rem)">
                        <div className="body-text-large">
                          With Mycroft’s AI Agents, your security and compliance programs are managed autonomously — leveraging your integrations to respond, automate and scale seamlessly.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="feature-tile-container wf-reveal" style={{"willChange": "opacity, transform", "opacity": "0.5", "transform": "translate3d(0px, 15%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d", "--wf-op-dur": "1000ms", "--wf-op-delay": "0ms", "--wf-op-ease": "cubic-bezier(0.165,0.84,0.44,1)", "--wf-tr-dur": "1000ms", "--wf-tr-delay": "0ms", "--wf-tr-ease": "cubic-bezier(0.165,0.84,0.44,1)"}}>
                    <div className="container-flex">
                      <div className="slant-label">
                        <div className="eyebrow-large text_smoke">
                          MANAGED REMEDIATIONS
                        </div>
                      </div>
                      <WfImage src="/assets/icons/triangle-shape.svg" loading="lazy" alt="" className="triangle-shape" />
                    </div>
                    <div className="feature-tile-content">
                      <WfImage src="/assets/screenshots/features-img3.webp" loading="lazy" width="512" height="320" sizes="(max-width: 767px) 100vw, 512px" alt="" srcSet="/assets/screenshots/features-img3-p-500.webp 500w, /assets/screenshots/features-img3-p-800.webp 800w, /assets/screenshots/features-img3-p-1080.webp 1080w, /assets/screenshots/features-img3.webp 1128w" className="feature-tile-img" />
                      <div className="feature-tile-label">
                        <WfImage src="/assets/icons/push-icon.svg" loading="lazy" alt="" className="feature-tile-icon" />
                        <h6 className="h6 color_rg">
                          <strong>
                            Time saved, time gained
                          </strong>
                        </h6>
                      </div>
                      <div className="w-full pt-(--sizing--rem--1-25rem) max-tablet:pt-(--sizing--rem--1rem) max-landscape:pt-(--sizing--rem--0-75rem) max-portrait:pt-(--sizing--rem--0-5rem)">
                        <div className="body-text-large">
                          Mycroft contextualizes and can automatically remediate issues on your behalf, allowing you to spend your resources more efficiently.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="feature-tile-container wf-reveal" style={{"willChange": "opacity, transform", "opacity": "0.5", "transform": "translate3d(0px, 15%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d", "--wf-op-dur": "1000ms", "--wf-op-delay": "0ms", "--wf-op-ease": "cubic-bezier(0.165,0.84,0.44,1)", "--wf-tr-dur": "1000ms", "--wf-tr-delay": "0ms", "--wf-tr-ease": "cubic-bezier(0.165,0.84,0.44,1)"}}>
                    <div className="container-flex">
                      <div className="slant-label">
                        <div className="eyebrow-large text_smoke">
                          EXPERT-LED SUPPORT
                        </div>
                      </div>
                      <WfImage src="/assets/icons/triangle-shape.svg" loading="lazy" alt="" className="triangle-shape" />
                    </div>
                    <div className="feature-tile-content">
                      <WfImage src="/assets/photos/wgyc-4-real-experts-always-here.webp" loading="lazy" width="512" height="320" sizes="(max-width: 767px) 100vw, 512px" alt="" srcSet="/assets/photos/wgyc-4-real-experts-always-here-p-500.webp 500w, /assets/photos/wgyc-4-real-experts-always-here-p-800.webp 800w, /assets/photos/wgyc-4-real-experts-always-here-p-1080.webp 1080w, /assets/photos/wgyc-4-real-experts-always-here.webp 1128w" className="feature-tile-img" />
                      <div className="feature-tile-label">
                        <WfImage src="/assets/icons/star-icon.svg" loading="lazy" alt="" className="feature-tile-icon" />
                        <h6 className="h6 color_rg">
                          Real experts, always here
                        </h6>
                      </div>
                      <div className="w-full pt-(--sizing--rem--1-25rem) max-tablet:pt-(--sizing--rem--1rem) max-landscape:pt-(--sizing--rem--0-75rem) max-portrait:pt-(--sizing--rem--0-5rem)">
                        <div className="body-text-large">
                          Mycroft&#39;s customer success team are made of security and compliance experts, watching your environment 24/7/365, supported by your AI Security and Compliance Officer.
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
