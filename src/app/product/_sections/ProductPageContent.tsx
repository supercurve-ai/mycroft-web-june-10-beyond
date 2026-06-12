import { TrustedBySection } from "@/app/_shared/LogoMarquee";
import { SiteNav } from "../../_shared/SiteNav";
import { SiteFooter } from "../../_shared/SiteFooter";
import { ProductOverviewHero } from "./ProductOverviewHero";
import { ProductComplianceSlider } from "./ProductComplianceSlider";
import { ProductFeatures } from "./ProductFeatures";
import { ProductTestimonial } from "./ProductTestimonial";

/**
 * Faithful React port of the Webflow https://www.mycroft.io/product page. DOM + classes mirror
 * the original 1:1; global styling is in webflow-shared.css, page CSS
 * in product.css. Ported from Webflow by the Webflow Cloner agent.
 */
export function ProductPageContent() {
  return (
    <div className="page-wrapper u-minh-100vh">
      <div className="styles__global-embed-code w-embed"></div>
      <SiteNav />
      <main id="main" className="page-content">
        <ProductOverviewHero />
        <ProductComplianceSlider />
        <TrustedBySection btm="earlgrey40" />
        <ProductFeatures />
        <ProductTestimonial />
      </main>
      <SiteFooter />
    </div>
  );
}
