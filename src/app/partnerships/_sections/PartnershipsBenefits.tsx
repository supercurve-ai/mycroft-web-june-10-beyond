import { ButtonLarge } from "@/app/_shared/ButtonLarge";

/** Partner-benefits section of /partnerships. Ported from Webflow by the Webflow Cloner agent. */
export function PartnershipsBenefits() {
  return (
    <section id="compliance" className="section_v2">
      <div className="section-overlap">
        <div className="overlap-top">
          <div className="overlap-block"></div>
          <div className="w-full max-w-300 ml-auto mr-auto">
            <div className="overlap-block top_block"></div>
          </div>
          <div className="overlap-block transparent"></div>
        </div>
        <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
          <div className="w-full max-w-200 ml-auto mr-auto max-tablet:w-[80%] max-tablet:max-w-none max-landscape:w-[92%] max-portrait:w-full">
            <div className="w-full pt-(--sizing--rem--6rem) max-tablet:pt-(--sizing--rem--5rem) max-landscape:pt-(--sizing--rem--3-5rem) max-portrait:pt-(--sizing--rem--2-5rem)">
              <div className="w-full pb-(--sizing--rem--2-5rem) max-tablet:pb-(--sizing--rem--2rem) max-landscape:pb-(--sizing--rem--1-5rem) max-portrait:pb-(--sizing--rem--1rem)">
                <div className="container-flex vertical center">
                  <div className="w-full pb-(--sizing--rem--1-75rem) max-tablet:pb-(--sizing--rem--1-5rem) max-landscape:pb-(--sizing--rem--1rem) max-portrait:pb-(--sizing--rem--0-75rem)">
                    <div className="container-flex vertical center text_center">
                      <h3 className="h3_v2 color_white">
                        Innovate and protect
                      </h3>
                      <div className="w-full pt-(--sizing--rem--1-25rem) max-tablet:pt-(--sizing--rem--1rem) max-landscape:pt-(--sizing--rem--0-75rem) max-portrait:pt-(--sizing--rem--0-5rem)">
                        <div className="text-dek-m color_40eg">
                          Join the Mycroft partnership network and empower organizations to thrive securely.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-300 ml-auto mr-auto">
            <div className="w-full pb-(--sizing--rem--8-5rem) max-tablet:pb-(--sizing--rem--6-5rem) max-landscape:pb-(--sizing--rem--4-5rem) max-portrait:pb-(--sizing--rem--3-5rem)">
              <div className="w-layout-grid features-3up">
                <div className="feature-item">
                  <img src="/assets/icons/puzzle-icon.svg" loading="lazy" width="38" alt="" className="feature-icon" />
                  <div className="container-flex vertical center text_center">
                    <div className="h6 color_mint">
                      Collaborative growth
                    </div>
                    <div className="w-full pt-(--sizing--rem--0-75rem) max-tablet:pt-[.65rem] max-portrait:pt-[.4rem]">
                      <div className="body-text-small color_mint smaller">
                        Join a network of like-minded Mycroft partners committed to mutual growth and success, fostering collaboration that drives innovation and excellence.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature-item">
                  <img src="/assets/icons/markets-icon.svg" loading="lazy" width="38" alt="" className="feature-icon" />
                  <div className="container-flex vertical center text_center">
                    <div className="h6 color_mint">
                      Revenue potential
                    </div>
                    <div className="w-full pt-(--sizing--rem--0-75rem) max-tablet:pt-[.65rem] max-portrait:pt-[.4rem]">
                      <div className="body-text-small color_mint smaller">
                        Unlock new revenue streams by offering superior security solutions and services to your clients, enhancing your business profitability.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="feature-item">
                  <img src="/assets/icons/checkmark-icon.svg" loading="lazy" width="38" alt="" className="feature-icon" />
                  <div className="container-flex vertical center text_center">
                    <div className="h6 color_mint">
                      Shared Vision for Security
                    </div>
                    <div className="w-full pt-(--sizing--rem--0-75rem) max-tablet:pt-[.65rem] max-portrait:pt-[.4rem]">
                      <div className="body-text-small color_mint smaller">
                        Partner with Mycroft and create a safer digital environment for all, aligning your mission with our commitment to robust security.
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-flex vertical center">
                <ButtonLarge href="#hero" shine current>
                  Talk to our team
                </ButtonLarge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
