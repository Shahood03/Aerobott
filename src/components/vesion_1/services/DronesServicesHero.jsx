import React, { useState, useEffect } from 'react';
import { ChevronDown, Shield, Play, Compass, Zap, Award } from 'lucide-react';

const DronesServicesHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoverFeature, setHoverFeature] = useState(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const features = [
    { id: 'aerial', icon: <Compass size={24} />, title: 'Aerial Photography', description: 'High-resolution imaging for any project' },
    { id: 'mapping', icon: <Shield size={24} />, title: 'Mapping & Surveying', description: 'Precise terrain and structure mapping' },
    { id: 'delivery', icon: <Zap size={24} />, title: 'Rapid Delivery', description: 'Fast and efficient transport solutions' },
    { id: 'training', icon: <Award size={24} />, title: 'Pilot Training', description: 'Professional drone flight certification' }
  ];

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute bg-orange-500" 
              style={{
                height: '1px',
                width: '100%',
                top: `${i * 5}%`,
                left: 0,
                opacity: 0.3,
                animation: `scanline 15s linear infinite ${i * 0.2}s`
              }}
            />
          ))}
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute bg-orange-500" 
              style={{
                width: '1px',
                height: '100%',
                left: `${i * 5}%`,
                top: 0,
                opacity: 0.3,
                animation: `scanline-vertical 15s linear infinite ${i * 0.2}s`
              }}
            />
          ))}
        </div>
        
        {/* Floating particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-orange-500"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `float ${Math.random() * 6 + 4}s infinite ease-in-out ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side content */}
          <div 
            className={`lg:w-1/2 transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Advanced</span> <br />
              <span className="text-orange-500">Drone Services</span>
            </h1>
            <div className="h-1 w-24 bg-orange-500 mb-8"></div>
            <p className="text-xl text-gray-300 mb-8 max-w-xl">
              Experience unparalleled aerial solutions powered by cutting-edge drone technology 
              for businesses, creators, and government agencies worldwide.
            </p>
            
            {/* Features list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {features.map((feature) => (
                <div 
                  key={feature.id}
                  className="flex items-start gap-4 group"
                  onMouseEnter={() => setHoverFeature(feature.id)}
                  onMouseLeave={() => setHoverFeature(null)}
                >
                  <div className={`p-3 rounded-lg transition-all duration-300 ${
                    hoverFeature === feature.id ? 'bg-orange-500 text-white' : 'bg-gray-800 text-orange-500'
                  }`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-all duration-300 shadow-lg shadow-orange-500/30 flex items-center gap-2">
                <Play size={20} />
                Watch Demo
              </button>
              <button className="px-6 py-3 bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500/10 rounded-lg transition-all duration-300">
                Our Services
              </button>
            </div>
          </div>
          
          {/* Right side image */}
          <div 
            className={`lg:w-1/2 flex justify-center transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative">
              {/* Animated rings around the drone */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full border border-orange-500/20 animate-ping-slow"></div>
                <div className="absolute w-80 h-80 rounded-full border border-orange-500/10 animate-ping-slower"></div>
              </div>
              
              {/* Drone image with glow effect */}
              <div className="relative z-10">
                <div className="absolute -inset-2 bg-orange-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
                <img 
                  src="/images/drone/d7.avif" 
                  alt="Orange and black drone" 
                  className="max-w-full w-auto h-auto object-contain transform lg:scale-110 hover:scale-125 transition-all duration-700"
                />
                
                {/* Animated indicator points on the drone */}
                {[
                  { top: '20%', left: '20%' },
                  { top: '30%', right: '25%' },
                  { bottom: '35%', left: '30%' },
                  { bottom: '25%', right: '20%' }
                ].map((pos, i) => (
                  <div 
                    key={i}
                    className="absolute w-4 h-4 rounded-full bg-orange-500/20 flex items-center justify-center animate-pulse"
                    style={{ ...pos }}
                  >
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white opacity-70">
        <ChevronDown size={32} />
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px) scale(1.1);
          }
        }
        
        @keyframes scanline {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes scanline-vertical {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        
        @keyframes ping-slow {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          70%, 100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
        
        @keyframes ping-slower {
          0% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          70%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-ping-slower {
          animation: ping-slower 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default DronesServicesHero;