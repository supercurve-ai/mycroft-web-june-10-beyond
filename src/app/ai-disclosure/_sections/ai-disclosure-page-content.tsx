import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { AiDisclosureHeader } from "./ai-disclosure-header";
import { AiDisclosureBody } from "./ai-disclosure-body";

/**
 * AI Disclosures page. Global styling is in webflow-shared.css.
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
