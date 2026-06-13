"use client";

import { useState } from "react";
import { Mail, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";
import {
  XIcon,
  LinkedInIcon,
  FacebookIcon,
  GitHubIcon,
  YouTubeIcon,
  WhatsAppIcon,
} from "@/components/icons/SocialIcons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig, socialLinks } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  x: <XIcon className="h-4 w-4" />,
  linkedin: <LinkedInIcon className="h-4 w-4" />,
  facebook: <FacebookIcon className="h-4 w-4" />,
  github: <GitHubIcon className="h-4 w-4" />,
  youtube: <YouTubeIcon className="h-4 w-4" />,
  whatsapp: <WhatsAppIcon className="h-4 w-4" />,
};

type FormState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading title="Get In Touch" subtitle="05 — Contact" />
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left" delay={0.1}>
            <div>
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Let&apos;s talk about everything.
              </h3>
              <p className="mt-3 text-slate-400">
                Don&apos;t like forms? Send me an email. 👋
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-slate-300 transition hover:text-cyan-400"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Mail className="h-4 w-4" />
                  </span>
                  {siteConfig.email}
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-slate-300 transition hover:text-cyan-400"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Phone className="h-4 w-4" />
                  </span>
                  {siteConfig.phone}
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:border-cyan-400/30 hover:text-cyan-300"
                    aria-label={link.name}
                  >
                    {iconMap[link.icon]}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/8 bg-white/[0.02] p-6 backdrop-blur-sm md:p-8"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full rounded-xl border border-white/10 bg-[#0a0f1a]/80 px-4 py-3 text-white placeholder:text-slate-600 outline-none transition focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/20"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Your Email"
                    className="w-full rounded-xl border border-white/10 bg-[#0a0f1a]/80 px-4 py-3 text-white placeholder:text-slate-600 outline-none transition focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/20"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Message"
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#0a0f1a]/80 px-4 py-3 text-white placeholder:text-slate-600 outline-none transition focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/20"
                  />
                </div>
              </div>

              {formState === "success" && (
                <p className="mt-4 flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  Message sent successfully!
                </p>
              )}
              {formState === "error" && (
                <p className="mt-4 text-sm text-red-400">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <div className="mt-6">
                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className={cn(
                    "inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/40 disabled:opacity-70 sm:w-auto",
                  )}
                >
                  {formState === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
