import { CtaSection } from "@/components/CtaSection";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { FaqsHero } from "./FaqsHero";
import { FaqsAccordion } from "./FaqsAccordion";
import { FaqsComplianceBadges } from "./FaqsComplianceBadges";

/**
 * Faithful React port of the Webflow https://www.mycroft.io/faqs page. DOM + classes mirror
 * the original 1:1; global styling is in webflow-shared.css, page CSS
 * in faqs.css. Ported from Webflow by the Webflow Cloner agent.
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
