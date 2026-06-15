import { isValidElement, type ReactElement, type ReactNode } from "react";
import { SITE_URL } from "./site-url";

export { SITE_URL };

/**
 * Builders for the site's JSON-LD structured data, rendered via <JsonLd>.
 *
 * The original Webflow site emitted JSON-LD too, but most of it was unedited
 * placeholder boilerplate (an Article literally titled "Title of the article",
 * a "Q?"/"A." FAQPage) repeated on every page. The genuinely useful schema only
 * lived on the framework + product-subpage templates (WebPage → SoftwareApplication
 * + a real FAQPage + a Review). These builders reproduce that real schema from the
 * pages' actual content, drop the placeholder junk, and add it where the original
 * lacked it (real FAQPage on /faqs, Article on blog/case-study posts, a site-wide
 * Organization). They also fix two bugs from the original: a leaked
 * "/staging-pages/…" URL and a Webflow-CDN logo URL (now self-hosted).
 */

/** Resolve a site-relative path to an absolute URL (schema fields require absolute). */
function abs(p: string): string {
  if (/^https?:\/\//.test(p)) return p;
  return `${SITE_URL}${p.startsWith("/") ? "" : "/"}${p}`;
}

const LOGO_URL = abs("/assets/brand/mycroft-lockup-green-v2.svg");
const ORG_NAME = "Mycroft Technologies Inc.";
const ORG_WITH_LOGO = {
  "@type": "Organization",
  name: ORG_NAME,
  logo: { "@type": "ImageObject", url: LOGO_URL },
} as const;

/** Flatten an arbitrary React node to plain text for a structured-data field. */
export function nodeToText(node: ReactNode): string {
  return walk(node).replace(/\s+/g, " ").trim();
}

function walk(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(walk).join("");
  if (isValidElement(node)) {
    const el = node as ReactElement<{ children?: ReactNode }>;
    if (el.type === "br") return " ";
    // Render simple presentational components (e.g. the per-page <Soc2/> span)
    // so their text is captured; fall back to children if a component can't be
    // called synchronously.
    if (typeof el.type === "function") {
      try {
        const fn = el.type as (props: unknown) => ReactNode;
        return walk(fn(el.props));
      } catch {
        return walk(el.props.children);
      }
    }
    return walk(el.props.children);
  }
  return "";
}

export type FaqEntry = { question: ReactNode; answer: ReactNode };

/**
 * Collect {question, answer} pairs from a rendered accordion tree by finding any
 * element carrying a `question` prop (covers both <FaqItem> and <AccordionItem>).
 * The accordion components themselves are never executed — only their props are read.
 */
export function extractFaqs(node: ReactNode): FaqEntry[] {
  const out: FaqEntry[] = [];
  const visit = (n: ReactNode): void => {
    if (Array.isArray(n)) {
      n.forEach(visit);
      return;
    }
    if (!isValidElement(n)) return;
    const props = ((n as ReactElement<Record<string, unknown>>).props ?? {}) as {
      question?: ReactNode;
      children?: ReactNode;
    };
    if ("question" in props) {
      out.push({ question: props.question, answer: props.children });
      return; // children is this item's answer — don't descend further
    }
    visit(props.children);
  };
  visit(node);
  return out;
}

function faqPageNode(faqs: FaqEntry[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs
      .map((f) => ({ q: nodeToText(f.question), a: nodeToText(f.answer) }))
      .filter((f) => f.q && f.a)
      .map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
  };
}

/** Site-wide Organization — rendered once in the root layout. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
  };
}

/** Standalone FAQPage (used on /faqs, which is a pure FAQ page). */
export function faqPageSchema(faqs: FaqEntry[]) {
  return { "@context": "https://schema.org", ...faqPageNode(faqs) };
}

export interface PageSchemaInput {
  /** Page title → WebPage.name */
  name: string;
  description?: string;
  /** Site-relative path → WebPage.url */
  path: string;
  /** SoftwareApplication.name */
  appName: string;
  appDescription?: string;
  featureList: string[];
  faqs: FaqEntry[];
  review?: { author: string; jobTitle?: string; body: string; rating?: number };
}

/**
 * The framework/product-subpage schema: a WebPage describing the Mycroft
 * SoftwareApplication, with the page's real FAQ as mainEntity and an optional
 * customer Review.
 */
export function pageSchema(opts: PageSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: opts.name,
    ...(opts.description ? { description: opts.description } : {}),
    url: abs(opts.path),
    inLanguage: "en",
    about: {
      "@type": "SoftwareApplication",
      name: opts.appName,
      applicationCategory: "SecurityApplication",
      ...(opts.appDescription ? { description: opts.appDescription } : {}),
      offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
      featureList: opts.featureList,
      provider: ORG_WITH_LOGO,
    },
    mainEntity: faqPageNode(opts.faqs),
    ...(opts.review
      ? {
          review: {
            "@type": "Review",
            author: {
              "@type": "Person",
              name: opts.review.author,
              ...(opts.review.jobTitle ? { jobTitle: opts.review.jobTitle } : {}),
            },
            reviewBody: opts.review.body,
            reviewRating: {
              "@type": "Rating",
              ratingValue: String(opts.review.rating ?? 5),
              bestRating: "5",
            },
          },
        }
      : {}),
  };
}

/** Article schema for blog posts and case studies. */
export function articleSchema(opts: {
  title: string;
  description?: string;
  path: string;
  datePublished?: string;
  author?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    ...(opts.description ? { description: opts.description } : {}),
    ...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
    ...(opts.image ? { image: abs(opts.image) } : {}),
    author: opts.author
      ? { "@type": "Person", name: opts.author }
      : { "@type": "Organization", name: ORG_NAME },
    publisher: ORG_WITH_LOGO,
    mainEntityOfPage: { "@type": "WebPage", "@id": abs(opts.path) },
    url: abs(opts.path),
  };
}
