"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

export type ScrollFeatureSlide = {
  heading: string;
  body: ReactNode;
  image: {
    src: string;
    srcSet?: string;
    sizes?: string;
    width?: number;
    alt?: string;
  };
};

/*
 * Faithful port of the original site's Webflow IX2 scroll-slider animation.
 *
 * Captured from the published Webflow JS bundle: action lists "a-98"
 * (features-scroll-desktop, breakpoints main/medium = >767px) and "a-99"
 * (features-scroll-mobile, small/tiny = ≤767px). Both are SCROLLING_IN_VIEW
 * events on .scroll-container-outer with smoothing 40 and no offsets:
 * progress is 0 when the container's top reaches the viewport bottom and
 * 100 when its bottom leaves the viewport top. Each track below is the
 * verbatim [keyframe%, value] list; values are interpolated linearly and
 * held flat before the first / after the last keyframe.
 *
 * The timelines encode exactly 3 slides.
 */
type Track = ReadonlyArray<readonly [number, number]>;
type SlideTracks = {
  textOpacity: Track;
  textY: Track;
  imgOpacity: Track;
  imgX: Track;
};
type Timeline = { enums: Track[]; slides: SlideTracks[] };

const DESKTOP: Timeline = {
  enums: [
    [[0, 1], [28, 1], [29, 0]],
    [[28, 0], [29, 1], [58, 1], [59, 0]],
    [[59, 0], [60, 1]],
  ],
  slides: [
    {
      textOpacity: [[0, 1], [26, 1], [30, 0]],
      textY: [[0, 0], [26, 0], [30, -40]],
      imgOpacity: [[26, 1], [27, 0]],
      imgX: [[26, 0], [27, 40]],
    },
    {
      textOpacity: [[30, 0], [32, 1], [57, 1], [60, 0]],
      textY: [[30, 40], [32, 0], [57, 0], [60, -40]],
      imgOpacity: [[30, 0], [32, 1], [57, 1], [60, 0]],
      imgX: [[30, -40], [32, 0], [57, 0], [60, 40]],
    },
    {
      textOpacity: [[60, 0], [62, 1]],
      textY: [[60, 40], [62, 0]],
      imgOpacity: [[60, 0], [62, 1]],
      imgX: [[60, -40], [62, 0]],
    },
  ],
};

const MOBILE: Timeline = {
  enums: [
    [[0, 1], [18, 1], [19, 0]],
    [[18, 0], [19, 1], [38, 1], [39, 0]],
    [[39, 0], [40, 1]],
  ],
  slides: [
    {
      textOpacity: [[0, 1], [16, 1], [20, 0]],
      textY: [[0, 0], [16, 0], [20, -40]],
      imgOpacity: [[16, 1], [17, 0]],
      imgX: [[16, 0], [17, 40]],
    },
    {
      textOpacity: [[20, 0], [22, 1], [37, 1], [40, 0]],
      textY: [[20, 40], [22, 0], [37, 0], [40, -40]],
      imgOpacity: [[20, 0], [22, 1], [37, 1], [40, 0]],
      imgX: [[20, -40], [22, 0], [37, 0], [40, 40]],
    },
    {
      textOpacity: [[40, 0], [42, 1]],
      textY: [[40, 40], [42, 0]],
      imgOpacity: [[40, 0], [42, 1]],
      imgX: [[40, -40], [42, 0]],
    },
  ],
};

// IX2 smoothing: 40 → rendered position chases the raw scroll progress by
// max(1 - 40/100, 0.01) per animation frame.
const CHASE = Math.max(1 - 0.4, 0.01);

function sample(track: Track, v: number): number {
  if (v <= track[0][0]) return track[0][1];
  const last = track[track.length - 1];
  if (v >= last[0]) return last[1];
  for (let i = 1; i < track.length; i++) {
    const [k1, v1] = track[i];
    if (v <= k1) {
      const [k0, v0] = track[i - 1];
      return v0 + ((v - k0) / (k1 - k0)) * (v1 - v0);
    }
  }
  return last[1];
}

const partStyle = (opacity: number, x: number, y: number): CSSProperties => ({
  willChange: "transform, opacity",
  opacity,
  transform: `translate3d(${x}px, ${y}px, 0px)`,
});

/**
 * Scroll-driven feature slider (the Webflow "scroll-slider" pattern).
 *
 * Mount inside the page's `.scroll-container-outer` / `.scroll-container-inner`
 * wrappers: the outer div's height (e.g. 500vh) defines the scroll distance,
 * the inner is sticky, and the slides play forward as you scroll down and
 * backward as you scroll up, driven by the captured IX2 timelines above.
 */
