import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { DemoBookingHero } from "./demo-booking-hero";
import { DemoComplianceBadges } from "./demo-compliance-badges";

/**
 * Faithful React port of the Webflow https://www.mycroft.io/demo page. DOM + classes mirror
 * the original 1:1; global styling is in webflow-shared.css, page CSS
 * in demo.css. Ported from Webflow by the Webflow Cloner agent.
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
