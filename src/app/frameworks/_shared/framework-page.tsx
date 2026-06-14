import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";
import { ButtonLarge } from "@/components/button-large";
import { FaqItem } from "@/components/accordion";
import { ProductFeatureRow } from "@/components/product-feature-row";
import { CtaSection } from "@/components/cta-section";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { UnlockFrameworksSection } from "@/components/unlock-frameworks-section";
import { WebflowInteractions } from "@/components/webflow-interactions";
import { OptimizedImage } from "@/components/optimized-image";
import { JsonLd } from "@/components/json-ld";
import { pageSchema } from "@/lib/structured-data";
import { screenshot } from "@/lib/screenshots";
import { staticImage } from "@/lib/static-images";

/**
 * Shared template for the /frameworks/* pages. All nine framework pages render
 * the same five Webflow sections (hero + "why it matters", platform solutions,
 * features grid, testimonial, FAQ) and differ only in content, which lives in
 * each route's content.tsx as a FrameworkPageData object. The DOM + class names
 * still mirror the original Webflow pages 1:1.
 */

/** A solutions-card image: /assets/<base>.webp with -p-500/-p-800/-p-1080 renditions. */
export interface SolutionImage {
  base: string;
  sizes: string;
  width?: number;
}

export interface Testimonial {
  /** color-variant class on the slanted "Client Testimonial" label */
  labelTint: string;
  /** color-variant class on the triangle + quote box ("" for the default) */
  boxTint: string;
  /** color-variant class on the portrait container ("" for the default) */
  imgTint: string;
  img: { src: string; sizes: string };
  quote: string;
  name: string;
  title: string;
  logo: { src: string; width?: number };
}

export interface FrameworkPageData {
  meta: { title: string; description: string; image: string; path: string };
  hero: {
    title: ReactNode;
    dek: ReactNode;
    badge: { src: string; alt: string };
    whyTitle: ReactNode;
    whyDek: ReactNode;
    features: { icon: string; title: string; copy: ReactNode }[];
  };
  solutions: {
    heading: ReactNode;
    dek: ReactNode;
    cards: { title: string; copy: string; img: SolutionImage }[];
  };
  grid: {
    heading: ReactNode;
    dek: ReactNode;
    tiles: { title: string; copy: ReactNode; nodeId?: string; oddLastChild?: boolean }[];
  };
  testimonial: Testimonial;
  unlock: { blurb: ReactNode; dials: { href: string; label: string; lottie: string }[] };
  faq: { dek: ReactNode; items: { question: ReactNode; answer: ReactNode }[] };
  ctaVariant: "fireplace" | "lamp";
}

export function frameworkMetadata(d: FrameworkPageData): Metadata {
  return {
    title: d.meta.title,
    description: d.meta.description,
    openGraph: {
      title: d.meta.title,
      description: d.meta.description,
      type: "website",
      images: [d.meta.image],
    },
    twitter: {
      card: "summary_large_image",
      title: d.meta.title,
      description: d.meta.description,
      images: [d.meta.image],
    },
  };
}

const padX =
  "pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)";

const EASE = "cubic-bezier(0.165,0.84,0.44,1)";

