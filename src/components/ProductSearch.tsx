
"use client";

import { useMemo, useState } from "react";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  emoji: string;
  change?: number;
};

type Props = {
  products: Product[];
};

export default function ProductSearch({ products }: Props) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) =>
      product.name.toLowerCase().includes(search.trim().toLowerCase())
    );

    if (sort === "low-to-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sort === "high-to-low") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, search, sort]);

  return (
    <section className="w-full min-w-0">
      {/* Search and Sort */}
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="পণ্যের নাম লিখে সার্চ করুন..."
          aria-label="পণ্য সার্চ করুন"
          className="min-w-0 w-full rounded-xl border border-gray-300 bg-white px-3 py-3 text-sm text-gray-900 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 sm:px-4 sm:text-base"
        />

        <select
          value={sort}
          onChange={(event) => setSort(event.target.value)}
          aria-label="দাম অনুযায়ী সাজান"
          className="min-w-0 w-full rounded-xl border border-gray-300 bg-white px-3 py-3 text-sm text-gray-800 outline-none focus:border-green-600 sm:w-auto sm:max-w-full sm:px-4 sm:text-base"
        >
          <option value="default">ডিফল্ট</option>
          <option value="low-to-high">দাম: কম থেকে বেশি</option>
          <option value="high-to-low">দাম: বেশি থেকে কম</option>
        </select>
      </div>

      {/* Product Count */}
      <p className="mt-3 text-sm text-gray-600">
        মোট {filteredProducts.length}টি পণ্য পাওয়া গেছে
      </p>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="min-w-0 overflow-hidden rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md sm:p-4"
            >
              {/* Product Emoji */}
              <div className="flex h-20 items-center justify-center rounded-lg bg-green-50 text-4xl sm:h-24 sm:text-5xl">
                {product.emoji}
              </div>

              {/* Product Name */}
              <h2 className="mt-3 break-words text-sm font-semibold leading-5 text-gray-900 sm:mt-4 sm:text-base">
                {product.name}
              </h2>

              {/* Product Price */}
              <p className="mt-2 flex flex-wrap items-baseline gap-x-1 text-base font-bold text-green-700 sm:text-lg">
                <span>৳{product.price}</span>
                <span className="text-xs font-normal text-gray-500 sm:text-sm">
                  /{product.unit}
                </span>
              </p>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-xl bg-gray-50 p-5 text-center sm:p-6">
          <p className="font-semibold text-gray-700">
            কোনো পণ্য পাওয়া যায়নি!
          </p>
          <p className="mt-1 text-sm text-gray-500">
            অন্য কোনো পণ্যের নাম লিখে চেষ্টা করো।
          </p>
        </div>
      )}
    </section>
  );
}
