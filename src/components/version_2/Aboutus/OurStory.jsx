import React from 'react';

const AerobottStorySection = () => {
  return (
    <div className="w-full  relative bg-zinc-950 overflow-hidden">
      {/* Import Raleway font */}
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      {/* Background blur effects */}
      {/* <div className="w-[499px] h-[400px] absolute left-[-200px] top-[200px] bg-purple-600 rounded-full blur-[180px] opacity-30" />
      <div className="w-[599px] h-[500px] absolute right-[-250px] top-[100px] bg-blue-600 rounded-full blur-[200px] opacity-25" />
      <div className="w-[400px] h-[400px] absolute left-[300px] bottom-[-150px] bg-indigo-600 rounded-full blur-[160px] opacity-20" /> */}
      
      {/* Container */}
      <div className=" w-full p-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
          
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Main heading */}
            <h1 className="text-gray-200 text-5xl lg:text-6xl font-light leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
              OUR STORY
            </h1>
            
            {/* Subheading with gradient text */}
            <h2 className="text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-2xl lg:text-3xl font-normal" style={{ fontFamily: 'Raleway, sans-serif' }}>
              From Vision to Innovation
            </h2>
            
            {/* Description paragraphs */}
            <div className="space-y-6">
              <p className="text-zinc-400 text-lg leading-relaxed text-justify" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Founded in 2018 by a team of aerospace engineers and technology visionaries, Aerobott emerged from a simple yet powerful idea: to democratize aerial intelligence and make advanced drone technology accessible to everyone. What started as a passion project in a small garage has evolved into a leading force in the drone industry.
              </p>
              
              <p className="text-zinc-400 text-lg leading-relaxed text-justify" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Our journey began when our founders recognized the untapped potential of unmanned aerial vehicles beyond traditional applications. They envisioned a future where drones could seamlessly integrate into daily operations across industries, from agriculture and construction to emergency response and environmental monitoring.
              </p>
              
              <p className="text-zinc-400 text-lg leading-relaxed text-justify" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Today, Aerobott stands at the forefront of aerial innovation, having developed cutting-edge solutions that have transformed how businesses operate and how communities respond to challenges. Our commitment to excellence and continuous innovation drives us to push the boundaries of what's possible in the sky.
              </p>
            </div>
            

            
    
          </div>
          
          {/* Right side - Image */}
          <div className="relative">
            {/* Main image container */}
            <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Background gradient for image */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div> */}
              
              {/* Main story image */}
              <img 
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=600&fit=crop"
                alt="Aerobott story - drone technology innovation"
                className="w-full h-full object-cover"
              />
              
              {/* Floating accent elements */}
              {/* <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-sm opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-md opacity-40"></div> */}
            </div>
            
            {/* Floating info card */}
            <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <div className="text-white text-sm font-medium mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>Since 2021</div>
              <div className="text-zinc-400 text-xs" style={{ fontFamily: 'Raleway, sans-serif' }}>Leading Drone Innovation</div>
            </div>
            
            {/* Decorative geometric shapes */}
            {/* <div className="absolute top-20 -right-8 w-16 h-16 border-2 border-blue-400/30 rounded-lg rotate-45"></div>
            <div className="absolute bottom-32 -left-4 w-12 h-12 border-2 border-purple-400/30 rounded-full"></div> */}
          </div>
          
        </div>
      </div>
      
      {/* Overlay gradients for seamless blending */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-zinc-950 to-transparent pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default AerobottStorySection;