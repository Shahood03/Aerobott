import React from 'react';

const AerobottStorySection = () => {
  return (
    <div className="w-full relative bg-zinc-950 overflow-hidden">
      {/* Import Raleway font */}
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      {/* Container */}
      <div className="w-full p-4 sm:p-6 md:p-8 lg:p-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center h-full">
          
          {/* Left side - Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Main heading */}
            <h1 className="text-gray-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-center lg:text-left" style={{ fontFamily: 'Raleway, sans-serif' }}>
              OUR STORY
            </h1>
            
            {/* Subheading with gradient text */}
            <h2 className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-xl sm:text-2xl lg:text-3xl font-normal text-center lg:text-left" style={{ fontFamily: 'Raleway, sans-serif' }}>
              From Vision to Innovation
            </h2>
            
            {/* Description paragraphs */}
            <div className="space-y-4 sm:space-y-6">
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed text-justify" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Founded in 2018 by a team of aerospace engineers and technology visionaries, Aerobott emerged from a simple yet powerful idea: to democratize aerial intelligence and make advanced drone technology accessible to everyone. What started as a passion project in a small garage has evolved into a leading force in the drone industry.
              </p>
              
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed text-justify" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Our journey began when our founders recognized the untapped potential of unmanned aerial vehicles beyond traditional applications. They envisioned a future where drones could seamlessly integrate into daily operations across industries, from agriculture and construction to emergency response and environmental monitoring.
              </p>
              
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed text-justify" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Today, Aerobott stands at the forefront of aerial innovation, having developed cutting-edge solutions that have transformed how businesses operate and how communities respond to challenges. Our commitment to excellence and continuous innovation drives us to push the boundaries of what's possible in the sky.
              </p>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="relative order-1 lg:order-2">
            {/* Main image container */}
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Main story image */}
              <img 
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=600&fit=crop"
                alt="Aerobott story - drone technology innovation"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating info card */}
            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 bg-black/80 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/10">
              <div className="text-white text-sm font-medium mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>Since 2021</div>
              <div className="text-zinc-400 text-xs" style={{ fontFamily: 'Raleway, sans-serif' }}>Leading Drone Innovation</div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Overlay gradients for seamless blending */}
      <div className="absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-zinc-950 to-transparent pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default AerobottStorySection;