export function ScrollFeatureSlider({
  id,
  slides,
  children,
}: {
  id?: string;
  slides: ScrollFeatureSlide[];
  children?: ReactNode;
}) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const outer = section?.closest(".scroll-container-outer");
    if (!section || !outer) return;

    const q = (sel: string) => section.querySelector<HTMLElement>(sel);
    const parts = slides.map((_, i) => ({
      row: q(`.features-row.slide${i + 1}`),
      text: q(`.features-text.slide${i + 1}`),
      img: q(`.features-img-container.slide${i + 1}`),
      num: q(`.enumeration${i + 1}`),
    }));
    const mql = window.matchMedia("(max-width: 767px)");

    let raw = 0;
    let pos = 0;
    let raf = 0;

    const computeRaw = () => {
      const rect = outer.getBoundingClientRect();
      const vh = document.documentElement.clientHeight || window.innerHeight;
      const total = vh + rect.height;
      raw = total > 0 ? Math.min(Math.max(vh - rect.top, 0), total) / total : 0;
    };

    const apply = () => {
      const tl = mql.matches ? MOBILE : DESKTOP;
      const v = pos * 100;
      parts.forEach((p, i) => {
        const tr = tl.slides[i];
        if (!tr) return;
        if (p.num) p.num.style.opacity = String(sample(tl.enums[i], v));
        if (p.text) {
          p.text.style.opacity = String(sample(tr.textOpacity, v));
          p.text.style.transform = `translate3d(0px, ${sample(tr.textY, v)}px, 0px)`;
        }
        if (p.img) {
          p.img.style.opacity = String(sample(tr.imgOpacity, v));
          p.img.style.transform = `translate3d(${sample(tr.imgX, v)}px, 0px, 0px)`;
        }
        if (p.row) {
          const visible = sample(tr.textOpacity, v) > 0.5;
          p.row.style.pointerEvents = visible ? "" : "none";
          p.row.setAttribute("aria-hidden", String(!visible));
        }
      });
    };

    const frame = () => {
      raf = 0;
      const next = pos + (raw - pos) * CHASE;
      pos = Math.abs(raw - next) < 0.0005 ? raw : next;
      apply();
      if (pos !== raw) raf = requestAnimationFrame(frame);
    };
    const kick = () => {
      computeRaw();
      if (!raf) raf = requestAnimationFrame(frame);
    };

    // Jump straight to the current scroll position on mount (no chase-in).
    computeRaw();
    pos = raw;
    apply();
    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick);
    mql.addEventListener("change", kick);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
      mql.removeEventListener("change", kick);
    };
  }, [slides.length]);

  return (
    <section id={id} ref={sectionRef} className="scroll-slider-inner">
      <div className="enumeration-container">
        <div className="enumeration-counter">
          {slides.map((_, i) => (
            <div key={i} className="enumeration-absolute">
              <div
                className={`body-text-medium _75_rg enumeration${i + 1}`}
                style={{ willChange: "opacity", opacity: sample(DESKTOP.enums[i], 0) }}
              >
                {i + 1}
                <br />
              </div>
            </div>
          ))}
        </div>
        <div className="body-text-medium _75_rg">/</div>
        <div className="body-text-medium _75_rg">{slides.length}</div>
      </div>
      {/* Invisible in-flow copy of the first slide: gives the sticky card its height,
          since the real slides are absolutely positioned on top of it. */}
      <div className="features-row static" style={{ willChange: "opacity", opacity: 0 }} aria-hidden>
        <FeatureRowContent slide={slides[0]} />
      </div>
      {slides.map((slide, i) => {
        const tr = DESKTOP.slides[i];
        return (
          <div
            key={i}
            className={`features-row absolute slide${i + 1}`}
            aria-hidden={i !== 0}
            style={i === 0 ? undefined : { pointerEvents: "none" }}
          >
            <FeatureRowContent
              slide={slide}
              slideClass={`slide${i + 1}`}
              textStyle={partStyle(sample(tr.textOpacity, 0), 0, sample(tr.textY, 0))}
              imgStyle={partStyle(sample(tr.imgOpacity, 0), sample(tr.imgX, 0), 0)}
            />
          </div>
        );
      })}
      {children}
    </section>
  );
}

function FeatureRowContent({
  slide,
  slideClass,
  textStyle,
  imgStyle,
}: {
  slide: ScrollFeatureSlide;
  slideClass?: string;
  textStyle?: CSSProperties;
  imgStyle?: CSSProperties;
}) {
  const cls = (base: string) => (slideClass ? `${base} ${slideClass}` : base);
  return (
    <>
      <div className={cls("features-text")} style={textStyle}>
        <h4 className="h4_v2 color_rg">{slide.heading}</h4>
        <div className="body-text-large smaller_tablet">{slide.body}</div>
      </div>
      <div className={cls("features-img-container")} style={imgStyle}>
        <img
          src={slide.image.src}
          loading="lazy"
          width={slide.image.width}
          sizes={slide.image.sizes}
          alt={slide.image.alt ?? ""}
          srcSet={slide.image.srcSet}
          className="features-img"
        />
      </div>
    </>
  );
}
