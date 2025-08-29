import React, { useState, useEffect } from 'react';

// Mock DemoRequestPopup component since it's not available
const DemoRequestPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Request Demo</h2>
        <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          <textarea 
            placeholder="Tell us about your farming needs..." 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg h-24"
          ></textarea>
        </div>
        <div className="flex gap-4 mt-6">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

const Banner = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openDemoPopup = () => {
    setIsDemoPopupOpen(true);
  };

  const closeDemoPopup = () => {
    setIsDemoPopupOpen(false);
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
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/products/p4.jpg')",
              filter: "brightness(0.7) contrast(1.2)",
              transform: `translate(-50%, -50%) scale(${1 + scrollY * 0.0001})`,
              transition: "transform 0.1s ease-out"
            }}
          />
          
          {/* Image overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>
        
        {/* Bottom gradient for smooth section transition */}
        <div className="w-full h-24 sm:h-32 lg:h-36 absolute left-0 bottom-0 bg-gradient-to-b from-transparent to-zinc-950 z-10"></div>
        
        {/* Content Container - Responsive layout */}
        <div className="relative flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto text-center z-20">
          {/* Main Content */}
          <div className="text-white z-10 w-full">
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-normal mb-4 sm:mb-6 md:mb-8 bg-clip-text text-gray-200 leading-tight tracking-wide px-2"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
             FLYT-I - Training Drone
            </h1>
            
            <p 
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 md:mb-10 text-gray-200 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto font-normal leading-relaxed px-2"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              Type-certified training drone with GPS and obstacle avoidance for commercial use, Aerobott has a drone built for your mission.
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
                onClick={openDemoPopup}
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
          
          /* Image specific styles */
          .bg-cover {
            transition: transform 0.1s ease-out;
          }
          
          /* Ensure smooth scrolling on mobile */
          @media (max-width: 768px) {
            .bg-cover {
              transform: translate(-50%, -50%) !important;
            }
          }
        `}</style>
      </div>
      
      {/* Demo Request Popup */}
      <DemoRequestPopup 
        isOpen={isDemoPopupOpen} 
        onClose={closeDemoPopup} 
      />
    </>
  );
};

export default Banner;