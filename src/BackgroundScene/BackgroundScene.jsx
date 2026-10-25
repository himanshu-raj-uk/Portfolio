import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useTheme } from "../Context/ThemeContext";

/* Deterministic pseudo-random helper */
const rnd = (i, min, max, seed = 1) => {
  const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
  return min + (x - Math.floor(x)) * (max - min);
};

const loop = (duration, delay = 0, ease = "easeInOut") => ({
  duration,
  delay,
  repeat: Infinity,
  ease,
});

/* ========================================
   OCEAN THEME CONFIG & COMPONENTS
======================================== */

const RAYS = [
  { left: 6, w: 14, rot: -22, d: 0 },
  { left: 26, w: 12, rot: -12, d: 1.5 },
  { left: 48, w: 16, rot: -2, d: 3 },
  { left: 68, w: 13, rot: 9, d: 2 },
  { left: 86, w: 15, rot: 18, d: 4 },
];

const PLANKTON = Array.from({ length: 45 }, (_, i) => ({
  x: rnd(i, 2, 98),
  y: rnd(i, 5, 95, 2),
  s: rnd(i, 1.5, 3.5, 3),
  t: rnd(i, 10, 22, 4),
  d: rnd(i, 0, 8, 5),
}));

const BUBBLES = Array.from({ length: 32 }, (_, i) => ({
  x: rnd(i, 3, 97, 6),
  s: rnd(i, 7, 22, 7),
  t: rnd(i, 9, 20, 8),
  d: rnd(i, 0, 12, 9),
  drift: (i % 2 === 0 ? 1 : -1) * (15 + (i % 5) * 6),
}));

const FISH_SCHOOLS = [
  { y: 19, size: 28, count: 4, duration: 40, delay: 0, flip: true },
  { y: 44, size: 24, count: 5, duration: 48, delay: 7, flip: false },
  { y: 68, size: 34, count: 3, duration: 42, delay: 14, flip: true },
  { y: 83, size: 20, count: 6, duration: 34, delay: 3, flip: false },
];

const WEEDS = [50, 140, 230, 340, 440, 560, 680, 780, 890, 1010, 1120];

function FishSvg({ size, flip, offset = 0 }) {
  return (
    <svg
      width={size}
      height={size * 0.52}
      viewBox="0 0 42 22"
      style={{
        position: "absolute",
        left: offset * size * 1.35,
        top: (offset % 2) * size * 0.35,
        transform: flip ? "scaleX(-1)" : undefined,
        fill: "var(--accent-tertiary)",
        opacity: 0.72,
        filter: "drop-shadow(0 0 8px rgba(34, 211, 238, 0.45))",
      }}
    >
      <path d="M2 11 C9 1 25 1 33 11 C25 21 9 21 2 11Z M31 11 L41 3 L41 19Z" />
      <circle cx="10" cy="9" r="1.3" fill="#e0faff" />
      <path
        d="M17 11 Q20 14 24 11"
        stroke="#e0faff"
        strokeWidth="1.2"
        fill="none"
        opacity="0.8"
      />
    </svg>
  );
}

