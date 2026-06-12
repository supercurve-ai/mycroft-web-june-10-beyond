# Site review — recommended improvements

Code review of the Next.js clone (June 11, 2026). Based on reading the source and a
clean production build (`pnpm build` passes; every route prerenders statically; lint
shows one real warning). No live Lighthouse run — re-measure on the deployed preview.

Effort scale: **S** = under an hour, **M** = a half-day, **L** = a day or more.

## Do before launch

| # | Item | Category | Impact | Effort |
|---|------|----------|--------|--------|
| 1 | ~~Verify cookie consent actually gates the trackers~~ **Done June 12, 2026** | Launch / legal | High | M |
| 2 | Add `robots.txt` | SEO | High | S |
| 3 | Set `NEXT_PUBLIC_SITE_URL` in production | Launch | High | S |
| 4 | Add canonical URLs to every page | SEO | Med–High | S |
| 5 | Add a branded 404 page (`not-found.tsx`) | Launch / SEO | Med | S |
| 6 | Stop lazy-loading above-the-fold images | Performance | Med | S |
| 7 | ~~Delete the shadowed `[slug]` routes for frameworks + product~~ **Done June 12, 2026** | Code health | Med | S |
| 8 | Metadata (or noindex) for the bare index pages | SEO | Med | S |
| 9 | Resolve the `/security` page-vs-redirect question | Launch | Med | S |
| 10 | Triage the open bugs already in TASKS.md | Launch | Med | M |
| 11 | Real alt text on content images | Accessibility / SEO | Med | M |
| 12 | Remove dev-only config and repo hygiene items | Code health | Low | S |

## Do after launch

| # | Item | Category | Impact | Effort |
|---|------|----------|--------|--------|
| 13 | Rationalize the third-party script stack | Performance | High | M |
| 14 | Migrate key images to `next/image` (or enable optimization) | Performance | Med–High | L |
| 15 | JSON-LD structured data (Article, Organization) | SEO | Med | M |
| 16 | Skip-to-content link | Accessibility | Med | S |
| 17 | Replace the 632 KB `backgroundnoise.gif` | Performance | Low–Med | S |
| 18 | Reduced-motion pass on marquee/sliders/reveals | Accessibility | Low–Med | M |
| 19 | Lighthouse/axe audit on the live deploy | All | Med | S |
| 20 | Search Console: submit sitemap, watch coverage after cutover | SEO | Med | S |
| 21 | Lint config + small code-health cleanups | Code health | Low | S |
| 22 | Compress the OG/meta images | Performance | Low | S |

---

## Before launch — details

### 1. ~~Verify cookie consent actually gates the trackers~~ — DONE (June 12, 2026)
The suspicion was confirmed by a headless-browser test against a production
build: every tracker fired before consent and even after "Reject All" —
CookieYes's auto-blocking rewrites script tags found in the HTML, and these
are injected by React via `next/script` after hydration, so it never saw them.
**Fixed:** `ThirdPartyScripts.tsx` is now a client component that renders each
tracker's `<Script>` tags only after the matching CookieYes consent category
(analytics / advertisement / functional) is granted, via `getCkyConsent()` +
the `cookieyes_consent_update` event. Includes Google Consent Mode v2
defaults/updates, a reload on consent withdrawal, an always-on
`gtagSendEvent` navigation fallback, and removal of the ungateable GTM
`<noscript>` iframes. Verified headless (prod build, `local.mycroft.io`
hosts alias): fresh GDPR visit = zero tracker requests; Accept All = all
trackers fire without reload; Reject All = still zero after reload.

### 2. Add robots.txt (High / S)
There is no `src/app/robots.ts` or `public/robots.txt`. Add a `robots.ts` that
allows all and points at `${SITE_URL}/sitemap.xml`. Without it, crawlers still
index the site, but the sitemap is never advertised and you can't exclude
anything. (Vercel automatically sends `X-Robots-Tag: noindex` on preview URLs,
so previews stay out of Google either way.)

### 3. Set NEXT_PUBLIC_SITE_URL in production (High / S)
Already called out in CLAUDE.md rule 4. The sitemap, `metadataBase`, and all
OG/Twitter image URLs resolve against it; the fallback is `https://www.mycroft.io`,
which happens to be the launch domain, but set it explicitly in Vercel so a
domain change can't silently break social cards. After deploy, paste a couple of
URLs into a share debugger (opengraph.xyz / LinkedIn Post Inspector) to confirm
absolute image URLs.

