import { CtaSection } from "@/components/cta-section";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ResourcesHero } from "./resources-hero";
import { ResourcesFeaturedBlog } from "./resources-featured-blog";
import { ResourcesCaseStudies } from "./resources-case-studies";
import { ResourcesComplianceBadges } from "./resources-compliance-badges";

/**
 * Faithful React port of the Webflow https://www.mycroft.io/resources page. DOM + classes mirror
 * the original 1:1; global styling is in webflow-shared.css, page CSS
 * in resources.css. Ported from Webflow by the Webflow Cloner agent.
 */
export function ResourcesPageContent() {
  return (
    <div className="page-wrapper u-minh-100vh">
      <div className="styles__global-embed-code w-embed"></div>
      <SiteNav />
      <main id="main" className="page-content">
        <ResourcesHero />
        <ResourcesFeaturedBlog />
        <ResourcesCaseStudies />
        <div className="overlap-top">
          <div className="overlap-block"></div>
          <div className="w-full max-w-300 ml-auto mr-auto">
            <div className="overlap-block top_block"></div>
          </div>
          <div className="overlap-block transparent"></div>
        </div>
        <ResourcesComplianceBadges />
        <CtaSection variant="fireplace" />
      </main>
      <SiteFooter />
    </div>
  );
}
