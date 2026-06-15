import { OptimizedImage } from "@/components/optimized-image";
import adamImg from "@public/assets/customers/adam-cropped-mono-img.webp";

/** Testimonial section of /about. */
export function AboutTestimonial() {
  return (
    <section id="testimonial" className="section_v2 split_background _75rg_smoke">
      <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
        <div className="w-full max-w-300 ml-auto mr-auto">
          <div className="margin-btm pq_custom">
            <div className="pullquote-container">
              <div className="container-flex align-top">
                <div className="slant-label pullquote tint_50bw">
                  <div className="eyebrow-large whitespace-nowrap max-portrait:whitespace-nowrap">
                    Client Testimonial
                  </div>
                </div>
                <div className="shape-triangle tint_50bw w-embed">
                  <svg version="1.1" baseProfile="basic" id="Triangle" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 34 38" xmlSpace="preserve">
                    <path fill="currentColor" d="M0,0l34,38H0V0z"></path>
                  </svg>
                </div>
              </div>
              <div className="pullquote-content tint_50bw">
                <div className="container-flex pullquote_container">
                  <div className="pullquote-img-container tint_75mint">
                    <OptimizedImage width="215" sizes="(max-width: 479px) 100vw, 215px" alt="" src={adamImg} loading="lazy" className="pullquote-img" />
                  </div>
                  <div className="container-flex pullquote_right">
                    <div className="pullquote-text hanging_quote">
                      “
                    </div>
                    <div className="container-flex vertical">
                      <div className="pullquote-text">
                        Mycroft&#39;s 5-in-1 platform seamlessly consolidated our entire security stack, eliminating the need for multiple point solutions and endless checklists.”
                      </div>
                      <div className="pullquote-name">
                        Adam Cohen
                      </div>
                      <div className="pullquote-title">
                        CEO of WEAVE
                      </div>
                      <OptimizedImage width="114" loading="lazy" alt="" src="/assets/logos/weave-logo.svg" />
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