/** The captured IX2 scroll-reveal initial state, animated by WebflowInteractions. */
function reveal(x: number, y: number, delayMs: number): CSSProperties {
  return {
    willChange: "opacity, transform",
    opacity: "0",
    transform: `translate3d(${x}px, ${y}px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
    transformStyle: "preserve-3d",
    "--wf-op-dur": "1000ms",
    "--wf-op-delay": `${delayMs}ms`,
    "--wf-op-ease": EASE,
    "--wf-tr-dur": "1000ms",
    "--wf-tr-delay": `${delayMs}ms`,
    "--wf-tr-ease": EASE,
  } as CSSProperties;
}

function Triangle() {
  return (
    <svg version="1.1" baseProfile="basic" id="Triangle" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 34 38" xmlSpace="preserve">
      <path fill="currentColor" d="M0,0l34,38H0V0z"></path>
    </svg>
  );
}

/** Section 1: hero with the framework badge + dark "why it matters" band. */
function HeroSection({ d }: { d: FrameworkPageData }) {
  return (
    <section id="fw-hero" className="section-hero white_background">
      <div className={padX}>
        <div className="w-full max-w-300 ml-auto mr-auto">
          <div className="container-flex fw_hero">
            <div className="container-flex vertical fw_hero_left">
              <div className="eyebrow-label-medium">
                <div className="eyebrow-medium color_rg">
                  Compliance
                </div>
              </div>
              <div className="hero-copy hero_padding_med">
                <h1 className="h3_v2 color_rg">{d.hero.title}</h1>
                <div className="text-dek-m">{d.hero.dek}</div>
              </div>
              <div className="w-full pt-(--sizing--rem--1-25rem) max-tablet:pt-(--sizing--rem--1rem) max-landscape:pt-(--sizing--rem--0-75rem) max-portrait:pt-(--sizing--rem--0-5rem)">
                <div className="container-flex center_mobile">
                  <ButtonLarge href="/demo" shine>
                    Book a demo
                  </ButtonLarge>
                </div>
              </div>
            </div>
            <div className="fw-hero-circle">
              {/* LCP element on framework pages: load it eagerly with a high
                  priority hint so it isn't deferred behind the hero JS. */}
              <OptimizedImage src={d.hero.badge.src} fetchPriority="high" alt={d.hero.badge.alt} className="fw-hero-badge-img" style={{"willChange": "transform", "transform": "translate3d(8px, 8px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d"}} />
              <div className="fw-hero-dots" style={{"willChange": "transform", "transform": "translate3d(-4px, -4px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", "transformStyle": "preserve-3d"}}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="split-background">
        <div className={padX}>
          <div className="container-xl compliance_features">
            <div className="w-full max-w-200 ml-auto mr-auto max-tablet:w-[80%] max-tablet:max-w-none max-landscape:w-[92%] max-portrait:w-full">
              <div className="w-full pt-(--sizing--rem--6rem) max-tablet:pt-(--sizing--rem--5rem) max-landscape:pt-(--sizing--rem--3-5rem) max-portrait:pt-(--sizing--rem--2-5rem)">
                <div className="w-full pb-(--sizing--rem--2-5rem) max-tablet:pb-(--sizing--rem--2rem) max-landscape:pb-(--sizing--rem--1-5rem) max-portrait:pb-(--sizing--rem--1rem)">
                  <div className="container-flex vertical center">
                    <div className="w-full pb-(--sizing--rem--1-75rem) max-tablet:pb-(--sizing--rem--1-5rem) max-landscape:pb-(--sizing--rem--1rem) max-portrait:pb-(--sizing--rem--0-75rem)">
                      <div className="container-flex vertical center text_center">
                        <h3 className="h3_v2 color_white">{d.hero.whyTitle}</h3>
                        <div className="w-full pt-(--sizing--rem--1-25rem) max-tablet:pt-(--sizing--rem--1rem) max-landscape:pt-(--sizing--rem--0-75rem) max-portrait:pt-(--sizing--rem--0-5rem)">
                          <div className="text-dek-m color_40eg">{d.hero.whyDek}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-300 ml-auto mr-auto">
              <div className="w-layout-grid features-3up frameworks">
                {d.hero.features.map((feature, i) => (
                  <div key={i} className="feature-item frameworks wf-reveal" style={reveal(100, 0, 50 + i * 100)}>
                    <OptimizedImage src={feature.icon} loading="lazy" width="38" height="38" alt="" className="feature-icon" />
                    <div className="container-flex vertical center text_center">
                      <div className="h6 color_mint">{feature.title}</div>
                      <div className="w-full pt-(--sizing--rem--0-75rem) max-tablet:pt-[.65rem] max-portrait:pt-[.4rem]">
                        <div className="body-text-small color_mint smaller">{feature.copy}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full pb-(--sizing--rem--1-75rem) max-tablet:pb-(--sizing--rem--1-5rem) max-landscape:pb-(--sizing--rem--1rem) max-portrait:pb-(--sizing--rem--0-75rem)">
                <div className="container-flex vertical center">
                  <ButtonLarge href="/demo" shine>
                    Book a demo
                  </ButtonLarge>
                </div>
              </div>
            </div>
          </div>
          <div className="btm-tab narrower">
            <div className="shape-triangle color_rg flipped mirrored smaller_mobile w-embed">
              <Triangle />
            </div>
            <div className="tab-filler color_rg"></div>
            <div className="shape-triangle color_rg flipped smaller_mobile w-embed">
              <Triangle />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-background fw_grid"></div>
      <div className="hero-background cs_noise"></div>
    </section>
  );
}

const SOLUTION_IDS = ["app-security", "threat-management", "agentic-ai"];

/** Section 2: alternating platform-solution cards. */
function SolutionsSection({ d }: { d: FrameworkPageData }) {
  return (
    <section id="fw-features" className="section_v2 tint_60eg overflow_hidden">
      <div className={padX}>
        <div className="w-full max-w-156 ml-auto mr-auto max-tablet:w-[80%] max-tablet:max-w-128 max-landscape:w-[92%] max-portrait:w-full">
          <div className="w-full pt-(--sizing--rem--6rem) max-tablet:pt-(--sizing--rem--5rem) max-landscape:pt-(--sizing--rem--3-5rem) max-portrait:pt-(--sizing--rem--2-5rem)">
            <div className="container-flex vertical">
              <div className="eyebrow-label-small product">
                <div className="eyebrow-small color_rg">
                  Features
                </div>
              </div>
              <h2 className="h2_v2 color_rg text_center">{d.solutions.heading}</h2>
              <div className="w-full pt-(--sizing--rem--1-25rem) max-tablet:pt-(--sizing--rem--1rem) max-landscape:pt-(--sizing--rem--0-75rem) max-portrait:pt-(--sizing--rem--0-5rem)">
                <div className="text-dek-l text_center">{d.solutions.dek}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-300 ml-auto mr-auto">
          <div className="w-full pt-(--sizing--rem--4-5rem) max-tablet:pt-(--sizing--rem--3-5rem) max-landscape:pt-(--sizing--rem--2-5rem) max-portrait:pt-(--sizing--rem--1-5rem)">
            <div className="w-full pb-(--sizing--rem--6rem) max-tablet:pb-(--sizing--rem--5rem) max-landscape:pb-(--sizing--rem--3-5rem) max-portrait:pb-(--sizing--rem--2-5rem)">
              <div className="product-container">
                {d.solutions.cards.map((card, i) => (
                  <ProductFeatureRow
                    key={i}
                    id={SOLUTION_IDS[i]}
                    index={i}
                    count={d.solutions.cards.length}
                    title={card.title}
                    copy={card.copy}
                    media={
                      <OptimizedImage src={screenshot(card.img.base)} loading="lazy" width={card.img.width} sizes={card.img.sizes} alt="" className="fw-features-img" />
                    }
                    cta={{ label: "Book a demo", href: "/demo" }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Section 3: the "additional features" tile grid. */
function FeaturesGridSection({ d }: { d: FrameworkPageData }) {
  return (
    <section className="section_v2 tint_60eg overflow_hidden">
      <div className={padX}>
        <div className="w-full max-w-200 ml-auto mr-auto max-tablet:w-[80%] max-tablet:max-w-none max-landscape:w-[92%] max-portrait:w-full">
          <div className="container-flex vertical center text_center gap_xs">
            <h3 className="h3_v2 color_rg">{d.grid.heading}</h3>
            <div className="text-dek-s max_44rem">{d.grid.dek}</div>
          </div>
        </div>
        <div className="w-full max-w-300 ml-auto mr-auto">
          <div style={reveal(0, 100, 150)} className="w-layout-grid fw-features-grid wf-reveal">
            {d.grid.tiles.map((tile, i) => (
              <div key={i} id={tile.nodeId} className={tile.oddLastChild ? "fw-grid-tile odd_last_child" : "fw-grid-tile"}>
                <h6 className="h6 color_mint">{tile.title}</h6>
                <div className="body-text-small color_mint">{tile.copy}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Section 4: the client-testimonial pullquote. */
function TestimonialSection({ t }: { t: Testimonial }) {
  const tinted = (base: string) => (t.boxTint ? `${base} ${t.boxTint}` : base);
  return (
    <section id="Testimonial" className="section_v2 split_background _60eg_smoke">
      <div className={padX}>
        <div className="w-full max-w-300 ml-auto mr-auto">
          <div className="pullquote-container">
            <div className="container-flex align-top">
              <div className={`slant-label pullquote ${t.labelTint}`}>
                <div className="eyebrow-large whitespace-nowrap max-portrait:whitespace-nowrap">
                  Client Testimonial
                </div>
              </div>
              <div className={`${tinted("shape-triangle")} w-embed`}>
                <Triangle />
              </div>
            </div>
            <div className={tinted("pullquote-content")}>
              <div className="container-flex pullquote_container">
                <div className={t.imgTint ? `pullquote-img-container ${t.imgTint}` : "pullquote-img-container"}>
                  <OptimizedImage width="215" loading="lazy" alt="" src={staticImage(t.img.src)} sizes={t.img.sizes} className="pullquote-img" />
                </div>
                <div className="container-flex pullquote_right">
                  <div className="pullquote-text hanging_quote">
                    “
                  </div>
                  <div className="container-flex vertical">
                    <div className="pullquote-text">{t.quote}</div>
                    <div className="pullquote-name">{t.name}</div>
                    <div className="pullquote-title">{t.title}</div>
                    <OptimizedImage width={t.logo.width} loading="lazy" alt="" src={staticImage(t.logo.src)} />
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

/** Section 5: the FAQ accordion. */
function FaqSection({ d }: { d: FrameworkPageData }) {
  return (
    <section className="section_v2 color_smoke">
      <div className={padX}>
        <div className="w-full max-w-240 ml-auto mr-auto max-tablet:w-[90%] max-tablet:max-w-none max-landscape:w-full max-portrait:w-full">
          <div className="w-full pt-(--sizing--rem--4-5rem) max-tablet:pt-(--sizing--rem--3-5rem) max-landscape:pt-(--sizing--rem--2-5rem) max-portrait:pt-(--sizing--rem--1-5rem)">
            <div className="w-full pb-(--sizing--rem--6rem) max-tablet:pb-(--sizing--rem--5rem) max-landscape:pb-(--sizing--rem--3-5rem) max-portrait:pb-(--sizing--rem--2-5rem)">
              <OptimizedImage src="/assets/icons/faq-notchlabel-desktop.svg" loading="lazy" alt="" className="faq-notch-desktop" />
              <OptimizedImage src="/assets/icons/faq-notchlabel-mobile.svg" loading="lazy" alt="" className="faq-notch-mobile" />
              <div className="container-flex faq_container">
                <div className="faq-hed-flex">
                  <h3 className="h3_v2 color_white">
                    Frequently asked questions
                  </h3>
                  <div className="text-dek-l text_40eg">{d.faq.dek}</div>
                </div>
                {d.faq.items.map((item, i) => (
                  <FaqItem key={i} question={item.question} first={i === 0} last={i === d.faq.items.length - 1}>
                    {item.answer}
                  </FaqItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** WebPage + SoftwareApplication + FAQPage + Review schema, built from the page's content. */
function frameworkSchema(d: FrameworkPageData) {
  return pageSchema({
    name: d.meta.title,
    description: d.meta.description,
    path: d.meta.path,
    appName: "Mycroft Risk Operations Center",
    featureList: [
      ...d.solutions.cards.map((c) => c.title),
      ...d.grid.tiles.map((t) => t.title),
    ],
    faqs: d.faq.items,
    review: {
      author: d.testimonial.name,
      jobTitle: d.testimonial.title,
      body: d.testimonial.quote.replace(/[”"]\s*$/u, "").trim(),
    },
  });
}

export function FrameworkPage({ data: d }: { data: FrameworkPageData }) {
  return (
    <>
      <JsonLd data={frameworkSchema(d)} />
      <div className="page-wrapper u-minh-100vh color_rg">
        <div className="styles__global-embed-code w-embed"></div>
        <SiteNav />
        <main id="main" className="page-content">
          <HeroSection d={d} />
          <SolutionsSection d={d} />
          <FeaturesGridSection d={d} />
          <TestimonialSection t={d.testimonial} />
          <UnlockFrameworksSection blurb={d.unlock.blurb} dials={d.unlock.dials} />
          <FaqSection d={d} />
          <CtaSection variant={d.ctaVariant} />
        </main>
        <SiteFooter />
      </div>
      <WebflowInteractions />
    </>
  );
}
