import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PrivacyHeader } from "./privacy-header";
import { PrivacyPolicyBody } from "./privacy-policy-body";

/**
 * /privacy page. Global styling is in webflow-shared.css.
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
