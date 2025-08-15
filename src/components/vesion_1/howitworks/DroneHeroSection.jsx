import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const DroneHeroSection = () => {
  const sparkContainerRef = useRef(null);
  const heroRef = useRef(null);

  // Create sparking fire effects
  useEffect(() => {
    if (!sparkContainerRef.current) return;
    
    const createSparks = () => {
      const container = sparkContainerRef.current;
      if (!container) return;
      
      // Clear previous sparks
      container.innerHTML = '';
      
      // Create sparks based on container size
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const sparkCount = Math.min(Math.floor((containerWidth * containerHeight) / 15000), 100);
      
      for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement('div');
        
        // Random spark type (fire particle, ember, or spark trail)
        const sparkType = Math.floor(Math.random() * 3);
        
        if (sparkType === 0) {
          // Fire particle
          spark.className = 'absolute rounded-full bg-gradient-to-t from-orange-600 to-orange-300 blur-sm';
          const size = Math.random() * 4 + 2;
          spark.style.width = `${size}px`;
          spark.style.height = `${size}px`;
        } else if (sparkType === 1) {
          // Ember
          spark.className = 'absolute rounded-full bg-orange-500 opacity-80';
          const size = Math.random() * 2 + 1;
          spark.style.width = `${size}px`;
          spark.style.height = `${size}px`;
        } else {
          // Spark trail
          spark.className = 'absolute bg-gradient-to-r from-orange-600 via-yellow-400 to-transparent opacity-50 blur-sm';
          const width = Math.random() * 10 + 5;
          const height = Math.random() * 1.5 + 0.5;
          spark.style.width = `${width}px`;
          spark.style.height = `${height}px`;
          spark.style.transform = `rotate(${Math.random() * 360}deg)`;
        }
        
        // Position sparks throughout the container
        spark.style.left = `${Math.random() * 100}%`;
        spark.style.top = `${Math.random() * 100}%`;
        
        // Animation parameters
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 5;
        
        if (sparkType === 0 || sparkType === 1) {
          // Rising animation for fire particles and embers
          spark.style.animation = `riseSpark ${duration}s infinite ease-out ${delay}s`;
        } else {
          // Fly animation for spark trails
          spark.style.animation = `flySpark ${duration}s infinite ease-in-out ${delay}s`;
        }
        
        container.appendChild(spark);
      }
    };
    
    createSparks();
    
    // Recreate sparks on window resize
    window.addEventListener('resize', createSparks);
    
    // Parallax effect for hero section
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      heroRef.current.style.backgroundPositionY = `${scrollY * 0.5}px`;
    };
    
    window.addEventListener('scroll', handleParallax);
    
    return () => {
      window.removeEventListener('resize', createSparks);
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen bg-gray-900 overflow-hidden flex flex-col items-center justify-center px-4 md:px-8">
      {/* Fire sparking effects container */}
      <div 
        ref={sparkContainerRef} 
        className="absolute inset-0 pointer-events-none z-10"
      ></div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800/70 to-gray-900 opacity-80 pointer-events-none"></div>
      
      {/* Drone silhouette background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg 
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-1/2 md:w-1/3 text-orange-500 animate-float-slow"
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M12,0L7,5H17L12,0M11.5,6A1.5,1.5 0 0,0 10,7.5A1.5,1.5 0 0,0 11.5,9A1.5,1.5 0 0,0 13,7.5A1.5,1.5 0 0,0 11.5,6M4.4,7L3,8.4L4.6,10L6,8.6L4.4,7M19.6,7L18,8.6L19.4,10L21,8.4L19.6,7M4,14L2,22H4L5.4,16L7,16.6V22H9V16.6L10.6,16L12,22H14L15.4,16L17,16.6V22H19V16.6L20.6,16L22,22H22.6L20.6,14L4,14Z" />
        </svg>
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto relative z-20 text-center max-w-5xl">
        <div className="bg-gray-900/30 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-orange-500/20 shadow-xl">
          <h5 className="text-orange-400 font-semibold mb-2 animate-fade-in">EXPERT DRONE PILOTS</h5>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight animate-title">
            Get matched with the <span className="text-orange-500">best pilots</span> for your needs & budget
          </h1>
          
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-base md:text-lg animate-fade-in-delayed">
            Our network of professional, licensed drone pilots are ready to deliver exceptional aerial footage, mapping, and inspection services that meet your specific requirements.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-delayed-more">
            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 transform hover:-translate-y-1 font-medium">
              Find Your Pilot
            </button>
            <button className="px-6 py-3 border border-orange-500/50 hover:border-orange-500 text-orange-400 hover:text-orange-300 rounded-lg shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm bg-gray-900/50">
              View Services
            </button>
          </div>
          
          {/* Features highlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white animate-fade-in-delayed-extra">
            <div className="p-4 rounded-lg border border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5 group">
              <div className="text-orange-500 text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="font-bold mb-1">Quick Matching</h3>
              <p className="text-gray-400 text-sm">Find the perfect pilot in minutes, not days</p>
            </div>
            <div className="p-4 rounded-lg border border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5 group">
              <div className="text-orange-500 text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🔒</div>
              <h3 className="font-bold mb-1">Certified Experts</h3>
              <p className="text-gray-400 text-sm">All pilots are licensed, insured, and vetted</p>
            </div>
            <div className="p-4 rounded-lg border border-gray-700 bg-gray-800/50 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/5 group">
              <div className="text-orange-500 text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h3 className="font-bold mb-1">Custom Solutions</h3>
              <p className="text-gray-400 text-sm">Tailored to your exact project specifications</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70 z-20">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes riseSpark {
          0% {
            transform: translateY(20px) scale(0.8);
            opacity: 0.8;
          }
          80% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-40px) scale(0.2);
            opacity: 0;
          }
        }
        
        @keyframes flySpark {
          0% {
            transform: translate(-30px, 10px) rotate(var(--rotation, 0deg));
            opacity: 0.7;
          }
          100% {
            transform: translate(30px, -30px) rotate(var(--rotation, 0deg));
            opacity: 0;
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translate(-50%, 0);
          }
          50% {
            transform: translate(-50%, -15px);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-title {
          animation: fade-in 0.8s ease-out;
          animation-fill-mode: both;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
          animation-fill-mode: both;
        }
        
        .animate-fade-in-delayed {
          animation: fade-in 0.6s ease-out 0.3s;
          animation-fill-mode: both;
          opacity: 0;
        }
        
        .animate-fade-in-delayed-more {
          animation: fade-in 0.6s ease-out 0.6s;
          animation-fill-mode: both;
          opacity: 0;
        }
        
        .animate-fade-in-delayed-extra {
          animation: fade-in 0.6s ease-out 0.9s;
          animation-fill-mode: both;
          opacity: 0;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default DroneHeroSection;