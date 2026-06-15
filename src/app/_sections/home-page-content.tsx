import { TrustedBySection } from "@/components/logo-marquee";
import { CtaSection } from "@/components/cta-section";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { HomeHero } from "./home-hero";
import { HomeProblem } from "./home-problem";
import { HomeSolution } from "./home-solution";
import { HomeFeatures } from "./home-features";
import { HomeComplianceBadges } from "./home-compliance-badges";
import { HomePlatformSlider } from "./home-platform-slider";
import { HomeTestimonial } from "./home-testimonial";
import { HomeLatestInsights } from "./home-latest-insights";


export function HomePageContent() {
  return (
    <div className="page-wrapper u-minh-100vh">
      <div className="styles__global-embed-code w-embed"></div>
      <div className="navigation-trim_container">
        <div>
          Announcing our Seed raise of $XMM USD
        </div>
        <a href="#">
          View article -{'>'}
        </a>
      </div>
      <SiteNav />
      <main id="main" className="page-content">
        <HomeHero />
        <TrustedBySection />
        <HomeProblem />
        <HomeSolution />
        <HomeFeatures />
        <HomeComplianceBadges />
        <HomePlatformSlider />
        <HomeTestimonial />
        <HomeLatestInsights />
        <CtaSection variant="lamp" />
      </main>
      <SiteFooter />
    </div>
  );
}
