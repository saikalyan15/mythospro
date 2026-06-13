import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05]">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <Logo />

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-600">
          <a
            href="mailto:hello@mythospro.com"
            className="hover:text-zinc-300 transition-colors"
          >
            hello@mythospro.com
          </a>
          <a
            href="https://www.linkedin.com/in/saikalyanakunuri"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-zinc-800">© {new Date().getFullYear()} MythosPro</span>
        </div>
      </div>
    </footer>
  );
}
