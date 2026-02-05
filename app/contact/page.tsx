"use client";

import { Mail, Linkedin, Github, Send, MessageSquare } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto py-12 md:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <MessageSquare className="w-6 h-6" />
              <span className="text-xs font-bold uppercase tracking-[0.3em]">Contact</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground leading-tight">
              Let&apos;s build <br /> <span className="text-primary">something.</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              I’m currently seeking internship opportunities and open to collaborating on Java or React projects. 
            </p>
          </div>
          
          <div className="space-y-4 pt-4">
            <a href="mailto:mihiranga.dev@gmail.com" className="group flex items-center gap-4 p-4 rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-dark/40 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform"><Mail className="w-5 h-5" /></div>
              <p className="text-foreground font-medium">mihiranga.dev@gmail.com</p>
            </a>
            <Link href="https://linkedin.com/in/mihiranga-dev/" target="_blank" className="group flex items-center gap-4 p-4 rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-dark/40 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform"><Linkedin className="w-5 h-5" /></div>
              <p className="text-foreground font-medium">linkedin.com/in/mihiranga-dev</p>
            </Link>
          </div>
        </div>

        <div className="p-8 md:p-10 rounded-[2.5rem] border border-slate-200 dark:border-gray-800 bg-white dark:bg-dark/40 shadow-xl shadow-primary/5">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" className="w-full p-4 rounded-xl border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" />
              <input type="email" placeholder="Email" className="w-full p-4 rounded-xl border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" />
            </div>
            <textarea rows={10} placeholder="Your Message" className="w-full p-4 rounded-xl border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm resize-none"></textarea>
            <button className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95">
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}