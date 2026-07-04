import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Mail, Terminal, Code2, Cpu, Layers, Github, Linkedin, Briefcase } from "lucide-react";
import { personalInfo } from "../data";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [typedText, setTypedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Software Developer",
    "Computer Science Student",
    "Java Developer",
    "Frontend Web Developer"
  ];

  // Particle background logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      alpha: number;
    }> = [];

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 25000));
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          alpha: Math.random() * 0.5 + 0.2
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains("dark");

      particles.forEach((p, index) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(165, 180, 252, ${p.alpha})` // Light purple for dark mode
          : `rgba(79, 70, 229, ${p.alpha * 0.6})`; // Deep indigo for light mode
        ctx.fill();

        // Connect nearby particles with subtle lines
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark
              ? `rgba(165, 180, 252, ${(1 - dist / 120) * 0.15})`
              : `rgba(79, 70, 229, ${(1 - dist / 120) * 0.1})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Custom typing animation logic
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 40 : 100;

    // Pause at the end of typing
    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 2000; // Pause at full word
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 500; // Pause before typing next word
    }

    const timer = setTimeout(() => {
      setTypedText(
        isDeleting
          ? currentRole.substring(0, charIndex - 1)
          : currentRole.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors"
    >
      {/* Background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-100 pointer-events-none grid-pattern-light dark:grid-pattern-dark" />

      {/* Radial glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-30 dark:opacity-20 radial-glow-indigo pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] rounded-full blur-3xl opacity-35 dark:opacity-25 radial-glow-violet pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-12">
        {/* Left column: Bio text */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1.5 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 mb-6 text-xs sm:text-sm font-semibold tracking-wide"
            id="hero-status-tag"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            {personalInfo.status}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-4"
            id="hero-name"
          >
            Hi, I'm <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-indigo-400 bg-clip-text text-transparent">{personalInfo.name}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl font-display font-semibold text-slate-800 dark:text-slate-200 mb-6 h-10"
            id="hero-role-typed"
          >
            A <span className="border-r-2 border-indigo-500 dark:border-indigo-400 pr-1 animate-pulse">{typedText}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8"
            id="hero-tagline"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8"
            id="hero-actions"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-md shadow-indigo-500/10 cursor-pointer group hover:scale-[1.02]"
              id="hero-view-projects"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 dark:bg-white/5 hover:bg-indigo-500/10 text-slate-800 dark:text-slate-200 border border-slate-200/30 dark:border-white/10 font-semibold transition-all cursor-pointer hover:scale-[1.02] glass"
              id="hero-contact-me"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </button>
            <a
              href="#resume-section"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("education"); // Focuses user towards education & cert highlights
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 dark:bg-white/5 hover:bg-indigo-500/10 text-slate-700 dark:text-slate-200 text-sm font-semibold border border-slate-200/30 dark:border-white/10 transition-all cursor-pointer glass"
              id="hero-download-resume"
            >
              <Download className="w-4 h-4" />
              Resume ATS
            </a>
          </motion.div>

          {/* Social connections shortcut */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center lg:justify-start gap-5 text-slate-400 dark:text-slate-500"
            id="hero-socials"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <span className="w-px h-4 bg-slate-300 dark:bg-slate-800" />
            <div className="text-xs flex items-center gap-1.5 font-mono">
              <Terminal className="w-3.5 h-3.5 text-indigo-500" />
              <span>bash --login</span>
            </div>
          </motion.div>
        </div>

        {/* Right column: Avatar & floating widgets */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            id="hero-avatar-container"
          >
            {/* Ambient circular rotators */}
            <div className="absolute inset-0 border-2 border-dashed border-indigo-500/10 dark:border-indigo-400/10 rounded-full animate-spin-slow pointer-events-none" />
            <div className="absolute inset-4 border border-dashed border-violet-500/20 dark:border-violet-400/15 rounded-full animate-spin-slow pointer-events-none [animation-direction:reverse]" />

            {/* Glowing neon ring background behind image */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-3xl blur opacity-30 group-hover:opacity-40 transition duration-1000 animate-pulse-slow" />

            {/* Main Avatar Card Frame */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-900 glass">
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <span className="text-xs font-mono font-medium tracking-widest text-indigo-300 uppercase">Interactive Portfolio</span>
                <p className="font-display font-semibold text-lg">{personalInfo.role}</p>
              </div>
            </div>

            {/* Absolute positioned floating interactive badges */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -left-6 p-3 rounded-2xl shadow-xl border border-slate-200/30 dark:border-white/10 flex items-center gap-2.5 backdrop-blur-md glass"
            >
              <div className="p-1.5 bg-indigo-500/10 rounded-lg text-indigo-600 dark:text-indigo-400">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold text-slate-400">STACK</p>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">MERN</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-16 -right-6 p-3 rounded-2xl shadow-xl border border-slate-200/30 dark:border-white/10 flex items-center gap-2.5 backdrop-blur-md glass"
            >
              <div className="p-1.5 bg-emerald-500/10 rounded-lg text-emerald-600 dark:text-emerald-400">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold text-slate-400">ARCHITECTURE</p>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Rest API / OSINT</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 left-12 px-4 py-2.5 rounded-2xl shadow-xl border border-slate-200/30 dark:border-white/10 flex items-center gap-2 backdrop-blur-md glass"
            >
              <Briefcase className="w-4 h-4 text-violet-500" />
              <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Fresher</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator banner at bottom of hero */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5">
        <span className="text-[10px] font-mono font-semibold tracking-widest text-slate-400 uppercase">Scroll To Explore</span>
        <button
          onClick={() => scrollToSection("about")}
          className="w-6 h-10 rounded-full border-2 border-slate-400/40 flex justify-center p-1.5 cursor-pointer hover:border-indigo-500 transition-colors"
          aria-label="Scroll Down"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-indigo-500 dark:bg-indigo-400 rounded-full"
          />
        </button>
      </div>
    </section>
  );
}
