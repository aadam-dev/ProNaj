"use client";

import { motion } from "framer-motion";

const techStack = [
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Go", category: "backend" },
  { name: "PostgreSQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "Redis", category: "database" },
  { name: "AWS", category: "devops" },
  { name: "Docker", category: "devops" },
  { name: "Kubernetes", category: "devops" },
  { name: "Terraform", category: "devops" },
  { name: "GitHub Actions", category: "devops" },
];

export function TechStackMarquee() {
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <section className="overflow-hidden border-y-2 border-obsidian/10 bg-obsidian py-6 dark:border-concrete/10">
      <div className="mb-4 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-steel-light">
          Our Technology Stack
        </p>
      </div>

      <div className="relative">
        {/* Gradient Masks */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-obsidian to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-obsidian to-transparent" />

        {/* Marquee */}
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -50 * techStack.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedStack.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex shrink-0 items-center gap-3"
            >
              <span className="font-heading text-lg font-bold text-concrete">
                {tech.name}
              </span>
              <span className="h-1 w-1 rounded-full bg-safety" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
