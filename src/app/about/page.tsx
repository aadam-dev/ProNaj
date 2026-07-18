"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Target, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DelawareBridge } from "@/components/shared";
import { useTranslations } from "next-intl";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";

const values = [
  { icon: Target, titleKey: "precisionTitle", descKey: "precisionDesc" },
  { icon: Globe, titleKey: "reachTitle", descKey: "reachDesc" },
  { icon: Users, titleKey: "peopleTitle", descKey: "peopleDesc" },
] as const;

const timeline = [
  { year: "2020", eventKey: "t2020" },
  { year: "2021", eventKey: "t2021" },
  { year: "2022", eventKey: "t2022" },
  { year: "2023", eventKey: "t2023" },
  { year: "2024", eventKey: "t2024" },
  { year: "2025", eventKey: "t2025" },
] as const;

export default function AboutPage() {
  const t = useTranslations("pages.about");
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-obsidian py-20 lg:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Pronaj team"
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
            <motion.p
              variants={mechanicalSlideUp}
              className="font-mono text-xs uppercase tracking-[0.2em] text-safety"
            >
              {t("eyebrow")}
            </motion.p>

            <motion.h1
              variants={mechanicalSlideUp}
              className="mt-4 font-heading text-4xl font-bold tracking-tight text-concrete md:text-5xl lg:text-6xl"
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
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-concrete py-20 dark:bg-obsidian/50 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
              {t("valuesEyebrow")}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-obsidian dark:text-concrete">
              {t("valuesTitle")}
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-3"
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.titleKey}
                  variants={mechanicalSlideUp}
                  className="border-2 border-obsidian/10 bg-white p-8 dark:border-concrete/10 dark:bg-obsidian"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center border-2 border-obsidian/10 text-safety dark:border-concrete/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-obsidian dark:text-concrete">
                    {t(value.titleKey)}
                  </h3>
                  <p className="mt-2 text-steel dark:text-steel-light">
                    {t(value.descKey)}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Structure */}
      <section className="border-y-2 border-obsidian/10 bg-white py-20 dark:border-concrete/10 dark:bg-obsidian lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <DelawareBridge />
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-obsidian py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
              {t("journeyEyebrow")}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-concrete">
              {t("journeyTitle")}
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-4 top-0 h-full w-px bg-steel/20 md:left-1/2" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                variants={mechanicalSlideUp}
                className={`relative mb-8 flex items-center gap-4 md:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div
                    className={`inline-block border border-steel/20 bg-steel/5 p-4 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <p className="font-mono text-lg font-bold text-safety">
                      {item.year}
                    </p>
                    <p className="mt-1 text-concrete">{t(item.eventKey)}</p>
                  </div>
                </div>
                <div className="absolute left-4 flex h-3 w-3 items-center justify-center rounded-full bg-safety md:left-1/2 md:-translate-x-1/2" />
                <div className="hidden flex-1 md:block" />
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
            <Link href="/careers">
              {t("ctaButton")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
