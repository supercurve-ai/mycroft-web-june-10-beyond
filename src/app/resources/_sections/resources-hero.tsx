/** Hero section of /resources. Ported from Webflow by the Webflow Cloner agent. */
export function ResourcesHero() {
  return (
    <section id="hero" className="section-hero">
      <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
        <div className="w-full max-w-240 ml-auto mr-auto max-tablet:w-[90%] max-tablet:max-w-none max-landscape:w-full max-portrait:w-full">
          <div className="container-flex hero_resources">
            <div className="hero-copy text_center">
              <h1 className="h1_v2 color_rg">
                Resources
              </h1>
              <div className="w-full pt-(--sizing--rem--0-75rem) max-tablet:pt-[.65rem] max-portrait:pt-[.4rem]">
                <div className="text-dek-l">
                  Stay secure with expert, data-driven resources to strengthen your cybersecurity knowledge and ensure compliance confidence.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cursor-glow green_background"></div>
      <div className="hero-background color_about"></div>
      <div className="hero-background color_overlay_green"></div>
      <div className="hero-background pattern_pixels extra_bright"></div>
      <div className="overlap-top">
        <div className="overlap-block earl40"></div>
        <div className="w-full max-w-300 ml-auto mr-auto">
          <div className="overlap-block top_block _50percent earl40"></div>
        </div>
        <div className="overlap-block transparent"></div>
      </div>
    </section>
  );
}
