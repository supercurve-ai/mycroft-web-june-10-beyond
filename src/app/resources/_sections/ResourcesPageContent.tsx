import { CtaSection } from "@/app/_shared/CtaSection";
import { SiteNav } from "../../_shared/SiteNav";
import { SiteFooter } from "../../_shared/SiteFooter";
import { ResourcesHero } from "./ResourcesHero";
import { ResourcesFeaturedBlog } from "./ResourcesFeaturedBlog";
import { ResourcesCaseStudies } from "./ResourcesCaseStudies";
import { ResourcesComplianceBadges } from "./ResourcesComplianceBadges";

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
