import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Handle scroll effect and mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    checkMobile();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Responsive particle count
  const getParticleCount = () => {
    if (typeof window === 'undefined') return 10;
    if (window.innerWidth < 640) return 8;
    if (window.innerWidth < 768) return 10;
    if (window.innerWidth < 1024) return 15;
    return 20;
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Load Raleway font from Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" 
        rel="stylesheet" 
      />
      
      {/* Background with responsive parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/products/p4.jpg')",
          transform: isMobile ? 'none' : `translateY(${scrollY * 0.2}px)`,
          filter: "brightness(0.4)"
        }}
      />
      
      {/* Animated particles - Responsive count and size */}
      <div className="absolute inset-0">
        {Array.from({ length: getParticleCount() }).map((_, i) => (
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
      <div className="relative flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-7xl mx-auto text-center">
        {/* Main Content */}
        <div className="text-white z-10 w-full">
          <h1 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal mb-4 sm:mb-6 md:mb-8 bg-clip-text text-gray-200 leading-tight tracking-wide px-2"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            FLYT-I - Training Drone
          </h1>
          
          <p 
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 md:mb-10 text-gray-200 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto font-normal leading-relaxed px-4 sm:px-2 lg:px-0"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Type-certified training drone with GPS and obstacle avoidance for commercial use, Aerobott has a drone built for your mission.
          </p>
          
          {/* Responsive button container */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center w-full max-w-sm sm:max-w-md lg:max-w-2xl mx-auto">
            <button 
              className="group relative w-full sm:w-auto px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-[0px_0px_20px_0px_rgba(59,130,246,0.7)] md:hover:shadow-[0px_0px_35px_0px_rgba(59,130,246,0.7)] active:scale-95"
              style={{
                boxShadow: '0px 0px 20px 0px rgba(59,130,246,0.50)',
                outline: '1px solid rgba(147, 197, 253, 0.3)',
                outlineOffset: '-1px'
              }}
            >
              <span 
                className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-tight relative z-10"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                View Specifications
              </span>
            </button>
            
            <button 
              className="group relative w-full sm:w-auto px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 bg-transparent border border-blue-600 rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 hover:bg-blue-600/20 hover:scale-105 hover:shadow-[0px_0px_15px_0px_rgba(59,130,246,0.5)] md:hover:shadow-[0px_0px_25px_0px_rgba(59,130,246,0.5)] active:scale-95"
              style={{
                outline: '1px solid rgba(147, 197, 253, 0.3)',
                outlineOffset: '-1px'
              }}
            >
              <span 
                className="text-blue-300 text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-tight"
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
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0.2; }
        }
        
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        /* Mobile-first optimizations */
        @media (max-width: 640px) {
          @keyframes float {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-5px) rotate(0.5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }
          
          /* Ensure touch-friendly buttons */
          button {
            min-height: 48px;
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
        
        /* Disable parallax on mobile for better performance */
        @media (max-width: 768px) {
          .parallax-bg {
            transform: none !important;
          }
        }
        
        /* Respect reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;