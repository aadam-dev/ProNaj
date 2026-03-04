"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, ArrowRight, Lock, Eye, FileWarning, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";

const services = [
  {
    icon: Eye,
    title: "Penetration Testing",
    description: "Comprehensive security assessments to identify vulnerabilities before attackers do.",
    features: ["Network Penetration", "Web Application Testing", "Social Engineering", "Red Team Exercises"],
  },
  {
    icon: FileWarning,
    title: "Security Audits",
    description: "Thorough evaluation of your security posture against industry standards.",
    features: ["Compliance Audits", "Code Reviews", "Architecture Assessment", "Policy Review"],
  },
  {
    icon: Server,
    title: "Incident Response",
    description: "24/7 rapid response to security incidents with forensic analysis.",
    features: ["Breach Investigation", "Malware Analysis", "Recovery Planning", "Post-Incident Review"],
  },
  {
    icon: Lock,
    title: "Security Consulting",
    description: "Strategic guidance to build and maintain a robust security program.",
    features: ["Security Strategy", "Risk Assessment", "Vendor Evaluation", "Training Programs"],
  },
];

const certifications = [
  "SOC 2 Type II",
  "ISO 27001",
  "GDPR Compliant",
  "HIPAA Ready",
  "PCI DSS",
];

export default function CybersecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-obsidian py-20 lg:py-32">
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(249, 115, 22, 0.5) 1px, transparent 0)`,
              backgroundSize: "32px 32px",
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
                <Shield className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
                Cybersecurity
              </span>
            </motion.div>

            <motion.h1
              variants={mechanicalSlideUp}
              className="mt-6 font-heading text-4xl font-bold tracking-tight text-concrete md:text-5xl"
            >
              Protect Your
              <br />
              <span className="text-steel-light">Digital Assets</span>
            </motion.h1>

            <motion.p
              variants={mechanicalSlideUp}
              className="mt-6 text-lg text-steel-light"
            >
              Enterprise-grade cybersecurity solutions to defend against evolving
              threats. We help organizations build resilient security programs
              that meet compliance requirements and protect critical data.
            </motion.p>

            <motion.div variants={mechanicalSlideUp} className="mt-8 flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-safety font-heading font-bold text-white hover:bg-safety/90"
              >
                <Link href="/contact?service=cybersecurity">
                  Request Assessment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={mechanicalSlideUp} className="mt-12">
              <p className="mb-4 font-mono text-xs uppercase tracking-wider text-steel">
                Compliance Standards
              </p>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="border border-safety/30 bg-safety/10 px-3 py-1 font-mono text-xs text-safety"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-concrete py-20 dark:bg-obsidian/50 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
              Security Services
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-obsidian dark:text-concrete">
              Comprehensive Protection
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={mechanicalSlideUp}
                  className="group border-2 border-obsidian/10 bg-white p-8 transition-mechanical hover:border-safety/30 dark:border-concrete/10 dark:bg-obsidian"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center border-2 border-obsidian/10 text-steel transition-mechanical group-hover:border-safety group-hover:text-safety dark:border-concrete/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-obsidian dark:text-concrete">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-steel dark:text-steel-light">
                    {service.description}
                  </p>
                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-obsidian/70 dark:text-concrete/70"
                      >
                        <span className="h-1 w-1 rounded-full bg-safety" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y-2 border-obsidian/10 bg-obsidian py-16 dark:border-concrete/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "99.9%", label: "Threat Detection Rate" },
              { value: "24/7", label: "Security Monitoring" },
              { value: "< 1hr", label: "Incident Response" },
              { value: "500+", label: "Audits Completed" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-3xl font-bold text-safety lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-steel-light">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-concrete py-20 dark:bg-obsidian/50">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-obsidian dark:text-concrete">
            Secure Your Business Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-steel dark:text-steel-light">
            Don&apos;t wait for a breach. Get a comprehensive security assessment
            and protect your organization.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-safety font-heading font-bold text-white hover:bg-safety/90"
          >
            <Link href="/contact?service=cybersecurity">
              Schedule Security Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
