/**
 * "Read now" text link with the small mint arrow, used inside blog-card
 * links (`_3up-blog-item`). The arrow's nudge-right-on-hover animation
 * comes from `.text-link:hover .arrow-icon-small` in webflow-shared.css —
 * no inline transform here, or it would override the hover rule.
 */
export function ReadNowLink() {
  return (
    <div className="text-link underline_75mint negative_mob">
      <div className="body-text-small color_75mint xs_body">
        Read now
      </div>
      <div className="arrow-icon-small color_75mint w-embed">
        <svg id="a" data-name="mycroft-arrow_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10">
          <path d="M14.04,3.46c-1.33-1-2.19-2.62-2.58-3.46l-1.49.54c.39.92,1.17,2.46,2.5,3.69H0v1.54h12.48c-1.33,1.15-2.11,2.77-2.5,3.69l1.49.54c.39-.92,1.25-2.46,2.58-3.46.39-.31,1.17-.77,1.96-.92v-1.23c-.78-.15-1.57-.54-1.96-.92Z" style={{"fill": "currentColor"}}></path>
        </svg>
      </div>
    </div>
  );
}
