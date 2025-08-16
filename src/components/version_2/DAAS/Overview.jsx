import React from "react";

// Note: Make sure to include Raleway font in your project
// Add this to your index.html or import in your CSS:
// <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
// And configure Tailwind to use Raleway in your tailwind.config.js:
// fontFamily: { 'raleway': ['Raleway', 'sans-serif'] }

const OverviewSection = () => {
  return (
    <section className="w-full bg-black px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 flex flex-col items-center justify-center">
      <div className="w-full text-center h-full flex flex-col justify-center max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-3xl mb-8 sm:mb-12 md:mb-16 mx-auto">
          
          {/* Main Heading */}
          <div className="w-full">
            <h2 className="text-center text-[#d5dbe6] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-raleway font-medium leading-tight">
              Overview
            </h2>
          </div>
          
          {/* Subtitle */}
          <div className="w-full px-4 sm:px-0">
            <p className="text-center text-[#d5dbe6]/60 text-sm sm:text-base md:text-lg font-raleway leading-relaxed">
              Comprehensive Drone-as-a-Service solutions for modern businesses
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center w-full">
          <div className="w-full order-2 lg:order-1">
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
              <img
                src="/images/drone/b3.jpg"
                alt="Drone overview"
                className="w-full h-full object-cover rounded-xl sm:rounded-2xl shadow-lg"
                onError={(e) => {
                  console.error('Failed to load image: /images/drone/b3.jpg');
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 px-2 sm:px-4 lg:px-0">
            <p className="text-[#d5dbe6]/80 text-base sm:text-lg md:text-xl mb-4 sm:mb-5 md:mb-6 leading-relaxed font-raleway">
              Aerobott's Drone-as-a-Service (DaaS) delivers cutting-edge aerial
              intelligence—without the cost, complexity, or commitment of owning
              drones or building internal teams.
            </p>
            <p className="text-[#d5dbe6]/80 text-base sm:text-lg md:text-xl mb-4 sm:mb-5 md:mb-6 leading-relaxed font-raleway">
              We deliver end-to-end aerial solutions, from flight planning and
              certified drone operations to advanced data processing and
              actionable insights. Whether it's surveying land, inspecting
              infrastructure, monitoring crops, or enhancing site security—we fly,
              capture, analyze, and deliver what you need.
            </p>
            <p className="text-[#d5dbe6]/80 text-base sm:text-lg md:text-xl mb-6 sm:mb-7 md:mb-8 leading-relaxed font-raleway">
              Our services are powered by cutting-edge drones, skilled pilots,
              cloud-based analytics, and full regulatory compliance, ensuring
              reliable results across industries.
            </p>
            
            <div className="flex justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center bg-blue-600 text-white font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 text-sm sm:text-base font-raleway"
              >
                Contact us
                <span className="ml-1 text-base sm:text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;