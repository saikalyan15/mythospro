import { ShieldCheck, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Product = {
  name: string;
  description: string;
  url: string;
  urlLabel: string;
  category: string;
  Icon: LucideIcon;
};

const products: Product[] = [
  {
    name: "EAA Scanner",
    description:
      "Accessibility compliance SaaS for teams that need to meet EAA and WCAG standards. Scan, report, and track issues — without the enterprise overhead.",
    url: "https://eaascanner.com",
    urlLabel: "eaascanner.com",
    category: "Accessibility",
    Icon: ShieldCheck,
  },
];

export default function Products() {
  return (
    <section className="max-w-5xl mx-auto px-6 pb-28">
      <div className="flex items-center gap-3 mb-10">
        <span className="w-5 h-px bg-zinc-600" />
        <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-500">
          Products
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {products.map(({ name, description, url, urlLabel, category, Icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col border border-zinc-800 rounded-xl p-7 hover:border-zinc-700 hover:bg-zinc-900/40 transition-colors"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-indigo-400" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors mt-0.5" />
            </div>

            <div className="flex items-center gap-2.5 mb-2">
              <h3 className="text-base font-semibold text-zinc-100">{name}</h3>
              <span className="text-[10px] font-medium uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full">
                {category}
              </span>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed mb-5 flex-1">
              {description}
            </p>

            <span className="text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
              {urlLabel}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
