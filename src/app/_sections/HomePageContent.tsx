import { TrustedBySection } from "@/components/LogoMarquee";
import { CtaSection } from "@/components/CtaSection";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { HomeHero } from "./HomeHero";
import { HomeProblem } from "./HomeProblem";
import { HomeSolution } from "./HomeSolution";
import { HomeFeatures } from "./HomeFeatures";
import { HomeComplianceBadges } from "./HomeComplianceBadges";
import { HomePlatformSlider } from "./HomePlatformSlider";
import { HomeTestimonial } from "./HomeTestimonial";
import { HomeLatestInsights } from "./HomeLatestInsights";

/**
 * Faithful React port of the Webflow https://www.mycroft.io page. DOM + classes mirror
 * the original 1:1; global styling is in webflow-shared.css, page CSS
 * in home.css. Ported from Webflow by the Webflow Cloner agent.
 */
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
