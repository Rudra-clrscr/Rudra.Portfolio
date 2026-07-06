"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/**
 * Hero portrait: a morphing gradient "blob" frame with an animated glow, an
 * idle float, and subtle mouse-parallax. The photo sits at reduced saturation
 * and blooms to full color on hover. All motion is disabled for reduced-motion
 * users and parallax only runs on fine-pointer (mouse) devices.
 */
export default function HeroPortrait({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const node = ref.current;
    if (!node) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const onMove = (e: MouseEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 22;
      ty = (e.clientY / window.innerHeight - 0.5) * 22;
    };
    const loop = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      node.style.transform = `translate(${cx.toFixed(2)}px, ${cy.toFixed(2)}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="portrait-parallax">
      <div className="portrait-float">
        <div className="portrait-frame">
          <Image
            src={src}
            alt={alt}
            width={320}
            height={320}
            priority
            className="portrait-blob"
          />
        </div>
      </div>
    </div>
  );
}
