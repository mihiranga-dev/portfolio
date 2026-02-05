import Link from "next/link";
import { Github, Linkedin, Mail, Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-gray-800 bg-white dark:bg-dark py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <p className="text-2xl font-black">
            MIHIRANGA <span className="text-primary font-normal">DISSANAYAKE</span>
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-500 mt-1 uppercase tracking-widest font-medium">
            © {new Date().getFullYear()} — Designed & Engineered by Mihiranga
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6">
          <Link 
            href="https://paypal.me/mihirangadev"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-500 text-xs font-bold uppercase tracking-widest hover:text-primary transition-all hover:scale-105 duration-300"
          >
            <Coffee className="w-4 h-4" />
            Support my work
          </Link>

          <div className="flex gap-6 items-center border-l border-slate-200 dark:border-gray-800 pl-6">
            <Link 
              href="https://github.com/mihiranga-dev" 
              target="_blank" 
              className="text-slate-400 hover:text-primary transition-all hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link 
              href="https://linkedin.com/in/mihiranga-dev" 
              target="_blank" 
              className="text-slate-400 hover:text-primary transition-all hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <a 
              href="mailto:mihiranga.dev@gmail.com" 
              className="text-slate-400 hover:text-primary transition-all hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}