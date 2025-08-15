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
    <>
      {/* Load Raleway font from Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" 
        rel="stylesheet" 
      />
      
      <div className="relative w-full h-screen overflow-hidden bg-black">
        {/* Background with parallax effect */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/products/p3.jpg')",
            transform: `translateY(${scrollY * 0.2}px)`,
            filter: "brightness(0.4)"
          }}
        />
        
        {/* Animated particles - Responsive count */}
        <div className="absolute inset-0">
          {Array.from({ length: window.innerWidth < 768 ? 10 : 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-blue-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.6,
                animation: `pulse ${1 + Math.random() * 3}s infinite alternate`,
              }}
            />
          ))}
        </div>
        
        {/* Content Container - Responsive layout */}
        <div className="relative flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto text-center">
          {/* Main Content */}
          <div className="text-white z-10 w-full">
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-normal mb-4 sm:mb-6 md:mb-8 bg-clip-text text-gray-200 leading-tight tracking-wide px-2"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              Precision Farming Redefined 
            </h1>
            
            <p 
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 md:mb-10 text-gray-200 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto font-normal leading-relaxed px-2"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              Transforming Indian agriculture with AI-powered drone spraying, crop analytics, and sustainable field practices.
            </p>
            
            {/* Responsive button layout */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full max-w-md sm:max-w-none mx-auto">
              <button 
                className="group relative w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-[0px_0px_35px_0px_rgba(59,130,246,0.7)] active:scale-95"
                style={{
                  boxShadow: '0px 0px 28.6px 0px rgba(59,130,246,0.50)',
                  outline: '1px solid rgba(147, 197, 253, 0.3)',
                  outlineOffset: '-1px'
                }}
              >
                <span 
                  className="text-white text-sm sm:text-base md:text-lg font-normal leading-tight relative z-10"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  View Specifications
                </span>
              </button>
              
              <button 
                className="group relative w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-transparent border border-blue-600 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:bg-blue-600/20 hover:scale-105 hover:shadow-[0px_0px_25px_0px_rgba(59,130,246,0.5)] active:scale-95"
                style={{
                  outline: '1px solid rgba(147, 197, 253, 0.3)',
                  outlineOffset: '-1px'
                }}
              >
                <span 
                  className="text-blue-300 text-sm sm:text-base md:text-lg font-normal leading-tight"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  Request Demo
                </span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Add CSS for animations */}
        <style jsx>{`
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(1deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          
          @media (min-width: 768px) {
            @keyframes float {
              0% { transform: translateY(0px) rotate(0deg); }
              50% { transform: translateY(-20px) rotate(2deg); }
              100% { transform: translateY(0px) rotate(0deg); }
            }
          }
          
          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.6; }
            100% { transform: scale(1.5); opacity: 0.2; }
          }
          
          /* Ensure smooth scrolling on mobile */
          @media (max-width: 768px) {
            .parallax-bg {
              transform: none !important;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Banner;