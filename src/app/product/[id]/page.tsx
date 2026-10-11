
import { products } from "@/data/products";
import { marketPrices } from "@/data/market-prices";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetails({ params }: Props) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin");
  }

  const { id } = await params;
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    notFound();
  }

  const prices = marketPrices.filter(
    (item) => item.productId === product.id
  );

  const priceValues = prices.map((item) => item.price);

  const minPrice =
    priceValues.length > 0 ? Math.min(...priceValues) : product.price;

  const maxPrice =
    priceValues.length > 0 ? Math.max(...priceValues) : product.price;

  const averagePrice =
    priceValues.length > 0
      ? Math.round(
          priceValues.reduce((total, price) => total + price, 0) /
            priceValues.length
        )
      : product.price;

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-6 sm:py-10">
      <Link
        href="/"
        className="text-sm font-semibold text-green-700 hover:underline"
      >
        ← হোম পেজে ফিরে যান
      </Link>

      {/* Product Summary */}
      <section className="mt-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-5xl">
            {product.emoji}
          </div>

          <div className="min-w-0">
            <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              {product.name}
            </h1>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              {product.name} এর বাজারদরের সারসংক্ষেপ।
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">
                {product.category}
              </span>

              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                প্রতি {product.unit}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Price Summary */}
      <section className="mt-7">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          মূল্য সারসংক্ষেপ
        </h2>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          <PriceCard title="সর্বনিম্ন দাম" price={minPrice} unit={product.unit} />
          <PriceCard title="সর্বোচ্চ দাম" price={maxPrice} unit={product.unit} />
          <PriceCard title="গড় দাম" price={averagePrice} unit={product.unit} />
        </div>
      </section>

      {/* Market Prices */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          বাজারভিত্তিক আজকের দাম
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          বিভিন্ন বাজারের তালিকাভুক্ত দামের তুলনা।
        </p>

        {prices.length > 0 ? (
          <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead className="bg-green-50 text-gray-700">
                  <tr>
                    <th className="px-4 py-3 font-semibold">বাজার</th>
                    <th className="px-4 py-3 font-semibold">দাম</th>
                    <th className="px-4 py-3 font-semibold">একক</th>
                    <th className="px-4 py-3 font-semibold">আপডেট</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {prices.map((item, index) => (
                    <tr key={`${item.productId}-${item.marketName}-${index}`}>
                      <td className="whitespace-nowrap px-4 py-4 font-medium text-gray-900">
                        {item.marketName}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 font-bold text-green-700">
                        ৳{item.price}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-gray-600">
                        {item.unit}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-gray-600">
                        {item.updatedAt}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="mt-4 rounded-xl border border-dashed border-gray-300 p-6 text-center">
            <p className="font-semibold text-gray-700">
              এই পণ্যের বাজারভিত্তিক দাম এখনো যোগ করা হয়নি।
            </p>
            <p className="mt-2 text-sm text-gray-500">
              আপাতত মূল product data-তে থাকা দাম দেখানো হচ্ছে।
            </p>
          </div>
        )}
      </section>

      <p className="mt-5 text-xs leading-5 text-gray-500">
        দ্রষ্টব্য: বাজারের দামগুলো বর্তমানে নমুনা ডেটা। বাস্তব বাজারদর হিসেবে
        প্রকাশ করার আগে দাম যাচাই করে আপডেট করতে হবে।
      </p>
    </main>
  );
}

function PriceCard({
  title,
  price,
  unit,
}: {
  title: string;
  price: number;
  unit: string;
}) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-gray-600">{title}</p>
      <p className="mt-3 text-2xl font-extrabold text-green-700">
        ৳{price}
      </p>
      <p className="mt-1 text-sm text-gray-500">প্রতি {unit}</p>
    </article>
  );
}
