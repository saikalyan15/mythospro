export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="30" rx="7" fill="#4f46e5" fillOpacity="0.18" />
        <rect width="30" height="30" rx="7" stroke="#818cf8" strokeWidth="0.75" strokeOpacity="0.35" fill="none" />
        {/* Mountain-peaks M, mythology meets precision */}
        <path
          d="M5.5 22L10.5 10L15 17L19.5 10L24.5 22"
          stroke="#818cf8"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-sm font-semibold tracking-tight">
        <span className="text-zinc-100">Mythos</span>
        <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent font-bold">Pro</span>
      </span>
    </div>
  );
}
