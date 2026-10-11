
import { products } from "@/data/products";
import Image from "next/image";
import ProductSections from "@/components/ProductSections";
import DateTime from "@/components/DateTime";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-2">
      {/* Hero Banner */}
      <section 


className="mx-auto mb-2 grid w-full max-w-5xl grid-cols-1 items-center gap-3 overflow-hidden rounded-xl bg-green-50 p-3 sm:grid-cols-2 sm:gap-4 sm:p-4 lg:p-5"
>

        {/* Left Content */}
        <div>
          {/* Date and Live Time */}
          <DateTime />

          {/* Main Heading */}
          <h1 className="mt-2 text-xl font-extrabold leading-tight text-gray-900 sm:text-2xl lg:text-3xl">
            আজকের বাজারের দাম
            <span className="block text-green-700">
              এক নজরে
            </span>
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-lg text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            চাল, ডাল, তেল, মাছ, মাংস ও সবজির দাম এক জায়গায় দেখুন।
            বাজার করার আগে জেনে নিন পণ্যের দাম।
          </p>

          {/* Button */}
          <a
            href="#সব-পণ্য"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800 sm:text-base"
          >
            সব পণ্য দেখুন
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Right Side Image */}
        <div className="flex items-center justify-center">
          <Image
            src="/image/bazar-hero.png"
            alt="তাজা সবজি ও নিত্যপ্রয়োজনীয় বাজারের পণ্য"
            width={600}
            height={450}
            priority
            sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 560px"
            className="h-auto w-full max-w-md rounded-xl object-contain"
          />
        </div>
      </section>

      {/* Product Sections */}
      <div className="py-5">
        <ProductSections products={products} />
      </div>
    </main>
  );
}
