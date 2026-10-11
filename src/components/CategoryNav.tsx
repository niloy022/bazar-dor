
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { name: "চাল-ডাল", slug: "rice-dal" },
  { name: "তেল", slug: "oil" },
  { name: "সবজি", slug: "vegetables" },
  { name: "মাছ", slug: "fish" },
  { name: "মাংস", slug: "meat" },
  { name: "ডিম", slug: "eggs" },
  { name: "দুধ", slug: "milk" },
  { name: "মসলা", slug: "spices" },
];

const CategoryNav = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="পণ্যের ক্যাটাগরি"
      className="border-b border-gray-200 bg-white"
    >
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-2 pl-15">
        {categories.map((category) => {
          const isActive =
            pathname === `/category/${category.slug}`;

          return (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              aria-current={isActive ? "page" : undefined}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-green-700 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-800"
              }`}
            >
              {category.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default CategoryNav;
