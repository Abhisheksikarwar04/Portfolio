import { motion } from "motion/react";
import { Briefcase, Calendar, Sparkles, Trophy, CheckCircle2 } from "lucide-react";
import { experienceData } from "../data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 bg-transparent transition-colors overflow-hidden"
    >
      {/* Background visual shapes */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full blur-3xl opacity-20 dark:opacity-10 bg-indigo-500 pointer-events-none" />

      {/* Grid background overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.02] dark:opacity-[0.01] pointer-events-none grid-pattern-light dark:grid-pattern-dark" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1.5 px-3 py-1 bg-indigo-500/10 rounded-full text-indigo-600 dark:text-indigo-400 font-mono text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            History
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white mb-4"
          >
            Professional Experience
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="h-1.5 bg-indigo-500 rounded-full"
          />
        </div>

        {/* Experience Vertical Timeline layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical core line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 pointer-events-none" />

          {/* Timeline Cards wrapper */}
          <div className="flex flex-col gap-12">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-stretch w-full ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                  id={`experience-node-${exp.id}`}
                >
                  {/* Timeline bullet pointer */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="p-2 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-500 shadow-md flex items-center justify-center text-indigo-600 dark:text-indigo-400"
                    >
                      <Briefcase className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Card Container Column */}
                  <div className="w-full md:w-[46%] pl-12 md:pl-0 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="p-6 sm:p-8 rounded-3xl glass hover:scale-[1.01] hover:shadow-lg transition-all duration-300 flex flex-col gap-4 relative group"
                    >
                      {/* Accent corner light */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 dark:bg-indigo-500/[0.02] rounded-tr-2xl rounded-bl-3xl pointer-events-none group-hover:scale-105 transition-transform" />

                      {/* Role & Duration Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                        <div>
                          <h3 className="font-display font-extrabold text-lg text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {exp.role}
                          </h3>
                          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                            {exp.company}
                          </p>
                        </div>
                        <div className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 dark:text-slate-300 bg-white/10 dark:bg-white/5 px-2.5 py-1 rounded-md self-start sm:self-center border border-slate-200/20 dark:border-white/10">
                          <Calendar className="w-3 h-3" />
                          {exp.duration}
                        </div>
                      </div>

                      {/* Responsibilities list */}
                      <div>
                        <h4 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-2">
                          Key Tasks & Execution
                        </h4>
                        <ul className="flex flex-col gap-2">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements section */}
                      {exp.achievements.length > 0 && (
                        <div className="p-3 bg-indigo-500/5 rounded-xl border border-indigo-500/10">
                          <h4 className="text-xs font-mono font-bold tracking-wider text-indigo-700 dark:text-indigo-400 uppercase mb-1.5 flex items-center gap-1">
                            <Trophy className="w-3 h-3 shrink-0 text-amber-500 fill-amber-500/20" />
                            Highlights & Impact
                          </h4>
                          <ul className="flex flex-col gap-1">
                            {exp.achievements.map((ach, i) => (
                              <li key={i} className="text-xs text-slate-600 dark:text-slate-300">
                                • {ach}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Tech Stack used pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/10 dark:bg-white/5 text-slate-500 dark:text-slate-300 border border-slate-200/50 dark:border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer column on opposite side for visual balance */}
                  <div className="hidden md:block w-[46%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
