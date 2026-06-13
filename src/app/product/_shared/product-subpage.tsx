import type { ReactNode } from "react";
import { TrustedBySection } from "@/components/logo-marquee";
import { CtaSection } from "@/components/cta-section";
import { ButtonLarge } from "@/components/button-large";
import { ReadNowLink } from "@/components/read-now-link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ScrollFeatureSlider, type ScrollFeatureSlide } from "@/components/scroll-feature-slider";
import { WfImage } from "@/components/wf-image";

/** The 3-up "latest insights" teasers — the same three posts on every product subpage. */
const blogPosts = [
  {
    href: "/blog/cmmc-compliance-platform",
    imgSrc: "/assets/blog/cmmc-compliance-platform/343403.webp",
    imgSrcSet: "/assets/blog/cmmc-compliance-platform/343403-p-500.webp 500w, /assets/blog/cmmc-compliance-platform/343403.webp 720w",
    title: "CMMC compliance platforms: What to look for now that 48 CFR is in effect",
  },
  {
    href: "/blog/third-party-vendor-risk-management",
    imgSrc: "/assets/blog/third-party-vendor-risk-management/third-party-vendor-risk-management-the-complete-guide-and-why-most-programs-still-fail.webp",
    imgSrcSet: "/assets/blog/third-party-vendor-risk-management/third-party-vendor-risk-management-the-complete-guide-and-why-most-programs-still-fail-p-500.webp 500w, /assets/blog/third-party-vendor-risk-management/third-party-vendor-risk-management-the-complete-guide-and-why-most-programs-still-fail-p-800.webp 800w, /assets/blog/third-party-vendor-risk-management/third-party-vendor-risk-management-the-complete-guide-and-why-most-programs-still-fail-p-1080.webp 1080w, /assets/blog/third-party-vendor-risk-management/third-party-vendor-risk-management-the-complete-guide-and-why-most-programs-still-fail-p-1600.webp 1600w, /assets/blog/third-party-vendor-risk-management/third-party-vendor-risk-management-the-complete-guide-and-why-most-programs-still-fail.webp 1952w",
    title: "Third-party vendor risk management: the complete guide (and why most programs still fail)",
  },
  {
    href: "/blog/vendor-risk-management-software",
    imgSrc: "/assets/blog/vendor-risk-management-software/vendor-risk-management-software.webp",
    imgSrcSet: "/assets/blog/vendor-risk-management-software/vendor-risk-management-software-p-500.webp 500w, /assets/blog/vendor-risk-management-software/vendor-risk-management-software-p-800.webp 800w, /assets/blog/vendor-risk-management-software/vendor-risk-management-software-p-1080.webp 1080w, /assets/blog/vendor-risk-management-software/vendor-risk-management-software-p-1600.webp 1600w, /assets/blog/vendor-risk-management-software/vendor-risk-management-software.webp 1952w",
    title: "Vendor risk management software: What to evaluate beyond the feature checklist",
  },
];

export type ProductSubpageContent = {
  /** The page hero — <ProductHero …/> or a page-specific section. */
  hero: ReactNode;
  /** The "why this matters" section — <ProductBenefits …/> or a page-specific section. */
  benefits: ReactNode;
  /** Product-feature slides for the sticky scroll slider. */
  slides: ScrollFeatureSlide[];
  /** The "Platform features" 3-up grid. */
  platform: {
    heading: string;
    dek: ReactNode;
    items: {
      img: { src: string; srcSet: string; width: string; sizes: string };
      title: string;
      body: string;
    }[];
  };
  /** The client-testimonial pullquote. */
  pullquote: {
    /** Color class suffix on the slanted "Client Testimonial" label. */
    labelTheme: string;
    /** Color class suffix on the label triangle + quote body (absent on audit). */
    theme?: string;
    /** Tint class suffix on the headshot container. */
    imgTint?: string;
    img: { src: string; srcSet: string; sizes: string };
    quote: string;
    name: string;
    role: string;
    logo: { src: string; width?: string };
  };
  /** The page's <FaqItem> list. */
  faq: ReactNode;
  ctaVariant: "fireplace" | "lamp";
};

/**
 * Shared layout for the five /product/* subpages. The section markup is the
 * Webflow clone's — identical across the subpages — with the per-page content
 * injected from each page's content.tsx. Pages must mount WebflowInteractions
 * alongside this (sticky slider, FAQ accordions, audit's compliance slider).
 */
