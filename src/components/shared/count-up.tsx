"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  /** Target value as string; leading digits animate, the rest render as-is (e.g. "10K", "130", "2027"). */
  value: string;
  suffix?: string;
  className?: string;
}

/** Animates the numeric part of a stat when it scrolls into view. */
export function CountUp({ value, suffix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView || reduce) return;
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) return;
    const target = parseInt(match[1], 10);
    const rest = match[2] ?? "";
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.25, 0.1, 0.25, 1],
      onUpdate: (v) => setDisplay(`${Math.round(v)}${rest}`),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
