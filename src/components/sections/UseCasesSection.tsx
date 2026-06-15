"use client";

import { motion } from "framer-motion";
import { CreditCard, ShoppingCart, UserCheck, Puzzle } from "lucide-react";

const cards = [
  { icon: CreditCard, label: "Payments", color: "#0080F3" },
  { icon: ShoppingCart, label: "Orders", color: "#9449E0" },
  { icon: UserCheck, label: "Onboarding", color: "#0080F3" },
  { icon: Puzzle, label: "Integrations", color: "#9449E0" },
];

export default function UseCasesSection() {
  return (
    <section className="py-16 flex flex-col items-center justify-center max-w-4xl mx-auto px-4 text-center">
      {/* 1. Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold"
      >
        <span className="text-foreground">Use </span>
        <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
          Cases
        </span>
      </motion.h2>

      {/* 2. Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xl md:text-2xl text-muted-foreground mt-4 mb-4"
      >
        Automate critical processes with <span className="text-brand-cyan">total confidence.</span>
      </motion.p>

      {/* 3. Grid */}
      <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="group relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Card */}
            <div
              className="relative rounded-2xl border bg-card/50 p-8 flex flex-col items-center gap-4 transition-all duration-300 group-hover:border-[var(--card-color)]"
              style={{
                borderColor: `${card.color}33`,
                "--card-color": card.color,
              } as React.CSSProperties}
            >
              {/* Icon glow */}
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ backgroundColor: card.color }}
                />
                <card.icon className="relative w-10 h-10" style={{ color: card.color }} />
              </div>
              <span className="text-lg font-semibold text-foreground">{card.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
