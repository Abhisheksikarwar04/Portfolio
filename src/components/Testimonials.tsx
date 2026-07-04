import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Quote, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { testimonialsData } from "../data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const activeTest = testimonialsData[activeIndex];

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-transparent transition-colors overflow-hidden"
    >
      {/* Background decoration elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full blur-3xl opacity-25 dark:opacity-10 bg-indigo-500 pointer-events-none" />

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
            Endorsements
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white mb-4"
          >
            Manager & Peer Endorsements
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="h-1.5 bg-indigo-500 rounded-full"
          />
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto px-4 md:px-12">
          {/* Main testimonial card with AnimatePresence */}
          <div className="relative p-6 sm:p-10 rounded-3xl glass shadow-xl flex flex-col md:flex-row items-center gap-8 min-h-[280px]">
            {/* Quote watermark icon */}
            <Quote className="absolute top-6 right-8 w-20 h-20 text-indigo-500/[0.04] dark:text-indigo-400/[0.02] pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col md:flex-row items-center gap-8 w-full"
              >
                {/* Author Headshot Avatar */}
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-indigo-500 shrink-0 shadow-md">
                  <img
                    src={activeTest.avatar}
                    alt={activeTest.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Feedback content */}
                <div className="flex flex-col flex-1">
                  <Quote className="w-8 h-8 text-indigo-500/10 mb-2" />
                  <p className="text-slate-600 dark:text-slate-300 italic text-sm sm:text-base leading-relaxed mb-4">
                    "{activeTest.feedback}"
                  </p>
                  <div>
                    <h4 className="font-display font-extrabold text-sm sm:text-base text-slate-800 dark:text-slate-100">
                      {activeTest.name}
                    </h4>
                    <p className="text-xs font-semibold text-slate-400">
                      {activeTest.designation}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls arrows */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-slate-200/30 dark:border-white/10 bg-white/10 dark:bg-white/5 text-slate-500 dark:text-slate-300 hover:text-indigo-500 cursor-pointer shadow-sm hover:scale-105 transition-all glass"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
                    activeIndex === i ? "bg-indigo-600 w-4" : "bg-slate-300 dark:bg-slate-800"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full border border-slate-200/30 dark:border-white/10 bg-white/10 dark:bg-white/5 text-slate-500 dark:text-slate-300 hover:text-indigo-500 cursor-pointer shadow-sm hover:scale-105 transition-all glass"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
