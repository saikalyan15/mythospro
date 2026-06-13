export default function Hero() {
  return (
    <section className="relative max-w-5xl mx-auto px-6 pt-24 pb-28 md:pt-32 md:pb-36 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="orb-1 absolute -top-48 -left-24 w-[560px] h-[560px] rounded-full blur-[130px] opacity-25"
          style={{ background: "radial-gradient(circle, #4f46e5 0%, #7c3aed 60%, transparent 80%)" }}
        />
        <div
          className="orb-2 absolute -top-16 right-0 md:right-16 w-[420px] h-[420px] rounded-full blur-[100px] opacity-18"
          style={{ background: "radial-gradient(circle, #7c3aed 0%, #4f46e5 60%, transparent 80%)" }}
        />
      </div>

      <div className="relative">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/[0.07] backdrop-blur-sm">
          <span className="dot-pulse w-1.5 h-1.5 rounded-full bg-indigo-400" />
          <span className="text-xs font-medium uppercase tracking-widest text-indigo-400">
            Indie Software Studio
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-[68px] font-bold tracking-tight leading-[1.04] mb-6">
          <span className="bg-gradient-to-br from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
            Focused software
          </span>
          <br />
          <span className="text-zinc-500 font-semibold">for professionals.</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-500 max-w-md leading-relaxed mb-10">
          Practical SaaS tools built by makers, not committees.
          Small studio. Sharp tools.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://eaascanner.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/45 hover:scale-[1.02] transition-all duration-200"
          >
            Try EAA Scanner
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/[0.09] bg-white/[0.03] text-zinc-400 text-sm font-medium hover:bg-white/[0.06] hover:border-white/[0.15] hover:text-zinc-200 transition-all duration-200 backdrop-blur-sm"
          >
            View products
          </a>
        </div>
      </div>
    </section>
  );
}
