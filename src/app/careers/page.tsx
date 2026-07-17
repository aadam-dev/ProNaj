"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";

const openings = [
  { id: "senior-fullstack", deptKey: "digital", tKey: "j1" },
  { id: "cybersecurity-analyst", deptKey: "digital", tKey: "j2" },
  { id: "production-manager", deptKey: "living", tKey: "j3" },
  { id: "export-coordinator", deptKey: "global", tKey: "j4" },
  { id: "greenhouse-technician", deptKey: "global", tKey: "j5" },
] as const;

const benefits = ["b1", "b2", "b3", "b4", "b5", "b6"] as const;

export default function CareersPage() {
  const t = useTranslations("pages.careers");
  const tNav = useTranslations("nav");
  return (
    <>
      {/* Hero */}
      <section className="bg-obsidian py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
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
              className="mt-4 font-heading text-4xl font-bold tracking-tight text-concrete md:text-5xl"
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
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b-2 border-obsidian/10 bg-concrete py-16 dark:border-concrete/10 dark:bg-obsidian/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {benefits.map((benefit) => (
              <span
                key={t(benefit)}
                className="border border-obsidian/10 bg-white px-4 py-2 font-mono text-sm text-obsidian dark:border-concrete/10 dark:bg-obsidian dark:text-concrete"
              >
                {t(benefit)}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-concrete py-20 dark:bg-obsidian/50 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
              {t("positionsEyebrow")}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-obsidian dark:text-concrete">
              {t("positionsTitle")}
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {openings.map((job) => (
              <motion.div
                key={job.id}
                variants={mechanicalSlideUp}
                className="group border-2 border-obsidian/10 bg-white p-6 transition-mechanical hover:border-safety/30 dark:border-concrete/10 dark:bg-obsidian"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="border border-safety/30 bg-safety/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-safety">
                        {tNav(job.deptKey)}
                      </span>
                    </div>
                    <h3 className="mt-2 font-heading text-xl font-bold text-obsidian dark:text-concrete">
                      {t(`${job.tKey}t`)}
                    </h3>
                    <p className="mt-1 text-sm text-steel dark:text-steel-light">
                      {t(`${job.tKey}d`)}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-4 text-sm text-steel dark:text-steel-light">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {t(`${job.tKey}l`)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {t("fullTime")}
                      </span>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="shrink-0 border-obsidian/10 font-heading font-bold hover:border-safety hover:text-safety dark:border-concrete/10"
                  >
                    <Link href={`/contact?type=careers&position=${job.id}`}>
                      {t("apply")}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
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
            <Link href="/contact?type=careers">
              {t("ctaButton")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
