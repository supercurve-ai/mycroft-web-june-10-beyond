import { ResourcesCaseStudyCard } from "./resources-case-study-card";
import { resourcesCaseStudies } from "./resources-case-study-card.data";
/** Case-studies section of /resources. Ported from Webflow by the Webflow Cloner agent. */
export function ResourcesCaseStudies() {
  return (
    <section id="about-mycroft" className="section_v2 color_sand">
      <div className="overlap-top">
        <div className="overlap-block earl40"></div>
        <div className="w-full max-w-300 ml-auto mr-auto">
          <div className="overlap-block top_block _50percent earl40"></div>
        </div>
        <div className="overlap-block transparent"></div>
      </div>
      <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
        <div className="w-full max-w-240 ml-auto mr-auto max-tablet:w-[90%] max-tablet:max-w-none max-landscape:w-full max-portrait:w-full">
          <div className="w-full pt-(--sizing--rem--6rem) max-tablet:pt-(--sizing--rem--5rem) max-landscape:pt-(--sizing--rem--3-5rem) max-portrait:pt-(--sizing--rem--2-5rem)">
            <div className="container-flex vertical">
              <h2 className="h3_v2 color_rg text_center">
                Mycroft case studies
              </h2>
              <div className="w-full pt-(--sizing--rem--1-25rem) max-tablet:pt-(--sizing--rem--1rem) max-landscape:pt-(--sizing--rem--0-75rem) max-portrait:pt-(--sizing--rem--0-5rem)">
                <div className="text-dek-m text_center">
                  Real-world success stories showing how customers improved security, efficiency, and compliance with Mycroft.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full pt-(--sizing--rem--4-5rem) max-tablet:pt-(--sizing--rem--3-5rem) max-landscape:pt-(--sizing--rem--2-5rem) max-portrait:pt-(--sizing--rem--1-5rem)">
            <div className="w-full pb-(--sizing--rem--8-5rem) max-tablet:pb-(--sizing--rem--6-5rem) max-landscape:pb-(--sizing--rem--4-5rem) max-portrait:pb-(--sizing--rem--3-5rem)">
              <div className="casestudy-container">
                <div className="blog-wrapper w-dyn-list">
                  <div role="list" className="blog-list w-dyn-items">
                    {resourcesCaseStudies.map((item, i) => (
                      <ResourcesCaseStudyCard item={item} key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
