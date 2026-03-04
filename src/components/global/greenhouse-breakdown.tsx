"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Thermometer, Droplets, Sun, Wind, Cpu, BarChart3 } from "lucide-react";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";

const technologies = [
  {
    icon: Thermometer,
    title: "Climate Control",
    description: "Automated temperature and humidity management",
    value: "24/7",
    unit: "Monitoring",
  },
  {
    icon: Droplets,
    title: "Drip Irrigation",
    description: "Precision water delivery to each plant",
    value: "40%",
    unit: "Water Saved",
  },
  {
    icon: Sun,
    title: "Light Optimization",
    description: "Supplemental LED lighting for year-round growth",
    value: "16hr",
    unit: "Light Cycle",
  },
  {
    icon: Wind,
    title: "Ventilation",
    description: "Natural and mechanical airflow systems",
    value: "100%",
    unit: "Fresh Air",
  },
  {
    icon: Cpu,
    title: "IoT Sensors",
    description: "Real-time monitoring of all growing conditions",
    value: "50+",
    unit: "Data Points",
  },
  {
    icon: BarChart3,
    title: "Yield Analytics",
    description: "Data-driven optimization of crop cycles",
    value: "30%",
    unit: "Yield Increase",
  },
];

const crops = [
  { name: "Tomatoes", yield: "45 tons/year", season: "Year-round" },
  { name: "Peppers", yield: "30 tons/year", season: "Year-round" },
  { name: "Cucumbers", yield: "35 tons/year", season: "Year-round" },
  { name: "Leafy Greens", yield: "20 tons/year", season: "Year-round" },
];

export function GreenhouseBreakdown() {
  return (
    <section className="bg-white py-20 dark:bg-obsidian lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
            Precision Agriculture
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-obsidian dark:text-concrete lg:text-4xl">
            Greenhouse Technology
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-steel dark:text-steel-light">
            Our state-of-the-art greenhouse facilities in Ghana combine
            traditional farming knowledge with modern precision agriculture
            technology.
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mb-16 aspect-[21/9] overflow-hidden border-2 border-obsidian/10 dark:border-concrete/10"
        >
          <Image
            src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1920&q=80"
            alt="Greenhouse facility"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-obsidian/40 to-transparent" />
          <div className="absolute bottom-8 left-8 max-w-lg">
            <p className="font-mono text-xs uppercase tracking-wider text-safety">
              Accra, Ghana
            </p>
            <h3 className="mt-2 font-heading text-3xl font-bold text-concrete">
              5 Hectares of
              <br />
              Controlled Environment
            </h3>
          </div>
        </motion.div>

        {/* Technology Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.title}
                variants={mechanicalSlideUp}
                className="group border-2 border-obsidian/10 bg-concrete p-6 transition-mechanical hover:border-safety/30 dark:border-concrete/10 dark:bg-obsidian/50"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border-2 border-obsidian/10 text-steel transition-mechanical group-hover:border-safety group-hover:text-safety dark:border-concrete/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <p className="font-heading text-2xl font-bold text-safety">
                      {tech.value}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-steel">
                      {tech.unit}
                    </p>
                  </div>
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-obsidian dark:text-concrete">
                  {tech.title}
                </h3>
                <p className="mt-2 text-sm text-steel dark:text-steel-light">
                  {tech.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Crop Production */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 border-2 border-obsidian/10 bg-obsidian p-8 dark:border-concrete/10 lg:p-12"
        >
          <div className="mb-8 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
              Annual Production
            </p>
            <h3 className="mt-2 font-heading text-2xl font-bold text-concrete">
              Crop Yields
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {crops.map((crop) => (
              <div
                key={crop.name}
                className="border border-steel/20 bg-steel/5 p-6 text-center"
              >
                <p className="font-heading text-xl font-bold text-concrete">
                  {crop.name}
                </p>
                <p className="mt-2 font-mono text-lg text-safety">{crop.yield}</p>
                <p className="mt-1 font-mono text-xs text-steel-light">
                  {crop.season}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="font-mono text-sm text-steel-light">
              Total Annual Production:{" "}
              <span className="font-bold text-safety">130+ tons</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
