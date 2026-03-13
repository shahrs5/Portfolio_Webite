import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  AlertCircle,
  Wrench,
  TrendingUp,
  Star,
} from "lucide-react";
import { projectsData } from "../data/content";

export default function ProjectDetail() {
  const { slug } = useParams();
  const projectIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[projectIndex];

  if (!project) return <Navigate to="/projects" replace />;

  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projectsData.length - 1
      ? projectsData[projectIndex + 1]
      : null;

  return (
    <section className="relative min-h-screen border-b-4 border-black bg-neo-bg pt-24 pb-20">
      <div className="absolute inset-0 bg-grid opacity-50" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        {/* Back link */}
        <Link
          to="/projects"
          className="mb-8 inline-flex items-center gap-2 border-4 border-black bg-white px-4 py-2 text-sm font-black uppercase tracking-wide shadow-neo-sm transition-all duration-100 hover:bg-neo-secondary active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={3} />
          All Projects
        </Link>

        {/* Project Header */}
        <div
          className={`${project.color} mb-10 border-4 border-black p-8 shadow-neo-lg sm:p-10`}
        >
          <span className="text-sm font-black uppercase tracking-widest text-black/50">
            Project {String(projectIndex + 1).padStart(2, "0")}
          </span>
          <h1 className="mt-2 text-4xl font-black uppercase tracking-tighter sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 text-xl font-bold italic leading-relaxed sm:text-2xl">
            "{project.hook}"
          </p>

          {/* Tech tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border-2 border-black bg-white px-3 py-1 text-xs font-black uppercase tracking-wide"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Stat badge */}
          {project.stat && (
            <div className="mt-6 inline-block rotate-2 border-4 border-black bg-white px-5 py-3 shadow-neo-sm">
              <span className="text-3xl font-black">{project.stat.value}</span>
              <span className="ml-2 text-sm font-bold uppercase tracking-widest">
                {project.stat.label}
              </span>
            </div>
          )}
        </div>

        {/* Problem / Solution / Impact — Stacked */}
        <div className="flex flex-col gap-8">
          {/* The Problem */}
          <div className="neo-card p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="border-4 border-black bg-neo-accent p-2">
                <AlertCircle className="h-6 w-6" strokeWidth={3} />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight">
                The Problem
              </h2>
            </div>
            <p className="text-lg font-bold leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* What I Built */}
          <div className="neo-card p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="border-4 border-black bg-neo-secondary p-2">
                <Wrench className="h-6 w-6" strokeWidth={3} />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight">
                What I Built
              </h2>
            </div>
            <p className="text-lg font-bold leading-relaxed">
              {project.solution}
            </p>

            {/* Phases (for AI Content Pipeline) */}
            {project.phases && (
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {project.phases.map((phase, j) => (
                  <div
                    key={phase.name}
                    className="border-4 border-black bg-neo-bg p-4 shadow-neo-sm"
                  >
                    <span className="text-xs font-black uppercase tracking-widest text-black/50">
                      Phase {j + 1}
                    </span>
                    <h3 className="mt-1 text-sm font-black uppercase tracking-tight">
                      {phase.name}
                    </h3>
                    <p className="mt-2 text-xs font-bold leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Why It Matters */}
          <div className="neo-card p-6 sm:p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="border-4 border-black bg-neo-muted p-2">
                <TrendingUp className="h-6 w-6" strokeWidth={3} />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tight">
                Why It Matters
              </h2>
            </div>
            <p className="text-lg font-bold leading-relaxed">
              {project.impact}
            </p>
          </div>
        </div>

        {/* Navigation between projects */}
        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:justify-between">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-3 border-4 border-black bg-white px-5 py-4 shadow-neo-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-neo-md active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              <ArrowLeft
                className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-1"
                strokeWidth={3}
              />
              <div>
                <span className="block text-xs font-black uppercase tracking-widest text-black/50">
                  Previous
                </span>
                <span className="text-sm font-black uppercase tracking-tight">
                  {prevProject.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-3 border-4 border-black bg-white px-5 py-4 shadow-neo-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-neo-md active:translate-x-[2px] active:translate-y-[2px] active:shadow-none sm:text-right"
            >
              <div>
                <span className="block text-xs font-black uppercase tracking-widest text-black/50">
                  Next
                </span>
                <span className="text-sm font-black uppercase tracking-tight">
                  {nextProject.title}
                </span>
              </div>
              <ArrowRight
                className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={3}
              />
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Floating star */}
        <div className="mt-10 flex justify-center">
          <Star
            className="h-12 w-12 animate-spin-slow fill-neo-accent"
            strokeWidth={3}
          />
        </div>
      </div>
    </section>
  );
}
