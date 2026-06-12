import { CtaSection } from "@/components/cta-section";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { AboutHero } from "./about-hero";
import { AboutCompanyAndInvestors } from "./about-company-and-investors";
import { AboutLeadership } from "./about-leadership";
import { AboutTestimonial } from "./about-testimonial";

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
