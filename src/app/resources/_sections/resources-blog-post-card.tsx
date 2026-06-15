import { OptimizedImage } from "@/components/optimized-image";
import mikeKimImg from "@public/assets/team/mikekim2025.png";

/** One ResourcesBlogPostCard item (Webflow CMS collection). */
export type ResourcesBlogPostItem = { href_0: string; image_1: string; image_3: string; smaller_4: string; medium_5: string; medium_6: string; medium_7: string };

export function ResourcesBlogPostCard({ item }: { item: ResourcesBlogPostItem }) {
  return (
    <div role="listitem" className="blog-item w-dyn-item">
      <a href={item.href_0} className="blog-card w-inline-block">
        <OptimizedImage src={item.image_1} loading="lazy" alt={item.image_3} sizes="100vw" className="blog-main-image" />
        <div className="blog-card-info">
          <div className="u-mb-05">
            <h3 className="h3_v2 is-smaller">
              {item.smaller_4}
            </h3>
          </div>
          <div className="body-text-medium">
            {item.medium_5}
          </div>
        </div>
        <div className="blog-card-author">
          <OptimizedImage src={mikeKimImg} loading="lazy" alt="Mike Kim" className="blog-author-picture" />
          <div className="blog-author-info">
            <div className="body-text-medium is-semi-bold">
              Mike Kim
            </div>
            <div className="blog-card-details">
              <div className="body-text-medium">
                {item.medium_6}
              </div>
              <div className="blog-info-dot"></div>
              <div className="inline-embed w-embed">
                <div className="body-text-medium">
                  {item.medium_7}
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
