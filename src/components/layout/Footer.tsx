import { Heart } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#04060c] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-slate-500 md:flex-row md:text-left lg:px-8">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}</p>
        <p className="inline-flex items-center gap-1.5">
          Made with
          <Heart className="h-3.5 w-3.5 fill-fuchsia-500 text-fuchsia-500" />
          passion, and caffeine
        </p>
      </div>
    </footer>
  );
}
