
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import StylistAI from './components/StylistAI';
import BrandIcon from './components/BrandIcon';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-yellow-500 font-sans selection:bg-yellow-500 selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-110 opacity-50"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop)',
              transform: `translateY(${scrollY * 0.3}px) scale(1.1)`
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-6 animate-fade-in">
            <BrandIcon className="w-20 h-20 md:w-32 md:h-32 mb-4" />
          </div>
          <h2 className="text-yellow-500 text-xs md:text-lg uppercase tracking-[0.5em] font-bold mb-4 md:mb-6 animate-pulse px-4">
            REDEFINE ELEGANCE
          </h2>
          <h1 className="text-5xl md:text-9xl font-black text-white tracking-tighter leading-[0.9] mb-8">
            STYLE <span className="gold-shimmer block">STUDIO</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed italic px-4">
            "Art is not what you see, but what you make others see through style."
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full px-8 sm:px-0">
            <button className="w-full sm:w-auto px-12 py-4 bg-yellow-500 text-black font-bold uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-yellow-500/20 text-sm">
              Explore Collection
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-12 py-4 border border-yellow-500/50 text-yellow-500 font-bold uppercase tracking-widest hover:bg-yellow-500 hover:text-black transition-all transform hover:scale-105 text-sm"
            >
              Visit Atelier
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <i className="fa-solid fa-chevron-down text-xl md:text-2xl"></i>
        </div>
      </section>

      {/* Collection Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 space-y-4">
          <div>
            <span className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-xs">Curated Selection</span>
            <h2 className="text-4xl md:text-7xl font-black text-white mt-2">ESSENTIAL LOOKS</h2>
          </div>
          <a href="#" className="text-yellow-500 uppercase tracking-widest text-xs md:text-sm font-bold border-b border-yellow-500/30 hover:border-yellow-500 transition-all inline-block">
            View All Pieces <i className="fa-solid fa-arrow-right ml-2"></i>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* AI Stylist Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-zinc-950">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <StylistAI />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-xs">Innovation in Fashion</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-2 mb-6 leading-tight">YOUR VIRTUAL <br/><span className="text-yellow-500">CONCIERGE.</span></h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Experience personalized luxury. Our Gemini-powered AI Stylist understands your needs, analyzes current trends, and curates the perfect ensemble for any occasion.
            </p>
            <ul className="space-y-4 text-white font-medium">
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center mr-4">
                  <i className="fa-solid fa-check text-yellow-500 text-xs"></i>
                </div> 
                24/7 Bespoke Advice
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center mr-4">
                  <i className="fa-solid fa-check text-yellow-500 text-xs"></i>
                </div> 
                Trend Forecasting
              </li>
              <li className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-yellow-500/10 flex items-center justify-center mr-4">
                  <i className="fa-solid fa-check text-yellow-500 text-xs"></i>
                </div> 
                Occasion-based Styling
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="contact" className="py-20 md:py-32 px-6 md:px-12 bg-black border-t border-yellow-500/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-yellow-500 font-bold uppercase tracking-[0.4em] text-xs">Visit Us</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-2">OUR ATELIER</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
            <div className="bg-zinc-900/40 p-10 border border-yellow-500/10 rounded-2xl hover:border-yellow-500/40 transition-all duration-500 text-center">
              <div className="w-20 h-20 bg-yellow-500/5 rounded-full flex items-center justify-center mx-auto mb-8">
                <i className="fa-solid fa-user-tie text-3xl text-yellow-500"></i>
              </div>
              <h3 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-3">Creative Director</h3>
              <p className="text-white text-xl font-serif italic">Pro. Abdul Mateen</p>
            </div>

            <div className="bg-zinc-900/40 p-10 border border-yellow-500/10 rounded-2xl hover:border-yellow-500/40 transition-all duration-500 text-center">
              <div className="w-20 h-20 bg-yellow-500/5 rounded-full flex items-center justify-center mx-auto mb-8">
                <i className="fa-solid fa-phone-volume text-3xl text-yellow-500"></i>
              </div>
              <h3 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-3">Private Appointments</h3>
              <a href="tel:9887400358" className="text-yellow-500 text-2xl font-black hover:text-white transition-colors">9887400358</a>
            </div>

            <div className="bg-zinc-900/40 p-10 border border-yellow-500/10 rounded-2xl hover:border-yellow-500/40 transition-all duration-500 text-center sm:col-span-2 md:col-span-1">
              <div className="w-20 h-20 bg-yellow-500/5 rounded-full flex items-center justify-center mx-auto mb-8">
                <i className="fa-solid fa-location-dot text-3xl text-yellow-500"></i>
              </div>
              <h3 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-3">The Flagship Shop</h3>
              <p className="text-gray-400 text-base leading-relaxed">
                Ground floor, Shop No. 77<br/>
                City Center Mall, Sawai Madhopur
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-20 px-6 md:px-12 border-t border-yellow-500/20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <BrandIcon className="w-14 h-14" />
              <div className="text-3xl font-black tracking-tighter">
                <span className="text-white">STYLE</span>
                <span className="text-yellow-500 ml-1">STUDIO</span>
              </div>
            </div>
            <p className="text-gray-500 max-w-sm mb-10 leading-relaxed text-sm md:text-base">
              Defined by a legacy of luxury and precise tailoring. We welcome you to experience haute couture in the heart of Rajasthan.
            </p>
            <div className="flex space-x-8 text-2xl">
              <a href="#" className="text-yellow-500/40 hover:text-white transition-colors"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="text-yellow-500/40 hover:text-white transition-colors"><i className="fa-brands fa-whatsapp"></i></a>
              <a href="#" className="text-yellow-500/40 hover:text-white transition-colors"><i className="fa-brands fa-x-twitter"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8">The Studio</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Our Ethos</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Atelier Services</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Private Viewing</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">Bespoke Fitting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8">Connect</h4>
            <p className="text-gray-500 text-xs mb-6 uppercase tracking-widest">Enquiries to the Director</p>
            <div className="flex flex-col space-y-4">
              <a href="tel:9887400358" className="flex items-center text-yellow-500 hover:text-white font-bold transition-colors">
                <i className="fa-solid fa-phone-volume mr-3"></i> 9887400358
              </a>
              <button className="bg-yellow-500 text-black font-bold py-4 px-6 uppercase tracking-widest text-[10px] hover:bg-white transition-all transform hover:scale-105 active:scale-95">
                Navigate to Atelier
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-yellow-500/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-[0.3em] font-bold">
          <p className="text-center md:text-left">&copy; 2025 STYLE STUDIO • CURATED BY PRO. ABDUL MATEEN</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
