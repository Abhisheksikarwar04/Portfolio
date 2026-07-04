import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import GitHubSection from "./components/GitHubSection";
import CodingProfiles from "./components/CodingProfiles";
import Achievements from "./components/Achievements";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ToastContainer, { Toast } from "./components/Toast";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [darkMode, setDarkMode] = useState(true); // Default to premium dark mode
  const [systemTheme, setSystemTheme] = useState(true); // Sync with system theme by default
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState(true);

  // Initialize theme from LocalStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const savedSystem = localStorage.getItem("portfolio-system-theme");

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (isDark: boolean) => {
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    let activeDark = true;

    if (savedSystem !== null) {
      const useSystem = savedSystem === "true";
      setSystemTheme(useSystem);
      if (useSystem) {
        activeDark = mediaQuery.matches;
      } else {
        activeDark = savedTheme === "dark";
      }
    } else {
      // Default to system
      activeDark = mediaQuery.matches;
    }

    setDarkMode(activeDark);
    applyTheme(activeDark);

    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (systemTheme) {
        setDarkMode(e.matches);
        applyTheme(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [systemTheme]);

  // Handle manual theme toggle
  const toggleDarkMode = () => {
    const nextDark = !darkMode;
    setDarkMode(nextDark);
    setSystemTheme(false);
    localStorage.setItem("portfolio-theme", nextDark ? "dark" : "light");
    localStorage.setItem("portfolio-system-theme", "false");

    if (nextDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    addToast(`${nextDark ? "Dark" : "Light"} mode activated.`, "info");
  };

  const handleSetSystemTheme = (val: boolean) => {
    setSystemTheme(val);
    localStorage.setItem("portfolio-system-theme", val ? "true" : "false");
    if (val) {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      addToast("Synchronized with system theme.", "info");
    }
  };

  // Track cursor coordinates for custom cursor trailers (desktop only)
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(
        window.innerWidth < 768 ||
          navigator.maxTouchPoints > 0 ||
          "ontouchstart" in window
      );
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  // Toast actions
  const addToast = (message: string, type: "success" | "error" | "info") => {
    const newToast: Toast = {
      id: Math.random().toString(36).substring(2, 9),
      message,
      type
    };
    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#030303] text-slate-800 dark:text-slate-100 transition-colors overflow-x-hidden">
      {/* Mesh Gradient Background Layers for Frosted Glass Theme */}
      <div className="absolute top-[5%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/15 dark:bg-purple-900/25 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[25%] right-[-5%] w-[600px] h-[600px] rounded-full bg-blue-500/10 dark:bg-blue-900/15 blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[45%] left-[10%] w-[400px] h-[400px] rounded-full bg-emerald-500/10 dark:bg-emerald-900/10 blur-[110px] pointer-events-none z-0" />
      <div className="absolute top-[65%] right-[15%] w-[500px] h-[500px] rounded-full bg-purple-500/10 dark:bg-purple-900/15 blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-[85%] left-[-5%] w-[550px] h-[550px] rounded-full bg-blue-600/10 dark:bg-blue-900/15 blur-[140px] pointer-events-none z-0" />

      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Custom Cursor Trailer */}
            {!isMobile && (
              <motion.div
                className="fixed top-0 left-0 w-6 h-6 rounded-full border border-indigo-500/40 dark:border-indigo-400/40 pointer-events-none z-50 mix-blend-difference hidden md:block"
                animate={{
                  x: mousePos.x - 12,
                  y: mousePos.y - 12
                }}
                transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.2 }}
              />
            )}

            {/* Sticky Navigation */}
            <Navbar
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              systemTheme={systemTheme}
              setSystemTheme={handleSetSystemTheme}
            />

            {/* Main portfolio sections layout */}
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects addToast={addToast} />
              <Experience />
              <Education />
              <Certifications />
              <GitHubSection />
              <CodingProfiles />
              <Achievements />
              <Testimonials />
              <Blog />
              <Contact addToast={addToast} />
            </main>

            {/* Custom Footer details */}
            <Footer />

            {/* Global floating toast notification banner drawer */}
            <ToastContainer toasts={toasts} removeToast={removeToast} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
