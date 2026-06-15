import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // Vercel/Next image optimization: serve AVIF (then WebP) at high quality so
  // the product UI screenshots stay crisp. OptimizedImage is the only image
  // renderer and pins quality={90}. Replaces Webflow's hand-built `-p-*` srcset
  // variants.
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [90],
  },
  outputFileTracingRoot: __dirname,
  turbopack: { root: __dirname },
  // 301 redirects carried over from the original Webflow site settings.
  async redirects() {
    return [
      { source: "/frameworks/crpa", destination: "/frameworks/cpra", permanent: true },
      { source: "/frameworks/soc2-compliance", destination: "/frameworks/soc2", permanent: true },
      { source: "/staging-pages/third-party-risk-management", destination: "/product/third-party-risk-management", permanent: true },
      { source: "/staging-pages/device-management", destination: "/product/device-management", permanent: true },
      { source: "/staging-pages/app-security", destination: "/product/app-security", permanent: true },
      { source: "/staging-pages/cloud-security", destination: "/product/cloud-security", permanent: true },
      { source: "/staging-pages/audit-and-compliance", destination: "/product/audit-and-compliance", permanent: true },
      { source: "/blog", destination: "/resources", permanent: true },
      // The bare /frameworks index never existed on the original site
      { source: "/frameworks", destination: "/", permanent: true },
      // Trust center lives on the app subdomain.
      { source: "/security", destination: "https://app.mycroft.io/trust/mycroft", permanent: true },
      // The Webflow rules below pointed at staging/archive pages that were
      // never published and don't exist in this clone (/staging-pages/*-v2,
      // /site-archive/old-home, and /resources-v2 -> /blog which itself
      // redirects). Each is remapped to the live equivalent instead.
      { source: "/demo-v2", destination: "/demo", permanent: true },
      { source: "/about-v2", destination: "/about", permanent: true },
      { source: "/integrations-v2", destination: "/integrations", permanent: true },
      { source: "/pricing-v2", destination: "/pricing", permanent: true },
      { source: "/product-v2", destination: "/product", permanent: true },
      { source: "/old-home", destination: "/", permanent: true },
      { source: "/resources-v2", destination: "/resources", permanent: true },
    ];
  },
};

export default nextConfig;
