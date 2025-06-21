import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGallery from './components/ProductGallery';
import FeaturedCollections from './components/FeaturedCollections';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50">
      <Header />
      <Hero />
      <ProductGallery />
      <FeaturedCollections />
      <AboutUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;