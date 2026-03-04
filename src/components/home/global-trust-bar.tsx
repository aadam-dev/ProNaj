"use client";

import { motion } from "framer-motion";
import { Shield, FileCheck, Scale, Globe2 } from "lucide-react";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";

const locations = [
  {
    flag: "🇺🇸",
    country: "Delaware, USA",
    role: "Parent Corporation",
    description: "Registered under Delaware General Corporation Law",
  },
  {
    flag: "🇬🇭",
    country: "Accra, Ghana",
    role: "Operations Hub",
    description: "Manufacturing, agriculture, and regional operations",
  },
];

const badges = [
  {
    icon: Shield,
    label: "Compliance & Security",
    description: "SOC 2 Type II Certified",
  },
  {
    icon: FileCheck,
    label: "Export Certified",
    description: "US & EU Export Compliant",
  },
  {
    icon: Scale,
    label: "Legal Structure",
    description: "Delaware LLC Formation",
  },
  {
    icon: Globe2,
    label: "Global Operations",
    description: "Multi-jurisdiction Presence",
  },
];

export function GlobalTrustBar() {
  return (
    <section className="border-y-2 border-obsidian/10 bg-concrete dark:border-concrete/10 dark:bg-obsidian/50">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={mechanicalSlideUp} className="mb-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
              Global Presence
            </p>
            <h2 className="mt-2 font-heading text-2xl font-bold text-obsidian dark:text-concrete lg:text-3xl">
              Delaware-Ghana Bridge
            </h2>
            <p className="mt-2 text-steel dark:text-steel-light">
              A unified corporate structure connecting American compliance with
              African operations
            </p>
          </motion.div>

          {/* Locations */}
          <motion.div
            variants={mechanicalSlideUp}
            className="mb-10 grid gap-4 md:grid-cols-2"
          >
            {locations.map((location) => (
              <div
                key={location.country}
                className="group flex items-start gap-4 border-2 border-obsidian/10 bg-white p-6 transition-mechanical hover:border-safety/30 dark:border-concrete/10 dark:bg-obsidian"
              >
                <span className="text-4xl">{location.flag}</span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-obsidian dark:text-concrete">
                    {location.country}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-safety">
                    {location.role}
                  </p>
                  <p className="mt-2 text-sm text-steel dark:text-steel-light">
                    {location.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Connection Line Visual */}
          <motion.div
            variants={mechanicalSlideUp}
            className="relative mb-10 hidden md:block"
          >
            <div className="absolute left-1/4 right-1/4 top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-transparent via-safety to-transparent" />
            <div className="flex justify-center">
              <div className="relative z-10 flex h-10 w-10 items-center justify-center border-2 border-safety bg-concrete dark:bg-obsidian">
                <div className="h-2 w-2 rounded-full bg-safety" />
              </div>
            </div>
          </motion.div>

          {/* Compliance Badges */}
          <motion.div
            variants={mechanicalSlideUp}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.label}
                  className="group flex items-center gap-3 border border-obsidian/10 bg-obsidian/5 p-4 transition-mechanical hover:border-safety/30 dark:border-concrete/10 dark:bg-concrete/5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-obsidian/20 text-steel transition-mechanical group-hover:border-safety group-hover:text-safety dark:border-concrete/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-bold text-obsidian dark:text-concrete">
                      {badge.label}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-steel">
                      {badge.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
