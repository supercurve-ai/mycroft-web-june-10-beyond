import { TrustedBySection } from "@/components/logo-marquee";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ProductOverviewHero } from "./product-overview-hero";
import { ProductComplianceSlider } from "./product-compliance-slider";
import { ProductFeatures } from "./product-features";
import { ProductTestimonial } from "./product-testimonial";

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
