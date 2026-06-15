"use client";

import { useEffect, useRef, useState } from "react";
import { DotLottieReact, type DotLottie } from "@lottiefiles/dotlottie-react";

// First playback waits for the browser to go idle once, so animation render
// loops don't compete with hydration/paint on page load. Shared across all
// players: after the first idle period the gate stays open for the page.
let pageIdle = false;
const idleCallbacks: Array<() => void> = [];
function whenPageIdle(cb: () => void) {
  if (pageIdle) return cb();
  idleCallbacks.push(cb);
  if (idleCallbacks.length > 1) return; // a request is already pending
  const fire = () => {
    pageIdle = true;
    idleCallbacks.splice(0).forEach((fn) => fn());
  };
  if ("requestIdleCallback" in window) {
    requestIdleCallback(fire, { timeout: 2000 });
  } else {
    setTimeout(fire, 200);
  }
}

type Props = {
  src: string;
  loop?: boolean;
  autoplay?: boolean;
  /**
   * The animation's intrinsic pixel size (the lottie JSON's `w`/`h`). Webflow's
   * SVG renderer puts these on the <svg> as width/height attributes, so the
   * element has a real intrinsic size: containers with no height of their own
   * derive it from the animation's aspect ratio, and flex items stretch to the
   * animation's width. The canvas renderer defaults to 300x150, so pass these
   * for lotties whose Webflow container relies on intrinsic sizing.
   */
  width?: number;
  height?: number;
  /**
   * External playback gate: while false the animation holds its current frame
   * even if it is on screen (used by the product slider, whose hidden slides
   * keep their viewport geometry — visibility:hidden — so IntersectionObserver
   * alone can't tell them apart from the active one). Undefined means
   * "no external gate".
   */
  playing?: boolean;
  /**
   * Play once the first time the element scrolls into view, starting after
   * this many ms (the stagger delay from the IX2 SCROLL_INTO_VIEW lottie
   * actions, e.g. the frameworks compliance dials, a-122/125/126), then hold
   * the final frame — leaving view does NOT rewind, so later passes show the
   * finished state. (The original site replayed on every pass; play-once is
   * deliberate.) Reduced-motion users see the final frame immediately.
   */
  playOnView?: number;
  /**
   * Tie playback to the closest `.wf-reveal` ancestor's fade-in: wait until the
   * reveal has reached full opacity (and is in the viewport) before playing,
   * pause while scrolled off-screen and resume from the pause point on the way
   * back, and once the animation has played through hold the final frame
   * forever. Reduced-motion users see the final frame immediately.
   */
  playOnReveal?: boolean;
};

/**
 * Re-animates the Webflow Lottie blocks that were frozen to a static SVG in the
 * capture. Fills its parent wrapper so the surrounding Webflow layout still
 * drives sizing.
 *
 * Playback is viewport-aware: the player itself (canvas + WASM + .lottie
 * fetch) mounts only once the element is near the viewport, and `autoplay`
 * animations run only while actually on screen — off-screen players pause
 * instead of burning main-thread time. (This is what fixed the mobile
 * PageSpeed score: the home page used to run 8 render loops at once.)
 */
