import { useState, useEffect } from "react";
import { ArrowUp, Github, Linkedin, Heart, Terminal } from "lucide-react";
import { personalInfo } from "../data";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-transparent transition-colors border-t border-slate-200/20 dark:border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative">
        {/* Left Side: Copyright and Author */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 font-medium flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500/20" /> using React 19, Vite & Tailwind CSS.
          </p>
        </div>

        {/* Middle: Social icons shortcut */}
        <div className="flex items-center gap-4 text-slate-400">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <span className="w-px h-4 bg-slate-200 dark:bg-slate-800" />
          <div className="text-[10px] font-mono flex items-center gap-1 text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-indigo-500" />
            <span>exit</span>
          </div>
        </div>
      </div>

      {/* Floating Circular Back-to-Top trigger */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white/10 dark:bg-white/5 border border-slate-200/30 dark:border-white/10 text-indigo-600 dark:text-indigo-400 shadow-xl cursor-pointer hover:scale-110 transition-all focus:outline-none hover:bg-indigo-500/10 glass"
          aria-label="Back to Top"
          id="back-to-top-floating-btn"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
