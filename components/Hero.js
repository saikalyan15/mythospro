export default function Hero({ onPrimary, onSecondary }) {
  return (
    <section className="hero-star text-center py-24 px-6">
      <h1 className="text-5xl font-bold mb-4">MythosPro</h1>
      <p className="text-xl italic mb-6">Where ideas become legend</p>
      <p className="text-lg max-w-2xl mx-auto mb-8">
        A growing suite of micro-SaaS tools and Chrome extensions to empower
        creators, developers, and builders.
      </p>
      <div className="flex gap-4 justify-center">
        <button
          onClick={onPrimary}
          className="px-6 py-3 rounded-md bg-mythos-gold text-black font-semibold"
        >
          Explore Tools
        </button>
        <button
          onClick={onSecondary}
          className="px-6 py-3 rounded-md border border-mythos-gold text-mythos-gold"
        >
          Join Early Access
        </button>
      </div>
    </section>
  );
}
