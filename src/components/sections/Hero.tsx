"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TypingText } from "@/components/ui/TypingText";
import { ParticleCanvas } from "@/components/effects/ParticleCanvas";
import { siteConfig } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-violet-600/25 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-600/15 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <ParticleCanvas />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 text-xs font-medium text-cyan-300"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Hello, my name is
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Nadim Mahmud{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Shuvo
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-4 h-8 text-lg font-medium text-violet-300 sm:text-xl"
          >
            <TypingText texts={siteConfig.roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticButton href="#projects" variant="primary">
              View My Work
            </MagneticButton>
            <MagneticButton href="#contact" variant="outline">
              Contact Me
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden aspect-square w-full max-w-md lg:block"
        >
          <div className="absolute inset-0 animate-[spin_30s_linear_infinite] rounded-full border border-dashed border-white/10" />
          <div className="absolute inset-8 animate-[spin_20s_linear_infinite_reverse] rounded-full border border-white/5" />
          <div className="absolute inset-16 rounded-full bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-fuchsia-500/20 blur-2xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-48 w-48">
              <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-tr from-cyan-400 to-violet-500 opacity-60 blur-xl" />
              <div className="absolute inset-4 rounded-full border border-white/20 bg-[#0a0f1a]/80 backdrop-blur-md" />
              <div className="absolute inset-8 flex flex-col items-center justify-center rounded-full border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-violet-600/10 text-center">
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                  Building
                </span>
                <span className="mt-1 text-2xl font-bold text-white">Web</span>
                <span className="text-sm text-slate-400">Experiences</span>
              </div>
              <span className="absolute -right-2 top-8 h-3 w-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50" />
              <span className="absolute -left-3 bottom-12 h-2 w-2 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50" />
              <span className="absolute right-6 bottom-2 h-2.5 w-2.5 rounded-full bg-fuchsia-400 shadow-lg shadow-fuchsia-400/50" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-slate-500 transition hover:text-cyan-400"
        aria-label="Scroll to about"
      >
        <span className="tracking-widest">SCROLL</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
