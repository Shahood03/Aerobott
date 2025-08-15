import React from 'react';

// Note: Make sure to include Raleway font in your project
// Add this to your index.html or import in your CSS:
// <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
// And configure Tailwind to use Raleway in your tailwind.config.js:
// fontFamily: { 'raleway': ['Raleway', 'sans-serif'] }

const WhatWeOfferSection = () => {
const services = [
  {
    iconSrc: "/images/element/icon1.png",
    title: "Drone-as-a-Service (DaaS) & Application Solutions",
    description:
      "We deliver tailored drone solutions for agriculture, GIS,  response, and aerial imagery. Aerobott focuses on precision farming, surveying, and other UAV-enabled services. Our approach maximizes efficiency, cuts costs, and ensures accurate data collection, delivering operations aligned with your goals"
  },
  {
    iconSrc: "/images/element/icon1.png",
    title: "Technology Integration & Support",
    description:
      "We integrate AI and simulation into drone training with simulators, video tutorials, and post-training support. Our team seamless technology adoption that is scalable and future-ready. From onboarding to optimization, we help clients stay ahead of industry trends with expert guidance and reliable systems."
  },
  {
    iconSrc: "/images/element/icon1.png",
    title: "Aerial Surveying & Mapping Solutions",
    description:
      "We provide high-precision aerial surveying and mapping for construction, agriculture, and infrastructure. Using advanced drones and sensors, our solutions deliver reliable geospatial data quickly and efficiently. We help clients plan better, reduce risks, and achieve greater operational efficiency with accurate, timely, and actionable insights."
  }
];



  return (
    <section className="bg-[#04070d] text-white px-16 pt-16 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background blur effects */}
     

      <div className="w-full h-full flex flex-col justify-center relative z-10">
        
        {/* Section Header - Updated to match DroneServicesSection */}
        <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-3xl mx-auto mb-11">
          
          {/* Main Heading - Updated styling */}
          <div className="w-full">
            <h2 className="text-center text-[#d5dbe6] text-4xl md:text-5xl font-raleway font-medium leading-tight">
              What We{' '}
              <span className="font-raleway font-normal text-[#d5dbe6]">Offer</span>
            </h2>
          </div>
          
          {/* Optional subtitle - uncomment if needed */}
          {/* <div className="w-full">
            <p className="text-center text-[#d5dbe6]/60 text-base font-raleway leading-relaxed">
              Comprehensive solutions for all your needs
            </p>
          </div> */}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="w-96 h-[500px] rounded-[20px] overflow-hidden relative bg-[#04070d] border border-white/7">
              {/* Background blur effects */}
              <div className="w-96 h-8 left-[-7px] top-0 absolute bg-zinc-300 rounded-bl-[10px] rounded-br-[10px] blur-[197px]" />
              <div className="w-96 h-8 left-[-7px] top-0 absolute bg-zinc-300 rounded-bl-[10px] rounded-br-[10px] blur-[197px]" />
              <div className="w-96 h-[1440px] left-[1440px] top-[519px] absolute origin-top-left rotate-90 bg-indigo-500 blur-[117.50px]" />
              
              {/* Icon Container */}
              <div className="left-[43px] top-[41px] absolute inline-flex flex-col justify-center items-center">
                <img
                  src={service.iconSrc}
                  alt={service.title}
                  className="w-20 h-20 object-contain"
                />
              </div>
              
              {/* Service Title - Updated to match DroneServicesSection card titles */}
              <div className="absolute left-[44px] top-[120px] w-80">
                <h3 className="text-[#d5dbe6] text-xl font-raleway font-medium leading-tight mb-2">
                  {service.title}
                </h3>
              </div>
              
              {/* Service Description - Updated styling */}
         <div className="w-80 left-[44px] top-[180px] absolute">
  <p className="text-[#d5dbe6]/90 text-base font-raleway leading-relaxed text-justify">
    {service.description}
  </p>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;