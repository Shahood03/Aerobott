import React, { useState, useEffect } from 'react';

const AerobottOverview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('accuracy');
  
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
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Data for feature cards
  const features = [
    {
      id: 'accuracy',
      title: 'Centimeter-Level Accuracy',
      description: 'Achieved using RTK/PPK GNSS modules and professional-grade IMUs for precise surveying and mapping applications.',
      stats: [
        { label: 'GNSS Technology', value: 'RTK/PPK' },
        { label: 'Accuracy Level', value: 'Centimeter' },
        { label: 'IMU Grade', value: 'Professional' }
      ],
      featureImage: "/images/products/p2.avif"
    },
    {
      id: 'camera',
      title: 'High-Res 4K Camera',
      description: 'Capture sharp, detailed images ideal for photogrammetry and precise mapping applications.',
      stats: [
        { label: 'Resolution', value: '4K Ultra HD' },
        { label: 'Image Quality', value: 'Sharp Detail' },
        { label: 'Application', value: 'Photo grammetry' }
      ],
      featureImage: "/images/products/p2.avif"
    },
    {
      id: 'flight',
      title: '45+ Minute Flight Time',
      description: 'Efficient coverage of up to 2 sq. km per flight with extended battery life for comprehensive surveying.',
      stats: [
        { label: 'Flight Duration', value: '45+ mins' },
        { label: 'Coverage Area', value: '2 sq. km' },
        { label: 'Efficiency', value: 'Extended Range' }
      ],
      featureImage: "/images/products/p2.avif"
    },
    {
      id: 'exports',
      title: 'GIS-Compatible Exports',
      description: 'Supports orthomosaics, DEMs, point clouds, and shapefiles for seamless GIS integration.',
      stats: [
        { label: 'Orthomosaics', value: 'Supported' },
        { label: 'Point Clouds', value: 'Generated' },
        { label: 'File Formats', value: 'Shapefiles' }
      ],
      featureImage: "/images/products/p2.avif"
    },
    {
      id: 'planning',
      title: 'Automated Mission Planning',
      description: 'App-based planning with terrain-follow and area-of-interest scanning for intelligent surveying missions.',
      stats: [
        { label: 'Interface', value: 'App-Based' },
        { label: 'Terrain Follow', value: 'Automated' },
        { label: 'AOI Scanning', value: 'Intelligent' }
      ],
      featureImage: "/images/products/p2.avif"
    },
    {
      id: 'payload',
      title: 'Modular Payload System',
      description: 'Optional thermal or multispectral sensors for specialized surveying and environmental monitoring applications.',
      stats: [
        { label: 'Thermal Sensors', value: 'Optional' },
        { label: 'Multispectral', value: 'Available' },
        { label: 'System Type', value: 'Modular' }
      ],
      featureImage: "/images/products/p2.avif" 
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
        className="relative bg-[#000000] py-12 sm:py-16 md:py-20 lg:py-24 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden font-raleway"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section heading with animation - Fully responsive */}
          <div 
            className={`mb-8 sm:mb-12 md:mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="inline-block px-3 xs:px-4 py-1 xs:py-2 bg-gradient-to-r from-blue-500 via-white to-blue-600 rounded-full text-xs xs:text-sm font-raleway font-medium text-gray-900 mb-3 xs:mb-4">
              PROFESSIONAL SURVEYING
            </div>
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-raleway font-medium text-white mb-3 xs:mb-4 px-2 leading-tight">
              Precision Mapping{' '}
              <span className="block xs:inline bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-blue-400 font-raleway font-normal">
                Surveying Drones
              </span>
            </h2>
            <p className="max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto text-gray-300 text-sm xs:text-base sm:text-lg md:text-xl font-raleway leading-relaxed px-2 sm:px-0">
              Professional-grade surveying drones with centimeter-level accuracy, extended flight time, and comprehensive GIS integration for precise mapping and photogrammetry applications.
            </p>
          </div>

          {/* Drone illustration with map - Responsive sizing */}
          <div 
            className={`relative flex justify-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <div className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
              {/* Drone illustration */}
              <div className="relative z-10">
                <img 
                  src="/images/survey/s3.avif" 
                  alt="Professional Surveying Drone" 
                  className="w-full h-auto rounded-lg xs:rounded-xl shadow-2xl"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg xs:rounded-xl hidden items-center justify-center border border-gray-700">
                  <div className="text-center text-gray-400">
                    <div className="h-12 xs:h-16 w-12 xs:w-16 mx-auto mb-2 bg-gray-600 rounded-lg flex items-center justify-center">
                      <span className="text-xl xs:text-2xl">🚁</span>
                    </div>
                    <p className="text-xs xs:text-sm font-raleway">Surveying Drone</p>
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
                    className={`px-4 py-2 text-xs font-raleway font-medium rounded-lg transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
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
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 border border-gray-800">
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
                        <div className="mr-3 sm:mr-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center border border-gray-600 flex-shrink-0 overflow-hidden">
                          <img 
                            src={`/images/icon-${feature.id}.avif`}
                            alt={`${feature.title} icon`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <img 
                            src="/images/element/icon1.avif"
                            alt="Feature icon placeholder"
                            className="w-full h-full object-cover hidden"
                          />
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-raleway font-medium text-white">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 mb-4 sm:mb-6 text-sm xs:text-base sm:text-lg md:text-xl font-raleway leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {/* Stats - Responsive grid */}
                      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                        {feature.stats.map((stat, index) => (
                          <div key={index} className="bg-gray-800/50 rounded-lg p-3 sm:p-4 border border-gray-700">
                            <p className="text-gray-400 text-xs sm:text-sm font-raleway mb-1">{stat.label}</p>
                            <p className="text-lg xs:text-xl sm:text-2xl font-raleway font-medium text-white">
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
                      <div className="w-full h-32 xs:h-40 sm:h-48 md:h-56 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg hidden items-center justify-center">
                        <div className="text-center text-gray-400">
                          <div className="h-8 xs:h-10 sm:h-12 w-8 xs:w-10 sm:w-12 mx-auto mb-2 bg-gray-600 rounded-lg flex items-center justify-center">
                            <span className="text-base xs:text-lg sm:text-xl">🖼️</span>
                          </div>
                          <p className="text-xs xs:text-sm font-raleway">{feature.title} Image</p>
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
        <div className="absolute top-0 left-0 w-32 h-32 xs:w-48 xs:h-48 sm:w-64 sm:h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 xs:w-60 xs:h-60 sm:w-80 sm:h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
        
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
          
          /* Custom responsive breakpoint for very small devices */
          @media (max-width: 475px) {
            .xs\\:text-2xl { font-size: 1.5rem; line-height: 2rem; }
            .xs\\:text-base { font-size: 1rem; line-height: 1.5rem; }
            .xs\\:px-4 { padding-left: 1rem; padding-right: 1rem; }
            .xs\\:py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
            .xs\\:mb-4 { margin-bottom: 1rem; }
            .xs\\:max-w-sm { max-width: 24rem; }
            .xs\\:h-56 { height: 14rem; }
            .xs\\:flex-row { flex-direction: row; }
            .xs\\:items-center { align-items: center; }
            .xs\\:mb-0 { margin-bottom: 0; }
            .xs\\:mr-3 { margin-right: 0.75rem; }
            .xs\\:w-14 { width: 3.5rem; }
            .xs\\:h-14 { height: 3.5rem; }
            .xs\\:text-xl { font-size: 1.25rem; line-height: 1.75rem; }
            .xs\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .xs\\:h-40 { height: 10rem; }
            .xs\\:h-10 { height: 2.5rem; }
            .xs\\:w-10 { width: 2.5rem; }
            .xs\\:text-lg { font-size: 1.125rem; line-height: 1.75rem; }
            .xs\\:text-sm { font-size: 0.875rem; line-height: 1.25rem; }
            .xs\\:w-48 { width: 12rem; }
            .xs\\:h-48 { height: 12rem; }
            .xs\\:w-60 { width: 15rem; }
            .xs\\:h-60 { height: 15rem; }
            .xs\\:p-5 { padding: 1.25rem; }
            .xs\\:rounded-xl { border-radius: 0.75rem; }
            .xs\\:inline { display: inline; }
          }
          
          /* Mobile-specific optimizations */
          @media (max-width: 640px) {
            .block.xs\\:inline {
              display: inline;
              margin-top: 0.25rem;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default AerobottOverview;