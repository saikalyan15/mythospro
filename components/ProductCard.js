import Link from "next/link";

export default function ProductCard({ title, desc, slug, price }) {
  return (
    <div className="bg-[#1B263B] p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300 mb-4">{desc}</p>
      <div className="flex gap-2">
        <Link
          href={`/tools/${slug || "placeholder"}`}
          className="px-4 py-2 rounded bg-white text-black font-medium"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
