import { useRouter } from "next/router";
import Layout from "../../components/Layout";

export default function Tool() {
  const router = useRouter();
  const { slug } = router.query;

  // in a real app, fetch product by slug
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-24 px-6">
        <h1 className="text-4xl font-bold mb-4">{slug}</h1>
        <p className="text-lg mb-6">
          This is the product detail page for <strong>{slug}</strong>. Add
          description, screenshots, and a LemonSqueezy checkout button here.
        </p>
        <div className="flex gap-4">
          <a href="/" className="px-4 py-2 rounded border border-gray-400">
            Back
          </a>
        </div>
      </div>
    </Layout>
  );
}
