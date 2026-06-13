"use client";

import { useState } from "react";
import { ResourcesBlogPostCard } from "./resources-blog-post-card";
import { resourcesBlogPosts } from "./resources-blog-post-card.data";
import { WfImage } from "@/components/wf-image";

/**
 * Client-side Load More for the ResourcesBlogPostCard collection: the original
 * page only served 4 item(s) per ?page=N round-trip; the clone
 * folded all 18 item(s) into the data array and reveals them in
 * page-size steps. Ported from Webflow by the Webflow Cloner agent.
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
            <WfImage
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
