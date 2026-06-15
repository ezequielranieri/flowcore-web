"use client";

import { motion } from "framer-motion";
import { Database, RotateCw, GitBranch, Layers } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: Database, color: "#0080F3", label: "State persistence" },
  { icon: RotateCw, color: "#3D8AC7", label: "Automatic retries" },
  { icon: GitBranch, color: "#6E5CCB", label: "Saga pattern" },
  { icon: Layers, color: "#9449E0", label: "Native versioning" },
];

export default function ReliabilitySection() {
  return (
    <section className="py-16 max-w-4xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Right column (visual) -- order-1 on mobile, order-2 on md */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 relative flex items-center justify-center"
        >
          {/* Glow behind */}
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-brand-cyan to-brand-purple blur-3xl opacity-40 rounded-full animate-pulse-glow" />

          {/* Outer ring with gradient border */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-[2px] bg-gradient-to-br from-brand-cyan to-brand-purple"
          >
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <Image
                src="/logo.svg"
                alt="Flowcore Logo"
                width={160}
                height={160}
                className="w-32 h-32 md:w-40 md:h-40"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Left column (text) -- order-2 on mobile, order-1 on md */}
        <div className="order-2 md:order-1">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-left"
          >
            <span className="text-foreground">Total</span>{" "}
            <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
              Reliability
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mt-4 text-left"
          >
            Designed so that nothing is ever lost.
          </motion.p>

          <div className="mt-8 space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                className="flex items-center gap-3"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${feature.color}1a` }}
                >
                  <feature.icon className="w-5 h-5" style={{ color: feature.color }} />
                </div>
                <span className="text-base font-medium text-foreground">
                  {feature.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
