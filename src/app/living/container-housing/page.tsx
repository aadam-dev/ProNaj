"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowRight, Truck, Clock, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContainerSpecs } from "@/components/living";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";

const process = [
  {
    step: "01",
    icon: Clock,
    title: "Design & Plan",
    description: "Choose your model and customize the layout to your needs",
    duration: "1-2 weeks",
  },
  {
    step: "02",
    icon: Home,
    title: "Fabrication",
    description: "Your home is built in our Ghana facility with quality controls",
    duration: "4-8 weeks",
  },
  {
    step: "03",
    icon: Truck,
    title: "Delivery",
    description: "Container shipped to your prepared site location",
    duration: "1-4 weeks",
  },
  {
    step: "04",
    icon: Leaf,
    title: "Installation",
    description: "On-site assembly, utility connections, and final touches",
    duration: "1-2 weeks",
  },
];

export default function ContainerHousingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-obsidian py-20 lg:py-32">
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 40px,
                rgba(249, 115, 22, 0.3) 40px,
                rgba(249, 115, 22, 0.3) 41px
              )`,
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
                <Home className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
                Container Housing
              </span>
            </motion.div>

            <motion.h1
              variants={mechanicalSlideUp}
              className="mt-6 font-heading text-4xl font-bold tracking-tight text-concrete md:text-5xl"
            >
              Prefabricated
              <br />
              <span className="text-steel-light">Container Homes</span>
            </motion.h1>

            <motion.p
              variants={mechanicalSlideUp}
              className="mt-6 text-lg text-steel-light"
            >
              Sustainable, efficient, and beautiful container homes built in
              Ghana and shipped worldwide. From compact studios to family
              residences, we have a solution for every need.
            </motion.p>

            <motion.div variants={mechanicalSlideUp} className="mt-8 flex gap-4">
              <Button
                asChild
                className="bg-safety font-heading font-bold text-white hover:bg-safety/90"
              >
                <Link href="/contact?service=container-housing">
                  Request Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-concrete/20 font-heading font-bold text-concrete hover:bg-concrete/10"
              >
                <Link href="#models">View Models</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Container Specs */}
      <div id="models">
        <ContainerSpecs />
      </div>

      {/* Process */}
      <section className="border-y-2 border-obsidian/10 bg-white py-20 dark:border-concrete/10 dark:bg-obsidian lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
              The Process
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-obsidian dark:text-concrete">
              From Design to Delivery
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {process.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.step}
                  variants={mechanicalSlideUp}
                  className="group relative border-2 border-obsidian/10 p-6 transition-mechanical hover:border-safety/30 dark:border-concrete/10"
                >
                  <span className="absolute right-4 top-4 font-mono text-4xl font-bold text-obsidian/5 dark:text-concrete/5">
                    {item.step}
                  </span>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center border-2 border-obsidian/10 text-steel transition-mechanical group-hover:border-safety group-hover:text-safety dark:border-concrete/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-obsidian dark:text-concrete">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-steel dark:text-steel-light">
                    {item.description}
                  </p>
                  <p className="mt-4 font-mono text-xs text-safety">
                    {item.duration}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-obsidian py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-concrete">
            Ready to Build Your Dream Home?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-steel-light">
            Get a personalized quote for your container home project. We handle
            everything from design to installation.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-safety font-heading font-bold text-white hover:bg-safety/90"
          >
            <Link href="/contact?service=container-housing">
              Get Your Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
