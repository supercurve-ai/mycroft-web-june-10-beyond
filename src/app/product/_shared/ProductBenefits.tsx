import type { ReactNode } from "react";
import { ButtonLarge } from "@/components/ButtonLarge";

/**
 * The standard /product/* "why this matters" section: centered heading + dek
 * over a 3-up icon feature grid and a Get Started button. audit-and-compliance
 * has its compliance carousel here instead and does not use this.
 */
export function ProductBenefits(props: {
  heading: string;
  dek: ReactNode;
  features: { icon: string; title: string; body: ReactNode }[];
}) {
  return (
    <section id="compliance" className="section_v2">
      <div className="section-overlap">
        <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
          <div className="w-full max-w-200 ml-auto mr-auto max-tablet:w-[80%] max-tablet:max-w-none max-landscape:w-[92%] max-portrait:w-full">
            <div className="w-full pt-(--sizing--rem--6rem) max-tablet:pt-(--sizing--rem--5rem) max-landscape:pt-(--sizing--rem--3-5rem) max-portrait:pt-(--sizing--rem--2-5rem)">
              <div className="w-full pb-(--sizing--rem--2-5rem) max-tablet:pb-(--sizing--rem--2rem) max-landscape:pb-(--sizing--rem--1-5rem) max-portrait:pb-(--sizing--rem--1rem)">
                <div className="container-flex vertical center">
                  <div className="w-full pb-(--sizing--rem--1-75rem) max-tablet:pb-(--sizing--rem--1-5rem) max-landscape:pb-(--sizing--rem--1rem) max-portrait:pb-(--sizing--rem--0-75rem)">
                    <div className="container-flex vertical center text_center">
                      <h3 className="h3_v2 color_white">
                        {props.heading}
                      </h3>
                      <div className="w-full pt-(--sizing--rem--1-25rem) max-tablet:pt-(--sizing--rem--1rem) max-landscape:pt-(--sizing--rem--0-75rem) max-portrait:pt-(--sizing--rem--0-5rem)">
                        <div className="text-dek-m color_40eg">
                          {props.dek}
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
                {props.features.map((feature) => (
                  <div className="feature-item" key={feature.title}>
                    <img src={feature.icon} loading="lazy" width="38" alt="" className="feature-icon" />
                    <div className="container-flex vertical center text_center">
                      <div className="h6 color_mint">
                        {feature.title}
                      </div>
                      <div className="w-full pt-(--sizing--rem--0-75rem) max-tablet:pt-[.65rem] max-portrait:pt-[.4rem]">
                        <div className="body-text-small color_mint smaller">
                          {feature.body}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="container-flex vertical center">
                <ButtonLarge href="/demo" shine>
                  Get Started
                </ButtonLarge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
