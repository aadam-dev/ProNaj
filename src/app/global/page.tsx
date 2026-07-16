"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Globe, ArrowRight, Leaf, Ship } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TradeRouteMap } from "@/components/global";
import { CountUp } from "@/components/shared/count-up";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";

const offerings = [
  {
    icon: Leaf,
    title: "Cocopeat Export",
    description: "Premium cocopeat substrate exported from Ghana to global markets",
    href: "/global/cocopeat",
    stats: { value: "10K MT", label: "Annual Export" },
  },
  {
    icon: Ship,
    title: "Greenhouse Farming",
    description: "Precision agriculture producing year-round fresh produce",
    href: "/global/greenhouse",
    stats: { value: "130+ tons", label: "Annual Yield" },
  },
];

export default function GlobalPage() {
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
                Pronaj Global
              </span>
            </motion.div>

            <motion.h1
              variants={mechanicalSlideUp}
              className="mt-6 font-heading text-4xl font-bold tracking-tight text-concrete md:text-5xl lg:text-6xl"
            >
              Agriculture &
              <br />
              <span className="text-steel-light">Global Trade</span>
            </motion.h1>

            <motion.p
              variants={mechanicalSlideUp}
              className="mt-6 text-lg text-steel-light lg:text-xl"
            >
              Connecting African agricultural excellence to global markets
              through our Delaware-Ghana corporate bridge. Cocopeat export,
              precision greenhouse farming, and sustainable trade practices.
            </motion.p>

            <motion.div variants={mechanicalSlideUp} className="mt-8 flex gap-4">
              <Button
                asChild
                className="bg-safety font-heading font-bold text-white hover:bg-safety/90"
              >
                <Link href="/global/cocopeat">
                  Explore Cocopeat
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-concrete/20 font-heading font-bold text-concrete hover:bg-concrete/10"
              >
                <Link href="/global/greenhouse">View Greenhouse</Link>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={mechanicalSlideUp}
              className="mt-12 grid grid-cols-3 gap-8 border-t border-steel/20 pt-8"
            >
              {[
                { value: "25+", label: "Markets" },
                { value: "10K MT", label: "Annual Export" },
                { value: "5 ha", label: "Greenhouse" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-2xl font-bold text-safety lg:text-3xl">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-steel-light">
                    {stat.label}
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
                  Agribusiness Brand
                </span>
                <span
                  className="border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-concrete/70"
                  style={{ borderColor: "rgba(212, 160, 23, 0.5)", background: "rgba(212, 160, 23, 0.12)" }}
                >
                  In development
                </span>
              </div>
              <h2 className="mt-4 font-heading text-3xl font-bold text-concrete md:text-4xl">
                Gold Coast <span style={{ color: "#D4A017" }}>Croire</span>
              </h2>
              <p className="mt-3 text-steel-light">
                One brand carrying Ghana&apos;s fertile coast to world markets — substrate,
                greenhouse produce and value-added processing under a single name.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="shrink-0 font-heading font-bold text-obsidian hover:opacity-90"
              style={{ background: "#D4A017" }}
            >
              <Link href="/global/croire">
                Discover Croire
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
              Our Operations
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-obsidian dark:text-concrete">
              Agricultural Excellence
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
                  key={offering.title}
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
                        {offering.stats.label}
                      </p>
                    </div>
                  </div>

                  <h3 className="mt-6 font-heading text-2xl font-bold text-obsidian dark:text-concrete">
                    {offering.title}
                  </h3>
                  <p className="mt-3 text-steel dark:text-steel-light">
                    {offering.description}
                  </p>

                  <Link
                    href={offering.href}
                    className="mt-6 inline-flex items-center gap-2 font-heading font-bold text-obsidian transition-mechanical hover:text-safety dark:text-concrete"
                  >
                    <span>Learn More</span>
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
              Corporate Structure
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-obsidian dark:text-concrete lg:text-4xl">
              The Delaware-Ghana Bridge
            </h2>
            <p className="mt-6 text-lg text-steel dark:text-steel-light">
              Our unique corporate structure enables seamless international
              trade. Pronaj International LLC (Delaware) serves as the parent
              company, providing US-compliant export capabilities while Pronaj
              Ghana Ltd handles local production and operations.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="border-2 border-obsidian/10 p-6 dark:border-concrete/10">
                <span className="text-3xl">🇺🇸</span>
                <h3 className="mt-3 font-heading text-lg font-bold text-obsidian dark:text-concrete">
                  Pronaj International LLC
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-safety">
                  Delaware, USA
                </p>
                <p className="mt-3 text-sm text-steel dark:text-steel-light">
                  Parent company handling international contracts, export
                  compliance, and global market access.
                </p>
              </div>
              <div className="border-2 border-obsidian/10 p-6 dark:border-concrete/10">
                <span className="text-3xl">🇬🇭</span>
                <h3 className="mt-3 font-heading text-lg font-bold text-obsidian dark:text-concrete">
                  Pronaj Ghana Ltd
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-wider text-safety">
                  Accra, Ghana
                </p>
                <p className="mt-3 text-sm text-steel dark:text-steel-light">
                  Operations subsidiary managing production, local sourcing, and
                  regional distribution.
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
            Partner With Us
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-steel-light">
            Whether you&apos;re a distributor, retailer, or agricultural
            business, we&apos;re ready to discuss partnership opportunities.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-safety font-heading font-bold text-white hover:bg-safety/90"
          >
            <Link href="/contact?service=global">
              Discuss Partnership
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
