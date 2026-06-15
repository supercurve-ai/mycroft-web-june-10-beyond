import { CtaSection } from "@/components/cta-section";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { IntegrationsHero } from "./integrations-hero";
import { IntegrationsComplianceBadges } from "./integrations-compliance-badges";

/**
 * /integrations page. Global styling is in webflow-shared.css.
 */
export function IntegrationsPageContent() {
  return (
    <div className="page-wrapper u-minh-100vh">
      <div className="styles__global-embed-code w-embed"></div>
      <SiteNav />
      <main id="main" className="page-content">
        <IntegrationsHero />
        <IntegrationsComplianceBadges />
        <CtaSection variant="lamp" />
      </main>
      <SiteFooter />
    </div>
  );
}
