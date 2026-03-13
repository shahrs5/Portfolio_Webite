import { ArrowRight, Star, Zap, Bot, Cpu } from "lucide-react";
import { siteConfig } from "../data/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden border-b-4 border-black bg-neo-bg pt-24 pb-16 lg:pb-0">
      {/* Background texture */}
      <div className="absolute inset-0 bg-grid opacity-50" />

      {/* Floating decorative elements */}
      <div className="absolute top-32 right-[10%] hidden h-16 w-16 rotate-12 border-4 border-black bg-neo-accent opacity-20 lg:block" />
      <div className="absolute bottom-24 left-[8%] hidden h-12 w-12 -rotate-6 border-4 border-black bg-neo-muted opacity-20 lg:block" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:min-h-[calc(100vh-6rem)] lg:flex-row lg:gap-8 lg:px-8">
        {/* Left — Text Content (60%) */}
        <div className="flex flex-col gap-8 lg:w-[58%]">
          {/* Badge */}
          <div className="inline-flex w-fit rotate-[-2deg] items-center gap-2 border-4 border-black bg-neo-secondary px-4 py-2 shadow-neo-sm">
            <Zap className="h-5 w-5" strokeWidth={3} />
            <span className="text-sm font-black uppercase tracking-widest">
              Available for work
            </span>
          </div>

          {/* Headline */}
          <h1 className="flex flex-col gap-3 leading-none">
            <span className="text-4xl font-black uppercase tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              AI Engineer
            </span>
            <span className="text-stroke text-4xl font-black uppercase tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              & Founder
            </span>
            <span className="mt-1 inline-block w-fit rotate-1 border-4 border-black bg-neo-accent px-4 py-2 text-lg font-black uppercase tracking-tight shadow-neo-sm sm:text-2xl md:text-3xl">
              building automation that actually ships
            </span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-xl text-lg font-bold leading-relaxed sm:text-xl">
            {siteConfig.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="neo-btn-primary text-base">
              See My Work
              <ArrowRight className="h-5 w-5" strokeWidth={3} />
            </a>
            <a href="#contact" className="neo-btn-outline text-base">
              Get In Touch
            </a>
          </div>

          {/* Quick proof bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {[
              { value: "6+", label: "Projects Shipped" },
              { value: "500+", label: "Users Reached" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border-4 border-black bg-white px-4 py-2 shadow-neo-sm"
              >
                <span className="text-xl font-black">{stat.value}</span>
                <span className="ml-2 text-xs font-bold uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Visual Chaos Zone (42%) */}
        <div className="relative hidden h-[520px] w-full lg:block lg:w-[42%]">
          {/* Main decorative card */}
          <div className="absolute top-4 right-0 h-72 w-64 rotate-3 border-4 border-black bg-neo-muted shadow-neo-lg">
            <div className="flex h-full flex-col items-center justify-center gap-4 p-6">
              <Bot className="h-20 w-20" strokeWidth={2.5} />
              <span className="text-center text-2xl font-black uppercase tracking-tight">
                AI Systems
              </span>
              <span className="text-center text-sm font-bold">
                That Actually Ship
              </span>
            </div>
          </div>

          {/* Overlapping card */}
          <div className="absolute top-52 left-4 h-48 w-52 -rotate-2 border-4 border-black bg-neo-secondary shadow-neo-md">
            <div className="flex h-full flex-col items-center justify-center gap-3 p-4">
              <Cpu className="h-16 w-16" strokeWidth={2.5} />
              <span className="text-center text-xl font-black uppercase tracking-tight">
                128MB LLM
              </span>
              <span className="text-center text-xs font-bold uppercase tracking-widest">
                xv6 inference
              </span>
            </div>
          </div>

          {/* Floating star */}
          <Star
            className="absolute top-0 left-12 h-16 w-16 animate-spin-slow fill-neo-accent"
            strokeWidth={3}
          />

          {/* Stat sticker */}
          <div className="absolute bottom-16 right-8 rotate-6 border-4 border-black bg-neo-accent px-4 py-2 shadow-neo-sm">
            <span className="text-2xl font-black">3.5%</span>
            <span className="ml-1 text-xs font-bold uppercase tracking-widest">
              Reply Rate
            </span>
          </div>

          {/* Small sticker */}
          <div className="absolute bottom-4 left-16 -rotate-3 border-4 border-black bg-white px-3 py-1 shadow-neo-sm">
            <span className="text-sm font-black uppercase tracking-widest">
              Since Age 15
            </span>
          </div>

          {/* Decorative block */}
          <div className="absolute bottom-32 right-0 h-16 w-16 rotate-12 border-4 border-black bg-neo-accent shadow-neo-sm" />
        </div>

        {/* Mobile visual strip */}
        <div className="flex flex-wrap items-center justify-center gap-4 lg:hidden">
          <Star
            className="h-10 w-10 animate-spin-slow fill-neo-accent"
            strokeWidth={3}
          />
          <div className="rotate-2 border-4 border-black bg-neo-muted px-4 py-2 shadow-neo-sm">
            <span className="text-sm font-black uppercase tracking-widest">
              AI Systems That Ship
            </span>
          </div>
          <div className="-rotate-1 border-4 border-black bg-neo-secondary px-3 py-1 shadow-neo-sm">
            <span className="text-sm font-black uppercase tracking-widest">
              Since Age 15
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
