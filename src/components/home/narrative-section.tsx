"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Leaf, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { staggerContainer, mechanicalSlideUp, blueprintReveal } from "@/lib/animations";

const pillars = [
  { icon: Zap, titleKey: "techTitle", descKey: "techDesc", color: "text-blue-500" },
  { icon: Leaf, titleKey: "sustainTitle", descKey: "sustainDesc", color: "text-green-500" },
  { icon: TrendingUp, titleKey: "tradeTitle", descKey: "tradeDesc", color: "text-safety" },
] as const;

const stats = [
  { value: "3", labelKey: "statSectors" },
  { value: "2", labelKey: "statContinents" },
  { value: "25+", labelKey: "statMarkets" },
  { value: "500+", labelKey: "statProjects" },
] as const;

export function NarrativeSection() {
  const t = useTranslations("home.narrative");
  return (
    <section className="bg-white py-20 dark:bg-obsidian lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-16 lg:grid-cols-2 lg:gap-20"
        >
          {/* Left Column - Content */}
          <div>
            <motion.div variants={mechanicalSlideUp}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
                {t("eyebrow")}
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-obsidian dark:text-concrete lg:text-4xl">
                {t("title1")}
                <br />
                <span className="text-steel">{t("title2")}</span>
              </h2>
            </motion.div>

            <motion.p
              variants={mechanicalSlideUp}
              className="mt-6 text-lg text-steel dark:text-steel-light"
            >
{t("body")}
            </motion.p>

            {/* Pillars */}
            <motion.div variants={mechanicalSlideUp} className="mt-10 space-y-6">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.titleKey} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-obsidian/10 dark:border-concrete/10">
                      <Icon className={`h-5 w-5 ${pillar.color}`} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-obsidian dark:text-concrete">
                        {t(pillar.titleKey)}
                      </h3>
                      <p className="mt-1 text-sm text-steel dark:text-steel-light">
                        {t(pillar.descKey)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <motion.div variants={mechanicalSlideUp} className="mt-10">
              <Button
                asChild
                className="bg-obsidian font-heading font-bold text-concrete hover:bg-obsidian/90 dark:bg-concrete dark:text-obsidian dark:hover:bg-concrete/90"
              >
                <Link href="/about">
                  {t("cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div variants={mechanicalSlideUp} className="relative">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                variants={blueprintReveal}
                className="relative aspect-[3/4] overflow-hidden border-2 border-obsidian/10 dark:border-concrete/10"
              >
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                  alt="Modern office technology"
                  fill
                  className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                />
              </motion.div>
              <motion.div
                variants={blueprintReveal}
                className="relative mt-8 aspect-[3/4] overflow-hidden border-2 border-obsidian/10 dark:border-concrete/10"
              >
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="Container architecture"
                  fill
                  className="object-cover grayscale transition-all duration-500 hover:grayscale-0"
                />
              </motion.div>
            </div>

            {/* Stats Overlay */}
            <motion.div
              variants={mechanicalSlideUp}
              className="absolute -bottom-8 left-4 right-4 border-2 border-obsidian bg-obsidian p-6 dark:border-concrete dark:bg-concrete lg:-left-8 lg:right-8"
            >
              <div className="grid grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <div key={stat.labelKey} className="text-center">
                    <p className="font-heading text-2xl font-bold text-safety lg:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-concrete/70 dark:text-obsidian/70 lg:text-[10px]">
                      {t(stat.labelKey)}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
