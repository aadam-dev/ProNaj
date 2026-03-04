"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { lineDrawVariants, staggerContainer, mechanicalSlideUp } from "@/lib/animations";

const routes = [
  {
    id: "ghana-us",
    origin: { name: "Accra", country: "Ghana", x: 48, y: 52 },
    destination: { name: "Delaware", country: "USA", x: 25, y: 38 },
    product: "Cocopeat",
    volume: "5,000 MT/year",
  },
  {
    id: "ghana-eu",
    origin: { name: "Tema Port", country: "Ghana", x: 48, y: 52 },
    destination: { name: "Rotterdam", country: "Netherlands", x: 50, y: 32 },
    product: "Cocopeat",
    volume: "3,000 MT/year",
  },
  {
    id: "ghana-uk",
    origin: { name: "Accra", country: "Ghana", x: 48, y: 52 },
    destination: { name: "London", country: "UK", x: 48, y: 30 },
    product: "Greenhouse Produce",
    volume: "500 MT/year",
  },
];

const markets = [
  { name: "North America", countries: 5, volume: "5,000 MT" },
  { name: "Europe", countries: 12, volume: "4,500 MT" },
  { name: "Middle East", countries: 6, volume: "2,000 MT" },
  { name: "Asia Pacific", countries: 4, volume: "1,500 MT" },
];

export function TradeRouteMap() {
  return (
    <section className="bg-obsidian py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-safety">
            Global Reach
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-concrete lg:text-4xl">
            Trade Routes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-steel-light">
            Our Delaware-Ghana bridge enables compliant export to markets across
            North America, Europe, and beyond.
          </p>
        </motion.div>

        {/* Map Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative mb-16 aspect-[2/1] overflow-hidden border-2 border-steel/20"
        >
          {/* World Map SVG Background */}
          <svg
            viewBox="0 0 100 50"
            className="h-full w-full"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Simplified world map outline */}
            <defs>
              <pattern
                id="grid"
                width="5"
                height="5"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 5 0 L 0 0 0 5"
                  fill="none"
                  stroke="rgba(249, 115, 22, 0.1)"
                  strokeWidth="0.1"
                />
              </pattern>
            </defs>
            <rect width="100" height="50" fill="url(#grid)" />

            {/* Continents (simplified shapes) */}
            <g fill="rgba(100, 116, 139, 0.2)" stroke="rgba(100, 116, 139, 0.3)" strokeWidth="0.2">
              {/* North America */}
              <path d="M 10,20 Q 15,15 25,18 L 30,25 Q 28,35 20,38 L 12,35 Q 8,28 10,20" />
              {/* South America */}
              <path d="M 25,42 Q 28,38 32,40 L 30,55 Q 25,58 22,52 L 25,42" />
              {/* Europe */}
              <path d="M 45,25 Q 52,22 55,28 L 52,35 Q 48,33 45,30 L 45,25" />
              {/* Africa */}
              <path d="M 45,38 Q 52,35 58,42 L 55,58 Q 48,60 45,55 L 45,38" />
              {/* Asia */}
              <path d="M 58,20 Q 75,18 85,25 L 82,40 Q 70,45 60,38 L 58,20" />
              {/* Australia */}
              <path d="M 78,48 Q 85,45 88,50 L 85,55 Q 80,56 78,52 L 78,48" />
            </g>

            {/* Trade Routes */}
            {routes.map((route, index) => (
              <motion.g key={route.id}>
                <motion.path
                  d={`M ${route.origin.x} ${route.origin.y} Q ${(route.origin.x + route.destination.x) / 2} ${Math.min(route.origin.y, route.destination.y) - 10} ${route.destination.x} ${route.destination.y}`}
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="0.3"
                  strokeDasharray="1 0.5"
                  variants={lineDrawVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 }}
                />
                {/* Origin point */}
                <motion.circle
                  cx={route.origin.x}
                  cy={route.origin.y}
                  r="1"
                  fill="#F97316"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 }}
                />
                {/* Destination point */}
                <motion.circle
                  cx={route.destination.x}
                  cy={route.destination.y}
                  r="0.8"
                  fill="#F1F5F9"
                  stroke="#F97316"
                  strokeWidth="0.2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 + 0.5 }}
                />
              </motion.g>
            ))}

            {/* Ghana highlight */}
            <motion.circle
              cx="48"
              cy="52"
              r="2"
              fill="none"
              stroke="#F97316"
              strokeWidth="0.3"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-safety" />
              <span className="font-mono text-xs text-concrete">Origin</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full border border-safety bg-concrete" />
              <span className="font-mono text-xs text-concrete">Destination</span>
            </div>
          </div>
        </motion.div>

        {/* Route Details */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-3"
        >
          {routes.map((route) => (
            <motion.div
              key={route.id}
              variants={mechanicalSlideUp}
              className="border border-steel/20 bg-steel/5 p-6"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-safety" />
                <span className="font-mono text-xs text-steel-light">
                  {route.origin.country} → {route.destination.country}
                </span>
              </div>
              <h3 className="mt-2 font-heading text-lg font-bold text-concrete">
                {route.product}
              </h3>
              <p className="mt-1 font-mono text-sm text-safety">{route.volume}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Market Stats */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {markets.map((market) => (
            <motion.div
              key={market.name}
              variants={mechanicalSlideUp}
              className="border border-steel/20 p-6 text-center"
            >
              <p className="font-heading text-2xl font-bold text-safety">
                {market.volume}
              </p>
              <p className="mt-1 font-heading font-bold text-concrete">
                {market.name}
              </p>
              <p className="mt-1 font-mono text-xs text-steel-light">
                {market.countries} countries
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
