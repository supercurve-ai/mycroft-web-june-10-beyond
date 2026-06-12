import { BookDemoForm } from "@/app/_shared/BookDemoForm";

/** Demo-booking hero section of /demo. Ported from Webflow by the Webflow Cloner agent. */
export function DemoBookingHero() {
  return (
    <section id="hero" className="section-hero">
      <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
        <div className="container-xl">
          <div className="hero-demo-container demo_page">
            <div className="hero-demo-top">
              <h3 className="h3_v2 color_mint">
                Book a demo with Mycroft
              </h3>
              <div className="text-dek-m text_earlgrey40">
                Schedule a call with our team to learn more about how we can transform your security, compliance, and privacy operations today.
              </div>
            </div>
            <div className="hero-demo-btm">
              <div className="demo-col-left">
                <div className="demo-eyebrow-container">
                  <div className="eyebrow-large demo_cta">
                    learn more about our product:
                  </div>
                </div>
                <ul role="list" className="demo-ul">
                  <li className="demo-ul-item">
                    <h6 className="h6 demo_cta">
                      Full security and compliance stack
                    </h6>
                    <div className="body-text-medium">
                      Mycroft combines all your security and compliance operations in one place – supporting your security, privacy and compliance from day one.
                    </div>
                  </li>
                  <li className="demo-ul-item">
                    <h6 className="h6 demo_cta">
                      Your personalized Security and Compliance Officer
                    </h6>
                    <div className="body-text-medium">
                      Scattered tools, manual workflows, and spreadsheet-driven audits are replaced with a single Agentic AI solution that acts as your Security and Compliance Officer.
                    </div>
                  </li>
                  <li className="demo-ul-item">
                    <h6 className="h6 demo_cta">
                      Real experts, always available
                    </h6>
                    <div className="body-text-medium">
                      Our Risk Operations Center monitors your environment, with seasoned experts who act as an extension to your team — anticipating risks, responding fast, and keeping you secure.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="demo-col-right">
                <div className="demo-form-built">
                  <BookDemoForm />
                </div>
                <div id="calendly-container" className="div-block-14"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-background color_demo"></div>
      <div className="hero-background color_overlay_aubergine"></div>
      <div className="hero-background pattern_pixels brighter"></div>
    </section>
  );
}
