import { LogoMarquee } from "@/components/LogoMarquee";

/** About-Mycroft and investors section of /about. Ported from Webflow by the Webflow Cloner agent. */
export function AboutCompanyAndInvestors() {
  return (
    <section id="about-mycroft" className="section_v2 tint_75rg">
      <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
        <div className="w-full max-w-300 ml-auto mr-auto">
          <div className="w-full pt-(--sizing--rem--8-5rem) max-tablet:pt-(--sizing--rem--6-5rem) max-landscape:pt-(--sizing--rem--4-5rem) max-portrait:pt-(--sizing--rem--3-5rem)">
            <div className="w-full pb-(--sizing--rem--8-5rem) max-tablet:pb-(--sizing--rem--6-5rem) max-landscape:pb-(--sizing--rem--4-5rem) max-portrait:pb-(--sizing--rem--3-5rem)">
              <div className="container-flex about_intro">
                <div className="about-col-left">
                  <h3 className="h3_v2 color_white">
                    About Mycroft
                  </h3>
                  <img src="/assets/decor/chair-lockup-static.webp" loading="lazy" sizes="(max-width: 752px) 100vw, 752px" srcSet="/assets/decor/chair-lockup-static-p-500.webp 500w, /assets/decor/chair-lockup-static.webp 752w" alt="" className="about-img" />
                </div>
                <div className="about-col-right">
                  <div className="text-dek-l text_white">
                    Mycroft is redefining how companies stay secure and compliant from day one. We're building AI Security and Compliance Officers that act as the teammate that help you scale confidently without slowing down.
                    <br />
                    <br />
                    We're a team backed by decades of security and compliance expertise and scaling experience and decided to build the AI-native platform we wished we had.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-flex vertical center">
            <div className="label-container">
              <div className="eyebrow-medium tint_40eg">
                Our Investors
              </div>
            </div>
            <LogoMarquee investors />
          </div>
        </div>
      </div>
    </section>
  );
}
