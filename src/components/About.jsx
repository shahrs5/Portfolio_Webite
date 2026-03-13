import { Rocket, Star, ArrowRight } from "lucide-react";
import { aboutData } from "../data/content";

export default function About() {
  return (
    <section
      id="about"
      className="relative border-b-4 border-black bg-neo-muted/30 py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-dots opacity-[0.03]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Label */}
        <div className="mb-16 flex items-center gap-4">
          <div className="-rotate-2 border-4 border-black bg-neo-muted px-5 py-2 shadow-neo-sm">
            <span className="text-sm font-black uppercase tracking-widest">
              01
            </span>
          </div>
          <h2 className="text-4xl font-black uppercase tracking-tighter sm:text-5xl md:text-6xl">
            The Story
          </h2>
        </div>

        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
          {/* Left — The Present */}
          <div className="flex flex-col gap-8 lg:w-[55%]">
            <div className="inline-flex w-fit items-center gap-2 border-4 border-black bg-neo-accent px-4 py-2 shadow-neo-sm">
              <Rocket className="h-5 w-5" strokeWidth={3} />
              <span className="text-sm font-black uppercase tracking-widest">
                Right Now
              </span>
            </div>

            {aboutData.present.map((para, i) => (
              <p
                key={i}
                className="text-lg font-bold leading-relaxed sm:text-xl"
              >
                {para}
              </p>
            ))}

            {/* Threadline — the "so what" */}
            <div className="rotate-[-1deg] border-4 border-black bg-neo-secondary px-6 py-4 shadow-neo-md">
              <p className="text-base font-black leading-relaxed sm:text-lg">
                {aboutData.threadline}
              </p>
            </div>
          </div>

          {/* Right — The Journey */}
          <div className="flex flex-col gap-6 lg:w-[45%]">
            <div className="inline-flex w-fit items-center gap-2 border-4 border-black bg-neo-secondary px-4 py-2 shadow-neo-sm">
              <span className="text-sm font-black uppercase tracking-widest">
                The Journey
              </span>
            </div>

            {/* Timeline steps */}
            <div className="relative flex flex-col gap-0">
              {/* Vertical line */}
              <div className="absolute left-5 top-4 bottom-4 w-1 bg-black" />

              {aboutData.journey.map((step, i) => (
                <div key={i} className="relative flex gap-6 pb-8 last:pb-0">
                  {/* Node */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center border-4 border-black bg-white">
                    <ArrowRight className="h-4 w-4" strokeWidth={3} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2 pt-1">
                    <span className="inline-block w-fit rounded-full border-2 border-black bg-neo-bg px-3 py-0.5 text-xs font-black uppercase tracking-widest">
                      {step.highlight}
                    </span>
                    <p className="text-base font-bold leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Star
              className="mt-4 h-12 w-12 animate-spin-slow fill-neo-accent self-end"
              strokeWidth={3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
