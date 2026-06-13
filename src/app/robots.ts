import type { MetadataRoute } from "next";

/**
 * Mirrors the original site's robots.txt (allow everything + sitemap pointer).
 * Set NEXT_PUBLIC_SITE_URL to the production domain of THIS deployment
 * (defaults to the cloned site's origin).
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mycroft.io";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
