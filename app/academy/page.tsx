"use client";

import Link from "next/link";
import Image from "next/image";
import { courses } from "@/data/academy";
import { GraduationCap, PlayCircle, Clock, BookOpen } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AcademyPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 md:py-20 space-y-16">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-3 text-primary">
          <GraduationCap className="w-6 h-6" />
          <span className="text-xs font-bold uppercase tracking-[0.3em]">
            Knowledge Base
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground">
          Techtial <span className="text-primary">Academy</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Open-source technical modules designed to bridge the gap between
          academic theory and production-ready software engineering.
        </p>
      </motion.header>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {courses.map((course) => (
          <motion.div key={course.id} variants={itemVariants}>
            <Link
              href={`/academy/${course.id}`}
              className="group flex flex-col rounded-[2.5rem] border border-slate-200 dark:border-gray-800 bg-white dark:bg-dark/40 hover:border-primary transition-all duration-500 overflow-hidden h-full shadow-sm hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="aspect-video w-full relative overflow-hidden bg-slate-100 dark:bg-gray-900">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-dark/20 group-hover:bg-primary/20 transition-colors duration-500 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-full opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 border border-white/30">
                    <PlayCircle className="w-10 h-10 text-white fill-white/20" />
                  </div>
                </div>

                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 rounded-lg bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                    Ongoing
                  </span>
                </div>

                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1.5 rounded-full bg-dark/60 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest border border-white/10 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    {course.lessons.length} Modules Planned
                  </span>
                </div>
              </div>

              <div className="p-10 space-y-6">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    {course.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 text-[15px] leading-relaxed line-clamp-2">
                    {course.description}
                  </p>
                </div>

                <div className="flex items-center gap-6 pt-6 border-t border-slate-100 dark:border-gray-800/50">
                  <div className="flex items-center gap-2 text-slate-400">
                    <BookOpen className="w-4 h-4 text-primary/60" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Engineering Track
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock className="w-4 h-4 text-primary/60" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Free Access
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
