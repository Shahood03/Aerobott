import React, { useEffect, useRef } from 'react';

const GISDronesBanner = () => {
  // Reference to the drone image element
  const droneRef = useRef(null);

  // Handle navigation to the enroll page
  const handleEnrollClick = (e) => {
    e.preventDefault();
    console.log('Navigating to GIS courses page');
    // In a real app: navigate('/gis-courses');
  };

  useEffect(() => {
    // Create animation for the main image
    const image = droneRef.current;
    if (!image) return;

    // Initialize variables for animation
    let startTime = null;
    let animationFrame = null;

    // Animation function
    const animateImage = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      // More subtle 3D movement for the main image
      const verticalMovement = Math.sin(elapsed / 2000) * 5; // Gentler up and down movement
      const horizontalMovement = Math.sin(elapsed / 2500) * 3; // Subtle side to side
      const rotation = Math.sin(elapsed / 3000) * 2; // Very subtle rotation
      const tiltX = Math.sin(elapsed / 2200) * 2; // Gentle tilt along X axis
      const tiltY = Math.sin(elapsed / 2700) * 3; // Gentle tilt along Y axis
      const scale = 1 + Math.sin(elapsed / 3500) * 0.02; // Subtle breathing effect with scaling

      // Apply transformations for 3D effect
      image.style.transform = `
        translate3d(${horizontalMovement}px, ${verticalMovement}px, 0)
        rotateZ(${rotation}deg)
        rotateX(${tiltX}deg)
        rotateY(${tiltY}deg)
        scale(${scale})
      `;

      // Continue animation
      animationFrame = requestAnimationFrame(animateImage);
    };

    // Start animation
    animationFrame = requestAnimationFrame(animateImage);

    // Cleanup function
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Main container */}
      <div className="container mx-auto mt-12 px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left content area */}
          <div className="md:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4">
              Map the World.
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              <span className="text-green-600">Master</span> <span className="text-blue-600">GIS</span> <span className="text-purple-600">for Drones</span>
            </h2>
            
            {/* <div className="flex flex-col sm:flex-row sm:space-x-12 mb-8">
              <div className="mb-6 sm:mb-0">
                <div className="text-4xl font-bold text-gray-800">ESRI</div>
                <div className="text-gray-600">Certified</div>
              </div>
              
              <div>
                <div className="text-4xl font-bold text-gray-800">300+</div>
                <div className="text-gray-600">GIS Specialists</div>
              </div>
            </div>
            
            <button 
              onClick={handleEnrollClick}
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-md transition duration-300 ease-in-out group"
            >
              Explore Courses
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button> */}
          </div>
          
          {/* Right image area with diagonal shapes */}
          <div className="md:w-1/2 mt-4 relative">
            {/* Diagonal shape overlays */}
            <div className="absolute inset-0 z-0">
              {/* Green triangle */}
              <div className="absolute top-0 right-0 w-full h-full bg-green-600 transform -skew-x-12 origin-top-right"></div>
              
              {/* Light green triangle */}
              <div className="absolute top-0 right-0 w-3/4 h-2/3 bg-green-400 transform -skew-x-12 origin-top-right"></div>
              
              {/* Blue triangle */}
              <div className="absolute bottom-0 right-0 w-4/5 h-1/3 bg-blue-500 transform -skew-x-12 origin-bottom-right"></div>
            </div>
            
            {/* Image container */}
            <div className="relative z-10 pl-6 md:pl-0">
              {/* Replace with your actual drone and pilot images */}
              <div className="relative perspective-1000">
                {/* Main image with 3D animation */}
                <div 
                  ref={droneRef} 
                  className="transform-gpu transition-transform will-change-transform"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <img 
                    src="/images/banner/b2.png" 
                    alt="GIS mapping with drone technology" 
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  
                  {/* Added shadow effect for better 3D perception */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-black opacity-20 rounded-full blur-lg"></div>
                </div>
                
                {/* Map grid overlay effect */}
                <div className="absolute -top-10 right-8">
                  {/* Animated grid pattern representing GIS mapping */}
                  <svg className="absolute -top-4 -left-4 w-48 h-48" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Grid lines */}
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#10B981" strokeWidth="1" opacity="0.5"/>
                      </pattern>
                    </defs>
                    <rect width="200" height="200" fill="url(#grid)" />
                    
                    {/* Animated waypoints */}
                    <circle cx="50" cy="50" r="4" fill="#10B981">
                      <animate 
                        attributeName="r" 
                        values="4;8;4" 
                        dur="3s" 
                        repeatCount="indefinite"
                      />
                      <animate 
                        attributeName="opacity" 
                        values="0.5;1;0.5" 
                        dur="3s" 
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle cx="100" cy="80" r="4" fill="#3B82F6">
                      <animate 
                        attributeName="r" 
                        values="4;8;4" 
                        dur="3s" 
                        repeatCount="indefinite" 
                        begin="1s"
                      />
                      <animate 
                        attributeName="opacity" 
                        values="0.5;1;0.5" 
                        dur="3s" 
                        repeatCount="indefinite" 
                        begin="1s"
                      />
                    </circle>
                    <circle cx="150" cy="120" r="4" fill="#8B5CF6">
                      <animate 
                        attributeName="r" 
                        values="4;8;4" 
                        dur="3s" 
                        repeatCount="indefinite" 
                        begin="2s"
                      />
                      <animate 
                        attributeName="opacity" 
                        values="0.5;1;0.5" 
                        dur="3s" 
                        repeatCount="indefinite" 
                        begin="2s"
                      />
                    </circle>
                    
                    {/* Flight path connecting waypoints */}
                    <path 
                      d="M50,50 Q75,65 100,80 Q125,100 150,120" 
                      stroke="#10B981" 
                      strokeWidth="2" 
                      strokeDasharray="5,5"
                      fill="none"
                    >
                      <animate 
                        attributeName="stroke-dashoffset" 
                        from="100" 
                        to="0" 
                        dur="6s" 
                        repeatCount="indefinite"
                      />
                    </path>
                  </svg>
                </div>
                
                {/* Data visualization overlay */}
                <div className="absolute -bottom-6 -left-6 w-32 h-24 bg-white/90 rounded-lg p-3 shadow-lg">
                  <div className="text-xs font-semibold text-gray-800 mb-1">Live Data</div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Altitude:</span>
                    <span className="text-green-600 font-mono">120m</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Coverage:</span>
                    <span className="text-blue-600 font-mono">85%</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Accuracy:</span>
                    <span className="text-purple-600 font-mono">±2cm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements for enhanced visual appeal */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-green-400 rounded-full opacity-70 animate-bounce"></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-blue-400 rounded-full opacity-70 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-purple-400 rounded-full opacity-70 animate-ping"></div>
    </div>
  );
};

export default GISDronesBanner;