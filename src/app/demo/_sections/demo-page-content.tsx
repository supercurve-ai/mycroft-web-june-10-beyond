import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { DemoBookingHero } from "./demo-booking-hero";
import { DemoComplianceBadges } from "./demo-compliance-badges";

/**
 * /demo page. Global styling is in webflow-shared.css.
 */
export function DemoPageContent() {
  return (
    <div className="page-wrapper u-minh-100vh">
      <div className="styles__global-embed-code w-embed"></div>
      <SiteNav />
      <main id="main" className="page-content">
        <DemoBookingHero />
        <DemoComplianceBadges />
      </main>
      <SiteFooter />
    </div>
  );
}
