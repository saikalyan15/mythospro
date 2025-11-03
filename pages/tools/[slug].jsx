/* stylelint-disable */
import Layout from "../../components/Layout";
import Image from "next/image";
import Link from "next/link";
import PRODUCTS from "../../data/products.json";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

function ProductMedia({ images = [], video }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!video || !el) return;

    const handleCanSeek = () => {
      try {
        // Jump slightly into the video to give a richer preview frame.
        el.currentTime = Math.min(2, el.duration || 2);
        el.pause();
      } catch {
        /* no-op */
      }
    };

    // If metadata is ready, seeking is immediately possible.
    if (el.readyState >= 1) {
      handleCanSeek();
    } else {
      el.addEventListener("loadedmetadata", handleCanSeek, { once: true });
    }

    return () => {
      el.removeEventListener("loadedmetadata", handleCanSeek);
    };
  }, [video]);

  return (
    <div className="space-y-4">
      {video && (
        <video ref={videoRef} controls className="w-full rounded" preload="metadata">
          <source src={video} type="video/mp4" />
        </video>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((src) => (
          <div key={src} className="rounded overflow-hidden bg-[#0B1220]">
            <Image src={src} alt="product image" width={800} height={480} />
          </div>
        ))}
      </div>
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

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const q = router?.query || {};
    if (typeof q.success !== 'undefined') {
      setSuccess(String(q.success) === '1');
    }
    if (q.email && !email) {
      try { setEmail(String(q.email)); } catch {}
    }
  }, [router?.query]);

  async function startCheckout(mode = "checkout") {
    try {
      setLoading(true);
      const res = await fetch("https://api.mythospro.com/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email || undefined,
          product_slug: product.slug,
          plan_slug: "pro-monthly",
          mode,
        }),
      });
      if (res.status === 409) {
        if (!email) return alert('You already have an active subscription. Enter your email to open the billing portal.');
        const pr = await fetch("https://api.mythospro.com/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, product_slug: product.slug, mode: 'portal' }),
        });
        if (!pr.ok) throw new Error(`Portal open failed (${pr.status})`);
        const pd = await pr.json();
        if (pd?.url) { window.location.href = pd.url; return; }
      }
      if (!res.ok) throw new Error(`Checkout failed (${res.status})`);
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (e) {
      alert(e.message || "Unable to start checkout");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-24 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {success && (
            <div className="mb-6 p-4 rounded bg-green-800/50 border border-green-600 text-green-100">
              <div className="font-semibold">Success!</div>
              <div className="text-sm">Your purchase was successful. The extension will reflect your Pro status shortly.</div>
            </div>
          )}
          <div className="flex items-center gap-4 mb-4">
            {product.logo && (
              <div className="w-16 h-16 relative rounded overflow-hidden bg-[#07101A] flex-shrink-0">
                <Image
                  src={product.logo}
                  alt={`${product.title} logo`}
                  width={64}
                  height={64}
                />
              </div>
            )}
            <div>
              <h1 className="text-4xl font-bold">{product.title}</h1>
              {product.marketing?.headline && (
                <div className="text-xl text-gray-200 mt-1">
                  {product.marketing.headline}
                </div>
              )}
              {product.marketing?.subHeadline && (
                <div className="text-sm text-gray-400">
                  {product.marketing.subHeadline}
                </div>
              )}
            </div>
          </div>
          <p className="text-lg mb-6">{product.longDesc}</p>

          {product.marketing?.subText && (
            <div className="mb-8">
              <p className="text-base text-gray-300">
                {product.marketing.subText}
              </p>
            </div>
          )}

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Support</h2>
            <p>
              For help and questions contact:{" "}
              <a href={product.supportUrl} className="underline">
                Support
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Media</h2>
            <ProductMedia images={product.images} video={product.video} />
          </section>

          {product.marketing?.howItWorks && (
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-3">How It Works</h2>
              <div className="space-y-4">
                {product.marketing.howItWorks.map((item) => (
                  <div key={item.title}>
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-sm text-gray-300">{item.text}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {product.marketing?.whyUseIt && (
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-3">Why Use It</h2>
              <ul className="list-disc pl-5 text-gray-300">
                {product.marketing.whyUseIt.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </section>
          )}

          {product.marketing?.demoSteps && (
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-3">
                Step-by-Step Product Demo
              </h2>
              <ol className="list-decimal pl-5 space-y-4 text-gray-300">
                {product.marketing.demoSteps.map((step, idx) => (
                  <li key={step.title || idx}>
                    <div className="font-semibold">{step.title}</div>
                    {step.details?.map((d, i) => (
                      <div key={i} className="mt-1">
                        {d}
                      </div>
                    ))}
                  </li>
                ))}
              </ol>
            </section>
          )}
        </div>

        <aside className="md:col-span-1 p-6 bg-[#0C1A2B] rounded">
          <div className="mb-4">
            <div className="text-sm text-gray-300">Price</div>
            <div className="text-2xl font-bold">{product.price || "—"}</div>
          </div>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="you@example.com (optional)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded bg-[#0B1220] border border-[#1a2a3d] text-white placeholder-gray-500"
            />
            <p className="text-xs text-gray-400">
              Tip: Use the same email as in the extension for faster entitlement sync.
            </p>
            <button
              onClick={() => startCheckout('checkout')}
              disabled={loading}
              className="w-full text-center px-4 py-2 rounded bg-mythos-gold text-black font-semibold"
            >
              {loading ? 'Starting…' : 'Buy / Get Access'}
            </button>
            <button
              onClick={() => {
                if (!email) return alert('Enter your email to open the portal');
                startCheckout('portal');
              }}
              disabled={loading}
              className="w-full text-center px-4 py-2 rounded bg-[#19314a] text-white font-semibold"
            >
              Manage Billing
            </button>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            <Link href="/" className="underline">
              Back to tools
            </Link>
          </div>
        </aside>
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