### 4. Canonical URLs on every page (Med–High / S)
Only the home page sets `alternates.canonical` (and it hardcodes
`https://www.mycroft.io` instead of deriving from `SITE_URL`). Since
`metadataBase` is set in the root layout, every page can use a relative
canonical: `alternates: { canonical: "/pricing" }` etc. Canonicals protect you
during the cutover (www vs apex, trailing variations, tracking-parameter URLs
from the ad campaigns all collapse to one indexed URL).

### 5. Branded 404 page (Med / S)
No `src/app/not-found.tsx`, so visitors get Next's default unstyled 404 —
jarring, no nav, no way back. A cutover always produces some broken inbound
links, so the 404 will get real traffic in week one. Build one with
`SiteNav` + `SiteFooter` and a link home.

### 6. Stop lazy-loading above-the-fold images (Med / S)
236 of 244 `<img>` tags have `loading="lazy"`, including hero-section images —
a straight Webflow export artifact. Lazy-loading the LCP image is one of the
most common Core Web Vitals penalties. For each page's hero/first-section
image, drop `loading="lazy"` and add `fetchPriority="high"`. The home page hero
is Lottie (already `data-loading="eager"`), so check the product, framework,
about, and pricing heroes in `_sections/`.

### 7. ~~Delete the shadowed [slug] routes~~ — DONE (June 12, 2026)
The `[slug]` folders were already gone; this pass removed the rest: the
orphaned `src/content/frameworks/` and `src/content/product/` collections,
`src/lib/frameworks.ts`, and the unstyled `/frameworks` stub index (now a 301
to `/`, alongside the other legacy redirects in `next.config.mjs`). The blog
and case-studies loaders were merged into a generic `src/lib/content.ts`.
Original finding below.
`src/app/frameworks/[slug]/` and `src/app/product/[slug]/` render generic MDX
articles from `src/content/frameworks/` and `src/content/product/` — but every
one of those slugs is shadowed by a hand-built static folder
(`frameworks/cmmc/`, `product/app-security/`, …), which Next always serves
instead. The dynamic routes build but can never be reached. They're dead code
that doubles the build output for those paths and invites editing the wrong
file (someone updates `cmmc.mdx` and nothing changes on the site). Delete the
two `[slug]` folders and the two content collections, then re-run `pnpm build`.
(Blog and case-studies legitimately use their `[slug]` routes — leave those.)

### 8. Metadata or noindex for bare index pages (Med / S)
Four pages export no metadata: `blog/page.tsx` (harmless — `/blog` 301s to
`/resources`), `case-studies/page.tsx`, `frameworks/page.tsx`, and
`style-guide/page.tsx` (already noindexed via its layout — fine). `/case-studies`
and `/frameworks` are reachable, indexable, untitled, and not in the sitemap.
Decide per page: if they existed on the Webflow site, give them a title,
description, and OG image; if they're clone scaffolding, add
`robots: { index: false }` like the style guide.

### 9. Resolve /security (Med / S)
TASKS.md notes the live `/security` redirects to an app.mycroft page and then a
trust page, but the clone serves `/security` as a page **and** lists it in the
sitemap. Decide before cutover: replicate the redirect (and remove it from the
sitemap) or keep the page. Shipping both behaviors split across old/new sites
will confuse Google during the transition.

### 10. Triage the open TASKS.md bugs (Med / M)
Known and user-visible: the mobile hydration-mismatch warning, mobile scroll
behavior with the nav open, scroll-up animations, the hamburger-icon X artifact,
and the blog-post table formatting. None block launch individually, but the
hydration mismatch is worth root-causing first — hydration errors can make
React throw away and re-render the tree, which would explain other mobile
flakiness and costs mobile performance.

### 11. Real alt text on content images (Med / M)
231 of 236 `alt` attributes are empty strings. Empty alt is *correct* for the
decorative icons and background art, which is most of them — but it's wrong for
meaningful images: blog cover images, case-study photos/logos, team headshots,
product screenshots. Sweep the `_sections` components and MDX frontmatter for
images that carry content and describe them. Helps screen readers and image
SEO. Doesn't have to be 100% before launch — prioritize blog covers and product
screenshots.

### 12. Dev-only config and repo hygiene (Low / S)
Already on the task list, bundled here for completeness:
- Remove `allowedDevOrigins` from `next.config.mjs` (dev-only; harmless in prod
  but it's a list of private IPs that doesn't belong in the shipped repo).
- Remove `bypassPermissions` from `.claude/settings.json`.
- Consider adding security headers in `next.config.mjs` (`X-Content-Type-Options:
  nosniff`, `Referrer-Policy`, `frame-ancestors`). Vercel provides HSTS; the
  rest are a 10-line `headers()` block.

---

## After launch — details

