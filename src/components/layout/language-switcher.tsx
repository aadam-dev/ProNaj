"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const LOCALES: { code: string; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ar", label: "ع" },
];

function persistLocale(code: string) {
  document.cookie = `NEXT_LOCALE=${code}; path=/; max-age=31536000; samesite=lax`;
}

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const locale = useLocale();
  const t = useTranslations("common");
  const router = useRouter();
  const [, startTransition] = useTransition();

  const setLocale = (code: string) => {
    if (code === locale) return;
    persistLocale(code);
    startTransition(() => router.refresh());
  };

  return (
    <div
      role="group"
      aria-label={t("language")}
      className={`inline-flex items-stretch border-2 border-obsidian/10 dark:border-concrete/10 ${className}`}
    >
      {LOCALES.map((l) => (
        <button
          key={l.code}
          type="button"
          lang={l.code}
          onClick={() => setLocale(l.code)}
          aria-pressed={locale === l.code}
          className={`px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider transition-mechanical ${
            locale === l.code
              ? "bg-obsidian text-concrete dark:bg-concrete dark:text-obsidian"
              : "text-steel hover:text-safety"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
