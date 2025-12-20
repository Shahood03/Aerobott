import React from "react";

// Note: Make sure to include Raleway font in your project
// Add this to your index.html or import in your CSS:
// <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
// And configure Tailwind to use Raleway in your tailwind.config.js:
// fontFamily: { 'raleway': ['Raleway', 'sans-serif'] }

const OverviewSection = () => {
  return (
    <section className="w-full bg-black px-16 flex flex-col items-center justify-center">
      <div className="w-full text-center h-full flex flex-col justify-center">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-3xl mb-16 mx-auto">
          
          {/* Main Heading */}
          <div className="w-full">
            <h2 className="text-center text-[#d5dbe6] text-4xl md:text-5xl font-raleway font-medium leading-tight">
              Overview
            </h2>
          </div>
          
          {/* Subtitle */}
          <div className="w-full">
            <p className="text-center text-[#d5dbe6]/60 text-base font-raleway leading-relaxed">
              Comprehensive Drone-as-a-Service solutions for modern businesses
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <div className="w-full h-[500px]">
            <img
              src="/images/drone/b3.avif"
              alt="Drone overview"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
              onError={(e) => {
                console.error('Failed to load image: /images/drone/b3.avif');
                e.target.style.display = 'none';
              }}
            />
          </div>
          
          <div>
            <p className="text-[#d5dbe6]/80 text-xl mb-6 leading-relaxed font-raleway">
              Aerobott's Drone-as-a-Service (DaaS) delivers cutting-edge aerial
              intelligence—without the cost, complexity, or commitment of owning
              drones or building internal teams.
            </p>
            <p className="text-[#d5dbe6]/80 text-xl mb-6 leading-relaxed font-raleway">
              We deliver end-to-end aerial solutions, from flight planning and
              certified drone operations to advanced data processing and
              actionable insights. Whether it's surveying land, inspecting
              infrastructure, monitoring crops, or enhancing site security—we fly,
              capture, analyze, and deliver what you need.
            </p>
            <p className="text-[#d5dbe6]/80 text-xl mb-8 leading-relaxed font-raleway">
              Our services are powered by cutting-edge drones, skilled pilots,
              cloud-based analytics, and full regulatory compliance, ensuring
              reliable results across industries.
            </p>
            
            <a
              href="#contact"
              className="inline-flex items-center bg-blue-600 text-white font-medium px-5 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 text-sm font-raleway"
            >
              Contact us
              <span className="ml-1 text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;