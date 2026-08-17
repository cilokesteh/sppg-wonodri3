"use client";

import { useRef, useState, useCallback } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * TiltCard — 3D tilt interaktif dengan glare/spotlight.
 * - RotateX/RotateY mengikuti posisi kursor (perspective 900px)
 * - Glare: gradien radial yang nempel di posisi kursor
 * - Plain div + CSS transition (tanpa framer motion) → bebas konflik transform
 * - Nonaktif di touch device (hover gak ada) & reduced-motion
 */
export function TiltCard({
  children,
  className,
  maxDeg = 8,
}: {
  children: React.ReactNode;
  className?: string;
  maxDeg?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [glare, setGlare] = useState({ x: 50, y: 50, o: 0 });

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (reduce || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width; // 0..1
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (0.5 - py) * maxDeg * 2;
      const ry = (px - 0.5) * maxDeg * 2;
      setStyle({
        transform: `perspective(900px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-6px) scale(1.015)`,
      });
      setGlare({ x: px * 100, y: py * 100, o: 1 });
    },
    [maxDeg, reduce]
  );

  const onLeave = useCallback(() => {
    setStyle({ transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)" });
    setGlare((g) => ({ ...g, o: 0 }));
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, transition: "transform .25s cubic-bezier(.22,1,.36,1)" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
      <span
        aria-hidden="true"
        className="tilt-glare"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,.28), transparent 55%)`,
          opacity: glare.o,
        }}
      />
    </div>
  );
}
