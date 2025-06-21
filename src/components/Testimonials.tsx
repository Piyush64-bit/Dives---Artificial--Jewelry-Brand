import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'Absolutely love my purchase from ShopDives! The quality is amazing and the designs are so unique. I get compliments every time I wear their jewelry.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      name: 'Ananya Gupta',
      location: 'Delhi',
      rating: 5,
      text: 'The bridal collection is stunning! I wore ShopDives jewelry on my wedding day and felt like a princess. The quality is exceptional for the price.',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 3,
      name: 'Meera Patel',
      location: 'Bangalore',
      rating: 5,
      text: 'Fast delivery and beautiful packaging! The earrings I ordered look exactly like the photos. ShopDives has become my go-to for all jewelry needs.',
      image: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 4,
      name: 'Kavya Reddy',
      location: 'Hyderabad',
      rating: 5,
      text: 'The customer service is outstanding! They helped me choose the perfect necklace for my sister\'s birthday. She absolutely loved it!',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 via-pink-50 to-yellow-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl mx-4 md:mx-8">
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                      {/* Quote Icon */}
                      <div className="flex-shrink-0">
                        <div className="bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 p-4 rounded-full">
                          <Quote className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <div className="flex-1 text-center md:text-left">
                        {/* Stars */}
                        <div className="flex justify-center md:justify-start space-x-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic">
                          "{testimonial.text}"
                        </p>

                        {/* Customer Info */}
                        <div className="flex items-center justify-center md:justify-start space-x-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-800">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {testimonial.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent mb-2">
              4.9
            </div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent mb-2">
              1000+
            </div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent mb-2">
              2000+
            </div>
            <div className="text-gray-600">Orders Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent mb-2">
              99%
            </div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;