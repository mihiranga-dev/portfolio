"use client";

import { use } from "react";
import { projects } from "@/data/projects";
import { ArrowLeft, Github, ExternalLink, ShieldCheck, Zap, Code2, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const project = projects.find((p) => p.id === resolvedParams.id);

    if (!project) return notFound();

  return (
    <div className="max-w-4xl mx-auto py-6 md:py-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Link href="/" className="group flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-12">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </Link>

      <div className="space-y-6 mb-16">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-primary/10 text-primary rounded-md border border-primary/20">
              {t}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground">
          {project.title}
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
          {project.longDescription}
        </p>
        
        <div className="flex gap-4 pt-4">
          {project.github && (
            <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-xl font-bold hover:opacity-90 transition-opacity ">
              <Github className="w-5 h-5" /> Code Repo
            </Link>
          )}
          {project.liveDemo && (
          <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 border border-slate-200 dark:border-gray-800 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-gray-900 transition-colors">
            <ExternalLink className="w-5 h-5" /> Live Demo
          </Link>
          )}
        </div>
      </div>
      
      <div className="relative mb-20 hover:scale-105 transition-transform shadow-lg shadow-black/20">
        {project.image && (
            <div className="relative mb-20 animate-in fade-in zoom-in duration-1000">
                <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-[2rem] opacity-50"></div>
    
            <div className="relative rounded-xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-dark shadow-2xl overflow-hidden">
      
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-900/50">
                    <div className="w-3 h-3 rounded-full bg-red-400/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/50" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400/50" />
                    <div className="text-[10px] font-mono text-slate-400 ml-4 tracking-widest uppercase">
                    {project.id}.app / preview
                    </div>
                </div>
      
        <div className="relative aspect-video w-full bg-slate-100 dark:bg-gray-900">
            <Image 
            src={project.image} 
            alt={project.title}
            fill
            className="object-cover object-top"
            priority
            />
        </div>
        </div>
    </div>
)}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-slate-100 dark:border-gray-900 pt-16">
        
        <div className="space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <ShieldCheck className="text-primary w-5 h-5" /> Key Features
          </h2>
          <ul className="space-y-4">
            {project.features.map((feature, i) => (
              <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Zap className="text-primary w-5 h-5" /> Technical Challenge
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.challenges}
          </p>
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-gray-900/50 border border-slate-100 dark:border-gray-800 flex items-start gap-4">
            <Code2 className="w-6 h-6 text-primary shrink-0" />
            <p className="text-xs font-mono text-slate-500">
              "Focusing on system optimization and clean data patterns."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}