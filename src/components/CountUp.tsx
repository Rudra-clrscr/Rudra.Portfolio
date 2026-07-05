"use client";

import { useEffect, useRef, useState } from "react";
import usePrefersReducedMotion from "./usePrefersReducedMotion";

type CountUpProps = {
  /** Target number to count up to. */
  value: number;
  suffix?: string;
  /** Animation duration in ms. */
  duration?: number;
  className?: string;
};

/**
 * Counts up to `value` once it scrolls into view. Renders the final value on
 * the server / first paint (so crawlers and no-JS users never see "0"), then
 * resets to 0 and animates when the element enters the viewport. Handles
 * decimals (e.g. a 7.8 CGPA) and skips the animation for reduced-motion users.
 */
export default function CountUp({
  value,
  suffix = "",
  duration = 1400,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const reduced = usePrefersReducedMotion();
  const [display, setDisplay] = useState(value);
  const decimals = value % 1 !== 0 ? 1 : 0;

  useEffect(() => {
    const node = ref.current;
    if (!node || reduced) return;

    let raf = 0;
    let start = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        setDisplay(0);

        const step = (t: number) => {
          if (!start) start = t;
          const p = Math.min((t - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(value * eased);
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration, reduced]);

  const shown = reduced ? value : display;

  return (
    <span ref={ref} className={className}>
      {shown.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
