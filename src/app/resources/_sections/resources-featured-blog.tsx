import { ButtonLarge } from "@/components/button-large";
import { ResourcesBlogPostList } from "./resources-blog-post-list";
/** Featured-blog section of /resources. Ported from Webflow by the Webflow Cloner agent. */
export function ResourcesFeaturedBlog() {
  return (
    <section id="about-mycroft" className="section_v2 earl40">
      <div className="pr-(--sizing--rem--2rem) pl-(--sizing--rem--2rem) ml-auto mr-auto relative max-portrait:pr-(--sizing--rem--1-25rem) max-portrait:pl-(--sizing--rem--1-25rem)">
        <div className="w-full max-w-300 ml-auto mr-auto">
          <div className="w-full pt-(--sizing--rem--6rem) max-tablet:pt-(--sizing--rem--5rem) max-landscape:pt-(--sizing--rem--3-5rem) max-portrait:pt-(--sizing--rem--2-5rem)">
            <div className="container-flex vertical">
              <h2 className="h3_v2 color_rg text_center">
                Featured blog
              </h2>
              <div className="w-full pt-(--sizing--rem--1-25rem) max-tablet:pt-(--sizing--rem--1rem) max-landscape:pt-(--sizing--rem--0-75rem) max-portrait:pt-(--sizing--rem--0-5rem)">
                <div className="text-dek-m text_center">
                  Gain insights, updates, and best practices to strengthen your security posture! To see our full Diogenes Club blog selection, click here:
                </div>
              </div>
              <div className="text-center w-full pt-(--sizing--rem--2-5rem) max-tablet:pt-(--sizing--rem--2rem) max-landscape:pt-(--sizing--rem--1-5rem) max-portrait:pt-(--sizing--rem--1rem)">
                <ButtonLarge href="https://diogenesclub.ca/" shine>
                  Diogenes Club
                </ButtonLarge>
              </div>
            </div>
          </div>
          <div className="w-full pt-(--sizing--rem--4-5rem) max-tablet:pt-(--sizing--rem--3-5rem) max-landscape:pt-(--sizing--rem--2-5rem) max-portrait:pt-(--sizing--rem--1-5rem)">
            <div className="w-full pb-(--sizing--rem--8-5rem) max-tablet:pb-(--sizing--rem--6-5rem) max-landscape:pb-(--sizing--rem--4-5rem) max-portrait:pb-(--sizing--rem--3-5rem)">
              <div className="blog-container">
                <div className="blog-wrapper w-dyn-list">
                  <ResourcesBlogPostList />
                  <div className="w-dyn-empty" style={{"display": "none"}}>
                    <div>
                      No items found.
                    </div>
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
