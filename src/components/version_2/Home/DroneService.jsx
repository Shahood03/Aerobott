import React from 'react';

// Note: Make sure to include Raleway font in your project
// Add this to your index.html or import in your CSS:
// <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
// And configure Tailwind to use Raleway in your tailwind.config.js:
// fontFamily: { 'raleway': ['Raleway', 'sans-serif'] }

const DroneServicesSection = () => {
  return (
    <section 
      id="services" 
      className="relative flex flex-col items-center justify-center w-full min-h-screen bg-black overflow-hidden px-4 sm:px-6 md:px-8 lg:px-16 z-2 pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12"
    >
      {/* Background gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/7 to-transparent z-1"></div>
      
      {/* Background glow effect */}
      <div className="absolute bottom-[-249px] left-1/2 transform -translate-x-1/2 w-[793px] h-[499px] bg-gradient-radial from-white/10 to-transparent opacity-10 rounded-lg pointer-events-none z-1"></div>
      
      <div className="flex flex-col items-center justify-center gap-8 sm:gap-11 w-full min-h-screen relative z-1">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-3xl">
          
          {/* Main Heading */}
          <div className="w-full">
            <h2 className="text-center text-[#d5dbe6] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-raleway font-medium leading-tight">
              Drone{' '}
              <span className="font-raleway font-normal text-[#d5dbe6]">Services</span>
            </h2>
          </div>
          
          {/* Subtitle */}
          <div className="w-full">
            <p className="text-center text-[#d5dbe6]/60 text-sm sm:text-base font-raleway leading-relaxed px-2">
              Comprehensive aerial solutions across diverse industries
            </p>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 w-full flex-1">
          
          {/* Agriculture Service */}
          <div className="h-[280px] sm:h-[320px] lg:h-full relative">
            <ServiceCard
              title="Agriculture"
              description="Precision farming, crop monitoring, and automated spraying solutions for enhanced agricultural productivity"
              imageUrl="/images/agri/a3.avif"
              altText="Drone agriculture and precision farming services"
            />
          </div>

          {/* GIS Service */}
          <div className="h-[280px] sm:h-[320px] lg:h-full relative">
            <ServiceCard
              title="GIS"
              description="Geographic information systems, mapping, and spatial data collection for informed decision making"
              imageUrl="/images/gis/g1.avif"
              altText="GIS mapping and geographic information services"
            />
          </div>

          {/* Defence Service */}
          <div className="h-[280px] sm:h-[320px] lg:h-full relative">
            <ServiceCard
              title="Defence"
              description="Military-grade aerial solutions, reconnaissance, and tactical support for defense operations"
              imageUrl="/images/daas/d8.avif"
              altText="Defense and military drone services"
            />
          </div>

          {/* Security & Surveillance Service */}
          <div className="h-[280px] sm:h-[320px] lg:h-full relative">
            <ServiceCard
              title="Security & Surveillance"
              description="Advanced monitoring, perimeter security, and real-time surveillance for comprehensive protection"
              imageUrl="/images/products/p2.avif"
              altText="Security and surveillance drone services"
            />
          </div>

          {/* Energy and Utility Service */}
          <div className="h-[280px] sm:h-[320px] lg:h-full relative">
            <ServiceCard
              title="Energy & Utility"
              description="Infrastructure inspection, power line monitoring, and utility maintenance for reliable energy systems"
              imageUrl="/images/daas/d6.avif"
              altText="Energy and utility inspection services"
            />
          </div>

          {/* Mining and Metal Service */}
          <div className="h-[280px] sm:h-[320px] lg:h-full relative">
            <ServiceCard
              title="Mining & Metal"
              description="Site surveying, stockpile measurement, and safety monitoring for mining and metal industries"
              imageUrl="/images/daas/d7.avif"
              altText="Mining and metal industry drone services"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ title, description, imageUrl, altText }) => {
  return (
    <div className="group relative w-full h-full bg-black border border-white/7 rounded-2xl overflow-hidden shadow-inner hover:shadow-lg transition-all duration-300 will-change-transform">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <img 
          src={imageUrl} 
          alt={altText}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

      {/* Text Content positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-1.5 p-4 sm:p-6 lg:p-7 text-center bg-gradient-to-t from-black/80 via-black/60 to-transparent ">
        <div className="relative z-10">
          <h3 className="text-white text-lg sm:text-xl font-raleway font-medium leading-tight mb-1.5 sm:mb-2">
            {title}
          </h3>
          <p className="text-white/90 text-sm sm:text-base font-raleway leading-relaxed text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DroneServicesSection;