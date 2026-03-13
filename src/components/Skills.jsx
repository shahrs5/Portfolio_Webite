import { Sparkles } from "lucide-react";
import { skillsData } from "../data/content";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative border-b-4 border-black bg-neo-bg py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Label */}
        <div className="mb-16 flex items-center gap-4">
          <div className="rotate-1 border-4 border-black bg-neo-secondary px-5 py-2 shadow-neo-sm">
            <span className="text-sm font-black uppercase tracking-widest">
              02
            </span>
          </div>
          <h2 className="text-4xl font-black uppercase tracking-tighter sm:text-5xl md:text-6xl">
            What I Do
          </h2>
          <Sparkles
            className="hidden h-8 w-8 fill-neo-accent sm:block"
            strokeWidth={3}
          />
        </div>

        {/* Skill Categories */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((cat) => (
            <div
              key={cat.category}
              className="neo-card flex flex-col"
            >
              {/* Category Header */}
              <div
                className={`${cat.color} border-b-4 border-black px-5 py-3`}
              >
                <h3 className="text-sm font-black uppercase tracking-widest">
                  {cat.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 p-5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border-2 border-black bg-neo-bg px-3 py-1.5 text-xs font-black uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-neo-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
