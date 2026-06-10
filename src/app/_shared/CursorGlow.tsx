"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Re-implements the Webflow "Hero Cursor Glow" mouse-move interaction (IX2
 * action a-27) that was frozen to a static transform in the capture. The
 * original maps the cursor's viewport position onto every `.cursor-glow`
 * element:
 *
 *   Mouse X: 0%..100% of viewport  →  translateX(-50vw .. +50vw)
 *   Mouse Y: 0%..70%  of viewport  →  translateY(-55% .. 0%), clamped past 70%
 *
 * with IX2 smoothing 50 (the glow lags the cursor) and a 50/50 resting state
 * (centered when the mouse hasn't moved). Below 768px the CSS hides
 * `.cursor-glow`, so the loop only runs while a glow element is on the page
 * and the viewport is wide enough.
 */

const REST = 0.5;

function xValue(p: number) {
  return (p - REST) * 100; // vw
}

function yValue(p: number) {
  return p < 0.7 ? -55 + (p / 0.7) * 55 : 0; // % of element height
}

export function CursorGlow() {
  const pathname = usePathname();

  useEffect(() => {
    const glows = Array.from(
      document.querySelectorAll<HTMLElement>(".cursor-glow"),
    );
    if (glows.length === 0) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let x = REST;
    let y = REST;
    let targetX = REST;
    let targetY = REST;

    const apply = () => {
      const transform = `translate3d(${xValue(x)}vw, ${yValue(y)}%, 0)`;
      for (const el of glows) el.style.transform = transform;
    };

    for (const el of glows) el.style.willChange = "transform";
    apply();
    if (reducedMotion) return; // hold the resting frame, like IX2 does

    let raf = 0;
    let last = 0;

    const tick = (now: number) => {
      // Time-corrected lerp ≈ IX2 smoothing 50 (half the gap per 60fps frame).
      const k = 1 - Math.pow(0.5, (now - last) / (1000 / 60));
      last = now;
      x += (targetX - x) * k;
      y += (targetY - y) * k;
      apply();
      if (Math.abs(targetX - x) + Math.abs(targetY - y) > 0.0005) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX / window.innerWidth;
      targetY = e.clientY / window.innerHeight;
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}
