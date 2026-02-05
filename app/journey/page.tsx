"use client";

import { journey } from "@/data/journey";
import { GraduationCap, Youtube, Briefcase, Calendar, MapPin, Lightbulb } from "lucide-react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export default function JourneyPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 md:py-20 space-y-12">
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground">
          My <span className="text-primary">Journey</span>
        </h1>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
          Tracing my path from independent systems research to formal enterprise software engineering.
        </p>
      </motion.header>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        {journey.map((item) => (
          <motion.div 
            key={item.id}
            variants={itemVariants}
            className="group relative flex flex-col md:flex-row gap-6 p-8 rounded-[2rem] border border-slate-200 dark:border-gray-800 bg-white dark:bg-dark/40 hover:border-primary/50 transition-all duration-500 shadow-sm"
          >
            
            <div className="flex flex-col items-center md:items-start gap-4 md:w-48 shrink-0">
              <div className="p-4 rounded-2xl bg-primary/10 text-primary border border-primary/20">
                {item.category === "education" && <GraduationCap className="w-6 h-6" />}
                {item.category === "content" && <Youtube className="w-6 h-6" />}
                {item.category === "professional" && <Briefcase className="w-6 h-6" />}
                {item.category === "independent" && <Lightbulb className="w-6 h-6" />}
              </div>
              <div className="text-center md:text-left">
                <span className="text-[16px] font-bold uppercase flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> {item.date}
                </span>
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-slate-400 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> {item.location}
                </p>
              </div>

              <ul className="space-y-3">
                {item.description.map((point, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-gray-700 hover:scale-105 transition-transform shadow-lg shadow-blue-500/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}