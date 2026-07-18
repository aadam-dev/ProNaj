"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, Code2, Briefcase, GraduationCap, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";

const GROUPS = [
  { key: "tech", icon: Code2 },
  { key: "finance", icon: Briefcase },
  { key: "academic", icon: GraduationCap },
] as const;

export default function ServicesPage() {
  const t = useTranslations("pages.services");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-obsidian py-20 lg:py-28">
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
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

      {/* Service groups */}
      <section className="bg-concrete py-20 dark:bg-obsidian/50 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-6 lg:grid-cols-3"
          >
            {GROUPS.map(({ key, icon: Icon }, i) => {
              const items = t.raw(`groups.${key}.items`) as string[];
              return (
                <motion.div
                  key={key}
                  variants={mechanicalSlideUp}
                  className="group flex flex-col border-2 border-obsidian/10 bg-white p-8 transition-mechanical hover:border-safety/40 dark:border-concrete/10 dark:bg-obsidian"
                >
                  <span className="mb-6 flex h-14 w-14 items-center justify-center border-2 border-obsidian/10 text-safety transition-mechanical group-hover:border-safety dark:border-concrete/10">
                    <Icon className="h-7 w-7" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-steel">
                    0{i + 1}
                  </span>
                  <h2 className="mt-1 font-heading text-2xl font-bold text-obsidian dark:text-concrete">
                    {t(`groups.${key}.title`)}
                  </h2>
                  <p className="mt-3 text-steel dark:text-steel-light">
                    {t(`groups.${key}.desc`)}
                  </p>
                  <ul className="mt-6 space-y-2.5 border-t border-obsidian/10 pt-6 dark:border-concrete/10">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-obsidian/80 dark:text-concrete/80"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-safety" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-obsidian py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-concrete md:text-4xl">
            {t("ctaTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-steel-light">{t("ctaBody")}</p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-safety font-heading font-bold text-white hover:bg-safety/90"
          >
            <Link href="/contact">
              {t("ctaButton")}
              <ArrowRight className="ml-2 h-4 w-4 rtl:rotate-180" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
