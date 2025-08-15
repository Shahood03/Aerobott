import React from 'react';

const AboutSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-100">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 w-[1443px] h-[696px] bg-gradient-to-br from-black/0 to-black/30" />
      
      {/* Large white circle background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1436px] h-[1436px] bg-white rounded-full" />
      
      {/* Dashed circle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1369px] h-[1369px] opacity-30 rounded-full border-2 border-dashed border-black" />
      
      {/* Rotating photo cards */}
      {/* Left most card - rotated -43deg */}
      <div className="absolute left-[15%] top-1/2 -translate-y-1/2 w-96 h-96 origin-top-left rotate-[-43deg] bg-gradient-to-b from-black/50 to-black/0 rounded-[20px]">
        <img 
          className="w-64 h-80 rounded-[20px] object-cover" 
          src="https://placehold.co/250x330/e0e0e0/666?text=Drone+Operator" 
          alt="Drone operator"
        />
      </div>
      
      {/* Second from left - rotated -23deg */}
      <div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-96 h-96 origin-top-left rotate-[-23deg] bg-gradient-to-b from-black/50 to-black/0 rounded-[20px]">
        <img 
          className="w-64 h-80 rounded-[20px] object-cover" 
          src="https://placehold.co/250x330/e0e0e0/666?text=Group+Photo" 
          alt="Group photo"
        />
      </div>
      
      {/* Center card - no rotation */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <img 
          className="w-64 h-80 rounded-[20px] shadow-xl object-cover" 
          src="https://placehold.co/250x330/e0e0e0/666?text=Drone+Demo" 
          alt="Center photo"
        />
      </div>
      
      {/* Second from right - rotated 23deg */}
      <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-96 h-96 origin-top-left rotate-[23deg] bg-gradient-to-b from-black/50 to-black/0 rounded-[20px]">
        <img 
          className="w-64 h-80 rounded-[20px] object-cover" 
          src="https://placehold.co/250x330/e0e0e0/666?text=Military+Group" 
          alt="Military personnel"
        />
      </div>
      
      {/* Right most card - rotated 43deg */}
      <div className="absolute right-[15%] top-1/2 -translate-y-1/2 w-96 h-96 origin-top-left rotate-[43deg] bg-gradient-to-b from-black/50 to-black/0 rounded-[20px]">
        <img 
          className="w-64 h-80 rounded-[20px] object-cover" 
          src="https://placehold.co/250x330/e0e0e0/666?text=Presentation" 
          alt="Drone presentation"
        />
      </div>
      
      {/* Blue dot indicator */}
      <div className="absolute top-[28%] left-1/2 -translate-x-1/2 flex items-center gap-2">
        <div className="w-2 h-2 bg-gray-300 rounded-full" />
        <div className="w-2 h-2 bg-gray-300 rounded-full" />
        <div className="w-5 h-5 bg-blue-600 rounded-full" />
        <div className="w-2 h-2 bg-gray-300 rounded-full" />
        <div className="w-2 h-2 bg-gray-300 rounded-full" />
      </div>
      
      {/* Content */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center max-w-3xl px-4">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Driving innovation and widespread adoption of drone technology<br />
          through cutting-edge research, strategic partnerships, and<br />
          transformative industry applications.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-full inline-flex items-center gap-2 transition-colors">
          Enquire Now
          <span className="bg-white text-blue-600 w-6 h-6 rounded-full inline-flex items-center justify-center text-sm">?</span>
        </button>
      </div>
    </div>
  );
};

export default AboutSection;