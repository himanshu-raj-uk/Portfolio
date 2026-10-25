import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import {
  Check,
  CheckCircle2,
  Copy,
  ExternalLink,
  Laptop,
  Mail,
  Moon,
  Phone,
  Rocket,
  Smartphone,
  Sparkles,
  Sun,
  Tablet,
  Waves,
} from "lucide-react";
import GitHubIcon from "./GitHubIcon";
import { SkillsChainTicker } from "./Skills";
import { useTheme } from "../Context/ThemeContext";
import { FULL_NAME, ROLE_TITLE, CONTACT } from "../Data/Site";
import { projects, projectStats } from "../Data/MyProject";

function ScubaDiverSvg() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center select-none"
      animate={
        reduce
          ? undefined
          : {
              y: [-10, 10, -10],
              rotate: [-2, 2, -2],
            }
      }
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg
        viewBox="0 0 400 240"
        className="w-[85%] max-w-[360px] h-auto drop-shadow-[0_0_25px_rgba(34,211,238,0.45)]"
        fill="none"
      >
        <defs>
          <linearGradient id="diverSuit" x1="50" y1="50" x2="320" y2="180">
            <stop offset="0%" stopColor="#08203e" />
            <stop offset="45%" stopColor="#0a3c68" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="diverMask" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a5f3fc" />
            <stop offset="60%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="tankGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>

        {/* Air Bubbles from Regulator */}
        {[
          { cx: 285, cy: 92, r: 4, d: 0 },
          { cx: 300, cy: 75, r: 6, d: 0.6 },
          { cx: 318, cy: 54, r: 5, d: 1.2 },
          { cx: 335, cy: 30, r: 7.5, d: 1.8 },
        ].map((bubble, i) => (
          <motion.circle
            key={i}
            cx={bubble.cx}
            cy={bubble.cy}
            r={bubble.r}
            fill="rgba(165,243,252,0.85)"
            stroke="#22d3ee"
            strokeWidth="1"
            animate={
              reduce
                ? undefined
                : {
                    cy: [bubble.cy, bubble.cy - 60],
                    cx: [bubble.cx, bubble.cx + (i % 2 === 0 ? 12 : -12)],
                    opacity: [0, 0.9, 0],
                    scale: [0.7, 1.2, 0.8],
                  }
            }
            transition={{
              duration: 3 + i * 0.4,
              delay: bubble.d,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Fins / Flippers */}
        <motion.g
          animate={reduce ? undefined : { rotate: [-10, 10, -10] }}
          style={{ transformOrigin: "90px 145px" }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M85 142 L35 155 C20 160 15 178 30 185 L95 155 Z"
            fill="#06b6d4"
            opacity="0.85"
          />
          <path
            d="M95 138 L45 146 C30 150 25 168 40 176 L105 148 Z"
            fill="#22d3ee"
          />
        </motion.g>

        {/* Legs */}
        <path
          d="M170 125 C145 130 115 138 95 142 L105 152 C125 146 155 138 180 133 Z"
          fill="url(#diverSuit)"
          stroke="#0e7490"
          strokeWidth="1.5"
        />

        {/* Scuba Tank */}
        <rect
          x="185"
          y="72"
          width="74"
          height="22"
          rx="10"
          fill="url(#tankGrad)"
          stroke="#fef08a"
          strokeWidth="1.5"
          transform="rotate(-15 185 72)"
        />
        <circle cx="258" cy="54" r="4" fill="#94a3b8" />
        <path
          d="M258 54 C268 58 274 72 268 84"
          stroke="#000"
          strokeWidth="3.5"
          fill="none"
        />

        {/* Torso & Wetsuit */}
        <path
          d="M165 110 C180 95 210 90 240 92 C255 94 260 105 250 118 C235 132 200 135 170 126 Z"
          fill="url(#diverSuit)"
          stroke="#0891b2"
          strokeWidth="1.5"
        />

        <path
          d="M190 102 C210 98 230 100 245 106"
          stroke="#22d3ee"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        <path
          d="M230 102 C255 106 280 114 305 118 L308 111 C285 105 260 98 235 94 Z"
          fill="url(#diverSuit)"
        />
        <ellipse cx="308" cy="115" rx="7" ry="5" fill="#0891b2" />

        <ellipse
          cx="264"
          cy="86"
          rx="18"
          ry="16"
          fill="#0a3c68"
          stroke="#0891b2"
          strokeWidth="1.5"
        />
        <ellipse
          cx="274"
          cy="86"
          rx="10"
          ry="9"
          fill="url(#diverMask)"
          stroke="#67e8f9"
          strokeWidth="2"
        />
        <path
          d="M272 80 Q276 83 277 88"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
      </svg>
    </motion.div>
  );
}

function SpaceHeroVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 130,
          height: 130,
          background: "#02030b",
          boxShadow:
            "0 0 35px 15px rgba(0,0,0,0.95), 0 0 80px 25px rgba(139,92,246,0.35)",
        }}
        animate={reduce ? undefined : { scale: [1, 1.04, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute rounded-full"
        style={{
          width: 260,
          height: 105,
          border: "7px solid transparent",
          borderTopColor: "#a78bfa",
          borderBottomColor: "#22d3ee",
          filter: "drop-shadow(0 0 16px rgba(167,139,250,0.9))",
          rotate: -22,
        }}
        animate={reduce ? undefined : { rotate: [-22, 338] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute rounded-full"
        style={{
          width: 210,
          height: 80,
          border: "4px solid transparent",
          borderLeftColor: "#38bdf8",
          borderRightColor: "#c084fc",
          filter: "drop-shadow(0 0 14px rgba(56,189,248,0.8))",
          rotate: 18,
        }}
        animate={reduce ? undefined : { rotate: [18, -342] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="absolute"
        style={{ left: "10%", bottom: "16%", width: 70 }}
        animate={
          reduce
            ? undefined
            : {
                y: [0, -18, 0],
                x: [0, 8, 0],
                rotate: [-8, 8, -8],
              }
        }
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 70 100" width="100%">
          <rect x="7" y="35" width="15" height="30" rx="6" fill="#8b9eff" />
          <rect x="18" y="31" width="32" height="39" rx="12" fill="#e8ecff" />
          <rect
            x="45"
            y="37"
            width="16"
            height="27"
            rx="7"
            fill="#cfd6ff"
            transform="rotate(-18 53 50)"
          />
          <rect x="21" y="66" width="11" height="25" rx="5" fill="#cfd6ff" />
          <rect x="36" y="66" width="11" height="25" rx="5" fill="#cfd6ff" />
          <circle cx="34" cy="19" r="18" fill="#f4f6ff" />
          <ellipse cx="35" cy="20" rx="12" ry="10" fill="#1c1470" />
          <ellipse
            cx="31"
            cy="16"
            rx="4"
            ry="2.5"
            fill="#8b9eff"
            opacity="0.8"
          />
        </svg>
      </motion.div>
    </div>
  );
}

function HeroDisplayCard() {
  const { isDark } = useTheme();
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[400px] sm:max-w-[500px] aspect-[1.1/1] max-h-[320px] sm:max-h-none">
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="glass-panel relative w-full h-full rounded-3xl overflow-hidden border p-5 flex flex-col justify-between"
        style={{
          borderColor: isDark
            ? "rgba(139,158,255,0.3)"
            : "rgba(56,189,248,0.35)",
          background: isDark
            ? "radial-gradient(ellipse at 50% 30%, rgba(36,16,68,0.6) 0%, rgba(8,12,34,0.85) 60%, rgba(2,4,13,0.95) 100%)"
            : "radial-gradient(ellipse at 50% 0%, rgba(10,90,140,0.5) 0%, rgba(6,54,95,0.7) 40%, rgba(2,11,29,0.92) 100%)",
        }}
      >
        <div
          className="absolute inset-x-0 top-0 h-36 pointer-events-none opacity-40 blur-2xl"
          style={{
            background: isDark
              ? "radial-gradient(circle, rgba(167,139,250,0.4), transparent)"
              : "radial-gradient(circle, rgba(34,211,238,0.6), transparent)",
          }}
        />

        <div className="relative z-10 w-full flex-1 flex items-center justify-center">
          {isDark ? <SpaceHeroVisual /> : <ScubaDiverSvg />}
        </div>

        {/* Stats Glass Overlay Card */}
        <div
          className="relative z-20 w-full rounded-2xl p-4 border backdrop-blur-xl"
          style={{
            background: isDark
              ? "rgba(10, 15, 36, 0.78)"
              : "rgba(3, 20, 48, 0.75)",
            borderColor: isDark
              ? "rgba(139, 158, 255, 0.25)"
              : "rgba(56, 189, 248, 0.3)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.45)",
          }}
        >
          <div className="grid grid-cols-3 gap-2 text-center sm:text-left divide-x divide-cyan-500/15">
            <div className="px-1">
              <div
                className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                style={{ color: "var(--accent)" }}
              >
                {projectStats.totalProjects}+
              </div>
              <p
                className="text-[11px] font-medium leading-tight mt-1"
                style={{ color: "var(--text-secondary)" }}
              >
                Projects Completed
              </p>
            </div>

            <div className="pl-3 sm:pl-4">
              <div
                className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                style={{ color: "var(--accent-tertiary)" }}
              >
                2024
              </div>
              <p
                className="text-[11px] font-medium leading-tight mt-1"
                style={{ color: "var(--text-secondary)" }}
              >
                BCA IGNOU (Pursuing)
              </p>
            </div>

            <div className="pl-3 sm:pl-4">
              <div
                className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                style={{ color: isDark ? "#c084fc" : "#38bdf8" }}
              >
                100%
              </div>
              <p
                className="text-[11px] font-medium leading-tight mt-1"
                style={{ color: "var(--text-secondary)" }}
              >
                Passion for Building
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Home() {
  const { isDark, toggleTheme } = useTheme();
  const reduce = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState("All");
  const [copiedKey, setCopiedKey] = useState(null);

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    return p.filterType ? p.filterType.includes(activeFilter) : true;
  });

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="relative w-full">
      <section
        id="home"
        className="relative mx-auto max-w-[1360px] px-4 sm:px-[5%] py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-6 lg:gap-12"
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 self-start rounded-full border px-4 py-1.5 text-xs font-semibold backdrop-blur-md mb-5 border-cyan-500/30 bg-cyan-950/40 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            {isDark ? <Rocket size={14} /> : <Waves size={14} />}
            {ROLE_TITLE}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
            Hi, I'm <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: isDark
                  ? "linear-gradient(110deg, #f4f6ff 20%, #8b9eff 60%, #ba7cff 100%)"
                  : "linear-gradient(110deg, #ffffff 15%, #2ccbff 60%, #5eead4 100%)",
              }}
            >
            {FULL_NAME}
            </span>
            <span style={{ color: "var(--accent)" }}></span>
          </h1>

          <p
            className="text-base sm:text-xl font-semibold mt-3 tracking-tight"
            style={{ color: "var(--accent)" }}
          >
            I build digital experiences that make an impact.
          </p>

          <p
            className="mt-3 max-w-[56ch] text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Full Stack Developer building end-to-end web applications with MERN
            stack, creating responsive interfaces and clean REST APIs through
            self-directed learning.
          </p>

          {/* Action Buttons (No arrows, no extra resume download button) */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link to="/projects" className="btn-primary">
              View My Projects
            </Link>

            <Link to="/about" className="btn-secondary">
              About Me
            </Link>
          </div>

          {/* Social Icons Row with Direct Phone & Email */}
          <div className="mt-7 flex items-center gap-3">
            <a
              href={CONTACT.phoneHref}
              className="w-10 h-10 rounded-full border border-cyan-500/25 bg-slate-900/60 flex items-center justify-center text-cyan-200 transition-transform hover:scale-110 hover:border-cyan-400"
              title={`Call ${CONTACT.phoneDisplay}`}
            >
              <Phone size={16} />
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="w-10 h-10 rounded-full border border-cyan-500/25 bg-slate-900/60 flex items-center justify-center text-cyan-200 transition-transform hover:scale-110 hover:border-cyan-400"
              title={`Email ${CONTACT.email}`}
            >
              <Mail size={16} />
            </a>

            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-cyan-500/25 bg-slate-900/60 flex items-center justify-center text-cyan-200 transition-transform hover:scale-110 hover:border-cyan-400"
              title="GitHub Profile"
            >
              <GitHubIcon />
            </a>

            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-cyan-500/25 bg-slate-900/60 flex items-center justify-center text-cyan-200 transition-transform hover:scale-110 hover:border-cyan-400 font-bold text-sm"
              title="LinkedIn Profile"
            >
              in
            </a>
          </div>
        </motion.div>

        {/* Hero Right Visual Card */}
        <HeroDisplayCard />
      </section>

      <section
        id="featured-projects"
        className="relative mx-auto max-w-[1360px] px-4 sm:px-[5%] py-8 sm:py-12 scroll-mt-20"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span
              className="text-xs font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--accent)" }}
            >
              My Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 text-white">
              Featured Projects
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 max-w-xl">
              Production-ready applications built with modern full-stack
              architectures, REST APIs, and live deployments.
            </p>
          </div>

          <Link
            to="/projects"
            className="btn-secondary self-start sm:self-auto text-xs py-2 px-4"
          >
            View All Projects
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["All", "Web Apps", "Full Stack", "MERN"].map((tab) => {
            const active = activeFilter === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-300 border ${
                  active
                    ? "bg-cyan-500/20 text-white border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.35)]"
                    : "border-cyan-900/40 text-cyan-200/70 hover:border-cyan-500/40 hover:text-white bg-slate-900/50"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Projects 4-Card Grid with Direct Image Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="glass-panel group relative flex flex-col justify-between rounded-2xl border p-4 transition-transform duration-200 hover:-translate-y-1"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
              }}
            >
              <div>
                {/* Real Screenshot Preview */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-slate-950">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                  <span className="absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-900/80 border border-white/20 text-white">
                    {project.status}
                  </span>
                </div>

                <div className="mt-3.5">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-[10px] font-bold tracking-widest uppercase"
                      style={{ color: project.accent || "var(--accent)" }}
                    >
                      PROJECT {project.number}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mt-1 text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-cyan-500/20 bg-cyan-950/40 px-2 py-0.5 text-[9px] font-medium text-cyan-200"
                      >
                        {t}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[9px] text-slate-400 px-1 py-0.5">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action buttons (No arrows) */}
              <div className="mt-4 flex items-center gap-2 pt-3 border-t border-white/10">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs py-1.5 px-3 transition-colors shadow-[0_0_12px_rgba(34,211,238,0.35)]"
                  >
                    Live Demo <ExternalLink size={12} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full border border-cyan-500/30 hover:border-cyan-400 bg-slate-900/60 text-white font-medium text-xs py-1.5 px-3 transition-colors"
                  >
                    <GitHubIcon /> GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="skills-section"
        className="relative mx-auto max-w-[1360px] px-4 sm:px-[5%] py-8 sm:py-12 scroll-mt-20"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span
              className="text-xs font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--accent)" }}
            >
              My Skills
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 text-white">
              Technologies I Work With
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              Continuous live stack: React.js, Node.js, Express.js, MongoDB,
              Mongoose, TypeScript, Tailwind CSS, REST APIs & JWT.
            </p>
          </div>

          <Link
            to="/skills"
            className="btn-secondary text-xs py-2 px-4 self-start sm:self-auto"
          >
            View All Skills
          </Link>
        </div>

        {/* Moving Chain System ONLY (Static bottom grid completely removed) */}
        <div
          className="rounded-3xl border p-2 sm:p-4 backdrop-blur-md"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}
        >
          <SkillsChainTicker />
        </div>
      </section>

      <section
        id="about-section"
        className="relative mx-auto max-w-[1360px] px-4 sm:px-[5%] py-8 sm:py-12 scroll-mt-20"
      >
        <div
          className="glass-panel rounded-3xl border p-6 sm:p-8"
          style={{
            borderColor: "var(--border)",
            background: "var(--surface)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
            <div>
              <span
                className="text-xs font-bold uppercase tracking-[0.22em]"
                style={{ color: "var(--accent)" }}
              >
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 text-white">
                My Journey & Ambition
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                I'm <strong className="text-white">{FULL_NAME}</strong>, a Full
                Stack (MERN) Developer pursuing BCA from IGNOU (2024 &ndash;
                Expected completion next year). I turn real-world problems into
                clean, scalable applications with rock-solid backend
                architectures.
              </p>

              <div className="mt-5 space-y-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                  <span>
                    Mastering full-stack system design, RESTful APIs, and
                    scalable databases.
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                  <span>
                    Focused on data security: bcrypt.js password hashing, JWT
                    role-based auth.
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0" />
                  <span>
                    Goal: Securing a full-time software engineering role in an
                    impactful team.
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/about" className="btn-primary text-xs py-2 px-4">
                  Full Background & Timeline
                </Link>
                <Link to="/contact" className="btn-secondary text-xs py-2 px-4">
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Changed Milestones Cards (No circles) */}
            <div className="space-y-3">
              <div className="rounded-2xl border border-cyan-500/25 bg-slate-900/60 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-400">
                    CURRENT EDUCATION
                  </span>
                  <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/20">
                    2024 &ndash; Next Year
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mt-1">
                  BCA (Pursuing) &bull; IGNOU, Delhi
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Core computer science, data structures, database management,
                  and software engineering.
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-500/25 bg-slate-900/60 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-400">
                    PRACTICAL EXPERIENCE
                  </span>
                  <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/20">
                    2024 &ndash; Present
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mt-1">
                  Full Stack (MERN) Developer
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Architected & deployed Service Planner, Netflix Clone,
                  PotterDB, and Skills Yard.
                </p>
              </div>

              <div className="rounded-2xl border border-purple-500/25 bg-slate-900/60 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-400">
                    TARGET MILESTONE
                  </span>
                  <span className="text-[10px] font-mono text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-500/20">
                    Upcoming 2025/2026
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mt-1">
                  Full-Time Software Engineer / MERN Developer
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  Ready to contribute to scalable web platforms,
                  high-performance APIs, and innovative teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact-section"
        className="relative mx-auto max-w-[1360px] px-4 sm:px-[5%] py-8 sm:py-12 scroll-mt-20"
      >
        <div className="flex flex-col items-start gap-1 mb-6">
          <span
            className="text-xs font-bold uppercase tracking-[0.22em]"
            style={{ color: "var(--accent)" }}
          >
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Direct Contact Details
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Reach out directly via phone, email, or social profiles for
            opportunities, projects, or collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Phone Card */}
          <div className="glass-panel rounded-2xl border border-cyan-500/25 bg-slate-900/60 p-4 sm:p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                <Phone size={18} />
              </div>
              <button
                type="button"
                onClick={() => handleCopy(CONTACT.phone, "phone")}
                className="p-1.5 rounded-lg border border-cyan-500/20 text-cyan-300 hover:border-cyan-400"
                title="Copy Phone Number"
              >
                {copiedKey === "phone" ? (
                  <Check size={14} />
                ) : (
                  <Copy size={14} />
                )}
              </button>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400">
                Phone & WhatsApp
              </p>
              <a
                href={CONTACT.phoneHref}
                className="text-sm font-bold text-white hover:text-cyan-300 transition-colors block mt-0.5"
              >
                {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="glass-panel rounded-2xl border border-cyan-500/25 bg-slate-900/60 p-4 sm:p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                <Mail size={18} />
              </div>
              <button
                type="button"
                onClick={() => handleCopy(CONTACT.email, "email")}
                className="p-1.5 rounded-lg border border-cyan-500/20 text-cyan-300 hover:border-cyan-400"
                title="Copy Email"
              >
                {copiedKey === "email" ? (
                  <Check size={14} />
                ) : (
                  <Copy size={14} />
                )}
              </button>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400">
                Email Address
              </p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-sm font-bold text-white hover:text-cyan-300 transition-colors block mt-0.5 truncate"
              >
                {CONTACT.email}
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="glass-panel rounded-2xl border border-cyan-500/25 bg-slate-900/60 p-4 sm:p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                <GitHubIcon />
              </div>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg border border-cyan-500/20 text-cyan-300 hover:border-cyan-400"
                title="Visit GitHub"
              >
                <ExternalLink size={14} />
              </a>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400">GitHub</p>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-bold text-white hover:text-cyan-300 transition-colors block mt-0.5"
              >
                github.com/{CONTACT.githubHandle}
              </a>
            </div>
          </div>

          {/* Location & Status Card (No extra resume download button) */}
          <div className="glass-panel rounded-2xl border border-cyan-500/25 bg-slate-900/60 p-4 sm:p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                <Sparkles size={18} />
              </div>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                Available
              </span>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-400">
                Location & Roles
              </p>
              <p className="text-sm font-bold text-white mt-0.5">
                Delhi, India &bull; Remote / On-Site
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-[1360px] px-4 sm:px-[5%] pb-6 sm:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-panel rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-4 flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-cyan-400">
              <Smartphone size={16} />
              <Tablet size={16} />
              <Laptop size={16} />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">Fully Responsive</h4>
              <p className="text-[11px] text-slate-400">
                Mobile, tablet & desktop ready.
              </p>
            </div>
          </div>

          <div className="glass-panel rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-4 flex items-center gap-3">
            <Sparkles className="text-cyan-400" size={18} />
            <div>
              <h4 className="text-xs font-bold text-white">Hover Effects</h4>
              <p className="text-[11px] text-slate-400">
                Smooth interactive states.
              </p>
            </div>
          </div>

          <div className="glass-panel rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-4 flex items-center gap-3">
            <Waves className="text-cyan-400" size={18} />
            <div>
              <h4 className="text-xs font-bold text-white">
                Living Atmospheres
              </h4>
              <p className="text-[11px] text-slate-400">
                Dynamic ocean & space scenes.
              </p>
            </div>
          </div>

          <div
            onClick={toggleTheme}
            className="glass-panel rounded-2xl border border-cyan-500/30 bg-slate-900/60 p-4 flex items-center justify-between cursor-pointer hover:border-cyan-400 transition-colors"
          >
            <div className="flex items-center gap-2">
              {isDark ? (
                <Moon className="text-purple-400" size={18} />
              ) : (
                <Sun className="text-cyan-400" size={18} />
              )}
              <div>
                <h4 className="text-xs font-bold text-white">Theme Switch</h4>
                <p className="text-[11px] text-slate-400">
                  {isDark ? "Space Theme" : "Ocean Theme"}
                </p>
              </div>
            </div>
            <span className="text-[10px] uppercase font-bold text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/20">
              Toggle
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
