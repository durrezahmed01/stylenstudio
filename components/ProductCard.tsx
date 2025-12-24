
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative overflow-hidden bg-black/40 border border-yellow-500/10 hover:border-yellow-500/50 transition-all duration-500 rounded-lg">
      <div className="aspect-[4/5] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold tracking-wide text-white group-hover:text-yellow-500 transition-colors">
            {product.name}
          </h3>
          <span className="text-yellow-500 font-bold">{product.price}</span>
        </div>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
        <button className="w-full py-3 border border-yellow-500/30 text-yellow-500 hover:bg-yellow-500 hover:text-black font-bold uppercase tracking-widest text-xs transition-all duration-300">
          Enquire Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
