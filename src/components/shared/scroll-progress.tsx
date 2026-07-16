"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Thin safety-orange progress rail under the header — industrial, unobtrusive. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-safety"
      style={{ scaleX }}
    />
  );
}
