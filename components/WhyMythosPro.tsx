import { Check } from "lucide-react";

const BENEFITS = [
  "Consistent Quality — Same avatar, same vibe, every video",
  "Fast Turnaround — 30-second videos in days, not weeks",
  "No Authenticity Concerns — Transparently AI, professionally executed",
  "Scalable — Create 5 or 50 variations instantly",
  "Cost-Effective — Premium production at a fraction of the cost"
];

export default function WhyMythosPro() {
  return (
    <section id="why-us" className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-purple-900/20 to-slate-900 rounded-3xl p-8 md:p-12 border border-purple-500/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose MythosPro?</h2>
              <ul className="space-y-4">
                {BENEFITS.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-purple-400" />
                    </div>
                    <span className="text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-full min-h-[300px] rounded-xl bg-slate-950/50 border border-slate-800 flex items-center justify-center text-slate-500">
              {/* Placeholder for a comparison chart or graphic */}
              <span className="text-sm">Efficiency Graph Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}