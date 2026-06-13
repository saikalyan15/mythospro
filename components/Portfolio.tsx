"use client";

import { useState } from "react";
import { Play } from "lucide-react";

const SAMPLES = [
  {
    id: 1,
    title: "AI X Draft Reply",
    desc: "Browser Extension Demo",
    color: "bg-blue-900/20",
    videoSrc: "/products/ai-x-draft-reply/ai-x-demo.mp4",
    isLocal: true,
  },
  {
    id: 2,
    title: "Customer Testimonial",
    desc: "Authentic User Story",
    color: "bg-purple-900/20",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1",
    isLocal: false,
  },
  {
    id: 3,
    title: "Social Ad",
    desc: "High Engagement Hook",
    color: "bg-emerald-900/20",
    videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1",
    isLocal: false,
  },
];

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
          <p className="text-slate-400">
            Sample work demonstrating our video quality and consistency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SAMPLES.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950"
            >
              {/* Video Area */}
              <div className={`aspect-[9/16] ${item.color} relative`}>
                {activeVideo === item.id ? (
                  item.isLocal ? (
                    <video
                      src={item.videoSrc}
                      controls
                      autoPlay
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <iframe
                      src={item.videoSrc}
                      title={item.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer group-hover:bg-black/30 transition-all"
                    onClick={() => setActiveVideo(item.id)}
                  >
                    <div className="h-16 w-16 rounded-full bg-white/10 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-white fill-white" />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 bg-slate-950 border-t border-slate-800">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
