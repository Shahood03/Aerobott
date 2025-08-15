import React from 'react';

const IndustriesSection = () => {
  const industries = [
    {
      title: "Agriculture",
      description: "An agriculture drone is an unmanned aerial vehicle (UAV) used in farming for crop monitoring, spraying, mapping, and data collection to increase efficiency and precision in agriculture. Agriculture drones are UAVs used in farming to monitor crops, spray pesticides, map fields, and gather data, enhancing productivity, precision, and sustainability in agricultural practices.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "Agriculture drone monitoring",
      imagePosition: "left"
    },
    {
      title: "Construction & Infrastructure",
      description: "Construction drones revolutionize project management by providing aerial surveys, progress monitoring, and safety inspections. These UAVs capture high-resolution imagery for 3D mapping, volumetric measurements, and real-time site analysis, reducing costs and improving accuracy in infrastructure development while ensuring worker safety through remote hazard assessment.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "Construction site with cranes",
      imagePosition: "right"
    },
    {
      title: "Energy & Utilities",
      description: "Energy sector drones transform infrastructure inspection and maintenance for power lines, wind turbines, solar farms, and oil refineries. These specialized UAVs equipped with thermal cameras and sensors detect equipment failures, monitor energy production, and ensure regulatory compliance while significantly reducing inspection time and operational risks.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "Wind turbines and power infrastructure",
      imagePosition: "left"
    },
    {
      title: "Industrial Security",
      description: "Security drones provide advanced surveillance and threat detection for industrial facilities, critical infrastructure, and large perimeters. Equipped with night vision, thermal imaging, and AI-powered analytics, these autonomous systems offer 24/7 monitoring, rapid incident response, and real-time alerts, enhancing security operations while reducing manpower requirements.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "Industrial security monitoring",
      imagePosition: "right"
    },
    {
      title: "GIS & Mapping",
      description: "Mapping drones revolutionize geographic data collection through photogrammetry, LiDAR, and multispectral imaging. These advanced UAVs create high-resolution orthomosaics, digital elevation models, and 3D point clouds for urban planning, environmental monitoring, and cadastral surveying, delivering centimeter-level accuracy for critical decision-making.",
      image: "https://images.unsplash.com/photo-1628158145409-9e222b56cc0b?q=80&w=2143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Aerial mapping and surveying",
      imagePosition: "left"
    },
    {
      title: "Mining & Metals",
      description: "Mining drones optimize extraction operations through precise volumetric calculations, blast planning, and haul road optimization. These rugged UAVs perform stockpile measurements, monitor pit stability, track equipment, and ensure environmental compliance, improving operational efficiency while enhancing worker safety in hazardous mining environments.",
      image: "https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=1000&auto=format&fit=crop",
      imageAlt: "Mining operations aerial view",
      imagePosition: "right"
    }
  ];

  const IndustryContainer = ({ industry, index }) => {
    const isImageLeft = industry.imagePosition === "left";
    
    return (
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index < industries.length - 1 ? 'mb-20' : ''}`}>
        <div className={`relative overflow-hidden rounded-2xl shadow-lg ${isImageLeft ? '' : 'order-1 lg:order-2'}`}>
          <img 
            src={industry.image}
            alt={industry.imageAlt}
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        
        <div className={`space-y-6 ${isImageLeft ? '' : 'order-2 lg:order-1'}`}>
          <h2 className="text-black text-3xl font-semibold font-['Montserrat'] leading-10">{industry.title}</h2>
          <p className="w-full max-w-[620px] text-stone-500 text-xl font-light font-['Montserrat'] leading-loose tracking-tight">
            {industry.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-black text-3xl md:text-5xl font-semibold font-['Montserrat'] leading-10 mb-4">
            Industries Using Aerobott's DaaS
          </h1>
          <p className="text-center text-black text-xl font-light font-['Montserrat'] leading-loose tracking-wide">
            Accelerate outcomes, cut costs, and de-risk your drone operations.
          </p>
        </div>

        {/* Industry Sections */}
        {industries.map((industry, index) => (
          <IndustryContainer key={index} industry={industry} index={index} />
        ))}
      </div>
    </div>
  );
};

export default IndustriesSection;