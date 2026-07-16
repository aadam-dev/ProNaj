"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowLeft, ArrowRight, Factory, Leaf, Ship, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/shared/count-up";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";

/** Croire brand gold — Gold Coast heritage inside the industrial system. */
const GOLD = "#D4A017";

const PILLARS = [
  { key: "substrate", icon: Leaf, operating: true },
  { key: "greenhouse", icon: Sprout, operating: true },
  { key: "processing", icon: Factory, operating: false },
  { key: "logistics", icon: Ship, operating: false },
] as const;

const PHASES = ["phase1", "phase2", "phase3"] as const;
const METRICS = ["substrate", "yield", "continents", "harvest"] as const;

function Marquee({ text }: { text: string }) {
  const reduce = useReducedMotion();
  const row = (
    <span aria-hidden="true" className="flex shrink-0 items-center gap-8 pr-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="flex items-center gap-8">
          <span className="font-heading text-sm font-bold uppercase tracking-[0.3em]">
            {text}
          </span>
          <span style={{ color: GOLD }}>◆</span>
        </span>
      ))}
    </span>
  );
  return (
    <div
      className="flex overflow-hidden border-y-2 py-3 text-concrete/60"
      style={{ borderColor: `${GOLD}30`, background: "#0a0a0a" }}
    >
      <motion.div
        className="flex"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
      >
        {row}
        {row}
      </motion.div>
    </div>
  );
}

