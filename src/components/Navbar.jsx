import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon, Laptop, Code2 } from "lucide-react";
export default function Navbar({ darkMode, toggleDarkMode, systemTheme, setSystemTheme }) {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "github", label: "GitHub" },
    { id: "contact", label: "Contact" }
  ];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      // Trigger when the section occupies a significant middle part of screen
      threshold: 0
    };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return <header
    className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${isScrolled ? "glass shadow-md py-3" : "bg-transparent py-5"}`}
  >
      {
    /* Scroll progress bar */
  }
      <div
    className="absolute top-0 left-0 h-[3px] bg-indigo-500 dark:bg-indigo-400 transition-all duration-100 ease-out"
    style={{ width: `${scrollProgress}%` }}
  />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {
    /* Logo */
  }
        <button
    onClick={() => handleNavClick("home")}
    className="flex items-center gap-2 font-display font-extrabold text-xl tracking-tight text-slate-900 dark:text-white cursor-pointer group"
    id="nav-logo"
  >
          <div className="p-1.5 rounded-lg bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5" />
          </div>
          <span>
            Abhi<span className="text-indigo-500 font-medium">.dev</span>
          </span>
        </button>

        {
    /* Desktop Navigation Menu */
  }
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => <button
    key={item.id}
    onClick={() => handleNavClick(item.id)}
    className={`relative px-4 py-2 text-sm font-medium transition-colors cursor-pointer rounded-lg ${activeSection === item.id ? "text-indigo-600 dark:text-indigo-400" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/40"}`}
    id={`nav-item-${item.id}`}
  >
              {activeSection === item.id && <motion.span
    layoutId="activeNavBackground"
    className="absolute inset-0 bg-indigo-500/5 dark:bg-indigo-400/5 rounded-lg border-b border-indigo-500/20"
    transition={{ type: "spring", stiffness: 380, damping: 30 }}
  />}
              {item.label}
            </button>)}
        </nav>

        {
    /* Theme and Custom Settings Toggle */
  }
        <div className="hidden md:flex items-center gap-2">
          {
    /* Theme toggler buttons */
  }
          <div className="flex bg-slate-100 dark:bg-slate-800/60 p-1 rounded-lg border border-slate-200/50 dark:border-slate-700/50">
            <button
    onClick={() => {
      setSystemTheme(false);
      if (darkMode) toggleDarkMode();
    }}
    className={`p-1.5 rounded-md transition-all cursor-pointer ${!systemTheme && !darkMode ? "bg-white dark:bg-slate-900 text-amber-500 shadow-sm" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"}`}
    title="Light Mode"
    aria-label="Set Light Mode"
    id="theme-light-btn"
  >
              <Sun className="w-4 h-4" />
            </button>
            <button
    onClick={() => {
      setSystemTheme(false);
      if (!darkMode) toggleDarkMode();
    }}
    className={`p-1.5 rounded-md transition-all cursor-pointer ${!systemTheme && darkMode ? "bg-white dark:bg-slate-900 text-indigo-400 shadow-sm" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"}`}
    title="Dark Mode"
    aria-label="Set Dark Mode"
    id="theme-dark-btn"
  >
              <Moon className="w-4 h-4" />
            </button>
            <button
    onClick={() => setSystemTheme(true)}
    className={`p-1.5 rounded-md transition-all cursor-pointer ${systemTheme ? "bg-white dark:bg-slate-900 text-indigo-500 dark:text-indigo-400 shadow-sm" : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"}`}
    title="System Theme"
    aria-label="Use System Theme"
    id="theme-system-btn"
  >
              <Laptop className="w-4 h-4" />
            </button>
          </div>
        </div>

        {
    /* Mobile Hamburger Button */
  }
        <div className="flex md:hidden items-center gap-3">
          {
    /* Quick theme toggler for mobile */
  }
          <button
    onClick={() => {
      setSystemTheme(false);
      toggleDarkMode();
    }}
    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
    aria-label="Toggle theme"
    id="theme-mobile-toggle"
  >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <button
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 focus:outline-none"
    aria-label="Toggle mobile menu"
    id="mobile-menu-hamburger"
  >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {
    /* Mobile Drawer Navigation Menu */
  }
      <AnimatePresence>
        {mobileMenuOpen && <motion.div
    initial={{ opacity: 0, height: 0 }}
    animate={{ opacity: 1, height: "auto" }}
    exit={{ opacity: 0, height: 0 }}
    transition={{ duration: 0.2 }}
    className="md:hidden border-t border-slate-200/50 dark:border-slate-800/60 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg shadow-lg overflow-hidden"
  >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navItems.map((item) => <button
    key={item.id}
    onClick={() => handleNavClick(item.id)}
    className={`flex items-center w-full px-4 py-3 text-base font-medium rounded-xl transition-all ${activeSection === item.id ? "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-semibold" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50"}`}
    id={`nav-item-mobile-${item.id}`}
  >
                  {item.label}
                </button>)}

              <div className="border-t border-slate-200/50 dark:border-slate-800/60 mt-3 pt-3 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Theme</span>
                <div className="flex bg-slate-100 dark:bg-slate-800/60 p-1 rounded-lg border border-slate-200/50 dark:border-slate-700/50">
                  <button
    onClick={() => {
      setSystemTheme(false);
      if (darkMode) toggleDarkMode();
    }}
    className={`px-3 py-1 text-xs rounded-md transition-all font-medium flex items-center gap-1.5 ${!systemTheme && !darkMode ? "bg-white dark:bg-slate-900 text-amber-500 shadow-sm" : "text-slate-400"}`}
  >
                    <Sun className="w-3.5 h-3.5" /> Light
                  </button>
                  <button
    onClick={() => {
      setSystemTheme(false);
      if (!darkMode) toggleDarkMode();
    }}
    className={`px-3 py-1 text-xs rounded-md transition-all font-medium flex items-center gap-1.5 ${!systemTheme && darkMode ? "bg-white dark:bg-slate-900 text-indigo-400 shadow-sm" : "text-slate-400"}`}
  >
                    <Moon className="w-3.5 h-3.5" /> Dark
                  </button>
                  <button
    onClick={() => setSystemTheme(true)}
    className={`px-3 py-1 text-xs rounded-md transition-all font-medium flex items-center gap-1.5 ${systemTheme ? "bg-white dark:bg-slate-900 text-indigo-500 dark:text-indigo-400 shadow-sm" : "text-slate-400"}`}
  >
                    <Laptop className="w-3.5 h-3.5" /> Auto
                  </button>
                </div>
              </div>
            </div>
          </motion.div>}
      </AnimatePresence>
    </header>;
}