function AnimatedJellyfish({
  id,
  x,
  y,
  size,
  color,
  highlight,
  duration,
  delay,
  reduce,
}) {
  return (
    <motion.div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        filter: `drop-shadow(0 0 18px ${color})`,
      }}
      animate={
        reduce ? undefined : { y: [0, -48, 0, 24, 0], x: [0, 16, -10, 0] }
      }
      transition={loop(duration, delay)}
    >
      <svg viewBox="0 0 100 150" overflow="visible" width="100%">
        <defs>
          <radialGradient id={`bg-jelly-${id}`} cx="40%" cy="25%" r="75%">
            <stop offset="0%" stopColor={highlight} stopOpacity="0.95" />
            <stop offset="60%" stopColor={color} stopOpacity="0.6" />
            <stop offset="100%" stopColor={color} stopOpacity="0.2" />
          </radialGradient>
        </defs>

        {/* Tentacles */}
        {[26, 38, 50, 62, 74].map((xPos, idx) => (
          <motion.path
            key={xPos}
            d={`M${xPos} 56 C${xPos - 9} 85 ${xPos + 9} 110 ${xPos} 145`}
            stroke={color}
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.75"
            style={{ transformOrigin: `${xPos}px 56px` }}
            animate={reduce ? undefined : { rotate: [-9, 9, -9] }}
            transition={loop(2.8 + idx * 0.4, idx * 0.2)}
          />
        ))}

        {/* Outer Jelly Bell */}
        <motion.path
          d="M8 56 C8 8 92 8 92 56 C82 64 72 52 62 62 C52 52 42 64 32 54 C22 62 14 60 8 56Z"
          fill={`url(#bg-jelly-${id})`}
          style={{ transformOrigin: "50% 50%" }}
          animate={reduce ? undefined : { scaleY: [1, 0.86, 1] }}
          transition={loop(3.2, delay / 2)}
        />

        {/* Inner Bell Glow */}
        <ellipse
          cx="50"
          cy="42"
          rx="24"
          ry="15"
          fill={highlight}
          opacity="0.35"
        />
      </svg>
    </motion.div>
  );
}

function OceanSeabed({ reduce }) {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full"
      style={{ height: "24vh" }}
      viewBox="0 0 1200 220"
      preserveAspectRatio="none"
    >
      {/* Swaying Seaweeds */}
      {WEEDS.map((x, index) => (
        <motion.path
          key={`weed-${x}`}
          d={`M${x} 200 C${x - 16} 150 ${x + 16} 110 ${x} ${55 + (index % 4) * 16}`}
          stroke={index % 2 === 0 ? "#14b8a6" : "#00d9ff"}
          strokeWidth="6.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
          style={{ transformOrigin: `${x}px 200px` }}
          animate={reduce ? undefined : { rotate: [-7, 7, -7] }}
          transition={loop(4.2 + (index % 4) * 0.8, index * 0.25)}
        />
      ))}

      {/* Seabed Terrain Silhouette */}
      <path
        d="M0 220 L0 165 C120 135 200 180 340 152 S540 122 660 162 S900 115 1040 155 S1160 162 1200 144 L1200 220Z"
        fill="#020919"
        opacity="0.94"
      />

      {/* Bioluminescent Sea Coral Motes */}
      {[180, 360, 520, 750, 930, 1080].map((cx, i) => (
        <motion.circle
          key={`coral-mote-${cx}`}
          cx={cx}
          cy={165 + (i % 3) * 8}
          r="4.5"
          fill="var(--accent-tertiary)"
          animate={reduce ? undefined : { opacity: [0.35, 1, 0.35] }}
          transition={loop(2.4 + (i % 3), i * 0.6)}
        />
      ))}
    </svg>
  );
}

