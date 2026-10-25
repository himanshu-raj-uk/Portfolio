import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import {
  BookOpen,
  Code2,
  GraduationCap,
  Heart,
  Layers,
  Lock,
  Mail,
  Server,
  Sparkles,
  Terminal,
} from "lucide-react";
import { FULL_NAME, ROLE_TITLE, CONTACT } from "../Data/Site";

export default function About() {
  const reduce = useReducedMotion();

  const technicalStrengths = [
    {
      category: "Frontend Development",
      icon: Code2,
      color: "#38bdf8",
      items: [
        "React.js (Hooks, Context API)",
        "JavaScript (ES6+) & TypeScript",
        "Tailwind CSS & Mobile-First UI",
        "HTML5 & CSS3 Semantic Layouts",
        "Responsive Grid & Flexbox",
      ],
    },
    {
      category: "Backend & Database",
      icon: Server,
      color: "#22d3ee",
      items: [
        "Node.js & Express.js REST APIs",
        "Clean MVC Architecture",
        "MongoDB & Mongoose Schemas",
        "Data Validation & Aggregation",
        "Multer & Cloudinary Media Uploads",
      ],
    },
    {
      category: "Auth & Security",
      icon: Lock,
      color: "#c084fc",
      items: [
        "JWT Token Authentication",
        "Role-Based Access Control",
        "bcrypt.js Password Hashing",
        "Reusable Auth Middleware",
        "Secure Session Management",
      ],
    },
    {
      category: "Tools & Deployment",
      icon: Terminal,
      color: "#34d399",
      items: [
        "Git & GitHub Version Control",
        "Postman API Testing",
        "Vite Build Optimization",
        "GitHub Pages Deployment",
        "VS Code & AI-Assisted Workflow",
      ],
    },
  ];

  const educationMilestones = [
    {
      degree: "BCA (Bachelor of Computer Applications) — Pursuing",
      institution: "IGNOU, Delhi",
      timeline: "2024 – Present (Completing Next Year)",
      status: "In Progress",
      description:
        "Focusing on computer science fundamentals, data structures, database management systems, and modern software engineering practices.",
      badgeColor: "#22d3ee",
    },
    {
      degree: "Class XII (Senior Secondary)",
      institution: "CBSE Board",
      timeline: "Completed",
      status: "Completed",
      description: "Completed secondary education under CBSE board curriculum.",
      badgeColor: "#38bdf8",
    },
    {
      degree: "Class X (Secondary School)",
      institution: "CBSE Board",
      timeline: "Completed",
      status: "Completed",
      description: "Completed foundational education with distinction in science and mathematics.",
      badgeColor: "#818cf8",
    },
  ];

  return (
    <div className="relative mx-auto max-w-[1240px] px-[5%] py-12 sm:py-16">
      {/* Page Header */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-12"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-cyan-300 mb-3 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
          <Sparkles size={13} />
          ABOUT ME
        </div>

        <h1
          className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          Developer &bull; Builder &bull; Problem Solver
          <span style={{ color: "var(--accent)" }}>.</span>
        </h1>

        <p
          className="mt-4 text-base sm:text-lg leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          I'm <strong className="text-white">{FULL_NAME}</strong>, a{" "}
          <span style={{ color: "var(--accent)" }}>{ROLE_TITLE}</span> pursuing
          my BCA from IGNOU. I build end-to-end web applications with clean MVC
          architecture, responsive interfaces, and secure backend APIs through self-directed learning and hands-on practice.
        </p>

        {/* Action CTAs */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/projects" className="btn-secondary">
            View My Projects
          </Link>
          <Link to="/contact" className="btn-secondary">
            <Mail size={15} /> Contact Me
          </Link>
        </div>
      </motion.div>

      {/* Professional Summary Card */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="glass-panel rounded-3xl border p-6 sm:p-8 mb-12"
        style={{
          borderColor: "var(--border)",
          background: "var(--surface)",
        }}
      >
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
          <BookOpen className="text-cyan-400" size={20} /> Professional Summary
        </h2>
        <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-300">
          <p>
            &bull; Full Stack Developer building comprehensive web applications with MERN stack,
            creating clean, scalable solutions with modern frontend and backend technologies.
          </p>
          <p>
            &bull; Strong expertise in React.js, Node.js, Express.js, MongoDB, and
            Tailwind CSS with focus on mobile-first design and secure authentication.
          </p>
          <p>
            &bull; Emphasis on data security using bcrypt.js, JWT authorization,
            and Mongoose validation. Developed production applications including Service Planner,
            Netflix Clone, PotterDB, and Skills Yard.
          </p>
        </div>
      </motion.div>

      {/* Technical Strengths Grid */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Layers className="text-cyan-400" size={22} /> Technical Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {technicalStrengths.map((group, idx) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.category}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + idx * 0.05 }}
                className="glass-panel rounded-2xl border p-5 flex flex-col justify-between min-w-0"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                }}
              >
                <div>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3.5 border"
                    style={{
                      color: group.color,
                      borderColor: `${group.color}40`,
                      background: `${group.color}15`,
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  <h3 className="text-base font-bold text-white mb-3">
                    {group.category}
                  </h3>

                  <ul className="space-y-2 text-xs text-slate-300">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">&rsaquo;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Education & Experience Timeline */}
      <div className="mb-14">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <GraduationCap className="text-cyan-400" size={24} /> Education & Timeline
        </h2>

        <div className="space-y-4">
          {educationMilestones.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={reduce ? false : { opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.08 }}
              className="glass-panel rounded-2xl border p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
              }}
            >
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {item.degree}
                  </h3>
                  <span
                    className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border"
                    style={{
                      color: item.badgeColor,
                      borderColor: `${item.badgeColor}40`,
                      background: `${item.badgeColor}15`,
                    }}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-cyan-300">
                  {item.institution}
                </p>
                <p className="text-xs text-slate-300 max-w-2xl leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>

              <div className="shrink-0 text-left sm:text-right">
                <span className="text-xs font-mono font-semibold text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-white/10 block">
                  {item.timeline}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hobbies & Personal Interests */}
      <div className="glass-panel rounded-2xl border p-6 flex flex-col sm:flex-row items-center justify-between gap-5"
        style={{
          borderColor: "var(--border)",
          background: "var(--surface)",
        }}
      >
        <div>
          <h3 className="text-base font-bold text-white flex items-center gap-2 mb-2">
            <Heart className="text-rose-400" size={18} /> Hobbies & Interests
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Building Web Applications &bull; Learning New Technologies &bull; Reading Tech Articles &bull; Listening to Music
          </p>
        </div>

        <Link to="/contact" className="btn-primary py-2.5 px-5 text-xs font-bold shrink-0">
          Get in Touch
        </Link>
      </div>
    </div>
  );
}
