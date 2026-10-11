
"use client";

import { useEffect, useState } from "react";

export default function DateTime() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const updateTime = () => {
      setNow(new Date());
    };

    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!now) {
    return (
      <div className="mb-4 inline-block rounded-xl bg-green-100 px-4 py-3 text-green-800">
        সময় লোড হচ্ছে...
      </div>
    );
  }

  const date = new Intl.DateTimeFormat("bn-BD", {
    timeZone: "Asia/Dhaka",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(now);

  const time = new Intl.DateTimeFormat("bn-BD", {
    timeZone: "Asia/Dhaka",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(now);

  return (
    <div className="mb-3 inline-flex flex-col gap-1 rounded-xl border border-green-200 bg-green-100 px-3 py-2 text-green-800">
      <p className="text-sm font-semibold">
        📅 {date}
      </p>

      <p className="text-lg font-bold">
        🕒 {time}
      </p>
    </div>
  );
}
