import { DotLottiePlayer } from "@/components/DotLottiePlayer";

/**
 * The standard /product/* hero: copy on the left, an eagerly-loaded lottie on
 * the right, themed background pattern + color. audit-and-compliance has its
 * own two-lottie hero and does not use this.
 */
export function ProductHero(props: {
  /** Per-product theme class suffix: devmng | appsec | cloudsec | tprm. */
  theme: string;
  eyebrow: string;
  heading: string;
  dek: string;
  lottieSrc: string;
}) {
  return (
    <section id="hero" className="section-hero">
      <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
        <div className="w-full max-w-300 ml-auto mr-auto">
          <div className="container-flex hero_product">
            <div className={`col-hero-left ${props.theme}`}>
              <div className="eyebrow-label-medium">
                <div className="eyebrow-medium color_rg">
                  {props.eyebrow}
                </div>
              </div>
              <div className="hero-copy hero_padding_large">
                <h2 className="h2_v2 color_rg smaller_tablet">
                  {props.heading}
                </h2>
                <div className="text-dek-l">
                  {props.dek}
                </div>
              </div>
            </div>
            <div className={`col-hero-right ${props.theme}`}>
              <div className="hero-imgs cloudsec">
                <div data-wf-lottie-load="true" className="prod-hero1" data-animation-type="lottie" data-src={props.lottieSrc} data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="svg" data-default-duration="0" data-duration="12" data-loading="eager">
                  <DotLottiePlayer src={props.lottieSrc} loop={true} autoplay={true} width={1100} height={840} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cursor-glow color_white"></div>
      <div className={`hero-background pattern_${props.theme}`}></div>
      <div className={`hero-background color_${props.theme}`}></div>
    </section>
  );
}
