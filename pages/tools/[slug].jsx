/* stylelint-disable */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import Layout from "../../components/Layout";
import PRODUCTS from "../../data/products.json";

function MediaBlock({ images = [], video }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {video && (
        <div className="bg-[#0B1220] rounded-xl overflow-hidden border border-[#1a2a3d] shadow-lg">
          <video
            controls
            playsInline
            className="w-full h-full object-cover"
            poster={images?.[0]}
            preload="metadata"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((src) => (
          <div
            key={src}
            className="bg-[#0B1220] rounded-xl overflow-hidden border border-[#1a2a3d] shadow"
          >
            <Image
              src={src}
              alt="AI X Draft Reply screenshot"
              width={800}
              height={480}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Feature({ title, desc, badge }) {
  return (
    <div className="p-4 rounded-lg bg-[#0B1220] border border-[#1a2a3d] shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <div className="text-xs uppercase tracking-wide text-gray-400">{badge}</div>
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-gray-300 mt-2">{desc}</p>
    </div>
  );
}

export default function Tool({ product }) {
  if (!product) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto py-24 px-6">Product not found</div>
      </Layout>
    );
  }

  const heroHeadline = useMemo(
    () => "Craft perfect X replies in seconds. Keep it forever.",
    []
  );
  const heroSub = useMemo(
    () =>
      "AI x Draft Reply is your co-pilot for Twitter/X. Save time, stay on-brand, and own a lifetime license. You bring your OpenAI key so your data stays yours.",
    []
  );

  const problemPoints = [
    "Staring at the blank reply box when the conversation is moving fast.",
    "Overthinking tone and wording—worried you’ll sound off-brand or harsh.",
    "Missing engagement because crafting the right reply takes too long.",
    "Repetitive responses that don’t sound like you.",
  ];

  const solutionPoints = [
    "Instant AI drafts that match your tone and keep replies under 280 characters.",
    "Multiple options on-demand—pick, tweak, and post.",
    "Context-aware suggestions that read the thread before drafting.",
    "One-time license with BYOK: your key stays local, no surprise subscriptions.",
  ];

  const featureCards = [
    {
      title: "Tone-aware drafting",
      desc: "Pick the tone you want (from quick to thoughtful) and get replies that sound like you—not a bot.",
      badge: "Voice",
    },
    {
      title: "One-click suggestions",
      desc: "Highlight, generate, and insert without leaving X. Multiple drafts appear instantly so you can ship fast.",
      badge: "Speed",
    },
    {
      title: "Understands the thread",
      desc: "Pulls context from the tweet so suggestions stay relevant and avoid missing the point.",
      badge: "Context",
    },
    {
      title: "Privacy-first BYOK",
      desc: "Store your OpenAI key locally. Drafts are generated directly via your key—no MythosPro servers in the middle.",
      badge: "Trust",
    },
    {
      title: "Set it and keep it",
      desc: "One-time license for the extension. Updates are included, and you control model choice and cost.",
      badge: "Lifetime",
    },
  ];

  const faq = [
    {
      q: "Is this a subscription?",
      a: "No. AI x Draft Reply is offered as a lifetime license. You pay once for the extension and use your own OpenAI billing for generations.",
    },
    {
      q: "What does BYOK mean?",
      a: "You add your OpenAI API key inside the extension. It’s stored locally and used directly with OpenAI—your data does not route through MythosPro servers.",
    },
    {
      q: "Does it work on every reply box?",
      a: "Yes. The extension lives in the X/Twitter reply UI so you can draft and insert without switching tabs.",
    },
    {
      q: "Do I need technical setup?",
      a: "No. Install from the Chrome Web Store, paste your API key, choose a model, and start drafting.",
    },
    {
      q: "What if X changes something?",
      a: "We ship updates with the lifetime license so the extension keeps working with X changes.",
    },
  ];

  return (
    <Layout>
      <Head>
        <title>{product.title} | MythosPro</title>
        <meta
          name="description"
          content="AI x Draft Reply helps you craft on-brand Twitter/X replies in seconds with a lifetime license and BYOK privacy."
        />
      </Head>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs">
              <span className="font-semibold">Lifetime license</span>
              <span className="h-4 w-[1px] bg-white/30" />
              <span>BYOK privacy</span>
              <span className="h-4 w-[1px] bg-white/30" />
              <span>Chrome extension</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {heroHeadline}
            </h1>
            <p className="text-lg text-gray-200">{heroSub}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#buy"
                className="px-6 py-3 rounded-md bg-mythos-gold text-black font-semibold"
              >
                Get lifetime access · $5.99
              </Link>
              <Link
                href="#demo"
                className="px-6 py-3 rounded-md border border-white/30 text-white font-semibold"
              >
                Watch the demo
              </Link>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-gray-300">
              {["Content creators", "Community managers", "Customer support", "Thought leaders"].map(
                (label) => (
                  <span
                    key={label}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10"
                  >
                    {label}
                  </span>
                )
              )}
            </div>
          </div>
          <div className="lg:col-span-5">
            <MediaBlock images={product.images || []} video={product.video} />
          </div>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-[#0C1A2B] border border-[#1a2a3d] shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Before AI x Draft Reply</h2>
            <ul className="space-y-3 text-gray-200">
              {problemPoints.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="text-mythos-gold mt-1">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-[#0C1A2B] border border-[#1a2a3d] shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">After AI x Draft Reply</h2>
            <ul className="space-y-3 text-gray-200">
              {solutionPoints.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="text-mythos-gold mt-1">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="demo" className="space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h2 className="text-3xl font-semibold">See it in action</h2>
            <span className="text-sm text-gray-400">
              Real screenshots and demo from the extension
            </span>
          </div>
          <MediaBlock images={product.images || []} video={product.video} />
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">Why people use it</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featureCards.map((f) => (
              <Feature key={f.title} title={f.title} desc={f.desc} badge={f.badge} />
            ))}
          </div>
        </section>

        <section id="buy" className="p-6 rounded-xl bg-[#0B1220] border border-[#1a2a3d] shadow-lg space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h2 className="text-3xl font-semibold">Lifetime license, zero subscriptions</h2>
              <p className="text-gray-300 mt-1">
                Own the tool forever. Pay $5.99 once for the extension, use your own OpenAI key for generation costs, and get future updates included.
              </p>
            </div>
            <Link
              href="mailto:aixdraftreply-support@mythospro.com?subject=AI%20x%20Draft%20Reply%20Lifetime"
              className="px-6 py-3 rounded-md bg-mythos-gold text-black font-semibold text-center"
            >
              Claim lifetime access
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-300">
            <div className="p-3 rounded-lg bg-[#0C1A2B] border border-[#1a2a3d]">
              <div className="font-semibold">Own the tool</div>
              <p>No recurring subscription or price hikes.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#0C1A2B] border border-[#1a2a3d]">
              <div className="font-semibold">BYOK control</div>
              <p>Choose the OpenAI model that fits your budget and speed.</p>
            </div>
            <div className="p-3 rounded-lg bg-[#0C1A2B] border border-[#1a2a3d]">
              <div className="font-semibold">Updates included</div>
              <p>Lifetime updates to stay aligned with X changes.</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">How it works</h2>
          <ol className="space-y-4 text-gray-200">
            <li>
              <div className="font-semibold">Install the Chrome extension</div>
              <div className="text-sm text-gray-300">
                Add AI x Draft Reply to your browser. The icon lives in your toolbar and inside the reply box on X.
              </div>
            </li>
            <li>
              <div className="font-semibold">Add your OpenAI API key</div>
              <div className="text-sm text-gray-300">
                Paste your key once. It’s stored locally and used directly with OpenAI—no MythosPro servers in between.
              </div>
            </li>
            <li>
              <div className="font-semibold">Choose tone, generate, and post</div>
              <div className="text-sm text-gray-300">
                Pick a tone, generate multiple drafts, edit if needed, and insert with one click.
              </div>
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-3xl font-semibold">FAQ</h2>
          <div className="space-y-3">
            {faq.map(({ q, a }) => (
              <details
                key={q}
                className="p-4 rounded-lg bg-[#0B1220] border border-[#1a2a3d] text-gray-200"
              >
                <summary className="font-semibold cursor-pointer">{q}</summary>
                <p className="mt-2 text-sm text-gray-300">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="p-6 rounded-xl bg-[#0C1A2B] border border-[#1a2a3d] shadow-lg text-center space-y-3">
          <h2 className="text-3xl font-semibold">
            Reply faster. Sound sharper. Own it forever.
          </h2>
          <p className="text-gray-300">
            Join creators and teams who keep conversations moving without staring at a blank box.
          </p>
          <div className="flex justify-center gap-3">
            <Link
              href="mailto:aixdraftreply-support@mythospro.com?subject=AI%20x%20Draft%20Reply%20Lifetime"
              className="px-6 py-3 rounded-md bg-mythos-gold text-black font-semibold"
            >
              Get lifetime access
            </Link>
            <Link
              href="#demo"
              className="px-6 py-3 rounded-md border border-white/30 text-white font-semibold"
            >
              See the demo
            </Link>
          </div>
        </section>

        <div className="text-center text-sm text-gray-400">
          <Link href="/" className="underline">
            Back to tools
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = PRODUCTS.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug) || null;
  return { props: { product } };
}
