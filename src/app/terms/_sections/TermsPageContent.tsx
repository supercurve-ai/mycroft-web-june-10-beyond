import { SiteNav } from "../../_shared/SiteNav";
import { SiteFooter } from "../../_shared/SiteFooter";
import { TermsHeader } from "./TermsHeader";
import { TermsMsaBody } from "./TermsMsaBody";

/**
 * Faithful React port of the Webflow https://www.mycroft.io/terms page. DOM + classes mirror
 * the original 1:1; global styling is in webflow-shared.css, page CSS
 * in terms.css. Ported from Webflow by the Webflow Cloner agent.
 */
export function TermsPageContent() {
  return (
    <div className="page-wrapper u-minh-100vh">
      <div className="styles__global-embed-code w-embed"></div>
      <SiteNav />
      <main id="main" className="page-main nav_v2">
        <TermsHeader />
        <TermsMsaBody />
        <SiteFooter />
      </main>
    </div>
  );
}
