"use client";

import { ExternalLink } from "lucide-react";
import { CertificationIcon } from "@/components/icons/CertificationIcons";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading title="Certifications" subtitle="03 — Credentials" />
        </Reveal>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certifications.map((cert) => (
            <StaggerItem key={cert.name}>
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.02] p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-cyan-500/5"
              >
                <div
                  className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10"
                  style={{ backgroundColor: `${cert.color}18` }}
                >
                  <CertificationIcon
                    type={cert.icon}
                    className="h-5 w-5"
                    style={{ color: cert.color }}
                  />
                </div>
                <h3 className="font-semibold text-white transition group-hover:text-cyan-300">
                  {cert.name}
                </h3>
                <p className="mt-1 text-sm text-slate-500">{cert.provider}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-slate-500 transition group-hover:text-cyan-400">
                  View credential
                  <ExternalLink className="h-3 w-3" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
