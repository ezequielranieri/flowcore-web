"use client";

import { motion } from "framer-motion";
import { Zap, RefreshCw, Database, Activity } from "lucide-react";

const techs = [
  { icon: Zap, color: "#0080F3", name: "FastAPI", desc: "Modern, asynchronous API framework" },
  { icon: RefreshCw, color: "#3D8AC7", name: "Celery", desc: "Distributed task queue for background jobs" },
  { icon: Database, color: "#6E5CCB", name: "PostgreSQL", desc: "Reliable relational persistence" },
  { icon: Activity, color: "#9449E0", name: "OpenTelemetry", desc: "End-to-end distributed tracing" },
];

export default function TechSection() {
  return (
    <section className="py-16 flex flex-col items-center justify-center max-w-2xl mx-auto px-4 text-center">
      {/* 1. Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold"
      >
        <span className="text-foreground">Cutting-edge </span>
        <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
          Tech
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
        Built with the best tools in the Python ecosystem.
      </motion.p>

      {/* 3. Tech List */}
      <div className="w-full mt-8 space-y-4">
        {techs.map((tech, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 rounded-2xl border p-5 bg-card/50"
            style={{ borderColor: `${tech.color}33` }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Icon container */}
            <div className="relative w-12 h-12 flex items-center justify-center rounded-xl" style={{ backgroundColor: `${tech.color}1a` }}>
              <div className="absolute inset-0 rounded-xl blur-lg opacity-40" style={{ backgroundColor: tech.color }} />
              <tech.icon className="relative w-8 h-8" style={{ color: tech.color }} />
            </div>
            
            {/* Text block */}
            <div className="flex-1 text-left">
              <h3 className="text-lg font-semibold text-foreground">{tech.name}</h3>
              <p className="text-sm text-muted-foreground">{tech.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
