import React, { useState, useEffect } from 'react';

const DroneProductsPage = () => {
  // State for animation triggers
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedDrone, setSelectedDrone] = useState(null);

  // Product data
  const droneProducts = [
    {
      id: 1,
      name: "Survey Master Pro",
      category: "mapping",
      price: "",
      image: "/images/drone/n1.avif",
      description: "High-precision mapping drone with 4K camera and LiDAR sensors. Perfect for topographical surveys and 3D modeling.",
      features: [
        "45-minute flight time",
        "4K camera with 3-axis gimbal",
        "LiDAR sensor integration",
        "RTK GPS positioning",
        "Wind-resistant up to 35mph"
      ],
      specs: {
        flightTime: "45 minutes",
        range: "8 km",
        maxSpeed: "10 m/s",
        camera: "4K @ 60fps",
        weight: "6 kg"
      }
    },
    {
      id: 2,
      name: "Aero Agri",
      category: "agriculture",
      price: "",
      image: "/images/agri/a2.avif",
      description: "Specialized agricultural drone with multispectral imaging for crop health monitoring and precision spraying capabilities.",
      features: [
        "Multispectral camera",
        "10L spraying tank",
        "Automated flight planning",
        "Plant health analysis AI",
        "Dust and water resistant (IP55)"
      ],
      specs: {
        flightTime: "25 minutes",
        range: "5 km",
        maxSpeed: "10 m/s",
        camera: "20MP RGB + Multispectral",
        weight: "20 kg"
      }
    },
    {
      id: 3,
      name: "Survey Pro ",
      category: "security",
      price: "",
      image: "/images/drone/n3.avif",
      description: "Advanced security drone with thermal imaging, object tracking, and autonomous patrol capabilities.",
      features: [
        "Thermal and night vision",
        "AI-powered object tracking",
        "Encrypted video transmission",
        "Autonomous patrol routes",
        "Sirens and spotlights"
      ],
      specs: {
        flightTime: "50 minutes",
        range: "10 km",
        maxSpeed: "72 km/h",
        camera: "4K + Thermal FLIR",
        weight: "3.5 kg"
      }
    },
    {
      id: 4,
      name: "Logistics Support Drone",
      category: "disaster",
      price: "",
      image: "/images/drone/n4.avif",
      description: "Rapid deployment drone for emergency response with thermal imaging, loudspeaker, and payload delivery system.",
      features: [
        "Thermal human detection",
        "Waterproof design (IP67)",
        "120db loudspeaker",
        "Payload delivery system",
        "All-weather operation"
      ],
      specs: {
        flightTime: "38 minutes",
        range: "7 km",
        maxSpeed: "68 km/h",
        camera: "4K + Thermal 640p",
        weight: "2.5 kg"
      }
    },
    {
      id: 5,
      name: "Kamikaze",
      category: "defense",
      price: "",
      image: "",
      description: "Military-grade reconnaissance drone with ultra-secure communications, stealth mode, and long-range capabilities.",
      features: [
        "Low radar signature design",
        "AES-256 encrypted comms",
        "60x optical zoom camera",
        "Silent operation mode",
        "Modular payload system"
      ],
      specs: {
        flightTime: "60 minutes",
        range: "15 km",
        maxSpeed: "90 km/h",
        camera: "4K HDR 60fps + 60x Zoom",
        weight: "4.2 kg"
      }
    },
    {
      id: 6,
      name: "FPV Combat Drone",
      category: "energy",
      price: "",
      image: "/images/drone/n2.avif",
      description: "Specialized drone for power line, wind turbine, and solar panel inspection with high-resolution thermal imaging.",
      features: [
        "Electromagnetic field sensor",
        "Corona discharge detector",
        "High-res thermal imaging",
        "Automated inspection paths",
        "AI defect recognition"
      ],
      specs: {
        flightTime: "45 minutes",
        range: "8 km",
        maxSpeed: "58 km/h",
        camera: "42MP + FLIR Thermal",
        weight: "3.1 kg"
      }
    },
    {
      id: 7,
      name: "Surveillance Drone",
      category: "mining",
      price: "Surveillance Drone",
      image: "/images/drone/n5.avif",
      description: "Rugged drone designed for mining operations with LiDAR mapping, methane detection, and dust-resistant construction.",
      features: [
        "High-precision LiDAR",
        "Methane and gas sensors",
        "Dust and debris protection",
        "Volumetric calculation",
        "Pit and stockpile mapping"
      ],
      specs: {
        flightTime: "40 minutes",
        range: "6 km",
        maxSpeed: "55 km/h",
        camera: "20MP + LiDAR",
        weight: "3.8 kg"
      }
    },
    {
      id: 8,
      name: "Falcon View Pro",
      category: "mapping",
      price: "",
      image: "",
      description: "Compact, foldable mapping drone with high-resolution camera and automated survey planning software.",
      features: [
        "Foldable, portable design",
        "48MP camera sensor",
        "Automated survey planning",
        "Obstacle avoidance system",
        "One-click orthomosaic"
      ],
      specs: {
        flightTime: "35 minutes",
        range: "7 km",
        maxSpeed: "60 km/h",
        camera: "48MP @ 30fps",
        weight: "1.5 kg"
      }
    }
  ];

  // Filter products based on active tab
  const filteredProducts = activeTab === 'all' 
    ? droneProducts 
    : droneProducts.filter(product => product.category === activeTab);

  // Animation effect on page load
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Handle drone selection
  const handleDroneSelect = (drone) => {
    setSelectedDrone(drone);
    
    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle back to products
  const handleBackToProducts = () => {
    setSelectedDrone(null);
  };

  // Categories for filter tabs
  const categories = [
    { id: 'all', name: 'All Drones' },
    { id: 'mapping', name: 'Mapping & Surveying' },
    { id: 'agriculture', name: 'Agriculture' },
    { id: 'security', name: 'Security & Surveillance' },
    { id: 'disaster', name: 'Disaster Management' },
    { id: 'defense', name: 'Defense' },
    { id: 'energy', name: 'Energy & Utility' },
    { id: 'mining', name: 'Mining & Metal' }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Hero section with floating drone animation */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Grid pattern overlay */}
            {[...Array(10)].map((_, i) => (
              <div key={i} className="absolute w-full h-px bg-white opacity-10" style={{ top: `${i * 10}%` }} />
            ))}
            {[...Array(10)].map((_, i) => (
              <div key={i} className="absolute h-full w-px bg-white opacity-10" style={{ left: `${i * 10}%` }} />
            ))}
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className={`transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl font-bold mb-4">Advanced Drone Solutions</h1>
            <p className="text-xl max-w-2xl mb-8">Discover our cutting-edge UAV technology engineered for precision, reliability, and innovation across all industries.</p>
          </div>

          {/* Animated drone (simple CSS animation) */}
          <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className="relative w-64 h-64">
              <div className="absolute w-64 h-64 animate-pulse opacity-30 bg-white rounded-full blur-xl"></div>
              <img 
                src="/images/drone/d7.avif" 
                alt="Drone" 
                className="w-48 h-48 object-contain absolute top-8 left-8 animate-float"
                style={{
                  animation: "float 6s ease-in-out infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {selectedDrone ? (
          // Drone detail view
          <div className={`transition-all duration-500 transform ${selectedDrone ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button 
              onClick={handleBackToProducts}
              className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Products
            </button>
            
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 relative overflow-hidden group">
                  <img 
                    src={selectedDrone.image} 
                    alt={selectedDrone.name} 
                    className="w-full h-96 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h2 className="text-3xl font-bold">{selectedDrone.name}</h2>
                      <div className="flex items-center mt-2">
                        <span className="text-2xl font-semibold">{selectedDrone.price}</span>
                        <span className="ml-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                          {categories.find(cat => cat.id === selectedDrone.category)?.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2 p-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Overview</h3>
                  <p className="text-gray-600 mb-6">{selectedDrone.description}</p>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedDrone.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Specifications</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-sm text-gray-500">Flight Time</span>
                      <p className="font-medium">{selectedDrone.specs.flightTime}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-sm text-gray-500">Range</span>
                      <p className="font-medium">{selectedDrone.specs.range}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-sm text-gray-500">Max Speed</span>
                      <p className="font-medium">{selectedDrone.specs.maxSpeed}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-sm text-gray-500">Camera</span>
                      <p className="font-medium">{selectedDrone.specs.camera}</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <span className="text-sm text-gray-500">Weight</span>
                      <p className="font-medium">{selectedDrone.specs.weight}</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105">
                      Request a Quote
                    </button>
                    <button className="ml-4 border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                      Download Specs
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Products listing view
          <>
            {/* Category filters */}
            <div className={`mb-10 transition-all duration-700 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} overflow-x-auto`}>
              <div className="inline-flex space-x-2 pb-2 min-w-full">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                      activeTab === category.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Products grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => handleDroneSelect(product)}
                >
                  <div className="relative overflow-hidden group cursor-pointer h-56">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-semibold">View Details</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {categories.find(cat => cat.id === product.category)?.name.split(' ')[0]}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-3">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 font-bold">{product.price}</span>
                      <button className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors">
                        Explore →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default DroneProductsPage;