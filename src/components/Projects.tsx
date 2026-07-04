import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Sparkles, FolderOpen, Github, ExternalLink, ArrowRight, Eye } from "lucide-react";
import { projectsData } from "../data";
import { Project } from "../types";
import ProjectModal from "./ProjectModal";

interface ProjectsProps {
  addToast: (message: string, type: "success" | "error" | "info") => void;
}

export default function Projects({ addToast }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ["All", "MERN", "React", "Backend", "Full Stack", "Java", "Database"];

  // Filter and Search Memoization
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" ||
        project.category.toLowerCase() === selectedCategory.toLowerCase();

      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleShareProject = (project: Project) => {
    const shareUrl = `${window.location.origin}/#projects?id=${project.id}`;
    navigator.clipboard.writeText(shareUrl).then(
      () => {
        addToast(`Share link for "${project.title}" copied to clipboard!`, "success");
      },
      () => {
        addToast("Unable to copy link to clipboard.", "error");
      }
    );
  };

  return (
    <section
      id="projects"
      className="relative py-24 bg-transparent transition-colors"
    >
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 dark:opacity-10 bg-indigo-500 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1.5 px-3 py-1 bg-indigo-500/10 rounded-full text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Portfolio
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white mb-4"
          >
            Featured Engineering Projects
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base mb-6">
            Explore deep architecture outlines, algorithmic systems, and production builds resolving technical friction.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="h-1.5 bg-indigo-500 rounded-full"
          />
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto order-2 md:order-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/10"
                    : "bg-white/10 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200/20 dark:border-white/10"
                }`}
                id={`project-filter-${cat.toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar input */}
          <div className="relative w-full md:w-72 order-1 md:order-2">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search projects or tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200/30 dark:border-white/15 bg-white/10 dark:bg-white/5 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all shadow-inner glass"
              id="project-search-input"
            />
          </div>
        </div>

        {/* Projects Grid Grid layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          id="project-cards-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`group relative rounded-3xl overflow-hidden glass transition-all hover:shadow-2xl hover:scale-[1.01] duration-300 ${
                  project.featured
                    ? "border-indigo-500/30 dark:border-indigo-500/30 shadow-md shadow-indigo-500/[0.05]"
                    : ""
                }`}
                id={`project-card-${project.id}`}
              >
                {/* Featured Ribbon badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 bg-indigo-600 text-white rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    <Sparkles className="w-3 h-3 animate-pulse" />
                    Featured
                  </div>
                )}

                {/* Card Header Cover Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle hover reveal overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="px-4 py-2 bg-white text-slate-900 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all cursor-pointer hover:scale-105"
                    >
                      <Eye className="w-4 h-4" />
                      View Blueprint
                    </button>
                  </div>
                </div>

                {/* Card Content body */}
                <div className="p-6 flex flex-col justify-between h-[250px]">
                  <div>
                    {/* Category tag */}
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-1 block">
                      {project.category}
                    </span>
                    <h3 className="font-display font-bold text-xl text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2.5">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Footer tags & details CTA */}
                  <div>
                    {/* Technology list tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-white/15 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Action buttons footer links */}
                    <div className="flex items-center justify-between border-t border-slate-200/40 dark:border-slate-800/60 pt-3.5">
                      <button
                        onClick={() => setActiveProjectModal(project)}
                        className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 cursor-pointer group/link hover:underline"
                      >
                        Deep Architecture
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </button>

                      <div className="flex items-center gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                          title="GitHub Code"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                          title="Live Application Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Fallback */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <FolderOpen className="w-12 h-12 text-slate-300 dark:text-slate-700 mb-4 animate-bounce" />
            <h4 className="font-display font-semibold text-lg text-slate-800 dark:text-slate-200 mb-1">
              No Projects Found
            </h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm">
              We couldn't find any blueprints matching "{searchQuery}" under "{selectedCategory}" tag.
            </p>
          </motion.div>
        )}
      </div>

      {/* Embedded Project Details Modal */}
      <AnimatePresence>
        {activeProjectModal && (
          <ProjectModal
            project={activeProjectModal}
            onClose={() => setActiveProjectModal(null)}
            onShare={handleShareProject}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
