"use client";

import { useEffect, useRef } from "react";

/**
 * Dependency-free 3D scroll parallax.
 *
 * Wrap any element and it drifts (and optionally tilts in 3D / zooms) as it
 * passes through the viewport — the "micro-movement on scroll" depth effect.
 * All instances share ONE passive scroll listener + a single rAF, so putting
 * many on a page stays cheap. Fully disabled for prefers-reduced-motion.
 */

type Item = { el: HTMLElement; speed: number; tilt: number; zoom: number };

const items = new Set<Item>();
let bound = false;
let pending = false;

function update() {
  pending = false;
  const mid = window.innerHeight / 2;
  items.forEach((it) => {
    const r = it.el.getBoundingClientRect();
    // p: -1 when the element sits at the top edge, +1 at the bottom, 0 centered.
    const p = Math.max(-1.5, Math.min(1.5, (r.top + r.height / 2 - mid) / mid));
    const ty = (-p * it.speed).toFixed(2);
    const rx = (p * it.tilt).toFixed(2);
    const sc = (1 + (1 - Math.min(1, Math.abs(p))) * it.zoom).toFixed(4);
    // perspective() on the element itself gives real 3D without a parent needing it.
    const persp = it.tilt ? "perspective(900px) " : "";
    it.el.style.transform = `${persp}translate3d(0, ${ty}px, 0) rotateX(${rx}deg) scale(${sc})`;
  });
}

function onScroll() {
  if (pending) return;
  pending = true;
  requestAnimationFrame(update);
}

function bind() {
  if (bound) return;
  bound = true;
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
}

function unbind() {
  if (items.size > 0) return;
  bound = false;
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onScroll);
}

type ParallaxProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Vertical drift in px across a full viewport pass. */
  speed?: number;
  /** Max rotateX (deg) for a 3D depth tilt. 0 = flat. */
  tilt?: number;
  /** Extra scale swing at viewport center (e.g. 0.06). */
  zoom?: number;
};

export default function Parallax({
  children,
  className = "",
  speed = 30,
  tilt = 0,
  zoom = 0,
  style,
  ...rest
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;

    const item: Item = { el, speed, tilt, zoom };
    items.add(item);
    bind();
    update();

    return () => {
      items.delete(item);
      el.style.transform = "";
      unbind();
    };
  }, [speed, tilt, zoom]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: "transform", ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
