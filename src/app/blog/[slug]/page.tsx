import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogSlugs, getBlogSource, getBlogMeta } from "@/lib/blog";
import { renderMdx } from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx-components";
import { SiteNav } from "@/app/_shared/SiteNav";
import { SiteFooter } from "@/app/_shared/SiteFooter";
import { CtaSection } from "@/app/_shared/CtaSection";

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = getBlogMeta(slug);
  return { title: meta.title, description: meta.excerpt,
    openGraph: { title: meta.title, description: meta.excerpt,
      images: meta.coverImage ? [meta.coverImage] : undefined },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.excerpt,
      images: meta.coverImage ? [meta.coverImage] : undefined } };
}

/** "2026-05-05" → "May 5, 2026" (how Webflow rendered post dates). */
function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getBlogSlugs().includes(slug)) notFound();
  const { frontmatter, content } = await renderMdx(getBlogSource(slug), mdxComponents);
  const fm = frontmatter as {
    title?: string; excerpt?: string; date?: string; author?: string;
    authorImage?: string; readingTime?: string; coverImage?: string;
  };
  return (
    <>
      <SiteNav />
      <main id="main" className="page-content">
        <section className="section_v2 earl40">
          <div className="page-padding">
            <div className="container-large">
              <div className="container-flex blog">
                <div className="blog-container">
                  <div className="blog-header-container">
                    <div className="blog-breadcrumb">
                      <div className="u-mb-3">
                        <Link href="/resources" className="breadcrumb-container w-inline-block">
                          <div className="body-text-medium">← All resources</div>
                        </Link>
                      </div>
                      <div className="u-mb-1">
                        <h1 className="h3_v2">{fm.title}</h1>
                      </div>
                      {fm.excerpt ? (
                        <div className="u-mb-2">
                          <div className="text-dek-l">{fm.excerpt}</div>
                        </div>
                      ) : null}
                      {fm.author ? (
                        <div className="blog-card-author">
                          {fm.authorImage ? (
                            <img src={fm.authorImage} loading="lazy" alt={fm.author} className="blog-author-picture" />
                          ) : null}
                          <div className="blog-author-info">
                            <div className="body-text-medium is-semi-bold">{fm.author}</div>
                            <div className="blog-card-details">
                              {fm.date ? <div className="body-text-medium">{formatDate(fm.date)}</div> : null}
                              {fm.date && fm.readingTime ? <div className="blog-info-dot"></div> : null}
                              {fm.readingTime ? (
                                <div className="inline-embed w-embed">
                                  <div className="body-text-medium">{fm.readingTime}</div>
                                </div>
                              ) : null}
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  {fm.coverImage ? (
                    <div className="blog-image-container">
                      <img src={fm.coverImage} loading="lazy" alt={fm.title ?? ""} sizes="100vw" className="blog-main-image" />
                    </div>
                  ) : null}
                  <div className="blog-article-container">
                    <div className="rich-text-v2 w-richtext">{content}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CtaSection variant="fireplace" />
      <SiteFooter />
    </>
  );
}
