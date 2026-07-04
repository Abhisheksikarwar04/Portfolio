import { motion } from "motion/react";
import { Sparkles, Calendar, Clock, ArrowUpRight } from "lucide-react";
import { blogPostsData } from "../data";

export default function Blog() {
  return (
    <section
      id="blog"
      className="relative py-24 bg-transparent transition-colors overflow-hidden"
    >
      {/* Background shape */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 dark:opacity-10 bg-indigo-500 pointer-events-none" />

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
            Insights
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white mb-4"
          >
            Technical Blog & Writing
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base mb-6">
            Documenting engineering design choices, API migrations, and front-end performance profiles.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="h-1.5 bg-indigo-500 rounded-full"
          />
        </div>

        {/* Blog Posts Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="p-4 rounded-3xl glass hover:scale-[1.01] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Cover Image representation */}
                <div className="relative h-44 rounded-xl overflow-hidden mb-4 shrink-0 border border-slate-100 dark:border-slate-800">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                </div>

                {/* Article Metadata line */}
                <div className="flex items-center gap-3 text-[10px] font-mono text-slate-400 mb-2.5">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-indigo-500" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-indigo-500" />
                    {post.readTime}
                  </span>
                </div>

                {/* Article title */}
                <h3 className="font-display font-bold text-base text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>

              {/* Tags & Action links footer */}
              <div>
                {/* Category tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/10 dark:bg-white/5 text-slate-400 dark:text-slate-300 border border-slate-200/30 dark:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/60 pt-3.5">
                  <span className="text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400">
                    Read Publication
                  </span>
                  <div className="p-1 rounded-lg bg-slate-50 dark:bg-slate-950 group-hover:bg-indigo-500/10 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
