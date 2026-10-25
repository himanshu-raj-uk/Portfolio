import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { Sparkles, Terminal } from "lucide-react";
import { SKILLS_DATA } from "../Data/Skills";

export function SkillsChainTicker() {
  const reduce = useReducedMotion();
  const loopList1 = [...SKILLS_DATA, ...SKILLS_DATA];
  const loopList2 = [...SKILLS_DATA.slice().reverse(), ...SKILLS_DATA.slice().reverse()];

  return (
    <div className="relative w-full overflow-hidden py-4 space-y-4 select-none">
      {/* Edge gradient mask for smooth fade in/out */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[var(--page-bg)] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[var(--page-bg)] to-transparent z-10" />

      {/* Chain 1: Gliding Left */}
      <motion.div
        className="flex w-max gap-3.5"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 32, ease: "linear", repeat: Infinity }}
      >
        {loopList1.map((skill, index) => (
          <div
            key={`ticker-1-${skill.name}-${index}`}
            className="flex items-center gap-3 rounded-2xl border px-4 py-2.5 backdrop-blur-md transition-all duration-200 hover:scale-105"
            style={{
              borderColor: skill.border,
              background: skill.bg,
              boxShadow: `0 0 15px ${skill.border}20`,
            }}
          >
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shadow-inner"
              style={{
                color: skill.color,
                background: "rgba(0,0,0,0.4)",
                border: `1px solid ${skill.border}`,
              }}
            >
              {skill.name.slice(0, 2).toUpperCase()}
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white tracking-tight">
                {skill.name}
              </span>
              <span className="text-[10px] text-cyan-200/70 font-medium">
                {skill.tag}
              </span>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Chain 2: Gliding Right (Back to Back reverse) */}
      <motion.div
        className="flex w-max gap-3.5"
        animate={reduce ? undefined : { x: ["-50%", "0%"] }}
        transition={{ duration: 36, ease: "linear", repeat: Infinity }}
      >
        {loopList2.map((skill, index) => (
          <div
            key={`ticker-2-${skill.name}-${index}`}
            className="flex items-center gap-3 rounded-2xl border px-4 py-2.5 backdrop-blur-md transition-all duration-200 hover:scale-105"
            style={{
              borderColor: skill.border,
              background: skill.bg,
              boxShadow: `0 0 15px ${skill.border}20`,
            }}
          >
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-xs shadow-inner"
              style={{
                color: skill.color,
                background: "rgba(0,0,0,0.4)",
                border: `1px solid ${skill.border}`,
              }}
            >
              {skill.name.slice(0, 2).toUpperCase()}
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white tracking-tight">
                {skill.name}
              </span>
              <span className="text-[10px] text-cyan-200/70 font-medium">
                {skill.category}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  const reduce = useReducedMotion();

  
  return (
    <div className="relative mx-auto max-w-[1240px] px-[5%] py-12 sm:py-16">
      {/* Header */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mb-8"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-cyan-300 mb-3 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
          <Sparkles size={13} />
          TECHNICAL EXPERTISE
        </div>

        <h1
          className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          Technologies & Tools<span style={{ color: "var(--accent)" }}>.</span>
        </h1>

        <p
          className="mt-3 text-sm sm:text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          My core tech stack built around modern Full Stack (MERN) web development,
          database design, REST architecture, and clean code principles.
        </p>
      </motion.div>

      {/* Moving Chain System (Back-to-Back ticker) */}
      <div className="mb-14 -mx-[5%]">
        <SkillsChainTicker />
      </div>

      {/* All Technologies Grid */}
      <div className="space-y-10">
        <div>
          <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
            <Terminal className="text-cyan-400" size={20} /> All Core Technologies
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
            {SKILLS_DATA.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className="glass-panel rounded-2xl border p-4 flex flex-col items-center text-center transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: skill.border,
                  background: skill.bg,
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm mb-2 shadow-inner"
                  style={{
                    color: skill.color,
                    background: "rgba(0,0,0,0.4)",
                    border: `1px solid ${skill.border}`,
                  }}
                >
                  {skill.name.slice(0, 2).toUpperCase()}
                </div>

                <span className="text-sm font-bold text-white tracking-tight">
                  {skill.name}
                </span>
                <span className="text-[10px] text-cyan-200/70 font-medium mt-0.5">
                  {skill.tag}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div
          className="glass-panel rounded-2xl border p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            borderColor: "var(--border)",
            background: "var(--surface)",
          }}
        >
          <div>
            <h3 className="text-base font-bold text-white">
              Ready to see these technologies in action?
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Check out my production-ready applications built with this exact stack.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/projects" className="btn-primary text-xs py-2.5 px-4">
              Explore Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
