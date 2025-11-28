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

  // Smooth scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
 // Handle View Specifications click
  const handleViewSpecifications = () => {
    scrollToSection('aerobott-overview');
  };

    // Handle Request Demo click
  const handleRequestDemo = () => {
    scrollToSection('demo-form');
  };

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
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
            style={{
              filter: "brightness(0.7) contrast(1.2)",
              transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0001})`,
            }}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/survey.mp4" type="video/mp4" />
            {/* Fallback image if video fails to load */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/images/fallback-bg.jpg')",
                filter: "brightness(0.7)"
              }}
            />
          </video>
          
          {/* Video overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        
        {/* Bottom gradient for smooth section transition */}
        <div className="w-full h-24 sm:h-32 lg:h-36 absolute left-0 bottom-0 bg-gradient-to-b from-transparent to-zinc-950 z-10"></div>
        
        {/* Animated particles - Responsive count */}
        <div className="absolute inset-0 z-10">
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
        <div className="relative flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto text-center z-20">
          {/* Main Content */}
          <div className="text-white z-10 w-full">
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-normal mb-4 sm:mb-6 md:mb-8 bg-clip-text text-gray-200 leading-tight tracking-wide px-2"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
               Map Smarter. Build Faster!
            </h1>
            
            <p 
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 md:mb-10 text-gray-200 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto font-normal leading-relaxed px-2"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              Empowering surveyors, infrastructure planners, and GIS professionals with high-accuracy drone mapping and aerial data collection.
            </p>
            
            {/* Single button layout */}
             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full max-w-md sm:max-w-none mx-auto">
              <button 
                onClick={handleViewSpecifications}
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
                onClick={handleRequestDemo}
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
          
          /* Video specific styles */
          video {
            transition: transform 0.1s ease-out;
          }
          
          /* Ensure smooth scrolling on mobile */
          @media (max-width: 768px) {
            video {
              transform: translate(-50%, -50%) !important;
            }
          }
          
          /* Handle video loading states */
          video::-webkit-media-controls {
            display: none !important;
          }
          
          video::-moz-media-controls {
            display: none !important;
          }
          
          video::-ms-media-controls {
            display: none !important;
          }
        `}</style>
      </div>
    </>
  );
};

export default Banner;