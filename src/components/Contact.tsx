import React from 'react';
import { MessageCircle, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to find your perfect piece? We're here to help you shine every day
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Let's Connect
            </h3>
            
            <div className="space-y-6">
              {/* WhatsApp */}
              <a 
                href="https://wa.me/your-number" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-green-500 p-3 rounded-full group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                  <p className="text-gray-600">Quick orders and instant support</p>
                </div>
              </a>

              {/* Instagram */}
              <a 
                href="https://www.instagram.com/shopdives.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full group-hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Instagram</h4>
                  <p className="text-gray-600">@shopdives.in - Follow for updates</p>
                </div>
              </a>

              {/* Email */}
              <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                <div className="bg-blue-500 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">hello@shopdives.in</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                <div className="bg-orange-500 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+91 9660283856</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-12 p-6 bg-gradient-to-r from-orange-100 via-pink-100 to-yellow-100 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-gray-700" />
                <h4 className="text-lg font-semibold text-gray-800">Business Hours</h4>
              </div>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>10:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>12:00 PM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-300 focus:ring-2 focus:ring-pink-200 transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-300 focus:ring-2 focus:ring-pink-200 transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-300 focus:ring-2 focus:ring-pink-200 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-300 focus:ring-2 focus:ring-pink-200 transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-300 focus:ring-2 focus:ring-pink-200 transition-colors resize-none"
                  placeholder="Tell us about your jewelry needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-orange-400 via-pink-400 to-yellow-400 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Start Shopping?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Browse our collection and find the perfect piece for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/your-number" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-colors"
              >
                Order via WhatsApp
              </a>
              <a 
                href="https://www.instagram.com/shopdives.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-colors"
              >
                DM on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;