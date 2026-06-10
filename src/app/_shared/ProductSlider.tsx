"use client";

import { useEffect, useState } from "react";
import type { KeyboardEvent, MouseEvent } from "react";
import { ProductSlideCard, type ProductSlide } from "./ProductSlideCard";

type ProductSliderProps = {
  slides: ProductSlide[];
  /** ms between automatic advances; 0 disables autoplay */
  autoplayDelay?: number;
};

/**
 * The home-page product carousel ("5 pillars"). Self-contained React state
 * replaces the captured Webflow slider runtime: slides are stacked in the
 * mask and crossfaded by index. Advance by clicking the card itself, the
 * prev/next arrows, or wait for autoplay (which stops on first interaction).
 * Markup/class names mirror the original so webflow-shared.css applies.
 * Timings/easings reproduce the original site's IX2 "Product Slider IN/OUT"
 * interactions (slide drift + fade here; cover wipe + Lottie fade in the card).
 */
export function ProductSlider({
  slides,
  autoplayDelay = 8000,
}: ProductSliderProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (n: number) =>
    setIndex(((n % slides.length) + slides.length) % slides.length);
  const interact = (n: number) => {
    setPaused(true);
    go(n);
  };

  useEffect(() => {
    if (paused || !autoplayDelay) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      autoplayDelay,
    );
    return () => clearInterval(timer);
  }, [paused, autoplayDelay, slides.length]);

  // the whole card is clickable to advance — but let the "Learn more" link
  // navigate without also flipping the slide
  const onMaskClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest("a")) return;
    interact(index + 1);
  };

  const arrowKeys = (n: number) => (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      interact(n);
    }
  };

  return (
    <div className="product-slider-wrapper">
      {/* data-wf-slider opts this slider out of the generic WebflowInteractions wiring */}
      <div
        className="product-slider disable-pointer w-slider"
        data-wf-slider=""
        role="region"
        aria-label="carousel"
      >
        <div
          className="slider-mask w-slider-mask"
          id="w-slider-mask-0"
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
                  position: "absolute",
                  inset: 0,
                  opacity: active ? 1 : 0,
                  transform: active ? "translateX(0px)" : "translateX(-20px)",
                  visibility: active ? "visible" : "hidden",
                  // hold visibility until the 400ms exit animation finishes
                  transition: active
                    ? "transform 500ms ease-in-out, opacity 400ms ease-in-out, visibility 0s"
                    : "transform 400ms ease-in-out, opacity 400ms ease-in-out, visibility 0s linear 400ms",
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
              onClick={() => interact(i)}
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
              onClick={() => interact(index - 1)}
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
              onClick={() => interact(index + 1)}
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
