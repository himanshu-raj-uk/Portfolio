import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import {
  Heart,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Code2,
  Users,
  ExternalLink,
} from "lucide-react";
import { useTheme } from "../Context/ThemeContext";
import { CONTACT } from "../Data/Site";
import { personalData } from "../Data/PersonalData";
import { projects } from "../Data/MyProject";

const CONTACT_COLORS = {
  email: "#38bdf8",
  phone: "#22d3ee",
  location: "#34d399",
  github: "#c084fc",
  linkedin: "#3b82f6",
};

export default function Footer() {
  const { isDark } = useTheme();
  const reduce = useReducedMotion();

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", to: "/" },
        { label: "About Me", to: "/about" },
        { label: "Projects", to: "/projects" },
        { label: "Skills", to: "/skills" },
        { label: "Contact", to: "/contact" },
      ],
    },
    {
      title: "Projects",
      links: projects.slice(0, 4).map((project) => ({
        label: project.title,
        to: `/projects#${project.id}`,
      })),
    },
    {
      title: "Get In Touch",
      contact: [
        {
          type: "email",
          icon: Mail,
          value: CONTACT.email,
          href: `mailto:${CONTACT.email}`,
        },
        {
          type: "phone",
          icon: Phone,
          value: CONTACT.phoneDisplay,
          href: CONTACT.phoneHref,
        },
        {
          type: "location",
          icon: MapPin,
          value: CONTACT.location,
          external: false,
        },
        {
          type: "github",
          icon: Code2,
          value: CONTACT.githubHandle,
          href: CONTACT.githubUrl,
          external: true,
        },
        {
          type: "linkedin",
          icon: Users,
          value: CONTACT.linkedinHandle,
          href: CONTACT.linkedinUrl,
          external: true,
        },
      ],
    },
  ];

  return (
    <footer
      className="relative w-full border-t backdrop-blur-xl"
      style={{
        borderColor: "var(--border)",
        background: "var(--surface-solid)",
      }}
    >
      <div className="mx-auto max-w-[1400px] px-[5%] py-10 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mb-10">
          {/* Brand & About */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 group w-fit">

              <span
                className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105 overflow-hidden"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                  color: "var(--accent)",
                  boxShadow: "0 0 20px var(--glow-primary)",
                }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}favicon-48x48.png`}
                  alt="Himanshu Raj logo"
                  className="w-full h-full object-contain rounded-xl"
                />
              </span>

              <div className="font-extrabold tracking-tight text-xl text-white">
                {personalData.about.name}
                <span style={{ color: "var(--accent)" }}></span>
              </div>
            </Link>

            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--text-secondary)" }}
            >
              {personalData.career.split(".")[0]}.
            </p>

            <div className="flex items-center gap-2 text-xs text-cyan-300">
              <Heart size={14} className="shrink-0" />
              <span>
                Built with passion for creating exceptional digital experiences
              </span>
            </div>
          </div>

          {/* Quick Links */}
          {footerSections[0].links.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 uppercase tracking-wide">
                <Sparkles size={15} style={{ color: "var(--accent)" }} />
                {footerSections[0].title}
              </h3>
              <ul className="space-y-2.5">
                {footerSections[0].links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className="text-sm text-slate-300 hover:text-white transition-colors inline-block hover:translate-x-1 transform"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Projects Links */}
          {footerSections[1].links.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 uppercase tracking-wide">
                <Sparkles size={15} style={{ color: "var(--accent)" }} />
                {footerSections[1].title}
              </h3>
              <ul className="space-y-2.5">
                {footerSections[1].links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className="text-sm text-slate-300 hover:text-white transition-colors inline-block hover:translate-x-1 transform truncate max-w-[180px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact Info */}
          {footerSections[2].contact.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 uppercase tracking-wide">
                <Sparkles size={15} style={{ color: "var(--accent)" }} />
                {footerSections[2].title}
              </h3>
              <div className="space-y-3">
                {footerSections[2].contact.map((item, index) => {
                  const Icon = item.icon;
                  const color = CONTACT_COLORS[item.type] || "#34d399";

                  if (!item.value) return null;

                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 shrink-0 rounded-lg flex items-center justify-center border"
                        style={{
                          color,
                          borderColor: `${color}40`,
                          background: `${color}18`,
                        }}
                      >
                        <Icon size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        {item.href && item.external ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-slate-300 hover:text-white transition-colors font-medium truncate block"
                          >
                            {item.value}
                          </a>
                        ) : item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-slate-300 hover:text-white transition-colors font-medium truncate block"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-slate-300 font-medium truncate">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className="text-sm text-center sm:text-left"
            style={{ color: "var(--text-secondary)" }}
          >
            © {currentYear} {personalData.about.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-3 text-xs">
            <span style={{ color: "var(--text-muted)" }}>
              Built with ❤️ for the web
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/50 shrink-0" />
            <span style={{ color: "var(--accent)" }}>
              Optimized for Performance
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
