import { useState } from 'react';

export default function AerobottWhoWeAre() {
  // Colors from Figma
  const colors = {
    black: '#000000',
    primaryBlue: '#173D82',
    secondaryBlue: '#3171C9',
    lightGray: '#D9D9D9',
    white: '#FFFFFF',
  };

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Image with animated hover effect */}
          <div className="relative group w-full lg:w-[550px] flex-shrink-0">
            <img 
              className="w-full h-[612px] rounded-[20px] object-cover transition-transform duration-500 group-hover:scale-[1.02]" 
              src="https://placehold.co/550x612" 
              alt="Aerobott Drone Technology" 
            />
            
            {/* Gradient overlay at bottom of image */}
            <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-black/80 to-transparent rounded-bl-[20px] rounded-br-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Features badges that appear on hover */}
            <div className="absolute bottom-8 left-0 right-0 flex flex-col gap-3 px-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <FeatureBadge text="10,000 sq.ft manufacturing unit" />
              <FeatureBadge text="Established in 2021" />
              <FeatureBadge text="4 certified in-house drone models" />
              <FeatureBadge text="AI-powered drone innovation" />
            </div>
          </div>
          
          {/* Content section */}
          <div className="w-full lg:w-[620px] flex flex-col gap-8">
            <h2 className="text-black text-3xl font-semibold font-['Montserrat'] leading-10">
              Who We Are
            </h2>
            
            <h3 className="text-black text-xl font-medium font-['Montserrat'] leading-loose">
              At Aerobott, we're not just building drones. We're building the future of intelligent flight
            </h3>
            
            <div className="text-black text-lg font-normal font-['Montserrat'] leading-snug space-y-4">
              <p>
                The pioneers of AI-powered drone innovation, delivering scalable solutions for India and the world.
              </p>
              <p>
                Aerobott is an integrated drone technology company transforming the landscape of aerial solutions. Established in 2021, we develop and deploy high-performance, AI-driven drones that empower industries from agriculture and surveillance to construction and environmental monitoring.
              </p>
              <p>
                With a DGCA-approved Remote Pilot Training Organization (RPTO), 10,000 sq.ft. manufacturing unit, and 4 certified in-house drone models, we are building India's most comprehensive drone ecosystem.
              </p>
              <p>
                Our in-house R&D team is on a mission to build drones that are 10X better and 50% more affordable, backed by AI software and hardware built from the ground up.
              </p>
            </div>
            
            {/* Download button with hover effect */}
            <button 
              className="w-72 h-12 bg-[#3171C9] hover:bg-[#173D82] rounded-[699px] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-colors duration-300 outline outline-1 outline-offset-[-1px] outline-[#3171C9] hover:outline-[#173D82]"
            >
              <div className="flex justify-center items-center h-full">
                <span className="text-white text-base font-medium font-['Montserrat'] leading-tight">
                  Download Company Profile
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component for the feature badges
function FeatureBadge({ text }) {
  return (
    <div className="px-3 py-[5px] bg-white/10 rounded-[20px] backdrop-blur-xl border border-white/10 inline-flex items-center gap-2.5 max-w-fit">
      <div className="w-3 h-3 opacity-20 bg-white rounded-full blur-[1px]"></div>
      <div className="w-2 h-2 bg-gradient-to-b from-white to-white/0 rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"></div>
      <span className="text-white font-normal font-['Montserrat'] leading-snug text-sm md:text-base">{text}</span>
    </div>
  );
}