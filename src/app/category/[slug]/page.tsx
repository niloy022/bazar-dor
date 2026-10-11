
import { products } from "@/data/products";
import ProductSearch from "@/components/ProductSearch";
import Link from "next/link";
import { notFound } from "next/navigation";

const categories: Record<string, string> = {
  "rice-dal": "চাল-ডাল",
  oil: "তেল",
  vegetables: "সবজি",
  fish: "মাছ",
  meat: "মাংস",
  eggs: "ডিম",
  milk: "দুধ",
  spices: "মসলা",
};

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const categoryName = categories[slug];

  if (!categoryName) {
    notFound();
  }

  const categoryProducts = products.filter(
    (product) => product.category === slug
  );

  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-8">
      <Link
        href="/"
        className="text-sm font-semibold text-green-700 hover:underline"
      >
        ← হোম পেজে ফিরে যান
      </Link>

      <section className="mt-6 rounded-2xl bg-green-50 p-5 sm:p-8">
        <p className="text-sm font-medium text-green-700">
          পণ্যের ক্যাটাগরি
        </p>

        <h1 className="mt-2 text-3xl font-extrabold text-gray-900">
          {categoryName}
        </h1>

        <p className="mt-2 text-gray-600">
          এই ক্যাটাগরিতে মোট {categoryProducts.length}টি পণ্য রয়েছে।
        </p>
      </section>

      <div className="mt-6">
        {categoryProducts.length > 0 ? (
          <ProductSearch products={categoryProducts} />
        ) : (
          <p className="rounded-xl bg-gray-50 p-6 text-center text-gray-600">
            এই ক্যাটাগরিতে এখনো কোনো পণ্য যোগ করা হয়নি।
          </p>
        )}
      </div>
    </main>
  );
}
