import { FileText, Clapperboard, CheckCircle2, Send } from "lucide-react";

const STEPS = [
  { icon: FileText, title: "Brief", desc: "Send us your product details and key messaging points." },
  { icon: Clapperboard, title: "Creation", desc: "We produce AI avatar videos with custom scripts." },
  { icon: CheckCircle2, title: "Revision", desc: "Review the content and request any tweaks." },
  { icon: Send, title: "Delivery", desc: "Receive final files ready for social platforms." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-slate-400">From concept to content in four simple steps.</p>
        </div>

        <div className="relative grid md:grid-cols-4 gap-8">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-slate-800 -z-10" />
          
          {STEPS.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="h-16 w-16 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center mb-6">
                <step.icon className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}