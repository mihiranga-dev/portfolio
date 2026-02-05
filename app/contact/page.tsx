"use client";

import { Mail, Linkedin, Github, MapPin, Send, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      <div className="mb-16 space-y-4">
        <div className="flex items-center gap-3 text-primary">
          <MessageSquare className="w-6 h-6" />
          <span className="text-sm font-bold uppercase tracking-[0.3em]">Connect</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground">
          Let&apos;s build <span className="text-primary">something</span> together.
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          I&apos;m currently open to internship opportunities and collaborations on enterprise-level Java or React projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Contact Details</h2>
            
            <div className="space-y-4">
              <a href="mailto:mihiranga.dev@gmail.com" className="group flex items-center gap-4 p-4 rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-dark/40 hover:border-primary/50 hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Me</p>
                  <p className="text-foreground font-medium">mihiranga.dev@gmail.com</p>
                </div>
              </a>

              <Link href="https://linkedin.com/in/mihiranga-dev/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-dark/40 hover:border-primary/50 hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Professional</p>
                  <p className="text-foreground font-medium">mihiranga-dev</p>
                </div>
              </Link>

              {/* GitHub */}
              <Link href="https://github.com/mihiranga-dev/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-2xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-dark/40 hover:border-primary/50 hover:scale-105 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-gray-800 flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Open Source</p>
                  <p className="text-foreground font-medium">mihiranga-dev</p>
                </div>
              </Link>

              {/* Location */}
              <div className="flex items-center gap-4 p-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-slate-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Location</p>
                  <p className="text-foreground font-medium">Kandy, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-gray-800 bg-white dark:bg-dark/40 shadow-xl shadow-primary/5">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full p-4 rounded-xl border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full p-4 rounded-xl border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Your Message</label>
              <textarea rows={5} placeholder="Hi Mihiranga, let's discuss a project..." className="w-full p-4 rounded-xl border border-slate-200 dark:border-gray-800 bg-slate-50 dark:bg-gray-900/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"></textarea>
            </div>
            <button className="w-full md:w-fit px-8 py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95">
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}