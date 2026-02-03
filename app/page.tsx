"use client";

import Link from "next/link";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";
import { ArrowUpRight, Github, Linkedin, FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-32"> 
      
      <div className="space-y-8 md:space-y-12">
        
        <section className="flex flex-col-reverse md:flex-row items-center justify-between pt-12 md:pt-20 pb-0 gap-12">
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
              <Link href="/Resume.pdf" className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all">
                <FileText className="w-5 h-5" />
                Resume
              </Link>
              <div className="flex gap-3">
                <Link href="https://linkedin.com/in/mihiranga-dev" className="p-3 rounded-full bg-blue-600 text-white hover:scale-110 transition-transform shadow-lg shadow-blue-500/20"><Linkedin className="w-5 h-5"/></Link>
                <Link href="https://github.com/mihiranga-dev" className="p-3 rounded-full bg-slate-800 dark:bg-slate-700 text-white hover:scale-110 transition-transform shadow-lg shadow-black/20"><Github className="w-5 h-5"/></Link>
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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8 p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-gray-800 bg-slate-50/50 dark:bg-dark/50 backdrop-blur-sm">
        <div className="text-center">
          <span className="block text-4xl font-bold text-foreground">1+</span>
          <span className="text-[15px] uppercase tracking-[0.2em] text-slate-500 font-semibold">Years Experience</span>
        </div>
        <div className="text-center">
          <span className="block text-4xl font-bold text-foreground">20+</span>
          <span className="text-[15px] uppercase tracking-[0.2em] text-slate-500 font-semibold">GitHub Repos</span>
        </div>
        <div className="text-center">
          <span className="block text-4xl font-bold text-foreground">150+</span>
          <span className="text-[15px] uppercase tracking-[0.2em] text-slate-500 font-semibold">Contributions</span>
        </div>
        <div className="text-center">
          <span className="block text-4xl font-bold text-foreground">5+</span>
          <span className="text-[15px] uppercase tracking-[0.2em] text-slate-500 font-semibold">Full-Stack Projects</span>
        </div>
      </div>

    <section>
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Featured <span className="text-primary/80">Works</span>
        </h2>
        <Link href="/projects" className="text-sm md:text-base text-primary hover:scale-110 transition-transform font-medium">
            View all projects
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.link}
            className="group relative flex flex-col p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-dark/50 hover:border-primary transition-all duration-300"          
          >

            <div className="absolute top-8 right-8 text-gray-400 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
              <ArrowUpRight className="w-6 h-6" />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>

    <section className="pb-20">
      <div className="mb-12">
        <h2 className="text-3xl font-black text-foreground">
          Technical <span className="text-primary">Stack</span></h2>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          The tools and technologies I use to bring solution to life.
        </p>
      </div>

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
                  duration-300 hover:border-primary hover:text-primary hover:scale-105 cursor-default"
                >
                  {skills}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
    </div>
  );
}