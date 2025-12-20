import React, { useState, useEffect } from 'react';

const FPVDroneHeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hoverState, setHoverState] = useState({
    leftButton: false,
    rightButton: false
  });
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation timing for HUD elements
  useEffect(() => {
    const timer = setTimeout(() => {
      const hudElements = document.querySelectorAll('.hud-element');
      hudElements.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add('hud-visible');
        }, i * 100);
      });
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* FPV Video feed background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/drone/n3.avif')",
          transform: `translateY(${scrollY * 0.1}px) scale(${1 + scrollY * 0.0005})`,
          filter: "brightness(0.7) contrast(1.2)"
        }}
      >
        {/* Video scan lines effect */}
        <div className="absolute inset-0 bg-scanlines opacity-20"></div>
      </div>
      
      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-transparent to-blue-900/30"></div>
      
      {/* HUD Elements - First Person View Interface */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top HUD Bar */}
        <div className="absolute top-0 left-0 right-0 h-20 flex items-center justify-between px-6 py-3">
          <div className="hud-element opacity-0 transition-opacity duration-500 delay-100 flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse mr-2"></div>
            <div className="font-mono text-blue-400 text-sm tracking-wider">LIVE FEED</div>
          </div>
          
          <div className="hud-element opacity-0 transition-opacity duration-500 delay-200 font-mono text-blue-400 text-sm tracking-wider">
            <div className="flex items-center">
              <span className="mr-4">ALT: <span className="text-white">2,140 FT</span></span>
              <span className="mr-4">SPD: <span className="text-white">15.6 M/S</span></span>
              <span>BAT: <span className="text-white">89%</span></span>
            </div>
          </div>
          
          <div className="hud-element opacity-0 transition-opacity duration-500 delay-300 flex items-center">
            <div className="font-mono text-blue-400 text-sm tracking-wider mr-2">REC</div>
            <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
          </div>
        </div>
        
        {/* Center Reticle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="hud-element opacity-0 transition-opacity duration-500 delay-400">
              <circle cx="60" cy="60" r="58" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="1" strokeDasharray="8 4"/>
              <circle cx="60" cy="60" r="40" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1"/>
              <line x1="60" y1="30" x2="60" y2="50" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="1"/>
              <line x1="60" y1="70" x2="60" y2="90" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="1"/>
              <line x1="30" y1="60" x2="50" y2="60" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="1"/>
              <line x1="70" y1="60" x2="90" y2="60" stroke="rgba(59, 130, 246, 0.8)" strokeWidth="1"/>
              <circle cx="60" cy="60" r="2" fill="rgba(59, 130, 246, 0.8)"/>
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-mono text-xs text-blue-400 mt-16 hud-element opacity-0 transition-opacity duration-500 delay-500">
              TARGET LOCKED
            </div>
          </div>
        </div>
        
        {/* Bottom HUD */}
        <div className="absolute bottom-0 left-0 right-0 h-20 flex items-center justify-center px-6 py-3">
          <div className="hud-element opacity-0 transition-opacity duration-500 delay-600 bg-black/30 backdrop-blur-sm px-6 py-2 rounded-full flex items-center space-x-6 border border-blue-800/30">
            <div className="font-mono text-blue-400 text-sm">LAT: <span className="text-white">28.6139° N</span></div>
            <div>|</div>
            <div className="font-mono text-blue-400 text-sm">LON: <span className="text-white">77.2090° E</span></div>
            <div>|</div>
            <div className="font-mono text-blue-400 text-sm">RNG: <span className="text-white">3.2 KM</span></div>
            <div>|</div>
            <div className="font-mono text-blue-400 text-sm">WIND: <span className="text-white">6 KM/H</span></div>
          </div>
        </div>
        
        {/* Left Payload Indicator */}
        <div className="absolute top-1/2 left-6 transform -translate-y-1/2 hud-element opacity-0 transition-opacity duration-500 delay-700">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg border border-blue-800/30 p-3">
            <div className="font-mono text-blue-400 text-xs mb-2">PAYLOAD STATUS</div>
            <div className="w-8 h-32 bg-black/50 rounded-full p-1 relative">
              <div className="absolute bottom-0 left-0 right-0 bg-blue-500 rounded-full animate-pulse w-full h-3/4" style={{ animation: 'pulse 2s infinite alternate' }}></div>
              <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-between items-center py-2">
                <div className="w-full h-px bg-blue-900"></div>
                <div className="w-full h-px bg-blue-900"></div>
                <div className="w-full h-px bg-blue-900"></div>
                <div className="w-full h-px bg-blue-900"></div>
              </div>
            </div>
            <div className="font-mono text-green-400 text-xs mt-2 text-center">READY</div>
          </div>
        </div>
        
        {/* Right Camera Info */}
        <div className="absolute top-1/2 right-6 transform -translate-y-1/2 hud-element opacity-0 transition-opacity duration-500 delay-800">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg border border-blue-800/30 p-3">
            <div className="font-mono text-blue-400 text-xs mb-2">CAMERA</div>
            <div className="font-mono text-white text-xs">1080p</div>
            <div className="font-mono text-white text-xs">60 FPS</div>
            <div className="font-mono text-white text-xs">16:9</div>
            <div className="font-mono text-green-400 text-xs mt-2">STABILIZED</div>
          </div>
        </div>
        
        {/* Artificial Horizon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none hud-element opacity-0 transition-opacity duration-500 delay-900">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2" style={{ width: '80%' }}>
              <div className="flex justify-between">
                <div className="h-px w-20 bg-blue-500"></div>
                <div className="h-px w-20 bg-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Container */}
      <div className="relative flex flex-col items-center justify-center h-full px-6 md:px-16 max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="w-full max-w-2xl text-white z-10 text-center">
          <div 
            className="mb-4 inline-block px-4 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-sm font-medium"
            style={{
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)"
            }}
          >
            IMMERSIVE FPV EXPERIENCE
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            High-Speed Payload Delivery System
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-xl mx-auto">
            Experience precision delivery at altitudes up to 10,000 ft with immersive first-person view control and real-time HD video feed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-md font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1"
              onMouseEnter={() => setHoverState({ ...hoverState, leftButton: true })}
              onMouseLeave={() => setHoverState({ ...hoverState, leftButton: false })}
            >
              Watch FPV Demo
            </button>
            
            <button 
              className="px-8 py-3 bg-transparent border border-blue-500 rounded-md font-medium text-white transition-all duration-300 hover:bg-blue-900/30 hover:-translate-y-1"
              onMouseEnter={() => setHoverState({ ...hoverState, rightButton: true })}
              onMouseLeave={() => setHoverState({ ...hoverState, rightButton: false })}
            >
              View Specifications
            </button>
          </div>
        </div>
      </div>
      
      {/* Tech specs floating at bottom */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs text-blue-400/80 bg-black/30 backdrop-blur-sm px-6 py-2 rounded-full">
          <div>RANGE: 5KM</div>
          <div className="hidden md:block">|</div>
          <div>ALTITUDE: 10,000FT</div>
          <div className="hidden md:block">|</div>
          <div>SPEED: 20M/S</div>
          <div className="hidden md:block">|</div>
          <div>FPV: 1080p/60FPS</div>
        </div>
      </div>
      
      {/* Add CSS for animations */}
      <style jsx>{`
        .hud-visible {
          opacity: 1 !important;
        }
        
        .bg-scanlines {
          background-image: linear-gradient(
            transparent 0%, 
            rgba(59, 130, 246, 0.05) 50%, 
            transparent 100%
          );
          background-size: 100% 4px;
          animation: scan 8s linear infinite;
        }
        
        @keyframes scan {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }
        
        @keyframes pulse {
          0% { opacity: 0.7; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default FPVDroneHeroSection;