"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CocopeatPipeline } from "@/components/global";
import { useTranslations } from "next-intl";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";

const applications = [
  { key: "hort", useKeys: ["hortU1", "hortU2", "hortU3"] },
  { key: "agri", useKeys: ["agriU1", "agriU2", "agriU3"] },
  { key: "land", useKeys: ["landU1", "landU2", "landU3"] },
] as const;

export default function CocopeatPage() {
  const t = useTranslations("pages.cocopeat");
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-obsidian py-20 lg:py-32">
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(249, 115, 22, 0.5) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
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
                <Leaf className="h-5 w-5" />
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
                <Link href="/contact?service=cocopeat">
                  {t("requestQuote")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-concrete/20 font-heading font-bold text-concrete hover:bg-concrete/10"
              >
                <Link href="#pipeline">{t("viewPipeline")}</Link>
              </Button>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={mechanicalSlideUp} className="mt-12">
              <p className="mb-4 font-mono text-xs uppercase tracking-wider text-steel">
                {t("certsLabel")}
              </p>
              <div className="flex flex-wrap gap-3">
                {(["cert1", "cert2", "cert3", "cert4"] as const).map(
                  (cert) => (
                    <span
                      key={cert}
                      className="border border-safety/30 bg-safety/10 px-3 py-1 font-mono text-xs text-safety"
                    >
                      {t(cert)}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pipeline */}
      <div id="pipeline">
        <CocopeatPipeline />
      </div>

      {/* Applications */}
      <section className="border-y-2 border-obsidian/10 bg-white py-20 dark:border-concrete/10 dark:bg-obsidian lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
              {t("appsEyebrow")}
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-obsidian dark:text-concrete">
              {t("appsTitle")}
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3"
          >
            {applications.map((app) => (
              <motion.div
                key={app.key}
                variants={mechanicalSlideUp}
                className="border-2 border-obsidian/10 p-8 dark:border-concrete/10"
              >
                <h3 className="font-heading text-xl font-bold text-obsidian dark:text-concrete">
                  {t(`${app.key}Title`)}
                </h3>
                <p className="mt-2 text-steel dark:text-steel-light">
                  {t(`${app.key}Desc`)}
                </p>
                <ul className="mt-4 space-y-2">
                  {app.useKeys.map((uk) => (
                    <li
                      key={uk}
                      className="flex items-center gap-2 text-sm text-obsidian/70 dark:text-concrete/70"
                    >
                      <span className="h-1 w-1 rounded-full bg-safety" />
                      {t(uk)}
                    </li>
                  ))}
                </ul>
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
            <Link href="/contact?service=cocopeat">
              {t("ctaButton")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
