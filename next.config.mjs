import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: { unoptimized: true },
  // Pin the tracing root to this app so a parent monorepo lockfile doesn't
  // confuse Next's workspace-root inference.
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
