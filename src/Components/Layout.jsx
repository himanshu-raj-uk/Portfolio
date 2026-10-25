import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackgroundScene from "../BackgroundScene/BackgroundScene";
import { useTheme } from "../Context/ThemeContext";

function ThemeReveal() {
  const { theme } = useTheme();
  const first = useRef(true);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setTick((t) => t + 1);
  }, [theme]);

  if (tick === 0) return null;
  return (
    <div key={tick} className="theme-transition-overlay" aria-hidden="true" />
  );
}

function useSafeBackToHome() {
  const navigate = useNavigate();
  const location = useLocation();
  const locationRef = useRef(location);

  useEffect(() => {
    locationRef.current = location;
  }, [location]);

  useEffect(() => {
    const handlePopState = () => {
      if (locationRef.current.pathname !== "/") {
        navigate("/", { replace: true });
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [navigate]);
}

export function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useSafeBackToHome();

  return (
    <div className="app relative min-h-screen flex flex-col justify-between">
      <BackgroundScene />
      <ThemeReveal />
      <Navbar />

      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1 pt-[72px]"
      >
        <Outlet />
      </motion.main>

      <Footer />
    </div>
  );
}

export default Layout;
