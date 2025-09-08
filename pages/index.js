import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { useRouter } from "next/router";
import { PRODUCTS } from "../data/products";

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <Hero
        onPrimary={() => router.push("/#tools")}
        onSecondary={() => {
          document
            .getElementById("email")
            .scrollIntoView({ behavior: "smooth" });
        }}
      />

      <section id="tools" className="py-20 px-6 bg-[#111C2E]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Tools That Shape Your Story
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PRODUCTS.map((p) => (
            <ProductCard
              key={p.slug}
              title={p.title}
              desc={p.desc}
              slug={p.slug}
              checkoutUrl={p.checkout}
            />
          ))}
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0D1B2A]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose MythosPro?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          <div>
            <h3 className="font-semibold mb-2">🛠️ Simple but powerful</h3>
            <p className="text-sm text-gray-300">
              Tools that do one thing, but do it exceptionally well.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">⚡ Built for speed</h3>
            <p className="text-sm text-gray-300">
              Fast, focused, and lightweight for productivity.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">🌍 Flexible across niches</h3>
            <p className="text-sm text-gray-300">
              Extensions and SaaS tools adaptable to many use cases.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">🔒 Secure and reliable</h3>
            <p className="text-sm text-gray-300">
              Trusted solutions that protect your workflow and data.
            </p>
          </div>
        </div>
      </section>

      <section id="subscribe" className="py-20 px-6 bg-[#111C2E] text-center">
        <h2 className="text-3xl font-bold mb-6">Become Part of the Myth</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Our best tools are built with your feedback. Join our early access
          list to test and influence the next generation of legendary tools.
        </p>

        <form
          action="/api/subscribe"
          method="post"
          className="flex justify-center gap-0"
        >
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            className="p-3 rounded-l-md text-black w-64"
          />
          <button
            type="submit"
            className="rounded-r-md bg-mythos-gold text-black px-6"
          >
            Join the Mythos
          </button>
        </form>
      </section>

      <section className="py-16 px-6 text-center bg-[#0D1B2A]">
        <p className="text-xl italic mb-6">Ideas fade. Legends remain.</p>
        <a
          href="#subscribe"
          className="inline-block px-6 py-3 rounded bg-mythos-gold text-black font-semibold"
        >
          Start Building with MythosPro
        </a>
      </section>
    </Layout>
  );
}
