const Footer = () => {
  return (
    <footer className="bg-yellow-200 py-8">
      <div className="px-8 text-center">
        <p className="text-black text-3xl font-serif font-bold">
          Crafted with care,
        </p>
        <p className="text-black text-2xl italic font-bold">
          and shared with joy.
        </p>
      </div>

      <div className="flex justify-center mt-4 space-x-6 text-black">
        <div className="text-center">
          <h1 className="text-2xl font-semibold font-serif">👩‍🍳 Cookieen</h1>
          <p className="text-sm">Bringing delicious recipes to your table.</p>
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-8 text-lg font-serif">
        <a href="#" className="hover:underline">
          Pinterest
        </a>
        <a href="#" className="hover:underline">
          Twitter
        </a>
        <a href="#" className="hover:underline">
          YouTube
        </a>
        <a href="#" className="hover:underline">
          Facebook
        </a>
      </div>

      <div className="flex justify-center mt-6 text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} Cookieen. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
