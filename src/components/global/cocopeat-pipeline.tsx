"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Factory, Ship, Warehouse, CheckCircle } from "lucide-react";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";

const pipelineSteps = [
  {
    icon: Factory,
    title: "Production",
    location: "Ghana",
    description: "Cocopeat processed from coconut husks at our facility in Accra",
    details: ["Quality Control", "Moisture Testing", "Compression"],
  },
  {
    icon: Warehouse,
    title: "Packaging",
    location: "Ghana",
    description: "Compressed into blocks and packaged for international shipping",
    details: ["5kg Blocks", "25kg Bales", "Bulk Options"],
  },
  {
    icon: Ship,
    title: "Export",
    location: "Tema Port",
    description: "Shipped via Delaware parent company to global markets",
    details: ["US Compliant", "EU Certified", "Phytosanitary"],
  },
  {
    icon: CheckCircle,
    title: "Delivery",
    location: "Worldwide",
    description: "Direct delivery to agricultural suppliers and end customers",
    details: ["25+ Markets", "B2B & B2C", "Bulk Discounts"],
  },
];

const specs = [
  { label: "EC Level", value: "< 0.5 mS/cm" },
  { label: "pH Range", value: "5.5 - 6.5" },
  { label: "Moisture", value: "< 20%" },
  { label: "Compression", value: "5:1 Ratio" },
];

export function CocopeatPipeline() {
  return (
    <section className="bg-concrete py-20 dark:bg-obsidian/50 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
            Export Pipeline
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-obsidian dark:text-concrete lg:text-4xl">
            From Ghana to the World
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-steel dark:text-steel-light">
            Our vertically integrated cocopeat operation ensures quality control
            from production to delivery, with full export compliance through our
            Delaware parent company.
          </p>
        </motion.div>

        {/* Pipeline Steps */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-safety via-safety to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">
            {pipelineSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={mechanicalSlideUp}
                  className="group relative"
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 left-4 z-10 flex h-8 w-8 items-center justify-center border-2 border-safety bg-concrete font-mono text-sm font-bold text-safety dark:bg-obsidian lg:left-1/2 lg:-translate-x-1/2">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="border-2 border-obsidian/10 bg-white p-6 pt-10 transition-mechanical group-hover:border-safety/30 dark:border-concrete/10 dark:bg-obsidian">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center border-2 border-obsidian/10 text-steel transition-mechanical group-hover:border-safety group-hover:text-safety dark:border-concrete/10">
                      <Icon className="h-6 w-6" />
                    </div>

                    <p className="font-mono text-[10px] uppercase tracking-wider text-safety">
                      {step.location}
                    </p>
                    <h3 className="mt-1 font-heading text-xl font-bold text-obsidian dark:text-concrete">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-steel dark:text-steel-light">
                      {step.description}
                    </p>

                    <ul className="mt-4 space-y-1">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-2 text-xs text-obsidian/70 dark:text-concrete/70"
                        >
                          <span className="h-1 w-1 rounded-full bg-safety" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Product Specs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid gap-8 lg:grid-cols-2"
        >
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden border-2 border-obsidian/10 dark:border-concrete/10">
            <Image
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80"
              alt="Cocopeat production"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="font-mono text-xs text-concrete/80">
                Premium Grade Cocopeat
              </p>
              <p className="font-heading text-2xl font-bold text-concrete">
                100% Natural Substrate
              </p>
            </div>
          </div>

          {/* Specs */}
          <div className="flex flex-col justify-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
              Product Specifications
            </p>
            <h3 className="mt-2 font-heading text-2xl font-bold text-obsidian dark:text-concrete">
              Quality Standards
            </h3>
            <p className="mt-4 text-steel dark:text-steel-light">
              Our cocopeat meets international standards for agricultural use,
              with strict quality control at every stage of production.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="border border-obsidian/10 bg-obsidian/5 p-4 dark:border-concrete/10 dark:bg-concrete/5"
                >
                  <p className="font-mono text-[10px] uppercase tracking-wider text-steel">
                    {spec.label}
                  </p>
                  <p className="mt-1 font-heading text-xl font-bold text-obsidian dark:text-concrete">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
