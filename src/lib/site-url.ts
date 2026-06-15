/**
 * The canonical origin of THIS deployment — the single source of truth for
 * the site's own URL, used for canonicals, the sitemap, robots.txt, JSON-LD,
 * and any in-page links back to the main Mycroft site.
 *
 * Set NEXT_PUBLIC_SITE_URL per environment so these resolve correctly:
 *   - production:      https://www.mycroft.io (the default below)
 *   - staging:         the staging domain
 *   - Vercel previews: the branch's preview URL
 *
 * NOTE: this is only the main marketing site's origin. Mycroft's other
 * subdomains (app., trust., status., h., try.) are separate apps with fixed
 * URLs — link to those directly, never through this constant.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mycroft.io";
