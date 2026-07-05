"use client";

import { useRef } from "react";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  /** How strongly the button follows the cursor (px of travel). */
  strength?: number;
};

/**
 * An anchor that subtly pulls toward the cursor while hovered, then springs
 * back on leave. No-op for touch / reduced-motion users.
 */
export default function MagneticButton({
  href,
  children,
  className = "",
  external = false,
  strength = 12,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = node.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    node.style.transform = `translate(${(x / rect.width) * strength * 2}px, ${
      (y / rect.height) * strength * 2
    }px)`;
  };

  const reset = () => {
    const node = ref.current;
    if (node) node.style.transform = "";
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={`magnetic ${className}`}
    >
      {children}
    </a>
  );
}
