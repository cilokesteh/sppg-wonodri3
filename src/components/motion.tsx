"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Children, type ReactNode } from "react";

export type RevealDir = "up" | "left" | "right" | "alternate";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

/**
 * Single-element scroll reveal (slide in from side/bottom when scrolled into view).
 * once=true → reveals once and stays visible (never stuck hidden).
 * Reduced-motion users get plain div (no animation).
 */
export function Reveal({
  children,
  dir = "up",
  delay = 0,
  className,
  once = true,
}: {
  children: ReactNode;
  dir?: RevealDir;
  delay?: number;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const hidden =
    dir === "left" ? { x: -48, y: 0 } : dir === "right" ? { x: 48, y: 0 } : { x: 0, y: 32 };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...hidden }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Grid/group scroll reveal with stagger.
 * dir="alternate" → items slide from left/right alternating (magazine effect).
 */
export function RevealGrid({
  children,
  className,
  dir = "up",
  stagger = 0.09,
}: {
  children: ReactNode;
  className?: string;
  dir?: RevealDir;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const kids = Children.toArray(children).map((child, i) => {
    const x = dir === "alternate" ? (i % 2 === 0 ? -44 : 44) : dir === "left" ? -44 : dir === "right" ? 44 : 0;
    const y = dir === "up" ? 28 : 0;
    const v: Variants = {
      hidden: { opacity: 0, x, y },
      show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: EASE } },
    };
    return (
      <motion.div key={i} variants={v}>
        {child}
      </motion.div>
    );
  });

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-70px" }}
      variants={{ show: { transition: { staggerChildren: stagger } } }}
    >
      {kids}
    </motion.div>
  );
}
