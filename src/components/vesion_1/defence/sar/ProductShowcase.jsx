import React, { useState, useEffect } from 'react';

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isRotating, setIsRotating] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [highlightedSpec, setHighlightedSpec] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  const productDetails = {
    endurance: 'Up to 80 Mins',
    maxAltitude: '13,000 ft',
    maxSpeed: '10 Mtr/sec',
    payloadFOV: '60°WFOV-3°NFOV-1.5°DFOV',
    thermalResolution: '1280 x 720'
  };

  // Check for mobile device
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simulate loading sequence
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Rotate through specs for highlight effect
  useEffect(() => {
    const keys = Object.keys(productDetails);
    const interval = setInterval(() => {
      const randomKey = keys[Math.floor(Math.random() * keys.length)];
      setHighlightedSpec(randomKey);
      setTimeout(() => setHighlightedSpec(null), 2000);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  // Animation for button pulse
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      const demoButton = document.getElementById('demo-button');
      if (demoButton) {
        demoButton.classList.add('animate-pulse');
        setTimeout(() => {
          demoButton.classList.remove('animate-pulse');
        }, 1000);
      }
    }, 8000);
    
    return () => clearInterval(pulseInterval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black py-4 sm:py-8 md:py-12 px-2 sm:px-4 flex items-center justify-center overflow-hidden relative">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('')",
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
      
      <div className={`w-full mx-auto bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl overflow-hidden shadow-xl transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} relative z-10`}>
        <div className="flex flex-col md:flex-row">
          {/* 3D Model Image Section - Larger on all devices */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-900/40 via-blue-800/20 to-black/50 p-4 sm:p-6 md:p-8 lg:p-12 flex items-center justify-center relative overflow-hidden min-h-80 sm:min-h-96 md:min-h-full">
            {/* Tech grid background effect */}
            <div className="absolute inset-0 opacity-20">
              <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
                {Array(144).fill().map((_, i) => (
                  <div key={i} className={`border-[0.5px] border-blue-300 ${Math.random() > 0.92 ? 'bg-blue-300 bg-opacity-20' : ''}`}></div>
                ))}
              </div>
            </div>
            
            {/* Radar animation */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute left-1/2 top-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 -ml-32 sm:-ml-40 md:-ml-48 -mt-32 sm:-mt-40 md:-mt-48">
                <div className="absolute inset-0 border-2 border-blue-400 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
                <div className="absolute inset-0 border border-blue-400 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
                <div className="absolute inset-0 border border-blue-400 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '2s'}}></div>
              </div>
            </div>
            
            {/* 3D Model Container with animation - Larger image */}
            <div className="relative z-10 w-full h-72 sm:h-80 md:h-96 lg:h-full flex items-center justify-center">
              <div 
                className={`relative transition-all duration-700 transform ${isRotating ? 'scale-110' : 'scale-100'}`}
                style={{
                  animation: "float 6s ease-in-out infinite",
                }}
              >
                <img 
                  src="/images/drone/n1.avif" 
                  alt="Surveillance Drone 3D Model" 
                  className={`object-contain max-h-full max-w-full transition-all duration-1000 ${isRotating ? 'animate-spin-slow' : 'hover:scale-105'}`}
                  style={{
                    filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.5))',
                    transform: isRotating ? '' : `rotateY(${scrollY * 0.05}deg) rotateX(${scrollY * 0.03}deg)`,
                  }}
                />
                
                {/* Spec pointer annotations - Conditionally show based on screen size */}
                {!isMobile && (
                  <>
                    <div className="absolute top-1/4 right-0 w-20 sm:w-32 md:w-40 h-0.5 bg-blue-500 opacity-80"></div>
                    <div className="absolute top-1/4 right-0 px-2 py-1 bg-blue-600 text-white text-xs rounded">Thermal Camera</div>
                    
                    <div className="absolute bottom-1/3 left-0 w-16 sm:w-24 md:w-32 h-0.5 bg-blue-500 opacity-80"></div>
                    <div className="absolute bottom-1/3 left-0 px-2 py-1 bg-blue-600 text-white text-xs rounded">Stabilized Gimbal</div>
                  </>
                )}
                
                {/* Glowing effect */}
                <div className="absolute inset-0 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
              </div>
              
              {/* Control buttons - Responsive positioning */}
              <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 z-20 flex space-x-2 sm:space-x-3">
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm flex items-center transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
                  onClick={() => setIsRotating(!isRotating)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 transition-transform duration-500 ${isRotating ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  {isRotating ? 'Stop' : 'View 360°'}
                </button>
                
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 sm:px-4 py-1 sm:py-2 rounded-lg text-xs sm:text-sm flex items-center transition-all duration-300 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Zoom
                </button>
              </div>
            </div>
          </div>
          
          {/* Product Details Section - Enhanced for all screens */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-black/90 via-blue-900/70 to-black/80 text-white p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden">
            {/* Animated circuit pattern background */}
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="circuit" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M10 10h30v30h-30z" fill="none" stroke="white" strokeWidth="0.5"/>
                  <circle cx="10" cy="10" r="2" fill="white"/>
                  <circle cx="40" cy="40" r="2" fill="white"/>
                  <path d="M10 10h10v10h20" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#circuit)"/>
              </svg>
            </div>
            
            {/* Main Content - Enhanced typography for better readability */}
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-2 sm:mb-4 animate-pulse">MILITARY GRADE</div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 leading-tight">Advanced Surveillance & Reconnaissance System</h1>
              <p className="text-gray-300 mb-4 sm:mb-6 md:mb-8 text-base sm:text-lg">Next-generation aerial platform with extended range capabilities</p>
              
              {/* Tabs with animated border - More touch-friendly on mobile */}
              <div className="relative mb-4 sm:mb-6 md:mb-8">
                <div className="flex space-x-4 sm:space-x-6 md:space-x-8 overflow-x-auto pb-2">
                  {['overview', 'specifications', 'applications'].map((tab) => (
                    <button
                      key={tab}
                      className={`pb-2 font-medium text-base sm:text-lg capitalize transition-all duration-300 whitespace-nowrap ${activeTab === tab ? 'text-blue-400' : 'text-gray-400 hover:text-gray-300'}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                
                {/* Adaptive animated tab indicator */}
                <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300" 
                  style={{ 
                    width: activeTab === 'overview' ? '70px' : activeTab === 'specifications' ? '110px' : '92px',
                    transform: `translateX(${activeTab === 'overview' ? '0' : activeTab === 'specifications' ? (isMobile ? '90px' : '100px') : (isMobile ? '220px' : '240px')})`
                  }}>
                </div>
              </div>
              
              {/* Tab Content with smooth transition - Adjusted heights for smaller screens */}
              <div className="h-56 sm:h-64 md:h-72 overflow-y-auto pr-2 sm:pr-4 custom-scrollbar">
                {activeTab === 'overview' && (
                  <div className="space-y-4 sm:space-y-6 animate-fadeIn">
                    <p className="text-base sm:text-lg text-gray-300">Our cutting-edge surveillance and reconnaissance system delivers unparalleled performance in challenging environments. Designed for tactical missions requiring extended flight time and high-resolution imaging.</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6">
                      {Object.entries(productDetails).map(([key, value]) => (
                        <div 
                          key={key} 
                          className={`flex flex-col p-3 sm:p-4 rounded-lg transition-all duration-300 ${highlightedSpec === key ? 'bg-blue-900/50 scale-105' : 'bg-black/40 hover:bg-blue-950/40'}`}
                        >
                          <span className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
                            {key === 'payloadFOV' ? 'Payload FOV' : 
                             key === 'maxAltitude' ? 'Max Altitude' :
                             key === 'maxSpeed' ? 'Max Speed' : 
                             key === 'thermalResolution' ? 'Thermal Resolution' : key}
                          </span>
                          <span className="text-lg sm:text-xl font-semibold mt-1 text-blue-200">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {activeTab === 'specifications' && (
                  <div className="space-y-4 sm:space-y-6 animate-fadeIn">
                    <div className="bg-black/40 p-4 sm:p-6 rounded-xl border border-blue-900/30">
                      <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 flex items-center text-blue-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Performance
                      </h3>
                      <ul className="space-y-3 sm:space-y-4">
                        <li className="flex justify-between items-center border-b border-blue-900/30 pb-2 sm:pb-3">
                          <span className="text-gray-300 text-sm sm:text-base">Endurance</span>
                          <span className="text-base sm:text-lg font-medium text-blue-200">{productDetails.endurance}</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-blue-900/30 pb-2 sm:pb-3">
                          <span className="text-gray-300 text-sm sm:text-base">Maximum Altitude</span>
                          <span className="text-base sm:text-lg font-medium text-blue-200">{productDetails.maxAltitude}</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm sm:text-base">Maximum Speed</span>
                          <span className="text-base sm:text-lg font-medium text-blue-200">{productDetails.maxSpeed}</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-black/40 p-4 sm:p-6 rounded-xl border border-blue-900/30">
                      <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 flex items-center text-blue-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Imaging System
                      </h3>
                      <ul className="space-y-3 sm:space-y-4">
                        <li className="flex justify-between items-center border-b border-blue-900/30 pb-2 sm:pb-3">
                          <span className="text-gray-300 text-sm sm:text-base">Field of View</span>
                          <span className="text-base sm:text-lg font-medium text-blue-200">{productDetails.payloadFOV}</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-blue-900/30 pb-2 sm:pb-3">
                          <span className="text-gray-300 text-sm sm:text-base">Thermal Resolution</span>
                          <span className="text-base sm:text-lg font-medium text-blue-200">{productDetails.thermalResolution}</span>
                        </li>
                        <li className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm sm:text-base">Stabilization</span>
                          <span className="text-base sm:text-lg font-medium text-blue-200">3-Axis Gimbal</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                
                {activeTab === 'applications' && (
                  <div className="space-y-4 sm:space-y-6 animate-fadeIn">
                    <p className="text-base sm:text-lg text-gray-300">Our surveillance system is designed for mission-critical applications:</p>
                    <ul className="space-y-4 sm:space-y-6">
                      <li className="flex flex-col sm:flex-row bg-black/40 p-3 sm:p-4 rounded-lg transform transition-all duration-300 hover:translate-x-2 border border-blue-900/20">
                        <div className="flex-shrink-0 mb-3 sm:mb-0">
                          <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-full p-2 sm:p-3 sm:mr-4 inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-lg sm:text-xl text-blue-400">Tactical Reconnaissance</h4>
                          <p className="text-gray-300 mt-1 sm:mt-2 text-sm sm:text-base">Real-time battlefield intelligence with secure data transmission and enhanced night vision capabilities</p>
                        </div>
                      </li>
                      <li className="flex flex-col sm:flex-row bg-black/40 p-3 sm:p-4 rounded-lg transform transition-all duration-300 hover:translate-x-2 border border-blue-900/20">
                        <div className="flex-shrink-0 mb-3 sm:mb-0">
                          <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-full p-2 sm:p-3 sm:mr-4 inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-lg sm:text-xl text-blue-400">Border Surveillance</h4>
                          <p className="text-gray-300 mt-1 sm:mt-2 text-sm sm:text-base">Extended perimeter monitoring with advanced thermal detection capabilities and AI-powered threat recognition</p>
                        </div>
                      </li>
                      <li className="flex flex-col sm:flex-row bg-black/40 p-3 sm:p-4 rounded-lg transform transition-all duration-300 hover:translate-x-2 border border-blue-900/20">
                        <div className="flex-shrink-0 mb-3 sm:mb-0">
                          <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-full p-2 sm:p-3 sm:mr-4 inline-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-lg sm:text-xl text-blue-400">Disaster Response</h4>
                          <p className="text-gray-300 mt-1 sm:mt-2 text-sm sm:text-base">Search and rescue operations in challenging terrains and low-visibility conditions</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              
              {/* Call to action section with animated gradient border - Made more responsive */}
              <div className="mt-6 sm:mt-8">
                <div className="relative group">
                  {/* Animated gradient border */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-600 rounded-lg opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition duration-500 animate-gradient-x"></div>
                  
                  {/* Button container - Responsive layout */}
                  <div className="relative flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                    <button 
                      id="demo-button"
                      className="bg-gradient-to-r from-blue-600 to-purple-500 hover:from-blue-500 hover:to-purple-400 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/50 text-base sm:text-lg flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Request Live Demo
                    </button>
                    <button className="relative bg-transparent border border-blue-500 text-blue-300 hover:text-white hover:bg-blue-900/30 py-2 sm:py-3 px-6 sm:px-8 rounded-lg font-medium transition-all duration-300 text-base sm:text-lg flex items-center justify-center overflow-hidden group">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                      </svg>
                      Download Full Specs
                      
                      {/* Download animation */}
                      <span className="absolute inset-0 h-0 w-full bg-blue-500 opacity-10 transition-all duration-1000 group-hover:h-full"></span>
                    </button>
                  </div>
                </div>
                
                {/* Military certification badge - Made more compact on mobile */}
                <div className="mt-6 sm:mt-8 flex items-center">
                  <div className="h-px bg-blue-800/50 flex-grow"></div>
                  <div className="px-3 py-1 sm:px-4 sm:py-2 bg-black/40 rounded-lg mx-2 sm:mx-4 flex items-center border border-blue-900/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-blue-300 text-xs sm:text-sm">Military Grade Certified</span>
                  </div>
                  <div className="h-px bg-blue-800/50 flex-grow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom navigation bar - Made scrollable on small screens */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md py-2 sm:py-4 px-3 sm:px-6 border-t border-blue-900/30 z-50">
        <div className="flex justify-between items-center flex-wrap gap-1 sm:gap-2">
          <div className="flex items-center space-x-2">
            <span className="text-blue-400 font-medium text-xs sm:text-sm">Mission Ready</span>
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
          </div>
          
          <div className="flex space-x-3 sm:space-x-6 md:space-x-8 overflow-x-auto pb-1 scrollbar-hide">
            {Object.entries(productDetails).map(([key, value]) => (
              <div key={key} className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm whitespace-nowrap">
                <span className="text-gray-400">
                  {key === 'payloadFOV' ? 'FOV' : 
                   key === 'maxAltitude' ? 'Altitude' :
                   key === 'maxSpeed' ? 'Speed' : 
                   key === 'thermalResolution' ? 'Resolution' : 
                   key === 'endurance' ? 'Flight Time' : key}
                </span>
                <span className="text-blue-300 font-medium">{value}</span>
              </div>
            ))}
            <div className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm whitespace-nowrap">
              <span className="text-gray-400">Operating Temp</span>
              <span className="text-blue-300 font-medium">-20°C to +55°C</span>
            </div>
          </div>
          
          <button className="bg-blue-900/50 hover:bg-blue-800/60 text-blue-300 text-xs sm:text-sm py-1 px-2 sm:px-3 rounded flex items-center transition-colors duration-200 border border-blue-800/50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule
          </button>
        </div>
      </div>
      
      {/* CSS for custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0.2; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(59, 130, 246, 0.2);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 10px;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ProductShowcase;