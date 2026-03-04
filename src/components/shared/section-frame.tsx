"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionFrameProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  variant?: "default" | "dark" | "accent";
}

export function SectionFrame({
  children,
  className,
  title,
  subtitle,
  variant = "default",
}: SectionFrameProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "border-2",
        variant === "default" &&
          "border-obsidian/10 bg-white dark:border-concrete/10 dark:bg-obsidian",
        variant === "dark" &&
          "border-steel/20 bg-obsidian",
        variant === "accent" &&
          "border-safety/30 bg-safety/5",
        className
      )}
    >
      {(title || subtitle) && (
        <div
          className={cn(
            "border-b p-6 lg:p-8",
            variant === "default" && "border-obsidian/10 dark:border-concrete/10",
            variant === "dark" && "border-steel/20",
            variant === "accent" && "border-safety/30"
          )}
        >
          {subtitle && (
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
              {subtitle}
            </p>
          )}
          {title && (
            <h2
              className={cn(
                "mt-2 font-heading text-2xl font-bold lg:text-3xl",
                variant === "dark" ? "text-concrete" : "text-obsidian dark:text-concrete"
              )}
            >
              {title}
            </h2>
          )}
        </div>
      )}
      <div className="p-6 lg:p-8">{children}</div>
    </motion.section>
  );
}
