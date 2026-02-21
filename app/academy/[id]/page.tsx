"use client";

import { use, useState } from "react";
import { courses } from "@/data/academy";
import {
  ArrowLeft,
  PlayCircle,
  FileText,
  Terminal,
  CheckCircle2,
  Lock,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export const runtime = "edge";
export default function CourseDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const course = courses.find((c) => c.id === resolvedParams.id);

  const [activeLessonIndex, setActiveLessonIndex] = useState(0);

  if (!course) return notFound();

  const currentLesson = course.lessons[activeLessonIndex];

  const getYouTubeId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  return (
    <div className="max-w-7xl mx-auto py-12 md:py-20 animate-in fade-in duration-700">
      <Link
        href="/academy"
        className="group flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-12"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Academy
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground">
              {currentLesson.title}
            </h1>
            <p className="text-slate-500 text-sm font-medium uppercase tracking-widest">
              Module {activeLessonIndex + 1} of {course.lessons.length} —{" "}
              {course.title}
            </p>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-200 dark:border-gray-800 bg-slate-100 dark:bg-gray-900 shadow-2xl">
            <iframe
              key={currentLesson.id}
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${getYouTubeId(currentLesson.videoUrl)}`}
              title={currentLesson.title}
              allowFullScreen
            ></iframe>
          </div>

          <AnimatePresence mode="wait">
            <motion.section
              key={currentLesson.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-8 rounded-[2.5rem] border border-slate-200 dark:border-gray-800 bg-white dark:bg-dark/40 space-y-6"
            >
              {/* 3. UPDATED TECHNICAL CHALLENGE SECTION */}
              <section className="space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-primary">
                    <Terminal className="w-6 h-6" />
                    <h2 className="text-xl font-bold uppercase tracking-[0.2em]">
                      Practice Challenges: Episode{" "}
                      {currentLesson.challenge.episode}
                    </h2>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 italic text-sm">
                    {currentLesson.challenge.intro}
                  </p>
                </div>

                <div className="space-y-12">
                  {currentLesson.challenge.challenges.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-8 rounded-[2rem] border border-slate-200 dark:border-gray-800 bg-white dark:bg-dark/40 space-y-6"
                    >
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-foreground">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-500">
                          {item.description}
                        </p>
                      </div>

                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {item.tasks.map((task, i) => (
                          <li
                            key={i}
                            className="flex gap-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            {task}
                          </li>
                        ))}
                      </ul>

                      {item.codeSnippet && (
                        <div className="relative group">
                          <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                            Broken Code
                          </div>
                          <pre className="p-6 rounded-2xl bg-slate-900 text-slate-300 font-mono text-xs overflow-x-auto border border-white/5">
                            <code>{item.codeSnippet}</code>
                          </pre>
                        </div>
                      )}

                      {item.solution && (
                        <details className="group border-t border-slate-100 dark:border-gray-800 pt-6">
                          <summary className="list-none cursor-pointer flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:opacity-80 transition-opacity">
                            <span className="group-open:rotate-180 transition-transform">
                              ▼
                            </span>
                            View Solution & Fixed Code
                          </summary>
                          <div className="mt-6 space-y-4 animate-in fade-in slide-in-from-top-2">
                            <p className="text-sm text-slate-500 bg-primary/5 p-4 rounded-xl border border-primary/10">
                              <span className="font-bold text-primary block mb-1">
                                Explanation:
                              </span>
                              <span className="whitespace-pre-wrap">
                                {item.solution.explanation}
                              </span>
                            </p>
                            {item.solution.fixedCode && (
                              <pre className="p-6 rounded-2xl bg-emerald-950/20 text-emerald-400 font-mono text-xs overflow-x-auto border border-emerald-500/20 ">
                                <code>{item.solution.fixedCode}</code>
                              </pre>
                            )}
                          </div>
                        </details>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </motion.section>
          </AnimatePresence>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="p-6 rounded-3xl border border-slate-200 dark:border-gray-800 bg-slate-50/50 dark:bg-gray-900/30 sticky top-24">
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <PlayCircle className="w-5 h-5 text-primary" />
              Course Content
            </h3>

            <div className="space-y-2">
              {course.lessons.map((lesson, index) => (
                <button
                  key={lesson.id}
                  disabled={!lesson.isPublished}
                  onClick={() => setActiveLessonIndex(index)}
                  className={`w-full flex items-start gap-4 p-4 rounded-2xl border transition-all text-left ${
                    activeLessonIndex === index
                      ? "bg-primary text-white border-primary"
                      : lesson.isPublished
                        ? "bg-white dark:bg-dark/40 border-slate-200 dark:border-gray-800 hover:border-primary/50"
                        : "bg-slate-50 dark:bg-gray-900/20 border-slate-100 dark:border-gray-900 opacity-60 cursor-not-allowed"
                  }`}
                >
                  <span className="text-xs font-mono font-bold mt-0.5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-bold leading-tight">
                      {lesson.title}
                    </span>
                    {!lesson.isPublished && (
                      <span className="text-[10px] uppercase tracking-widest text-primary font-bold">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {currentLesson.noteUrl && (
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-gray-800">
                <a
                  href={currentLesson.noteUrl}
                  target="_blank"
                  className="flex items-center justify-between p-4 rounded-2xl bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5" />
                    <span className="text-sm font-bold">Lesson Notes</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold opacity-60">
                    PDF
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
