"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Bed, Bath, Maximize, Leaf, Zap, Droplets, Wind } from "lucide-react";
import { cn } from "@/lib/utils";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";

const containerHomes = [
  {
    id: "studio-20",
    name: "Studio 20",
    size: "20ft Container",
    sqft: 160,
    bedrooms: 0,
    bathrooms: 1,
    description: "Compact studio unit perfect for singles or home offices",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    price: "From $45,000",
    features: ["Open Floor Plan", "Full Kitchen", "Bathroom", "Solar Ready"],
    sustainability: 92,
  },
  {
    id: "compact-40",
    name: "Compact 40",
    size: "40ft Container",
    sqft: 320,
    bedrooms: 1,
    bathrooms: 1,
    description: "One-bedroom home with full amenities for comfortable living",
    image: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?w=800&q=80",
    price: "From $75,000",
    features: ["Separate Bedroom", "Living Area", "Full Kitchen", "Covered Porch"],
    sustainability: 88,
  },
  {
    id: "family-double",
    name: "Family Double",
    size: "2x 40ft Containers",
    sqft: 640,
    bedrooms: 2,
    bathrooms: 2,
    description: "Two-bedroom family home with spacious living areas",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    price: "From $125,000",
    features: ["Master Suite", "Kids Room", "Open Kitchen", "Rooftop Deck"],
    sustainability: 85,
  },
  {
    id: "executive-triple",
    name: "Executive Triple",
    size: "3x 40ft Containers",
    sqft: 960,
    bedrooms: 3,
    bathrooms: 2,
    description: "Premium three-bedroom home with luxury finishes",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    price: "From $185,000",
    features: ["Master Suite", "Home Office", "Gourmet Kitchen", "Landscaping"],
    sustainability: 82,
  },
];

const sustainabilityFeatures = [
  { icon: Leaf, label: "Recycled Materials", value: "85%" },
  { icon: Zap, label: "Solar Capacity", value: "5kW" },
  { icon: Droplets, label: "Water Recycling", value: "Yes" },
  { icon: Wind, label: "Natural Ventilation", value: "Yes" },
];

export function ContainerSpecs() {
  const [selectedHome, setSelectedHome] = useState(containerHomes[1]);

  return (
    <section className="bg-concrete py-20 dark:bg-obsidian/50 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
            Container Housing
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-obsidian dark:text-concrete lg:text-4xl">
            Modular Living Spaces
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-steel dark:text-steel-light">
            Prefabricated container homes designed for sustainability, efficiency,
            and modern comfort. Built in Ghana, shipped worldwide.
          </p>
        </motion.div>

        {/* Model Selector */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {containerHomes.map((home) => (
            <button
              key={home.id}
              onClick={() => setSelectedHome(home)}
              className={cn(
                "border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-mechanical",
                selectedHome.id === home.id
                  ? "border-safety bg-safety text-white"
                  : "border-obsidian/10 text-steel hover:border-safety hover:text-safety dark:border-concrete/10"
              )}
            >
              {home.name}
            </button>
          ))}
        </div>

        {/* Selected Home Display */}
        <motion.div
          key={selectedHome.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden border-2 border-obsidian/10 dark:border-concrete/10">
              <Image
                src={selectedHome.image}
                alt={selectedHome.name}
                fill
                className="object-cover"
              />
            </div>
            {/* Blueprint overlay hint */}
            <div className="absolute -bottom-4 -right-4 border-2 border-safety bg-obsidian p-4">
              <p className="font-mono text-xs text-steel-light">Floor Plan Available</p>
              <p className="font-heading text-lg font-bold text-safety">
                {selectedHome.sqft} sq ft
              </p>
            </div>
          </div>

          {/* Specs */}
          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-safety">
                {selectedHome.size}
              </p>
              <h3 className="mt-2 font-heading text-3xl font-bold text-obsidian dark:text-concrete">
                {selectedHome.name}
              </h3>
              <p className="mt-2 text-steel dark:text-steel-light">
                {selectedHome.description}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-4 gap-4 border-y border-obsidian/10 py-6 dark:border-concrete/10">
              <div className="text-center">
                <Maximize className="mx-auto h-5 w-5 text-safety" />
                <p className="mt-2 font-heading text-xl font-bold text-obsidian dark:text-concrete">
                  {selectedHome.sqft}
                </p>
                <p className="font-mono text-[10px] uppercase text-steel">sq ft</p>
              </div>
              <div className="text-center">
                <Bed className="mx-auto h-5 w-5 text-safety" />
                <p className="mt-2 font-heading text-xl font-bold text-obsidian dark:text-concrete">
                  {selectedHome.bedrooms}
                </p>
                <p className="font-mono text-[10px] uppercase text-steel">Beds</p>
              </div>
              <div className="text-center">
                <Bath className="mx-auto h-5 w-5 text-safety" />
                <p className="mt-2 font-heading text-xl font-bold text-obsidian dark:text-concrete">
                  {selectedHome.bathrooms}
                </p>
                <p className="font-mono text-[10px] uppercase text-steel">Baths</p>
              </div>
              <div className="text-center">
                <Leaf className="mx-auto h-5 w-5 text-safety" />
                <p className="mt-2 font-heading text-xl font-bold text-obsidian dark:text-concrete">
                  {selectedHome.sustainability}%
                </p>
                <p className="font-mono text-[10px] uppercase text-steel">Green</p>
              </div>
            </div>

            {/* Features */}
            <div>
              <p className="mb-3 font-mono text-xs uppercase tracking-wider text-steel">
                Features
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedHome.features.map((feature) => (
                  <span
                    key={feature}
                    className="border border-obsidian/10 bg-white px-3 py-1 text-sm text-obsidian dark:border-concrete/10 dark:bg-obsidian dark:text-concrete"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="border-t border-obsidian/10 pt-6 dark:border-concrete/10">
              <p className="font-mono text-xs uppercase tracking-wider text-steel">
                Starting Price
              </p>
              <p className="mt-2 font-heading text-3xl font-bold text-safety">
                {selectedHome.price}
              </p>
              <p className="mt-1 text-sm text-steel dark:text-steel-light">
                Includes delivery within Ghana. International shipping available.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sustainability Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-20 border-2 border-obsidian/10 bg-white p-8 dark:border-concrete/10 dark:bg-obsidian lg:p-12"
        >
          <motion.div variants={mechanicalSlideUp} className="mb-8 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
              Sustainability
            </p>
            <h3 className="mt-2 font-heading text-2xl font-bold text-obsidian dark:text-concrete">
              Built for the Planet
            </h3>
          </motion.div>

          <motion.div
            variants={mechanicalSlideUp}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {sustainabilityFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.label}
                  className="flex items-center gap-4 border border-obsidian/10 p-4 dark:border-concrete/10"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-safety/30 text-safety">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-heading text-xl font-bold text-obsidian dark:text-concrete">
                      {feature.value}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-steel">
                      {feature.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
