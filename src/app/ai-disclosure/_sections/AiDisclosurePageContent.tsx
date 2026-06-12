import { SiteNav } from "../../_shared/SiteNav";
import { SiteFooter } from "../../_shared/SiteFooter";
import { AiDisclosureHeader } from "./AiDisclosureHeader";
import { AiDisclosureBody } from "./AiDisclosureBody";

/**
 * Faithful React port of the Webflow https://mycroft.io/ai-disclosure page. DOM + classes mirror
 * the original 1:1; global styling is in webflow-shared.css, page CSS
 * in ai-disclosure.css. Ported from Webflow by the Webflow Cloner agent.
 */
export function AiDisclosurePageContent() {
  return (
    <div className="page-wrapper u-minh-100vh">
      <div className="styles__global-embed-code w-embed"></div>
      <SiteNav />
      <main id="main" className="page-main nav_v2">
        <AiDisclosureHeader />
        <AiDisclosureBody />
        <SiteFooter />
      </main>
    </div>
  );
}
