import { ButtonLarge } from "@/components/button-large";
import { OptimizedImage } from "@/components/optimized-image";
import glowFront from "@public/assets/decor/glow-front-2x.webp";
import glowHover from "@public/assets/decor/glow-hover-2x.webp";
import glowBack from "@public/assets/decor/glow-back-2x.webp";
import lantern from "@public/assets/decor/lantern-v1-2x.webp";

/** Hero section of /product. Ported from Webflow by the Webflow Cloner agent. */
export function ProductOverviewHero() {
  return (
    <section id="hero" className="section-hero">
      <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
        <div className="w-full max-w-300 ml-auto mr-auto">
          <div className="container-flex hero-product">
            <div className="col-hero-left product">
              <div className="hero-copy">
                <h2 className="h2_v2 hero_hed tablet:max-[1200px]:text-[5.25vw]! tablet:max-[1200px]:mb-[2vw]!">
                  Security busywork, done for you
                </h2>
                <div className="text-dek-m text_earlgrey40">
                  Achieve enterprise grade security while you stay focused on building what matters
                  <span className="dek-text-medium text-white">
                    — all within a single platform that does the work for you.
                  </span>
                </div>
              </div>
              <ButtonLarge href="/demo" hero shine>
                Get Started
              </ButtonLarge>
            </div>
            <div className="col-hero-right product">
              <div className="hero-imgs product">
                <OptimizedImage src={glowFront} loading="lazy" width="Auto" sizes="(max-width: 832px) 100vw, 832px" alt="" className="hero-img-glow-front" />
                <OptimizedImage src={glowHover} loading="lazy" width="Auto" style={{"opacity": "0.25"}} alt="" sizes="(max-width: 832px) 100vw, 832px" className="hero-img-glow-hover" />
                <OptimizedImage src={glowBack} loading="lazy" width="Auto" sizes="(max-width: 832px) 100vw, 832px" alt="" className="hero-img-glow-back" />
                <OptimizedImage src={lantern} loading="eager" width="416" sizes="(max-width: 479px) 100vw, 416px" alt="" className="hero-img-lamp2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cursor-glow color_aubergine"></div>
      <div className="hero-background pattern_product"></div>
      <div className="hero-background color_product"></div>
    </section>
  );
}
