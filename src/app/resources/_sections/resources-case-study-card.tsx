import { OptimizedImage } from "@/components/optimized-image";
import { staticImage } from "@/lib/static-images";

/** One ResourcesCaseStudyCard item (Webflow CMS collection). Ported from Webflow by the Webflow Cloner agent. */
export type ResourcesCaseStudyItem = { href_0: string; image_1: string; h6_3: string; image_4: string; text_5: string; div_6: string; href_7: string };

export function ResourcesCaseStudyCard({ item }: { item: ResourcesCaseStudyItem }) {
  return (
    <div role="listitem" className="blog-item w-dyn-item">
      <div className="feature-tile-container">
        <div className="container-flex">
          <div className="slant-label">
            <div className="eyebrow-large text_smoke">
              CASE STUDY
            </div>
          </div>
          <OptimizedImage src="/assets/icons/triangle-shape.svg" loading="lazy" alt="" className="triangle-shape" />
        </div>
        <div className="feature-tile-content">
          <a href={item.href_0} className="w-inline-block">
            <OptimizedImage src={item.image_1} loading="lazy" width="512" alt="" sizes="(max-width: 767px) 100vw, 512px" className="feature-tile-img" />
          </a>
          <div className="w-full pt-(--sizing--rem--1-25rem) max-tablet:pt-(--sizing--rem--1rem) max-landscape:pt-(--sizing--rem--0-75rem) max-portrait:pt-(--sizing--rem--0-5rem)">
            <div className="h6">
              {item.h6_3}
            </div>
          </div>
          <div className="w-full pt-(--sizing--rem--1-25rem) max-tablet:pt-(--sizing--rem--1rem) max-landscape:pt-(--sizing--rem--0-75rem) max-portrait:pt-(--sizing--rem--0-5rem)">
            <div className="blog-card-author">
              <OptimizedImage src={staticImage(item.image_4)} loading="lazy" alt="" className="blog-author-picture" />
              <div className="blog-author-info">
                <div className="bold-text">
                  {item.text_5}
                </div>
                <div>
                  {item.div_6}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full pt-(--sizing--rem--1-25rem) max-tablet:pt-(--sizing--rem--1rem) max-landscape:pt-(--sizing--rem--0-75rem) max-portrait:pt-(--sizing--rem--0-5rem)">
            <div className="blog-card-author">
              <a href={item.href_7}>
                Read case study -{'>'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
