import React, { useState, useEffect } from 'react';

const AerobottOverview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('tactical');
  
  // Handle scroll visibility - Fixed to use correct ID
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

  // Set visible immediately on mount as fallback
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Replaced only text content for FLYT-I drone
  const features = [
    {
      id: 'tactical',
      title: 'FLYT-I Overview',
      description: 'FLYT-I is an indigenously developed quadcopter designed for training and recreation. It is equipped with state-of-the-art electronics and a robust frame built to endure repeated flights and intensive pilot training.',
      stats: [
        { label: 'Category', value: 'DGCA Type-Certified (Small)' },
        { label: 'Flight Time', value: '20 Minutes' },
        { label: 'Use Case', value: 'RPTOs & Training' }
      ],
      featureImage: "/images/products/p7.png"
    },
    {
      id: 'specs',
      title: 'Technical Specifications',
      description: 'The drone features a Pixhawk Cube Orange 2.0 flight controller, RFD868UX telemetry, and Taranis QX7 radio control. Its carbon fibre reinforced nylon body ensures durability with efficient 260W motors and 10-inch propellers.',
      stats: [
        { label: 'Controller', value: 'Pixhawk Cube Orange 2.0' },
        { label: 'Telemetry', value: 'RFD868UX' },
        { label: 'Radio', value: 'Taranis QX7' }
      ],
      featureImage: "/images/products/p6.png"
    },
    {
      id: 'build',
      title: 'Design & Construction',
      description: 'Built with carbon fibre reinforced nylon for a rigid, low-maintenance, and durable structure. The drone supports 4 motors with self-tightening propellers to ensure stable and safe flight operations.',
      stats: [
        { label: 'Material', value: 'Carbon Fibre Reinforced Nylon' },
        { label: 'Motors', value: '4 (260W Each)' },
        { label: 'Propellers', value: '10-Inch Self-Tightening' }
      ],
      featureImage: "/images/products/p10.png"
    },
    {
      id: 'autopilot',
      title: 'Flight & Autopilot Modes',
      description: 'FLYT-I offers multiple flight modes such as Altitude, Loiter, Stabilize, and RTL (Return-to-Launch), ensuring flexible and safe training environments for pilots in different conditions.',
      stats: [
        { label: 'Flight Modes', value: 'Altitude / Loiter / RTL / Stable' },
        { label: 'Range', value: '1 km' },
        { label: 'Ceiling', value: '50 m' }
      ],
      featureImage: "/images/products/p8.png"
    },
    {
      id: 'gcs',
      title: 'Battery & Power System',
      description: 'Powered by a 4S1P 8000mAh Li-ion battery with XT-60 connectors, providing a 20-minute endurance. It supports a wide operating temperature range from -10°C to +55°C.',
      stats: [
        { label: 'Battery Capacity', value: '8000mAh' },
        { label: 'Voltage', value: '16.8V Peak / 14.8V Nominal' },
        { label: 'Operating Temp', value: '-10°C to +55°C' }
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
      
      <section id="aerobott-overview"
        className="relative bg-[#000000] py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden font-raleway"
      >
        <div className="max-w-7xl mx-auto">
       

          {/* Drone illustration */}
          <div 
            className={`relative flex justify-center mb-4 sm:mb-6 md:mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-100 scale-100'}`}
          >
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
              <div className="relative z-10">
                <img 
                  src="/images/products/p5.png" 
                  alt="FLYT-I Drone" 
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

          {/* Feature tabs (unchanged structure) */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'}`}>
            <div className="mb-6 sm:mb-8 md:mb-10">
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
            
            {/* Tab content (unchanged) */}
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
        
        {/* Decorative elements remain unchanged */}
        <div className="absolute top-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
      </section>
    </>
  );
};

export default AerobottOverview;
