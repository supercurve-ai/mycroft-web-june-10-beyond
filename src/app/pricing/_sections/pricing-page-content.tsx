import { CtaSection } from "@/components/cta-section";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PricingHero } from "./pricing-hero";
import { PricingPlans } from "./pricing-plans";
import { PricingTestimonial } from "./pricing-testimonial";
import { PricingComplianceBadges } from "./pricing-compliance-badges";
import { PricingFeatureGrid } from "./pricing-feature-grid";

/**
 * /pricing page. Global styling is in webflow-shared.css.
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
