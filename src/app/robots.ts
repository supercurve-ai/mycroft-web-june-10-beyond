import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-url";

/**
 * Mirrors the original site's robots.txt (allow everything + sitemap pointer).
 */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
