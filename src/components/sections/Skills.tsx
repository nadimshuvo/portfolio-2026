"use client";

import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading title="My Skills" subtitle="02 — Expertise" />
        </Reveal>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <StaggerItem key={category.title}>
              <div
                className={`group relative h-full overflow-hidden rounded-3xl border border-white/8 bg-white/[0.02] p-6 backdrop-blur-sm transition duration-500 hover:border-white/15 hover:bg-white/[0.04] ${
                  catIndex === 0 ? "md:col-span-2 xl:col-span-1" : ""
                }`}
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/10 to-violet-500/10 blur-2xl transition group-hover:opacity-100" />
                <h3 className="relative font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/90">
                  {category.title}
                </h3>
                <div className="relative mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-[#0a0f1a]/60 px-3 py-1.5 text-sm text-slate-300 transition hover:border-white/20 hover:text-white"
                      style={
                        {
                          "--skill-glow": skill.color,
                        } as React.CSSProperties
                      }
                    >
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
