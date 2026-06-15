"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

export default function FinalSection() {
  return (
    <section className="py-24 max-w-2xl mx-auto px-4 text-center flex flex-col items-center">
      {/* Logo with Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan to-brand-purple blur-3xl opacity-30 animate-pulse-glow" />
        <Image
          src="/logo.svg"
          alt="Flowcore Logo"
          width={160}
          height={160}
          className="relative w-32 h-32 md:w-40 md:h-40 z-10"
        />
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold mt-6 bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent"
      >
        Flowcore
      </motion.h2>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-xl md:text-2xl text-foreground font-medium mt-4"
      >
        Build indestructible flows.
      </motion.p>

      {/* Available on GitHub */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-base text-muted-foreground mt-2"
      >
        Available on GitHub.
      </motion.p>

      {/* Divider */}
      <div className="w-full max-w-xs border-t border-border my-8" />

      {/* GitHub Link/Button */}
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        href="https://github.com/ezequielranieri/flowcore"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-6 py-3 rounded-full border border-border hover:border-brand-cyan transition-colors duration-300 group"
      >
        <div className="text-muted-foreground group-hover:text-brand-cyan transition-colors">
          <GithubIcon />
        </div>
        <span className="text-muted-foreground">
          github.com/ezequielranieri/
          <span className="text-brand-blue font-medium">flowcore</span>
        </span>
      </motion.a>
    </section>
  );
}
