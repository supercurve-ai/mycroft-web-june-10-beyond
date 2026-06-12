import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/content";
import { renderMdx } from "@/lib/mdx";
import { caseStudyMdxComponents } from "@/components/case-study-mdx";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { CtaSection } from "@/components/CtaSection";
import { CaseStudyInteractions } from "./CaseStudyInteractions";

export function generateStaticParams() {
  return caseStudies.getSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = caseStudies.getMeta(slug);
  return { title: meta.title, description: meta.excerpt,
    openGraph: { title: meta.title, description: meta.excerpt,
      images: meta.coverImage ? [meta.coverImage] : undefined },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.excerpt,
      images: meta.coverImage ? [meta.coverImage] : undefined } };
}

/** "/assets/x.webp" → "…-p-500.webp 500w, …" for the variants that exist in public/. */
function buildSrcSet(src: string): string | undefined {
  const ext = path.extname(src);
  const stem = src.slice(0, -ext.length);
  const variants = [500, 800]
    .filter((w) => fs.existsSync(path.join(process.cwd(), "public", `${stem}-p-${w}${ext}`)))
    .map((w) => `${stem}-p-${w}${ext} ${w}w`);
  return variants.length ? [...variants, `${src} 1000w`].join(", ") : undefined;
}

function ShareIcon({ children }: { children: React.ReactNode }) {
  return <div className="cs-share-icon w-embed">{children}</div>;
}

