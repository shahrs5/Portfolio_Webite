import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Star } from "lucide-react";
import { projectsData } from "../data/content";

export default function ProjectsPage() {
  return (
    <section className="relative min-h-screen border-b-4 border-black bg-neo-bg pt-24 pb-20">
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 border-4 border-black bg-white px-4 py-2 text-sm font-black uppercase tracking-wide shadow-neo-sm transition-all duration-100 hover:bg-neo-secondary active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={3} />
          Back Home
        </Link>

        {/* Page Header */}
        <div className="mb-14 flex items-center gap-4">
          <div className="rotate-1 border-4 border-black bg-neo-accent px-5 py-2 shadow-neo-sm">
            <span className="text-sm font-black uppercase tracking-widest">
              All
            </span>
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tighter sm:text-6xl md:text-7xl">
            Projects
          </h1>
          <Star
            className="hidden h-10 w-10 animate-spin-slow fill-neo-secondary sm:block"
            strokeWidth={3}
          />
        </div>

        <p className="mb-12 max-w-2xl text-lg font-bold leading-relaxed">
          Each project tells a story:{" "}
          <span className="border-b-4 border-neo-accent">
            What's the problem?
          </span>{" "}
          What did I build?{" "}
          <span className="border-b-4 border-neo-secondary">
            Why does it matter?
          </span>
        </p>

        {/* Full Project Cards */}
        <div className="flex flex-col gap-8">
          {projectsData.map((project, i) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group neo-card flex flex-col overflow-visible sm:flex-row"
            >
              {/* Left color strip */}
              <div
                className={`${project.color} flex shrink-0 items-center justify-center border-b-4 border-black px-8 py-6 sm:w-48 sm:border-b-0 sm:border-r-4`}
              >
                <span className="text-5xl font-black sm:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-3 p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h2 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
                    {project.title}
                  </h2>
                  {project.stat && (
                    <div className="rotate-2 border-4 border-black bg-neo-secondary px-3 py-1 shadow-neo-sm">
                      <span className="text-lg font-black">
                        {project.stat.value}
                      </span>
                      <span className="ml-1 text-xs font-bold uppercase tracking-widest">
                        {project.stat.label}
                      </span>
                    </div>
                  )}
                </div>

                <p className="text-lg font-bold italic leading-relaxed">
                  {project.hook}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border-2 border-black bg-neo-bg px-2.5 py-0.5 text-xs font-black uppercase tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* View link */}
                <div className="mt-2 flex items-center gap-2 text-sm font-black uppercase tracking-wide text-black/50 transition-all duration-200 group-hover:text-black">
                  Read Case Study
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
