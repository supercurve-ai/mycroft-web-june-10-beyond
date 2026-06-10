import { compile, run } from "@mdx-js/mdx";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";

type Components = Record<string, unknown>;

/**
 * Compile an MDX string and render it with the *app's own* React runtime (avoids
 * the dev/prod runtime mismatch that breaks prebuilt MDX libraries on React 19).
 * Returns parsed frontmatter + the rendered content element.
 */
export async function renderMdx(source: string, components: Components) {
  const { content: body, data } = matter(source);
  const development = process.env.NODE_ENV !== "production";

  const code = String(
    await compile(body, { outputFormat: "function-body", development, remarkPlugins: [remarkGfm] }),
  );

  const runtime = development
    ? await import("react/jsx-dev-runtime")
    : await import("react/jsx-runtime");

  const { default: MDXContent } = await run(code, {
    ...(runtime as Record<string, unknown>),
    baseUrl: import.meta.url,
  } as Parameters<typeof run>[1]);

  return { frontmatter: data, content: <MDXContent components={components as never} /> };
}
