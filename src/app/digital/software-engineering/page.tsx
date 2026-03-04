"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cpu, ArrowRight, Cloud, GitBranch, Database, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";

const capabilities = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Design and implement scalable cloud infrastructure on AWS, GCP, or Azure.",
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    description: "Automated pipelines for continuous integration, testing, and deployment.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Build robust data pipelines and analytics infrastructure.",
  },
  {
    icon: Workflow,
    title: "System Integration",
    description: "Connect disparate systems with modern APIs and middleware.",
  },
];

const techStack = {
  languages: ["Python", "Go", "Rust", "Java", "TypeScript"],
  cloud: ["AWS", "GCP", "Azure", "DigitalOcean"],
  tools: ["Docker", "Kubernetes", "Terraform", "Ansible"],
  databases: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
};

export default function SoftwareEngineeringPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-obsidian py-20 lg:py-32">
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(45deg, rgba(249, 115, 22, 0.3) 25%, transparent 25%),
                linear-gradient(-45deg, rgba(249, 115, 22, 0.3) 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, rgba(249, 115, 22, 0.3) 75%),
                linear-gradient(-45deg, transparent 75%, rgba(249, 115, 22, 0.3) 75%)`,
              backgroundSize: "20px 20px",
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
                <Cpu className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
                Software Engineering
              </span>
            </motion.div>

            <motion.h1
              variants={mechanicalSlideUp}
              className="mt-6 font-heading text-4xl font-bold tracking-tight text-concrete md:text-5xl"
            >
              Enterprise
              <br />
              <span className="text-steel-light">Software Solutions</span>
            </motion.h1>

            <motion.p
              variants={mechanicalSlideUp}
              className="mt-6 text-lg text-steel-light"
            >
              Custom software development, cloud architecture, and DevOps
              solutions for businesses that demand reliability, scalability, and
              performance.
            </motion.p>

            <motion.div variants={mechanicalSlideUp} className="mt-8">
              <Button
                asChild
                className="bg-safety font-heading font-bold text-white hover:bg-safety/90"
              >
                <Link href="/contact?service=software-engineering">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-concrete py-20 dark:bg-obsidian/50 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
              Capabilities
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-obsidian dark:text-concrete">
              What We Build
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  variants={mechanicalSlideUp}
                  className="group border-2 border-obsidian/10 bg-white p-6 transition-mechanical hover:border-safety/30 dark:border-concrete/10 dark:bg-obsidian"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center border-2 border-obsidian/10 text-steel transition-mechanical group-hover:border-safety group-hover:text-safety dark:border-concrete/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-obsidian dark:text-concrete">
                    {cap.title}
                  </h3>
                  <p className="mt-2 text-sm text-steel dark:text-steel-light">
                    {cap.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="border-y-2 border-obsidian/10 bg-white py-20 dark:border-concrete/10 dark:bg-obsidian lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
              Technology
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-obsidian dark:text-concrete">
              Our Stack
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {Object.entries(techStack).map(([category, items]) => (
              <div key={category}>
                <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-safety">
                  {category}
                </h3>
                <div className="space-y-2">
                  {items.map((item) => (
                    <div
                      key={item}
                      className="border border-obsidian/10 bg-obsidian/5 px-4 py-2 font-mono text-sm text-obsidian dark:border-concrete/10 dark:bg-concrete/5 dark:text-concrete"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-obsidian py-20">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-concrete">
            Ready to Scale?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-steel-light">
            Let&apos;s architect a solution that grows with your business.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-safety font-heading font-bold text-white hover:bg-safety/90"
          >
            <Link href="/contact?service=software-engineering">
              Start a Conversation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
