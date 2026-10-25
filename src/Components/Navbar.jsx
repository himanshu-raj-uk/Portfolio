import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Download, Menu, Waves, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { NAME, NAV_LINKS, CONTACT } from "../Data/Site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const handleOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleScroll = () => setOpen(false);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  const handleHeaderLeave = () => setOpen(false);

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -76, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onMouseLeave={handleHeaderLeave}
      className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center justify-between px-[5%] border-b backdrop-blur-xl transition-colors duration-300"
      style={{
        borderColor: "var(--border)",
        background: "color-mix(in srgb, var(--page-bg) 82%, transparent)",
      }}
    >
      {/* Brand Logo */}
      <Link
        to="/"
        className="flex items-center gap-2.5 group"
        onClick={() => {
          setOpen(false);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
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

        <span className="font-extrabold tracking-tight text-[17px] text-white">
          {NAME}
          <span style={{ color: "var(--accent)" }}></span>
        </span>
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-1 sm:gap-2">
        {NAV_LINKS.map((link) => {
          const isActive = location.pathname === link.to;

          return (
            <NavLink
              key={link.id}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                isActive
                  ? "text-white shadow-[0_0_15px_rgba(34,211,238,0.35)]"
                  : "text-slate-300 hover:text-white"
              }`}
              style={{
                color: isActive ? "#ffffff" : "var(--text-secondary)",
                background: isActive ? "var(--surface-hover)" : "transparent",
                border: isActive
                  ? "1px solid var(--border)"
                  : "1px solid transparent",
              }}
            >
              {link.label}
            </NavLink>
          );
        })}
      </nav>

      {/* Action Buttons: Resume + Theme Switcher + Mobile Toggle (the 3 icons) */}
      <div className="flex items-center gap-3">
        <a
          href={CONTACT.resumeUrl}
          download="Himanshu_Raj_Resume.pdf"
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-semibold transition-all hover:scale-105"
          style={{
            borderColor: "var(--border)",
            background: "var(--surface)",
            color: "var(--text-primary)",
          }}
          title="Download Official Resume (PDF)"
        >
          <Download size={13} style={{ color: "var(--accent)" }} />
          <span>Resume</span>
        </a>

        {/* Theme Toggle Button */}
        <ThemeToggle />

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="md:hidden w-9 h-9 rounded-xl border flex items-center justify-center text-white"
          style={{
            borderColor: "var(--border)",
            background: "var(--surface)",
          }}
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-[73px] left-4 right-4 rounded-2xl border p-3 flex flex-col gap-1 backdrop-blur-2xl shadow-2xl"
          style={{
            borderColor: "var(--border)",
            background: "var(--surface-solid)",
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.to;

            return (
              <NavLink
                key={link.id}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-cyan-500/15 text-white font-bold"
                    : "text-slate-300"
                }`}
              >
                {link.label}
              </NavLink>
            );
          })}

          <a
            href={CONTACT.resumeUrl}
            download="Himanshu_Raj_Resume.pdf"
            onClick={() => setOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
              color: "var(--accent)",
            }}
          >
            <Download size={15} /> Download Resume (PDF)
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}

export default Navbar;