export function DotLottiePlayer({
  src,
  loop = false,
  autoplay = true,
  width,
  height,
  playing,
  playOnView,
  playOnReveal,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [instance, setInstance] = useState<DotLottie | null>(null);
  // plain-autoplay mode; playOnView/playOnReveal manage playback themselves
  const selfManaged = playOnView === undefined && !playOnReveal;

  // Mount the real player once the wrapper is within 200px of the viewport.
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          setMounted(true);
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // autoplay mode: play while on screen (and externally un-gated), pause when
  // not. Non-looping animations play through once and then hold the final
  // frame — re-entering the viewport doesn't restart them.
  useEffect(() => {
    if (!selfManaged || !autoplay || !instance) return;
    const whenLoaded = (fn: () => void) => {
      if (instance.isLoaded) fn();
      else instance.addEventListener("load", fn);
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      whenLoaded(() => instance.setFrame(Math.max(0, instance.totalFrames - 1)));
      return;
    }
    const canvas = instance.canvas;
    if (!(canvas instanceof HTMLCanvasElement)) return;
    let inView = false;
    let finished = false;

    const update = () => {
      if (finished || !instance.isLoaded) return;
      if (inView && pageIdle && playing !== false) {
        if (!instance.isPlaying) instance.play();
      } else if (instance.isPlaying) {
        instance.pause();
      }
    };

    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    });
    io.observe(canvas);

    const onComplete = () => {
      finished = true; // hold the final frame, like the original played-once SVGs
      io.disconnect();
    };
    if (!loop) instance.addEventListener("complete", onComplete);
    whenLoaded(() => whenPageIdle(update));
    return () => {
      io.disconnect();
      if (!loop) instance.removeEventListener("complete", onComplete);
    };
  }, [instance, selfManaged, autoplay, loop, playing]);

  useEffect(() => {
    if (!playOnReveal || !instance) return;
    const whenLoaded = (fn: () => void) => {
      if (instance.isLoaded) fn();
      else instance.addEventListener("load", fn);
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      whenLoaded(() => instance.setFrame(Math.max(0, instance.totalFrames - 1)));
      return;
    }
    const canvas = instance.canvas;
    if (!(canvas instanceof HTMLCanvasElement)) return;
    const reveal = canvas.closest<HTMLElement>(".wf-reveal");
    let finished = false;
    let inView = false;

    const update = () => {
      if (finished || !instance.isLoaded) return;
      // on mobile the reveal is pinned at opacity 1, so in-view alone decides
      const fullyVisible =
        inView && (!reveal || getComputedStyle(reveal).opacity === "1");
      if (fullyVisible) instance.play();
      else if (instance.isPlaying) instance.pause();
    };

    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    });
    io.observe(canvas);

    // the reveal reaching full opacity ends with a transitionend; the snap
    // back to hidden happens transitionless via a class flip, so watch both
    const onTransitionEnd = (e: TransitionEvent) => {
      if (e.target === reveal && e.propertyName === "opacity") update();
    };
    const mo = reveal ? new MutationObserver(update) : null;
    if (reveal) {
      mo!.observe(reveal, { attributes: true, attributeFilter: ["class"] });
      reveal.addEventListener("transitionend", onTransitionEnd);
    }

    const teardown = () => {
      io.disconnect();
      mo?.disconnect();
      reveal?.removeEventListener("transitionend", onTransitionEnd);
    };
    const onComplete = () => {
      finished = true; // stay on the final frame, whatever happens later
      teardown();
    };
    instance.addEventListener("complete", onComplete);
    whenLoaded(update);
    return () => {
      teardown();
      instance.removeEventListener("complete", onComplete);
    };
  }, [instance, playOnReveal]);

  useEffect(() => {
    if (playOnView === undefined || !instance) return;
    const whenLoaded = (fn: () => void) => {
      if (instance.isLoaded) fn();
      else instance.addEventListener("load", fn);
    };
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      whenLoaded(() => instance.setFrame(Math.max(0, instance.totalFrames - 1)));
      return;
    }
    const canvas = instance.canvas;
    if (!(canvas instanceof HTMLCanvasElement)) return;
    let timer: ReturnType<typeof setTimeout> | null = null;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          io.disconnect();
          whenLoaded(() => instance.play());
        }, playOnView);
      } else if (timer) {
        // left view before the stagger delay elapsed: try again next pass
        clearTimeout(timer);
        timer = null;
      }
    });
    io.observe(canvas);
    return () => {
      io.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, [instance, playOnView]);

  // The wrapper keeps the canvas's layout footprint before the player mounts,
  // so lazy-mounting causes no layout shift. When we know the intrinsic size,
  // the aspect ratio must DRIVE the height (height:auto) — a definite
  // `height:100%` against an indefinite-height parent (e.g. the product hero's
  // column-reverse image column) collapses to 0 and overrides aspect-ratio,
  // so the box reserves nothing until the canvas mounts and then jumps,
  // shifting everything below it. Lotties with no intrinsic size keep
  // `height:100%` to fill their Webflow-sized parent.
  const hasIntrinsic = width !== undefined && height !== undefined;
  const sizing = {
    width: "100%",
    height: hasIntrinsic ? "auto" : "100%",
    aspectRatio: hasIntrinsic ? `${width} / ${height}` : undefined,
  } as const;

  return (
    <div ref={wrapperRef} style={sizing}>
      {mounted && (
        <DotLottieReact
          src={src}
          loop={loop}
          // playback is driven by the visibility effects above
          autoplay={false}
          // The WASM renderer rasterizes every frame on the CPU, so pixel
          // count is the dominant cost. Capping the pixel density (1.5x on
          // phones, 2x elsewhere) cuts per-frame work ~3x on 3x-DPR devices
          // with no visible difference on animated artwork.
          renderConfig={{
            devicePixelRatio: Math.min(
              window.devicePixelRatio || 1,
              window.innerWidth <= 767 ? 1.5 : 2,
            ),
            freezeOnOffscreen: true,
          }}
          dotLottieRefCallback={setInstance}
          // width/height land on the <canvas> as attributes, giving it the same
          // intrinsic size the original SVG had
          width={width}
          height={height}
          style={sizing}
        />
      )}
    </div>
  );
}
