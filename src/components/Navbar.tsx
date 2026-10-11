
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { signOut, useSession } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const [banglaDate, setBanglaDate] = useState("");

  useEffect(() => {
    setBanglaDate(
      new Intl.DateTimeFormat("bn-BD", {
        timeZone: "Asia/Dhaka",
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date()),
    );
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push("/signin");
      router.refresh();
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-3 gap-y-2 px-3 py-3 sm:flex-nowrap sm:px-4 sm:py-4">
        <Link href="/" className="min-w-0 shrink-0">
          <span className="block whitespace-nowrap text-lg font-extrabold text-green-700 sm:text-2xl">
            🛒 বাজার দর
          </span>

          <span className="mt-1 block text-xs text-gray-500">
            {banglaDate}
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {isPending ? (
            <span className="text-sm text-gray-500">
              লোড হচ্ছে...
            </span>
          ) : session?.user ? (
            <>
              <span className="max-w-36 truncate text-sm font-medium text-gray-700">
                {session.user.name || session.user.email}
              </span>

              <button
                type="button"
                onClick={handleSignOut}
                className="whitespace-nowrap rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700"
              >
                সাইন আউট
              </button>
            </>
          ) : (
            <>
              <Link
                href="/signin"
                className="whitespace-nowrap rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                সাইন ইন
              </Link>

              <Link
                href="/signup"
                className="whitespace-nowrap rounded-lg bg-green-700 px-3 py-2 text-sm font-semibold text-white hover:bg-green-800"
              >
                সাইন আপ
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
