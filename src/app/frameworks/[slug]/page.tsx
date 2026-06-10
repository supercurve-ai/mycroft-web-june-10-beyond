import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getFrameworksSlugs, getFrameworksSource, getFrameworksMeta } from "@/lib/frameworks";
import { renderMdx } from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx-components";
import { SiteNav22 } from "@/app/_shared/SiteNav22";
import { SiteFooter } from "@/app/_shared/SiteFooter";

export function generateStaticParams() {
  return getFrameworksSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const meta = getFrameworksMeta(slug);
  return { title: meta.title, description: meta.excerpt,
    openGraph: { title: meta.title, description: meta.excerpt,
      images: meta.coverImage ? [meta.coverImage] : undefined } };
}

export default async function FrameworksPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getFrameworksSlugs().includes(slug)) notFound();
  const { frontmatter, content } = await renderMdx(getFrameworksSource(slug), mdxComponents);
  const fm = frontmatter as { title?: string; date?: string; author?: string; coverImage?: string };
  return (
    <>
      <SiteNav22 />
      <article className="mdx-article" style={{ maxWidth: 760, margin: "0 auto", padding: "4rem 1.25rem" }}>
        {fm.coverImage ? (
           
          <img src={fm.coverImage} alt={fm.title ?? ""} style={{ width: "100%", borderRadius: 12, marginBottom: 24 }} />
        ) : null}
        <h1>{fm.title}</h1>
        {fm.date ? <p style={{ opacity: 0.6 }}>{fm.date}{fm.author ? ` · ${fm.author}` : ""}</p> : null}
        {/* w-richtext keeps Webflow's own rich-text styling (incl. tables) */}
        <div className="w-richtext">{content}</div>
      </article>
      <SiteFooter />
    </>
  );
}
