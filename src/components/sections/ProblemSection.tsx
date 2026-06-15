"use client";

import { motion } from "framer-motion";

export default function ProblemSection() {
  return (
    <section className="py-16 flex flex-col items-center justify-center max-w-4xl mx-auto px-4 text-center">
      {/* 2. Title "The Problem" */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-7xl font-bold mb-12"
      >
        <span className="text-foreground">The </span>
        <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
          Problem
        </span>
      </motion.h2>

      {/* 3. Paragraph 1 */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-xl md:text-2xl mb-8"
      >
        In the real world,{" "}
        <span className="text-brand-cyan">processes fail.</span>
      </motion.p>

      {/* 4. Paragraph 2 */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-xl md:text-2xl mb-16"
      >
        A payment or an order{" "}
        <span className="text-brand-cyan">shouldn&apos;t be</span>{" "}
        <span className="text-brand-purple">lost</span> due to a system crash.
      </motion.p>

      {/* 5. Visual diagram (the "broken flow" graphic) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full flex flex-col items-center my-16 px-4"
      >
        <div className="w-full flex items-center justify-center max-w-2xl">
          {/* Start node */}
          <div className="w-5 h-5 rounded-full bg-brand-cyan shrink-0"
               style={{boxShadow: '0 0 24px 4px rgba(0,128,243,0.6)'}} />

          {/* Solid gradient line */}
          <motion.div
            className="h-[2px] flex-1 bg-gradient-to-r from-brand-cyan to-brand-purple"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />

          {/* Failure node */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-full bg-brand-purple blur-xl opacity-50" />
            <div className="relative w-20 h-20 rounded-full border-2 border-brand-purple bg-background flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M 7 7 L 17 17 M 17 7 L 7 17" stroke="#9449E0" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Dashed faded line */}
          <div className="h-0 flex-1 border-t-2 border-dashed border-muted-foreground opacity-25" />

          {/* End node (ghost) */}
          <div className="w-6 h-6 rounded-full border-2 border-dashed border-muted-foreground opacity-50 shrink-0" />
        </div>

        {/* Label under failure node */}
        <span className="text-xs text-muted-foreground tracking-widest uppercase mt-4">
          System crash
        </span>
      </motion.div>
    </section>
  );
}
