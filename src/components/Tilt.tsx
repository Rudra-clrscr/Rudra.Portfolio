"use client";

import { useRef } from "react";

type TiltProps = {
  children: React.ReactNode;
  className?: string;
  /** Max tilt in degrees. */
  max?: number;
};

/**
 * Wraps content and tilts it toward the cursor in 3D on hover. Pointer-based,
 * dependency-free, and a no-op on touch / reduced-motion devices.
 */
export default function Tilt({ children, className = "", max = 8 }: TiltProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = node.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - py) * max * 2;
    const ry = (px - 0.5) * max * 2;
    node.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
  };

  const reset = () => {
    const node = ref.current;
    if (node) node.style.transform = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`tilt ${className}`}
    >
      {children}
    </div>
  );
}
