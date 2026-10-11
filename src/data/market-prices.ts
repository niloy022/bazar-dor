
export type MarketPrice = {
  productId: number;
  marketName: string;
  price: number;
  unit: string;
  updatedAt: string;
};

export const marketPrices: MarketPrice[] = [
  // মিনিকেট চাল — নমুনা দাম
  {
    productId: 1,
    marketName: "কাজীর দেউড়ি বাজার",
    price: 68,
    unit: "কেজি",
    updatedAt: "আজ",
  },
  {
    productId: 1,
    marketName: "রিয়াজউদ্দিন বাজার",
    price: 72,
    unit: "কেজি",
    updatedAt: "আজ",
  },
  {
    productId: 1,
    marketName: "চকবাজার",
    price: 70,
    unit: "কেজি",
    updatedAt: "আজ",
  },

  // নাজিরশাইল চাল — নমুনা দাম
  {
    productId: 2,
    marketName: "কাজীর দেউড়ি বাজার",
    price: 78,
    unit: "কেজি",
    updatedAt: "আজ",
  },
  {
    productId: 2,
    marketName: "রিয়াজউদ্দিন বাজার",
    price: 82,
    unit: "কেজি",
    updatedAt: "আজ",
  },
  {
    productId: 2,
    marketName: "চকবাজার",
    price: 80,
    unit: "কেজি",
    updatedAt: "আজ",
  },

  // আলু — নমুনা দাম
  {
    productId: 5,
    marketName: "কাজীর দেউড়ি বাজার",
    price: 32,
    unit: "কেজি",
    updatedAt: "আজ",
  },
  {
    productId: 5,
    marketName: "রিয়াজউদ্দিন বাজার",
    price: 38,
    unit: "কেজি",
    updatedAt: "আজ",
  },
  {
    productId: 5,
    marketName: "চকবাজার",
    price: 35,
    unit: "কেজি",
    updatedAt: "আজ",
  },
];
