import React from 'react';
import { Sparkles, ShoppingBag } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-pink-100 to-yellow-100 opacity-70"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-pulse">
        <Sparkles className="w-6 h-6 text-pink-300" />
      </div>
      <div className="absolute top-40 right-20 animate-bounce">
        <Sparkles className="w-8 h-8 text-yellow-300" />
      </div>
      <div className="absolute bottom-32 left-20 animate-pulse">
        <Sparkles className="w-4 h-4 text-orange-300" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Animated Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-pink-300 to-yellow-300 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 animate-pulse"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-full p-8 shadow-2xl transform transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 animate-float">
              <img 
                src="/3.png" 
                alt="ShopDives Logo" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain transition-all duration-500 group-hover:brightness-110"
              />
            </div>
            {/* Orbiting sparkles */}
            <div className="absolute -top-2 -right-2 animate-spin-slow">
              <Sparkles className="w-4 h-4 text-pink-400" />
            </div>
            <div className="absolute -bottom-2 -left-2 animate-spin-slow" style={{ animationDelay: '1s' }}>
              <Sparkles className="w-3 h-3 text-yellow-400" />
            </div>
          </div>
        </div>

        {/* Tagline */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-800 mb-6 leading-tight">
          Shine Every Day
          <span className="block bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-gradient">
            with ShopDives
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Discover exquisite artificial jewelry that captures hearts and turns heads. 
          Every piece tells a story of elegance and style.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('collections')}
            className="group relative overflow-hidden bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10 flex items-center">
              <ShoppingBag className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Shop Now
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <button 
            onClick={() => scrollToSection('gallery')}
            className="bg-white/80 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-pink-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View Gallery
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-gray-800 mb-2">1000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
            <div className="text-gray-600">Unique Designs</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold text-gray-800 mb-2">100%</div>
            <div className="text-gray-600">Quality Assured</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;