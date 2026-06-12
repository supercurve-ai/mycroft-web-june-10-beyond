import { CtaSection } from "@/components/CtaSection";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { AboutHero } from "./AboutHero";
import { AboutCompanyAndInvestors } from "./AboutCompanyAndInvestors";
import { AboutLeadership } from "./AboutLeadership";
import { AboutTestimonial } from "./AboutTestimonial";

/**
 * Faithful React port of the Webflow https://www.mycroft.io/about page. DOM + classes mirror
 * the original 1:1; global styling is in webflow-shared.css, page CSS
 * in about.css. Ported from Webflow by the Webflow Cloner agent.
 */
export function AboutPageContent() {
  return (
    <div className="page-wrapper u-minh-100vh">
      <div className="styles__global-embed-code w-embed"></div>
      <SiteNav />
      <main id="main" className="page-content">
        <AboutHero />
        <AboutCompanyAndInvestors />
        <AboutLeadership />
        <AboutTestimonial />
        <CtaSection variant="fireplace" />
      </main>
      <SiteFooter />
    </div>
  );
}
