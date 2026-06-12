/** Testimonial section of /pricing. Ported from Webflow by the Webflow Cloner agent. */
export function PricingTestimonial() {
  return (
    <section id="testimonial" className="section_v2 split_background _40earlgrey_rg">
      <div className="page-padding-2">
        <div className="w-full max-w-300 ml-auto mr-auto">
          <div className="pullquote-container">
            <div className="container-flex align-top">
              <div className="slant-label pullquote lavender">
                <div className="eyebrow-large whitespace-nowrap max-portrait:whitespace-nowrap">
                  Client Testimonial
                </div>
              </div>
              <div className="shape-triangle w-embed">
                <svg version="1.1" baseProfile="basic" id="Triangle" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 34 38" xmlSpace="preserve">
                  <path fill="currentColor" d="M0,0l34,38H0V0z"></path>
                </svg>
              </div>
            </div>
            <div className="pullquote-content">
              <div className="container-flex pullquote_container">
                <div className="pullquote-img-container">
                  <img width="215" sizes="215px" alt="" src="/assets/customers/jorge-cropped-mono-img.webp" loading="lazy" srcSet="/assets/customers/jorge-cropped-mono-img-p-500.webp 500w, /assets/customers/jorge-cropped-mono-img.webp 600w" className="pullquote-img" />
                </div>
                <div className="container-flex pullquote_right">
                  <div className="pullquote-text hanging_quote">
                    “
                  </div>
                  <div className="container-flex vertical">
                    <div className="pullquote-text">
                      With Mycroft, they have a deep expertise in security, which is not a feature but a core foundation of their platform.”
                    </div>
                    <div className="pullquote-name">
                      Jorge Ferreiro
                    </div>
                    <div className="pullquote-title">
                      CEO of Smashsend
                    </div>
                    <img loading="lazy" src="/assets/logos/smashsend-logo-mono.svg" alt="" />
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
