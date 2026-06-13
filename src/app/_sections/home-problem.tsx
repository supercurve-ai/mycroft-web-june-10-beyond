import { WfImage } from "@/components/wf-image";

/** Problem-statement section of /home. Ported from Webflow by the Webflow Cloner agent. */
export function HomeProblem() {
  return (
    <section id="problem" className="section_v2 tint_40eg overflow_hidden">
      <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
        <div className="w-full max-w-240 ml-auto mr-auto max-tablet:w-[90%] max-tablet:max-w-none max-landscape:w-full max-portrait:w-full max-landscape:max-w-[580px]">
          <div className="w-full pt-(--sizing--rem--4-5rem) max-tablet:pt-(--sizing--rem--3-5rem) max-landscape:pt-(--sizing--rem--2-5rem) max-portrait:pt-(--sizing--rem--1-5rem)">
            <div className="container-flex vertical">
              <div className="eyebrow-label-small product">
                <div className="eyebrow-small color_rg">
                  the problem
                </div>
              </div>
              <h2 className="h2_v2 color_rg text_center">
                Security today is fragmented, shallow, and overkill.
              </h2>
              <div className="w-full pt-(--sizing--rem--1-25rem) max-tablet:pt-(--sizing--rem--1rem) max-landscape:pt-(--sizing--rem--0-75rem) max-portrait:pt-(--sizing--rem--0-5rem)">
                <div className="text-dek-s text_center">
                  Disconnected compliance tools create busywork. Point solutions leave blind spots. Enterprise platforms drown you in complexity.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-300 ml-auto mr-auto">
          <div className="w-full pt-(--sizing--rem--4-5rem) max-tablet:pt-(--sizing--rem--3-5rem) max-landscape:pt-(--sizing--rem--2-5rem) max-portrait:pt-(--sizing--rem--1-5rem)">
            <div className="w-layout-grid problem-tile-grid">
              <div className="home-problem_card-container">
                <WfImage src="/assets/icons/circus-icon.svg" loading="lazy" width="40" alt="" />
                <div className="w-full pt-(--sizing--rem--0-75rem) max-tablet:pt-[.65rem] max-portrait:pt-[.4rem]">
                  <h6 className="h6 color_rg">
                    Compliance circus
                  </h6>
                </div>
                <div className="w-full pt-(--sizing--rem--0-75rem) max-tablet:pt-[.65rem] max-portrait:pt-[.4rem]">
                  <div className="body-text-medium">
                    Passing audits doesn’t mean you’re protected. Most tools stop at SOC 2 checkboxes and leave real risks untouched.
                  </div>
                </div>
              </div>
              <div className="home-problem_card-container">
                <WfImage src="/assets/icons/laptop-icon.svg" loading="lazy" width="40" alt="" />
                <div className="w-full pt-(--sizing--rem--0-75rem) max-tablet:pt-[.65rem] max-portrait:pt-[.4rem]">
                  <h6 className="h6 color_rg">
                    Tool sprawl
                  </h6>
                </div>
                <div className="w-full pt-(--sizing--rem--0-75rem) max-tablet:pt-[.65rem] max-portrait:pt-[.4rem]">
                  <div className="body-text-medium">
                    Laptops, cloud, policies, vendors – everything lives in silos. More vendors, more costs, less visibility. Disconnected AI only complicates it.
                  </div>
                </div>
              </div>
              <div className="home-problem_card-container">
                <WfImage src="/assets/icons/piggybank-icon.svg" loading="lazy" width="40" alt="" />
                <div className="w-full pt-(--sizing--rem--0-75rem) max-tablet:pt-[.65rem] max-portrait:pt-[.4rem]">
                  <h6 className="h6 color_rg">
                    Enterprise bloat
                  </h6>
                </div>
                <div className="w-full pt-(--sizing--rem--0-75rem) max-tablet:pt-[.65rem] max-portrait:pt-[.4rem]">
                  <div className="body-text-medium">
                    Legacy platforms are built for Fortune 500 budgets – not operators. Too heavy, too expensive, and impossible to manage.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pb-(--sizing--rem--12rem) max-tablet:pb-(--sizing--rem--10rem) max-landscape:pb-(--sizing--rem--8rem) max-portrait:pb-(--sizing--rem--6rem)"></div>
      </div>
    </section>
  );
}
