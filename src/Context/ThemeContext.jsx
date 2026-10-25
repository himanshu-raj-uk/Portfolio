import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useEffect,
  useState,
} from "react";

const STORAGE_KEY = "portfolio-theme";

// "dark"  = outer space theme
// "light" = underwater ocean theme (deep sea)
const DEFAULT_THEME = "light";

const THEME_COLORS = {
  dark: "#02040d",
  light: "#020b1d",
};

const isValid = (value) => value === "dark" || value === "light";

const ThemeContext = createContext(null);

function readInitialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isValid(saved)) return saved;
  } catch {
    // storage blocked: fall through to the default
  }
  return DEFAULT_THEME;
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(readInitialTheme);
  const isDark = theme === "dark";

  const setTheme = useCallback((next) => {
    setThemeState((current) => {
      const value = typeof next === "function" ? next(current) : next;
      return isValid(value) ? value : current;
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  // apply before the browser paints so the page never flashes the wrong theme
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = "dark";

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", THEME_COLORS[theme]);

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // storage blocked: the theme still works for this visit
    }
  }, [theme]);

  // keep several open tabs in sync
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY && isValid(e.newValue)) {
        setThemeState(e.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      isDark,
      isLight: !isDark,
      toggleTheme,
      setTheme,
    }),
    [theme, isDark, toggleTheme, setTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}

export default ThemeProvider;
