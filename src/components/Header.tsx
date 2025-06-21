import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <div className="relative transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <img 
                src="/favicon.png" 
                alt="ShopDives Logo" 
                className="w-20 h-20 md:w-14 md:h-14 object-contain animate-pulse group-hover:animate-none transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-pink-300 to-yellow-300 opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity duration-500"></div>
            </div>
            <span className="text-2xl font-bold text-gray-800 font-serif group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:via-pink-400 group-hover:to-yellow-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              ShopDives
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-[#f46d85] hover:scale-110 transition-colors font-medium duration-200"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('collections')}
              className="text-gray-700 hover:text-[#f46d85] hover:scale-110 transition-colors font-medium duration-200"
            >
              Collections
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#f46d85] hover:scale-110 transition-colors font-medium duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-[#f46d85] hover:scale-110 transition-colors font-medium duration-200"
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#f46d85] hover:scale-110 transition-colors font-medium duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Social Links & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/shopdives.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#f46d85] transition-colors transform hover:scale-110 duration-200"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/your-number" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-green-500 transition-colors transform hover:scale-110 duration-200"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-gray-900 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium w-full text-left"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('collections')}
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium w-full text-left"
              >
                Collections
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium w-full text-left"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;