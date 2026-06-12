/**
 * The audit-and-compliance "Leverage enterprise security" section: a Webflow
 * autoplay slider (wired by WebflowInteractions). The other product subpages
 * have the shared ProductBenefits 3-up grid in this slot instead.
 */
export function ComplianceCarousel() {
  return (
    <section id="compliance" className="section_v2">
      <div className="section-overlap">
        <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
          <div className="w-full max-w-200 ml-auto mr-auto max-tablet:w-[80%] max-tablet:max-w-none max-landscape:w-[92%] max-portrait:w-full">
            <div className="w-full pt-(--sizing--rem--2-5rem) max-tablet:pt-(--sizing--rem--2rem) max-landscape:pt-(--sizing--rem--1-5rem) max-portrait:pt-(--sizing--rem--1rem)">
              <div className="w-full pb-(--sizing--rem--4-5rem) max-tablet:pb-(--sizing--rem--3-5rem) max-landscape:pb-(--sizing--rem--2-5rem) max-portrait:pb-(--sizing--rem--1-5rem)">
                <div className="container-flex vertical center">
                  <div className="eyebrow-label-small compliance-margins">
                    <div className="eyebrow-small color_mint">
                      Compliance
                    </div>
                  </div>
                  <div className="w-full pb-(--sizing--rem--1-75rem) max-tablet:pb-(--sizing--rem--1-5rem) max-landscape:pb-(--sizing--rem--1rem) max-portrait:pb-(--sizing--rem--0-75rem)">
                    <div className="container-flex vertical">
                      <div className="narrow-text-container">
                        <div className="container-flex vertical center">
                          <h4 className="h4_v2 color_white">
                            Leverage enterprise security
                          </h4>
                          <div className="w-full pt-(--sizing--rem--0-75rem) max-tablet:pt-[.65rem] max-portrait:pt-[.4rem]">
                            <div className="text-dek-s text_40_grey">
                              Mycroft’s integrated platform with its AI Agents is the platform for your entire security and compliance stack, so that you can focus on everything else.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="compliance-slider-container">
                        <div data-delay="4000" data-animation="slide" className="compliance-slider w-slider" data-autoplay="true" data-easing="ease" data-hide-arrows="true" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="8" data-duration="500" data-infinite="true" id="compliance-slider" role="region" aria-label="carousel">
                          <div className="w-embed"></div>
                          <div className="compliance-slider-mask w-slider-mask" id="w-slider-mask-0">
                            <div className="compliance-slide w-slide" aria-label="1 of 3" role="group" style={{"transition": "all", "transform": "translateX(0px)", "opacity": "1"}}>
                              <div className="container-flex vertical center">
                                <img src="/assets/screenshots/compliance-slide1.webp" loading="lazy" width="800" sizes="(max-width: 767px) 100vw, 800px" alt="" srcSet="/assets/screenshots/compliance-slide1-p-500.webp 500w, /assets/screenshots/compliance-slide1-p-800.webp 800w, /assets/screenshots/compliance-slide1-p-1080.webp 1080w, /assets/screenshots/compliance-slide1.webp 1600w" className="compliance-slide-img" />
                                <div className="compliance-slider-text smaller">
                                  Enable enterprise-grade security and compliance for all companies
                                </div>
                              </div>
                            </div>
                            <div className="compliance-slide w-slide" aria-label="2 of 3" role="group" aria-hidden="true" style={{"transition": "all", "transform": "translateX(0px)", "opacity": "1"}}>
                              <div className="container-flex vertical center" aria-hidden="true">
                                <img src="/assets/screenshots/compliance-slide2-x2.webp" loading="lazy" width="800" sizes="(max-width: 767px) 100vw, 800px" alt="" srcSet="/assets/screenshots/compliance-slide2-x2-p-500.webp 500w, /assets/screenshots/compliance-slide2-x2-p-800.webp 800w, /assets/screenshots/compliance-slide2-x2-p-1080.webp 1080w, /assets/screenshots/compliance-slide2-x2.webp 1600w" className="compliance-slide-img" aria-hidden="true" />
                                <div className="compliance-slider-text smaller" aria-hidden="true">
                                  Achieve multiple certifications in the time it usually takes to acquire one
                                </div>
                              </div>
                            </div>
                            <div className="compliance-slide w-slide" aria-label="3 of 3" role="group" aria-hidden="true" style={{"transition": "all", "transform": "translateX(0px)", "opacity": "1"}}>
                              <div className="container-flex vertical center" aria-hidden="true">
                                <img src="/assets/screenshots/compliance-slide3-x2.webp" loading="lazy" width="800" sizes="(max-width: 767px) 100vw, 800px" alt="" srcSet="/assets/screenshots/compliance-slide3-x2-p-500.webp 500w, /assets/screenshots/compliance-slide3-x2-p-800.webp 800w, /assets/screenshots/compliance-slide3-x2-p-1080.webp 1080w, /assets/screenshots/compliance-slide3-x2.webp 1600w" className="compliance-slide-img" aria-hidden="true" />
                                <div className="compliance-slider-text smaller" aria-hidden="true">
                                  Otherwise annoying audits
                                  <span className="no-break normal_mobile" aria-hidden="true">
                                    become effortless
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div aria-live="off" aria-atomic="true" className="w-slider-aria-label" data-wf-ignore=""></div>
                          </div>
                          <div className="w-slider-nav w-round [&_.w-slider-dot]:size-4! [&_.w-slider-dot]:rounded-full! [&_.w-slider-dot]:bg-transparent! [&_.w-slider-dot]:border! [&_.w-slider-dot]:border-solid! [&_.w-slider-dot]:border-(--color-mint)! [&_.w-slider-dot]:transition-[background-color_250ms_ease,border-color_250ms_ease]! [&_.w-slider-dot]:my-0! [&_.w-slider-dot.w-active]:bg-(--color-mint)! [&_.w-slider-dot.w-active]:border-(--color-mint)!">
                            <div className="w-slider-dot w-active" data-wf-ignore="" aria-label="Show slide 1 of 3" aria-pressed="true" role="button" tabIndex={0} style={{"marginLeft": "8px", "marginRight": "8px"}}></div>
                            <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 2 of 3" aria-pressed="false" role="button" tabIndex={-1} style={{"marginLeft": "8px", "marginRight": "8px"}}></div>
                            <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 3 of 3" aria-pressed="false" role="button" tabIndex={-1} style={{"marginLeft": "8px", "marginRight": "8px"}}></div>
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
      </div>
    </section>
  );
}
