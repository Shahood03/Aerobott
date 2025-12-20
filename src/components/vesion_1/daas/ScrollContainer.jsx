import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";

const industryData = [
  {
    title: "Agriculture",
    description: "An agriculture drone is an unmanned aerial vehicle (UAV) used in farming for crop monitoring, spraying, mapping, and data collection to increase efficiency and precision in agriculture. Agriculture drones are UAVs used in farming to monitor crops, spray pesticides, map fields, and gather data, enhancing productivity, precision, and sustainability in agricultural practices.",
    image: "/images/agri/a5.avif"
  },
  {
    title: "Construction",
    description: "Construction drones provide aerial monitoring of building sites, enabling progress tracking, safety inspection, and topographic mapping. They create 3D models, identify issues early, and improve communication between stakeholders, saving time and reducing costs throughout project lifecycle.",
    image: "/images/daas/d2.avif"
  },
  {
    title: "Infrastructure",
    description: "Infrastructure drones inspect bridges, roads, towers, and utilities with high-resolution imaging. They detect structural issues, monitor maintenance needs, and provide data for asset management systems, preventing failures and optimizing infrastructure lifespan.",
    image: "https://images.unsplash.com/photo-1544644587-32de1f065ff2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Security",
    description: "Security drones offer surveillance capabilities for property monitoring, crowd management, and perimeter security. Equipped with thermal cameras and AI, they detect intrusions, track movements, and provide real-time situational awareness for security personnel.",
    image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Environmental",
    description: "Environmental drones monitor wildlife, track pollution, assess forests, and map ecosystems. They collect data on climate change impacts, support conservation efforts, and help scientists understand environmental changes with minimal human interference.",
    image: "https://images.unsplash.com/photo-1610648926972-438684036980?q=80&w=2069&auto=format&fit=crop"
  }
];

