import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-gray-800 bg-white dark:bg-dark py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm font-black">
            MIHIRANGA <span className="text-primary font-normal">DISSANAYAKE</span>
          </p>
          <p className="text-xs text-slate-500 mt-1">
            © {new Date().getFullYear()} — Built with Next.js & Tailwind
          </p>
        </div>

        <div className="flex gap-6">
          <Link href="https://github.com/mihiranga-dev" target="_blank" className="text-slate-400 hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="https://linkedin.com/in/mihiranga-dev" target="_blank" className="text-slate-400 hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </Link>
          <a href="mailto:mihiranga.dev@gmail.com" className="text-slate-400 hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}