"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Counter } from "@/components/ui/Counter";
import { aboutContent, siteConfig, stats } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading title="About Me" subtitle="01 — Profile" />
        </Reveal>

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal direction="left" delay={0.1}>
            <div className="group relative mx-auto max-w-sm">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-violet-500/10 to-fuchsia-500/20 opacity-0 blur-2xl transition duration-700 group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src={aboutContent.profileImage}
                    alt={siteConfig.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06080f] via-transparent to-transparent opacity-60" />
                </div>
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#06080f]/80 p-4 backdrop-blur-md">
                  <div className="flex items-center gap-2 text-sm font-medium text-emerald-400">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </span>
                    {siteConfig.status}
                  </div>
                  <p className="mt-1 text-sm text-slate-400">{siteConfig.role}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal direction="right" delay={0.15}>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-violet-400">
                {aboutContent.eyebrow}
              </span>
              <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                {aboutContent.heading}
              </h3>
            </Reveal>

            <Reveal direction="right" delay={0.25}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-400">
                {aboutContent.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.35}>
              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1a]/80 font-mono text-xs backdrop-blur-sm">
                <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 text-slate-500">developer.ts</span>
                </div>
                <pre className="overflow-x-auto p-4 text-slate-300">
                  <code>{`const engineer = {
  name: "${siteConfig.name}",
  role: "${siteConfig.role}",
  focus: ["accessibility", "performance", "design systems"],
  stack: ["React", "Next.js", "Node.js", "TypeScript"],
  openToWork: true,
};`}</code>
                </pre>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.45}>
              <div className="mt-10 grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-center backdrop-blur-sm transition hover:border-cyan-400/20 hover:bg-white/[0.05]"
                  >
                    <div className="text-2xl font-bold text-white md:text-3xl">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-1 text-xs text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
