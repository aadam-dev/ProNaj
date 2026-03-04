"use client";

import { motion } from "framer-motion";
import { Code2, Shield, Cpu } from "lucide-react";
import { ServiceCard } from "./service-card";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";

const services = [
  {
    title: "Web Development",
    description:
      "Full-stack web applications built with modern frameworks and best practices for performance, security, and scalability.",
    features: [
      "Custom Web Applications",
      "E-commerce Platforms",
      "Progressive Web Apps",
      "API Development & Integration",
      "Performance Optimization",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    href: "/digital/web-development",
    icon: Code2,
  },
  {
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets from evolving threats and ensure regulatory compliance.",
    features: [
      "Penetration Testing",
      "Security Audits",
      "Incident Response",
      "Compliance Consulting",
      "Security Training",
    ],
    technologies: ["SIEM", "IDS/IPS", "Zero Trust", "SOC 2", "ISO 27001"],
    href: "/digital/cybersecurity",
    icon: Shield,
  },
  {
    title: "Software Engineering",
    description:
      "Custom software solutions designed to streamline operations, automate workflows, and drive business growth.",
    features: [
      "Enterprise Applications",
      "Cloud Architecture",
      "DevOps & CI/CD",
      "Legacy Modernization",
      "Technical Consulting",
    ],
    technologies: ["Python", "Go", "AWS", "Docker", "Kubernetes"],
    href: "/digital/software-engineering",
    icon: Cpu,
  },
];

export function ServiceGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((service, index) => (
        <motion.div key={service.title} variants={mechanicalSlideUp}>
          <ServiceCard {...service} index={index} />
        </motion.div>
      ))}
    </motion.div>
  );
}
