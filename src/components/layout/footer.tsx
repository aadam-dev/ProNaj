"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Globe,
  Shield,
  FileText,
  Scale,
} from "lucide-react";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";

const footerColumns = [
  {
    titleKey: "industries",
    links: [
      { label: "Digital Services", href: "/digital" },
      { label: "Web Development", href: "/digital/web-development" },
      { label: "Cybersecurity", href: "/digital/cybersecurity" },
      { label: "Living Solutions", href: "/living" },
      { label: "Container Housing", href: "/living/container-housing" },
      { label: "Global Trade", href: "/global" },
      { label: "Gold Coast Croire", href: "/global/croire" },
      { label: "Cocopeat Export", href: "/global/cocopeat" },
    ],
  },
  {
    titleKey: "compliance",
    links: [
      { label: "Export Compliance", href: "/compliance/export" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "GDPR", href: "/gdpr" },
    ],
  },
  {
    titleKey: "careers",
    links: [
      { label: "Open Positions", href: "/careers" },
      { label: "Engineering", href: "/careers?dept=engineering" },
      { label: "Operations", href: "/careers?dept=operations" },
      { label: "Sales", href: "/careers?dept=sales" },
      { label: "Internships", href: "/careers?type=internship" },
    ],
  },
  {
    titleKey: "contact",
    links: [
      { label: "General Inquiries", href: "/contact" },
      { label: "Sales", href: "/contact?type=sales" },
      { label: "Support", href: "/contact?type=support" },
      { label: "Press", href: "/contact?type=press" },
      { label: "Partnerships", href: "/contact?type=partnerships" },
    ],
  },
];

const locations = [
  {
    flag: "🇬🇭",
    name: "Accra, Ghana",
    type: "Headquarters",
    address: "Airport Residential Area, Accra",
  },
];

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="border-t-2 border-obsidian/10 bg-obsidian dark:border-concrete/10">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-5"
        >
          {/* Brand Column */}
          <motion.div variants={mechanicalSlideUp} className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center border-2 border-concrete bg-concrete">
                <span className="font-heading text-xl font-bold text-obsidian">
                  PN
                </span>
              </div>
            </Link>
            <p className="mt-4 font-heading text-lg font-bold text-concrete">
              Pronaj
            </p>
            <p className="mt-2 text-sm text-steel-light">
              Building the infrastructure of the future through technology,
              design, and global trade.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center border border-steel/30 text-steel-light transition-mechanical hover:border-safety hover:text-safety"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center border border-steel/30 text-steel-light transition-mechanical hover:border-safety hover:text-safety"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center border border-steel/30 text-steel-light transition-mechanical hover:border-safety hover:text-safety"
                aria-label="Website"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Link Columns */}
          {footerColumns.map((column) => (
            <motion.div key={t(column.titleKey)} variants={mechanicalSlideUp}>
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-concrete">
                {t(column.titleKey)}
              </h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-steel-light transition-mechanical hover:text-safety"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Locations Bar */}
        <div className="mt-16 border-t border-steel/20 pt-8">
          <div className="grid gap-6 md:grid-cols-2">
            {locations.map((location) => (
              <div
                key={location.name}
                className="flex items-start gap-4 rounded-sm border border-steel/20 bg-steel/5 p-4"
              >
                <span className="text-2xl">{location.flag}</span>
                <div>
                  <p className="font-heading font-bold text-concrete">
                    {location.name}
                  </p>
                  <p className="font-mono text-xs uppercase tracking-wider text-safety">
                    {location.type}
                  </p>
                  <p className="mt-1 text-sm text-steel-light">
                    {location.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 rounded-sm border border-steel/20 bg-steel/5 px-3 py-2">
            <Shield className="h-4 w-4 text-safety" />
            <span className="font-mono text-xs text-steel-light">
              Security-First
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-sm border border-steel/20 bg-steel/5 px-3 py-2">
            <FileText className="h-4 w-4 text-safety" />
            <span className="font-mono text-xs text-steel-light">
              Export Ready
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-sm border border-steel/20 bg-steel/5 px-3 py-2">
            <Scale className="h-4 w-4 text-safety" />
            <span className="font-mono text-xs text-steel-light">
              Ghana Registered
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-steel/20 bg-obsidian">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 md:flex-row lg:px-8">
          <p className="font-mono text-[10px] tracking-wider text-steel">
            © 2026 Pronaj. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="font-mono text-[10px] tracking-wider text-steel transition-mechanical hover:text-safety"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="font-mono text-[10px] tracking-wider text-steel transition-mechanical hover:text-safety"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="font-mono text-[10px] tracking-wider text-steel transition-mechanical hover:text-safety"
            >
              Cookies
            </Link>
          </div>
          <p className="font-mono text-[10px] tracking-wider text-steel">
            Powered by Pronaj Engineering
          </p>
        </div>
      </div>
    </footer>
  );
}
