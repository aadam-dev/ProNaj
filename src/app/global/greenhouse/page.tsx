"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sprout, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GreenhouseBreakdown } from "@/components/global";
import { useTranslations } from "next-intl";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";

export default function GreenhousePage() {
  const t = useTranslations("pages.greenhouse");
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-obsidian py-20 lg:py-32">
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)`,
              backgroundSize: "100% 20px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-3xl"
          >
            <motion.div variants={mechanicalSlideUp} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border-2 border-safety text-safety">
                <Sprout className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
                {t("eyebrow")}
              </span>
            </motion.div>

            <motion.h1
              variants={mechanicalSlideUp}
              className="mt-6 font-heading text-4xl font-bold tracking-tight text-concrete md:text-5xl"
            >
              {t("title1")}
              <br />
              <span className="text-steel-light">{t("title2")}</span>
            </motion.h1>

            <motion.p
              variants={mechanicalSlideUp}
              className="mt-6 text-lg text-steel-light"
            >
{t("intro")}
            </motion.p>

            <motion.div variants={mechanicalSlideUp} className="mt-8 flex gap-4">
              <Button
                asChild
                className="bg-safety font-heading font-bold text-white hover:bg-safety/90"
              >
                <Link href="/contact?service=greenhouse">
                  {t("partner")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-concrete/20 font-heading font-bold text-concrete hover:bg-concrete/10"
              >
                <Link href="#technology">{t("viewTech")}</Link>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={mechanicalSlideUp}
              className="mt-12 grid grid-cols-3 gap-8 border-t border-steel/20 pt-8"
            >
              {[
                { value: "5 ha", labelKey: "statSize" },
                { value: "130+", labelKey: "statTons" },
                { value: "365", labelKey: "statDays" },
              ].map((stat) => (
                <div key={stat.labelKey}>
                  <p className="font-heading text-2xl font-bold text-safety lg:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-steel-light">
                    {t(stat.labelKey)}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technology Breakdown */}
      <div id="technology">
        <GreenhouseBreakdown />
      </div>

      {/* Sustainability */}
      <section className="border-y-2 border-obsidian/10 bg-obsidian py-20 dark:border-concrete/10 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
              {t("sustainEyebrow")}
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-concrete lg:text-4xl">
              {t("sustainTitle")}
            </h2>
            <p className="mt-6 text-lg text-steel-light">
              {t("sustainBody")}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-16 grid gap-8 md:grid-cols-3"
          >
            {[
              {
                value: "40%",
                labelKey: "mWater",
                descKey: "mWaterDesc",
              },
              {
                value: "60%",
                labelKey: "mSolar",
                descKey: "mSolarDesc",
              },
              {
                value: "Zero",
                labelKey: "mRunoff",
                descKey: "mRunoffDesc",
              },
            ].map((stat) => (
              <motion.div
                key={stat.labelKey}
                variants={mechanicalSlideUp}
                className="border border-steel/20 p-8 text-center"
              >
                <p className="font-heading text-4xl font-bold text-safety">
                  {stat.value}
                </p>
                <p className="mt-2 font-heading text-lg font-bold text-concrete">
                  {t(stat.labelKey)}
                </p>
                <p className="mt-2 text-sm text-steel-light">{t(stat.descKey)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-concrete py-20 dark:bg-obsidian/50">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-obsidian dark:text-concrete">
            {t("ctaTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-steel dark:text-steel-light">
{t("ctaBody")}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-safety font-heading font-bold text-white hover:bg-safety/90"
          >
            <Link href="/contact?service=greenhouse">
              {t("ctaButton")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
