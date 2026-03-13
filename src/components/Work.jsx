import { Crown, Briefcase, Star } from "lucide-react";
import { workData } from "../data/content";

export default function Work() {
  return (
    <section
      id="work"
      className="relative border-b-4 border-black bg-neo-bg py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex items-center gap-4">
          <div className="-rotate-2 border-4 border-black bg-neo-secondary px-5 py-2 shadow-neo-sm">
            <span className="text-sm font-black uppercase tracking-widest">
              04
            </span>
          </div>
          <h2 className="text-4xl font-black uppercase tracking-tighter sm:text-5xl md:text-6xl">
            Work
          </h2>
          <Star
            className="hidden h-10 w-10 animate-spin-slow fill-neo-accent sm:block"
            strokeWidth={3}
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 h-full w-1 bg-black md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {workData.map((item, i) => {
              const isLeft = i % 2 === 0;
              const Icon = item.type === "venture" ? Crown : Briefcase;

              return (
                <div
                  key={item.title}
                  className={`relative flex flex-col md:flex-row ${isLeft ? "" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 z-10 -translate-x-1/2 md:left-1/2">
                    <div className={`flex h-12 w-12 items-center justify-center border-4 border-black ${item.color} shadow-neo-sm`}>
                      <Icon className="h-5 w-5" strokeWidth={3} />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[44%] ${isLeft ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}
                  >
                    <div
                      className={`neo-card relative ${item.color} p-0`}
                    >
                      {/* Badge */}
                      <div className="absolute -top-3 -right-3 rotate-3 border-4 border-black bg-white px-3 py-1 shadow-neo-sm">
                        <span className="text-xs font-black uppercase tracking-widest">
                          {item.badge}
                        </span>
                      </div>

                      {/* Header */}
                      <div className="border-b-4 border-black bg-black/10 px-5 py-3">
                        <span className="text-xs font-black uppercase tracking-widest">
                          {item.period}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-3 p-5">
                        <div>
                          <h3 className="text-xl font-black uppercase tracking-tight sm:text-2xl">
                            {item.title}
                          </h3>
                          <p className="text-sm font-black uppercase tracking-widest text-black/60">
                            {item.subtitle}
                          </p>
                        </div>

                        <p className="text-sm font-bold leading-relaxed">
                          {item.description}
                        </p>

                        <div className="border-t-4 border-black pt-3">
                          <span className="text-xs font-black uppercase tracking-widest">
                            Impact
                          </span>
                          <p className="mt-1 text-sm font-bold leading-relaxed">
                            {item.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
