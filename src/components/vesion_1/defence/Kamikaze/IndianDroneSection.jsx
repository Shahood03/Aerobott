import React, { useState, useEffect } from 'react';

const IndianDroneSection = () => {
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
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'specs',
      title: 'Technical Specifications',
      description: 'Lightweight construction with powerful capabilities and real-time surveillance.',
      stats: [
        { label: 'Weight', value: '< 2 kg' },
        { label: 'Endurance', value: '30 mins' },
        { label: 'Max Altitude', value: '400 ft' }
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      id: 'surveillance',
      title: 'Surveillance Capabilities',
      description: 'Real-time HD video feed for precision targeting and intelligence gathering.',
      stats: [
        { label: 'Camera', value: 'HD FPV' },
        { label: 'Resolution', value: '720p' },
        { label: 'Frame Rate', value: '25 fps' }
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="india-drone-section"
      className="bg-gradient-to-b from-black to-blue-900 py-20 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section heading with animation */}
        <div 
          className={`mb-16 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="inline-block px-4 py-1 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full text-sm font-medium text-white mb-4">
            MADE IN INDIA
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Indigenously Developed <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-blue-400">Kamikaze Drones</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            One-time-use attack drones offering a cost-effective solution for precision strikes in border zones, with up to 10km range and carrying capacity for up to 5kg of explosives.
          </p>
        </div>

        {/* Drone illustration with map */}
        <div 
          className={`relative flex justify-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <div className="relative">
            {/* India map outline as background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <img src="/images/drone/n1.avif" alt="India Map Outline" className="max-w-full h-auto" />
            </div>
            
            {/* Drone illustration */}
            <div className="relative z-10">
              <img src="/images/drone/n1.avif" alt="Kamikaze Drone India" className="max-w-full h-auto" />
              
              {/* Animated flight path */}
              <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 600 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M100,175 C200,100 400,250 500,175" 
                  stroke="url(#gradient)" 
                  strokeWidth="2" 
                  strokeDasharray="6,6" 
                  className="animate-dash"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F97316" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Target points */}
              <div className="absolute top-1/4 left-1/4 w-8 h-8">
                <div className="absolute inset-0 bg-orange-500 rounded-full animate-ping opacity-30"></div>
                <div className="absolute inset-2 bg-orange-500 rounded-full"></div>
              </div>
              <div className="absolute bottom-1/3 right-1/4 w-8 h-8">
                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-30"></div>
                <div className="absolute inset-2 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature tabs */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center mb-10 gap-2">
            {features.map(feature => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`px-5 py-3 text-sm md:text-base font-medium rounded-lg transition-all duration-300 ${
                  activeTab === feature.id 
                    ? 'bg-gradient-to-r from-orange-600 to-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {feature.title}
              </button>
            ))}
          </div>
          
          {/* Tab content */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-gray-800">
            {features.map(feature => (
              <div
                key={feature.id}
                className={`transition-all duration-500 ${
                  activeTab === feature.id 
                    ? 'opacity-100 block' 
                    : 'opacity-0 hidden'
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="mr-4 p-3 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-lg text-blue-400">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6 text-lg">{feature.description}</p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4">
                      {feature.stats.map((stat, index) => (
                        <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                          <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                          <p className="text-2xl font-bold text-white">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Feature illustration */}
                  <div className="bg-gradient-to-br from-gray-800/30 to-blue-900/30 rounded-xl p-6 border border-gray-700">
                    <img 
                      src="/images/drone/n1.avif" 
                      alt={feature.title} 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block bg-gradient-to-r from-blue-900 to-blue-800 p-0.5 rounded-lg">
            <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg px-8 py-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Experience India's Defense Innovation</h3>
              <p className="text-gray-400 mb-6">Discover how our indigenous kamikaze drones are strengthening national security.</p>
              <button className="bg-gradient-to-r from-orange-500 to-blue-600 px-8 py-3 rounded-lg font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1">
                Request Technical Briefing
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
      
      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 48;
          }
        }
        .animate-dash {
          animation: dash 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default IndianDroneSection;