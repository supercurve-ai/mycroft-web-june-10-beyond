"use client";

import { useState } from "react";
import { ResourcesBlogPostCard } from "./resources-blog-post-card";
import { resourcesBlogPosts } from "./resources-blog-post-card.data";
import { OptimizedImage } from "@/components/optimized-image";

/**
 * Client-side Load More for the ResourcesBlogPostCard collection. The live
 * Webflow page uses CMS pagination (4 posts per page) via real
 * `?698790ea_page=N` links, progressively enhanced by Finsweet Attributes into
 * in-place "load more" that swaps in the next 4 without changing the URL. The
 * clone reproduces that visible behavior by folding all 18 posts into the data
 * array and revealing them 4 at a time; note there are no paginated URLs here,
 * so live's `?698790ea_page=2…N` pages have no clone equivalent.
 * Ported from Webflow by the Webflow Cloner agent.
 */
export function ResourcesBlogPostList() {
  const [visible, setVisible] = useState(4);
  return (
    <>
      <div role="list" className="blog-list w-dyn-items">
        {resourcesBlogPosts.slice(0, visible).map((item, i) => (
          <ResourcesBlogPostCard item={item} key={i} />
        ))}
      </div>
      {visible < resourcesBlogPosts.length ? (
        <div
          role="navigation"
          aria-label="List"
          className="w-pagination-wrapper w-full pt-(--sizing--rem--4-5rem) max-tablet:pt-(--sizing--rem--3-5rem) max-landscape:pt-(--sizing--rem--2-5rem) max-portrait:pt-(--sizing--rem--1-5rem)"
        >
          <button
            type="button"
            aria-label="Next Page"
            className="w-pagination-next btn-large"
            onClick={() => setVisible((v) => v + 4)}
          >
            <div className="btn-text-large w-inline-block">{"More"}</div>
            <OptimizedImage
              src="/assets/icons/arrow-icon-v2.svg"
              loading="lazy"
              alt=""
              className="btn-arrow-large"
            />
          </button>
        </div>
      ) : null}
    </>
  );
}
