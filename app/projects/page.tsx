"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowUpRight, FolderCode } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="space-y-16 py-12 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-primary">
          <FolderCode className="w-6 h-6" />
          <span className="text-sm font-bold uppercase tracking-[0.3em]">Portfolio</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground">
          All <span className="text-primary">Projects</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          A collection of my full-stack applications, enterprise solutions, 
          and technical research projects built with Java, React, and modern web stacks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            className="group relative flex flex-col p-8 rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-dark/40 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:scale-105 transition-transform"
          >

            <div className="absolute top-8 right-8 text-slate-300 dark:text-gray-600 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
              <ArrowUpRight className="w-6 h-6" />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest rounded-md bg-slate-100 dark:bg-gray-800/50 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-gray-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}