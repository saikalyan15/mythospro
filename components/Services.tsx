import { MonitorPlay, MessageSquareQuote, Sparkles } from "lucide-react";

const SERVICES = [
  {
    icon: MonitorPlay,
    title: "Product Demonstrations",
    desc: "Professional 30-60 second videos showcasing your product's features and benefits with perfect clarity."
  },
  {
    icon: MessageSquareQuote,
    title: "Customer Testimonials",
    desc: "Authentic-feeling testimonial videos that build trust. Consistent delivery, no awkward pauses."
  },
  {
    icon: Sparkles,
    title: "Lifestyle Content",
    desc: "Engaging short-form content for TikTok, Reels, and Shorts designed to stop the scroll."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/20 hover:border-purple-500/50 transition-colors">
              <service.icon className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}