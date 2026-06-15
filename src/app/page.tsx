"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";

export default function Home() {
  return (
    <>
    <main className="min-h-[90vh] flex flex-col items-center justify-center bg-[#040408] text-foreground p-4 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent mb-6"
      >
        Flowcore
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-2xl md:text-3xl font-semibold mb-4"
      >
        <span className="text-foreground">Workflows that</span>{" "}
        <span className="bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
          survive failures.
        </span>
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-base md:text-lg text-muted-foreground mb-12"
      >
        A distributed and durable engine for Python.
      </motion.p>

      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-purple blur-3xl rounded-full animate-pulse-glow" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <Image
            src="/logo.svg"
            alt="Flowcore Logo"
            width={200}
            height={200}
            className="w-48 h-48"
          />
        </motion.div>
      </div>

      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        href="https://github.com/ezequielranieri/flowcore"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-blue transition-colors"
      >
        <ExternalLink className="w-4 h-4" />
        github.com/ezequielranieri/
        <span className="text-brand-blue">flowcore</span>
      </motion.a>
    </main>
    <ProblemSection />
    <SolutionSection />
    </>
  );
}
