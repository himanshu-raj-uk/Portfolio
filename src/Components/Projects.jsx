import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  AlertCircle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  ExternalLink,
  Layers3,
  PlayCircle,
  Sparkles,
  Terminal,
  Waves,
  Wrench,
} from "lucide-react";
import GitHubIcon from "./GitHubIcon";
import { useTheme } from "../Context/ThemeContext";
import { projects } from "../Data/MyProject";

const PROJECT_ICONS = {
  waves: Waves,
  "play-circle": PlayCircle,
  sparkles: Sparkles,
  "graduation-cap": Layers3,
};

export default function Projects() {
  const { isDark } = useTheme();
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState(projects[0]?.id);
  const railRef = useRef(null);

  const activeProject =
    projects.find((project) => project.id === activeId) || projects[0];

  const ActiveIcon = PROJECT_ICONS[activeProject.icon] || Code2;

  const scrollRail = (direction) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * 110, behavior: "smooth" });
  };

  return (
    // [&_*]:min-w-0 is a safety net: it forces every descendant to allow
    // shrinking/wrapping instead of forcing its own min-content width,
    // which is what was causing text to overflow and get clipped.
    <main className="relative z-10 px-3 py-6 sm:px-5 lg:px-10 overflow-x-hidden w-full max-w-full [&_*]:min-w-0">
      <div className="mx-auto max-w-[1450px] w-full">
        {/* Page Header */}
        <motion.header
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end"
        >
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-cyan-300">
              <Sparkles size={13} />
              PRODUCTION APPLICATIONS
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Featured <span style={{ color: "var(--accent)" }}>Projects.</span>
            </h1>

            <p className="mt-2 max-w-2xl text-xs sm:text-sm text-slate-300 leading-relaxed break-words">
              Explore in-depth architecture, live demos, technical difficulties
              faced, and solutions implemented across my full-stack MERN and web
              projects.
            </p>
          </div>

          <div
            className="flex items-center gap-3 self-start rounded-2xl border px-4 py-2.5 sm:self-auto shrink-0"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
            }}
          >
            <Layers3 size={18} style={{ color: "var(--accent)" }} />
            <div>
              <p
                className="text-lg font-bold leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                {String(projects.length).padStart(2, "0")}
              </p>
              <p className="text-[11px] text-slate-400">Total Projects</p>
            </div>
          </div>
        </motion.header>

        {/* Master-Detail Layout */}
        <div className="grid items-start gap-6 lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)]">
          {/* Left: Project Directory Navigation */}
          <aside
            className="h-fit rounded-3xl border p-3 lg:sticky lg:top-24 backdrop-blur-xl"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
            }}
          >
            <div className="px-2 pb-3 pt-1">
              <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                PROJECT DIRECTORY
              </p>
            </div>

            {/* Mobile / tablet: ONE scroller — icon rail with arrows inline
                on either side. No second progress bar underneath. */}
            <div className="flex items-center gap-1.5 lg:hidden">
              {projects.length > 2 && (
                <button
                  type="button"
                  onClick={() => scrollRail(-1)}
                  aria-label="Scroll left"
                  className="shrink-0 grid h-7 w-7 place-items-center rounded-full border text-white"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--surface-solid)",
                  }}
                >
                  <ChevronLeft size={14} />
                </button>
              )}

              <div
                ref={railRef}
                className="flex-1 flex items-start gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {projects.map((project, index) => {
                  const Icon = PROJECT_ICONS[project.icon] || Code2;
                  const selected = project.id === activeProject.id;
                  const accent = project.accent || "var(--accent)";

                  return (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => setActiveId(project.id)}
                      aria-pressed={selected}
                      aria-label={project.title}
                      className="shrink-0 w-[88px] snap-start flex flex-col items-center gap-1.5 text-center"
                    >
                      <span
                        className="grid h-14 w-14 place-items-center rounded-2xl border-2 transition-all duration-200"
                        style={{
                          color: accent,
                          borderColor: selected ? accent : "var(--border)",
                          background: selected
                            ? `color-mix(in srgb, ${accent} 18%, var(--surface))`
                            : "var(--surface)",
                          boxShadow: selected
                            ? `0 0 16px color-mix(in srgb, ${accent} 45%, transparent)`
                            : "none",
                        }}
                      >
                        <Icon size={20} />
                      </span>
                      <span
                        className="text-[9px] font-bold tracking-wide"
                        style={{
                          color: selected ? accent : "var(--text-secondary)",
                        }}
                      >
                        {project.number || String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="w-full truncate text-[9px] font-medium leading-tight"
                        style={{
                          color: selected
                            ? "var(--text-primary)"
                            : "var(--text-secondary)",
                        }}
                      >
                        {project.title}
                      </span>
                    </button>
                  );
                })}
              </div>

              {projects.length > 2 && (
                <button
                  type="button"
                  onClick={() => scrollRail(1)}
                  aria-label="Scroll right"
                  className="shrink-0 grid h-7 w-7 place-items-center rounded-full border text-white"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--surface-solid)",
                  }}
                >
                  <ChevronRight size={14} />
                </button>
              )}
            </div>

            {/* Desktop: full vertical list */}
            <nav
              aria-label="Choose a project"
              className="hidden lg:flex lg:flex-col gap-2"
            >
              {projects.map((project, index) => {
                const Icon = PROJECT_ICONS[project.icon] || Code2;
                const selected = project.id === activeProject.id;

                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setActiveId(project.id)}
                    aria-pressed={selected}
                    className="group flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition-all duration-200"
                    style={{
                      borderColor: selected
                        ? project.accent || "var(--accent)"
                        : "transparent",
                      background: selected
                        ? `color-mix(in srgb, ${project.accent || "var(--accent)"} 16%, var(--surface))`
                        : "transparent",
                    }}
                  >
                    <span
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border transition-transform duration-200 group-hover:scale-105"
                      style={{
                        color: project.accent || "var(--accent)",
                        borderColor: selected
                          ? project.accent || "var(--border)"
                          : "var(--border)",
                        background: "var(--surface)",
                      }}
                    >
                      <Icon size={19} />
                    </span>

                    <span className="flex-1 min-w-0">
                      <span
                        className="block text-[9px] font-bold tracking-[0.16em] uppercase"
                        style={{ color: project.accent || "var(--accent)" }}
                      >
                        PROJECT{" "}
                        {project.number || String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="mt-0.5 block truncate text-xs font-bold text-white">
                        {project.title}
                      </span>

                      <span className="block truncate text-[10px] text-slate-400">
                        {project.category}
                      </span>
                    </span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Right: Active Project Showcase & Deep Details */}
          <AnimatePresence mode="wait">
            <motion.section
              key={activeProject.id}
              initial={reduce ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Project Hero Banner Card */}
              <div
                className="glass-panel rounded-3xl border overflow-hidden"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                }}
              >
                {/* Real Project Image — shown in FULL on every screen size
                    (object-contain, no crop), letterboxed on its own
                    background rather than cut off at the edges */}
                <div className="relative w-full aspect-video overflow-hidden bg-slate-950 border-b border-white/10">
                  <img
                    src={activeProject.image}
                    alt={`${activeProject.title} project screenshot`}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* All project info sits cleanly BELOW the image —
                    no overlap, and the buttons are normal, clickable
                    links (nothing absolutely positioned on top of them) */}
                <div
                  className="relative z-10 p-4 sm:p-6 flex flex-col gap-3 border-b"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span
                      className="inline-block text-[9px] sm:text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border"
                      style={{
                        borderColor: "var(--border)",
                        background: "var(--surface)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {activeProject.category} &bull; {activeProject.status}
                    </span>

                    <div className="flex flex-wrap items-center gap-2.5">
                      {activeProject.liveUrl && (
                        <a
                          href={activeProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-primary py-2 px-4 text-xs font-bold cursor-pointer"
                        >
                          Live Demo <ExternalLink size={13} />
                        </a>
                      )}

                      {activeProject.githubUrl && (
                        <a
                          href={activeProject.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-secondary py-2 px-4 text-xs font-medium cursor-pointer"
                        >
                          <GitHubIcon /> GitHub
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-white break-words leading-snug">
                      {activeProject.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-cyan-300 font-medium mt-1 break-words">
                      {activeProject.subtitle}
                    </p>
                  </div>
                </div>

                {/* Project Description & Technologies */}
                <div className="p-4 sm:p-7 space-y-6">
                  <div>
                    <h3 className="text-sm font-bold text-white mb-2">
                      Project Overview
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed break-words">
                      {activeProject.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white mb-2.5">
                      Built With
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-cyan-500/20 bg-cyan-950/40 px-3 py-1 text-xs font-medium text-cyan-200 break-words"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Two-Column Deep Dive: What I Did & How I Built It */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* What I Did */}
                <div
                  className="glass-panel rounded-3xl border p-4 sm:p-6 flex flex-col justify-between"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--surface)",
                  }}
                >
                  <div>
                    <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                      <CheckCircle2
                        className="text-cyan-400 shrink-0"
                        size={18}
                      />
                      What I Did in this Project
                    </h3>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                      {activeProject.whatIDid?.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                          <span className="flex-1 break-words">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* How I Built It */}
                <div
                  className="glass-panel rounded-3xl border p-4 sm:p-6 flex flex-col justify-between"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--surface)",
                  }}
                >
                  <div>
                    <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                      <Wrench className="text-emerald-400 shrink-0" size={18} />
                      How I Built It
                    </h3>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                      {activeProject.howIBuiltIt?.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                          <span className="flex-1 break-words">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Difficulties Faced & Solutions */}
              {activeProject.difficulties?.length > 0 && (
                <div className="glass-panel rounded-3xl border p-4 sm:p-7 border-amber-500/25 bg-amber-950/10">
                  <h3 className="text-base font-bold text-amber-300 mb-4 flex items-center gap-2">
                    <AlertCircle size={18} className="shrink-0" />
                    Difficulties Faced & How I Solved Them
                  </h3>

                  <div className="space-y-4">
                    {activeProject.difficulties.map((diff, index) => (
                      <div
                        key={index}
                        className="rounded-2xl border border-white/10 bg-slate-950/50 p-4 space-y-1.5"
                      >
                        <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[10px] flex items-center justify-center shrink-0">
                            {index + 1}
                          </span>
                          <span className="flex-1 break-words">
                            {diff.title}
                          </span>
                        </h4>
                        <p className="text-xs text-slate-300 leading-relaxed pl-7 break-words">
                          {diff.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.section>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
