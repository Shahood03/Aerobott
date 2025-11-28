import React, { useState, useEffect } from 'react';

const AgriDroneOverview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('tank');
  
  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('aerobott-overview');
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
      id: 'tank',
      title: '10L Smart Tank',
      description: 'Configurable for liquid fertilizers, pesticides, or herbicides with flow control.',
      stats: [
        { label: 'Tank Capacity', value: '10 Liters' },
        { label: 'Flow Control', value: 'Smart System' },
        { label: 'Compatibility', value: 'Multi-Chemical' }
      ],
      featureImage: "/images/agri/a6.jpg"
    },
    {
      id: 'battery',
      title: 'Swappable Battery System',
      description: '20-25 min flight per battery; change in seconds for continuous operations.',
      stats: [
        { label: 'Flight Time', value: '20-25 mins' },
        { label: 'Swap Time', value: 'Seconds' },
        { label: 'Operation', value: 'Continuous' }
      ],
      featureImage: "/images/agri/a7.jpg"
    },
    {
      id: 'terrain',
      title: 'Terrain-Aware Flying',
      description: 'Auto altitude adjustment for uneven fields or slopes.',
      stats: [
        { label: 'Altitude Control', value: 'Auto Adjust' },
        { label: 'Terrain Support', value: 'Uneven Fields' },
        { label: 'Slope Handling', value: 'Adaptive' }
      ],
      featureImage: "/images/agri/a2.png"
    },
    {
      id: 'nozzles',
      title: 'Precision Spray Nozzles',
      description: 'Adjustable droplet size, wind-resistant atomization, and row alignment.',
      stats: [
        { label: 'Droplet Size', value: 'Adjustable' },
        { label: 'Wind Resistance', value: 'Enhanced' },
        { label: 'Row Alignment', value: 'Precision' }
      ],
      featureImage: "/images/agri/a9.jpg"
    },
    {
      id: 'planning',
      title: 'Intelligent Flight Planning',
      description: 'Create & save field maps via app with GPS-based path automation.',
      stats: [
        { label: 'Field Mapping', value: 'App-Based' },
        { label: 'Navigation', value: 'GPS Guided' },
        { label: 'Path Planning', value: 'Automated' }
      ],
      featureImage: "/images/agri/a6.jpg"
    },
    {
      id: 'integration',
      title: 'Agri Data Integration',
      description: 'Compatible with Kisan Drones, SMAM, and AIF reporting formats.',
      stats: [
        { label: 'Kisan Drones', value: 'Compatible' },
        { label: 'SMAM Format', value: 'Supported' },
        { label: 'AIF Reports', value: 'Integrated' }
      ],
      featureImage: "/images/agri/a7.jpg"
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
        id="aerobott-overview"
        className="relative bg-[#000000] py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden font-raleway"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section heading with animation */}
          <div 
            className={`mb-8 sm:mb-12 md:mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-green-500 via-yellow-400 to-green-600 rounded-full text-xs sm:text-sm font-raleway font-medium text-gray-900 mb-4">
              AGRICULTURAL INNOVATION
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-raleway font-medium text-white mb-4 px-2 leading-tight">
              Smart Agricultural <span className="block sm:inline bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400 font-raleway font-normal">Drone Technology</span>
            </h2>
            <p className="max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl font-raleway leading-relaxed px-4">
              Advanced precision agriculture solution featuring intelligent spray systems, terrain-aware flight control, and seamless integration with agricultural data platforms for modern farming operations.
            </p>
          </div>

          {/* Drone illustration with map */}
          <div 
            className={`relative flex justify-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
              {/* Drone illustration */}
              <div className="relative z-10">
                <img 
                  src="/images/agri/a5.png" 
                  alt="Agricultural Drone" 
                  className="w-full h-auto rounded-lg sm:rounded-xl shadow-2xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-48 sm:h-56 md:h-64 bg-gradient-to-br from-green-800 to-green-900 rounded-lg sm:rounded-xl hidden items-center justify-center border border-green-700">
                  <div className="text-center text-green-400">
                    <div className="h-12 sm:h-16 w-12 sm:w-16 mx-auto mb-2 bg-green-600 rounded-lg flex items-center justify-center">
                      <span className="text-xl sm:text-2xl">🚁</span>
                    </div>
                    <p className="text-sm font-raleway">Agricultural Drone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature tabs */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Tab buttons - Mobile optimized */}
            <div className="mb-6 sm:mb-8 md:mb-10">
              {/* Mobile: Horizontal scroll */}
              <div className="block md:hidden">
                <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
                  {features.map(feature => (
                    <button
                      key={feature.id}
                      onClick={() => setActiveTab(feature.id)}
                      className={`flex-shrink-0 px-3 py-2 text-xs sm:text-sm font-raleway font-medium rounded-lg transition-all duration-300 whitespace-nowrap ${
                        activeTab === feature.id 
                          ? 'bg-green-600 text-white shadow-lg shadow-green-500/20'
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {feature.title}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Tablet and Desktop: Grid layout */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-wrap justify-center gap-2 lg:gap-3">
                {features.map(feature => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(feature.id)}
                    className={`px-3 md:px-4 lg:px-5 py-2 md:py-3 text-sm lg:text-base font-raleway font-medium rounded-lg transition-all duration-300 ${
                      activeTab === feature.id 
                        ? 'bg-green-600 text-white shadow-lg shadow-green-500/20'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {feature.title}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Tab content */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10 border border-gray-800">
              {features.map(feature => (
                <div
                  key={feature.id}
                  className={`transition-all duration-500 ${
                    activeTab === feature.id 
                      ? 'opacity-100 block' 
                      : 'opacity-0 hidden'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start">
                    {/* Content */}
                    <div className="order-2 lg:order-1">
                      <div className="flex items-start sm:items-center mb-3 sm:mb-4 lg:mb-6">
                        <div className="mr-2 sm:mr-3 lg:mr-4 w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 rounded-lg flex items-center justify-center border border-gray-600 flex-shrink-0 overflow-hidden">
                          <img 
                            src="/images/element/icon1.png" 
                            alt="Feature Icon" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-raleway font-medium text-white leading-tight">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-raleway leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {/* Stats - Responsive grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                        {feature.stats.map((stat, index) => (
                          <div key={index} className="bg-gray-800/50 rounded-lg p-2 sm:p-3 lg:p-4 border border-gray-700">
                            <p className="text-gray-400 text-xs font-raleway mb-1">{stat.label}</p>
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-raleway font-medium text-white leading-tight">
                              {stat.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Feature illustration */}
                    <div className="order-1 lg:order-2 bg-gradient-to-br from-gray-800/30 to-green-900/30 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-gray-700">
                      <img 
                        src={feature.featureImage} 
                        alt={feature.title} 
                        className="w-full h-auto rounded-lg shadow-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-32 sm:h-40 md:h-48 lg:h-56 bg-gradient-to-br from-green-700 to-green-800 rounded-lg hidden items-center justify-center">
                        <div className="text-center text-green-400">
                          <div className="h-8 sm:h-12 w-8 sm:w-12 mx-auto mb-2 bg-green-600 rounded-lg flex items-center justify-center">
                            <span className="text-lg sm:text-xl">🌾</span>
                          </div>
                          <p className="text-xs sm:text-sm font-raleway px-2">{feature.title} Image</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Decorative elements - Responsive sizes */}
        <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-green-500/10 rounded-full blur-3xl"></div>
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

export default AgriDroneOverview;