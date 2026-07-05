import { useState, useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import { achievementsStats } from "../data";
export default function Achievements() {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section
    ref={containerRef}
    className="relative py-16 bg-transparent transition-colors border-y border-slate-200/20 dark:border-white/10"
  >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {
    /* Statistics Grid */
  }
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {achievementsStats.map((stat, i) => <div
    key={stat.key}
    className="flex flex-col items-center text-center p-5 rounded-3xl glass hover:scale-[1.03] transition-all duration-300 group shadow-md"
  >
              <div className="p-1.5 rounded-lg bg-indigo-500/5 text-indigo-500 dark:text-indigo-400 mb-2 group-hover:scale-110 transition-transform">
                <Sparkles className="w-4 h-4" />
              </div>

              {
    /* Dynamic Animated Counter */
  }
              <Counter val={stat.value} trigger={visible} />

              <span className="text-xs font-mono font-bold tracking-wider text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors uppercase mt-1">
                {stat.label}
              </span>
            </div>)}
        </div>
      </div>
    </section>;
}
function Counter({ val, trigger }) {
  const [count, setCount] = useState(0);
  const numValue = parseInt(val.replace(/[^0-9]/g, ""), 10);
  const suffix = val.replace(/[0-9]/g, "");
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const duration = 1500;
    const increment = Math.ceil(numValue / (duration / 16));
    const timer = setInterval(() => {
      start += increment;
      if (start >= numValue) {
        setCount(numValue);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, numValue]);
  return <p className="text-3xl sm:text-4xl font-display font-black text-slate-900 dark:text-white leading-none">
      {trigger ? count : 0}
      <span className="text-indigo-500 font-medium ml-0.5">{suffix}</span>
    </p>;
}
