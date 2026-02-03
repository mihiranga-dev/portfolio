import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-24">
    <section className="flex flex-col items-center justify-center text-center py-20 md:py-32">

      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
        Full-Stack Software Engineer
      </h1>

      <p className="text-lg md:text-xl max-w-3xl text-slate-600 dark:text-slate-400">
        Crafting robust, enterprise-grade applications with Java, Spring Boot, and React.
      </p>
    </section>

    <section>
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Featured Work</h2>
        <Link href="/projects" className="text-primary hover:underline font-medium">
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
    </div>
  );
}