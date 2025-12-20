import React, { useState } from "react";

const FeatureCard = ({ title, description, isWide = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`p-4 bg-white rounded-lg shadow-[0px_10px_50px_0px_rgba(0,0,0,0.10)] 
                inline-flex flex-col justify-start items-start gap-4 
                ${isWide ? 'w-full' : 'w-full'} 
                h-auto min-h-[160px] md:min-h-[208px]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="self-stretch inline-flex justify-between items-start">
        <div className="justify-start text-black text-lg sm:text-xl font-medium font-['Montserrat'] leading-loose">
          {title}
        </div>
        <div className="w-7 h-7 relative flex-shrink-0">
          <div className={`w-7 h-7 px-1.5 py-[5px] left-0 top-0 absolute 
                        ${isHovered ? 'bg-blue-700' : 'bg-blue-600'} 
                        rounded-3xl shadow-[0px_10px_50px_0px_rgba(0,0,0,0.10)] 
                        inline-flex justify-between items-center transition-colors duration-200`}>
            <div className="w-3 h-0 origin-top-left rotate-[-50.19deg] border-[1.50px] border-white" />
          </div>
        </div>
      </div>
      <div className="self-stretch justify-start text-black text-sm sm:text-base font-light font-['Montserrat'] leading-relaxed sm:leading-loose">
        {description}
      </div>
    </div>
  );
};

const WhyChooseSection = () => {
  return (
    <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <h2 className="text-black text-2xl sm:text-3xl font-semibold font-['Montserrat'] leading-tight sm:leading-10 mb-3 sm:mb-4">
            Why Choose Aerobott DaaS?
          </h2>
          <p className="text-center text-black text-base sm:text-lg md:text-xl font-light font-['Montserrat'] leading-relaxed sm:leading-loose tracking-wide max-w-3xl mx-auto">
            Accelerate outcomes, cut costs, and de-risk your drone operations.
          </p>
        </div>
        
        {/* Features Grid - Flex column on mobile, row on larger screens */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10">
          {/* Left Column - Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img 
              src="/images/banner/b1.avif" 
              alt="Drone services illustration" 
              className="w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] h-auto aspect-[550/662] rounded-[20px] object-cover"
            />
          </div>
          
          {/* Right Column - Feature Cards */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6">
            {/* 2x2 Grid for smaller cards that stacks on mobile/tablet */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <FeatureCard 
                title="Low Investment, High Impact" 
                description="Avoid upfront expenses for drones, licenses, pilots, and analytics. Pay only for usage."
              />
              
              <FeatureCard 
                title="Scalable, On-Demand Fleet" 
                description="Add drone capabilities as your projects grow whether it's 5 farms or 50 sites."
              />
              
              <FeatureCard 
                title="Expert-Led Execution" 
                description="Get end-to-end mission management by DGCA-certified drone pilots and industry experts."
              />
              
              <FeatureCard 
                title="Minimized Risk" 
                description="No legal, training, or maintenance headaches. We take care of airspace permissions, safety, and compliance."
              />
            </div>
            
            {/* Wide Feature Card that takes full width */}
            <div className="pt-2 sm:pt-4">
              <FeatureCard 
                title="Tailored for Your Industry" 
                description="We customize payloads, flight paths, and analytics dashboards based on your sector — from precision farming to pipeline inspection and urban surveillance."
                isWide={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;