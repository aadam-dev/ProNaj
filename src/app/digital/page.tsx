"use client";

import { motion } from "framer-motion";
import { Monitor, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ServiceGrid, TechStackMarquee } from "@/components/digital";
import { Button } from "@/components/ui/button";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";

export default function DigitalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-obsidian py-20 lg:py-32">
        {/* Grid Background */}
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

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-3xl"
          >
            <motion.div variants={mechanicalSlideUp} className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center border-2 border-safety bg-safety text-obsidian">
                <Monitor className="h-6 w-6" />
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
                Pronaj Digital
              </span>
            </motion.div>

            <motion.h1
              variants={mechanicalSlideUp}
              className="mt-6 font-heading text-4xl font-bold tracking-tight text-concrete md:text-5xl lg:text-6xl"
            >
              IT Services &
              <br />
              <span className="text-steel-light">Software Solutions</span>
            </motion.h1>

            <motion.p
              variants={mechanicalSlideUp}
              className="mt-6 text-lg text-steel-light lg:text-xl"
            >
              Enterprise-grade web development, cybersecurity, and software
              engineering services. We build robust digital infrastructure for
              businesses ready to scale.
            </motion.p>

            <motion.div variants={mechanicalSlideUp} className="mt-8 flex gap-4">
              <Button
                asChild
                className="bg-safety font-heading font-bold text-white hover:bg-safety/90"
              >
                <Link href="/contact?service=digital">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-concrete/20 font-heading font-bold text-concrete hover:bg-concrete/10"
              >
                <Link href="#services">View Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <TechStackMarquee />

      {/* Services Section */}
      <section id="services" className="bg-concrete py-20 dark:bg-obsidian/50 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
              Our Services
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-obsidian dark:text-concrete lg:text-4xl">
              Digital Excellence
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-steel dark:text-steel-light">
              From concept to deployment, we deliver end-to-end digital solutions
              with precision engineering and industry best practices.
            </p>
          </motion.div>

          <ServiceGrid />
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t-2 border-obsidian/10 bg-white py-20 dark:border-concrete/10 dark:bg-obsidian">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl font-bold text-obsidian dark:text-concrete lg:text-4xl">
              Ready to Build Something Great?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-steel dark:text-steel-light">
              Let&apos;s discuss your project requirements and create a tailored
              solution for your business.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-safety font-heading font-bold text-white hover:bg-safety/90"
            >
              <Link href="/contact?service=digital">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
