import { CtaSection } from "@/components/cta-section";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { FaqsHero } from "./faqs-hero";
import { FaqsAccordion } from "./faqs-accordion";
import { FaqsComplianceBadges } from "./faqs-compliance-badges";

/**
 * /faqs page. Global styling is in webflow-shared.css.
 */
export function FaqsPageContent() {
  return (
    <div className="page-wrapper u-minh-100vh">
      <div className="styles__global-embed-code w-embed"></div>
      <SiteNav />
      <main id="main" className="page-content">
        <FaqsHero />
        <FaqsAccordion />
        <div className="overlap-top">
          <div className="overlap-block"></div>
          <div className="w-full max-w-300 ml-auto mr-auto">
            <div className="overlap-block top_block"></div>
          </div>
          <div className="overlap-block transparent"></div>
        </div>
        <FaqsComplianceBadges />
        <CtaSection variant="fireplace" />
      </main>
      <SiteFooter />
    </div>
  );
}
