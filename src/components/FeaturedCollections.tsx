import React from 'react';
import { Crown, Heart, Star, Gift } from 'lucide-react';

const FeaturedCollections = () => {
  const collections = [
    {
      id: 1,
      name: 'Bridal Collection',
      description: 'Elegant pieces for your special day',
      icon: Crown,
      image: 'https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg?auto=compress&cs=tinysrgb&w=600',
      itemCount: '25+ items',
      color: 'from-orange-400 to-pink-400'
    },
    {
      id: 2,
      name: 'Daily Wear',
      description: 'Comfortable elegance for everyday',
      icon: Heart,
      image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=600',
      itemCount: '40+ items',
      color: 'from-pink-400 to-yellow-400'
    },
    {
      id: 3,
      name: 'Party Glamour',
      description: 'Dazzling pieces for special occasions',
      icon: Star,
      image: 'https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=600',
      itemCount: '30+ items',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      id: 4,
      name: 'Gift Sets',
      description: 'Perfect combinations for gifting',
      icon: Gift,
      image: 'https://images.pexels.com/photos/1446624/pexels-photo-1446624.jpeg?auto=compress&cs=tinysrgb&w=600',
      itemCount: '15+ sets',
      color: 'from-orange-400 via-pink-400 to-yellow-400'
    }
  ];

  return (
    <section id="collections" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Featured Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curated collections for every occasion and style preference
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection) => (
            <div 
              key={collection.id}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Collection Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                
                {/* Icon */}
                <div className="absolute top-4 right-4">
                  <div className={`bg-gradient-to-r ${collection.color} p-3 rounded-full shadow-lg`}>
                    <collection.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Collection Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {collection.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {collection.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {collection.itemCount}
                  </span>
                  <button className={`bg-gradient-to-r ${collection.color} text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-shadow`}>
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-100 via-pink-100 to-yellow-100 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-serif font-bold text-gray-800 mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              We create custom pieces tailored to your style. Get in touch with us for personalized jewelry designs.
            </p>
            <button className="bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Request Custom Design
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;