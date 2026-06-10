import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const DIR = path.join(process.cwd(), "src/content/caseStudies");

export type CaseStudiesMeta = {
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

/** All caseStudies slugs (filenames without .mdx). */
export function getCaseStudiesSlugs(): string[] {
  if (!fs.existsSync(DIR)) return [];
  return fs.readdirSync(DIR).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
}

/** Raw MDX source (frontmatter + body) for a slug. */
export function getCaseStudiesSource(slug: string): string {
  return fs.readFileSync(path.join(DIR, `${slug}.mdx`), "utf8");
}

/** Just the frontmatter for a slug (listings + metadata). */
export function getCaseStudiesMeta(slug: string): CaseStudiesMeta {
  const { data } = matter(getCaseStudiesSource(slug));
  return { ...(data as Omit<CaseStudiesMeta, "slug">), slug };
}
