"use client";

import { useState, useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";
import {
  validateContactForm,
  isRateLimited,
  type ContactFormData,
} from "@/lib/validation";

const OFFICES = [
  {
    flag: "🇺🇸",
    name: "Delaware, USA",
    type: "Headquarters",
    address: "1209 Orange Street, Wilmington, DE 19801",
    email: "usa@pronaj.com",
    phone: "+1 (302) 555-0100",
  },
  {
    flag: "🇬🇭",
    name: "Accra, Ghana",
    type: "Operations Hub",
    address: "Airport Residential Area, Accra",
    email: "ghana@pronaj.com",
    phone: "+233 30 255 0100",
  },
] as const;

const INTEREST_OPTIONS = [
  { value: "", label: "Select a service..." },
  { value: "digital", label: "Digital Services" },
  { value: "living", label: "Living Solutions" },
  { value: "global", label: "Global Trade" },
  { value: "partnership", label: "Partnership" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Other" },
] as const;

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const lastSubmitRef = useRef<number | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});

    if (isRateLimited(lastSubmitRef.current)) {
      setErrors({ form: "Please wait before submitting again" });
      return;
    }

    const formData = new FormData(e.currentTarget);
    const data: ContactFormData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      interest: formData.get("interest") as string,
      message: formData.get("message") as string,
    };

    const validation = validateContactForm(data);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setStatus("submitting");
    lastSubmitRef.current = Date.now();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      formRef.current?.reset();
    } catch {
      setStatus("error");
      setErrors({ form: "Something went wrong. Please try again." });
    }
  }

  const inputClasses =
    "w-full border-2 border-obsidian/10 bg-transparent px-4 py-3 text-obsidian outline-none transition-mechanical focus:border-safety dark:border-concrete/10 dark:text-concrete";
  const errorClasses = "mt-1 text-xs text-red-500";

  return (
    <>
      <section className="bg-obsidian py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-3xl"
          >
            <motion.p
              variants={mechanicalSlideUp}
              className="font-mono text-xs uppercase tracking-[0.2em] text-safety"
            >
              Contact Us
            </motion.p>

            <motion.h1
              variants={mechanicalSlideUp}
              className="mt-4 font-heading text-4xl font-bold tracking-tight text-concrete md:text-5xl"
            >
              Let&apos;s Build
              <br />
              <span className="text-steel-light">Something Together</span>
            </motion.h1>

            <motion.p
              variants={mechanicalSlideUp}
              className="mt-6 text-lg text-steel-light"
            >
              Whether you&apos;re interested in our digital services, living
              solutions, or global trade operations, we&apos;re here to help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="bg-concrete py-20 dark:bg-obsidian/50 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-2 border-obsidian/10 bg-white p-8 dark:border-concrete/10 dark:bg-obsidian"
            >
              <h2 className="font-heading text-2xl font-bold text-obsidian dark:text-concrete">
                Send a Message
              </h2>
              <p className="mt-2 text-steel dark:text-steel-light">
                Fill out the form and we&apos;ll get back to you within 24
                hours.
              </p>

              {status === "success" ? (
                <div className="mt-8 flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="h-12 w-12 text-green-500" />
                  <p className="mt-4 font-heading text-lg font-bold text-obsidian dark:text-concrete">
                    Message Sent
                  </p>
                  <p className="mt-2 text-sm text-steel dark:text-steel-light">
                    We&apos;ll be in touch soon.
                  </p>
                  <Button
                    onClick={() => setStatus("idle")}
                    variant="outline"
                    className="mt-6"
                  >
                    Send Another
                  </Button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-6"
                  noValidate
                >
                  {errors.form && (
                    <div className="border-2 border-red-500/20 bg-red-500/10 p-4 text-sm text-red-600 dark:text-red-400">
                      {errors.form}
                    </div>
                  )}

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-2 block font-mono text-xs uppercase tracking-wider text-steel"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        maxLength={100}
                        className={inputClasses}
                        aria-invalid={!!errors.firstName}
                        aria-describedby={
                          errors.firstName ? "firstName-error" : undefined
                        }
                      />
                      {errors.firstName && (
                        <p id="firstName-error" className={errorClasses}>
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-2 block font-mono text-xs uppercase tracking-wider text-steel"
                      >
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        maxLength={100}
                        className={inputClasses}
                        aria-invalid={!!errors.lastName}
                        aria-describedby={
                          errors.lastName ? "lastName-error" : undefined
                        }
                      />
                      {errors.lastName && (
                        <p id="lastName-error" className={errorClasses}>
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block font-mono text-xs uppercase tracking-wider text-steel"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      maxLength={254}
                      className={inputClasses}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className={errorClasses}>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="mb-2 block font-mono text-xs uppercase tracking-wider text-steel"
                    >
                      Interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      className={inputClasses}
                      aria-invalid={!!errors.interest}
                      aria-describedby={
                        errors.interest ? "interest-error" : undefined
                      }
                    >
                      {INTEREST_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.interest && (
                      <p id="interest-error" className={errorClasses}>
                        {errors.interest}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block font-mono text-xs uppercase tracking-wider text-steel"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      maxLength={5000}
                      className={inputClasses}
                      aria-invalid={!!errors.message}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                    />
                    {errors.message && (
                      <p id="message-error" className={errorClasses}>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-safety font-heading font-bold text-white hover:bg-safety/90 disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {OFFICES.map((office) => (
                <motion.div
                  key={office.name}
                  variants={mechanicalSlideUp}
                  className="border-2 border-obsidian/10 bg-white p-6 dark:border-concrete/10 dark:bg-obsidian"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{office.flag}</span>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-obsidian dark:text-concrete">
                        {office.name}
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-wider text-safety">
                        {office.type}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center gap-3 text-sm text-steel dark:text-steel-light">
                      <MapPin className="h-4 w-4 shrink-0 text-safety" />
                      {office.address}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-steel dark:text-steel-light">
                      <Mail className="h-4 w-4 shrink-0 text-safety" />
                      <a
                        href={`mailto:${office.email}`}
                        className="hover:text-safety"
                      >
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-steel dark:text-steel-light">
                      <Phone className="h-4 w-4 shrink-0 text-safety" />
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="hover:text-safety"
                      >
                        {office.phone}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                variants={mechanicalSlideUp}
                className="border-2 border-obsidian/10 bg-white p-6 dark:border-concrete/10 dark:bg-obsidian"
              >
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-safety" />
                  <h3 className="font-heading font-bold text-obsidian dark:text-concrete">
                    Business Hours
                  </h3>
                </div>
                <div className="mt-4 space-y-2 text-sm text-steel dark:text-steel-light">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM (Local Time)</p>
                  <p>Saturday: 10:00 AM - 2:00 PM (Ghana Office Only)</p>
                  <p>Sunday: Closed</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
