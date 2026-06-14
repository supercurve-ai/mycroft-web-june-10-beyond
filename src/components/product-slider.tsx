"use client";

import { useEffect, useState } from "react";
import type { FocusEvent, KeyboardEvent, MouseEvent } from "react";
import { ProductSlideCard, type ProductSlide } from "./product-slide-card";

type ProductSliderProps = {
  slides: ProductSlide[];
  /** ms between automatic advances; 0 disables autoplay */
  autoplayDelay?: number;
};

/**
 * The home-page product carousel ("5 pillars"). Self-contained React state
 * replaces the captured Webflow slider runtime: slides are stacked in the
 * mask and crossfaded by index. Advance by clicking the card itself, the
 * prev/next arrows, or wait for autoplay (paused while hovered/focused).
 * Markup/class names mirror the original so webflow-shared.css applies.
 * Timings/easings reproduce the original site's IX2 "Product Slider IN/OUT"
 * interactions (slide drift + fade here; cover wipe + Lottie fade in the card).
 */
export function ProductSlider({
  slides,
  autoplayDelay = 8000,
}: ProductSliderProps) {
  const [index, setIndex] = useState(0);
  // autoplay pauses while the pointer or keyboard focus is inside the slider
  // and resumes on leave — same as the original Webflow slider runtime
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  const go = (n: number) =>
    setIndex(((n % slides.length) + slides.length) % slides.length);

  useEffect(() => {
    if (hovered || focused || !autoplayDelay) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // keyed on index so each advance (auto or manual) restarts the full delay
    const timer = setTimeout(
      () => setIndex((i) => (i + 1) % slides.length),
      autoplayDelay,
    );
    return () => clearTimeout(timer);
  }, [hovered, focused, index, autoplayDelay, slides.length]);

  // the whole card is clickable to advance — but let the "Learn more" link
  // navigate without also flipping the slide
  const onMaskClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("a")) return;
    go(index + 1);
  };

  const arrowKeys = (n: number) => (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      go(n);
    }
  };

  // only unpause when focus moves fully outside the slider
  const onBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
  };

  return (
    <div className="product-slider-wrapper">
      {/* data-wf-slider opts this slider out of the generic WebflowInteractions wiring */}
      <div
        className="product-slider disable-pointer w-slider"
        data-wf-slider=""
        role="region"
        aria-label="carousel"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={onBlur}
      >
        {/* grid-stacked (not absolutely positioned) so the slides keep giving
            the mask a height on mobile, where .product-slider drops to
            height:auto — the tallest slide sizes the mask, like the original */}
        <div
          className="slider-mask w-slider-mask"
          id="w-slider-mask-0"
          style={{ display: "grid" }}
          onClick={onMaskClick}
        >
          {slides.map((slide, i) => {
            const active = i === index;
            return (
              <div
                key={slide.title}
                className="w-slide"
                role="group"
                aria-label={`${i + 1} of ${slides.length}`}
                aria-hidden={active ? undefined : true}
                style={{
                  gridArea: "1 / 1",
                  opacity: active ? 1 : 0,
                  visibility: active ? "visible" : "hidden",
                  // native Webflow "fade" slider: a 750ms ease crossfade with no
                  // horizontal slide — the slide drifts in x only at the text
                  // level (IX2 a-70/a-71, handled in the card), the artwork
                  // never moves. visibility holds the outgoing slide through its
                  // fade.
                  transition: active
                    ? "opacity 750ms ease, visibility 0s"
                    : "opacity 750ms ease, visibility 0s linear 750ms",
                }}
              >
                <ProductSlideCard {...slide} active={active} />
              </div>
            );
          })}
          <div
            aria-live="off"
            aria-atomic="true"
            className="w-slider-aria-label"
          ></div>
        </div>
        <div className="slider__nav w-slider-nav w-round">
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              className={i === index ? "w-slider-dot w-active" : "w-slider-dot"}
              aria-label={`Show slide ${i + 1} of ${slides.length}`}
              aria-pressed={i === index}
              role="button"
              tabIndex={i === index ? 0 : -1}
              style={{ marginLeft: "3px", marginRight: "3px" }}
              onClick={() => go(i)}
            ></div>
          ))}
        </div>
        <div className="slider__control-wrapper">
          <div id="slider-control-wrap-1" className="slider__control enable-pointer">
            <div
              id="slider-control-1"
              className="slider__arrow-wrapper w-slider-arrow-left"
              role="button"
              tabIndex={0}
              aria-controls="w-slider-mask-0"
              aria-label="previous slide"
              onClick={() => go(index - 1)}
              onKeyDown={arrowKeys(index - 1)}
            >
              <div className="slider__left-icon w-icon-slider-left"></div>
            </div>
          </div>
          <div id="slider-control-wrap-2" className="slider__control enable-pointer">
            <div
              id="slider-control-2"
              className="slider__arrow-wrapper w-slider-arrow-right"
              role="button"
              tabIndex={0}
              aria-controls="w-slider-mask-0"
              aria-label="next slide"
              onClick={() => go(index + 1)}
              onKeyDown={arrowKeys(index + 1)}
            >
              <div className="slider__right-icon w-icon-slider-right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
