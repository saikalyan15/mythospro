"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => setStatus("success"), 1500);
  };

  if (status === "success") {
    return (
      <div className="text-center p-8 bg-green-500/10 border border-green-500/20 rounded-xl">
        <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h3>
        <p className="text-slate-300">
          Thanks! We'll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-300">
            Name
          </label>
          <input
            required
            id="name"
            type="text"
            className="w-full rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm focus:border-purple-500 focus:outline-none"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-300">
            Email
          </label>
          <input
            required
            id="email"
            type="email"
            className="w-full rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm focus:border-purple-500 focus:outline-none"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium text-slate-300">
          Company / Brand
        </label>
        <input
          id="company"
          type="text"
          className="w-full rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm focus:border-purple-500 focus:outline-none"
          placeholder="Acme Inc."
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-300">
          Project Details
        </label>
        <textarea
          required
          id="message"
          rows={4}
          className="w-full rounded-md border border-slate-800 bg-slate-950 px-3 py-2 text-sm focus:border-purple-500 focus:outline-none"
          placeholder="Tell us about your project needs..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-purple-600 px-4 py-3 text-sm font-bold text-white hover:bg-purple-700 disabled:opacity-50 transition-colors"
      >
        {status === "submitting" ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
