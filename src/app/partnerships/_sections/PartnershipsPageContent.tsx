import { ButtonLarge } from "@/components/ButtonLarge";
import { PartnershipsBlogPostCard } from "./PartnershipsBlogPostCard";
import { partnershipsBlogPosts } from "./PartnershipsBlogPostCard.data";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PartnershipsHero } from "./PartnershipsHero";
import { PartnershipsBenefits } from "./PartnershipsBenefits";
import { ScrollFeatureSlider, type ScrollFeatureSlide } from "@/components/ScrollFeatureSlider";

const partnerSlides: ScrollFeatureSlide[] = [
  {
    heading: "MSP partners",
    body: "Partnering with Mycroft positions you at the forefront of the cybersecurity landscape. With our cutting-edge technology and comprehensive suite of security solutions, you can enhance your offerings and deliver unparalleled protection to your clients.",
    image: {
      src: "/assets/photos/msp-partners.webp",
      srcSet:
        "/assets/photos/msp-partners-p-500.webp 500w, /assets/photos/msp-partners-p-800.webp 800w, /assets/photos/msp-partners-p-1080.webp 1080w, /assets/photos/msp-partners.webp 1320w",
      sizes: "(max-width: 479px) 100vw, 676px",
      width: 676,
    },
  },
  {
    heading: "Tech partners",
    body: "Collaborate with leading tech providers and leverage complementary strengths, streamline processes, and innovate faster. Tech partnerships with Mycroft enable seamless integration of diverse tools and platforms.",
    image: {
      src: "/assets/photos/tech-partners.webp",
      srcSet:
        "/assets/photos/tech-partners-p-500.webp 500w, /assets/photos/tech-partners-p-800.webp 800w, /assets/photos/tech-partners-p-1080.webp 1080w, /assets/photos/tech-partners.webp 1320w",
      sizes: "(max-width: 479px) 100vw, 676px",
      width: 676,
    },
  },
  {
    heading: "Auditors",
    body: "Join Mycroft’s network of verified auditors and work with customers that value real compliance and security an exceed industry standards. With Mycroft, you gain a strategic ally committed to safeguarding long-term resilience in an increasingly complex digital landscape.",
    image: {
      src: "/assets/photos/auditors.webp",
      srcSet:
        "/assets/photos/auditors-p-500.webp 500w, /assets/photos/auditors-p-800.webp 800w, /assets/photos/auditors-p-1080.webp 1080w, /assets/photos/auditors.webp 1320w",
      sizes: "(max-width: 479px) 100vw, 676px",
      width: 676,
    },
  },
];

/**
 * Faithful React port of the Webflow https://www.mycroft.io/partnerships page. DOM + classes mirror
 * the original 1:1; global styling is in webflow-shared.css, page CSS
 * in partnerships.css. Ported from Webflow by the Webflow Cloner agent.
 */
export function PartnershipsPageContent() {
  return (
    <div className="page-wrapper u-minh-100vh color_rg">
      <div className="styles__global-embed-code w-embed"></div>
      <SiteNav />
      <main id="main" className="page-content">
        <PartnershipsHero />
        <PartnershipsBenefits />
        <div className="scroll-container-outer">
          <div className="scroll-container-inner">
            <section id="product-features" className="section_v2 split_background rg_40smoke">
              <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
                <div className="container-xl">
                  <div className="w-full pb-(--sizing--rem--4-5rem) max-tablet:pb-(--sizing--rem--3-5rem) max-landscape:pb-(--sizing--rem--2-5rem) max-portrait:pb-(--sizing--rem--1-5rem)">
                    <div className="scroll-slider-outer">
                      <ScrollFeatureSlider id="audit-compliance" slides={partnerSlides}>
                        <ButtonLarge href="#hero" velvet shine current>
                          Talk to our team
                        </ButtonLarge>
                      </ScrollFeatureSlider>
                      <div className="btm-tab">
                        <div className="shape-triangle _75_eg flipped mirrored smaller_mobile w-embed">
                          <svg version="1.1" baseProfile="basic" id="Triangle" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 34 38" xmlSpace="preserve">
                            <path fill="currentColor" d="M0,0l34,38H0V0z"></path>
                          </svg>
                        </div>
                        <div className="tab-filler"></div>
                        <div className="shape-triangle _75_eg flipped smaller_mobile w-embed">
                          <svg version="1.1" baseProfile="basic" id="Triangle" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 34 38" xmlSpace="preserve">
                            <path fill="currentColor" d="M0,0l34,38H0V0z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section id="Features" className="section_v2 color_smoke">
              <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
                <div className="w-full pt-(--sizing--rem--8-5rem) max-tablet:pt-(--sizing--rem--6-5rem) max-landscape:pt-(--sizing--rem--4-5rem) max-portrait:pt-(--sizing--rem--3-5rem)">
                  <div className="w-full max-w-240 ml-auto mr-auto max-tablet:w-[90%] max-tablet:max-w-none max-landscape:w-full max-portrait:w-full">
                    <div className="w-full max-w-184 ml-auto mr-auto max-tablet:w-[80%] max-tablet:max-w-none max-landscape:w-[92%] max-portrait:w-full">
                      <div className="container-flex vertical">
                        <h3 className="h3_v2 color_white text_center">
                          Read the latest insights from our experts
                        </h3>
                        <div className="w-full pt-(--sizing--rem--0-75rem) max-tablet:pt-[.65rem] max-portrait:pt-[.4rem]">
                          <div className="text-dek-s text_40_grey text_center">
                            Stay secure with expert, data-driven resources to strengthen your security knowledge and ensure compliance confidence.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full pt-(--sizing--rem--2-5rem) max-tablet:pt-(--sizing--rem--2rem) max-landscape:pt-(--sizing--rem--1-5rem) max-portrait:pt-(--sizing--rem--1rem)">
                      <div className="w-full pb-(--sizing--rem--6rem) max-tablet:pb-(--sizing--rem--5rem) max-landscape:pb-(--sizing--rem--3-5rem) max-portrait:pb-(--sizing--rem--2-5rem)">
                        <div className="container-flex space-between _3up_blog">
                          <div className="_3up-blog-wrapper w-dyn-list">
                            <div role="list" className="_3up-blog-grid w-dyn-items">
                              {partnershipsBlogPosts.map((item, i) => (
                                <PartnershipsBlogPostCard item={item} key={i} />
                              ))}
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
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
