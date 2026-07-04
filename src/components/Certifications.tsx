import { motion } from "motion/react";
import { Sparkles, Award, Calendar, ExternalLink } from "lucide-react";
import { certificationsData } from "../data";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative py-24 bg-transparent transition-colors overflow-hidden"
    >
      {/* Background visual details */}
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full blur-3xl opacity-20 dark:opacity-10 bg-indigo-500 pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.015] pointer-events-none grid-pattern-light dark:grid-pattern-dark" />

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
            Accreditation
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white mb-4"
          >
            Certifications & Badges
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="h-1.5 bg-indigo-500 rounded-full"
          />
        </div>

        {/* Certifications responsive grid cards layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="p-5 rounded-3xl glass hover:scale-[1.01] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              id={`cert-card-${cert.id}`}
            >
              <div>
                {/* Visual cover representation */}
                <div className="relative h-40 rounded-xl overflow-hidden mb-4 shrink-0 border border-slate-100 dark:border-slate-800">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[40%] group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 p-1.5 bg-indigo-600 text-white rounded-lg">
                    <Award className="w-4 h-4" />
                  </div>
                </div>

                {/* Issuer & Title information */}
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 group-hover:text-indigo-500 transition-colors mb-1.5 block">
                  {cert.issuer}
                </span>
                <h3 className="font-display font-bold text-base text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-3 leading-snug">
                  {cert.title}
                </h3>
              </div>

              {/* Card Footer actions */}
              <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/60 pt-3.5 mt-2">
                <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Issued: {cert.date}</span>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Verify
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
