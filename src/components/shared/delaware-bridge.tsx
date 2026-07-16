"use client";

import { motion } from "framer-motion";
import { Building2, ArrowDown, Shield, FileCheck } from "lucide-react";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";

interface DelawareBridgeProps {
  variant?: "full" | "compact";
}

export function DelawareBridge({ variant = "full" }: DelawareBridgeProps) {
  if (variant === "compact") {
    return (
      <div className="border-2 border-obsidian/10 bg-white p-6 dark:border-concrete/10 dark:bg-obsidian">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-safety">
          Corporate Structure
        </p>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <span className="text-2xl">🇺🇸</span>
            <p className="mt-1 font-heading text-sm font-bold text-obsidian dark:text-concrete">
              Delaware
            </p>
            <p className="font-mono text-[10px] text-steel">Parent</p>
          </div>
          <ArrowDown className="h-4 w-4 rotate-[-90deg] text-safety" />
          <div className="text-center">
            <span className="text-2xl">🇬🇭</span>
            <p className="mt-1 font-heading text-sm font-bold text-obsidian dark:text-concrete">
              Ghana
            </p>
            <p className="font-mono text-[10px] text-steel">Operations</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.section
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="border-2 border-obsidian/10 bg-white dark:border-concrete/10 dark:bg-obsidian"
    >
      {/* Header */}
      <div className="border-b border-obsidian/10 p-6 dark:border-concrete/10 lg:p-8">
        <motion.div variants={mechanicalSlideUp} className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
            Corporate Structure
          </p>
          <h2 className="mt-2 font-heading text-2xl font-bold text-obsidian dark:text-concrete lg:text-3xl">
            The Delaware-Ghana Bridge
          </h2>
        </motion.div>
      </div>

      {/* Structure Diagram */}
      <div className="p-6 lg:p-8">
        <motion.div
          variants={mechanicalSlideUp}
          className="mx-auto max-w-2xl"
        >
          {/* Parent Company */}
          <div className="relative border-2 border-obsidian/10 bg-concrete/50 p-6 dark:border-concrete/10 dark:bg-obsidian/50">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🇺🇸</span>
              <div>
                <h3 className="font-heading text-xl font-bold text-obsidian dark:text-concrete">
                  Pronaj International LLC
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-safety">
                  Delaware, USA • Parent Corporation
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="flex items-center gap-1 border border-obsidian/10 px-2 py-1 text-xs text-steel dark:border-concrete/10">
                <Shield className="h-3 w-3" />
                US Compliance
              </span>
              <span className="flex items-center gap-1 border border-obsidian/10 px-2 py-1 text-xs text-steel dark:border-concrete/10">
                <FileCheck className="h-3 w-3" />
                Export Authority
              </span>
              <span className="flex items-center gap-1 border border-obsidian/10 px-2 py-1 text-xs text-steel dark:border-concrete/10">
                <Building2 className="h-3 w-3" />
                Holding Company
              </span>
            </div>
          </div>

          {/* Connection */}
          <div className="flex justify-center py-4">
            <div className="flex flex-col items-center">
              <div className="h-8 w-px bg-safety" />
              <ArrowDown className="h-5 w-5 text-safety" />
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-steel">
                Wholly Owned
              </p>
            </div>
          </div>

          {/* Subsidiary */}
          <div className="relative border-2 border-obsidian/10 bg-concrete/50 p-6 dark:border-concrete/10 dark:bg-obsidian/50">
            <div className="flex items-center gap-4">
              <span className="text-4xl">🇬🇭</span>
              <div>
                <h3 className="font-heading text-xl font-bold text-obsidian dark:text-concrete">
                  Pronaj Ghana Ltd
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-safety">
                  Accra, Ghana • Operations Hub
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="flex items-center gap-1 border border-obsidian/10 px-2 py-1 text-xs text-steel dark:border-concrete/10">
                Manufacturing
              </span>
              <span className="flex items-center gap-1 border border-obsidian/10 px-2 py-1 text-xs text-steel dark:border-concrete/10">
                Agriculture
              </span>
              <span className="flex items-center gap-1 border border-obsidian/10 px-2 py-1 text-xs text-steel dark:border-concrete/10">
                Local Distribution
              </span>
            </div>
          </div>
        </motion.div>

        {/* Legal Note */}
        <motion.div
          variants={mechanicalSlideUp}
          className="mt-8 border-t border-obsidian/10 pt-6 text-center dark:border-concrete/10"
        >
          <p className="font-mono text-xs text-steel dark:text-steel-light">
            Registered under Delaware General Corporation Law. Operations
            conducted through wholly-owned subsidiary in accordance with
            applicable US and Ghanaian regulations.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