function OceanBackground({ reduce }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Ambient Gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(34, 211, 238, 0.28), transparent 52%), radial-gradient(ellipse at 15% 80%, rgba(14, 165, 233, 0.22), transparent 48%), linear-gradient(180deg, #073860 0%, #052644 45%, #020b1d 100%)",
        }}
      />

      {/* Sun Light Rays */}
      {RAYS.map((ray, index) => (
        <motion.span
          key={`sun-ray-${index}`}
          className="absolute top-0 origin-top blur-2xl"
          style={{
            left: `${ray.left}%`,
            width: `${ray.w}%`,
            height: "88%",
            rotate: ray.rot,
            background:
              "linear-gradient(180deg, rgba(165, 243, 252, 0.38), rgba(34, 211, 238, 0.08) 50%, transparent 88%)",
          }}
          animate={
            reduce
              ? undefined
              : {
                  opacity: [0.22, 0.68, 0.22],
                  rotate: [ray.rot - 3, ray.rot + 3, ray.rot - 3],
                }
          }
          transition={loop(8 + index * 1.6, ray.d)}
        />
      ))}

      {/* Floating Plankton motes */}
      {PLANKTON.map((p, index) => (
        <motion.span
          key={`plankton-${index}`}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s,
            height: p.s,
            background: "var(--accent-tertiary)",
            boxShadow: "0 0 8px rgba(103, 232, 249, 0.65)",
          }}
          animate={
            reduce
              ? undefined
              : { y: [0, -75], x: [0, 14, 0], opacity: [0.1, 0.85, 0.1] }
          }
          transition={loop(p.t, p.d, "linear")}
        />
      ))}

      {/* Rising Bubbles */}
      {BUBBLES.map((b, index) => (
        <motion.span
          key={`bubble-${index}`}
          className="absolute rounded-full"
          style={{
            left: `${b.x}%`,
            bottom: "-35px",
            width: b.s,
            height: b.s,
            border: "1.2px solid rgba(165, 243, 252, 0.75)",
            background:
              "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.75), rgba(34, 211, 238, 0.1) 75%)",
            boxShadow: "inset -2px -2px 5px rgba(34, 211, 238, 0.2)",
          }}
          animate={
            reduce
              ? undefined
              : {
                  y: ["0vh", "-115vh"],
                  x: [0, b.drift, 0],
                  opacity: [0, 0.9, 0],
                }
          }
          transition={loop(b.t, b.d, "linear")}
        />
      ))}

      {/* Bioluminescent Jellyfish */}
      <AnimatedJellyfish
        id="one"
        x={76}
        y={18}
        size={145}
        color="#38bdf8"
        highlight="#dbeafe"
        duration={12}
        delay={0}
        reduce={reduce}
      />
      <AnimatedJellyfish
        id="two"
        x={9}
        y={52}
        size={115}
        color="#22d3ee"
        highlight="#cffafe"
        duration={15}
        delay={3}
        reduce={reduce}
      />
      <AnimatedJellyfish
        id="three"
        x={50}
        y={65}
        size={86}
        color="#a78bfa"
        highlight="#ede9fe"
        duration={11}
        delay={5}
        reduce={reduce}
      />

      {/* Schools of Swimming Fish */}
      {FISH_SCHOOLS.map((school, index) => (
        <motion.div
          key={`fish-school-${index}`}
          className="absolute"
          style={{ top: `${school.y}%`, left: 0 }}
          initial={{ x: school.flip ? "110vw" : "-30vw" }}
          animate={
            reduce
              ? undefined
              : {
                  x: school.flip ? "-35vw" : "110vw",
                  y: [0, -18, 0, 14, 0],
                }
          }
          transition={{
            x: {
              duration: school.duration,
              delay: school.delay,
              repeat: Infinity,
              ease: "linear",
            },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          {Array.from({ length: school.count }, (_, fishIdx) => (
            <FishSvg
              key={fishIdx}
              size={school.size}
              flip={school.flip}
              offset={fishIdx}
            />
          ))}
        </motion.div>
      ))}

      {/* Seabed with waving weeds and corals */}
      <OceanSeabed reduce={reduce} />
    </div>
  );
}

/* ========================================
   SPACE THEME CONFIG & COMPONENTS
======================================== */

const STARS = Array.from({ length: 90 }, (_, i) => ({
  x: rnd(i, 1, 99),
  y: rnd(i, 1, 99, 2),
  size: rnd(i, 1, 3.2, 3),
  duration: rnd(i, 2, 6, 4),
  delay: rnd(i, 0, 5, 5),
}));

const COSMIC_DUST = Array.from({ length: 40 }, (_, i) => ({
  x: rnd(i, 1, 99, 6),
  y: rnd(i, 1, 99, 7),
  size: rnd(i, 1, 3, 8),
  duration: rnd(i, 6, 16, 9),
  delay: rnd(i, 0, 7, 10),
}));

