
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-yellow-500/20 px-4 md:px-12 py-4 flex justify-between items-center">
      <div 
        className="flex items-center cursor-pointer group" 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      >
        <div className="text-xl md:text-2xl font-black tracking-tighter">
          <span className="text-white transition-colors group-hover:text-yellow-500">STYLE</span>
          <span className="text-yellow-500 ml-1.5 transition-colors group-hover:text-white">STUDIO</span>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
        <a href="#" className="hover:text-yellow-500 transition-colors">Collections</a>
        <a href="#" className="hover:text-yellow-500 transition-colors">Lookbook</a>
        <a href="#" className="hover:text-yellow-500 transition-colors">Bespoke</a>
        <a href="#contact" onClick={scrollToContact} className="hover:text-yellow-500 transition-colors">Contact</a>
      </div>

      {/* Mobile Toggle */}
      <button 
        className="md:hidden text-yellow-500 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-yellow-500/30 flex flex-col p-8 space-y-6 md:hidden animate-fade-in-down">
          <a href="#" className="text-lg uppercase tracking-widest hover:text-yellow-500" onClick={() => setIsOpen(false)}>Collections</a>
          <a href="#" className="text-lg uppercase tracking-widest hover:text-yellow-500" onClick={() => setIsOpen(false)}>Lookbook</a>
          <a href="#" className="text-lg uppercase tracking-widest hover:text-yellow-500" onClick={() => setIsOpen(false)}>Bespoke</a>
          <a href="#contact" onClick={scrollToContact} className="text-lg uppercase tracking-widest hover:text-yellow-500">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
