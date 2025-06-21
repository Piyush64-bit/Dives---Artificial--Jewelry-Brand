import React from 'react';
import { Award, Users, Sparkles, Heart } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Each piece is crafted with attention to detail and quality materials'
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority with dedicated customer service'
    },
    {
      icon: Sparkles,
      title: 'Unique Designs',
      description: 'Exclusive designs that you won\'t find anywhere else'
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every piece is created with passion and care for jewelry lovers'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              ShopDives was born from a passion for beautiful, accessible jewelry. We believe that 
              every person deserves to feel elegant and confident, regardless of their budget. 
              Our mission is to create stunning artificial jewelry that rivals the beauty of 
              precious metals and stones.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From our humble beginnings to becoming a trusted name in artificial jewelry, 
              we've maintained our commitment to quality, affordability, and customer satisfaction. 
              Each piece in our collection is carefully selected and crafted to ensure you shine 
              every day.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 p-3 rounded-full">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-pink-200 to-yellow-200 rounded-3xl blur-3xl opacity-30"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <img
                src="https://images.pexels.com/photos/1395306/pexels-photo-1395306.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Jewelry collection"
                className="w-full h-80 object-cover rounded-2xl"
              />
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 text-white p-4 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">3+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border">
                <div className="text-2xl font-bold text-gray-800">1000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-gray-800 mb-4">
              Our Values
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at ShopDives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Quality</h4>
              <p className="text-gray-600">
                We never compromise on the quality of our materials and craftsmanship
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-100 to-yellow-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-pink-500" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Passion</h4>
              <p className="text-gray-600">
                Every piece is created with love and dedication to jewelry artistry
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-yellow-500" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">Excellence</h4>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our business
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;