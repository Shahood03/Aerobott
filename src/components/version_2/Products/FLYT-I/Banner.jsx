import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [scrollY, setScrollY] = useState(0);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/products/p4.jpg')",
          transform: `translateY(${scrollY * 0.2}px)`,
          filter: "brightness(0.4)"
        }}
      />
      
      {/* Animated particles - Responsive count */}
      <div className="absolute inset-0">
        {Array.from({ length: window.innerWidth < 768 ? 10 : window.innerWidth < 1024 ? 15 : 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-blue-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.6,
              animation: `pulse ${1 + Math.random() * 3}s infinite alternate`,
            }}
          />
        ))}
      </div>
      
      {/* Content Container - Fully responsive */}
      <div className="relative flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 2xl:px-24 max-w-7xl mx-auto text-center">
        {/* Main Content */}
        <div className="text-white z-10 w-full">
          <h1 
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-normal mb-4 sm:mb-6 md:mb-8 bg-clip-text text-gray-200 leading-tight tracking-wide"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            FLYT-I - Training Drone
          </h1>
          
          <p 
            className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl mb-6 sm:mb-8 md:mb-10 text-gray-200 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto font-normal leading-relaxed px-2 sm:px-0"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Type-certified training drone with GPS and obstacle avoidance for commercial use, Aerobott has a drone built for your mission.
          </p>
          
          {/* Responsive button container */}
          <div className="flex flex-col xs:flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center w-full max-w-md sm:max-w-2xl mx-auto">
            <button 
              className="group relative w-full xs:w-full sm:w-auto px-6 xs:px-8 sm:px-10 md:px-12 py-3 xs:py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-[0px_0px_20px_0px_rgba(59,130,246,0.7)] sm:hover:shadow-[0px_0px_35px_0px_rgba(59,130,246,0.7)]"
              style={{
                boxShadow: '0px 0px 20px 0px rgba(59,130,246,0.50)',
                outline: '1px solid rgba(147, 197, 253, 0.3)',
                outlineOffset: '-1px'
              }}
            >
              <span 
                className="text-white text-sm xs:text-base sm:text-lg md:text-xl font-normal leading-tight relative z-10"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                View Specifications
              </span>
            </button>
            
            <button 
              className="group relative w-full xs:w-full sm:w-auto px-6 xs:px-8 sm:px-10 md:px-12 py-3 xs:py-4 sm:py-5 bg-transparent border border-blue-600 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:bg-blue-600/20 hover:scale-105 hover:shadow-[0px_0px_15px_0px_rgba(59,130,246,0.5)] sm:hover:shadow-[0px_0px_25px_0px_rgba(59,130,246,0.5)]"
              style={{
                outline: '1px solid rgba(147, 197, 253, 0.3)',
                outlineOffset: '-1px'
              }}
            >
              <span 
                className="text-blue-300 text-sm xs:text-base sm:text-lg md:text-xl font-normal leading-tight"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                Request Demo
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Enhanced CSS for animations and responsive design */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0.2; }
        }
        
        /* Custom responsive breakpoint for very small devices */
        @media (max-width: 475px) {
          .xs\\:text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
          .xs\\:text-base { font-size: 1rem; line-height: 1.5rem; }
          .xs\\:px-8 { padding-left: 2rem; padding-right: 2rem; }
          .xs\\:py-4 { padding-top: 1rem; padding-bottom: 1rem; }
          .xs\\:w-56 { width: 14rem; }
          .xs\\:h-28 { height: 7rem; }
          .xs\\:gap-x-3 { column-gap: 0.75rem; }
          .xs\\:px-4 { padding-left: 1rem; padding-right: 1rem; }
          .xs\\:block { display: block; }
          .xs\\:hidden { display: none; }
          .xs\\:w-full { width: 100%; }
          .xs\\:flex-col { flex-direction: column; }
          .xs\\:max-w-sm { max-width: 24rem; }
        }
        
        /* Enhanced mobile-first animations */
        @media (max-width: 640px) {
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-5px) rotate(0.5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
        }
        
        /* Tablet optimizations */
        @media (min-width: 641px) and (max-width: 1024px) {
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(1.5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
        }
        
        /* Desktop optimizations */
        @media (min-width: 1025px) {
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;