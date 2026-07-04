import { motion } from "motion/react";
import { Sparkles, Terminal, Shield, Cpu, Award, Zap, Heart } from "lucide-react";
import { personalInfo } from "../data";

export default function About() {
  const values = [
    {
      icon: <Terminal className="w-5 h-5 text-indigo-500" />,
      title: "Clean Code Champion",
      desc: "Striving for semantic correctness, high type safety, and self-documenting code systems."
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "Performance First",
      desc: "Zero tolerant to layout thrashing, excessive paint calls, or unoptimized database requests."
    },
    {
      icon: <Shield className="w-5 h-5 text-emerald-500" />,
      title: "Secure-by-Design",
      desc: "Adopting strict sanitization, encryption standards, and threat model safeguards."
    }
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-transparent transition-colors overflow-hidden"
    >
      {/* Background shapes */}
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full blur-3xl opacity-20 dark:opacity-10 bg-indigo-500 pointer-events-none" />

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
            Background
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white mb-4"
          >
            About My Professional Journey
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="h-1.5 bg-indigo-500 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Summary and Career Objectives */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl glass hover:scale-[1.01] hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-display font-semibold text-xl text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-500" />
                Who Am I?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base mb-6">
                {personalInfo.summary}
              </p>
              <h4 className="font-display font-semibold text-md text-indigo-600 dark:text-indigo-400 mb-2">
                Career Objective
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {personalInfo.objective}
              </p>
            </motion.div>

            {/* Specialization List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="p-8 rounded-3xl glass hover:scale-[1.01] hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-display font-semibold text-xl text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-indigo-500" />
                Areas of Specialization
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personalInfo.specializations.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{spec}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Values & Soft Skills */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Core Values / Code Philosophies */}
            <div className="flex flex-col gap-4">
              <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2 uppercase tracking-wide text-xs sm:text-sm">
                Engineering Values
              </h3>
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 p-4 rounded-2xl bg-white/5 dark:bg-slate-950/20 hover:bg-white/10 dark:hover:bg-white/5 border border-slate-100/30 dark:border-white/5 hover:border-indigo-500/20 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/60 self-start shrink-0">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-slate-800 dark:text-slate-200 mb-1">{v.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-3xl glass mt-2 hover:scale-[1.01] hover:shadow-lg transition-all duration-300"
            >
              <h4 className="font-display font-semibold text-sm text-indigo-700 dark:text-indigo-400 mb-4 flex items-center gap-1.5">
                <Heart className="w-4 h-4 fill-indigo-500/20" />
                Leadership & Collaboration
              </h4>
              <div className="flex flex-wrap gap-2">
                {personalInfo.softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/10 dark:bg-white/5 text-slate-700 dark:text-slate-200 shadow-sm border border-slate-200/50 dark:border-white/10 hover:border-indigo-500/30 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
