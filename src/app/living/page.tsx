"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Sofa, ArrowRight, Home, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";

const offerings = [
  {
    icon: Package, key: "furniture", href: "/living/furniture",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    featureKeys: ["furnitureF1", "furnitureF2", "furnitureF3"],
  },
  {
    icon: Home, key: "container", href: "/living/container-housing",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    featureKeys: ["containerF1", "containerF2", "containerF3"],
  },
] as const;

export default function LivingPage() {
  const t = useTranslations("pages.living");
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-obsidian py-20 lg:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="Modern living space"
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
                <Sofa className="h-6 w-6" />
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
                <Link href="/living/furniture">
                  {t("browseFurniture")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-concrete/20 font-heading font-bold text-concrete hover:bg-concrete/10"
              >
                <Link href="/living/container-housing">{t("viewHomes")}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Offerings */}
      <section className="bg-concrete py-20 dark:bg-obsidian/50 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
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
                  className="group overflow-hidden border-2 border-obsidian/10 bg-white dark:border-concrete/10 dark:bg-obsidian"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={offering.image}
                      alt={t(`${offering.key}Title`)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="flex h-10 w-10 items-center justify-center border-2 border-safety bg-safety text-obsidian">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-heading text-2xl font-bold text-obsidian dark:text-concrete">
                      {t(`${offering.key}Title`)}
                    </h3>
                    <p className="mt-2 text-steel dark:text-steel-light">
                      {t(`${offering.key}Desc`)}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {offering.featureKeys.map((fk) => (
                        <span
                          key={fk}
                          className="border border-obsidian/10 px-2 py-1 font-mono text-xs text-steel dark:border-concrete/10"
                        >
                          {t(fk)}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={offering.href}
                      className="mt-6 inline-flex items-center gap-2 font-heading font-bold text-obsidian transition-mechanical hover:text-safety dark:text-concrete"
                    >
                      <span>{t("explore")}</span>
                      <ArrowRight className="h-4 w-4 transition-mechanical group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="border-y-2 border-obsidian/10 bg-white py-20 dark:border-concrete/10 dark:bg-obsidian lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
              {t("philosophyEyebrow")}
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-obsidian dark:text-concrete lg:text-4xl">
              {t("philosophyTitle")}
            </h2>
            <p className="mt-6 text-lg text-steel dark:text-steel-light">
{t("philosophyBody")}
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
              { value: "85%", labelKey: "statRecycled" },
              { value: "200+", labelKey: "statHomes" },
              { value: "A+", labelKey: "statRating" },
            ].map((stat) => (
              <motion.div
                key={stat.labelKey}
                variants={mechanicalSlideUp}
                className="border border-obsidian/10 p-8 text-center dark:border-concrete/10"
              >
                <p className="font-heading text-4xl font-bold text-safety">
                  {stat.value}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-steel">
                  {t(stat.labelKey)}
                </p>
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
            <Link href="/contact?service=living">
              {t("ctaButton")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
