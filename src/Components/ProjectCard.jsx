import { motion } from "motion/react";
import {
  CirclePlay,
  ExternalLink,
  Folder,
  GraduationCap,
  Sparkles,
  Waves,
} from "lucide-react";
import GitHubIcon from "./GitHubIcon";

const ICONS = {
  waves: Waves,
  "play-circle": CirclePlay,
  sparkles: Sparkles,
  "graduation-cap": GraduationCap,
};

const ease = [0.22, 1, 0.36, 1];

function CardLink({ href, icon: Icon, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium"
      style={{ color: "var(--accent)" }}
    >
      <Icon size={15} />
      {children}
    </a>
  );
}

export default function ProjectCard({ project, compact = false }) {
  const Icon = ICONS[project.icon] || Folder;

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, ease }}
      whileHover={{ y: -4 }}
      className="glass-panel relative flex flex-col overflow-hidden p-6"
    >
      {/* project accent color */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: project.accent }}
      />

      <div className="flex items-start justify-between gap-4">
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
          style={{
            background: `color-mix(in srgb, ${project.accent} 18%, transparent)`,
            border: `1px solid color-mix(in srgb, ${project.accent} 45%, transparent)`,
            color: "var(--text-primary)",
          }}
        >
          <Icon size={20} />
        </span>

        <div className="flex flex-wrap items-center justify-end gap-2">
          {project.featured && (
            <span
              className="rounded-full px-3 py-0.5 text-xs font-medium"
              style={{
                background: "var(--surface-hover)",
                color: "var(--text-primary)",
              }}
            >
              Featured
            </span>
          )}
          <span
            className="rounded-full px-3 py-0.5 text-xs font-medium"
            style={{
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
            }}
          >
            {project.status}
          </span>
        </div>
      </div>

      <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>
        Project {project.number} · {project.category}
      </p>

      <h2
        className="mt-1 text-xl font-semibold"
        style={{ color: "var(--text-primary)" }}
      >
        {project.title}
      </h2>
      <p
        className="mt-1 text-sm font-medium"
        style={{ color: "var(--text-secondary)" }}
      >
        {project.subtitle}
      </p>

      <p
        className="mt-3 text-sm leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {project.description}
      </p>

      {!compact && (
        <ul
          className="mt-4 grid gap-1.5 text-sm"
          style={{ color: "var(--text-secondary)" }}
        >
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span
                aria-hidden="true"
                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: project.accent }}
              />
              {h}
            </li>
          ))}
        </ul>
      )}

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Built with">
        {project.technologies.map((t) => (
          <li
            key={t}
            className="rounded-full px-3 py-1 text-xs font-medium"
            style={{
              background: "var(--surface-hover)",
              color: "var(--text-primary)",
            }}
          >
            {t}
          </li>
        ))}
      </ul>

      {(project.liveUrl || project.githubUrl) && (
        <div className="mt-auto flex flex-wrap gap-5 pt-5">
          {project.liveUrl && (
            <CardLink href={project.liveUrl} icon={ExternalLink}>
              Live demo
            </CardLink>
          )}
          {project.githubUrl && (
            <CardLink href={project.githubUrl} icon={GitHubIcon}>
              GitHub
            </CardLink>
          )}
        </div>
      )}
    </motion.li>
  );
}