const COMETS = [
  { top: 12, delay: 0, gap: 8, duration: 2.6 },
  { top: 35, delay: 5, gap: 12, duration: 3.1 },
  { top: 62, delay: 10, gap: 9, duration: 2.8 },
];

function SpaceBackground({ reduce }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep Cosmos background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 72% 16%, rgba(76, 29, 149, 0.32), transparent 45%), radial-gradient(ellipse at 15% 80%, rgba(14, 165, 233, 0.18), transparent 48%), linear-gradient(145deg, #02040d 0%, #06091e 52%, #08051a 100%)",
        }}
      />

      {/* Violet Nebula Cloud */}
      <motion.div
        className="absolute -right-[12%] -top-[14%] rounded-full blur-[85px]"
        style={{
          width: "55vw",
          height: "55vw",
          background:
            "radial-gradient(circle, rgba(124, 58, 237, 0.25), transparent 68%)",
        }}
        animate={reduce ? undefined : { x: [0, -45, 0], scale: [1, 1.15, 1] }}
        transition={loop(24)}
      />

      {/* Cyan Nebula Cloud */}
      <motion.div
        className="absolute -bottom-[16%] -left-[10%] rounded-full blur-[95px]"
        style={{
          width: "48vw",
          height: "48vw",
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.18), transparent 68%)",
        }}
        animate={reduce ? undefined : { x: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={loop(26, 3)}
      />

      {/* Twinkling Stars */}
      {STARS.map((star, index) => (
        <motion.span
          key={`star-${index}`}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            background: index % 6 === 0 ? "#c4b5fd" : "#f4f6ff",
            boxShadow:
              index % 6 === 0
                ? "0 0 12px rgba(167, 139, 250, 0.95)"
                : "0 0 7px rgba(196, 181, 253, 0.75)",
          }}
          animate={
            reduce
              ? undefined
              : {
                  opacity: [0.15, 1, 0.2],
                  scale: [0.75, 1.45, 0.75],
                }
          }
          transition={loop(star.duration, star.delay)}
        />
      ))}

      {/* Drifting Cosmic Dust */}
      {COSMIC_DUST.map((dust, index) => (
        <motion.span
          key={`dust-${index}`}
          className="absolute rounded-full"
          style={{
            left: `${dust.x}%`,
            top: `${dust.y}%`,
            width: dust.size,
            height: dust.size,
            background: index % 3 === 0 ? "#67e8f9" : "#c4b5fd",
          }}
          animate={
            reduce
              ? undefined
              : {
                  x: [0, 24, -12, 0],
                  y: [0, -18, 12, 0],
                  opacity: [0.15, 0.75, 0.15],
                }
          }
          transition={loop(dust.duration, dust.delay)}
        />
      ))}

      {/* Shooting Comets */}
      {COMETS.map((comet, index) => (
        <motion.span
          key={`comet-${index}`}
          className="absolute h-[2px] w-40 origin-right"
          style={{
            top: `${comet.top}%`,
            left: "100%",
            rotate: "-28deg",
            background:
              "linear-gradient(90deg, transparent, #67e8f9 35%, #c4b5fd)",
            filter: "drop-shadow(0 0 6px rgba(103, 232, 249, 0.85))",
          }}
          animate={
            reduce
              ? undefined
              : { x: [0, "-120vw"], y: [0, "50vh"], opacity: [0, 1, 0] }
          }
          transition={{
            duration: comet.duration,
            delay: comet.delay,
            repeat: Infinity,
            repeatDelay: comet.gap,
            ease: "easeIn",
          }}
        />
      ))}

      {/* Glowing Moon */}
      <motion.div
        className="absolute"
        style={{ left: "13%", top: "14%", width: 56, height: 56 }}
        animate={reduce ? undefined : { y: [0, -18, 0], rotate: [0, 10, 0] }}
        transition={loop(14)}
      >
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 32% 30%, #fff, #c7d2fe 55%, #6366f1)",
            boxShadow: "0 0 35px rgba(129, 140, 248, 0.55)",
          }}
        />
      </motion.div>

      {/* Saturn-like Ringed Planet */}
      <motion.div
        className="absolute"
        style={{
          right: "-5%",
          bottom: "7%",
          width: "clamp(180px, 28vw, 360px)",
          aspectRatio: "1",
        }}
        animate={reduce ? undefined : { y: [0, -20, 0], rotate: [0, -6, 0] }}
        transition={loop(16)}
      >
        <span
          className="absolute inset-[14%] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 25%, #dbeafe 0%, #818cf8 16%, #4c1d95 45%, #130a35 78%, #02030b 100%)",
            boxShadow:
              "0 0 70px rgba(99, 102, 241, 0.35), inset -25px -35px 55px rgba(0, 0, 0, 0.6)",
          }}
        />
        <motion.span
          className="absolute rounded-full"
          style={{
            left: "-12%",
            right: "-12%",
            top: "38%",
            height: "26%",
            rotate: -20,
            border: "4px solid rgba(186, 124, 255, 0.7)",
            boxShadow: "0 0 25px rgba(186, 124, 255, 0.55)",
          }}
          animate={reduce ? undefined : { rotate: [-20, -12, -20] }}
          transition={loop(10)}
        />
      </motion.div>

      {/* Orbiting Satellite */}
      {!reduce && (
        <motion.svg
          width="48"
          height="28"
          viewBox="0 0 48 28"
          className="absolute"
          style={{ top: "24%", left: 0 }}
          initial={{ x: "-10vw" }}
          animate={{ x: "115vw", y: [0, -25, 10] }}
          transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
        >
          <rect
            x="0"
            y="10"
            width="15"
            height="8"
            fill="#8b9eff"
            opacity="0.8"
          />
          <rect
            x="33"
            y="10"
            width="15"
            height="8"
            fill="#8b9eff"
            opacity="0.8"
          />
          <rect x="16" y="7" width="16" height="14" rx="3" fill="#e8ecff" />
          <circle cx="24" cy="14" r="3" fill="#67e8f9" />
        </motion.svg>
      )}

      {/* Flying Space Rocket */}
      <motion.div
        className="absolute"
        style={{
          left: "70%",
          top: "16%",
          filter: "drop-shadow(0 0 12px rgba(167, 139, 250, 0.9))",
        }}
        animate={
          reduce
            ? undefined
            : {
                x: [0, 70, 130, 0],
                y: [0, -32, 16, 0],
                rotate: [-26, -10, -28],
              }
        }
        transition={loop(22, 1)}
      >
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none">
          <path
            d="M4.5 16.5C3.5 17.5 3 20 3 21C4 21 6.5 20.5 7.5 19.5C8.5 18.5 9 17.5 8 16.5C7 15.5 5.5 15.5 4.5 16.5Z"
            fill="#f97316"
          />
          <path
            d="M12 15L9 12L15 4.5C16.5 3 19.5 2 21 3C22 4.5 21 7.5 19.5 9L12 15Z"
            fill="#e0e7ff"
            stroke="#8b9eff"
            strokeWidth="1.5"
          />
          <circle cx="15.5" cy="8.5" r="2" fill="#67e8f9" />
        </svg>
      </motion.div>
    </div>
  );
}

/* ========================================
   ROOT SCENE BACKGROUND COMPONENT
======================================== */

export default function BackgroundScene() {
  const { isDark } = useTheme();
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{
        zIndex: -4,
        isolation: "isolate",
      }}
    >
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={isDark ? "space-scene" : "ocean-scene"}
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {isDark ? (
            <SpaceBackground reduce={reduce} />
          ) : (
            <OceanBackground reduce={reduce} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
