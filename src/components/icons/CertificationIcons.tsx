import {
  Code2,
  Database,
  Palette,
  Braces,
  GraduationCap,
  Flame,
  Landmark,
} from "lucide-react";

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
};

export function UdemyIcon({ className, style }: IconProps) {
  return <GraduationCap className={className} style={style} aria-hidden="true" />;
}

export function FreeCodeCampIcon({ className, style }: IconProps) {
  return <Flame className={className} style={style} aria-hidden="true" />;
}

export function WebflowIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor" aria-hidden="true">
      <path d="M4.5 6.75h3.75l2.25 9 2.25-9H16.5l-2.25 9 2.25-9H20.25l-3 12h-3.75l-2.25-9-2.25 9H8.25l-3-12z" />
    </svg>
  );
}

export function HarvardIcon({ className, style }: IconProps) {
  return <Landmark className={className} style={style} aria-hidden="true" />;
}

export function ProgrammingHeroIcon({ className, style }: IconProps) {
  return <Code2 className={className} style={style} aria-hidden="true" />;
}

export function LinkedInLearningIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function HtmlTrainingIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor" aria-hidden="true">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622h10.125l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531l-.069-.754h9.29l.36-3.786z" />
    </svg>
  );
}

export function CssTrainingIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor" aria-hidden="true">
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716H6.83l.24 2.573h6.182l-.364 3.523-2.907.81-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531l-.069-.754h9.29l.36-3.786z" />
    </svg>
  );
}

export function DatabaseTrainingIcon({ className, style }: IconProps) {
  return <Database className={className} style={style} aria-hidden="true" />;
}

export function JavaScriptTrainingIcon({ className, style }: IconProps) {
  return <Braces className={className} style={style} aria-hidden="true" />;
}

export function DesignTrainingIcon({ className, style }: IconProps) {
  return <Palette className={className} style={style} aria-hidden="true" />;
}

export type CertificationIconType =
  | "udemy"
  | "freecodecamp"
  | "webflow"
  | "harvard"
  | "programming-hero"
  | "linkedin"
  | "html"
  | "css"
  | "database"
  | "javascript"
  | "design";

const iconComponents: Record<
  CertificationIconType,
  React.ComponentType<IconProps>
> = {
  udemy: UdemyIcon,
  freecodecamp: FreeCodeCampIcon,
  webflow: WebflowIcon,
  harvard: HarvardIcon,
  "programming-hero": ProgrammingHeroIcon,
  linkedin: LinkedInLearningIcon,
  html: HtmlTrainingIcon,
  css: CssTrainingIcon,
  database: DatabaseTrainingIcon,
  javascript: JavaScriptTrainingIcon,
  design: DesignTrainingIcon,
};

export function CertificationIcon({
  type,
  className,
  style,
}: {
  type: CertificationIconType;
  className?: string;
  style?: React.CSSProperties;
}) {
  const Icon = iconComponents[type];
  return <Icon className={className} style={style} />;
}
