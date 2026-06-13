export default function Hero() {
  return (
    <section className="relative max-w-5xl mx-auto px-6 pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
      {/* Subtle top glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative">
        <div className="inline-flex items-center gap-2 mb-7">
          <span className="w-5 h-px bg-indigo-500" />
          <span className="text-xs font-medium uppercase tracking-widest text-indigo-400">
            Indie Software Studio
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-100 leading-[1.1] mb-6">
          Focused software
          <br />
          for professionals.
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed">
          Practical SaaS tools built by makers, not committees.
          <br className="hidden sm:block" />
          Small studio. Sharp tools.
        </p>
      </div>
    </section>
  );
}
