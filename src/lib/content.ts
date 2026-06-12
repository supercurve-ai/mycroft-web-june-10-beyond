import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type BlogMeta = {
  title: string;
  slug: string;
  excerpt?: string;
  date?: string;
  author?: string;
  authorRole?: string;
  authorImage?: string;
  category?: string;
  readingTime?: string;
  coverImage?: string;
};

export type CaseStudyMeta = {
  title: string;
  slug: string;
  excerpt?: string;
  date?: string;
  author?: string;
  authorRole?: string;
  category?: string;
  readingTime?: string;
  coverImage?: string;
  heroTitle?: string;
  heroImage?: string;
  /** Position in the prev/next chain (mirrors the original CMS order). */
  order?: number;
  /** Per-study testimonial accent color (slant label, triangle, card bg). */
  accent?: string;
  testimonial?: {
    quote: string;
    name: string;
    role: string;
    photo?: string;
    logo?: string;
  };
};

/** Loader for one `src/content/<collection>` folder of MDX files. */
function collection<Meta extends { slug: string }>(name: string) {
  const dir = path.join(process.cwd(), "src/content", name);

  /** All slugs (filenames without .mdx). */
  function getSlugs(): string[] {
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
  }

  /** Raw MDX source (frontmatter + body) for a slug. */
  function getSource(slug: string): string {
    return fs.readFileSync(path.join(dir, `${slug}.mdx`), "utf8");
  }

  /** Just the frontmatter for a slug (listings + metadata). */
  function getMeta(slug: string): Meta {
    const { data } = matter(getSource(slug));
    return { ...(data as Omit<Meta, "slug">), slug } as Meta;
  }

  return { getSlugs, getSource, getMeta };
}

export const blog = collection<BlogMeta>("blog");
export const caseStudies = collection<CaseStudyMeta>("case-studies");
