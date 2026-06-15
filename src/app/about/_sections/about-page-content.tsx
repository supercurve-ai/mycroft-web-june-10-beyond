import { CtaSection } from "@/components/cta-section";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { AboutHero } from "./about-hero";
import { AboutCompanyAndInvestors } from "./about-company-and-investors";
import { AboutLeadership } from "./about-leadership";
import { AboutTestimonial } from "./about-testimonial";

/**
 * Content for the about page. Global styling is in webflow-shared.css.
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
