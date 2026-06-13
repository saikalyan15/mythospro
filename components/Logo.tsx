export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="6" fill="#4f46e5" />
        <path
          d="M6 20V8L14 15.5L22 8V20"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-sm font-semibold tracking-tight text-zinc-100">
        Mythos<span className="text-zinc-400 font-medium"> Pro</span>
      </span>
    </div>
  );
}