const ScrollContainer = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);
  const timeoutRef = useRef(null);
  
  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Auto-scroll functionality (paused when user is interacting)
  useEffect(() => {
    if (isHovering || isScrolling) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % industryData.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isHovering, isScrolling]);
  
  // Sync the scroll container with active index changes
  useEffect(() => {
    if (scrollContainerRef.current && !isScrolling) {
      if (isMobile) {
        // For mobile, scroll horizontally
        const itemWidth = scrollContainerRef.current.clientWidth;
        scrollContainerRef.current.scrollTo({
          left: activeIndex * itemWidth,
          behavior: 'smooth'
        });
      } else {
        // For desktop, scroll vertically
        const itemHeight = 384;
        scrollContainerRef.current.scrollTo({
          top: activeIndex * itemHeight,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex, isMobile]);
  
  const handleScroll = (e) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    setIsScrolling(true);
    const container = e.currentTarget;
    
    let newIndex;
    if (isMobile) {
      // For mobile horizontal scroll
      const scrollLeft = container.scrollLeft;
      const itemWidth = container.clientWidth;
      newIndex = Math.round(scrollLeft / itemWidth);
    } else {
      // For desktop vertical scroll
      const scrollTop = container.scrollTop;
      const itemHeight = 384;
      newIndex = Math.round(scrollTop / itemHeight);
    }
    
    if (newIndex !== activeIndex && newIndex >= 0 && newIndex < industryData.length) {
      setActiveIndex(newIndex);
    }
    
    // Reset scrolling state after scrolling stops
    timeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 200);
  };
  
  const handleNavClick = (index) => {
    setActiveIndex(index);
    // Sync scroll position
    if (scrollContainerRef.current) {
      if (isMobile) {
        const itemWidth = scrollContainerRef.current.clientWidth;
        scrollContainerRef.current.scrollTo({
          left: index * itemWidth,
          behavior: 'smooth'
        });
      } else {
        const itemHeight = 384;
        scrollContainerRef.current.scrollTo({
          top: index * itemHeight,
          behavior: 'smooth'
        });
      }
    }
  };
  
  const handlePrevious = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : industryData.length - 1;
    handleNavClick(newIndex);
  };
  
  const handleNext = () => {
    const newIndex = activeIndex < industryData.length - 1 ? activeIndex + 1 : 0;
    handleNavClick(newIndex);
  };
  
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div 
      className={`w-full ${isMobile ? 'h-screen' : 'h-[671px]'} relative bg-gradient-to-br from-zinc-50 to-zinc-200 overflow-hidden ${isMobile ? 'rounded-none' : 'rounded-[30px]'} shadow-xl`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background accent elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40 pointer-events-none">
        <div className={`absolute ${isMobile ? '-top-10 -left-10 w-32 h-32' : '-top-20 -left-20 w-64 h-64'} rounded-full bg-blue-200 blur-3xl`}></div>
        <div className={`absolute ${isMobile ? 'bottom-5 right-5 w-40 h-40' : 'bottom-10 right-10 w-80 h-80'} rounded-full bg-teal-200 blur-3xl`}></div>
      </div>
      
      {/* Mobile Layout */}
      {isMobile && (
        <>
          {/* Mobile Image Section - Top */}
          <div className="w-full h-1/2 relative overflow-hidden">
            {industryData.map((industry, index) => (
              <div 
                key={index}
                className={`w-full h-full absolute transition-all duration-700 ${
                  activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                }`}
              >
                <img 
                  className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out"
                  style={{ 
                    transform: `scale(${activeIndex === index ? '1.03' : '1'})`,
                  }}
                  src={industry.image} 
                  alt={industry.title} 
                />
                
                {/* Full edge-to-edge overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Title overlay - spanning full height */}
                <div className="absolute inset-0 flex items-end">
                  <div className="w-full px-4 pb-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-8">
                    <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">{industry.title}</h3>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Mobile Navigation Arrows */}
            <button 
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-blue-600 z-10"
              aria-label="Previous industry"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-blue-600 z-10"
              aria-label="Next industry"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Mobile Text Section - Bottom with horizontal scroll */}
          <div 
            ref={scrollContainerRef}
            className="h-1/2 w-full overflow-x-auto overflow-y-hidden scrollbar-hide"
            onScroll={handleScroll}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollSnapType: 'x mandatory'
            }}
          >
            <div className="flex h-full" style={{ width: `${industryData.length * 100}%` }}>
              {industryData.map((industry, index) => (
                <div 
                  key={index} 
                  className="w-full h-full flex flex-col justify-start p-6 overflow-y-auto"
                  style={{ 
                    width: `${100 / industryData.length}%`,
                    scrollSnapAlign: 'start'
                  }}
                >
                  <div className="flex flex-col gap-4">
                    <div className="text-black text-2xl sm:text-3xl font-bold font-['Montserrat'] leading-tight">
                      <span className="relative">
                        {industry.title}
                        <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-600 rounded-full"></span>
                      </span>
                    </div>
                    <div className="text-stone-600 text-base sm:text-lg font-light font-['Montserrat'] leading-relaxed tracking-tight text-justify">
                      {industry.description}
                    </div>
                    
                    <button className="mt-4 px-5 py-2.5 bg-blue-600 text-white rounded-full font-medium tracking-wide hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-blue-300/50 flex items-center justify-center group w-fit">
                      Learn more
                      <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {industryData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-blue-600 scale-125 shadow-lg shadow-blue-400/50' 
                    : 'bg-gray-400 hover:bg-blue-400'
                }`}
                aria-label={`View ${industryData[index].title}`}
              />
            ))}
          </div>
        </>
      )}
      
      {/* Desktop Layout */}
      {!isMobile && (
        <div className="absolute inset-16 flex items-center m-20 justify-between gap-24">
          {/* Desktop Text Section - Left Side */}
          <div 
            ref={scrollContainerRef}
            className="flex-1 h-full max-h-[510px] overflow-y-auto scrollbar-hide"
            onScroll={handleScroll}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <div className="flex flex-col justify-start items-start gap-32 p-24 pb-24">
              {industryData.map((industry, index) => (
                <div 
                  key={index} 
                  className={`w-full flex flex-col justify-start items-start gap-5 transition-all duration-500 ${
                    activeIndex === index 
                      ? 'opacity-100 translate-y-0' 
                      : index < activeIndex 
                        ? 'opacity-30 -translate-y-4' 
                        : 'opacity-30 translate-y-4'
                  }`}
                >
                  <div className="self-stretch text-black text-4xl font-bold font-['Montserrat'] leading-tight">
                    <span className="relative">
                      {industry.title}
                      {activeIndex === index && (
                        <span className="absolute -bottom-2 left-0 w-16 h-1 bg-blue-600 rounded-full"></span>
                      )}
                    </span>
                  </div>
                  <div className="self-stretch text-stone-600 text-xl font-light font-['Montserrat'] leading-loose tracking-tight mt-4 text-justify">
                    {industry.description}
                  </div>
                  
                  {/* Learn more button that appears only for active slide */}
                  {activeIndex === index && (
                    <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full font-medium tracking-wide hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-blue-300/50 flex items-center group">
                      Learn more
                      <svg className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Image Section - Right Side */}
          <div className="aspect-square w-full max-w-[512px] relative overflow-hidden rounded-[20px] shadow-2xl">
            {industryData.map((industry, index) => (
              <div 
                key={index}
                className={`w-full h-full absolute transition-all duration-700 ${
                  activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                }`}
              >
                <img 
                  className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out hover:scale-110"
                  style={{ 
                    transform: `scale(${activeIndex === index ? '1.03' : '1'})`,
                  }}
                  src={industry.image} 
                  alt={industry.title} 
                />
                
                {/* Full edge-to-edge overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Title overlay - spanning full height */}
                <div className="absolute inset-0 flex items-end">
                  <div className="w-full px-6 pb-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-12">
                    <h3 className="text-white text-4xl font-bold tracking-tight">{industry.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Navigation Dots */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-10">
            {industryData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-blue-600 scale-125 shadow-lg shadow-blue-400/50' 
                    : 'bg-gray-400 hover:bg-blue-400'
                }`}
                aria-label={`View ${industryData[index].title}`}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Hover/Touch instructions */}
      <div className="absolute bottom-8 left-1/2 mt-12  transform -translate-x-1/2 flex flex-col items-center">
        <div className="text-sm text-gray-600 mb-2 font-medium">Scroll to explore</div>
        <div className="w-5 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-500 rounded-full animate-bounce mt-1"></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollContainer;