import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const DIR = path.join(process.cwd(), "src/content/frameworks");

export type FrameworksMeta = {
  title: string;
  slug: string;
  excerpt?: string;
  date?: string;
  author?: string;
  authorRole?: string;
  category?: string;
  readingTime?: string;
  coverImage?: string;
};

/** All frameworks slugs (filenames without .mdx). */
export function getFrameworksSlugs(): string[] {
  if (!fs.existsSync(DIR)) return [];
  return fs.readdirSync(DIR).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
}

/** Raw MDX source (frontmatter + body) for a slug. */
export function getFrameworksSource(slug: string): string {
  return fs.readFileSync(path.join(DIR, `${slug}.mdx`), "utf8");
}

/** Just the frontmatter for a slug (listings + metadata). */
export function getFrameworksMeta(slug: string): FrameworksMeta {
  const { data } = matter(getFrameworksSource(slug));
  return { ...(data as Omit<FrameworksMeta, "slug">), slug };
}
