"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { staggerContainer, mechanicalSlideUp, mechanicalTransition } from "@/lib/animations";
import { workProjects } from "@/lib/portfolio-work";

export function WorkShowcase() {
  return (
    <section className="relative overflow-hidden bg-obsidian py-20 lg:py-28">
      {/* Blueprint grid backdrop */}
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
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl"
        >
          <motion.span
            variants={mechanicalSlideUp}
            className="font-mono text-xs uppercase tracking-[0.2em] text-safety"
          >
            Selected Work
          </motion.span>
          <motion.h2
            variants={mechanicalSlideUp}
            className="mt-4 font-heading text-3xl font-bold tracking-tight text-concrete md:text-4xl"
          >
            Delivered for clients,
            <br />
            <span className="text-steel-light">across every sector.</span>
          </motion.h2>
          <motion.p
            variants={mechanicalSlideUp}
            className="mt-5 text-lg text-steel-light"
          >
            Production platforms our team has designed, built and shipped — from B2B
            commerce and fintech to hospitality, logistics and education.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {workProjects.map((project, index) => {
            const CardInner = (
              <>
                {/* Screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-concrete/10 bg-obsidian">
                  <Image
                    src={project.image}
                    alt={`${project.name} — ${project.tagline}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  {/* Sector tag */}
                  <span className="absolute left-3 top-3 border border-concrete/20 bg-obsidian/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-concrete backdrop-blur-sm">
                    {project.sector}
                  </span>
                  <span className="absolute right-3 top-3 font-mono text-xs text-concrete/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading text-xl font-bold text-concrete">
                      {project.name}
                    </h3>
                    {project.href && (
                      <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-steel transition-mechanical group-hover:text-safety" />
                    )}
                  </div>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-safety">
                    {project.tagline}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-steel-light">
                    {project.summary}
                  </p>

                  {/* Stack */}
                  <div className="mt-6 flex flex-wrap gap-2 border-t border-concrete/10 pt-5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-concrete/10 bg-concrete/5 px-2 py-1 font-mono text-[11px] text-concrete/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent */}
                <motion.div
                  className="h-1 bg-safety"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={mechanicalTransition}
                />
              </>
            );

            const cardClass =
              "group relative flex h-full flex-col overflow-hidden border-2 border-concrete/10 bg-obsidian transition-mechanical hover:border-safety/40";

            return (
              <motion.div key={project.name} variants={mechanicalSlideUp}>
                {project.href ? (
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cardClass}
                    aria-label={`${project.name} — view live site`}
                  >
                    {CardInner}
                  </Link>
                ) : (
                  <div className={cardClass}>{CardInner}</div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
