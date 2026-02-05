"use client";

import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { ArrowUpRight, Github, Linkedin, FileText, Mail, Send } from "lucide-react";
import { journey } from "@/data/journey";
import { GraduationCap, Code, Terminal, Calendar } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export default function Home() {
  const seExperience = journey.filter(item => 
    item.category === "education" || item.category === "independent"
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "7475854c-bc21-463f-b004-d558b89a4dc4"); 

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      setStatus("error");
    }
    setIsSubmitting(false);
  }

  return (
    <div className="space-y-32"> 
      
      <div className="space-y-8 md:space-y-12">
       <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
        <section className="flex flex-col-reverse md:flex-row items-center justify-between pt-12 md:pt-8 pb-0 gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-medium text-slate-500 font-mono">
                Hi there 👋 I'm
              </h2>
              <h1 className="text-6xl sm:text-7xl md:text-7xl font-extrabold tracking-tight text-foreground min-h-[160px] sm:min-h-[120px] md:min-h-0 leading-[1.1] flex items-center justify-center md:justify-start">
                <Typewriter
                  options={{
                    strings: [
                      "Mihiranga Dissanayake",
                      "Full-Stack Software Engineer",
                      "Enterprise Java Expert"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </h1>
            </div>
            
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mx-auto md:mx-0">
              Architecting scalable enterprise systems and high-performance applications. 
              I turn complex business logic into seamless digital experiences.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Link href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all">
                <FileText className="w-5 h-5" />
                Resume
              </Link>
              <div className="flex gap-3">
                <Link href="https://linkedin.com/in/mihiranga-dev" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-blue-600 text-white hover:scale-110 transition-transform shadow-lg shadow-blue-500/20"><Linkedin className="w-5 h-5"/></Link>
                <Link href="https://github.com/mihiranga-dev" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800 dark:bg-slate-700 text-white hover:scale-110 transition-transform shadow-lg shadow-black/20"><Github className="w-5 h-5"/></Link>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-secondary rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white dark:border-dark shadow-2xl">
              <Image src="/profile.jpg" alt="Mihiranga Dissanayake" fill className="object-cover" priority />
            </div>
          </div>
        </section>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-gray-800 bg-slate-50/50 dark:bg-dark/50 backdrop-blur-sm">
        <div className="text-center">
          <span className="block text-4xl font-extrabold text-foreground hover:scale-110 cursor-default hover:text-primary transition-colors">1+</span>
          <span className="text-[13px] uppercase tracking-[0.2em] text-slate-500 font-semibold">Years Experience</span>
        </div>
        <div className="text-center">
          <span className="block text-4xl font-extrabold text-foreground hover:scale-110 cursor-default hover:text-primary transition-colors">20+</span>
          <span className="text-[13px] uppercase tracking-[0.2em] text-slate-500 font-semibold">GitHub Repos</span>
        </div>
        <div className="text-center">
          <span className="block text-4xl font-extrabold text-foreground hover:scale-110 cursor-default hover:text-primary transition-colors">150+</span>
          <span className="text-[13px] uppercase tracking-[0.2em] text-slate-500 font-semibold">Contributions</span>
        </div>
        <div className="text-center">
          <span className="block text-4xl font-extrabold text-foreground hover:scale-110 cursor-default hover:text-primary transition-colors">5+</span>
          <span className="text-[13px] uppercase tracking-[0.2em] text-slate-500 font-semibold">Full-Stack Projects</span>
        </div>
      </div>
      </motion.section>

    <section className="pb-8">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Featured <span className="text-primary/80">Works</span>
        </h2>
        <Link href="/projects" className="text-sm md:text-base text-primary hover:scale-110 transition-transform font-medium">
            View all projects
        </Link>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id} 
            variants={itemVariants}
            className="flex"
          >
            <Link
              href={project.link}
              className="group relative flex flex-col h-full w-full p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-dark/50 hover:border-primary transition-all duration-300 hover:scale-[1.02]"          
            >
              <div className="absolute top-8 right-8 text-gray-400 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                <ArrowUpRight className="w-6 h-6" />
              </div>

              <div className="flex flex-col h-full">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex-grow" />

                <div className="flex flex-wrap gap-2 pt-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 transition-all duration-300 hover:scale-105 cursor-default hover:scale-105 transition-transform shadow-lg shadow-blue-500/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>

    <section className="pb-4">
      <div className="mb-10">
        <h2 className="text-3xl font-black text-foreground">
          Technical <span className="text-primary">Stack</span></h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          The tools and technologies I use to bring solution to life.
        </p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-4">
            <h3 className="text-xl font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skills) => (
                <span
                  key={skills}
                  className="px-3 py-1.5 text-sm font-medium rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-dark/30 text-slate-700 dark:text-slate-300 transition-all 
                  duration-300 hover:border-primary hover:text-primary hover:scale-105 transition-transform shadow-lg shadow-blue-500/10 cursor-default"
                >
                  {skills}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      </motion.div>
    </section>

    <section className="pb-10">
        <div className="mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Experience
          </h2>
        </div>

        <div className="space-y-0">
          {seExperience.map((item, index) => (
            <div key={item.id} className="group relative flex gap-8 pb-12 last:pb-0">
              
              {index !== seExperience.length - 1 && (
                <div className="absolute left-[19px] top-10 w-[2px] h-full bg-slate-200 dark:bg-gray-800 group-hover:bg-primary/30 transition-colors" />
              )}

              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 dark:border-gray-800 bg-white dark:bg-dark shadow-sm group-hover:border-primary transition-colors">
                {item.category === "education" ? (
                  <GraduationCap className="h-5 w-5 text-slate-500 group-hover:text-primary transition-colors" />
                ) : (
                  <Terminal className="h-5 w-5 text-slate-500 group-hover:text-primary transition-colors" />
                )}
              </div>

              <div className="flex flex-1 flex-col gap-1 pt-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-400 font-mono">
                    <Calendar className="h-3 w-3" />
                    {item.date}
                  </div>
                </div>
                
                <p className="text-sm font-semibold">
                  {item.location}
                </p>

                <ul className="mt-4 space-y-2">
                  {item.description.slice(0, 2).map((point, i) => (
                    <li key={i} className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300 dark:bg-gray-700" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-slate-100 dark:bg-gray-800/50 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-gray-800 transition-all 
                  duration-300 hover:border-primary hover:text-primary hover:scale-105 cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              I’m currently looking for new opportunities and open to collaborating on 
              enterprise-level Java or React projects. 
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <a href="mailto:mihiranga.dev@gmail.com" className="text-sm font-medium hover:text-primary transition-colors">
                  mihiranga.dev@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <a href="https://linkedin.com/in/mihiranga-dev/" target="_blank" className="text-sm font-medium hover:text-primary transition-colors">
                  linkedin.com/in/mihiranga-dev
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-dark/40">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  name="name"
                  type="text" 
                  required
                  placeholder="Name" 
                  className="w-full p-3 rounded-xl border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" 
                />
                <input 
                  name="email"
                  type="email" 
                  required
                  placeholder="Email" 
                  className="w-full p-3 rounded-xl border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" 
                />
              </div>
              <textarea 
                name="message"
                rows={4} 
                required
                placeholder="Your Message" 
                className="w-full p-3 rounded-xl border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm resize-none"
              ></textarea>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50 ${
                  status === 'success' ? 'bg-emerald-500 text-white' : 'bg-primary text-white hover:shadow-lg hover:shadow-primary/20'
                }`}
              >
                {isSubmitting ? "Sending..." : status === 'success' ? (
                  <>Message Sent <CheckCircle2 className="w-4 h-4" /></>
                ) : (
                  <>Send Message <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
    </div>
  );
}