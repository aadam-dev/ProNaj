"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { mechanicalTransition } from "@/lib/animations";

const sectors = [
  {
    id: "digital",
    href: "/digital",
    items: [
      { key: "webDevelopment", href: "/digital/web-development" },
      { key: "cybersecurity", href: "/digital/cybersecurity" },
      { key: "softwareEngineering", href: "/digital/software-engineering" },
    ],
  },
  {
    id: "living",
    href: "/living",
    items: [
      { key: "furniture", href: "/living/furniture" },
      { key: "containerHousing", href: "/living/container-housing" },
    ],
  },
  {
    id: "global",
    href: "/global",
    items: [
      { key: "goldCoastCroire", href: "/global/croire" },
      { key: "cocopeatExport", href: "/global/cocopeat" },
      { key: "greenhouseFarming", href: "/global/greenhouse" },
    ],
  },
] as const;

const mainNav = [
  { key: "services", href: "/services" },
  { key: "about", href: "/about" },
  { key: "careers", href: "/careers" },
  { key: "contact", href: "/contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const tHome = useTranslations("home");
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentSector = sectors.find((s) => pathname.startsWith(s.href));

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-obsidian/10 bg-concrete/95 backdrop-blur-sm dark:border-concrete/10 dark:bg-obsidian/95">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center border-2 border-obsidian bg-obsidian dark:border-concrete dark:bg-concrete">
            <span className="font-heading text-lg font-bold text-concrete dark:text-obsidian">
              PN
            </span>
          </div>
          <div className="hidden sm:block">
            <span className="font-heading text-lg font-bold tracking-tight text-obsidian dark:text-concrete">
              Pronaj
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              {sectors.map((sector) => (
                <NavigationMenuItem key={sector.id}>
                  <NavigationMenuTrigger
                    className={cn(
                      "bg-transparent font-heading text-sm font-medium transition-mechanical hover:bg-obsidian/5 dark:hover:bg-concrete/5",
                      pathname.startsWith(sector.href) &&
                        "text-safety"
                    )}
                  >
                    {t(sector.id)}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] border-2 border-obsidian/10 bg-concrete p-4 dark:border-concrete/10 dark:bg-obsidian">
                      <div className="mb-3 border-b border-obsidian/10 pb-3 dark:border-concrete/10">
                        <Link
                          href={sector.href}
                          className="font-heading text-lg font-bold text-obsidian hover:text-safety dark:text-concrete"
                        >
                          Pronaj {t(sector.id)}
                        </Link>
                        <p className="mt-1 font-mono text-xs text-steel">
                          {t(`${sector.id}Desc`)}
                        </p>
                      </div>
                      <ul className="grid gap-2">
                        {sector.items.map((item) => (
                          <li key={item.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="block rounded-sm px-3 py-2 font-medium text-obsidian/80 transition-mechanical hover:bg-obsidian/5 hover:text-safety dark:text-concrete/80 dark:hover:bg-concrete/5"
                              >
                                {t(item.key)}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="mx-4 h-6 w-px bg-obsidian/20 dark:bg-concrete/20" />

          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-3 py-2 font-medium text-obsidian/70 transition-mechanical hover:text-obsidian dark:text-concrete/70 dark:hover:text-concrete",
                pathname === item.href && "text-obsidian dark:text-concrete"
              )}
            >
              {t(item.key)}
              {pathname === item.href && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-3 right-3 h-0.5 bg-safety"
                  transition={mechanicalTransition}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Button
            asChild
            className="bg-safety font-heading text-sm font-bold text-white hover:bg-safety/90"
          >
            <Link href="/contact">{tc("getStarted")}</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full border-l-2 border-obsidian/10 bg-concrete dark:border-concrete/10 dark:bg-obsidian sm:max-w-md"
          >
            <div className="flex flex-col gap-6 pt-8">
              {/* Sectors */}
              {sectors.map((sector) => (
                <div key={sector.id} className="space-y-2">
                  <Link
                    href={sector.href}
                    onClick={() => setMobileOpen(false)}
                    className="font-heading text-xl font-bold text-obsidian dark:text-concrete"
                  >
                    {t(sector.id)}
                  </Link>
                  <div className="ml-4 space-y-1 border-l-2 border-obsidian/10 pl-4 dark:border-concrete/10">
                    {sector.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-1 text-steel hover:text-safety"
                      >
                        {t(item.key)}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="h-px bg-obsidian/10 dark:bg-concrete/10" />

              {/* Main Nav */}
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-heading text-lg font-medium text-obsidian dark:text-concrete"
                >
                  {t(item.key)}
                </Link>
              ))}

              <LanguageSwitcher className="w-fit" />

              <Button
                asChild
                className="mt-4 bg-safety font-heading font-bold text-white hover:bg-safety/90"
              >
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  {tc("getStarted")}
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Sector indicator bar */}
      {currentSector && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-obsidian/5 bg-obsidian/5 dark:border-concrete/5 dark:bg-concrete/5"
        >
          <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-1.5 lg:px-8">
            <span className="font-mono text-[10px] uppercase tracking-widest text-steel">
              {tHome("sectorLabel")}:
            </span>
            <span className="font-heading text-sm font-bold text-safety">
              {t(currentSector.id)}
            </span>
          </div>
        </motion.div>
      )}
    </header>
  );
}
