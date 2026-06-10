import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const DIR = path.join(process.cwd(), "src/content/blog");

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

/** All blog slugs (filenames without .mdx). */
export function getBlogSlugs(): string[] {
  if (!fs.existsSync(DIR)) return [];
  return fs.readdirSync(DIR).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
}

/** Raw MDX source (frontmatter + body) for a slug. */
export function getBlogSource(slug: string): string {
  return fs.readFileSync(path.join(DIR, `${slug}.mdx`), "utf8");
}

/** Just the frontmatter for a slug (listings + metadata). */
export function getBlogMeta(slug: string): BlogMeta {
  const { data } = matter(getBlogSource(slug));
  return { ...(data as Omit<BlogMeta, "slug">), slug };
}
