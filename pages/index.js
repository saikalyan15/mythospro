import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { useRouter } from "next/router";
import PRODUCTS from "../data/products.json";
import Head from "next/head";

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>MythosPro — Home</title>
      </Head>
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
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {PRODUCTS.map((p) => (
            <div key={p.slug} className="w-full md:w-1/3 flex justify-center">
              <ProductCard
                title={p.title}
                desc={p.desc}
                slug={p.slug}
                checkoutUrl={p.checkout}
              />
            </div>
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
    </Layout>
  );
}
