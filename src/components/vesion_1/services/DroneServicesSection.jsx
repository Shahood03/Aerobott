import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DroneServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const particlesContainerRef = useRef(null);
  
  const services = [
    {
      title: "Drone as a service",
      description: "Discover the power of drones as a service platform for survey & mapping, photography, videography and more. Streamline data collection, surveillance and visual impact with our cutting-edge drone services.",
      image: "/images/drone/pngaaa 1.avif"  // This would be replaced with actual image
    },
    {
      title: "Our Drones",
      description: "Explore the dynamism of our training drone, Agriculture drone and surveillance drone, tailored and manufactured to suit different industries",
      image: "/images/drone/d6.avif"  // This would be replaced with actual image
    },
    {
      title: "Hire a Pilot",
      description: "Hire a pilot for your location and unlock the excellence of aerial mastery with professionally licensed pilots.",
      image: "/images/drone/d7.avif"  // This would be replaced with actual image
    }
  ];

  const nextSlide = () => {
    if (!animating) {
      setAnimating(true);
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
      setTimeout(() => setAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!animating) {
      setAnimating(true);
      setActiveIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
      setTimeout(() => setAnimating(false), 500);
    }
  };

  // Function to create and animate particles
  const createParticles = () => {
    if (particlesContainerRef.current) {
      particlesContainerRef.current.innerHTML = '';
      const containerWidth = particlesContainerRef.current.offsetWidth;
      const containerHeight = particlesContainerRef.current.offsetHeight;
      
      // Create more particles for larger screens
      const particleCount = window.innerWidth < 768 ? 20 : 50;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        
        // Create different types of particles
        const particleType = Math.floor(Math.random() * 3);
        
        if (particleType === 0) {
          // Circular particles
          particle.className = 'absolute rounded-full bg-orange-500 opacity-20';
          const size = Math.random() * 6 + 2;
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
        } else if (particleType === 1) {
          // Air stream particles
          particle.className = 'absolute bg-blue-400 opacity-10';
          const width = Math.random() * 50 + 10;
          const height = Math.random() * 2 + 1;
          particle.style.width = `${width}px`;
          particle.style.height = `${height}px`;
          particle.style.transform = `rotate(${Math.random() * 360}deg)`;
        } else {
          // Drone path dots
          particle.className = 'absolute rounded-full bg-white opacity-30';
          const size = Math.random() * 3 + 1;
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;
        }
        
        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Animation parameters - different for each particle type
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 5;
        
        if (particleType === 0) {
          // Float animation for circular particles
          particle.style.animation = `float ${duration}s infinite ease-in-out ${delay}s`;
        } else if (particleType === 1) {
          // Sweep animation for air streams
          particle.style.animation = `sweep ${duration}s infinite ease-in-out ${delay}s`;
        } else {
          // Path animation for drone path dots
          particle.style.animation = `path ${duration}s infinite linear ${delay}s`;
        }
        
        particlesContainerRef.current.appendChild(particle);
      }
    }
  };

  useEffect(() => {
    createParticles();
    
    // Re-create particles when window is resized
    window.addEventListener('resize', createParticles);
    
    // Auto-advance slides
    const slideInterval = setInterval(nextSlide, 6000);
    
    return () => {
      window.removeEventListener('resize', createParticles);
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className="w-full bg-gray-900 py-16 lg:py-24  overflow-hidden relative">
      {/* Animated background particles */}
      <div ref={particlesContainerRef} className="absolute inset-0   pointer-events-none"></div>
      
      {/* Grid overlay effect */}
      
      {/* Dynamic background glow */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-orange-500 opacity-10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      
      {/* Header section */}
   

      {/* Services slider */}
      <div className="relative container mt-24 pt-24 p-8 mx-auto px-4 z-10">
        {/* Navigation buttons */}
        <button 
          onClick={prevSlide} 
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full p-1 md:p-2 shadow-lg hover:bg-gray-700 transition-colors duration-300 border border-orange-500/30 hover:border-orange-500/50"
          aria-label="Previous service"
          disabled={animating}
        >
          <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
        </button>
        
        <button 
          onClick={nextSlide} 
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white rounded-full p-1 md:p-2 shadow-lg hover:bg-gray-700 transition-colors duration-300 border border-orange-500/30 hover:border-orange-500/50"
          aria-label="Next service"
          disabled={animating}
        >
          <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
        </button>

        {/* Services content */}
        <div className="flex justify-center items-center overflow-hidden px-4 sm:px-8 md:px-16">
          {services.map((service, index) => {
            // Calculate position based on active index
            const position = (index - activeIndex + services.length) % services.length;
            const isActive = position === 0;
            
            return (
              <div 
                key={index}
                className={`flex flex-col md:flex-row items-center pt-8 gap-6 md:gap-8 lg:gap-16 transition-all duration-500 ease-in-out absolute w-full ${
                  isActive ? 'opacity-100 translate-x-0 z-20' : 
                  position === 1 ? 'opacity-0 translate-x-full z-10' : 
                  position === services.length - 1 ? 'opacity-0 -translate-x-full z-10' : 
                  'opacity-0 translate-x-full z-0'
                }`}
              >
                <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-6">
                  {/* Image container with enhanced glow effect */}
                  <div className="relative group">
                    {/* Dynamic glow effect */}
                    <div className="absolute -inset-1 bg-orange-500/20 blur-xl rounded-full group-hover:bg-orange-500/30 transition-all duration-1000 animate-pulse-slow"></div>
                    
                    {/* Air streams behind the drone */}
                    <div className="absolute inset-0 overflow-hidden">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="absolute bg-gradient-to-r from-transparent via-blue-300/10 to-transparent h-0.5 w-full animate-air-stream opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            top: `${20 + i * 10}%`,
                            animationDelay: `${i * 0.2}s`,
                            transform: `rotate(${-10 + i * 4}deg)`
                          }}
                        ></div>
                      ))}
                    </div>
                    
                    {/* Image with hover effects */}
                    <div className="relative z-10 transition-transform duration-700 group-hover:scale-105">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="relative w-full max-w-xs md:max-w-sm lg:max-w-md object-contain drop-shadow-2xl transition-all duration-500"
                      />
                      
                      {/* Propeller animation */}
                      <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full border-2 border-dashed border-orange-500/30 animate-spin"></div>
                      <div className="absolute top-1/4 right-1/4 w-8 h-8 rounded-full border-2 border-dashed border-orange-500/30 animate-spin-reverse"></div>
                    </div>
                    
                    {/* Animated drone paths around the image */}
                    <svg className="absolute top-0 left-0 w-full h-full -z-10" viewBox="0 0 400 400">
                      <path 
                        d="M200,50 C300,100 300,300 200,350 C100,300 100,100 200,50"
                        fill="none" 
                        stroke="rgba(249, 115, 22, 0.2)" 
                        strokeWidth="2"
                        strokeDasharray="10,5"
                        className="animate-dash"
                      />
                      <path 
                        d="M150,100 C250,150 250,250 150,300 C50,250 50,150 150,100"
                        fill="none" 
                        stroke="rgba(96, 165, 250, 0.1)" 
                        strokeWidth="1"
                        strokeDasharray="5,5"
                        className="animate-dash-reverse"
                      />
                    </svg>
                  </div>
                </div>
                
                <div className="w-full md:w-1/2 p-4 md:p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl transform transition-all duration-500 hover:shadow-orange-500/10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-orange-500">{service.title}</h3>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed mb-4 md:mb-6">{service.description}</p>
                  <button className="px-4 md:px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 hover:translate-y-1">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Spacer for layout (since content is absolutely positioned) */}
        <div className="h-80 md:h-96 lg:h-80"></div>

        {/* Indicator dots */}
        <div className="flex justify-center mt-6 md:mt-8 gap-2 relative z-20">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => !animating && setActiveIndex(index)}
              className={`h-2 md:h-3 transition-all duration-300 rounded-full ${
                index === activeIndex ? 'bg-orange-500 w-6 md:w-8' : 'bg-gray-600 w-2 md:w-3 hover:bg-gray-500'
              }`}
              aria-label={`Go to service ${index + 1}`}
              disabled={animating}
            />
          ))}
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-15px) translateX(10px);
          }
          50% {
            transform: translateY(-20px) translateX(-5px);
          }
          75% {
            transform: translateY(-5px) translateX(-10px);
          }
        }
        
        @keyframes sweep {
          0% {
            transform: translateX(-100%) rotate(var(--rotation, 0deg));
            opacity: 0;
          }
          50% {
            opacity: 0.2;
          }
          100% {
            transform: translateX(100%) rotate(var(--rotation, 0deg));
            opacity: 0;
          }
        }
        
        @keyframes path {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          50% {
            transform: translate(var(--tx, 50px), var(--ty, -30px)) scale(1.5);
            opacity: 0.8;
          }
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
        }
        
        @keyframes dash {
          to {
            stroke-dashoffset: 30;
          }
        }
        
        @keyframes dash-reverse {
          to {
            stroke-dashoffset: -20;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.1);
          }
        }
        
        @keyframes spin-reverse {
          to {
            transform: rotate(-360deg);
          }
        }
        
        @keyframes air-stream {
          0% {
            transform: translateX(-100%) var(--rotation, rotate(0deg));
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%) var(--rotation, rotate(0deg));
            opacity: 0;
          }
        }
        
        .animate-dash {
          animation: dash 15s linear infinite;
        }
        
        .animate-dash-reverse {
          animation: dash-reverse 10s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 3s linear infinite;
        }
        
        .animate-air-stream {
          animation: air-stream 3s ease-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
};

export default DroneServicesSection;