import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center">
        <Logo />
      </div>
    </header>
  );
}
