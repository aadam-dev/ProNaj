"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useTranslations } from "next-intl";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

const WHATSAPP = "233263039818";

function whatsappUrl(text?: string) {
  const base = `https://wa.me/${WHATSAPP}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

function textOf(message: { parts: Array<{ type: string; text?: string }> }) {
  return message.parts
    .filter((p) => p.type === "text")
    .map((p) => p.text ?? "")
    .join("");
}

export function ChatWidget() {
  const t = useTranslations("chat");
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [errored, setErrored] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const logRef = useRef<HTMLDivElement>(null);

  const transport = useMemo(
    () => new DefaultChatTransport({ api: "/api/chat" }),
    []
  );
  const { messages, sendMessage, status } = useChat({
    transport,
    onError: () => setErrored(true),
  });

  const busy = status === "submitted" || status === "streaming";

  // Focus input when opened; close on Escape.
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Auto-scroll to latest message.
  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, errored, open]);

  const submit = (text: string) => {
    const value = text.trim();
    if (!value || busy) return;
    setErrored(false);
    sendMessage({ text: value });
    setInput("");
  };

  const quickReplies = [
    { key: "qServices", text: t("qServices") },
    { key: "qQuote", text: t("qQuote") },
    { key: "qAcademic", text: t("qAcademic") },
  ];

  return (
    <>
      {/* Launcher */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? t("close") : t("openLabel")}
        aria-expanded={open}
        className="fixed bottom-5 end-5 z-[70] flex h-14 w-14 items-center justify-center border-2 border-obsidian bg-safety text-obsidian shadow-xl transition-mechanical hover:bg-safety/90 lg:h-16 lg:w-16"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "x" : "chat"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          </motion.span>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-label={t("title")}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed bottom-24 end-3 z-[70] flex h-[min(70vh,560px)] w-[min(92vw,380px)] flex-col border-2 border-obsidian bg-concrete shadow-2xl dark:border-concrete/20 dark:bg-obsidian"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 border-b-2 border-obsidian/10 bg-obsidian px-4 py-3 dark:border-concrete/10">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center border-2 border-safety bg-safety text-obsidian">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading text-sm font-bold text-concrete">{t("title")}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-steel-light">
                    {t("subtitle")}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={t("close")}
                className="p-1 text-steel-light transition-mechanical hover:text-safety"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Message log */}
            <div
              ref={logRef}
              className="flex-1 space-y-3 overflow-y-auto p-4"
              aria-live="polite"
            >
              {/* Greeting */}
              <Bubble role="assistant">{t("greeting")}</Bubble>

              {messages.map((m) => (
                <Bubble key={m.id} role={m.role === "user" ? "user" : "assistant"}>
                  {textOf(m)}
                </Bubble>
              ))}

              {busy && (
                <div className="flex items-center gap-2 font-mono text-xs text-steel">
                  <Loader2 className="h-3.5 w-3.5 animate-spin" /> …
                </div>
              )}

              {errored && (
                <div className="border-2 border-safety/40 bg-safety/10 p-3">
                  <p className="text-sm text-obsidian dark:text-concrete">{t("unavailable")}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <a
                      href={whatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-obsidian bg-[#25d366] px-3 py-1.5 font-heading text-xs font-bold text-obsidian"
                    >
                      {t("whatsapp")}
                    </a>
                    <a
                      href="/contact"
                      className="border-2 border-obsidian/20 px-3 py-1.5 font-heading text-xs font-bold text-obsidian dark:border-concrete/20 dark:text-concrete"
                    >
                      {t("contact")}
                    </a>
                  </div>
                </div>
              )}

              {/* Quick replies (only before the conversation starts) */}
              {messages.length === 0 && !errored && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {quickReplies.map((q) => (
                    <button
                      key={q.key}
                      type="button"
                      onClick={() => submit(q.text)}
                      className="border border-obsidian/15 bg-white px-3 py-1.5 font-mono text-xs text-obsidian transition-mechanical hover:border-safety hover:text-safety dark:border-concrete/15 dark:bg-obsidian dark:text-concrete"
                    >
                      {q.text}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submit(input);
              }}
              className="border-t-2 border-obsidian/10 p-3 dark:border-concrete/10"
            >
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t("placeholder")}
                  aria-label={t("placeholder")}
                  className="min-w-0 flex-1 border-2 border-obsidian/15 bg-white px-3 py-2 text-sm text-obsidian outline-none transition-mechanical focus:border-safety dark:border-concrete/15 dark:bg-obsidian dark:text-concrete"
                />
                <button
                  type="submit"
                  disabled={busy || !input.trim()}
                  aria-label={t("send")}
                  className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-obsidian bg-safety text-obsidian transition-mechanical hover:bg-safety/90 disabled:opacity-40"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-center font-mono text-[10px] text-steel">
                {t("disclaimer")}
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Bubble({ role, children }: { role: "user" | "assistant"; children: React.ReactNode }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] whitespace-pre-wrap px-3 py-2 text-sm ${
          isUser
            ? "border-2 border-obsidian bg-obsidian text-concrete"
            : "border-2 border-obsidian/10 bg-white text-obsidian dark:border-concrete/10 dark:bg-obsidian dark:text-concrete"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
