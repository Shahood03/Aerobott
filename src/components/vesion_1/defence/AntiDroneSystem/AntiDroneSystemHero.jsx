import React, { useState, useEffect } from 'react';

const AntiDroneSystemHero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [targetDetected, setTargetDetected] = useState(false);
  const [scanActive, setScanActive] = useState(true);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle detection animation
  useEffect(() => {
    // Toggle target detection state every 8 seconds
    const detectionInterval = setInterval(() => {
      setTargetDetected(prev => !prev);
      
      // If target detected, stop scan temporarily
      if (!targetDetected) {
        setScanActive(false);
        setTimeout(() => setScanActive(true), 2000);
      }
    }, 8000);
    
    return () => clearInterval(detectionInterval);
  }, [targetDetected]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-900">
      {/* Radar grid background */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div className="w-[150vw] h-[150vw] md:w-[120vw] md:h-[120vw] border-slate-600/20 border rounded-full"></div>
        <div className="absolute w-[120vw] h-[120vw] md:w-[90vw] md:h-[90vw] border-slate-600/20 border rounded-full"></div>
        <div className="absolute w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] border-slate-600/20 border rounded-full"></div>
        <div className="absolute w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] border-slate-600/20 border rounded-full"></div>
        
        {/* Radar scan animation */}
        {scanActive && (
          <div className="absolute w-full h-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0">
              <div className="relative">
                <div className="absolute w-[150vw] h-[150vw] md:w-[120vw] md:h-[120vw] origin-center animate-radar-scan">
                  <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-teal-500/30 to-transparent rounded-tl-full"></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Grid lines */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={`h-${i}`} className="w-full h-px bg-slate-600"></div>
          ))}
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={`v-${i}`} className="h-full w-px bg-slate-600"></div>
          ))}
        </div>
      </div>
      
      {/* Threat detection visualization */}
      {targetDetected && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Target location indicators */}
          <div className="absolute top-1/3 right-1/4 flex flex-col items-center">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-2 border-red-500 opacity-40 animate-ping"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-red-500 rounded-full animate-pulse"></div>
            </div>
            <div className="mt-2 px-2 py-1 bg-red-900/80 backdrop-blur-sm rounded text-xs text-white">
              THREAT DETECTED
            </div>
            <div className="flex space-x-2 mt-1">
              <div className="px-2 py-0.5 bg-slate-800/80 backdrop-blur-sm rounded text-xs text-teal-400">
                RANGE: 2.4 KM
              </div>
              <div className="px-2 py-0.5 bg-slate-800/80 backdrop-blur-sm rounded text-xs text-teal-400">
                ALT: 320 FT
              </div>
            </div>
          </div>
          
          {/* Countermeasure activation */}
          <div className="absolute bottom-1/3 left-1/3 text-center">
            <div className="inline-block px-2 py-1 bg-amber-500/80 backdrop-blur-sm rounded text-xs text-slate-900 animate-pulse">
              COUNTERMEASURES ACTIVE
            </div>
          </div>
          
          {/* Response time indicator */}
          <div className="absolute top-1/4 left-1/4 px-2 py-1 bg-slate-800/80 backdrop-blur-sm rounded text-xs text-teal-400">
            RESPONSE TIME: 3.2s
          </div>
        </div>
      )}
      
      {/* Status overlay */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top status bar */}
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className={`w-3 h-3 rounded-full ${scanActive ? 'bg-teal-500 animate-pulse' : 'bg-amber-500'} mr-2`}></div>
            <div className="font-mono text-sm text-teal-400">
              SYSTEM ACTIVE | {targetDetected ? 'THREAT DETECTED' : 'SCANNING...'}
            </div>
          </div>
          
          <div className="font-mono text-sm text-teal-400">
            <span>LOC: 28.7041° N, 77.1025° E</span>
            <span className="ml-4">TIME: {new Date().toLocaleTimeString()}</span>
          </div>
        </div>
        
        {/* Bottom status bar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
          <div className="font-mono text-sm text-teal-400">
            POWER SOURCE: VEHICLE INTEGRATED | BATTERY: 92%
          </div>
          
          <div className="font-mono text-sm text-teal-400">
            DETECTION RANGE: 5-20 KM | TRACKING: MULTI-SYSTEM
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative h-full flex items-center justify-center px-6 md:px-16">
        <div className="max-w-6xl w-full z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              className="text-white"
              style={{
                transform: `translateY(${-scrollY * 0.1}px)`,
              }}
            >
              <div 
                className="mb-4 inline-block px-4 py-1 bg-gradient-to-r from-teal-600 to-teal-400 rounded-full text-sm font-medium"
                style={{
                  boxShadow: "0 0 15px rgba(20, 184, 166, 0.3)"
                }}
              >
                COUNTER-UAS TECHNOLOGY
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Advanced <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-300">Anti-Drone</span> Defense System
              </h1>
              
              <p className="text-slate-300 text-lg mb-8">
                Comprehensive drone detection and neutralization platform for securing critical infrastructure, events, and sensitive areas from unauthorized aerial intrusions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-teal-600 to-teal-400 rounded-md font-medium text-slate-900 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-1">
                  Request Demonstration
                </button>
                
                <button className="px-8 py-3 bg-transparent border border-teal-500 rounded-md font-medium text-white transition-all duration-300 hover:bg-teal-900/30 hover:-translate-y-1">
                  Technical Specifications
                </button>
              </div>
            </div>
            
            <div>
              {/* Specifications display */}
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden">
                <div className="p-1 bg-gradient-to-r from-teal-700/50 to-slate-700/50">
                  <div className="flex items-center px-4 py-2">
                    <div className="w-3 h-3 rounded-full bg-teal-500 animate-pulse mr-2"></div>
                    <div className="font-mono text-sm text-teal-400">SYSTEM SPECIFICATIONS</div>
                  </div>
                </div>
                
                <div className="p-6 space-y-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-teal-400 text-sm">Detection Range</p>
                      <p className="text-white text-xl font-bold">Up to 5 – 20 Km</p>
                    </div>
                    <div className="p-2 bg-teal-900/30 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-teal-400 text-sm">Response Time</p>
                      <p className="text-white text-xl font-bold">Up to 5 seconds</p>
                    </div>
                    <div className="p-2 bg-teal-900/30 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-teal-400 text-sm">Tracking Technologies</p>
                      <p className="text-white text-xl font-bold">Radar, EO/IR cameras, RF scanners</p>
                    </div>
                    <div className="p-2 bg-teal-900/30 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-teal-400 text-sm">Target Types</p>
                      <p className="text-white text-xl font-bold">Mini, Micro, Nano drones</p>
                    </div>
                    <div className="p-2 bg-teal-900/30 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-teal-400 text-sm">Power Source</p>
                      <p className="text-white text-xl font-bold">Battery, Generator, or Vehicle Integrated</p>
                    </div>
                    <div className="p-2 bg-teal-900/30 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/70 pointer-events-none"></div>
      
      {/* Animated target dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-2 h-2 bg-slate-400 rounded-full opacity-60"
          style={{
            top: '35%',
            left: '75%',
            animation: 'moveRandomly 40s infinite linear'
          }}
        ></div>
        <div 
          className="absolute w-2 h-2 bg-slate-400 rounded-full opacity-60"
          style={{
            top: '65%',
            left: '25%',
            animation: 'moveRandomly 50s infinite linear'
          }}
        ></div>
        <div 
          className="absolute w-2 h-2 bg-slate-400 rounded-full opacity-60"
          style={{
            top: '20%',
            left: '40%',
            animation: 'moveRandomly 35s infinite linear'
          }}
        ></div>
      </div>
      
      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes radar-scan {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .animate-radar-scan {
          animation: radar-scan 8s linear infinite;
        }
        
        @keyframes moveRandomly {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(100px, 50px); }
          50% { transform: translate(50px, 100px); }
          75% { transform: translate(-50px, 75px); }
        }
      `}</style>
    </div>
  );
};

export default AntiDroneSystemHero;