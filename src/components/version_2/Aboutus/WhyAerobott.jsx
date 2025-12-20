import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Note: Make sure to include Raleway font in your project
// Add this to your index.html or import in your CSS:
// <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
// And configure Tailwind to use Raleway in your tailwind.config.js:
// fontFamily: { 'raleway': ['Raleway', 'sans-serif'] }

export default function WhyAerobott() {
  const [openDropdowns, setOpenDropdowns] = useState({
    innovation: false,
    ecosystem: false,
    mission: false
  });

  const toggleDropdown = (key) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleMouseEnter = (key) => {
    // Only enable hover on larger screens
    if (window.innerWidth >= 1024) {
      setOpenDropdowns(prev => ({
        ...prev,
        [key]: true
      }));
    }
  };

  const handleMouseLeave = (key) => {
    // Only enable hover on larger screens
    if (window.innerWidth >= 1024) {
      setOpenDropdowns(prev => ({
        ...prev,
        [key]: false
      }));
    }
  };

  return (
    <div className="w-full mx-auto bg-black py-8 sm:py-12 lg:py-24 font-raleway">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20 justify-between items-stretch">

          {/* Left section with text and dropdowns - Mobile First */}
          <div className="w-full lg:w-3/5 py-4 sm:py-8 lg:py-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-raleway font-medium text-[#d5dbe6] mb-4 sm:mb-6 leading-tight">
              Why Aerobott?
            </h1>
            
            <p className="text-[#d5dbe6]/70 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-raleway">
              At Aerobott, we're not just building drones. We're building the future of intelligent flight. 
              The pioneers of AI-powered drone innovation, delivering scalable solutions for India and the world.
            </p>
            
            {/* Dropdowns - Mobile Optimized */}
            <div className="space-y-4 sm:space-y-6">
              {/* AI-Powered Innovation Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('innovation')}
                onMouseLeave={() => handleMouseLeave('innovation')}
              >
                <button 
                  onClick={() => toggleDropdown('innovation')}
                  className="w-full flex items-center justify-between p-4 sm:p-6 bg-white/5 border-2 border-white/10 rounded-xl text-left hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 lg:transform lg:hover:-translate-y-1 touch-manipulation min-h-[60px] focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400"
                  aria-expanded={openDropdowns.innovation}
                  aria-controls="innovation-content"
                >
                  <div className="flex items-center flex-1 min-w-0">
                    <div className="mr-3 sm:mr-4 flex-shrink-0">
                      <img 
                        src="/images/element/ai.avif" 
                        alt="AI Innovation Icon"
                        className="w-8 h-8 sm:w-10 sm:h-10"
                      />
                    </div>
                    <span className="font-raleway font-medium text-base sm:text-lg text-[#d5dbe6] truncate">
                      AI-Powered Innovation
                    </span>
                  </div>
                  <ChevronDown 
                    className={`h-5 w-5 sm:h-6 sm:w-6 text-[#d5dbe6]/60 transition-transform duration-300 flex-shrink-0 ml-2 ${
                      openDropdowns.innovation ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <div 
                  id="innovation-content"
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openDropdowns.innovation ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-4 sm:p-6 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-x-2 border-b-2 border-white/10 rounded-b-xl">
                    <p className="text-[#d5dbe6]/80 leading-relaxed mb-3 text-sm sm:text-base font-raleway">
                      Our in-house R&D team develops drones that are <strong className="text-[#d5dbe6]">10X better and 50% more affordable</strong>, 
                      backed by cutting-edge AI software and hardware built from the ground up.
                    </p>
                    <ul className="text-[#d5dbe6]/70 space-y-2 text-sm sm:text-base font-raleway">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>Advanced AI algorithms for autonomous flight</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>Custom-built hardware for superior performance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>Proprietary software solutions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Comprehensive Ecosystem Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('ecosystem')}
                onMouseLeave={() => handleMouseLeave('ecosystem')}
              >
                <button 
                  onClick={() => toggleDropdown('ecosystem')}
                  className="w-full flex items-center justify-between p-4 sm:p-6 bg-white/5 border-2 border-white/10 rounded-xl text-left hover:border-green-400/50 hover:bg-white/10 transition-all duration-300 lg:transform lg:hover:-translate-y-1 touch-manipulation min-h-[60px] focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-400"
                  aria-expanded={openDropdowns.ecosystem}
                  aria-controls="ecosystem-content"
                >
                  <div className="flex items-center flex-1 min-w-0">
                    <div className="mr-3 sm:mr-4 flex-shrink-0">
                      <img 
                        src="/images/element/building.avif" 
                        alt="Ecosystem Icon"
                        className="w-8 h-8 sm:w-10 sm:h-10"
                      />
                    </div>
                    <span className="font-raleway font-medium text-base sm:text-lg text-[#d5dbe6] truncate">
                      Comprehensive Ecosystem
                    </span>
                  </div>
                  <ChevronDown 
                    className={`h-5 w-5 sm:h-6 sm:w-6 text-[#d5dbe6]/60 transition-transform duration-300 flex-shrink-0 ml-2 ${
                      openDropdowns.ecosystem ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <div 
                  id="ecosystem-content"
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openDropdowns.ecosystem ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-4 sm:p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-x-2 border-b-2 border-white/10 rounded-b-xl">
                    <p className="text-[#d5dbe6]/80 leading-relaxed mb-3 text-sm sm:text-base font-raleway">
                      Established in 2021, we've built India's most comprehensive drone ecosystem with 
                      integrated solutions spanning training, manufacturing, and deployment.
                    </p>
                    <ul className="text-[#d5dbe6]/70 space-y-2 text-sm sm:text-base font-raleway">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>DGCA-approved Remote Pilot Training Organization (RPTO)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>10,000 sq.ft. state-of-the-art manufacturing unit</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>4 certified in-house drone models</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Industry Applications Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('mission')}
                onMouseLeave={() => handleMouseLeave('mission')}
              >
                <button 
                  onClick={() => toggleDropdown('mission')}
                  className="w-full flex items-center justify-between p-4 sm:p-6 bg-white/5 border-2 border-white/10 rounded-xl text-left hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300 lg:transform lg:hover:-translate-y-1 touch-manipulation min-h-[60px] focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400"
                  aria-expanded={openDropdowns.mission}
                  aria-controls="mission-content"
                >
                  <div className="flex items-center flex-1 min-w-0">
                    <div className="mr-3 sm:mr-4 flex-shrink-0">
                      <img 
                        src="/images/element/trophy.avif" 
                        alt="Industry Applications Icon"
                        className="w-8 h-8 sm:w-10 sm:h-10"
                      />
                    </div>
                    <span className="font-raleway font-medium text-base sm:text-lg text-[#d5dbe6] truncate">
                      Industry Applications
                    </span>
                  </div>
                  <ChevronDown 
                    className={`h-5 w-5 sm:h-6 sm:w-6 text-[#d5dbe6]/60 transition-transform duration-300 flex-shrink-0 ml-2 ${
                      openDropdowns.mission ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                <div 
                  id="mission-content"
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openDropdowns.mission ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-4 sm:p-6 bg-gradient-to-br from-purple-500/10 to-violet-500/10 border-x-2 border-b-2 border-white/10 rounded-b-xl">
                    <p className="text-[#d5dbe6]/80 leading-relaxed mb-3 text-sm sm:text-base font-raleway">
                      Aerobott transforms industries with high-performance, AI-driven drones that deliver 
                      precision and efficiency across multiple sectors.
                    </p>
                    <ul className="text-[#d5dbe6]/70 space-y-2 text-sm sm:text-base font-raleway">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>Agriculture: Precision farming and crop monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>Surveillance: Advanced security solutions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>Construction: Site mapping and progress tracking</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>Environmental monitoring and disaster management</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right section with images - Mobile Responsive */}
          <div className="w-full lg:w-2/5 relative py-8 sm:py-12 lg:py-20 flex justify-center lg:justify-end order-first lg:order-last">
            {/* Mobile-first image container */}
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-md relative">
              {/* Main image */}
              <div className="relative">
                <img 
                  src="/images/home/w1.avif" 
                  alt="Aerobott team in action" 
                  className="w-full h-auto object-cover rounded-2xl shadow-lg border border-white/10"
                  loading="lazy"
                />
              </div>
              
              {/* Overlapping image - Responsive positioning */}
              <div className="absolute -top-12 sm:-top-16 lg:-top-28 -right-8 sm:-right-12 lg:-right-28 w-2/3 sm:w-3/5 z-10">
                <div className="relative">
                  <div className="rounded-lg sm:rounded-xl overflow-hidden border-2 sm:border-4 border-black shadow-lg sm:shadow-xl bg-black">
                    <img 
                      src="/images/home/w2.avif" 
                      alt="Drone technology showcase" 
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Floating badge - Responsive */}
                  <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg shadow-lg">
                    <span className="text-xs sm:text-sm font-raleway font-medium">Est. 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for enhanced mobile experience and dark theme */}
      <style jsx>{`
        .touch-manipulation {
          touch-action: manipulation;
        }
        
        /* Ensure proper focus styles for accessibility */
        button:focus {
          outline: none;
        }
        
        /* Smooth transitions for all interactive elements */
        button {
          transition: all 0.3s ease-in-out;
        }
        
        /* Disable hover effects on touch devices */
        @media (hover: none) {
          button:hover {
            transform: none;
            border-color: rgba(255, 255, 255, 0.1);
            background-color: rgba(255, 255, 255, 0.05);
          }
        }
        
        /* Enhanced hover effects for desktop only */
        @media (hover: hover) and (min-width: 1024px) {
          button:hover {
            transform: translateY(-2px);
          }
        }
        
        /* Optimize for very small screens */
        @media (max-width: 320px) {
          .px-4 {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          
          .space-y-4 > * + * {
            margin-top: 0.75rem;
          }
        }
        
        /* Better spacing for tablet landscape */
        @media (min-width: 768px) and (max-width: 1023px) and (orientation: landscape) {
          .lg\\:flex-row {
            flex-direction: row;
          }
          
          .lg\\:w-3\\/5 {
            width: 60%;
          }
          
          .lg\\:w-2\\/5 {
            width: 40%;
          }
        }
        
        /* Optimize dropdown content for mobile */
        @media (max-width: 640px) {
          .max-h-[500px] {
            max-height: 400px;
          }
        }
        
        /* Dark theme enhancements */
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}