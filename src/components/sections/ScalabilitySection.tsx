"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const paths = [
  { d: "M 100 200 C 200 200, 250 60, 350 60", ty: 60 },
  { d: "M 100 200 C 200 200, 250 140, 350 140", ty: 140 },
  { d: "M 100 200 C 180 195, 270 205, 350 200", ty: 200 },
  { d: "M 100 200 C 200 200, 250 260, 350 260", ty: 260 },
  { d: "M 100 200 C 200 200, 250 340, 350 340", ty: 340 },
];

export default function ScalabilitySection() {
  return (
    <section className="py-16 max-w-4xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left column (visual) -- order-1 */}
        <div className="relative order-1 w-full max-w-md mx-auto aspect-square">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0080F3" />
                <stop offset="100%" stopColor="#9449E0" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Fanning paths */}
            {paths.map((path, index) => (
              <motion.path
                key={index}
                d={path.d}
                stroke="url(#lineGradient)"
                strokeWidth="2.5"
                fill="none"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              />
            ))}

            {/* Small circles */}
            {paths.map((path, index) => (
              <motion.circle
                key={index}
                cx="350"
                cy={path.ty}
                r="15"
                stroke="#0080F3"
                strokeWidth="1"
                fill="none"
                className="opacity-30"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.3, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              />
            ))}

            {/* Center circle */}
            <motion.circle
              cx="100"
              cy="200"
              r="40"
              fill="#040408"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            />
          </svg>

          {/* Logo overlay on center circle */}
          <motion.div
            className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/logo.svg"
              alt="Flowcore Logo"
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </motion.div>
        </div>

        {/* Right column (text) -- order-2 */}
        <div className="order-2">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-left bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent"
          >
            Scalability
          </motion.h2>

          <div className="mt-6 space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Each step is independent.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Scale by adding workers{" "}
              <span className="text-brand-cyan">without limits.</span>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
