
const prices = [
  { emoji: "🍚", name: "চাল", price: 65, unit: "কেজি", change: 1.2 },
  { emoji: "🫘", name: "মসুর ডাল", price: 120, unit: "কেজি", change: -2.0 },
  { emoji: "🫚", name: "আদা", price: 180, unit: "কেজি", change: 3.0 },
  { emoji: "🧄", name: "রসুন", price: 160, unit: "কেজি", change: -1.2 },
  { emoji: "🥜", name: "বাদাম", price: 200, unit: "কেজি", change: 0.8 },
  { emoji: "🧅", name: "পেঁয়াজ", price: 60, unit: "কেজি", change: -1.8 },
  { emoji: "🫘", name: "ছোলা", price: 90, unit: "কেজি", change: 2.1 },
];

const PriceTicker = () => {
  const items = [...prices, ...prices];

  return (
    <div className="overflow-hidden border-b bg-green-50">
      <div className="flex w-max animate-ticker">
        {items.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex shrink-0 items-center gap-2 border-r border-green-200 px-5 py-1 text-sm"
          >
            <span className="text-lg">{item.emoji}</span>

            <span className="font-semibold text-gray-800">
              {item.name}
            </span>

            <span className="font-bold text-gray-900">
              ৳{item.price}/{item.unit}
            </span>

            <span
              className={`font-semibold ${
                item.change > 0
                  ? "text-red-600"
                  : item.change < 0
                    ? "text-green-700"
                    : "text-gray-500"
              }`}
            >
              {item.change > 0 ? "▲" : item.change < 0 ? "▼" : "—"}
              {item.change !== 0
                ? ` ${Math.abs(item.change).toFixed(1)}%`
                : " 0%"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceTicker;