export function ProductSubpage(content: ProductSubpageContent) {
  const { pullquote } = content;
  return (
    <div className="page-wrapper u-minh-100vh color_rg">
      <div className="styles__global-embed-code w-embed"></div>
      <SiteNav />
      <main id="main" className="page-content">
        {content.hero}
        <TrustedBySection btm="rg" />
        {content.benefits}
        <div className={`scroll-container-outer${content.slides.length === 2 ? " _2_features" : ""}`}>
          <div className="scroll-container-inner">
            <section id="product-features" className="section_v2 split_background rg_40earlgrey">
              <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
                <div className="container-xl">
                  <div className="w-full pb-(--sizing--rem--4-5rem) max-tablet:pb-(--sizing--rem--3-5rem) max-landscape:pb-(--sizing--rem--2-5rem) max-portrait:pb-(--sizing--rem--1-5rem)">
                    <div className="scroll-slider-outer">
                      <ScrollFeatureSlider id="audit-compliance" slides={content.slides}>
                        <ButtonLarge href="/demo" velvet shine>
                          Book a demo
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
            <section id="platform-features" className="section_v2 tint_40eg">
              <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
                <div className="w-full max-w-300 ml-auto mr-auto">
                  <div className="w-full pt-(--sizing--rem--2-5rem) max-tablet:pt-(--sizing--rem--2rem) max-landscape:pt-(--sizing--rem--1-5rem) max-portrait:pt-(--sizing--rem--1rem)">
                    <div className="w-full pb-(--sizing--rem--6rem) max-tablet:pb-(--sizing--rem--5rem) max-landscape:pb-(--sizing--rem--3-5rem) max-portrait:pb-(--sizing--rem--2-5rem)">
                      <div className="container-flex vertical center">
                        <div className="eyebrow-label-small product">
                          <div className="eyebrow-small color_rg">
                            Platform features
                          </div>
                        </div>
                        <div className="w-full pb-(--sizing--rem--2-5rem) max-tablet:pb-(--sizing--rem--2rem) max-landscape:pb-(--sizing--rem--1-5rem) max-portrait:pb-(--sizing--rem--1rem)">
                          <div className="container-flex vertical center">
                            <div className="w-full max-w-200 ml-auto mr-auto max-tablet:w-[80%] max-tablet:max-w-none max-landscape:w-[92%] max-portrait:w-full">
                              <div className="narrow-text-container">
                                <div className="container-flex vertical center">
                                  <h4 className="h4_v2 color_rg">
                                    {content.platform.heading}
                                  </h4>
                                  <div className="w-full pt-(--sizing--rem--0-75rem) max-tablet:pt-[.65rem] max-portrait:pt-[.4rem]">
                                    <div className="text-dek-m">
                                      {content.platform.dek}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="platform-grid">
                              {content.platform.items.map((item) => (
                                <div className="platform-item" key={item.title}>
                                  <WfImage src={item.img.src} loading="lazy" width={item.img.width} sizes={item.img.sizes} alt="" srcSet={item.img.srcSet} className="platform-img" />
                                  <div className="platform-text">
                                    <h6 className="h6 larger_mobile">
                                      {item.title}
                                    </h6>
                                    <div className="body-text-small">
                                      {item.body}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
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
            </section>
          </div>
        </div>
        <section id="Testimonial" className="section_v2 split_background _40eg_smoke">
          <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
            <div className="w-full max-w-300 ml-auto mr-auto">
              <div className="pullquote-container">
                <div className="container-flex align-top">
                  <div className={`slant-label pullquote ${pullquote.labelTheme}`}>
                    <div className="eyebrow-large whitespace-nowrap max-portrait:whitespace-nowrap">
                      Client Testimonial
                    </div>
                  </div>
                  <div className={`shape-triangle ${pullquote.theme ? `${pullquote.theme} ` : ""}w-embed`}>
                    <svg version="1.1" baseProfile="basic" id="Triangle" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 34 38" xmlSpace="preserve">
                      <path fill="currentColor" d="M0,0l34,38H0V0z"></path>
                    </svg>
                  </div>
                </div>
                <div className={`pullquote-content${pullquote.theme ? ` ${pullquote.theme}` : ""}`}>
                  <div className="container-flex pullquote_container">
                    <div className={`pullquote-img-container${pullquote.imgTint ? ` ${pullquote.imgTint}` : ""}`}>
                      <WfImage width="215" loading="lazy" alt="" src={pullquote.img.src} sizes={pullquote.img.sizes} srcSet={pullquote.img.srcSet} className="pullquote-img" />
                    </div>
                    <div className="container-flex pullquote_right">
                      <div className="pullquote-text hanging_quote">
                        “
                      </div>
                      <div className="container-flex vertical">
                        <div className="pullquote-text">
                          {pullquote.quote}
                        </div>
                        <div className="pullquote-name">
                          {pullquote.name}
                        </div>
                        <div className="pullquote-title">
                          {pullquote.role}
                        </div>
                        <WfImage width={pullquote.logo.width} loading="lazy" src={pullquote.logo.src} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="negative-margin-wrapper reduce_top">
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
                            {blogPosts.map((post) => (
                              <div role="listitem" className="_3up-blog-item w-dyn-item" key={post.href}>
                                <a href={post.href} className="blog-item-link w-inline-block">
                                  <WfImage src={post.imgSrc} loading="lazy" alt="" sizes="100vw" srcSet={post.imgSrcSet} className="_3up-blog-img" />
                                  <div className="body-text-small color_white text_600 larger_mobile">
                                    {post.title}
                                  </div>
                                  <ReadNowLink />
                                </a>
                              </div>
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
        <section className="section_v2 color_smoke">
          <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
            <div className="w-full max-w-240 ml-auto mr-auto max-tablet:w-[90%] max-tablet:max-w-none max-landscape:w-full max-portrait:w-full">
              <div className="w-full pt-(--sizing--rem--4-5rem) max-tablet:pt-(--sizing--rem--3-5rem) max-landscape:pt-(--sizing--rem--2-5rem) max-portrait:pt-(--sizing--rem--1-5rem)">
                <div className="w-full pb-(--sizing--rem--6rem) max-tablet:pb-(--sizing--rem--5rem) max-landscape:pb-(--sizing--rem--3-5rem) max-portrait:pb-(--sizing--rem--2-5rem)">
                  <WfImage src="/assets/icons/faq-notchlabel-desktop.svg" loading="lazy" alt="" className="faq-notch-desktop" />
                  <WfImage src="/assets/icons/faq-notchlabel-mobile.svg" loading="lazy" alt="" className="faq-notch-mobile" />
                  <div className="container-flex faq_container">
                    <h3 className="h3_v2 color_white">
                      Frequently asked questions
                    </h3>
                    {content.faq}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CtaSection variant={content.ctaVariant} />
      </main>
      <SiteFooter />
    </div>
  );
}
