import { ReadNowLink } from "@/components/read-now-link";

/** One HomeBlogPostCard item (Webflow CMS collection). Ported from Webflow by the Webflow Cloner agent. */
export type HomeBlogPostItem = { href_0: string; image_1: string; image_2: string; mobile_3: string };

export function HomeBlogPostCard({ item }: { item: HomeBlogPostItem }) {
  return (
    <div role="listitem" className="_3up-blog-item w-dyn-item">
      <a href={item.href_0} className="blog-item-link w-inline-block">
        <img src={item.image_1} loading="lazy" alt="" sizes="100vw" srcSet={item.image_2} className="_3up-blog-img" />
        <div className="body-text-small color_white text_600 larger_mobile">
          {item.mobile_3}
        </div>
        <ReadNowLink />
      </a>
    </div>
  );
}
