import { Heart, ArrowUp, Star } from "lucide-react";
import { siteConfig, navLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-neo-secondary">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo & Tagline */}
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="inline-block w-fit border-4 border-black bg-neo-accent px-4 py-2 font-black text-lg uppercase tracking-tight shadow-neo-sm"
            >
              {siteConfig.name}
            </a>
            <p className="max-w-xs text-sm font-bold leading-relaxed">
              {siteConfig.role} — building automation that actually ships.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-black uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-bold uppercase tracking-wide transition-all duration-100 hover:underline hover:decoration-4 hover:underline-offset-4"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to Top */}
          <div className="flex flex-col items-start gap-4 md:items-end">
            <a
              href="#"
              className="border-4 border-black bg-white p-3 shadow-neo-sm transition-all duration-100 hover:-translate-y-1 hover:shadow-neo-md active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              aria-label="Back to top"
            >
              <ArrowUp className="h-6 w-6" strokeWidth={3} />
            </a>
            <Star
              className="h-8 w-8 animate-spin-slow fill-neo-accent"
              strokeWidth={3}
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center gap-2 border-t-4 border-black pt-6 sm:flex-row sm:justify-between">
          <p className="text-sm font-bold uppercase tracking-wide">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="flex items-center gap-1 text-sm font-bold">
            Built with{" "}
            <Heart className="h-4 w-4 fill-neo-accent" strokeWidth={3} /> and
            way too much coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}
