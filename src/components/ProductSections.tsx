
import Link from "next/link";
import ProductSearch from "@/components/ProductSearch";

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

function ProductCard({ product }: { product: Product }) {
  const change = product.change ?? 0;

  const badgeStyle =
    change > 0
      ? "bg-green-100 text-green-700"
      : change < 0
        ? "bg-red-100 text-red-700"
        : "bg-gray-100 text-gray-600";

  const changeLabel =
    change > 0
      ? `▲ ${change.toFixed(1)}%`
      : change < 0
        ? `▼ ${Math.abs(change).toFixed(1)}%`
        : "— ০.০%";

  return (
    <Link
      href={`/product/${product.id}`}
      className="group min-w-0 overflow-hidden rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:border-green-300 hover:shadow-md sm:rounded-2xl sm:p-4"
    >
      <div className="flex h-20 items-center justify-center rounded-lg bg-green-50 text-4xl sm:h-28 sm:rounded-xl sm:text-5xl">
        {product.emoji}
      </div>

      <h3 className="mt-3 break-words text-sm font-bold leading-5 text-gray-900 group-hover:text-green-700 sm:mt-4 sm:text-base">
        {product.name}
      </h3>

      <p className="mt-1 text-xs text-gray-500 sm:text-sm">
        প্রতি {product.unit}
      </p>

      <div className="mt-3 border-t border-gray-100 pt-3 sm:mt-4">
        <p className="text-xs text-gray-500">দেখানো দাম</p>

        <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
          <p className="text-base font-extrabold text-gray-900 sm:text-lg">
            ৳{product.price}
          </p>

          <span
            className={`max-w-full rounded-full px-2 py-1 text-[10px] font-bold sm:text-xs ${badgeStyle}`}
          >
            {changeLabel}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ProductSections({ products }: Props) {
  const risers = products
    .filter((product) => (product.change ?? 0) > 0)
    .sort((a, b) => (b.change ?? 0) - (a.change ?? 0))
    .slice(0, 6);

  const fallers = products
    .filter((product) => (product.change ?? 0) < 0)
    .sort((a, b) => (a.change ?? 0) - (b.change ?? 0))
    .slice(0, 6);

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Prices Increased */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          আজ দাম বেড়েছে <span className="text-green-700">▲</span>
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
          যেসব পণ্যের দাম আগের তুলনায় বেড়েছে।
        </p>

        {risers.length > 0 ? (
          <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {risers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-sm text-gray-500">
            দাম বৃদ্ধির তথ্য এখনো যোগ করা হয়নি।
          </p>
        )}
      </section>

      {/* Prices Decreased */}
      <section>
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          আজ দাম কমেছে <span className="text-red-600">▼</span>
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
          যেসব পণ্যের দাম আগের তুলনায় কমেছে।
        </p>

        {fallers.length > 0 ? (
          <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {fallers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-sm text-gray-500">
            দাম কমার তথ্য এখনো যোগ করা হয়নি।
          </p>
        )}
      </section>

      {/* All Products */}
      <section id="সব-পণ্য" className="scroll-mt-6">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          সব পণ্য
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600 sm:text-base">
          পণ্যের নাম সার্চ করুন এবং দাম অনুযায়ী সাজান।
        </p>

        <ProductSearch products={products} />
      </section>
    </div>
  );
}
