import { useState, useEffect } from 'react';

const ProductCard = ({ title, subtitle, tagline, backgroundColor = 'bg-gray-300', isRight = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Generate a placeholder image based on title for demonstration
  const generatePlaceholderImageUrl = (title) => {
    // Create different placeholder images for different products
    const imageMap = {
      "Drone Manufacturing": "/images/drone/c1.avif",
      "Drone as Defence": "/images/drone/c2.avif",
      "Drone Training": "/images/drone/c3.avif",
      "Agri Drone": "/images/drone/c4.avif"
    };
    
    return imageMap[title] || "/api/placeholder/800/600?text=";
  };
  
  return (
    <div 
      className={`relative w-full h-full overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        backgroundImage: `url(${generatePlaceholderImageUrl(title)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Gradient overlay based on position */}
      <div 
        className={`absolute inset-0 ${
          isRight 
            ? 'bg-gradient-to-l from-gray-800/80 via-gray-700/70 to-transparent' 
            : 'bg-gradient-to-r from-gray-800/80 via-gray-700/70 to-transparent'
        }`}
      ></div>
      
      {/* Content container */}
      <div className={`relative h-full z-10 p-8 flex flex-col justify-center ${isRight ? 'items-end text-right' : 'items-start text-left'}`}>
        <div className={`text-xl text-white mb-2 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'} transition-all duration-700 delay-300`}>
          {subtitle}
        </div>
        <div className={`text-4xl font-bold text-white mb-3 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'} transition-all duration-700 delay-500`}>
          {title}
        </div>
        <div className={`text-lg text-white mb-6 max-w-md ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'} transition-all duration-700 delay-700`}>
          {tagline}
        </div>
        <div className={`${isRight ? 'space-x-reverse' : ''} flex ${isRight ? 'flex-row-reverse' : 'flex-row'} space-x-4 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-4'} transition-all duration-700 delay-900`}>
          <button className="text-sm font-medium text-white hover:underline transition-all mx-2">Learn More &gt;</button>
          <button className="text-sm font-medium text-white hover:underline transition-all mx-2">Buy Now &gt;</button>
        </div>
      </div>
      
      {/* Optional floating drone image that can be added for additional effect */}
      <div 
        className={`absolute ${isRight ? 'left-10 bottom-10' : 'right-10 bottom-10'} w-1/2 h-1/2 transform ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : `${isRight ? 'translate-x-10' : '-translate-x-10'} opacity-0`
        } transition-all duration-1000 delay-700`}
      >
        {/* If you want to add a floating drone image on top of the background */}
      </div>
    </div>
  );
};

const DroneShowcase = () => {
  return (
    <div className="w-full h-screen overflow-auto flex flex-col bg-white p-2">
      {/* First row - first two containers */}
      <div className="flex flex-col md:flex-row w-full md:h-screen gap-2 mb-2">
        <div className="w-full md:w-1/2 h-96 md:h-full">
          <ProductCard 
            title="Drone Manufacturing" 
            subtitle="AEROBLOC DRONES"
            tagline="Precision-Crafted Drones Redefining Aerial Innovation"
          />
        </div>
        
        <div className="w-full md:w-1/2 h-96 md:h-full">
          <ProductCard 
            title="Drone as Defence" 
            subtitle="ADVANCED AERIAL SURVEILLANCE"
            tagline="Empowering defense operations with real-time surveillance, border patrolling, threat detection, and strategic intelligence."
            isRight={true}
          />
        </div>
      </div>
      
      {/* Second row - second two containers */}
      <div className="flex flex-col md:flex-row w-full md:h-screen gap-2">
        <div className="w-full md:w-1/2 h-96 md:h-full">
          <ProductCard 
            title="Drone Training" 
            subtitle="EXCELLENCE IN EDUCATION"
            tagline="DGCA certified Drone Pilot Training and diverse Drone Courses."
          />
        </div>
        
        <div className="w-full md:w-1/2 h-96 md:h-full">
          <ProductCard 
            title="Agri Drone" 
            subtitle="PROFESSIONAL SOLUTIONS"
            tagline="Data capturing, logistics, survey and mapping, inspection, and beyond."
            isRight={true}
          />
        </div>
      </div>
    </div>
  );
};

export default DroneShowcase;