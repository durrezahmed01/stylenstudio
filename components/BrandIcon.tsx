
import React from 'react';

interface BrandIconProps {
  className?: string;
}

const BrandIcon: React.FC<BrandIconProps> = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full text-yellow-500 drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Hanger Hook */}
        <path 
          d="M50 25 C50 15, 65 15, 65 25 C65 28, 60 30, 50 35 L50 40" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round"
        />
        
        {/* Hanger Frame/Shoulders */}
        <path 
          d="M10 65 C30 50, 45 40, 50 40 C55 40, 70 50, 90 65" 
          stroke="currentColor" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* The 'SS' Branding Hanging Below */}
        <text 
          x="50" 
          y="85" 
          textAnchor="middle" 
          fill="currentColor" 
          className="font-black italic tracking-tighter"
          style={{ fontSize: '38px', fontFamily: 'serif' }}
        >
          SS
        </text>
        
        {/* Subtle glow/sparkle animation point */}
        <circle cx="50" cy="40" r="1.5" fill="white" className="animate-pulse" />
      </svg>
    </div>
  );
};

export default BrandIcon;
