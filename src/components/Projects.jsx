import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { projectsData } from "../data/content";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative border-b-4 border-black bg-neo-secondary/30 py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-dots opacity-[0.03]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="-rotate-1 border-4 border-black bg-neo-accent px-5 py-2 shadow-neo-sm">
              <span className="text-sm font-black uppercase tracking-widest">
                03
              </span>
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter sm:text-5xl md:text-6xl">
              Projects
            </h2>
            <Star
              className="hidden h-10 w-10 animate-spin-slow fill-neo-secondary sm:block"
              strokeWidth={3}
            />
          </div>
          <Link
            to="/projects"
            className="neo-btn-outline w-fit"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" strokeWidth={3} />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, i) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group neo-card flex flex-col"
            >
              {/* Colored Header */}
              <div
                className={`${project.color} border-b-4 border-black px-5 py-4`}
              >
                <span className="text-xs font-black uppercase tracking-widest text-black/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 text-xl font-black uppercase tracking-tight sm:text-2xl">
                  {project.title}
                </h3>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col gap-3 p-5">
                <p className="flex-1 text-base font-bold leading-relaxed">
                  {project.hook}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border-2 border-black bg-neo-bg px-2.5 py-0.5 text-xs font-black uppercase tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="rounded-full border-2 border-black bg-neo-bg px-2.5 py-0.5 text-xs font-black uppercase tracking-wide">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Read more indicator */}
                <div className="mt-2 flex items-center gap-2 text-sm font-black uppercase tracking-wide text-black/50 transition-all duration-200 group-hover:text-black">
                  View Project
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    strokeWidth={3}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
