import { Moon, Waves } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useTheme } from "../Context/ThemeContext";

const STARS = [
  { x: 10, y: 10, s: 2, d: 0 },
  { x: 24, y: 24, s: 1.5, d: 0.6 },
  { x: 38, y: 8, s: 1.5, d: 1.1 },
  { x: 16, y: 20, s: 1, d: 0.3 },
];

const BUBBLES = [
  { x: 40, s: 6, d: 0, t: 2.6 },
  { x: 52, s: 4, d: 0.9, t: 2.2 },
  { x: 60, s: 5, d: 1.5, t: 3 },
];

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const reduce = useReducedMotion();

  return (
    <motion.button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Space theme"
      title={isDark ? "Explore the ocean" : "Explore outer space"}
      onClick={toggleTheme}
      whileTap={{ scale: 0.94 }}
      className="relative h-9 w-[72px] shrink-0 overflow-hidden rounded-full p-0"
      style={{
        border: "1px solid var(--border)",
        boxShadow: "0 0 18px var(--glow-primary)",
      }}
    >
      {/* ocean track (light theme) */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-0"
        animate={{ opacity: isDark ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        style={{
          background:
            "linear-gradient(180deg, #8fe9ff 0%, #1aa7d6 60%, #06689a 100%)",
        }}
      >
        {BUBBLES.map((b, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${b.x}%`,
              bottom: -8,
              width: b.s,
              height: b.s,
              border: "1px solid rgba(255,255,255,0.8)",
              background: "rgba(255,255,255,0.35)",
            }}
            animate={
              reduce || isDark ? undefined : { y: [0, -38], opacity: [0, 1, 0] }
            }
            transition={{
              duration: b.t,
              delay: b.d,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 72 10"
          preserveAspectRatio="none"
          height="8"
        >
          <path
            d="M0 5 Q9 0 18 5 T36 5 T54 5 T72 5 V10 H0Z"
            fill="rgba(255,255,255,0.22)"
          />
        </svg>
      </motion.span>

      {/* space track (dark theme) */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-0"
        animate={{ opacity: isDark ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background:
            "linear-gradient(135deg, #050a22 0%, #1c1470 60%, #4a2290 100%)",
        }}
      >
        {STARS.map((s, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${s.x + 36}%`,
              top: `${s.y + 8}%`,
              width: s.s,
              height: s.s,
              background: "#fff",
            }}
            animate={reduce || !isDark ? undefined : { opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 2,
              delay: s.d,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.span>

      {/* knob: pearl in the ocean, moon in space */}
      <motion.span
        aria-hidden="true"
        className="absolute left-1 top-1 flex h-7 w-7 items-center justify-center rounded-full"
        animate={{ x: isDark ? 36 : 0, rotate: isDark ? 0 : -360 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        style={{
          background: isDark
            ? "radial-gradient(circle at 32% 30%, #ffffff, #c7d0ff 60%, #8b9eff)"
            : "radial-gradient(circle at 32% 30%, #ffffff, #c6f4ff 55%, #5fd0f0)",
          color: isDark ? "#1c1470" : "#06689a",
          boxShadow: isDark
            ? "0 0 14px rgba(139,158,255,0.9)"
            : "0 0 14px rgba(255,255,255,0.9)",
        }}
      >
        <motion.span
          key={isDark ? "moon" : "waves"}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="flex"
        >
          {isDark ? <Moon size={15} /> : <Waves size={15} />}
        </motion.span>
      </motion.span>
    </motion.button>
  );
}

export default ThemeToggle;
