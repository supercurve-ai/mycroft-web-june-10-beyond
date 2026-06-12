import { CtaSection } from "@/components/cta-section";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PricingHero } from "./pricing-hero";
import { PricingPlans } from "./pricing-plans";
import { PricingTestimonial } from "./pricing-testimonial";
import { PricingComplianceBadges } from "./pricing-compliance-badges";
import { PricingFeatureGrid } from "./pricing-feature-grid";

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