### 13. Rationalize the third-party script stack (High / M)
Ten trackers load on every page: two GTM containers, a direct GA4 + Google Ads
tag (which may duplicate what's inside the GTM containers), Clarity, HubSpot,
PostHog, RB2B, Claydar, Pierview, and PartnerStack. This is by far the largest
performance cost on the site — the page itself is static and fast; the script
stack will dominate mobile Lighthouse scores and main-thread time. With the
site owner: (a) confirm both GTM containers are still needed, (b) check whether
GA4/Ads is already configured inside GTM (if so, drop the direct tags),
(c) drop any vendor no longer in use, (d) move the rest to
`strategy="lazyOnload"` except whatever powers conversion tracking. This also
shrinks the consent surface from item 1.

### 14. Migrate key images to next/image (Med–High / L)
`images: { unoptimized: true }` plus 244 plain `<img>` tags means no AVIF/WebP
conversion (most assets are already WebP, mitigating this), no automatic
sizing, and no `next/image` placeholder behavior. About half the images carry
Webflow-generated `srcSet`, which helps responsive loading. A wholesale
migration fights the clone-fidelity rule (class names + exact DOM), so do it
surgically: start with the heaviest content images (blog covers, case-study
photos) and any page whose LCP is an image. Alternatively, just remove
`unoptimized: true` and migrate per-image over time. Measure first (item 19) —
if LCP is fine, this drops in priority.

### 15. JSON-LD structured data (Med / M)
No `application/ld+json` anywhere. Add `Organization` (+logo) on the home page
and `Article`/`BlogPosting` (headline, datePublished, author, image) on blog
posts — the frontmatter already has every field. Improves rich-result
eligibility; the task list's "compare SEO rich text results to live mycroft.io"
will tell you whether the Webflow site had any to match.

### 16. Skip-to-content link (Med / S)
Pages already render `<main id="main">` (30 of them), but the nav has no
"skip to main content" link, so keyboard users tab through the full menu on
every page. One visually-hidden-until-focused anchor in `SiteNav`. The nav
itself is in good shape otherwise (`aria-expanded`, `aria-haspopup`, Escape
handling already present).

### 17. Replace backgroundnoise.gif (Low–Med / S)
A 632 KB animated GIF used as a CSS background (`webflow-shared.css:4695`) —
the single heaviest asset on the site. Replace with a small looping WebP/AVIF,
a tiled static noise PNG, or an SVG turbulence filter.

### 18. Reduced-motion pass (Low–Med / M)
`CursorGlow` respects `prefers-reduced-motion` (nicely done), but the logo
marquee, sliders, and scroll reveals don't appear to. A global
`@media (prefers-reduced-motion: reduce)` rule pausing the marquee animation
and letting `WebflowInteractions` skip reveal transitions covers WCAG 2.3.3.

### 19. Lighthouse + axe audit on the live deploy (Med / S)
This review is static analysis. Once a preview URL exists, run Lighthouse
(mobile) and axe on the home page, one product page, one framework page, and a
blog post. It will give real LCP/CLS numbers to prioritize items 13–14, and
catch contrast issues this review can't see.

### 20. Search Console after cutover (Med / S)
Verify the domain property (if not already), submit `/sitemap.xml`, and watch
Coverage + Core Web Vitals reports for the first two weeks. This is where
redirect mistakes from the Webflow cutover surface. Also re-test the full
redirect list from `next.config.mjs` on the production domain.

### 21. Lint + small code-health cleanups (Low / S)
- Fix the one real lint warning: missing `slides` dependency in
  `ScrollFeatureSlider.tsx:264` (verify the effect's intent first).
- Add `.claude/**` to ESLint `globalIgnores` — lint currently scans leftover
  worktrees and triple-reports.
- Rename `src/content/caseStudies` → kebab-case for consistency (already on the
  task list along with re-enabling the two disabled lint rules).

### 22. Compress OG/meta images (Low / S)
The `mycroft-meta-img-*.webp` files run 400–530 KB each. They never load on the
page (social scrapers only), so this doesn't affect Core Web Vitals — but
scrapers have timeouts and 1200×630 WebP should be well under 150 KB.
`cwebp -q 75` would do it.

---

## What's already in good shape

Worth saying explicitly: the build is fully static with zero errors; the
Webflow-CDN migration is complete (the only remaining reference is a CSS
comment); fonts are self-hosted WOFF2 with `font-display: swap`; Lottie files
are small (≤124 KB); per-page titles/descriptions/OG images exist on all
indexable pages; the 301 redirect map was carried over thoughtfully; the nav
has real keyboard/ARIA support; and the style guide is correctly noindexed.
The before-launch list above is mostly small, mechanical work — items 1
(consent) and 10 (bug triage) are the only ones needing real investigation.
