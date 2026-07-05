import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Copy, Check, Share2, Loader2, Linkedin, Github } from "lucide-react";
import { personalInfo } from "../data";
export default function Contact({ addToast }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full Name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email Address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email.";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required.";
    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      addToast("Your transmission was dispatched successfully! Alex will reach back shortly.", "success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email).then(() => {
      setCopied(true);
      addToast("Email copied to clipboard!", "success");
      setTimeout(() => setCopied(false), 2e3);
    });
  };
  const handleSharePortfolio = () => {
    const shareUrl = window.location.origin;
    navigator.clipboard.writeText(shareUrl).then(() => {
      addToast("Portfolio link copied to clipboard! Ready to share.", "success");
    });
  };
  return <section
    id="contact"
    className="relative py-24 bg-transparent transition-colors overflow-hidden"
  >
      {
    /* Background visual shapes */
  }
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full blur-3xl opacity-25 dark:opacity-10 bg-indigo-500 pointer-events-none" />

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
            <Mail className="w-3.5 h-3.5" />
            Connect
          </motion.div>
          <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white mb-4"
  >
            Get In Touch
          </motion.h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base mb-6">
            Let's discuss microservices migration, secure frontend integration, or custom agile workflows.
          </p>
          <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: "60px" }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="h-1.5 bg-indigo-500 rounded-full"
  />
        </div>

        {
    /* Contact panel split grid */
  }
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {
    /* Left Panel: Details Cards & Copy button */
  }
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white uppercase tracking-wider text-xs sm:text-sm mb-2">
              Contact Channels
            </h3>

            {
    /* Location card */
  }
            <div className="flex gap-4 p-5 rounded-3xl glass hover:scale-[1.01] hover:shadow-lg transition-all duration-300">
              <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-600 dark:text-indigo-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wide">Location</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{personalInfo.location}</p>
              </div>
            </div>

            {
    /* Email copying card */
  }
            <div className="flex justify-between items-center p-5 rounded-3xl glass hover:scale-[1.01] hover:shadow-lg transition-all duration-300 group">
              <div className="flex gap-4">
                <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-600 dark:text-indigo-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wide">Email</p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate pr-2">
                    {personalInfo.email}
                  </p>
                </div>
              </div>
              <button
    onClick={handleCopyEmail}
    className="p-2.5 rounded-xl bg-white/10 dark:bg-white/5 border border-slate-200/30 dark:border-white/10 hover:border-indigo-500/30 transition-all text-slate-400 hover:text-indigo-500 shrink-0 cursor-pointer glass"
    title="Copy Email"
    id="contact-copy-email-btn"
  >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {
    /* Phone card */
  }
            <div className="flex gap-4 p-5 rounded-3xl glass hover:scale-[1.01] hover:shadow-lg transition-all duration-300">
              <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-600 dark:text-indigo-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wide">Call Me</p>
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{personalInfo.phone}</p>
              </div>
            </div>

            {
    /* Share and Social Actions */
  }
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
    onClick={handleSharePortfolio}
    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 dark:bg-white/5 border border-slate-200/30 dark:border-white/10 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-indigo-500/20 transition-all cursor-pointer glass"
    id="contact-share-portfolio-btn"
  >
                <Share2 className="w-4 h-4" />
                Share Portfolio
              </button>

              <div className="flex gap-3 justify-center">
                <a
    href={personalInfo.github}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-xl bg-white/10 dark:bg-white/5 border border-slate-200/30 dark:border-white/10 text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer glass"
    aria-label="GitHub Profile Link"
  >
                  <Github className="w-5 h-5" />
                </a>
                <a
    href={personalInfo.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-xl bg-white/10 dark:bg-white/5 border border-slate-200/30 dark:border-white/10 text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer glass"
    aria-label="LinkedIn Profile Link"
  >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {
    /* Right Panel: Interactive Validation Form */
  }
          <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass shadow-xl hover:scale-[1.005] hover:shadow-2xl transition-all duration-300"
  >
            <h3 className="font-display font-bold text-slate-800 dark:text-slate-100 text-lg mb-6 flex items-center gap-1.5">
              <Send className="w-5 h-5 text-indigo-500" />
              Secure Message Gateway
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5" id="contact-gate-form">
              {
    /* Row 1: Name and Email */
  }
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mb-1.5">
                    Full Name
                  </label>
                  <input
    type="text"
    id="name"
    name="name"
    value={formData.name}
    onChange={handleInputChange}
    placeholder="Jane Doe"
    className={`w-full px-4 py-2.5 rounded-xl border bg-white/10 dark:bg-white/5 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all glass ${errors.name ? "border-rose-500" : "border-slate-200/30 dark:border-white/10"}`}
  />
                  {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mb-1.5">
                    Email Address
                  </label>
                  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleInputChange}
    placeholder="jane@example.com"
    className={`w-full px-4 py-2.5 rounded-xl border bg-white/10 dark:bg-white/5 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all glass ${errors.email ? "border-rose-500" : "border-slate-200/30 dark:border-white/10"}`}
  />
                  {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              {
    /* Subject */
  }
              <div>
                <label htmlFor="subject" className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mb-1.5">
                  Subject
                </label>
                <input
    type="text"
    id="subject"
    name="subject"
    value={formData.subject}
    onChange={handleInputChange}
    placeholder="Inquiry about full-stack role"
    className={`w-full px-4 py-2.5 rounded-xl border bg-white/10 dark:bg-white/5 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all glass ${errors.subject ? "border-rose-500" : "border-slate-200/30 dark:border-white/10"}`}
  />
                {errors.subject && <p className="text-[11px] text-rose-500 mt-1">{errors.subject}</p>}
              </div>

              {
    /* Message */
  }
              <div>
                <label htmlFor="message" className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mb-1.5">
                  Message
                </label>
                <textarea
    id="message"
    name="message"
    rows={4}
    value={formData.message}
    onChange={handleInputChange}
    placeholder="Hey Alex, let's connect..."
    className={`w-full px-4 py-2.5 rounded-xl border bg-white/10 dark:bg-white/5 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none glass ${errors.message ? "border-rose-500" : "border-slate-200/30 dark:border-white/10"}`}
  />
                {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
              </div>

              {
    /* Submit CTA button */
  }
              <button
    type="submit"
    disabled={submitting}
    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all shadow-md shadow-indigo-500/10 cursor-pointer hover:scale-[1.01] disabled:opacity-50"
    id="contact-form-submit-btn"
  >
                {submitting ? <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Dispatching Transmission...
                  </> : <>
                    <Send className="w-4 h-4" />
                    Submit Message
                  </>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
}
