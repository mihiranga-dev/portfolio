export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 md:py-32">
      {/* Main Headline */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
        Full-Stack Software Engineer
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl max-w-3xl text-slate-600 dark:text-slate-400">
        Crafting robust, enterprise-grade applications with Java, Spring Boot, and React.
      </p>
    </section>
  );
}