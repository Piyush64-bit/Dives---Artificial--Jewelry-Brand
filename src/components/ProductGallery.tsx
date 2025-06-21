import React, { useState } from 'react';
import { Heart, Eye, ShoppingCart } from 'lucide-react';

const ProductGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Rose Gold Elegance',
      category: 'necklaces',
      price: '₹899',
      image: 'https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg?auto=compress&cs=tinysrgb&w=500',
      isNew: true
    },
    {
      id: 2,
      name: 'Pearl Drop Earrings',
      category: 'earrings',
      price: '₹649',
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=500',
      isNew: false
    },
    {
      id: 3,
      name: 'Diamond Sparkle Ring',
      category: 'rings',
      price: '₹1299',
      image: 'https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=500',
      isNew: true
    },
    {
      id: 4,
      name: 'Classic Chain Bracelet',
      category: 'bracelets',
      price: '₹549',
      image: 'https://images.pexels.com/photos/1446624/pexels-photo-1446624.jpeg?auto=compress&cs=tinysrgb&w=500',
      isNew: false
    },
    {
      id: 5,
      name: 'Vintage Choker',
      category: 'necklaces',
      price: '₹799',
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=500',
      isNew: false
    },
    {
      id: 6,
      name: 'Stud Perfection',
      category: 'earrings',
      price: '₹399',
      image: 'https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg?auto=compress&cs=tinysrgb&w=500',
      isNew: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'rings', name: 'Rings' },
    { id: 'bracelets', name: 'Bracelets' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Our Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of stunning artificial jewelry pieces
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 text-white shadow-lg'
                  : 'bg-white/80 text-gray-700 hover:bg-white shadow-md hover:shadow-lg'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* New Badge */}
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-400 to-pink-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    New
                  </div>
                )}

                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors">
                    <Eye className="w-5 h-5 text-gray-800" />
                  </button>
                  <button className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors">
                    <Heart className="w-5 h-5 text-gray-800" />
                  </button>
                  <button className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors">
                    <ShoppingCart className="w-5 h-5 text-gray-800" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
                    {product.price}
                  </span>
                  <button className="bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 text-white px-4 py-2 rounded-full hover:shadow-lg transition-shadow">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;