"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import TechSection from "@/components/sections/TechSection";
import ReliabilitySection from "@/components/sections/ReliabilitySection";
import ScalabilitySection from "@/components/sections/ScalabilitySection";
import ObservabilitySection from "@/components/sections/ObservabilitySection";
import FinalSection from "@/components/sections/FinalSection";

const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

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
        className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border hover:border-brand-cyan transition-colors duration-300 group"
      >
        <div className="text-muted-foreground group-hover:text-brand-cyan transition-colors">
          <GithubIcon />
        </div>
        <span className="whitespace-nowrap text-muted-foreground">
          github.com/ezequielranieri/<span className="text-brand-blue font-medium">flowcore</span>
        </span>
      </motion.a>
    </main>
    <ProblemSection />
    <SolutionSection />
    <UseCasesSection />
    <TechSection />
    <ReliabilitySection />
    <ScalabilitySection />
    <ObservabilitySection />
    <FinalSection />
    </>
  );
}