export default async function CaseStudiesPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!caseStudies.getSlugs().includes(slug)) notFound();
  const meta = caseStudies.getMeta(slug);
  const { content } = await renderMdx(caseStudies.getSource(slug), caseStudyMdxComponents);

  // prev/next chain in the original CMS order
  const all = caseStudies.getSlugs().map(caseStudies.getMeta)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  const index = all.findIndex((m) => m.slug === slug);
  const prev = index > 0 ? all[index - 1] : null;
  const next = index < all.length - 1 ? all[index + 1] : null;

  const accent = meta.accent ?? "#beacb9";
  const heroImage = meta.heroImage ?? meta.coverImage;

  return (
    <>
      <SiteNav />
      <main id="main" className="page-content">
        <section id="hero" className="section-hero">
          <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
            <div className="w-full max-w-300 ml-auto mr-auto">
              <div className="container-flex cs_hero">
                <div className="container-flex vertical cs_hero_left">
                  <div className="eyebrow-label-medium">
                    <div className="eyebrow-medium color_rg">Case Study</div>
                  </div>
                  <div className="hero-copy">
                    <h1 className="h3_v2 color_rg">{meta.heroTitle ?? meta.title}</h1>
                  </div>
                </div>
                {heroImage ? (
                  <img src={heroImage} loading="lazy" width="860" alt=""
                    sizes="(max-width: 991px) 100vw, 860px" srcSet={buildSrcSet(heroImage)}
                    className="cs-hero-img" />
                ) : null}
              </div>
            </div>
          </div>
          <div className="hero-background cs_noise"></div>
          <div className="overlap-top">
            <div className="overlap-block tint_60eg"></div>
            <div className="w-full max-w-300 ml-auto mr-auto">
              <div className="overlap-block top_block cs_block"></div>
            </div>
            <div className="overlap-block transparent"></div>
          </div>
        </section>

        <section className="section_v2 tint_60eg">
          <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
            <div className="w-full max-w-300 ml-auto mr-auto">
              <div className="w-full pt-(--sizing--rem--8-5rem) max-tablet:pt-(--sizing--rem--6-5rem) max-landscape:pt-(--sizing--rem--4-5rem) max-portrait:pt-(--sizing--rem--3-5rem)">
                <div className="w-full pb-(--sizing--rem--6rem) max-tablet:pb-(--sizing--rem--5rem) max-landscape:pb-(--sizing--rem--3-5rem) max-portrait:pb-(--sizing--rem--2-5rem)">
                  <div className="container-flex cs_body">
                    <div className="cs-sidebar">
                      <div className="cs-toc-label hidden_mobile">Table of contents</div>
                      <div id="toc" className="cs-toc-list text-[15px]! max-[767px]:text-[13px]! font-(family-name:--type--font-family--secondary-v2)! font-normal! [&_ul]:list-none! [&_ul]:m-0! [&_ul]:p-0! [&_li]:py-[2px]! [&_a]:border-none! [&_a]:[text-decoration-thickness:1px]! [&_a]:bg-transparent! [&_a]:block! [&_a]:pt-[6px]! [&_a]:px-2! [&_a]:pb-2! [&_a]:leading-[125%]! [&_a]:rounded-[4px]! [&_a]:transition-all! [&_a]:duration-300! [&_a]:text-unblack! [&_a:hover]:bg-[#e1eded]! [&_a.active]:bg-[#e1eded]!"></div>
                      <div className="cs-share-widget">
                        <div className="cs-toc-label share">Share</div>
                        <div className="cs-share-btns">
                          <a href="#" className="cs-share-link transition-[background-color_250ms_ease]! active:bg-[#e1eded]! share-copy-btn w-inline-block" aria-label="Copy link">
                            <ShareIcon>
                              <svg id="copy-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <path fill="currentColor" d="M19.7,17.1l1.1,1.1,1.7-1.7c.9-.9,1.5-2.2,1.5-3.5s-.5-2.6-1.5-3.5c-.9-.9-2.2-1.5-3.5-1.5s-2.6.5-3.5,1.5l-1.7,1.7,1.1,1.1,1.7-1.7c.6-.6,1.5-1,2.4-1s1.8.4,2.4,1c.6.6,1,1.5,1,2.4s-.4,1.8-1,2.4l-1.7,1.7h0Z"/>
                                <path fill="currentColor" d="M12.3,14.9l-1.1-1.1s0,0,0,0l-1.7,1.7c-.9.9-1.5,2.2-1.5,3.5s.5,2.6,1.5,3.5c.9.9,2.2,1.5,3.5,1.5s2.6-.5,3.5-1.5l1.7-1.7-1.1-1.1-1.7,1.7c-.6.6-1.5,1-2.4,1s-1.8-.4-2.4-1c-.6-.6-1-1.5-1-2.4s.4-1.8,1-2.4l1.7-1.7Z"/>
                                <path fill="currentColor" d="M13.4,18.6c.2.2.4.2.6.2s.4,0,.6-.2l4.1-4.1c.3-.3.3-.8,0-1.1-.3-.3-.8-.3-1.1,0l-4.1,4.1c-.3.3-.3.8,0,1.1Z"/>
                              </svg>
                            </ShareIcon>
                          </a>
                          <a data-share-linkedin="true" href="#" className="cs-share-link transition-[background-color_250ms_ease]! active:bg-[#e1eded]! w-inline-block" aria-label="Share on LinkedIn">
                            <ShareIcon>
                              <svg id="linkedin-share" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <path fill="currentColor" d="M12.7,22.5v-9.4h-3v9.4h3,0ZM11.2,11.8c1,0,1.7-.7,1.7-1.6,0-.9-.7-1.6-1.7-1.6s-1.7.7-1.7,1.6.7,1.6,1.7,1.6h0ZM14.3,22.5h3v-5.3c0-.3,0-.6,0-.8.2-.6.7-1.1,1.5-1.1s1.5.9,1.5,2.1v5.1h3v-5.4c0-2.9-1.5-4.3-3.5-4.3s-2.3.9-2.7,1.6h0v-1.4h-3c0,.9,0,9.4,0,9.4h0Z"/>
                              </svg>
                            </ShareIcon>
                          </a>
                          <a data-share-twitter="true" href="#" target="_blank" className="cs-share-link transition-[background-color_250ms_ease]! active:bg-[#e1eded]! w-inline-block" aria-label="Share on X">
                            <ShareIcon>
                              <svg id="x-share" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <path fill="currentColor" d="M17.3,15.4l4.9-5.9h-1.2l-4.3,5.1-3.4-5.1h-3.9l5.2,7.8-5.2,6.2h1.2l4.5-5.4,3.6,5.4h3.9l-5.4-8.1h0ZM15.7,17.4l-.5-.8-4.2-6.2h1.8l3.4,5,.5.8,4.4,6.5h-1.8l-3.6-5.3h0Z"/>
                              </svg>
                            </ShareIcon>
                          </a>
                          <a data-share-facebook="true" href="#" className="cs-share-link transition-[background-color_250ms_ease]! active:bg-[#e1eded]! w-inline-block" aria-label="Share on Facebook">
                            <ShareIcon>
                              <svg id="fb-share" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <path fill="currentColor" d="M19.9,16.4l.5-3.1h-3v-2c0-.9.4-1.7,1.8-1.7h1.4v-2.7c-.8-.1-1.6-.2-2.5-.2-2.5,0-4.1,1.5-4.1,4.2v2.4h-2.8v3.1h2.8v7.6h3.4v-7.6h2.5Z"/>
                              </svg>
                            </ShareIcon>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div id="single-article" className="cs-body">{content}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonial" className="section_v2 color_60eg">
          <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
            <div className="w-full max-w-240 ml-auto mr-auto max-tablet:w-[90%] max-tablet:max-w-none max-landscape:w-full max-portrait:w-full">
              <div className="w-full pb-(--sizing--rem--4-5rem) max-tablet:pb-(--sizing--rem--3-5rem) max-landscape:pb-(--sizing--rem--2-5rem) max-portrait:pb-(--sizing--rem--1-5rem)">
                <div className="container-flex vertical">
                  {meta.testimonial ? (
                    <div className="pullquote-container cs_pq">
                      <div className="container-flex align-top">
                        <div style={{ backgroundColor: accent }} className="slant-label pullquote cs_var">
                          <div className="eyebrow-large whitespace-nowrap max-portrait:whitespace-nowrap">Client Testimonial</div>
                        </div>
                        <div style={{ color: accent }} className="shape-triangle cs_var w-embed">
                          <svg version="1.1" baseProfile="basic" id="Triangle" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 34 38" xmlSpace="preserve">
                            <path fill="currentColor" d="M0,0l34,38H0V0z" />
                          </svg>
                        </div>
                        <div className="shape-triangle cs_var"></div>
                      </div>
                      <div style={{ backgroundColor: accent }} className="pullquote-content cs_var">
                        <div className="container-flex pullquote_container cs_var">
                          <div className="pullquote-img-container cs_var">
                            {meta.testimonial.photo ? (
                              <img width="215" loading="lazy" alt={meta.testimonial.name}
                                src={meta.testimonial.photo} className="pullquote-img cs_var" />
                            ) : null}
                          </div>
                          <div className="container-flex pullquote_right cs_var">
                            <div className="pullquote-text-hanging hanging_quote cs_pq">“</div>
                            <div className="container-flex vertical">
                              <div className="pullquote-text cs_pq after:content-['\201d']">{meta.testimonial.quote}</div>
                              <div className="pullquote-name">{meta.testimonial.name}</div>
                              <div className="pullquote-title">{meta.testimonial.role}</div>
                              {meta.testimonial.logo ? (
                                <img width="114" loading="lazy" alt="" src={meta.testimonial.logo} className="pullquote-logo" />
                              ) : null}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  <div className="cs-footer-nav">
                    {prev ? (
                      <div className="cs-btn-wrapper [&_.cs-btn-underline]:transition-transform! [&_.cs-btn-underline]:duration-250! [&_.cs-btn-underline]:ease-[ease]! [&:hover_.cs-btn-underline]:animate-cs-underline-exit!">
                        <a id="prev-post" href={`/case-studies/${prev.slug}`} className="prev-post">&lt; Prior case study</a>
                        <div className="cs-btn-underline"></div>
                      </div>
                    ) : null}
                    {next ? (
                      <div className="cs-btn-wrapper [&_.cs-btn-underline]:transition-transform! [&_.cs-btn-underline]:duration-250! [&_.cs-btn-underline]:ease-[ease]! [&:hover_.cs-btn-underline]:animate-cs-underline-exit!">
                        <a id="next-post" href={`/case-studies/${next.slug}`} className="next-post">Next case study &gt;</a>
                        <div className="cs-btn-underline"></div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaSection variant="lamp" />
      </main>
      <SiteFooter />
      <CaseStudyInteractions />
    </>
  );
}
