import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DJIBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef([]);
  
  const slides = [
    {
      id: 0,
      title: 'Drone Manufacturing',
      subtitle: 'Chase the View',
      description: 'Dual-Camera Drone for Travel Photography',
      image: '/api/placeholder/1200/600',
      backgroundImage: '/images/drone/b2.avif', 
      product: '',
      url: '/products/aero-air-3s'
    },
    {
      id: 1,
      title: 'Drone Training',
      subtitle: 'Capture Beyond',
      description: 'Professional Aerial Imaging System',
      image: '/api/placeholder/1200/600',
      backgroundImage: '/images/drone/b3.avif', 
      product: 'DPT',
      url: '/products/mavic-4-pro'
    },
    {
      id: 2,
      title: 'Drone As Defence',
      subtitle: 'Create With Clarity',
      description: 'Stabilized Pocket Camera',
      image: '/api/placeholder/1200/600',
      backgroundImage: '/images/drone/b4.avif',
      product: 'DAAS',
      url: '/products/osmo-pocket-3'
    },
    {
      id: 3,
      title: 'Agri Drone',
      subtitle: 'Farm From Above',
      description: 'Precision Agriculture Mapping & Spraying',
      image: '/api/placeholder/1200/600',
      backgroundImage: '/images/drone/b1.avif',
      product: 'Aero Agri',
      url: '/products/agras-t40'
    }
  ];

 
  useEffect(() => {
    
    const imagePromises = slides.map((slide, index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = slide.backgroundImage;
        img.onload = () => {
          imagesRef.current[index] = img;
          resolve();
        };
        img.onerror = () => resolve();
      });
    });

    // When all images are loaded, update state
    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    if (!imagesLoaded) return; // Don't start rotation until images are loaded
    
    // Clear any existing intervals to prevent multiple timers
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
  }, [currentSlide, imagesLoaded, isAnimating]);

  const animationDuration = 1200; // Slightly shorter for more reliable transitions

  // Debug useEffect to log current slide (can be removed in production)
  useEffect(() => {
    console.log(`Current slide changed to: ${currentSlide} (${slides[currentSlide].title})`);
  }, [currentSlide]);

  const nextSlide = () => {
    if (!isAnimating && imagesLoaded) {
      setIsAnimating(true);
      // Store the next slide index to ensure it's properly calculated
      const nextIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
      console.log(`Moving to next slide: ${nextIndex} (${slides[nextIndex].title})`);
      
      setTimeout(() => {
        setCurrentSlide(nextIndex);
        
        // Shorter delay to reset animation state
        setTimeout(() => {
          setIsAnimating(false);
        }, 50);
      }, animationDuration - 50);
    }
  };

  const prevSlide = () => {
    if (!isAnimating && imagesLoaded) {
      setIsAnimating(true);
      // Store the previous slide index to ensure it's properly calculated
      const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
      
      setTimeout(() => {
        setCurrentSlide(prevIndex);
        
        // Shorter delay to reset animation state
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

  // Loading indicator while images are being preloaded
  if (!imagesLoaded) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-white text-center px-4">
          <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg sm:text-xl">Loading amazing views...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
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
            transitionDelay: isAnimating ? '0ms' : '300ms'
          }}
        >
          <p className="text-white/90 text-center text-sm sm:text-base lg:text-lg font-light mb-2 animate-fadeIn px-2" 
             style={{ animationDelay: '300ms' }}>
            {slides[currentSlide].description}
          </p>
          <h1 className="text-white text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 animate-fadeIn leading-tight px-2"
              style={{ animationDelay: '450ms' }}>
            {slides[currentSlide].title}
          </h1>
          <p className="text-white/90 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-6 sm:mb-8 animate-fadeIn px-2"
             style={{ animationDelay: '600ms' }}>
            {slides[currentSlide].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 animate-fadeIn px-4"
               style={{ animationDelay: '750ms' }}>
            <button 
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 sm:px-6 sm:py-2 rounded-full transition-all duration-300 flex items-center justify-center gap-1 border border-white/30 hover:scale-105 text-sm sm:text-base min-h-[44px] touch-manipulation"
              onClick={() => handleRedirect(`${slides[currentSlide].url}/learn`)}
            >
              Learn More <ChevronRight size={16} />
            </button>
            <button 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 sm:px-6 sm:py-2 rounded-full transition-all duration-300 flex items-center justify-center gap-1 border border-white/30 hover:scale-105 text-sm sm:text-base min-h-[44px] touch-manipulation"
              onClick={() => handleRedirect(slides[currentSlide].url)}
            >
              Buy Now <ChevronRight size={16} />
            </button>
          </div>
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
      
      {/* Enhanced product indicator with animations - Made responsive */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 sm:gap-3 z-10 animate-fadeIn px-4"
           style={{ animationDelay: '900ms' }}>
        {/* Manual slide selection indicators */}
        <div className="flex gap-2 sm:gap-3">
          {slides.map((slide, index) => (
            <button 
              key={slide.id} 
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer hover:bg-white focus:outline-none min-h-[24px] min-w-[24px] flex items-center justify-center touch-manipulation ${
                currentSlide === index 
                  ? 'w-6 sm:w-8 bg-white shadow-glow' 
                  : 'w-3 sm:w-4 bg-white/40 hover:bg-white/60'
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
            className="text-white/90 text-xs sm:text-sm font-medium mt-1 hover:text-white cursor-pointer flex items-center transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full min-h-[32px] touch-manipulation"
            onClick={() => handleRedirect(slides[currentSlide].url)}
          >
            <span>{slides[currentSlide].product}</span>
            <ChevronRight size={12} className="sm:w-3.5 sm:h-3.5 ml-1 transition-transform duration-300 transform group-hover:translate-x-[2px]" />
          </div>
        )}
      </div>

      {/* Add keyframe animations to the stylesheet */}
      <style jsx>{`
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
        
        /* Ensure proper touch targets on mobile */
        @media (max-width: 640px) {
          .min-h-44 {
            min-height: 44px;
          }
          .min-w-44 {
            min-width: 44px;
          }
        }
      `}</style>
    </div>
  );
};

export default DJIBanner;