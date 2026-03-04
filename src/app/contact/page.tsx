"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, mechanicalSlideUp } from "@/lib/animations";

const offices = [
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
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
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

      {/* Contact Form & Info */}
      <section className="bg-concrete py-20 dark:bg-obsidian/50 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
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
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>

              <form className="mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-steel">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full border-2 border-obsidian/10 bg-transparent px-4 py-3 text-obsidian outline-none transition-mechanical focus:border-safety dark:border-concrete/10 dark:text-concrete"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-steel">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full border-2 border-obsidian/10 bg-transparent px-4 py-3 text-obsidian outline-none transition-mechanical focus:border-safety dark:border-concrete/10 dark:text-concrete"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-steel">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full border-2 border-obsidian/10 bg-transparent px-4 py-3 text-obsidian outline-none transition-mechanical focus:border-safety dark:border-concrete/10 dark:text-concrete"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-steel">
                    Interest
                  </label>
                  <select className="w-full border-2 border-obsidian/10 bg-transparent px-4 py-3 text-obsidian outline-none transition-mechanical focus:border-safety dark:border-concrete/10 dark:text-concrete">
                    <option value="">Select a service...</option>
                    <option value="digital">Digital Services</option>
                    <option value="living">Living Solutions</option>
                    <option value="global">Global Trade</option>
                    <option value="partnership">Partnership</option>
                    <option value="careers">Careers</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-steel">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full border-2 border-obsidian/10 bg-transparent px-4 py-3 text-obsidian outline-none transition-mechanical focus:border-safety dark:border-concrete/10 dark:text-concrete"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-safety font-heading font-bold text-white hover:bg-safety/90"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Offices */}
              {offices.map((office) => (
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
                      <MapPin className="h-4 w-4 text-safety" />
                      {office.address}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-steel dark:text-steel-light">
                      <Mail className="h-4 w-4 text-safety" />
                      {office.email}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-steel dark:text-steel-light">
                      <Phone className="h-4 w-4 text-safety" />
                      {office.phone}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Hours */}
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
