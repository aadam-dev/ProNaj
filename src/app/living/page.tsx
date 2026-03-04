"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Sofa, ArrowRight, Home, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";

const offerings = [
  {
    icon: Package,
    title: "Modular Furniture",
    description: "IKEA-inspired flat-pack furniture designed for modern living",
    href: "/living/furniture",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    features: ["Easy Assembly", "Sustainable Materials", "Timeless Design"],
  },
  {
    icon: Home,
    title: "Container Housing",
    description: "Prefabricated container homes for sustainable, efficient living",
    href: "/living/container-housing",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    features: ["Quick Build", "Eco-Friendly", "Customizable"],
  },
];

export default function LivingPage() {
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
                ProNaj Living
              </span>
            </motion.div>

            <motion.h1
              variants={mechanicalSlideUp}
              className="mt-6 font-heading text-4xl font-bold tracking-tight text-concrete md:text-5xl lg:text-6xl"
            >
              Modular Solutions
              <br />
              <span className="text-steel-light">for Modern Living</span>
            </motion.h1>

            <motion.p
              variants={mechanicalSlideUp}
              className="mt-6 text-lg text-steel-light lg:text-xl"
            >
              From flat-pack furniture to prefabricated container homes, we
              design and manufacture sustainable living solutions that combine
              efficiency with elegance.
            </motion.p>

            <motion.div variants={mechanicalSlideUp} className="mt-8 flex gap-4">
              <Button
                asChild
                className="bg-safety font-heading font-bold text-white hover:bg-safety/90"
              >
                <Link href="/living/furniture">
                  Browse Furniture
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-concrete/20 font-heading font-bold text-concrete hover:bg-concrete/10"
              >
                <Link href="/living/container-housing">View Homes</Link>
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
                  key={offering.title}
                  variants={mechanicalSlideUp}
                  className="group overflow-hidden border-2 border-obsidian/10 bg-white dark:border-concrete/10 dark:bg-obsidian"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={offering.image}
                      alt={offering.title}
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
                      {offering.title}
                    </h3>
                    <p className="mt-2 text-steel dark:text-steel-light">
                      {offering.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {offering.features.map((feature) => (
                        <span
                          key={feature}
                          className="border border-obsidian/10 px-2 py-1 font-mono text-xs text-steel dark:border-concrete/10"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={offering.href}
                      className="mt-6 inline-flex items-center gap-2 font-heading font-bold text-obsidian transition-mechanical hover:text-safety dark:text-concrete"
                    >
                      <span>Explore</span>
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
              Design Philosophy
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-obsidian dark:text-concrete lg:text-4xl">
              Form Follows Function
            </h2>
            <p className="mt-6 text-lg text-steel dark:text-steel-light">
              Every piece we create starts with a problem to solve. We believe
              that great design should be accessible, sustainable, and built to
              last. Our modular approach means less waste, easier transport, and
              products that adapt to your life.
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
              { value: "85%", label: "Recycled Materials" },
              { value: "200+", label: "Homes Delivered" },
              { value: "A+", label: "Sustainability Rating" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={mechanicalSlideUp}
                className="border border-obsidian/10 p-8 text-center dark:border-concrete/10"
              >
                <p className="font-heading text-4xl font-bold text-safety">
                  {stat.value}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-steel">
                  {stat.label}
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
            Ready to Transform Your Space?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-steel-light">
            Whether you need a single piece of furniture or a complete container
            home, we&apos;re here to help.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-safety font-heading font-bold text-white hover:bg-safety/90"
          >
            <Link href="/contact?service=living">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
