import React, { useState, useEffect } from 'react';

const AerobottOverview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('tactical');
  
  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('india-drone-section');
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

  // Data for feature cards
  const features = [
    {
      id: 'tactical',
      title: 'Tactical Applications',
      description: 'Precision strikes on high-value targets in border zones with minimal collateral damage.',
      stats: [
        { label: 'Explosive Capacity', value: 'Up to 5kg' },
        { label: 'Operational Range', value: '10 km' },
        { label: 'Max Speed', value: '10 m/s' }
      ],
      featureImage: "/images/products/p7.png"
    },
    {
      id: 'specs',
      title: 'Technical Specifications',
      description: 'High-capacity battery with 20-minute flight time and 200-meter operational range.',
      stats: [
        { label: 'Flight Time', value: '20 mins' },
        { label: 'Battery', value: '8000mAh 4S' },
        { label: 'Range', value: '200 meters' }
      ],
      featureImage: "/images/products/p6.png"
    },
    {
      id: 'build',
      title: 'Durable Construction',
      description: 'Reinforced carbon fiber propellers and rugged airframe designed for repeated flights.',
      stats: [
        { label: 'Propellers', value: 'Carbon Fiber' },
        { label: 'Airframe', value: 'Rugged Build' },
        { label: 'Origin', value: 'Made in India' }
      ],
      featureImage: "/images/products/p10.png"
    },
    {
      id: 'autopilot',
      title: 'Autopilot Modes',
      description: 'Multiple flight modes including Manual, Altitude, Loiter, Return, and Waypoint Missions.',
      stats: [
        { label: 'Flight Modes', value: '5 Types' },
        { label: 'Controller', value: 'Taranis QX7' },
        { label: 'Telemetry', value: 'RFD868UX' }
      ],
      featureImage: "/images/products/p8.png"
    },
    {
      id: 'gcs',
      title: 'Ground Control System',
      description: 'Fully customizable GCS compatible with QGroundControl and Mission Planner.',
      stats: [
        { label: 'Compatibility', value: 'QGround Control' },
        { label: 'Alternative', value: 'Mission Planner' },
        { label: 'Customization', value: 'Fully Flexible' }
      ],
      featureImage: "/images/products/p9.png"
    }
  ];

  return (
    <>
      {/* Load Raleway font from Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" 
        rel="stylesheet" 
      />
      
      <style jsx global>{`
        .font-raleway {
          font-family: 'Raleway', sans-serif;
        }
      `}</style>
      
      <section 
        id="india-drone-section"
        className="relative bg-[#000000] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden font-raleway"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section heading with animation - Fully responsive */}
          <div 
            className={`mb-8 sm:mb-12 md:mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-full text-xs sm:text-sm font-raleway font-medium text-gray-900 mb-4">
              MADE IN INDIA
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-raleway font-medium text-white mb-4 px-2 leading-tight">
              Indigenously Developed{' '}
              <span className="block sm:inline bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-blue-400 font-raleway font-normal">
                Advanced Drones
              </span>
            </h2>
            <p className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl font-raleway leading-relaxed px-4 sm:px-0">
              Fully designed, assembled, and supported in India with in-house engineering. Featuring reinforced carbon fiber propellers, 20-minute flight time, and fully customizable ground control systems.
            </p>
          </div>

          {/* Drone illustration with map - Responsive sizing */}
          <div 
            className={`relative flex justify-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
              {/* Drone illustration */}
              <div className="relative z-10">
                <img 
                  src="/images/products/p5.png" 
                  alt="Advanced Drone India" 
                  className="w-full h-auto rounded-lg sm:rounded-xl shadow-2xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg sm:rounded-xl hidden items-center justify-center border border-gray-700">
                  <div className="text-center text-gray-400">
                    <div className="h-12 sm:h-16 w-12 sm:w-16 mx-auto mb-2 bg-gray-600 rounded-lg flex items-center justify-center">
                      <span className="text-xl sm:text-2xl">🚁</span>
                    </div>
                    <p className="text-sm font-raleway">Drone Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature tabs - Fully responsive */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Tab buttons - Responsive grid and scroll */}
            <div className="mb-6 sm:mb-8 md:mb-10">
              {/* Mobile: Horizontal scroll */}
              <div className="flex sm:hidden overflow-x-auto pb-2 gap-2 scrollbar-hide">
                {features.map(feature => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(feature.id)}
                    className={`px-3 py-2 text-xs font-raleway font-medium rounded-lg transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                      activeTab === feature.id 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {feature.title}
                  </button>
                ))}
              </div>
              
              {/* Tablet and up: Flexbox wrap */}
              <div className="hidden sm:flex flex-wrap justify-center gap-2 md:gap-3">
                {features.map(feature => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(feature.id)}
                    className={`px-3 sm:px-4 md:px-5 py-2 sm:py-3 text-xs sm:text-sm md:text-base font-raleway font-medium rounded-lg transition-all duration-300 ${
                      activeTab === feature.id 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {feature.title}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Tab content - Responsive layout */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 border border-gray-800">
              {features.map(feature => (
                <div
                  key={feature.id}
                  className={`transition-all duration-500 ${
                    activeTab === feature.id 
                      ? 'opacity-100 block' 
                      : 'opacity-0 hidden'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                    {/* Content section - Responsive */}
                    <div className="order-2 lg:order-1">
                      <div className="flex items-center mb-4 sm:mb-6">
                        <div className="mr-3 sm:mr-4 w-10 sm:w-12 md:w-14 lg:w-16 h-10 sm:h-12 md:h-14 lg:h-16 rounded-lg flex items-center justify-center border border-gray-600 flex-shrink-0 overflow-hidden">
                          <img 
                            src="/images/element/icon1.png" 
                            alt="Feature Icon" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-raleway font-medium text-white">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base md:text-lg lg:text-xl font-raleway leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {/* Stats - Responsive grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                        {feature.stats.map((stat, index) => (
                          <div key={index} className="bg-gray-800/50 rounded-lg p-3 sm:p-4 border border-gray-700">
                            <p className="text-gray-400 text-xs sm:text-sm font-raleway mb-1">{stat.label}</p>
                            <p className="text-lg sm:text-xl md:text-2xl font-raleway font-medium text-white">
                              {stat.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Feature illustration - Responsive */}
                    <div className="order-1 lg:order-2 bg-gradient-to-br from-gray-800/30 to-blue-900/30 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-700">
                      <img 
                        src={feature.featureImage} 
                        alt={feature.title} 
                        className="w-full h-auto rounded-lg shadow-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-32 sm:h-40 md:h-48 lg:h-56 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg hidden items-center justify-center">
                        <div className="text-center text-gray-400">
                          <div className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 mx-auto mb-2 bg-gray-600 rounded-lg flex items-center justify-center">
                            <span className="text-base sm:text-lg md:text-xl">🖼️</span>
                          </div>
                          <p className="text-xs sm:text-sm font-raleway">{feature.title} Image</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Decorative elements - Responsive sizing */}
        <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        <style jsx>{`
          @keyframes dash {
            to {
              stroke-dashoffset: 48;
            }
          }
          .animate-dash {
            animation: dash 3s linear infinite;
          }
          
          /* Hide scrollbar for mobile tab scroll */
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>
    </>
  );
};

export default AerobottOverview;