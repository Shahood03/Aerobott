import React, { useState, useEffect } from 'react';

const LogisticsMedicalDroneHeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('combat');
  const [animationComplete, setAnimationComplete] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Run intro animation on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen  overflow-hidden bg-zinc-900">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      >

        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${activeTab === 'combat' ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: "url('/images/drone/n4.avif')",
            filter: "brightness(0.4)"
          }}
        ></div>
        
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${activeTab === 'disaster' ? 'opacity-100' : 'opacity-0'}`}
          style={{
            backgroundImage: "url('/images/drone/n4.avif')",
            filter: "brightness(0.4)"
          }}
        ></div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/80 via-zinc-900/50 to-zinc-900/80"></div>
      </div>

      {/* Map overlay with routes */}
      <div className="absolute inset-0 opacity-30 pointer-events-none flex items-center justify-center">
        <div className="relative w-full max-w-5xl h-full max-h-screen">
          {/* Combat route map */}
          <svg 
            className={`absolute inset-0 transition-opacity duration-1000 ${activeTab === 'combat' ? 'opacity-100' : 'opacity-0'}`}
            viewBox="0 0 1000 800" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Grid lines */}
            <g className="grid-lines" stroke="rgba(212, 212, 216, 0.1)" strokeWidth="1">
              {Array.from({ length: 10 }).map((_, i) => (
                <line key={`h-${i}`} x1="0" y1={i * 80} x2="1000" y2={i * 80} />
              ))}
              {Array.from({ length: 12 }).map((_, i) => (
                <line key={`v-${i}`} x1={i * 83.33} y1="0" x2={i * 83.33} y2="800" />
              ))}
            </g>
            
            {/* Combat zone borders */}
            <path 
              d="M200,200 L800,150 L850,650 L150,700 Z" 
              stroke="rgba(239, 68, 68, 0.5)" 
              strokeWidth="2" 
              strokeDasharray="10,5" 
              fill="none"
            />
            
            {/* Supply routes */}
            <path 
              d="M100,400 C300,350 400,500 500,450 C600,400 700,600 900,550" 
              stroke="rgba(239, 68, 68, 0.8)" 
              strokeWidth="3" 
              fill="none" 
              className={animationComplete ? "animate-dash" : ""}
            />
            
            {/* Medical evacuation routes */}
            <path 
              d="M150,600 C250,550 350,650 450,600 C550,550 650,650 750,600 C850,550 900,650 950,600" 
              stroke="rgba(239, 68, 68, 0.6)" 
              strokeWidth="2" 
              fill="none"
              strokeDasharray="5,5"
              className={animationComplete ? "animate-dash-slow" : ""}
            />
            
            {/* Strategic points */}
            <circle cx="500" cy="450" r="15" fill="rgba(239, 68, 68, 0.5)" className="animate-pulse-slow" />
            <circle cx="300" cy="350" r="10" fill="rgba(239, 68, 68, 0.5)" className="animate-pulse-slow" />
            <circle cx="700" cy="600" r="10" fill="rgba(239, 68, 68, 0.5)" className="animate-pulse-slow" />
          </svg>
          
          {/* Disaster relief map */}
          <svg 
            className={`absolute inset-0 transition-opacity duration-1000 ${activeTab === 'disaster' ? 'opacity-100' : 'opacity-0'}`}
            viewBox="0 0 1000 800" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Grid lines */}
            <g className="grid-lines" stroke="rgba(212, 212, 216, 0.1)" strokeWidth="1">
              {Array.from({ length: 10 }).map((_, i) => (
                <line key={`h-${i}`} x1="0" y1={i * 80} x2="1000" y2={i * 80} />
              ))}
              {Array.from({ length: 12 }).map((_, i) => (
                <line key={`v-${i}`} x1={i * 83.33} y1="0" x2={i * 83.33} y2="800" />
              ))}
            </g>
            
            {/* Disaster zone */}
            <circle cx="500" cy="400" r="200" fill="rgba(59, 130, 246, 0.1)" stroke="rgba(59, 130, 246, 0.5)" strokeWidth="2" strokeDasharray="10,5" />
            
            {/* Relief routes */}
            <path 
              d="M100,200 Q300,300 500,200 T900,300" 
              stroke="rgba(59, 130, 246, 0.8)" 
              strokeWidth="3" 
              fill="none"
              className={animationComplete ? "animate-dash" : ""}
            />
            <path 
              d="M150,700 Q300,600 500,700 T850,600" 
              stroke="rgba(59, 130, 246, 0.8)" 
              strokeWidth="3" 
              fill="none"
              className={animationComplete ? "animate-dash" : ""}
            />
            <path 
              d="M200,400 L500,400" 
              stroke="rgba(59, 130, 246, 0.6)" 
              strokeWidth="2" 
              fill="none"
              strokeDasharray="5,5"
              className={animationComplete ? "animate-dash-slow" : ""}
            />
            <path 
              d="M500,400 L800,400" 
              stroke="rgba(59, 130, 246, 0.6)" 
              strokeWidth="2" 
              fill="none"
              strokeDasharray="5,5"
              className={animationComplete ? "animate-dash-slow" : ""}
            />
            
            {/* Strategic points */}
            <circle cx="500" cy="400" r="15" fill="rgba(59, 130, 246, 0.5)" className="animate-pulse-slow" />
            <circle cx="200" cy="400" r="10" fill="rgba(59, 130, 246, 0.5)" className="animate-pulse-slow" />
            <circle cx="800" cy="400" r="10" fill="rgba(59, 130, 246, 0.5)" className="animate-pulse-slow" />
            <circle cx="300" cy="200" r="8" fill="rgba(59, 130, 246, 0.5)" className="animate-pulse-slow" />
            <circle cx="700" cy="200" r="8" fill="rgba(59, 130, 246, 0.5)" className="animate-pulse-slow" />
            <circle cx="300" cy="600" r="8" fill="rgba(59, 130, 246, 0.5)" className="animate-pulse-slow" />
            <circle cx="700" cy="600" r="8" fill="rgba(59, 130, 246, 0.5)" className="animate-pulse-slow" />
          </svg>
        </div>
      </div>
      

      <div className="relative h-full flex flex-col">

        

        <div className="flex-1 flex items-center justify-center px-6 md:px-16">
          <div className="max-w-5xl w-full">

            <div 
              className={`transition-all duration-700 transform ${
                activeTab === 'combat' 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10 absolute pointer-events-none'
              }`}
            >
              <div 
                className="mb-4 inline-block px-4 py-1 bg-gradient-to-r from-red-700 to-red-500 rounded-full text-sm font-medium text-white"
                style={{
                  boxShadow: "0 0 15px rgba(239, 68, 68, 0.3)"
                }}
              >
                COMBAT LOGISTICS & MEDICAL
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Tactical Support<br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-amber-400">
                  When Every Second Counts
                </span>
              </h1>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/50">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-red-900/50 rounded-lg text-red-400 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Tactical Supply Delivery</h3>
                  </div>
                  <p className="text-zinc-300">Rapid deployment of critical ammunition, equipment, and supplies to frontline units without risking additional personnel.</p>
                </div>
                
                <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/50">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-red-900/50 rounded-lg text-red-400 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Battlefield Medical Support</h3>
                  </div>
                  <p className="text-zinc-300">Delivering life-saving medical supplies, blood, and emergency equipment to field medics in active combat zones.</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-red-700 to-red-500 rounded-md font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-600/30 hover:-translate-y-1">
                  Deployment Solutions
                </button>
                
                <button className="px-8 py-3 bg-transparent border border-red-500 rounded-md font-medium text-white transition-all duration-300 hover:bg-red-900/30 hover:-translate-y-1">
                  Technical Specifications
                </button>
              </div>
            </div>
            
            {/* Disaster relief content */}
            <div 
              className={`transition-all duration-700 transform ${
                activeTab === 'disaster' 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-10 absolute pointer-events-none'
              }`}
            >
              <div 
                className="mb-4 inline-block px-4 py-1 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full text-sm font-medium text-white"
                style={{
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)"
                }}
              >
                DISASTER RESPONSE
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Emergency Relief<br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  Beyond Accessible Boundaries
                </span>
              </h1>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/50">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-900/50 rounded-lg text-blue-400 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Critical Supply Delivery</h3>
                  </div>
                  <p className="text-zinc-300">Delivering essential food, water, and medical supplies to disaster-stricken areas where ground transportation is compromised.</p>
                </div>
                
                <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/50">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-900/50 rounded-lg text-blue-400 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Medical Emergency Response</h3>
                  </div>
                  <p className="text-zinc-300">Rapid deployment of emergency medical supplies, vaccines, and life-saving equipment to isolated communities after natural disasters.</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-700 to-blue-500 rounded-md font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 hover:-translate-y-1">
                  Relief Solutions
                </button>
                
                <button className="px-8 py-3 bg-transparent border border-blue-500 rounded-md font-medium text-white transition-all duration-300 hover:bg-blue-900/30 hover:-translate-y-1">
                  Technical Specifications
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom statistics */}
        <div className="pb-10 px-6 md:px-16">
          <div className="max-w-5xl mx-auto">
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 transition-all duration-700 ${
              activeTab === 'combat' 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}>
              <div className="bg-zinc-800/30 backdrop-blur-sm rounded-lg border border-zinc-700/30 p-4">
                <p className="text-red-400 text-sm">Delivery Time</p>
                <p className="text-white text-xl md:text-2xl font-bold">10-15 MIN</p>
              </div>
              <div className="bg-zinc-800/30 backdrop-blur-sm rounded-lg border border-zinc-700/30 p-4">
                <p className="text-red-400 text-sm">Payload Capacity</p>
                <p className="text-white text-xl md:text-2xl font-bold">UP TO 15 KG</p>
              </div>
              <div className="bg-zinc-800/30 backdrop-blur-sm rounded-lg border border-zinc-700/30 p-4">
                <p className="text-red-400 text-sm">Operating Range</p>
                <p className="text-white text-xl md:text-2xl font-bold">25 KM</p>
              </div>
              <div className="bg-zinc-800/30 backdrop-blur-sm rounded-lg border border-zinc-700/30 p-4">
                <p className="text-red-400 text-sm">Deployment Success</p>
                <p className="text-white text-xl md:text-2xl font-bold">98.5%</p>
              </div>
            </div>
            
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 transition-all duration-700 ${
              activeTab === 'disaster' 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10 absolute pointer-events-none'
            }`}>
              <div className="bg-zinc-800/30 backdrop-blur-sm rounded-lg border border-zinc-700/30 p-4">
                <p className="text-blue-400 text-sm">Relief Capacity</p>
                <p className="text-white text-xl md:text-2xl font-bold">50+ UNITS</p>
              </div>
              <div className="bg-zinc-800/30 backdrop-blur-sm rounded-lg border border-zinc-700/30 p-4">
                <p className="text-blue-400 text-sm">Daily Deliveries</p>
                <p className="text-white text-xl md:text-2xl font-bold">200+</p>
              </div>
              <div className="bg-zinc-800/30 backdrop-blur-sm rounded-lg border border-zinc-700/30 p-4">
                <p className="text-blue-400 text-sm">Deployment Time</p>
                <p className="text-white text-xl md:text-2xl font-bold"> 6 HOURS</p>
              </div>
              <div className="bg-zinc-800/30 backdrop-blur-sm rounded-lg border border-zinc-700/30 p-4">
                <p className="text-blue-400 text-sm">Lives Impacted</p>
                <p className="text-white text-xl md:text-2xl font-bold">10,000+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl transition-all duration-700 ${
        activeTab === 'combat' 
          ? 'bg-red-600/10 opacity-100' 
          : 'bg-blue-600/10 opacity-0'
      }`}></div>
      <div className={`absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl transition-all duration-700 ${
        activeTab === 'combat' 
          ? 'bg-red-600/10 opacity-100' 
          : 'bg-blue-600/10 opacity-0'
      }`}></div>
      
      <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl transition-all duration-700 ${
        activeTab === 'disaster' 
          ? 'bg-blue-600/10 opacity-100' 
          : 'bg-red-600/10 opacity-0'
      }`}></div>
      <div className={`absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl transition-all duration-700 ${
        activeTab === 'disaster' 
          ? 'bg-blue-600/10 opacity-100' 
          : 'bg-red-600/10 opacity-0'
      }`}></div>
      
      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 1000;
          }
        }
        
        .animate-dash {
          stroke-dasharray: 10, 10;
          stroke-dashoffset: 0;
          animation: dash 30s linear infinite;
        }
        
        .animate-dash-slow {
          stroke-dasharray: 10, 15;
          stroke-dashoffset: 0;
          animation: dash 50s linear infinite;
        }
        
        @keyframes pulse-slow {
          0% { opacity: 0.3; }
          50% { opacity: 0.8; }
          100% { opacity: 0.3; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite;
        }
      `}</style>
    </div>
  );
};
export default LogisticsMedicalDroneHeroSection;