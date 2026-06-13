import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.05] bg-[#060618]/80 backdrop-blur-xl">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Logo />

        <nav className="hidden sm:flex items-center gap-1">
          <a
            href="#products"
            className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-200 rounded-lg hover:bg-white/[0.04] transition-all"
          >
            Products
          </a>
          <a
            href="mailto:hello@mythospro.com"
            className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-200 rounded-lg hover:bg-white/[0.04] transition-all"
          >
            Contact
          </a>
          <a
            href="https://eaascanner.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all duration-200"
          >
            Try EAA Scanner →
          </a>
        </nav>
      </div>
    </header>
  );
}
