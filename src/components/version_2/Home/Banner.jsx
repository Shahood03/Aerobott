import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const slides = [
    {
      id: 0,
      title: 'Drone Manufacturing',
      subtitle: 'Chase the View',
      description: 'Dual-Camera Drone for Travel Photography',
      image: '/api/placeholder/1200/600',
      backgroundImage: '/images/drone/b2.jpg', 
      product: '',
      url: '/products/aero-air-3s'
    },
    {
      id: 1,
      title: 'Drone Training',
      subtitle: 'Capture Beyond',
      description: 'Professional Aerial Imaging System',
      image: '/api/placeholder/1200/600',
      backgroundImage: '/images/drone/b3.jpg', 
      product: 'DPT',
      url: '/products/mavic-4-pro'
    },
    {
      id: 2,
      title: 'Drone As Defence',
      subtitle: 'Create With Clarity',
      description: 'Stabilized Pocket Camera',
      image: '/api/placeholder/1200/600',
      backgroundImage: '/images/drone/b4.jpg',
      product: 'DAAS',
      url: '/products/osmo-pocket-3'
    },
    {
      id: 3,
      title: 'Agri Drone',
      subtitle: 'Farm From Above',
      description: 'Precision Agriculture Mapping & Spraying',
      image: '/api/placeholder/1200/600',
      backgroundImage: '/images/drone/b1.jpg',
      product: 'Aero Agri',
      url: '/products/agras-t40'
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    let rotationTimer;
    
    // Only set up the rotation if not currently animating
    if (!isAnimating) {
      rotationTimer = setTimeout(() => {
        nextSlide();
      }, 5000);
    }
    
    // Cleanup function to clear the timer
    return () => {
      if (rotationTimer) clearTimeout(rotationTimer);
    };
  }, [currentSlide, isAnimating]);

  const animationDuration = 1200;

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      const nextIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
      
      setTimeout(() => {
        setCurrentSlide(nextIndex);
        
        setTimeout(() => {
          setIsAnimating(false);
        }, 50);
      }, animationDuration - 50);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
      
      setTimeout(() => {
        setCurrentSlide(prevIndex);
        
        setTimeout(() => {
          setIsAnimating(false);
        }, 50);
      }, animationDuration - 50);
    }
  };

  // Function to handle redirection
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Google Fonts Import */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap" 
        rel="stylesheet" 
      />
      
      {/* Background images with improved transition */}
      <div className="absolute inset-0 bg-gray-900 z-0"></div>
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center ${
            currentSlide === index 
              ? 'opacity-100 z-0' 
              : 'opacity-0 -z-10'
          }`}
          style={{ 
            backgroundImage: `url(${slide.backgroundImage})`,
            transform: `scale(${currentSlide === index ? (isAnimating ? '1.03' : '1') : '1.1'})`,
            transition: `opacity ${animationDuration}ms ease-in-out, transform ${animationDuration}ms ease-in-out`,
          }}
        />
      ))}
      
      {/* Enhanced gradient overlay with subtle parallax effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80 z-0"
        style={{ 
          transition: `opacity ${animationDuration}ms ease-in-out`,
          opacity: isAnimating ? '0.9' : '0.8' 
        }} 
      />
      
      {/* Content container with enhanced animations - Made responsive */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 z-10">
        <div 
          className={`transform transition-all ease-in-out text-center max-w-4xl ${
            isAnimating ? 'opacity-0 translate-y-10 duration-700' : 'opacity-100 translate-y-0 duration-1000 delay-300'
          }`}
          style={{
            transitionDelay: isAnimating ? '0ms' : '300ms',
            fontFamily: '"Raleway", sans-serif'
          }}
        >
          <p className="text-white/90 text-center text-sm sm:text-base lg:text-lg font-light mb-2 animate-fadeIn px-2" 
             style={{ animationDelay: '300ms' }}>
            {slides[currentSlide].description}
          </p>
          <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-2 animate-fadeIn leading-tight px-2"
              style={{ animationDelay: '450ms' }}>
            {slides[currentSlide].title}
          </h1>
          <p className="text-white/90 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-6 sm:mb-8 animate-fadeIn px-2"
             style={{ animationDelay: '600ms' }}>
            {slides[currentSlide].subtitle}
          </p>
        </div>
      </div>
      
      {/* Enhanced navigation arrows with better accessibility and animations - Made responsive */}
      <button 
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-md p-2 sm:p-3 rounded-full text-white z-20 transition-all duration-300 hover:scale-110 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6 transition-transform duration-300 transform group-hover:translate-x-[-2px]" />
      </button>
      
      <button 
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 backdrop-blur-md p-2 sm:p-3 rounded-full text-white z-20 transition-all duration-300 hover:scale-110 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6 transition-transform duration-300 transform group-hover:translate-x-[2px]" />
      </button>
      
      {/* DESKTOP INDICATORS - Hidden on mobile */}
      <div className="desktop-indicators hidden sm:block">
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10 animate-fadeIn"
             style={{ animationDelay: '900ms' }}>
          {/* Manual slide selection indicators */}
          <div className="flex gap-3">
            {slides.map((slide, index) => (
              <button 
                key={slide.id} 
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer hover:bg-white focus:outline-none min-h-[24px] min-w-[24px] flex items-center justify-center touch-manipulation ${
                  currentSlide === index 
                    ? 'w-8 bg-white shadow-glow' 
                    : 'w-4 bg-white/40 hover:bg-white/60'
                }`}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentSlide(index);
                    setTimeout(() => setIsAnimating(false), animationDuration);
                  }
                }}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                style={{
                  boxShadow: currentSlide === index ? '0 0 10px rgba(255, 255, 255, 0.7)' : 'none'
                }}
              />
            ))}
          </div>
          {slides[currentSlide].product && (
            <div 
              className="text-white/90 text-sm font-medium hover:text-white cursor-pointer flex items-center transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full min-h-[36px] touch-manipulation"
              onClick={() => handleRedirect(slides[currentSlide].url)}
              style={{ fontFamily: '"Raleway", sans-serif' }}
            >
              <span>{slides[currentSlide].product}</span>
              <ChevronRight size={14} className="ml-1 transition-transform duration-300 transform group-hover:translate-x-[2px]" />
            </div>
          )}
        </div>
      </div>

      {/* MOBILE INDICATORS - Hidden on desktop */}
      <div className="mobile-indicators block sm:hidden">
        <div className="fixed bottom-4 left-0 right-0 flex flex-col items-center justify-center gap-2 z-30 px-4"
             style={{ animationDelay: '900ms' }}>
          {/* Manual slide selection indicators */}
          <div className="flex items-center justify-center gap-2">
            {slides.map((slide, index) => (
              <button 
                key={slide.id} 
                className={`mobile-dot h-1 rounded-full transition-all duration-300 cursor-pointer hover:bg-white focus:outline-none min-h-[36px] min-w-[36px] flex items-center justify-center touch-manipulation ${
                  currentSlide === index 
                    ? 'w-3 bg-white mobile-dot-active' 
                    : 'w-1.5 bg-white/40 hover:bg-white/60 mobile-dot-inactive'
                }`}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentSlide(index);
                    setTimeout(() => setIsAnimating(false), animationDuration);
                  }
                }}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              />
            ))}
          </div>
          {slides[currentSlide].product && (
            <div 
              className="mobile-product-label text-white/90 text-xs font-medium hover:text-white cursor-pointer flex items-center transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/10 px-3 py-1.5 rounded-full min-h-[32px] touch-manipulation mx-auto"
              onClick={() => handleRedirect(slides[currentSlide].url)}
              style={{ fontFamily: '"Raleway", sans-serif' }}
            >
              <span>{slides[currentSlide].product}</span>
              <ChevronRight size={12} className="ml-1 transition-transform duration-300 transform group-hover:translate-x-[2px]" />
            </div>
          )}
        </div>
      </div>

      {/* Add keyframe animations to the stylesheet */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap');
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .shadow-glow {
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
        }
        .touch-manipulation {
          touch-action: manipulation;
        }
        
        /* Apply Raleway font globally to the component */
        * {
          font-family: 'Raleway', sans-serif;
        }
        
        /* ===== DESKTOP SPECIFIC STYLES ===== */
        @media (min-width: 640px) {
          .desktop-indicators {
            display: block !important;
          }
          .mobile-indicators {
            display: none !important;
          }
        }
        
        /* ===== MOBILE SPECIFIC STYLES ===== */
        @media (max-width: 639px) {
          .desktop-indicators {
            display: none !important;
          }
          .mobile-indicators {
            display: block !important;
          }
          
          /* Mobile dot styles */
          .mobile-dot {
            height: 4px !important;
            border-radius: 9999px !important;
            transition: all 300ms ease !important;
            cursor: pointer !important;
            min-height: 36px !important;
            min-width: 36px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            touch-action: manipulation !important;
          }
          
          .mobile-dot-active {
            width: 12px !important;
            background-color: white !important;
            box-shadow: 0 0 8px rgba(255, 255, 255, 0.6) !important;
          }
          
          .mobile-dot-inactive {
            width: 6px !important;
            background-color: rgba(255, 255, 255, 0.4) !important;
          }
          
          .mobile-dot-inactive:hover {
            background-color: rgba(255, 255, 255, 0.6) !important;
          }
          
          /* Mobile product label styles */
          .mobile-product-label {
            color: rgba(255, 255, 255, 0.9) !important;
            font-size: 0.75rem !important;
            font-weight: 500 !important;
            cursor: pointer !important;
            display: flex !important;
            align-items: center !important;
            transition: all 300ms ease !important;
            backdrop-filter: blur(4px) !important;
            background-color: rgba(255, 255, 255, 0.1) !important;
            padding: 0.375rem 0.75rem !important;
            border-radius: 9999px !important;
            min-height: 32px !important;
            touch-action: manipulation !important;
            margin: 0 auto !important;
          }
          
          .mobile-product-label:hover {
            color: white !important;
            transform: scale(1.05) !important;
          }
          
          /* Mobile container positioning */
          .mobile-indicators > div {
            position: fixed !important;
            bottom: 1rem !important;
            left: 0 !important;
            right: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 0.5rem !important;
            z-index: 30 !important;
            padding: 0 1rem !important;
          }
          
          /* Mobile dots container */
          .mobile-indicators .flex {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 0.5rem !important;
          }
        }
        
        /* Extra small screens */
        @media (max-width: 375px) {
          .mobile-indicators > div {
            padding: 0 0.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;