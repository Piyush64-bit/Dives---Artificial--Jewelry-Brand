import React from "react";
import { Instagram, MessageCircle, Mail, Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-orange-100 via-pink-100 to-yellow-100 text-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4 group">
              <div className="relative ">
                <img src="/2.png" alt="ShopDives Logo" className="w-10 h-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-pink-300 to-yellow-300 opacity-0 group-hover:opacity-30 rounded-full blur-sm transition-opacity duration-500"></div>
              </div>
              <span className="text-2xl font-bold font-serif bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent transition-transform duration-300 ease-in-out group-hover:scale-110 inline-block">
                ShopDives
              </span>
            </div>
            <p className="text-zinc-700 mb-6 max-w-md leading-relaxed">
              Shine every day with our beautiful collection of artificial
              jewelry. Quality, elegance, and affordability - all in one place.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/shopdives.in"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:scale-110 transition-transform duration-300 hover:shadow-md"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 p-3 rounded-full hover:scale-110 transition-transform duration-300 hover:shadow-md"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:hello@shopdives.in"
                className="bg-blue-500 p-3 rounded-full hover:scale-110 transition-transform duration-300 hover:shadow-md"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-rose-800 font-serif">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Home", id: "hero" },
                { label: "Gallery", id: "gallery" },
                { label: "Collections", id: "collections" },
                { label: "About Us", id: "about" },
                { label: "Contact", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-zinc-600 hover:text-rose-600 transition-colors hover:underline underline-offset-4"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-rose-800 font-serif">
              Collections
            </h3>
            <ul className="space-y-2 text-zinc-600">
              {[
                "Bridal Collection",
                "Daily Wear",
                "Party Glamour",
                "Gift Sets",
                "Earrings",
                "Necklaces",
                "Rings",
                "Bracelets",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-orange-600 transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-zinc-300">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4 text-rose-800 font-serif">
              Stay Updated
            </h3>
            <p className="text-zinc-700 mb-4 leading-relaxed">
              Subscribe to get notifications about new collections and exclusive
              offers.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white border border-zinc-300 focus:border-rose-400 focus:outline-none text-zinc-800 placeholder-zinc-500 shadow-sm"
              />
              <button className="bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-300 flex flex-col md:flex-row justify-between items-center">
          <div className="text-zinc-500 text-sm mb-4 md:mb-0">
            © 2025 ShopDives. All rights reserved.
          </div>
          <div className="flex items-center text-zinc-500 text-sm">
            Designed & Developed with{" "}
            <Heart
              className="w-4 h-4 mx-1 text-red-500 animate-pulse"
              fill="currentColor"
            />{" "}
            by P I Y U $ H
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
