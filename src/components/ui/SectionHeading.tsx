import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  subtitle,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-4",
          align === "center" && "justify-center",
        )}
      >
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/80">
          {subtitle ?? "Section"}
        </span>
        <span className="h-px w-12 bg-gradient-to-r from-cyan-400/60 to-transparent" />
      </div>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div
        className={cn(
          "mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500",
          align === "center" && "mx-auto",
        )}
      />
    </div>
  );
}
