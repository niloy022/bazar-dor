
export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  emoji: string;
  change: number;
};

export const products: Product[] = [
  // চাল ও ডাল
  { id: 1, name: "মিনিকেট চাল", category: "rice-dal", price: 70, unit: "কেজি", emoji: "🍚", change: 2.5 },
  { id: 2, name: "নাজিরশাইল চাল", category: "rice-dal", price: 80, unit: "কেজি", emoji: "🍚", change: -1.5 },
  { id: 3, name: "মসুর ডাল", category: "rice-dal", price: 120, unit: "কেজি", emoji: "🫘", change: 1.8 },
  { id: 11, name: "আটাশ চাল", category: "rice-dal", price: 65, unit: "কেজি", emoji: "🍚", change: -2.0 },
  { id: 12, name: "চিনিগুঁড়া চাল", category: "rice-dal", price: 90, unit: "কেজি", emoji: "🍚", change: 0 },
  { id: 13, name: "কালিজিরা চাল", category: "rice-dal", price: 100, unit: "কেজি", emoji: "🍚", change: 1.2 },
  { id: 14, name: "পোলাও চাল", category: "rice-dal", price: 95, unit: "কেজি", emoji: "🍚", change: -0.8 },
  { id: 15, name: "বাসমতি চাল", category: "rice-dal", price: 160, unit: "কেজি", emoji: "🍚", change: 0 },
  { id: 16, name: "মুগ ডাল", category: "rice-dal", price: 140, unit: "কেজি", emoji: "🫘", change: 2.1 },
  { id: 17, name: "ছোলার ডাল", category: "rice-dal", price: 100, unit: "কেজি", emoji: "🫘", change: -1.2 },
  { id: 18, name: "মাষকলাই ডাল", category: "rice-dal", price: 130, unit: "কেজি", emoji: "🫘", change: 0 },
  { id: 19, name: "খেসারি ডাল", category: "rice-dal", price: 90, unit: "কেজি", emoji: "🫘", change: 1.0 },
  { id: 20, name: "অড়হর ডাল", category: "rice-dal", price: 150, unit: "কেজি", emoji: "🫘", change: -0.5 },

  // তেল
  { id: 4, name: "সয়াবিন তেল", category: "oil", price: 170, unit: "লিটার", emoji: "🫗", change: 1.5 },
  { id: 21, name: "সরিষার তেল", category: "oil", price: 220, unit: "লিটার", emoji: "🫗", change: 2.0 },
  { id: 22, name: "পাম অয়েল", category: "oil", price: 150, unit: "লিটার", emoji: "🫗", change: -1.0 },
  { id: 23, name: "অলিভ অয়েল", category: "oil", price: 650, unit: "লিটার", emoji: "🫒", change: 0 },
  { id: 24, name: "নারিকেল তেল", category: "oil", price: 250, unit: "লিটার", emoji: "🥥", change: -1.5 },

  // সবজি
  { id: 5, name: "আলু", category: "vegetables", price: 35, unit: "কেজি", emoji: "🥔", change: -2.5 },
  { id: 25, name: "পেঁয়াজ", category: "vegetables", price: 60, unit: "কেজি", emoji: "🧅", change: 3.0 },
  { id: 26, name: "রসুন", category: "vegetables", price: 160, unit: "কেজি", emoji: "🧄", change: 1.8 },
  { id: 27, name: "টমেটো", category: "vegetables", price: 50, unit: "কেজি", emoji: "🍅", change: -1.8 },
  { id: 28, name: "বেগুন", category: "vegetables", price: 45, unit: "কেজি", emoji: "🍆", change: 0 },
  { id: 29, name: "গাজর", category: "vegetables", price: 60, unit: "কেজি", emoji: "🥕", change: 1.0 },
  { id: 30, name: "শসা", category: "vegetables", price: 40, unit: "কেজি", emoji: "🥒", change: -0.7 },
  { id: 31, name: "কাঁচা মরিচ", category: "vegetables", price: 80, unit: "কেজি", emoji: "🌶️", change: 2.8 },
  { id: 32, name: "ফুলকপি", category: "vegetables", price: 40, unit: "টি", emoji: "🥦", change: -1.0 },
  { id: 33, name: "লাউ", category: "vegetables", price: 50, unit: "টি", emoji: "🥬", change: 0 },

  // মাছ
  { id: 6, name: "রুই মাছ", category: "fish", price: 350, unit: "কেজি", emoji: "🐟", change: 1.5 },
  { id: 35, name: "কাতলা মাছ", category: "fish", price: 350, unit: "কেজি", emoji: "🐟", change: -1.0 },
  { id: 36, name: "তেলাপিয়া মাছ", category: "fish", price: 220, unit: "কেজি", emoji: "🐟", change: 0 },
  { id: 37, name: "পাঙ্গাস মাছ", category: "fish", price: 200, unit: "কেজি", emoji: "🐟", change: -2.0 },
  { id: 38, name: "ইলিশ মাছ", category: "fish", price: 900, unit: "কেজি", emoji: "🐟", change: 2.5 },
  { id: 39, name: "কৈ মাছ", category: "fish", price: 400, unit: "কেজি", emoji: "🐟", change: 0 },

  // মাংস
  { id: 7, name: "ব্রয়লার মুরগি", category: "meat", price: 200, unit: "কেজি", emoji: "🍗", change: -1.5 },
  { id: 41, name: "গরুর মাংস", category: "meat", price: 800, unit: "কেজি", emoji: "🥩", change: 1.0 },
  { id: 42, name: "খাসির মাংস", category: "meat", price: 1100, unit: "কেজি", emoji: "🍖", change: 0 },
  { id: 43, name: "সোনালি মুরগি", category: "meat", price: 320, unit: "কেজি", emoji: "🍗", change: 2.0 },
  { id: 44, name: "দেশি মুরগি", category: "meat", price: 550, unit: "কেজি", emoji: "🍗", change: -0.5 },

  // ডিম
  { id: 8, name: "ডিম", category: "eggs", price: 60, unit: "৪টি", emoji: "🥚", change: -1.0 },
  { id: 46, name: "লাল ডিম", category: "eggs", price: 60, unit: "৪টি", emoji: "🥚", change: 0.5 },
  { id: 47, name: "সাদা ডিম", category: "eggs", price: 55, unit: "৪টি", emoji: "🥚", change: -0.5 },
  { id: 48, name: "হাঁসের ডিম", category: "eggs", price: 80, unit: "৪টি", emoji: "🥚", change: 1.0 },
  { id: 49, name: "দেশি মুরগির ডিম", category: "eggs", price: 100, unit: "৪টি", emoji: "🥚", change: 0 },

  // দুধ ও দুগ্ধজাত পণ্য
  { id: 9, name: "গরুর দুধ", category: "milk", price: 100, unit: "লিটার", emoji: "🥛", change: 1.0 },
  { id: 50, name: "পাস্তুরিত দুধ", category: "milk", price: 100, unit: "লিটার", emoji: "🥛", change: 0 },
  { id: 51, name: "গুঁড়া দুধ", category: "milk", price: 850, unit: "প্যাকেট", emoji: "🥛", change: 1.5 },
  { id: 52, name: "কনডেন্সড মিল্ক", category: "milk", price: 100, unit: "ক্যান", emoji: "🥛", change: -1.0 },
  { id: 53, name: "দই", category: "milk", price: 120, unit: "কেজি", emoji: "🥣", change: 0 },

  // মসলা
  { id: 10, name: "হলুদ গুঁড়া", category: "spices", price: 300, unit: "কেজি", emoji: "🟡", change: 1.2 },
  { id: 54, name: "মরিচ গুঁড়া", category: "spices", price: 400, unit: "কেজি", emoji: "🌶️", change: 2.0 },
  { id: 55, name: "ধনে গুঁড়া", category: "spices", price: 250, unit: "কেজি", emoji: "🌿", change: -1.5 },
  { id: 56, name: "জিরা", category: "spices", price: 600, unit: "কেজি", emoji: "🌿", change: 0 },
  { id: 57, name: "এলাচ", category: "spices", price: 2500, unit: "কেজি", emoji: "🌿", change: 1.0 },
  { id: 58, name: "দারুচিনি", category: "spices", price: 500, unit: "কেজি", emoji: "🌿", change: -0.8 },
  { id: 59, name: "গোলমরিচ", category: "spices", price: 900, unit: "কেজি", emoji: "🌶️", change: 0 },
];
