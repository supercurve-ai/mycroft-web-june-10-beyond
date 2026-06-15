import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { TermsHeader } from "./terms-header";
import { TermsMsaBody } from "./terms-msa-body";

/**
 * /terms page. Global styling is in webflow-shared.css.
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
