import { CtaSection } from "@/components/cta-section";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { IntegrationsHero } from "./integrations-hero";
import { IntegrationsComplianceBadges } from "./integrations-compliance-badges";

/**
 * Faithful React port of the Webflow https://www.mycroft.io/integrations page. DOM + classes mirror
 * the original 1:1; global styling is in webflow-shared.css, page CSS
 * in integrations.css. Ported from Webflow by the Webflow Cloner agent.
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
