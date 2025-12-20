import React, { useState, useEffect } from 'react';

const LogisticsMedicalDroneDetails = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('specs');
  const [expandedFeature, setExpandedFeature] = useState(null);
  
  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('logistics-medical-drone-details');
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

  // Technical specifications
  const specifications = [
    { 
      name: 'Endurance', 
      value: 'Up to 45 mins', 
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      description: 'Extended flight time enables comprehensive delivery missions without requiring frequent returns to base for recharging.'
    },
    { 
      name: 'Max Altitude', 
      value: '800 ft', 
      icon: 'M5 11l7-7 7 7M5 19l7-7 7 7',
      description: 'Optimal height balancing between terrain clearance and maintaining visual line of sight for effective operations in complex environments.'
    },
    { 
      name: 'Max Speed', 
      value: '10 m/s', 
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      description: 'Rapid deployment capability allowing the drone to reach critical zones quickly while maintaining stability for precise payload delivery.'
    },
    { 
      name: 'Payload Capacity', 
      value: 'Up to 10 kg', 
      icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
      description: 'Substantial carrying capacity for medical supplies, emergency equipment, or other critical resources, with custom payload compartments.'
    },
    { 
      name: 'Weight', 
      value: 'Less than 5 kg', 
      icon: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2',
      description: 'Lightweight construction using carbon fiber composites and advanced materials for maximum efficiency and extended flight time.'
    },
    { 
      name: 'Range', 
      value: '8 km', 
      icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
      description: 'Extended operational radius for reaching remote areas, disaster zones, or battlefield medical stations beyond accessible ground transportation.'
    },
  ];

  // Tab content
  const tabContent = {
    specs: {
      title: 'Technical Specifications',
      description: 'Advanced engineering and precision design allow our Logistics & Medical Support Drone to deliver critical supplies with reliability and efficiency in the most challenging environments.',
    },
    features: {
      title: 'Key Features',
      description: 'Purpose-built for humanitarian and tactical support missions, with specialized systems for secure transport of medical supplies and critical resources.',
      items: [
        {
          title: 'Modular Payload System',
          description: 'Interchangeable payload compartments that can be swapped in under 60 seconds, enabling rapid reconfiguration between missions. Options include temperature-controlled medical containers, drop mechanisms, and specialized tactical supply modules.',
          icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z'
        },
        {
          title: 'Medical Transport Optimization',
          description: 'Specialized compartments for blood samples, vaccines, medications and emergency supplies with temperature control ranging from -20°C to +40°C. Includes shock absorption system for delicate medical equipment and supplies.',
          icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
        },
        {
          title: 'Autonomous Navigation',
          description: 'Advanced AI-powered navigation systems with terrain recognition and obstacle avoidance, enabling operations in GPS-denied environments. Pre-programmed flight patterns for common delivery routes with dynamic rerouting capabilities.',
          icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7'
        },
        {
          title: 'Precision Delivery System',
          description: 'Guided payload release mechanism with sub-meter accuracy, featuring a soft-landing parachute system for fragile supplies. LIDAR-assisted terrain analysis ensures optimal drop zones even in complex environments.',
          icon: 'M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z'
        },
        {
          title: 'Harsh Environment Resilience',
          description: 'Designed to operate in extreme conditions with dust/water resistance (IP67 rating), wind resistance up to 35 km/h, and operational temperature range of -10°C to +45°C. Reinforced structure can withstand minor impacts.',
          icon: 'M13 10V3L4 14h7v7l9-11h-7z'
        },
        {
          title: 'Secure Communications',
          description: 'Military-grade encrypted communications with frequency-hopping to prevent jamming or interception. Mesh networking capabilities allow drones to relay signals in communication-denied environments.',
          icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
        }
      ]
    },
    applications: {
      title: 'Field Applications',
      description: 'Deploy rapidly in various scenarios where traditional logistics are compromised, delivering critical supplies exactly where they are needed most.',
      items: [
        {
          title: 'Battlefield CASEVAC Support',
          description: 'Delivery of emergency medical supplies to forward medical stations, including blood products, surgical equipment, and medications. Enables treatment to begin before medical evacuation can be completed.',
          image: '/images/drone/n4.avif'
        },
        {
          title: 'Disaster Zone Relief',
          description: 'Rapid deployment of essential supplies to communities cut off by natural disasters such as floods, earthquakes, or landslides where ground transportation is impossible.',
          image: '/images/drone/n4.avif'
        },
        {
          title: 'Pandemic Response',
          description: 'Distribution of vaccines, test kits, and medications to remote or quarantined areas minimizing human contact and accelerating response times.',
          image: '/images/drone/n4.avif'
        },
        {
          title: 'Remote Medical Support',
          description: 'Regular supply deliveries to isolated medical outposts, rural clinics, or field hospitals in regions with limited infrastructure or seasonal accessibility issues.',
          image: '/images/drone/n4.avif'
        }
      ]
    }
  };

  return (
    <section 
      id="logistics-medical-drone-details"
      className="bg-gradient-to-b from-zinc-900 to-zinc-800 py-16 md:py-24 px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div 
          className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-block px-4 py-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-full text-sm font-medium text-white mb-4">
            DETAILED SPECIFICATIONS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Logistics & Medical Support <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-white to-blue-400">Drone System</span>
          </h2>
          <p className="max-w-3xl mx-auto text-zinc-300 text-lg">
            Purpose-engineered for critical supply delivery in combat zones and disaster areas, with field-tested reliability and mission-specific capabilities.
          </p>
        </div>

        {/* 3D Drone Model with Specs */}
        <div 
          className={`mb-16 relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-2xl overflow-hidden border border-zinc-700">
            <div className="md:grid md:grid-cols-5 min-h-[400px]">
              {/* Left side - Drone visualization */}
              <div className="col-span-3 relative min-h-[300px] md:min-h-0">
                {/* Main drone image */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <img 
                    src="/images/drone/n4.avif" 
                    alt="Logistics & Medical Support Drone" 
                    className="max-w-full h-auto object-contain"
                    style={{
                      filter: "drop-shadow(0 0 20px rgba(239, 68, 68, 0.3))",
                    }}
                  />
                </div>
                
                {/* Drone specification callouts */}
                <div className="absolute top-1/4 left-1/4 flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-ping opacity-75"></div>
                  <div className="absolute w-1 h-1 bg-red-400 rounded-full"></div>
                  <div className="ml-3 bg-zinc-800/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-red-400 whitespace-nowrap">Payload Compartment (10 kg)</div>
                </div>
                
                <div className="absolute bottom-1/3 right-1/4 flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                  <div className="absolute w-1 h-1 bg-blue-400 rounded-full"></div>
                  <div className="ml-3 bg-zinc-800/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-blue-400 whitespace-nowrap">Navigation System</div>
                </div>
                
                <div className="absolute top-1/2 right-1/3 flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75"></div>
                  <div className="absolute w-1 h-1 bg-green-400 rounded-full"></div>
                  <div className="ml-3 bg-zinc-800/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs text-green-400 whitespace-nowrap">Battery (45 min)</div>
                </div>
              </div>
              
              {/* Right side - Key specs */}
              <div className="col-span-2 bg-zinc-800 p-6 md:p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-6">Core Specifications</h3>
                <div className="space-y-4">
                  {specifications.slice(0, 4).map((spec, index) => (
                    <div key={index} className="flex items-start">
                      <div className="p-2 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-lg mr-4 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={spec.icon} />
                        </svg>
                      </div>
                      <div>
                        <p className="text-zinc-400 text-sm">{spec.name}</p>
                        <p className="text-white font-bold">{spec.value}</p>
                      </div>
                    </div>
                  ))}
                  
                  <div className="pt-2">
                    <button 
                      onClick={() => setActiveTab('specs')}
                      className="text-sm text-blue-400 hover:text-blue-300 transition-colors flex items-center"
                    >
                      View all specifications
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab navigation */}
        <div 
          className={`mb-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="flex flex-wrap justify-center border-b border-zinc-700">
            {Object.keys(tabContent).map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`px-5 py-4 text-base md:text-lg font-medium transition-all duration-300 border-b-2 mx-2 ${
                  activeTab === tabKey 
                    ? 'text-white border-gradient-to-r from-red-500 to-blue-500' 
                    : 'text-zinc-400 border-transparent hover:text-zinc-300'
                }`}
                style={{
                  borderImageSlice: activeTab === tabKey ? 1 : 0,
                  borderImageSource: activeTab === tabKey ? 'linear-gradient(to right, #ef4444, #3b82f6)' : 'none'
                }}
              >
                {tabContent[tabKey].title}
              </button>
            ))}
          </div>
        </div>

        {/* Specifications Tab Content */}
        <div 
          className={`transition-all duration-500 ${
            activeTab === 'specs' 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 absolute pointer-events-none'
          }`}
        >
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-zinc-300 text-center mb-10">
              {tabContent.specs.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specifications.map((spec, index) => (
                <div 
                  key={index}
                  className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-5 border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-300 cursor-pointer"
                  onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
                >
                  <div className="flex items-start">
                    <div className={`p-3 rounded-lg mr-4 text-white transition-colors duration-300 ${
                      expandedFeature === index ? 'bg-gradient-to-br from-red-600 to-blue-600' : 'bg-zinc-700'
                    }`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={spec.icon} />
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-zinc-300">{spec.name}</p>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-5 w-5 text-zinc-400 transition-transform duration-300 ${
                            expandedFeature === index ? 'transform rotate-180' : ''
                          }`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <p className="text-white text-2xl font-bold">{spec.value}</p>
                      <div className={`overflow-hidden transition-all duration-300 ${
                        expandedFeature === index ? 'max-h-20 mt-3 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-zinc-400 text-sm">{spec.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Technical diagram */}
            <div className="mt-12 bg-zinc-800/30 rounded-xl p-6 border border-zinc-700/30">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Technical Dimensions</h3>
              <div className="relative h-64 md:h-80">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="/images/drone/n4.avif" 
                    alt="Drone Technical Dimensions" 
                    className="max-w-full h-auto object-contain"
                  />
                </div>
                
                {/* Dimension lines and labels */}
                <div className="absolute top-1/4 left-0 right-0 flex items-center justify-center">
                  <div className="bg-zinc-800/80 backdrop-blur-sm rounded px-2 py-1 text-xs text-white">Width: 85 cm</div>
                </div>
                <div className="absolute left-1/4 top-0 bottom-0 flex items-center justify-center">
                  <div className="bg-zinc-800/80 backdrop-blur-sm rounded px-2 py-1 text-xs text-white">Height: 25 cm</div>
                </div>
                <div className="absolute bottom-1/4 left-0 right-0 flex items-center justify-center">
                  <div className="bg-zinc-800/80 backdrop-blur-sm rounded px-2 py-1 text-xs text-white">Length: 92 cm</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Tab Content */}
        <div 
          className={`transition-all duration-500 ${
            activeTab === 'features' 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 absolute pointer-events-none'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-zinc-300 text-center mb-10">
              {tabContent.features.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tabContent.features.items.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg overflow-hidden border border-zinc-700/50 group hover:border-zinc-600 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-br from-red-600/20 to-blue-600/20 rounded-lg text-white mr-4 group-hover:from-red-600/30 group-hover:to-blue-600/30 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-zinc-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Applications Tab Content */}
        <div 
          className={`transition-all duration-500 ${
            activeTab === 'applications' 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 absolute pointer-events-none'
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-zinc-300 text-center mb-10">
              {tabContent.applications.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tabContent.applications.items.map((app, index) => (
                <div 
                  key={index}
                  className="bg-zinc-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-700/30 hover:border-zinc-600/50 transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={app.image} 
                      alt={app.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white">{app.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <p className="text-zinc-300">{app.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block bg-gradient-to-r from-red-600 to-blue-600 p-0.5 rounded-lg">
            <div className="bg-zinc-900 rounded-lg px-8 py-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Ready to Deploy Life-saving Technology?</h3>
              <p className="text-zinc-400 mb-6">Request a demonstration or field assessment of our Logistics & Medical Support Drone system.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-blue-600 rounded-lg font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20 hover:-translate-y-1">
                  Request Demonstration
                </button>
                <button className="px-8 py-3 bg-transparent border border-zinc-600 rounded-lg font-medium text-white transition-all duration-300 hover:bg-zinc-800 hover:-translate-y-1">
                  Download Technical Datasheet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default LogisticsMedicalDroneDetails;