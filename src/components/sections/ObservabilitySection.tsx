"use client";

import { motion } from "framer-motion";

const spans = [
  { label: "workflow.start", left: "0%", width: "100%", opacity: 0.3 },
  { label: "step.validate", left: "5%", width: "30%", opacity: 0.9 },
  { label: "step.process", left: "35%", width: "40%", opacity: 0.9 },
  { label: "step.save", left: "75%", width: "15%", opacity: 0.9 },
  { label: "workflow.complete", left: "0%", width: "100%", opacity: 0.3, height: "h-1" },
];

export default function ObservabilitySection() {
  return (
    <section className="py-16 max-w-3xl mx-auto px-4 text-center flex flex-col items-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent"
      >
        Observability
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-2xl md:text-3xl font-semibold text-foreground mt-4"
      >
        It&apos;s not a black box.
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg text-muted-foreground mt-2 mb-12"
      >
        End-to-end traceability with OpenTelemetry and Jaeger.
      </motion.p>

      {/* Trace Waterfall Panel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full max-w-2xl rounded-2xl border border-border bg-card/30 p-6 backdrop-blur-sm"
      >
        {/* Time markers header */}
        <div className="text-xs text-muted-foreground flex justify-between px-2 border-b border-border/50 pb-2">
          <span>0ms</span>
          <span>200ms</span>
          <span>400ms</span>
          <span>600ms</span>
          <span>800ms</span>
        </div>

        {/* Spans waterfall */}
        <div className="space-y-3 mt-4">
          {spans.map((span, index) => (
            <div key={index} className="flex items-center gap-3">
              {/* Span Label */}
              <span className="w-40 shrink-0 text-sm text-foreground text-left truncate opacity-80">
                {span.label}
              </span>
              
              {/* Bar Container */}
              <div className="flex-1 h-6 relative flex items-center">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.15, ease: "easeOut" }}
                  style={{ 
                    left: span.left, 
                    width: span.width,
                    transformOrigin: "left",
                    opacity: span.opacity 
                  }}
                  className={`absolute rounded-md ${span.height || 'h-full'} bg-gradient-to-r from-brand-cyan to-brand-purple shadow-[0_0_15px_rgba(0,128,243,0.3)]`}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
