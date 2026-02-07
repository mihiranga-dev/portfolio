"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowUpRight, FolderCode } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectsPage() {
  return (
    <div className="space-y-16 py-12 md:py-20 animate-in fade-in duration-700">
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-primary">
          <FolderCode className="w-6 h-6" />
          <span className="text-xs font-bold uppercase tracking-[0.3em]">Portfolio</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground">
          All <span className="text-primary">Projects</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
          A deep dive into the systems I’ve engineered, ranging from Java backends to modern React architectures.
        </p>
      </header>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants} className="flex h-full">
            <Link
              href={project.link}
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
              }}
              className="group relative flex flex-col p-8 rounded-3xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-dark/40 hover:border-primary transition-all duration-300 w-full hover:scale-[1.02]"
            >
              <div className="absolute top-8 right-8 text-slate-400 group-hover:text-primary transition-all">
                <ArrowUpRight className="w-6 h-6" />
              </div>

              <div className="flex flex-col h-full space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
                  {project.description}
                </p>
                
                <div className="flex-grow" />

                <div className="flex flex-wrap gap-2 pt-6">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest rounded-md bg-slate-100 dark:bg-gray-800/50 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-gray-800 hover:scale-105 transition-transform shadow-lg shadow-blue-500/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}