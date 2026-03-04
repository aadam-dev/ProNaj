"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cardHover, mechanicalTransition } from "@/lib/animations";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  href: string;
  icon: LucideIcon;
  index: number;
}

export function ServiceCard({
  title,
  description,
  features,
  technologies,
  href,
  icon: Icon,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      variants={cardHover}
      initial="initial"
      whileHover="hover"
      className="group relative border-2 border-obsidian/10 bg-white p-6 transition-mechanical dark:border-concrete/10 dark:bg-obsidian lg:p-8"
    >
      {/* Index Number */}
      <span className="absolute right-4 top-4 font-mono text-6xl font-bold text-obsidian/5 dark:text-concrete/5">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center border-2 border-obsidian/10 text-steel transition-mechanical group-hover:border-safety group-hover:bg-safety group-hover:text-white dark:border-concrete/10">
        <Icon className="h-7 w-7" />
      </div>

      {/* Title */}
      <h3 className="font-heading text-xl font-bold text-obsidian dark:text-concrete lg:text-2xl">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-steel dark:text-steel-light">{description}</p>

      {/* Features */}
      <ul className="mt-6 space-y-2">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-sm text-obsidian/70 dark:text-concrete/70"
          >
            <span className="h-1 w-1 rounded-full bg-safety" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="mt-6 border-t border-obsidian/10 pt-6 dark:border-concrete/10">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-steel">
          Technologies
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="border border-obsidian/10 bg-obsidian/5 px-2 py-1 font-mono text-xs text-obsidian dark:border-concrete/10 dark:bg-concrete/5 dark:text-concrete"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-bold text-obsidian transition-mechanical group-hover:text-safety dark:text-concrete"
      >
        <span>Learn More</span>
        <ArrowRight className="h-4 w-4 transition-mechanical group-hover:translate-x-1" />
      </Link>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-safety"
        initial={{ scaleX: 0, originX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={mechanicalTransition}
      />
    </motion.div>
  );
}
