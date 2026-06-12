import { CtaSection } from "@/app/_shared/CtaSection";
import { SiteNav } from "../../_shared/SiteNav";
import { SiteFooter } from "../../_shared/SiteFooter";
import { PricingHero } from "./PricingHero";
import { PricingPlans } from "./PricingPlans";
import { PricingTestimonial } from "./PricingTestimonial";
import { PricingComplianceBadges } from "./PricingComplianceBadges";
import { PricingFeatureGrid } from "./PricingFeatureGrid";

/**
 * Faithful React port of the Webflow https://www.mycroft.io/pricing page. DOM + classes mirror
 * the original 1:1; global styling is in webflow-shared.css, page CSS
 * in pricing.css. Ported from Webflow by the Webflow Cloner agent.
 */
export function PricingPageContent() {
  return (
    <div className="page-wrapper u-minh-100vh">
      <div className="styles__global-embed-code w-embed"></div>
      <SiteNav />
      <main id="main" className="page-content">
        <PricingHero />
        <PricingPlans />
        <PricingTestimonial />
        <PricingComplianceBadges />
        <PricingFeatureGrid />
        <CtaSection variant="fireplace" />
      </main>
      <SiteFooter />
    </div>
  );
}
