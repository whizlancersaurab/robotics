// SmoothScroll.jsx
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({
  duration = 1.2,
  wheelMultiplier = 0.8,
  smoothTouch = true,
  easing = (t) => 1 - Math.pow(1 - t, 3),
}) {
  const rafRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    if (lenisRef.current) return;
    const lenis = new Lenis({
      duration,
      smooth: true,
      smoothTouch,
      wheelMultiplier,
      easing,
    });
    lenisRef.current = lenis;

    // Single RAF loop
    function raf(time) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }
    rafRef.current = requestAnimationFrame(raf);

    if (typeof window !== "undefined") window.__lenis = lenis;
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      try {
        lenis.destroy();
      } catch (e) {
      }
      lenisRef.current = null;
      if (typeof window !== "undefined" && window.__lenis === lenis) {
        delete window.__lenis;
      }
    };
  }, [duration, wheelMultiplier, smoothTouch, easing]);

  return null;
}