export default function CroirePage() {
  const t = useTranslations("croire");
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-obsidian py-24 lg:py-36"
      >
        {/* Parallax field-row backdrop */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07]"
          style={reduce ? undefined : { y: bgY }}
        >
          <div
            className="h-[130%] w-full"
            style={{
              backgroundImage: `repeating-linear-gradient(105deg, ${GOLD} 0 2px, transparent 2px 56px)`,
            }}
          />
        </motion.div>
        {/* Gold horizon glow */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-64"
          style={{
            background: `linear-gradient(to top, ${GOLD}14, transparent)`,
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-3xl"
          >
            <motion.div variants={mechanicalSlideUp}>
              <Link
                href="/global"
                className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-steel transition-mechanical hover:text-safety"
              >
                <ArrowLeft className="h-3.5 w-3.5 rtl:rotate-180" />
                {t("backToGlobal")}
              </Link>
            </motion.div>

            <motion.div
              variants={mechanicalSlideUp}
              className="flex flex-wrap items-center gap-3"
            >
              <span
                className="font-mono text-xs uppercase tracking-[0.2em]"
                style={{ color: GOLD }}
              >
                {t("eyebrow")}
              </span>
              <span
                className="border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-concrete/70"
                style={{ borderColor: `${GOLD}50`, background: `${GOLD}12` }}
              >
                {t("status")}
              </span>
            </motion.div>

            <motion.h1
              variants={mechanicalSlideUp}
              style={reduce ? undefined : { y: titleY }}
              className="mt-6 font-heading text-5xl font-bold leading-[0.95] tracking-tight text-concrete md:text-7xl"
            >
              {t("title1")}
              <br />
              <span style={{ color: GOLD }}>{t("title2")}</span>
            </motion.h1>

            <motion.p
              variants={mechanicalSlideUp}
              className="mt-6 font-heading text-xl italic text-steel-light md:text-2xl"
            >
              {t("tagline")}
            </motion.p>

            <motion.p
              variants={mechanicalSlideUp}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-steel-light"
            >
              {t("intro")}
            </motion.p>

            <motion.div variants={mechanicalSlideUp} className="mt-10">
              <Button
                asChild
                size="lg"
                className="font-heading font-bold text-obsidian hover:opacity-90"
                style={{ background: GOLD }}
              >
                <Link href="/contact?service=croire">
                  {t("ctaButton")}
                  <ArrowRight className="ml-2 h-4 w-4 rtl:rotate-180" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Marquee text="Gold Coast Croire" />

      {/* ── Why Croire ───────────────────────────────────── */}
      <section className="bg-concrete py-20 dark:bg-obsidian lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-12 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-4"
          >
            <h2 className="font-heading text-3xl font-bold text-obsidian dark:text-concrete md:text-4xl">
              {t("whyTitle")}
            </h2>
            <div className="mt-4 h-1 w-16" style={{ background: GOLD }} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg leading-relaxed text-steel dark:text-steel-light lg:col-span-8 lg:text-xl"
          >
            {t("whyBody")}
          </motion.p>
        </div>
      </section>

      {/* ── Pillars ──────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-obsidian py-20 lg:py-28">
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(${GOLD}80 1px, transparent 1px), linear-gradient(90deg, ${GOLD}80 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span
              variants={mechanicalSlideUp}
              className="font-mono text-xs uppercase tracking-[0.2em]"
              style={{ color: GOLD }}
            >
              {t("pillarsEyebrow")}
            </motion.span>
            <motion.h2
              variants={mechanicalSlideUp}
              className="mt-4 font-heading text-3xl font-bold text-concrete md:text-4xl"
            >
              {t("pillarsTitle")}
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {PILLARS.map(({ key, icon: Icon, operating }, i) => (
              <motion.div
                key={key}
                variants={mechanicalSlideUp}
                className="group relative flex flex-col border-2 border-concrete/10 bg-obsidian p-6 transition-mechanical hover:border-[color:var(--croire-gold)]"
                style={{ "--croire-gold": `${GOLD}66` } as React.CSSProperties}
              >
                <span className="absolute right-4 top-4 font-mono text-5xl font-bold text-concrete/5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div
                  className="mb-6 flex h-12 w-12 items-center justify-center border-2 transition-mechanical group-hover:text-obsidian"
                  style={{ borderColor: `${GOLD}66`, color: GOLD }}
                >
                  <Icon className="h-6 w-6 transition-mechanical" />
                </div>
                <h3 className="font-heading text-lg font-bold text-concrete">
                  {t(`pillars.${key}.title`)}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-light">
                  {t(`pillars.${key}.desc`)}
                </p>
                <span
                  className={`mt-6 inline-flex w-fit border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${
                    operating
                      ? "border-safety/40 bg-safety/10 text-safety"
                      : "text-steel-light"
                  }`}
                  style={
                    operating
                      ? undefined
                      : { borderColor: `${GOLD}40`, background: `${GOLD}0d` }
                  }
                >
                  {t(`pillars.${key}.status`)}
                </span>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: GOLD }}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Roadmap ──────────────────────────────────────── */}
      <section className="bg-concrete py-20 dark:bg-obsidian/95 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span
              variants={mechanicalSlideUp}
              className="font-mono text-xs uppercase tracking-[0.2em]"
              style={{ color: GOLD }}
            >
              {t("roadmapEyebrow")}
            </motion.span>
            <motion.h2
              variants={mechanicalSlideUp}
              className="mt-4 font-heading text-3xl font-bold text-obsidian dark:text-concrete md:text-4xl"
            >
              {t("roadmapTitle")}
            </motion.h2>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {PHASES.map((phase, i) => (
              <motion.div
                key={phase}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative border-s-2 ps-6"
                style={{ borderColor: i === 0 ? GOLD : `${GOLD}40` }}
              >
                <span
                  className="font-mono text-sm font-bold tracking-[0.2em]"
                  style={{ color: GOLD }}
                >
                  {t(`roadmap.${phase}.year`)}
                </span>
                <h3 className="mt-2 font-heading text-2xl font-bold text-obsidian dark:text-concrete">
                  {t(`roadmap.${phase}.title`)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-steel dark:text-steel-light">
                  {t(`roadmap.${phase}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ambition metrics ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-obsidian py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <span
            className="font-mono text-xs uppercase tracking-[0.2em]"
            style={{ color: GOLD }}
          >
            {t("ambitionEyebrow")}
          </span>
          <div className="mt-8 grid grid-cols-2 gap-px border-2 border-concrete/10 bg-concrete/10 lg:grid-cols-4">
            {METRICS.map((m) => (
              <div key={m} className="bg-obsidian p-8">
                <p className="font-heading text-4xl font-bold text-concrete md:text-5xl">
                  <CountUp value={t(`metrics.${m}.value`)} suffix={t(`metrics.${m}.suffix`)} />
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-steel-light">
                  {t(`metrics.${m}.label`)}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-[11px] text-steel">{t("disclaimer")}</p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section
        className="py-20 lg:py-28"
        style={{ background: `linear-gradient(135deg, ${GOLD}, #b8860b)` }}
      >
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-obsidian md:text-4xl">
            {t("ctaTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-obsidian/80">
            {t("ctaBody")}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-obsidian font-heading font-bold text-concrete hover:bg-obsidian/90"
          >
            <Link href="/contact?service=croire">
              {t("ctaButton")}
              <ArrowRight className="ml-2 h-4 w-4 rtl:rotate-180" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
