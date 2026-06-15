import { ReadNowLink } from "@/components/read-now-link";
import { OptimizedImage } from "@/components/optimized-image";

/** One PartnershipsBlogPostCard item (Webflow CMS collection). */
export type PartnershipsBlogPostItem = { href_0: string; image_1: string; mobile_3: string };

export function PartnershipsBlogPostCard({ item }: { item: PartnershipsBlogPostItem }) {
  return (
    <div role="listitem" className="_3up-blog-item w-dyn-item">
      <a href={item.href_0} className="blog-item-link w-inline-block">
        <OptimizedImage src={item.image_1} loading="lazy" alt="" sizes="100vw" className="_3up-blog-img" />
        <div className="body-text-small color_white text_600 larger_mobile">
          {item.mobile_3}
        </div>
        <ReadNowLink />
      </a>
    </div>
  );
}
