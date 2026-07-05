import { motion } from "motion/react";
import { GraduationCap, Calendar, Sparkles, Award, BookOpen } from "lucide-react";
import { educationData } from "../data";
export default function Education() {
  return <section
    id="education"
    className="relative py-24 bg-transparent transition-colors overflow-hidden"
  >
      {
    /* Background radial glows */
  }
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 dark:opacity-10 bg-indigo-500 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {
    /* Section Heading */
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
            Academia
          </motion.div>
          <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white mb-4"
  >
            Education & Coursework
          </motion.h2>
          <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: "60px" }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="h-1.5 bg-indigo-500 rounded-full"
  />
        </div>

        {
    /* Education Timeline */
  }
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          {educationData.map((edu) => <motion.div
    key={edu.id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="relative p-6 sm:p-8 rounded-3xl glass hover:scale-[1.01] hover:shadow-lg transition-all duration-300 flex flex-col gap-5 group"
  >
              {
    /* Corner ambient visual light */
  }
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 dark:bg-indigo-500/[0.01] rounded-tr-2xl rounded-bl-full pointer-events-none" />

              {
    /* Header: University logo icon & Title info */
  }
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/50 dark:border-slate-800/60 pb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform flex items-center justify-center self-start sm:self-center">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-800 dark:text-slate-100">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                      {edu.university}
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      {edu.college}
                    </p>
                  </div>
                </div>

                {
    /* Date highlight badge */
  }
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-500/5 dark:bg-indigo-500/10 px-3 py-1.5 rounded-xl border border-indigo-500/10 self-start sm:self-center shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.year}
                </div>
              </div>

              {
    /* GPA & Merits */
  }
              <div className="flex items-center gap-3">
                <div className="p-1 px-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-bold flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>CGPA: {edu.cgpa}</span>
                </div>
                <span className="text-xs text-slate-400 font-medium">Honor Roll / Dean's List equivalent</span>
              </div>

              {
    /* Coursework list tags */
  }
              <div>
                <h4 className="text-xs font-mono font-bold tracking-wider text-slate-400 uppercase mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                  Specialized Technical Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => <span
    key={course}
    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/10 dark:bg-white/5 text-slate-700 dark:text-slate-200 border border-slate-200/50 dark:border-white/10 shadow-sm hover:border-indigo-500/30 transition-colors duration-200"
  >
                      {course}
                    </span>)}
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
