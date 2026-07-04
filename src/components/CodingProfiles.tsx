import { motion } from "motion/react";
import { Sparkles, Award, Target, Trophy, ExternalLink } from "lucide-react";
import { codingProfilesData } from "../data";

export default function CodingProfiles() {
  return (
    <section
      id="coding-profiles"
      className="relative py-24 bg-transparent transition-colors overflow-hidden"
    >
      {/* Background visual shapes */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 dark:opacity-10 bg-indigo-500 pointer-events-none" />

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
            <Target className="w-3.5 h-3.5 animate-pulse" />
            Competitive
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white mb-4"
          >
            Coding Profiles & Algorithms
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base mb-6">
            Demonstrated problem-solving capabilities, technical badges, and algorithm scores across coding platforms.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="h-1.5 bg-indigo-500 rounded-full"
          />
        </div>

        {/* Coding Profiles Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {codingProfilesData.map((profile) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-3xl glass hover:scale-[1.01] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              id={`coding-profile-${profile.id}`}
            >
              {/* Corner badge overlay */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/5 dark:bg-indigo-500/[0.01] rounded-tr-2xl rounded-bl-3xl pointer-events-none group-hover:scale-105 transition-transform" />

              <div>
                {/* Platform Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-4">
                  <div>
                    <h3 className="font-display font-extrabold text-lg text-slate-800 dark:text-slate-100">
                      {profile.platform}
                    </h3>
                    <p className="text-xs font-mono text-slate-400">@{profile.username}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                    <Trophy className="w-4 h-4 text-amber-500 fill-amber-500/20" />
                  </div>
                </div>

                {/* Score / Solved telemetries */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">Rank / Score</span>
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300 truncate">
                      {profile.rating}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">DSA Solved</span>
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
                      {profile.solved}+ Problems
                    </p>
                  </div>
                </div>

                {/* Badges and achievements list */}
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Platform Badges
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {profile.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-2.5 py-1 rounded bg-white/10 dark:bg-white/5 text-slate-500 dark:text-slate-300 border border-slate-200/50 dark:border-white/10 text-[10px] font-semibold"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Link */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {profile.rank}
                </span>

                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
                >
                  View Profile
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
