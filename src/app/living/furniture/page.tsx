"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FurnitureGallery } from "@/components/living";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";

export default function FurniturePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-obsidian py-20 lg:py-32">
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(249, 115, 22, 0.5) 1px, transparent 1px)`,
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
            <motion.div variants={mechanicalSlideUp} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border-2 border-safety text-safety">
                <Package className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
                Furniture Collection
              </span>
            </motion.div>

            <motion.h1
              variants={mechanicalSlideUp}
              className="mt-6 font-heading text-4xl font-bold tracking-tight text-concrete md:text-5xl"
            >
              Modular Furniture
              <br />
              <span className="text-steel-light">Flat-Pack Efficiency</span>
            </motion.h1>

            <motion.p
              variants={mechanicalSlideUp}
              className="mt-6 text-lg text-steel-light"
            >
              IKEA-inspired furniture designed for modern living. Easy assembly,
              sustainable materials, and timeless Scandinavian design that fits
              any space.
            </motion.p>

            <motion.div variants={mechanicalSlideUp} className="mt-8">
              <Button
                asChild
                className="bg-safety font-heading font-bold text-white hover:bg-safety/90"
              >
                <Link href="/contact?service=furniture">
                  Request Catalog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <FurnitureGallery />

      {/* Features */}
      <section className="border-y-2 border-obsidian/10 bg-obsidian py-20 dark:border-concrete/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-3"
          >
            {[
              {
                title: "Easy Assembly",
                description: "Clear instructions and minimal tools required. Most pieces assemble in under an hour.",
              },
              {
                title: "Sustainable Materials",
                description: "FSC-certified wood, recycled metals, and eco-friendly finishes throughout.",
              },
              {
                title: "Modular Design",
                description: "Mix and match components to create configurations that fit your space perfectly.",
              },
            ].map((feature) => (
              <motion.div
                key={feature.title}
                variants={mechanicalSlideUp}
                className="border border-steel/20 p-8"
              >
                <h3 className="font-heading text-xl font-bold text-concrete">
                  {feature.title}
                </h3>
                <p className="mt-2 text-steel-light">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-concrete py-20 dark:bg-obsidian/50">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-obsidian dark:text-concrete">
            Need Custom Furniture?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-steel dark:text-steel-light">
            We offer custom design services for businesses and residential
            projects. Let&apos;s create something unique together.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-safety font-heading font-bold text-white hover:bg-safety/90"
          >
            <Link href="/contact?service=custom-furniture">
              Discuss Custom Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
