import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Check,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import GitHubIcon from "./GitHubIcon";
import { FULL_NAME, ROLE_TITLE, CONTACT } from "../Data/Site";

export default function Contact() {
  const reduce = useReducedMotion();
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const contactMethods = [
    {
      key: "phone",
      title: "Phone & WhatsApp",
      value: CONTACT.phone,
      display: CONTACT.phoneDisplay,
      href: CONTACT.phoneHref,
      action: "Call directly",
      icon: Phone,
      color: "#22d3ee",
    },
    {
      key: "email",
      title: "Email Address",
      value: CONTACT.email,
      display: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      action: "Send email",
      icon: Mail,
      color: "#38bdf8",
    },
    {
      key: "github",
      title: "GitHub Profile",
      value: `https://github.com/${CONTACT.githubHandle}`,
      display: `github.com/${CONTACT.githubHandle}`,
      href: CONTACT.github,
      action: "View repositories",
      icon: GitHubIcon,
      color: "#c084fc",
      external: true,
    },
    {
      key: "linkedin",
      title: "LinkedIn Profile",
      value: CONTACT.linkedin,
      display: `linkedin.com/in/${CONTACT.linkedinHandle}`,
      href: CONTACT.linkedin,
      action: "Connect on LinkedIn",
      icon: () => <span className="font-bold text-sm">in</span>,
      color: "#3b82f6",
      external: true,
    },
    {
      key: "location",
      title: "Location & Availability",
      value: CONTACT.location,
      display: "Delhi, India • Open to Remote & On-Site",
      href: null,
      action: "Available immediately",
      icon: MapPin,
      color: "#34d399",
    },
  ];

  return (
    <div className="relative mx-auto max-w-[1100px] px-[5%] py-12 sm:py-16">
      {/* Header */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mb-10"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-cyan-300 mb-3 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
          <Sparkles size={13} />
          GET IN TOUCH
        </div>

        <h1
          className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          style={{ color: "var(--text-primary)" }}
        >
          Let's Work Together<span style={{ color: "var(--accent)" }}>.</span>
        </h1>

        <p
          className="mt-3 text-sm sm:text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          I'm actively looking for Full Stack (MERN) Developer opportunities,
          freelance projects, and software engineering roles. Reach out directly
          via phone, email, or social profiles below.
        </p>
      </motion.div>

      {/* Direct Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          const isCopied = copiedKey === method.key;

          return (
            <motion.div
              key={method.key}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className="glass-panel rounded-2xl border p-5 flex items-center justify-between gap-4 transition-all duration-300 hover:border-cyan-400"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
              }}
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border"
                  style={{
                    color: method.color,
                    borderColor: `${method.color}40`,
                    background: `${method.color}18`,
                  }}
                >
                  <Icon size={20} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-400">
                    {method.title}
                  </p>
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.external ? "_blank" : undefined}
                      rel={method.external ? "noreferrer" : undefined}
                      className="text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors truncate block"
                    >
                      {method.display}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-white truncate">
                      {method.display}
                    </p>
                  )}
                  <span className="text-[11px] text-cyan-300/70 font-medium">
                    {method.action}
                  </span>
                </div>
              </div>

              {/* Action buttons (Copy / Link) */}
              <div className="flex items-center gap-1.5 shrink-0">
                {method.value && (
                  <button
                    type="button"
                    onClick={() => handleCopy(method.value, method.key)}
                    className="p-2.5 rounded-xl border border-cyan-500/20 bg-slate-900/60 text-cyan-300 hover:border-cyan-400 hover:scale-105 transition-all"
                    title={`Copy ${method.title}`}
                    aria-label={`Copy ${method.title}`}
                  >
                    {isCopied ? <Check size={16} /> : <Copy size={16} />}
                  </button>
                )}

                {method.href && (
                  <a
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noreferrer" : undefined}
                    className="p-2.5 rounded-xl border border-cyan-500/20 bg-slate-900/60 text-cyan-300 hover:border-cyan-400 hover:scale-105 transition-all"
                    title={method.action}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}

      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-8 glass-panel rounded-2xl border border-white/10 p-5 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <p className="font-bold text-white text-sm">
            {FULL_NAME} &bull; {ROLE_TITLE}
          </p>
          <p className="text-xs text-slate-400">
            Available for immediate joining & interviews.
          </p>
        </div>
        <a
          href={CONTACT.phoneHref}
          className="btn-primary py-2 px-5 text-xs font-bold"
        >
          <Phone size={14} /> Call {CONTACT.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
