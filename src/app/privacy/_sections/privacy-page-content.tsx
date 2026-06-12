import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PrivacyHeader } from "./privacy-header";
import { PrivacyPolicyBody } from "./privacy-policy-body";

/**
 * Faithful React port of the Webflow https://www.mycroft.io/privacy page. DOM + classes mirror
 * the original 1:1; global styling is in webflow-shared.css, page CSS
 * in privacy.css. Ported from Webflow by the Webflow Cloner agent.
 */
export function PrivacyPageContent() {
  return (
    <div className="page-wrapper u-minh-100vh">
      <div className="styles__global-embed-code w-embed"></div>
      <SiteNav />
      <main id="main" className="page-main nav_v2">
        <PrivacyHeader />
        <PrivacyPolicyBody />
        <SiteFooter />
      </main>
    </div>
  );
}
