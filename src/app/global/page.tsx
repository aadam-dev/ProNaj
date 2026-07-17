"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Globe, ArrowRight, Leaf, Ship } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TradeRouteMap } from "@/components/global";
import { CountUp } from "@/components/shared/count-up";
import { useTranslations } from "next-intl";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";

const offerings = [
  { icon: Leaf, key: "cocopeat", href: "/global/cocopeat", stats: { value: "10K MT" } },
  { icon: Ship, key: "greenhouse", href: "/global/greenhouse", stats: { value: "130+ tons" } },
] as const;

export default function GlobalPage() {
  const t = useTranslations("pages.global");
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-obsidian py-20 lg:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1920&q=80"
            alt="Agricultural field"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/90 to-obsidian/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-3xl"
          >
            <motion.div variants={mechanicalSlideUp} className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center border-2 border-safety bg-safety text-obsidian">
                <Globe className="h-6 w-6" />
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
                {t("eyebrow")}
              </span>
            </motion.div>

            <motion.h1
              variants={mechanicalSlideUp}
              className="mt-6 font-heading text-4xl font-bold tracking-tight text-concrete md:text-5xl lg:text-6xl"
            >
              {t("title1")}
              <br />
              <span className="text-steel-light">{t("title2")}</span>
            </motion.h1>

            <motion.p
              variants={mechanicalSlideUp}
              className="mt-6 text-lg text-steel-light lg:text-xl"
            >
{t("intro")}
            </motion.p>

            <motion.div variants={mechanicalSlideUp} className="mt-8 flex gap-4">
              <Button
                asChild
                className="bg-safety font-heading font-bold text-white hover:bg-safety/90"
              >
                <Link href="/global/cocopeat">
                  {t("exploreCocopeat")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-concrete/20 font-heading font-bold text-concrete hover:bg-concrete/10"
              >
                <Link href="/global/greenhouse">{t("viewGreenhouse")}</Link>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={mechanicalSlideUp}
              className="mt-12 grid grid-cols-3 gap-8 border-t border-steel/20 pt-8"
            >
              {[
                { value: "25+", labelKey: "statMarkets" },
                { value: "10K MT", labelKey: "statExport" },
                { value: "5 ha", labelKey: "statGreenhouse" },
              ].map((stat) => (
                <div key={t(stat.labelKey)}>
                  <p className="font-heading text-2xl font-bold text-safety lg:text-3xl">
                    <CountUp value={stat.value} />
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

      {/* Trade Route Map */}
      <TradeRouteMap />

      {/* Gold Coast Croire — flagship brand in development */}
      <section className="relative overflow-hidden bg-obsidian py-16 lg:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(105deg, #D4A017 0 2px, transparent 2px 56px)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-start justify-between gap-8 border-2 p-8 lg:flex-row lg:items-center lg:p-12"
            style={{ borderColor: "rgba(212, 160, 23, 0.4)", background: "rgba(212, 160, 23, 0.06)" }}
          >
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: "#D4A017" }}>
                  {t("croireBadge")}
                </span>
                <span
                  className="border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-concrete/70"
                  style={{ borderColor: "rgba(212, 160, 23, 0.5)", background: "rgba(212, 160, 23, 0.12)" }}
                >
                  {t("croireStatus")}
                </span>
              </div>
              <h2 className="mt-4 font-heading text-3xl font-bold text-concrete md:text-4xl">
                Gold Coast <span style={{ color: "#D4A017" }}>Croire</span>
              </h2>
              <p className="mt-3 text-steel-light">
{t("croireBody")}
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="shrink-0 font-heading font-bold text-obsidian hover:opacity-90"
              style={{ background: "#D4A017" }}
            >
              <Link href="/global/croire">
                {t("croireCta")}
                <ArrowRight className="ml-2 h-4 w-4 rtl:rotate-180" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Offerings */}
      <section className="bg-concrete py-20 dark:bg-obsidian/50 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
              {t("opsEyebrow")}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-obsidian dark:text-concrete">
              {t("opsTitle")}
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-8 lg:grid-cols-2"
          >
            {offerings.map((offering) => {
              const Icon = offering.icon;
              return (
                <motion.div
                  key={offering.key}
                  variants={mechanicalSlideUp}
                  className="group border-2 border-obsidian/10 bg-white p-8 transition-mechanical hover:border-safety/30 dark:border-concrete/10 dark:bg-obsidian lg:p-10"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center border-2 border-obsidian/10 text-steel transition-mechanical group-hover:border-safety group-hover:text-safety dark:border-concrete/10">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="text-right">
                      <p className="font-heading text-3xl font-bold text-safety">
                        {offering.stats.value}
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-steel">
                        {t(`${offering.key}StatLabel`)}
                      </p>
                    </div>
                  </div>

                  <h3 className="mt-6 font-heading text-2xl font-bold text-obsidian dark:text-concrete">
                    {t(`${offering.key}Title`)}
                  </h3>
                  <p className="mt-3 text-steel dark:text-steel-light">
                    {t(`${offering.key}Desc`)}
                  </p>

                  <Link
                    href={offering.href}
                    className="mt-6 inline-flex items-center gap-2 font-heading font-bold text-obsidian transition-mechanical hover:text-safety dark:text-concrete"
                  >
                    <span>{t("learnMore")}</span>
                    <ArrowRight className="h-4 w-4 transition-mechanical group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Delaware Bridge Highlight */}
      <section className="border-y-2 border-obsidian/10 bg-white py-20 dark:border-concrete/10 dark:bg-obsidian lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
              {t("structureEyebrow")}
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-obsidian dark:text-concrete lg:text-4xl">
              {t("structureTitle")}
            </h2>
            <p className="mt-6 text-lg text-steel dark:text-steel-light">
{t("structureBody")}
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="border-2 border-obsidian/10 p-6 dark:border-concrete/10">
                <span className="text-3xl">🇺🇸</span>
                <h3 className="mt-3 font-heading text-lg font-bold text-obsidian dark:text-concrete">
                  {t("llcName")}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-safety">
                  {t("llcLoc")}
                </p>
                <p className="mt-3 text-sm text-steel dark:text-steel-light">
{t("llcDesc")}
                </p>
              </div>
              <div className="border-2 border-obsidian/10 p-6 dark:border-concrete/10">
                <span className="text-3xl">🇬🇭</span>
                <h3 className="mt-3 font-heading text-lg font-bold text-obsidian dark:text-concrete">
                  {t("ghanaName")}
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-safety">
                  {t("ghanaLoc")}
                </p>
                <p className="mt-3 text-sm text-steel dark:text-steel-light">
{t("ghanaDesc")}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-obsidian py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-concrete">
            {t("ctaTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-steel-light">
{t("ctaBody")}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-safety font-heading font-bold text-white hover:bg-safety/90"
          >
            <Link href="/contact?service=global">
              {t("ctaButton")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
