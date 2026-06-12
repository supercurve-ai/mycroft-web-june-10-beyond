/** Newsletter hero section of /subscribe. Ported from Webflow by the Webflow Cloner agent. */
export function SubscribeNewsletterHero() {
  return (
    <section id="hero" className="section-hero">
      <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
        <div className="container-xl">
          <div className="hero-demo-container demo_page">
            <div className="hero-demo-full">
              <div className="subscribe-col-left">
                <div className="eyebrow-label-small">
                  <div className="eyebrow-small color_mint">
                    Newsletter
                  </div>
                </div>
                <div className="w-full pt-(--sizing--rem--1-75rem) max-tablet:pt-(--sizing--rem--1-5rem) max-landscape:pt-(--sizing--rem--1rem) max-portrait:pt-(--sizing--rem--0-75rem)">
                  <h3 className="h3_v2 color_mint">
                    The Diogenes Club newsletter
                  </h3>
                </div>
                <div className="body-text-medium text_40earlgrey">
                  Stay up-to-date with industry news, deep dives, and thoughts from Mike Kim.
                </div>
                <div className="w-full pb-(--sizing--rem--2-5rem) max-tablet:pb-(--sizing--rem--2rem) max-landscape:pb-(--sizing--rem--1-5rem) max-portrait:pb-(--sizing--rem--1rem)">
                  <div className="w-full pt-(--sizing--rem--1-75rem) max-tablet:pt-(--sizing--rem--1-5rem) max-landscape:pt-(--sizing--rem--1rem) max-portrait:pt-(--sizing--rem--0-75rem)">
                    <div className="hs-newsletter-embed w-embed w-iframe w-script">
                      <iframe src="https://subscribe-forms.beehiiv.com/97d3c544-4235-49a5-a683-9fe1476a26c1" className="beehiiv-embed" data-test-id="beehiiv-embed" frameBorder="0" scrolling="no" style={{"width": "440px", "height": "87px", "margin": "0px", "backgroundColor": "transparent", "boxShadow": "rgba(0, 0, 0, 0) 0px 0px", "maxWidth": "100%", "borderRadius": "0px"}} data-bhv-loaded="true"></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div className="subscribe-col-right"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-background color_integrations"></div>
      <div className="hero-background color_overlay_aubergine"></div>
      <div className="hero-background pattern_pixels brighter"></div>
    </section>
  );
}
