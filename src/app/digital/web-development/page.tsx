"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Code2, ArrowRight, Layers, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WorkShowcase } from "@/components/digital";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";

const features = [
  {
    icon: Layers,
    title: "Full-Stack Development",
    description:
      "End-to-end web application development using modern frameworks and best practices.",
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description:
      "Lightning-fast applications with optimized Core Web Vitals and SEO.",
  },
  {
    icon: Shield,
    title: "Security First",
    description:
      "Built-in security measures including OWASP compliance and regular audits.",
  },
];

const process = [
  { step: "01", title: "Discovery", description: "Requirements gathering and technical planning" },
  { step: "02", title: "Design", description: "UI/UX design and architecture planning" },
  { step: "03", title: "Development", description: "Agile development with regular demos" },
  { step: "04", title: "Testing", description: "Comprehensive QA and security testing" },
  { step: "05", title: "Deployment", description: "CI/CD pipeline and production launch" },
  { step: "06", title: "Support", description: "Ongoing maintenance and optimization" },
];

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", 
  "MongoDB", "GraphQL", "REST APIs", "Tailwind CSS", "Framer Motion"
];

export default function WebDevelopmentPage() {
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
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid gap-12 lg:grid-cols-2 lg:gap-20"
          >
            <div>
              <motion.div variants={mechanicalSlideUp} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border-2 border-safety text-safety">
                  <Code2 className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
                  Web Development
                </span>
              </motion.div>

              <motion.h1
                variants={mechanicalSlideUp}
                className="mt-6 font-heading text-4xl font-bold tracking-tight text-concrete md:text-5xl"
              >
                Modern Web
                <br />
                <span className="text-steel-light">Applications</span>
              </motion.h1>

              <motion.p
                variants={mechanicalSlideUp}
                className="mt-6 text-lg text-steel-light"
              >
                We build fast, secure, and scalable web applications using
                cutting-edge technologies. From startups to enterprises, we
                deliver solutions that drive growth.
              </motion.p>

              <motion.div variants={mechanicalSlideUp} className="mt-8">
                <Button
                  asChild
                  className="bg-safety font-heading font-bold text-white hover:bg-safety/90"
                >
                  <Link href="/contact?service=web-development">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            <motion.div variants={mechanicalSlideUp} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden border-2 border-steel/20">
                <Image
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
                  alt="Web development"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 border-2 border-safety bg-obsidian p-4">
                <p className="font-mono text-2xl font-bold text-safety">500+</p>
                <p className="font-mono text-xs text-steel-light">Projects Delivered</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-concrete py-20 dark:bg-obsidian/50 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-3"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={mechanicalSlideUp}
                  className="border-2 border-obsidian/10 bg-white p-8 dark:border-concrete/10 dark:bg-obsidian"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center border-2 border-obsidian/10 text-safety dark:border-concrete/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-obsidian dark:text-concrete">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-steel dark:text-steel-light">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

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
              Our Process
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-obsidian dark:text-concrete">
              How We Work
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {process.map((item) => (
              <motion.div
                key={item.step}
                variants={mechanicalSlideUp}
                className="group flex gap-4 border border-obsidian/10 p-6 transition-mechanical hover:border-safety/30 dark:border-concrete/10"
              >
                <span className="font-mono text-3xl font-bold text-safety/30 transition-mechanical group-hover:text-safety">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-heading font-bold text-obsidian dark:text-concrete">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-steel dark:text-steel-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="bg-obsidian py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="mb-6 text-center font-mono text-xs uppercase tracking-[0.2em] text-steel-light">
            Technologies We Use
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="border border-steel/30 px-4 py-2 font-mono text-sm text-concrete"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Selected client work */}
      <WorkShowcase />

      {/* CTA */}
      <section className="bg-concrete py-20 dark:bg-obsidian/50">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-obsidian dark:text-concrete">
            Let&apos;s Build Together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-steel dark:text-steel-light">
            Ready to transform your ideas into a powerful web application?
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-safety font-heading font-bold text-white hover:bg-safety/90"
          >
            <Link href="/contact?service=web-development">
              Get a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
