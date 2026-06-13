import { ArrowUpRight, Plus } from "lucide-react";

type Product = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  urlLabel: string;
  category: string;
  logo: string;
};

const products: Product[] = [
  {
    name: "EAA Scanner",
    tagline: "EU Accessibility Act compliance, simplified.",
    description:
      "Scan, report, and track WCAG 2.2 / EAA compliance issues across your product, without enterprise pricing or sales calls.",
    url: "https://eaascanner.com",
    urlLabel: "eaascanner.com",
    category: "Accessibility",
    logo: "/products/eaascanner-icon.svg",
  },
];

export default function Products() {
  return (
    <section id="products" className="max-w-5xl mx-auto px-6 pb-32">
      <div className="flex items-center gap-3 mb-12">
        <span className="w-5 h-px bg-gradient-to-r from-indigo-500 to-transparent" />
        <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-500">
          Products
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {products.map(({ name, tagline, description, url, urlLabel, category, logo }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col rounded-2xl p-7 overflow-hidden
              border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl
              hover:border-indigo-500/30 hover:bg-white/[0.05]
              transition-all duration-300 cursor-pointer"
          >
            {/* Hover glow overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at 25% 0%, rgba(99,102,241,0.09) 0%, transparent 65%)",
              }}
            />

            <div className="relative flex items-start justify-between mb-7">
              <img
                src={logo}
                alt={`${name} logo`}
                width={44}
                height={44}
                className="w-11 h-11 rounded-xl shadow-lg shadow-blue-900/30"
              />
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full">
                  {category}
                </span>
                <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-indigo-400 transition-colors" />
              </div>
            </div>

            <div className="relative">
              <h3 className="text-xl font-bold text-zinc-100 mb-1">{name}</h3>
              <p className="text-sm font-medium text-indigo-400/80 mb-3">{tagline}</p>
              <p className="text-sm text-zinc-500 leading-relaxed mb-6">{description}</p>
              <span className="text-xs font-mono text-zinc-600 group-hover:text-zinc-400 transition-colors">
                → {urlLabel}
              </span>
            </div>
          </a>
        ))}

        {/* Coming soon slot */}
        <div className="relative flex flex-col rounded-2xl p-7 border border-white/[0.04] bg-white/[0.015]">
          <div className="flex items-start justify-between mb-7">
            <div className="w-11 h-11 rounded-xl border border-white/[0.06] bg-white/[0.03] flex items-center justify-center">
              <Plus className="w-4 h-4 text-zinc-700" />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-700 bg-zinc-800/40 border border-zinc-700/40 px-2.5 py-1 rounded-full">
              Coming Soon
            </span>
          </div>
          <p className="text-sm text-zinc-700 leading-relaxed">
            More focused tools in the pipeline.
          </p>
        </div>
      </div>
    </section>
  );
}
