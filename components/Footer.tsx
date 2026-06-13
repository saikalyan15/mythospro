import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
        <Logo />

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <a
            href="mailto:hello@mythospro.com"
            className="hover:text-zinc-200 transition-colors"
          >
            hello@mythospro.com
          </a>
          <a
            href="https://www.linkedin.com/in/saikalyanakunuri"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-zinc-700">
            © {new Date().getFullYear()} Mythos Pro
          </span>
        </div>
      </div>
    </footer>
  );
}
