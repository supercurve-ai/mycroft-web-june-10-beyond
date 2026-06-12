import { SubscribeBlogPostCard } from "./SubscribeBlogPostCard";
import { subscribeBlogPosts } from "./SubscribeBlogPostCard.data";
import { SiteNav } from "../../_shared/SiteNav";
import { SiteFooter } from "../../_shared/SiteFooter";
import { SubscribeNewsletterHero } from "./SubscribeNewsletterHero";
import { SubscribeSectionDivider } from "./SubscribeSectionDivider";

/**
 * Faithful React port of the Webflow https://www.mycroft.io/subscribe page. DOM + classes mirror
 * the original 1:1; global styling is in webflow-shared.css, page CSS
 * in subscribe.css. Ported from Webflow by the Webflow Cloner agent.
 */
export function SubscribePageContent() {
  return (
    <div className="page-wrapper u-minh-100vh">
      <div className="styles__global-embed-code w-embed"></div>
      <SiteNav />
      <main id="main" className="page-content">
        <SubscribeNewsletterHero />
        <SubscribeSectionDivider />
        <div className="negative-margin-wrapper reduce_top">
          <section id="Features" className="section_v2 color_smoke">
            <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
              <div className="w-full pt-(--sizing--rem--8-5rem) max-tablet:pt-(--sizing--rem--6-5rem) max-landscape:pt-(--sizing--rem--4-5rem) max-portrait:pt-(--sizing--rem--3-5rem)">
                <div className="w-full max-w-240 ml-auto mr-auto max-tablet:w-[90%] max-tablet:max-w-none max-landscape:w-full max-portrait:w-full">
                  <div className="w-full max-w-184 ml-auto mr-auto max-tablet:w-[80%] max-tablet:max-w-none max-landscape:w-[92%] max-portrait:w-full">
                    <div className="container-flex vertical">
                      <h3 className="h3_v2 color_white text_center">
                        Read the latest insights from our experts
                      </h3>
                      <div className="w-full pt-(--sizing--rem--0-75rem) max-tablet:pt-[.65rem] max-portrait:pt-[.4rem]">
                        <div className="text-dek-s text_40_grey text_center">
                          Stay secure with expert, data-driven resources to strengthen your security knowledge and ensure compliance confidence.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full pt-(--sizing--rem--2-5rem) max-tablet:pt-(--sizing--rem--2rem) max-landscape:pt-(--sizing--rem--1-5rem) max-portrait:pt-(--sizing--rem--1rem)">
                    <div className="w-full pb-(--sizing--rem--6rem) max-tablet:pb-(--sizing--rem--5rem) max-landscape:pb-(--sizing--rem--3-5rem) max-portrait:pb-(--sizing--rem--2-5rem)">
                      <div className="container-flex space-between _3up_blog">
                        <div className="_3up-blog-wrapper w-dyn-list">
                          <div role="list" className="_3up-blog-grid w-dyn-items">
                            {subscribeBlogPosts.map((item, i) => (
                              <SubscribeBlogPostCard item={item} key={i} />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
