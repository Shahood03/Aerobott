import React, { useState, useEffect } from 'react';

const FPVDroneSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  
  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('fpv-drone-section');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Drone specifications
  const specs = [
    { label: 'Range', value: '5 km', icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' },
    { label: 'Endurance', value: '30 mins', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'Max Altitude', value: '10,000 ft', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
    { label: 'Max Speed', value: '20 m/s', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { label: 'Weight', value: '< 2 kg', icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3' },
    { label: 'Camera', value: '1080p @ 60fps', icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' }
  ];

  // Use cases
  const useCases = [
    {
      id: 'military',
      title: 'Military Applications',
      description: 'Rapid payload delivery to forward operating positions with real-time visual confirmation.',
      image: '/images/drone/n3.png'
    },
    {
      id: 'disaster',
      title: 'Disaster Response',
      description: 'Deliver critical medical supplies and emergency equipment to hard-to-reach disaster zones.',
      image: '/images/drone/n3.png'
    },
    {
      id: 'border',
      title: 'Border Security',
      description: 'Quick deployment of specialized payloads for surveillance and security operations.',
      image: '/images/drone/n3.png'
    }
  ];

  return (
    <section 
      id="fpv-drone-section"
      className="relative bg-gradient-to-b from-blue-900 to-black py-20 px-6 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{ 
            backgroundImage: 'radial-gradient(circle, #3B82F6 1px, transparent 1px)', 
            backgroundSize: '30px 30px' 
          }}></div>
        </div>
        
        {/* Animated flight path */}
        <svg className="absolute top-1/2 left-0 w-full" style={{ transform: 'translateY(-50%)' }} viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M-100,100 C200,20 400,180 600,100 C800,20 1000,180 1300,100" 
            stroke="url(#blueGradient)" 
            strokeWidth="2" 
            strokeDasharray="10,10" 
            className="animate-flight-path"
          />
          <defs>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section heading with animation */}
        <div 
          className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-block px-4 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-sm font-medium text-white mb-4">
            RAPID DEPLOYMENT
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            FPV Drone For <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Fast Payload Delivery</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            High-speed FPV drone system designed for precise payload dropping with real-time visual confirmation and exceptional maneuverability at altitudes up to 10,000 feet.
          </p>
        </div>

        {/* Drone showcase with specifications */}
        <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left side: Drone visualization */}
            <div className="relative">
              <div className="relative aspect-video bg-gradient-to-br from-blue-900/50 to-indigo-900/50 rounded-2xl overflow-hidden border border-blue-800/50">
                {/* Drone image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="/images/drone/n3.png" 
                    alt="FPV Payload Drone" 
                    className="max-w-full h-auto object-contain"
                    style={{
                      filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))",
                      animation: "float 6s ease-in-out infinite"
                    }}
                  />
                </div>
                
                {/* Drone highlight points */}
                <div className="absolute top-1/4 left-1/4 flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                  <div className="absolute w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="ml-3 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-blue-400">HD Camera</div>
                </div>
                
                <div className="absolute bottom-1/3 right-1/3 flex items-center">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full animate-ping opacity-75"></div>
                  <div className="absolute w-2 h-2 bg-indigo-400 rounded-full"></div>
                  <div className="ml-3 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-indigo-400">Payload Bay</div>
                </div>
                
                {/* Video feed overlay effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-blue-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                  <div className="absolute top-2 left-2 text-xs text-blue-400 font-mono">FPV FEED • 1080p 60FPS</div>
                  <div className="absolute top-2 right-2 text-xs text-blue-400 font-mono">ALT: 2,450 FT</div>
                  <div className="absolute bottom-2 left-2 text-xs text-blue-400 font-mono">SPD: 12.4 M/S</div>
                  <div className="absolute bottom-2 right-2 text-xs text-red-400 font-mono blink">● REC</div>
                </div>
              </div>
            </div>
            
            {/* Right side: Specifications */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Technical Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {specs.map((spec, index) => (
                  <div 
                    key={index}
                    className="bg-blue-900/20 backdrop-blur-sm border border-blue-800/30 rounded-xl p-4 transition-all duration-300 hover:bg-blue-800/30 hover:border-blue-700/50 hover:shadow-lg hover:shadow-blue-700/10"
                    onMouseEnter={() => setHoveredFeature(index)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <div className="flex items-start">
                      <div className={`p-2 rounded-lg ${hoveredFeature === index ? 'bg-blue-500 text-white' : 'bg-blue-900/50 text-blue-400'} transition-colors duration-300`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={spec.icon} />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-400 text-sm">{spec.label}</p>
                        <p className="text-white text-xl font-bold">{spec.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Key highlights */}
              <div className="mt-8 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-xl p-6 border border-blue-700/30">
                <h4 className="text-lg font-bold text-white mb-3">Key Highlights</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Immersive low-latency FPV experience with 1080p/60fps video feed
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Precision payload dropping system with automated release mechanism
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    High-altitude operation capability up to 10,000 feet
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Rapid deployment with 20 m/s maximum speed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Use cases */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Operational Applications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div 
                key={useCase.id}
                className={`bg-gradient-to-br from-blue-900/30 to-indigo-900/30 rounded-xl overflow-hidden border border-blue-800/30 transition-all duration-500 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="relative h-48">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-lg font-bold text-white">{useCase.title}</h4>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 p-0.5 rounded-lg">
            <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-lg px-8 py-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Ready for Deployment</h3>
              <p className="text-gray-400 mb-6">Experience the next generation of rapid payload delivery drone systems.</p>
              <button className="bg-gradient-to-r from-blue-500 to-indigo-500 px-8 py-3 rounded-lg font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1">
                Request Live Demonstration
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl"></div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        @keyframes flight-path {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 100; }
        }
        
        .animate-flight-path {
          animation: flight-path 15s linear infinite;
        }
        
        .blink {
          animation: blink 1.5s infinite;
        }
        
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0.3; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default FPVDroneSection;