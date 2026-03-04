"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { mechanicalTransition, staggerContainer, mechanicalSlideUp } from "@/lib/animations";

const furnitureItems = [
  {
    id: "sofa-modular",
    name: "Modular Sofa System",
    category: "Living Room",
    description: "Configurable sectional sofa with flat-pack efficiency",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    price: "From $899",
    specs: { material: "Oak / Linen", assembly: "45 min", pieces: "6" },
  },
  {
    id: "desk-standing",
    name: "Standing Desk Pro",
    category: "Office",
    description: "Height-adjustable desk with cable management",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
    price: "From $599",
    specs: { material: "Bamboo / Steel", assembly: "30 min", pieces: "4" },
  },
  {
    id: "bed-platform",
    name: "Platform Bed Frame",
    category: "Bedroom",
    description: "Minimalist platform bed with integrated storage",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    price: "From $749",
    specs: { material: "Walnut", assembly: "60 min", pieces: "8" },
  },
  {
    id: "dining-set",
    name: "Dining Table Set",
    category: "Dining",
    description: "Extendable dining table with matching chairs",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
    price: "From $1,299",
    specs: { material: "Oak / Steel", assembly: "45 min", pieces: "10" },
  },
  {
    id: "bookshelf-modular",
    name: "Modular Bookshelf",
    category: "Storage",
    description: "Expandable shelving system for any space",
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80",
    price: "From $349",
    specs: { material: "Birch Plywood", assembly: "20 min", pieces: "5" },
  },
  {
    id: "chair-lounge",
    name: "Lounge Chair",
    category: "Living Room",
    description: "Scandinavian-inspired accent chair",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
    price: "From $449",
    specs: { material: "Beech / Wool", assembly: "15 min", pieces: "3" },
  },
];

const categories = ["All", "Living Room", "Office", "Bedroom", "Dining", "Storage"];

export function FurnitureGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<typeof furnitureItems[0] | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? furnitureItems
      : furnitureItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="bg-white py-20 dark:bg-obsidian lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
            Furniture Collection
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-obsidian dark:text-concrete lg:text-4xl">
            Flat-Pack Efficiency
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-steel dark:text-steel-light">
            IKEA-inspired modular furniture designed for modern living. Easy
            assembly, sustainable materials, timeless design.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-mechanical",
                selectedCategory === category
                  ? "border-safety bg-safety text-white"
                  : "border-obsidian/10 text-steel hover:border-safety hover:text-safety dark:border-concrete/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={mechanicalSlideUp}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={mechanicalTransition}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden border-2 border-obsidian/10 bg-concrete dark:border-concrete/10 dark:bg-obsidian/50">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="font-mono text-xs text-safety">{item.price}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-steel">
                    {item.category}
                  </p>
                  <h3 className="mt-1 font-heading text-lg font-bold text-obsidian dark:text-concrete">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-steel dark:text-steel-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/90 p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={mechanicalTransition}
                onClick={(e) => e.stopPropagation()}
                className="relative max-h-[90vh] w-full max-w-4xl overflow-auto border-2 border-steel/20 bg-concrete dark:bg-obsidian"
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center border border-obsidian/10 bg-concrete text-obsidian transition-mechanical hover:border-safety hover:text-safety dark:border-concrete/10 dark:bg-obsidian dark:text-concrete"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="grid md:grid-cols-2">
                  <div className="relative aspect-square">
                    <Image
                      src={selectedItem.image}
                      alt={selectedItem.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <p className="font-mono text-xs uppercase tracking-wider text-safety">
                      {selectedItem.category}
                    </p>
                    <h3 className="mt-2 font-heading text-2xl font-bold text-obsidian dark:text-concrete">
                      {selectedItem.name}
                    </h3>
                    <p className="mt-4 text-steel dark:text-steel-light">
                      {selectedItem.description}
                    </p>

                    <div className="mt-6 border-t border-obsidian/10 pt-6 dark:border-concrete/10">
                      <p className="mb-4 font-mono text-xs uppercase tracking-wider text-steel">
                        Specifications
                      </p>
                      <div className="space-y-2">
                        {Object.entries(selectedItem.specs).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="font-mono text-xs uppercase text-steel">
                              {key}
                            </span>
                            <span className="font-mono text-sm text-obsidian dark:text-concrete">
                              {value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <p className="font-heading text-2xl font-bold text-safety">
                        {selectedItem.price}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
