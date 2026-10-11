
const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-3 px-8 py-8 sm:flex-row sm:items-center">
        {/* Left Side */}
        <div>
          
          <p className="mt-1 text-sm text-gray-600">
            প্রয়োজনীয় পণ্যের দাম এক নজরে
          </p>
        </div>

        {/* Right Side */}
        <p className="text-sm leading-6 text-gray-500 sm:max-w-sm sm:text-right">
          সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
        </p>
      </div>
    </footer>
  );
};

export default Footer;
