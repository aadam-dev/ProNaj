"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Monitor, Sofa, Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { mechanicalTransition, slowMechanicalTransition } from "@/lib/animations";

const sectors = [
  {
    id: "digital",
    href: "/digital",
    icon: Monitor,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80",
    stats: [
      { key: "projectsDelivered", value: "500+" },
      { key: "uptime", value: "99.9%" },
    ],
  },
  {
    id: "living",
    href: "/living",
    icon: Sofa,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    stats: [
      { key: "homesBuilt", value: "200+" },
      { key: "sustainability", value: "A+" },
    ],
  },
  {
    id: "global",
    href: "/global",
    icon: Globe,
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1920&q=80",
    stats: [
      { key: "exportVolume", value: "10K MT" },
      { key: "markets", value: "25+" },
    ],
  },
] as const;

export function HeroSlider() {
  const t = useTranslations("home");
  const tNav = useTranslations("nav");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-obsidian">
      {/* Background Image Layer */}
      <AnimatePresence mode="wait">
        {activeIndex !== null && (
          <motion.div
            key={sectors[activeIndex].id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={sectors[activeIndex].image}
              alt={tNav(sectors[activeIndex].id)}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-obsidian/30" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Default gradient when no sector is hovered */}
      {activeIndex === null && (
        <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-obsidian to-steel/20" />
      )}

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 text-center lg:mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-safety">
            {t("heroEyebrow")}
          </p>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-concrete md:text-5xl lg:text-6xl">
            {t("heroTitle1")}
            <br />
            <span className="text-steel-light">{t("heroTitle2")}</span>
          </h1>
        </motion.div>

        {/* 3-Column Sector Slider */}
        <div className="flex min-h-[400px] gap-2 lg:gap-4">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            const isActive = activeIndex === index;
            const isCompressed = activeIndex !== null && activeIndex !== index;

            return (
              <motion.div
                key={sector.id}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                animate={{
                  flex: isActive ? 3 : isCompressed ? 0.5 : 1,
                }}
                transition={slowMechanicalTransition}
                className="group relative cursor-pointer overflow-hidden border-2 border-steel/20 bg-obsidian/50 backdrop-blur-sm"
              >
                {/* Sector Content */}
                <div className="flex h-full flex-col justify-between p-6 lg:p-8">
                  {/* Top */}
                  <div>
                    <div
                      className={cn(
                        "mb-4 flex h-12 w-12 items-center justify-center border-2 transition-mechanical",
                        isActive
                          ? "border-safety bg-safety text-obsidian"
                          : "border-steel/30 text-steel-light group-hover:border-safety group-hover:text-safety"
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <h2
                      className={cn(
                        "font-heading text-2xl font-bold transition-mechanical lg:text-3xl",
                        isActive ? "text-safety" : "text-concrete"
                      )}
                    >
                      {tNav(sector.id)}
                    </h2>

                    <p className="mt-1 font-mono text-xs uppercase tracking-wider text-steel-light">
                      {t(`sectors.${sector.id}Tagline`)}
                    </p>

                    {/* Description - only visible when active */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={mechanicalTransition}
                          className="mt-4 text-sm text-steel-light lg:text-base"
                        >
                          {t(`sectors.${sector.id}Desc`)}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bottom */}
                  <div>
                    {/* Stats - only visible when active */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={mechanicalTransition}
                          className="mb-6 grid grid-cols-2 gap-4"
                        >
                          {sector.stats.map((stat) => (
                            <div key={stat.key}>
                              <p className="font-heading text-2xl font-bold text-safety">
                                {stat.value}
                              </p>
                              <p className="font-mono text-[10px] uppercase tracking-wider text-steel">
                                {t(`stats.${stat.key}`)}
                              </p>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* CTA */}
                    <Link
                      href={sector.href}
                      className={cn(
                        "inline-flex items-center gap-2 font-heading text-sm font-bold transition-mechanical",
                        isActive
                          ? "text-safety"
                          : "text-steel-light group-hover:text-safety"
                      )}
                    >
                      <span>{t("explore")} {tNav(sector.id)}</span>
                      <ArrowRight
                        className={cn(
                          "h-4 w-4 transition-mechanical",
                          isActive && "translate-x-1"
                        )}
                      />
                    </Link>
                  </div>
                </div>

                {/* Active border indicator */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-safety"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={mechanicalTransition}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Hint */}
        <p className="mt-8 text-center font-mono text-xs text-steel lg:hidden">
          {t("mobileHint")}
        </p>
      </div>
    </section>
  );
}
