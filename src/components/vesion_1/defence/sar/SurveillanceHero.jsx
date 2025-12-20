import React, { useState, useEffect } from 'react';

const SurveillanceHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
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
          backgroundImage: "url('/images/drone/n1.avif')",
          transform: `translateY(${scrollY * 0.2}px)`,
          filter: "brightness(0.4)"
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-900/50 via-black/20 to-blue-900/50" />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
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
      
      {/* Content Container */}
      <div className="relative flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-16 max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-white z-10 pt-20 md:pt-0">
          <div 
            className="mb-4 inline-block px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-medium"
            style={{
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)"
            }}
          >
            NEXT-GEN TECHNOLOGY
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Precision Tactical Drone System
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-xl">
            Advanced reconnaissance and precision targeting capabilities with cutting-edge AI navigation and mission-critical reliability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-md font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              View Specifications
            </button>
            
            <button className="px-8 py-3 bg-transparent border border-blue-500 rounded-md font-medium text-white transition-all duration-300 hover:bg-blue-900/30 hover:-translate-y-1">
              Request Demo
            </button>
          </div>
        </div>
        
        {/* 3D Drone Image */}
        <div className="w-full md:w-1/2 h-72 md:h-full flex items-center justify-center z-10 mt-8 md:mt-0">
          <div 
            className={`relative transition-all duration-700 ${isHovering ? 'scale-110' : 'scale-100'}`}
            style={{
              animation: "float 6s ease-in-out infinite",
              filter: "drop-shadow(0 0 30px rgba(59, 130, 246, 0.5))",
            }}
          >
            {/* Placeholder for 3D drone image */}
            <img 
              src="/images/drone/n1.avif" 
              alt="Advanced Tactical Drone" 
              className="max-w-full h-auto"
              style={{
                transform: `rotateY(${scrollY * 0.05}deg) rotateX(${scrollY * 0.03}deg)`,
                transition: "transform 0.3s ease-out"
              }}
            />
            
            {/* Highlight effects */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-1000 animate-pulse"></div>
            
            {/* Technical overlay lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border border-blue-500/30 rounded-full animate-ping" style={{ animationDuration: "3s" }}></div>
              <div className="absolute w-48 h-48 border border-blue-400/20 rounded-full"></div>
              <div className="absolute w-64 h-64 border border-blue-300/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tech details floating at bottom */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="flex space-x-8 text-xs text-blue-400/80 bg-black/30 backdrop-blur-sm px-6 py-2 rounded-full">
          <div>RANGE: 10KM</div>
          <div>|</div>
          <div>FLIGHT TIME: 30MIN</div>
          <div>|</div>
          <div>PAYLOAD: UP TO 5KG</div>
          <div>|</div>
          <div>WEIGHT: &lt;2KG</div>
        </div>
      </div>
      
      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0.2; }
        }
      `}</style>
    </div>
  );
};


export default SurveillanceHero;