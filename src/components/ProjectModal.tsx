import { useEffect } from "react";
import { motion } from "motion/react";
import { X, Github, ExternalLink, Cpu, Hammer, ShieldAlert, Share2 } from "lucide-react";
import { Project } from "../types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onShare: (project: Project) => void;
}

export default function ProjectModal({ project, onClose, onShare }: ProjectModalProps) {
  // Disable body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-md">
      {/* Background click dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative bg-white dark:bg-slate-900 rounded-3xl w-full max-w-4xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
      >
        {/* Header Image Cover */}
        <div className="relative h-48 sm:h-64 md:h-80 w-full shrink-0">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          {/* Dismiss button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/50 text-white hover:bg-slate-900/80 hover:scale-105 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <span className="px-2.5 py-1 bg-indigo-500 text-white font-mono text-[10px] font-bold uppercase rounded-md tracking-wider">
              {project.category}
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-2">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Main Content Panel */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div>
                <h4 className="font-display font-bold text-sm text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
                  Project Description
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Key Features list */}
              <div>
                <h4 className="font-display font-bold text-sm text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
                  Key Features
                </h4>
                <ul className="flex flex-col gap-2">
                  {project.keyFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Challenges Solved */}
              <div className="p-5 rounded-2xl bg-amber-500/5 dark:bg-amber-500/[0.03] border border-amber-500/10">
                <h4 className="font-display font-bold text-xs sm:text-sm text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Hammer className="w-4 h-4 shrink-0" />
                  Engineering Challenges Solved
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {project.challengesSolved}
                </p>
              </div>
            </div>

            {/* Right Architecture & Metadata Panel */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Architecture Outline */}
              <div className="p-5 rounded-2xl bg-indigo-500/5 dark:bg-indigo-500/[0.03] border border-indigo-500/10">
                <h4 className="font-display font-bold text-xs sm:text-sm text-indigo-700 dark:text-indigo-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 shrink-0" />
                  System Architecture
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {project.architecture}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <h4 className="font-display font-bold text-sm text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-semibold transition-all"
                  >
                    <Github className="w-4 h-4" />
                    GitHub Source
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-indigo-500/10"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
                <button
                  onClick={() => onShare(project)}
                  className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors py-1.5 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  Share Project Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
