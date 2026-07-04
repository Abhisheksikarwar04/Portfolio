import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code2 } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
  key?: string;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [text, setText] = useState("Initializing system...");
  const [visible, setVisible] = useState(true);

  const statuses = [
    "Initializing system...",
    "Querying telemetry cores...",
    "Parsing codebase schemas...",
    "Connecting live GitHub channels...",
    "Ready."
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      if (index < statuses.length) {
        setText(statuses[index]);
      } else {
        clearInterval(interval);
        setVisible(false);
        setTimeout(onComplete, 400); // Complete after fade-out transition
      }
    }, 450);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white select-none"
        >
          {/* Glowing central logo */}
          <div className="relative mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute -inset-4 rounded-full border-2 border-dashed border-indigo-500/20"
            />
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center shadow-lg shadow-indigo-500/10"
            >
              <Code2 className="w-8 h-8" />
            </motion.div>
          </div>

          {/* Core system message */}
          <div className="h-6">
            <motion.p
              key={text}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-xs font-mono tracking-widest text-indigo-300 font-bold uppercase"
            >
              {text}
            </motion.p>
          </div>

          {/* Simple progress bar bar */}
          <div className="w-48 h-1 bg-slate-900 rounded-full mt-4 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="h-full bg-indigo-500"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
