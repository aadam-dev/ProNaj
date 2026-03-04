"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Monitor, Sofa, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { pressEffect } from "@/lib/animations";

const hubItems = [
  {
    id: "home",
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    id: "digital",
    label: "Digital",
    href: "/digital",
    icon: Monitor,
  },
  {
    id: "living",
    label: "Living",
    href: "/living",
    icon: Sofa,
  },
  {
    id: "global",
    label: "Global",
    href: "/global",
    icon: Globe,
  },
];

export function MobileHub() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-obsidian/10 bg-concrete/95 backdrop-blur-sm dark:border-concrete/10 dark:bg-obsidian/95 lg:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-4">
        {hubItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link key={item.id} href={item.href} className="relative">
              <motion.div
                variants={pressEffect}
                initial="initial"
                whileTap="tap"
                className={cn(
                  "flex flex-col items-center gap-1 py-3 transition-mechanical",
                  active
                    ? "text-safety"
                    : "text-steel hover:text-obsidian dark:hover:text-concrete"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="font-mono text-[10px] uppercase tracking-wider">
                  {item.label}
                </span>

                {/* Active indicator */}
                {active && (
                  <motion.div
                    layoutId="mobile-hub-indicator"
                    className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-safety"
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>

      {/* Safe area padding for iOS */}
      <div className="h-safe-area-inset-bottom bg-concrete dark:bg-obsidian" />
    </nav>
  );
}
