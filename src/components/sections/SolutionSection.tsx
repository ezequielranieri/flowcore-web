"use client";

import { motion } from "framer-motion";
import { Play, Cog, Save, FastForward } from "lucide-react";

const steps = [
  { icon: Play, label: "Start", color: "#0080F3" },
  { icon: Cog, label: "Process", color: "#3D8AC7" },
  { icon: Save, label: "Save", color: "#6E5CCB" },
  { icon: FastForward, label: "Continue", color: "#9449E0" },
];

export default function SolutionSection() {
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
        <span className="text-foreground">The </span>
        <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
          Solution
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
        Flowcore divides processes into <span className="text-brand-cyan">durable steps.</span>
      </motion.p>

      {/* 3. Visual */}
      <motion.div
        className="my-8 w-full flex flex-col items-center px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-full flex items-center justify-between max-w-3xl relative">
          {/* Glow line (blurred, behind) */}
          <motion.div
            className="absolute top-1/2 left-10 right-10 h-2 -translate-y-1/2 bg-gradient-to-r from-brand-cyan to-brand-purple blur-md opacity-50"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />
          {/* Sharp line */}
          <motion.div
            className="absolute top-1/2 left-10 right-10 h-[2px] -translate-y-1/2 bg-gradient-to-r from-brand-cyan to-brand-purple"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center z-10">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <div
                  className="absolute inset-0 rounded-full blur-lg opacity-40"
                  style={{ backgroundColor: step.color }}
                />
                <div
                  className="relative w-20 h-20 rounded-full border-2 bg-background flex items-center justify-center"
                  style={{ borderColor: step.color }}
                >
                  <step.icon className="w-7 h-7" style={{ color: step.color }} />
                </div>
              </motion.div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground mt-4">
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* 4. Closing */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl"
      >
        It <span className="text-foreground font-semibold">saves state at every step</span> to always resume exactly where it stopped.
      </motion.p>
    </section>
  );
}
