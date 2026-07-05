import { useState } from "react";
import { motion } from "motion/react";
import { Code2, Server, Database, Settings, Terminal, Cloud, Sparkles, Check } from "lucide-react";
import { skillsData } from "../data";
export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const categoryIcons = {
    Frontend: <Code2 className="w-5 h-5 text-indigo-500" />,
    Backend: <Server className="w-5 h-5 text-emerald-500" />,
    Databases: <Database className="w-5 h-5 text-amber-500" />,
    "Programming Languages": <Terminal className="w-5 h-5 text-rose-500" />,
    Tools: <Settings className="w-5 h-5 text-violet-500" />,
    Deployment: <Cloud className="w-5 h-5 text-sky-500" />
  };
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  return <section
    id="skills"
    className="relative py-24 bg-transparent transition-colors overflow-hidden"
  >
      {
    /* Visual glowing accents */
  }
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-20 dark:opacity-10 bg-indigo-500 pointer-events-none" />

      {
    /* Grid Pattern overlay */
  }
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.015] pointer-events-none grid-pattern-light dark:grid-pattern-dark" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {
    /* Section Header */
  }
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-1.5 px-3 py-1 bg-indigo-500/10 rounded-full text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider mb-4"
  >
            <Sparkles className="w-3.5 h-3.5" />
            Competencies
          </motion.div>
          <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white mb-4"
  >
            Technical Stack & Expertise
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base mb-6">
            A comprehensive overview of my tech stacks, systems proficiencies, and developer tooling setup.
          </p>
          <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: "60px" }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="h-1.5 bg-indigo-500 rounded-full"
  />
        </div>

        {
    /* Skills Grid */
  }
        <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  >
          {Object.entries(skillsData).map(([category, skills]) => <motion.div
    key={category}
    variants={cardVariants}
    className="p-6 rounded-3xl glass hover:scale-[1.01] hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
  >
              <div>
                {
    /* Category Header */
  }
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950 group-hover:bg-indigo-500/5 transition-colors">
                      {categoryIcons[category]}
                    </div>
                    <h3 className="font-display font-bold text-base text-slate-800 dark:text-slate-200">
                      {category}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-slate-400 group-hover:text-indigo-500 transition-colors uppercase">
                    {skills.length} Items
                  </span>
                </div>

                {
    /* Skills list inside category */
  }
                <div className="flex flex-col gap-4">
                  {skills.map((skill) => <div
    key={skill.name}
    className="relative"
    onMouseEnter={() => setHoveredSkill(skill.name)}
    onMouseLeave={() => setHoveredSkill(null)}
  >
                      {
    /* Name and percentage label */
  }
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                          {hoveredSkill === skill.name && <motion.span
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    className="w-1.5 h-1.5 bg-indigo-500 rounded-full"
  />}
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono font-medium text-slate-400 dark:text-slate-500">
                          {skill.level}%
                        </span>
                      </div>

                      {
    /* Progress bar container */
  }
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: `${skill.level}%` }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
    className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 dark:from-indigo-400 dark:to-violet-400 rounded-full"
  />
                      </div>
                    </div>)}
                </div>
              </div>

              {
    /* Card Footer highlights */
  }
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-2 text-[10px] font-mono text-slate-400">
                <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                <span>Production-ready stack capability</span>
              </div>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
}
