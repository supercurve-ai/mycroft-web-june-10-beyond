import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const DIR = path.join(process.cwd(), "src/content/product");

export type ProductMeta = {
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

/** All product slugs (filenames without .mdx). */
export function getProductSlugs(): string[] {
  if (!fs.existsSync(DIR)) return [];
  return fs.readdirSync(DIR).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, ""));
}

/** Raw MDX source (frontmatter + body) for a slug. */
export function getProductSource(slug: string): string {
  return fs.readFileSync(path.join(DIR, `${slug}.mdx`), "utf8");
}

/** Just the frontmatter for a slug (listings + metadata). */
export function getProductMeta(slug: string): ProductMeta {
  const { data } = matter(getProductSource(slug));
  return { ...(data as Omit<ProductMeta, "slug">), slug };
}
