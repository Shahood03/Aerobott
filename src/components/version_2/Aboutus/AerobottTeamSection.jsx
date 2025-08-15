import React from 'react';

const AerobottTeamSection = () => {
  // Team member images - you can replace these with your actual team photos
  const teamImages1 = [
    "/images/gallery/g1.png",
    "/images/gallery/g2.jpg",
    "/images/gallery/g3.jpg",
    "/images/gallery/g4.jpg",
    "/images/gallery/g5.jpg",
  ];

  const teamImages2 = [
    "/images/training/t7.jpeg",
    "/images/agri/a3.png",
    "/images/training/t6.jpg",
    "/images/training/t16.jpeg",
    "/images/gallery/g2.jpg",
  ];

  return (
    <div className="w-full min-h-screen relative bg-zinc-950 overflow-hidden">
      {/* Import Raleway font */}
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      {/* Background blur effects */}
      <div className="w-[599px] h-56 absolute left-[439px] top-[-296px] bg-zinc-800 rounded-full blur-[150px]" />
      <div className="w-[599px] h-[622px] absolute left-[755px] top-[582px] bg-fuchsia-600 rounded-full blur-[204px]" />
      <div className="w-[599px] h-[622px] absolute left-[133px] top-[539px] bg-indigo-600 rounded-full blur-[204px]" />
      
      {/* Overlay gradients */}
      <div className="w-full h-36 absolute left-0 bottom-0 bg-gradient-to-b from-transparent to-zinc-950 z-10" />
      <div className="w-full h-36 absolute left-0 top-0 bg-gradient-to-t from-transparent to-zinc-950 z-10" />
      <div className="w-72 h-full absolute right-0 top-0 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent z-10" />
      
      {/* First column - Moving upward */}
      <div className="absolute right-[350px] top-0 w-64 h-full overflow-hidden">
        <div className="marquee-up">
          {/* First set */}
          <div className="flex flex-col">
            {teamImages1.map((image, index) => (
              <div key={`set1-${index}`} className="w-64 h-80 mb-6 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl shadow-lg overflow-hidden flex-shrink-0">
                <img 
                  src={image} 
                  alt={`Team member ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex flex-col">
            {teamImages1.map((image, index) => (
              <div key={`set1-dup-${index}`} className="w-64 h-80 mb-6 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl shadow-lg overflow-hidden flex-shrink-0">
                <img 
                  src={image} 
                  alt={`Team member ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Second column - Moving downward */}
      <div className="absolute right-[50px] top-0 w-64 h-full overflow-hidden">
        <div className="marquee-down">
          {/* First set */}
          <div className="flex flex-col">
            {teamImages2.map((image, index) => (
              <div key={`set2-${index}`} className="w-64 h-80 mb-6 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl shadow-lg overflow-hidden flex-shrink-0">
                <img 
                  src={image} 
                  alt={`Team member ${index + 6}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex flex-col">
            {teamImages2.map((image, index) => (
              <div key={`set2-dup-${index}`} className="w-64 h-80 mb-6 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl shadow-lg overflow-hidden flex-shrink-0">
                <img 
                  src={image} 
                  alt={`Team member ${index + 6}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="absolute left-1/3 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 max-w-3xl w-full px-8">
        {/* Main heading */}
        <h1 className="text-gray-200 text-5xl font-light leading-[58.8px] mb-8 text-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Pioneering AI-Powered Drone Innovation
        </h1>
        
        {/* Subheading with gradient text */}
        <h2 className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-normal mb-8 text-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Where Machine Learning Meets Autonomous Flight
        </h2>
        
        {/* Description */}
        <p className="text-zinc-400 text-xl font-normal leading-relaxed mb-12 text-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Rooted in vision, powered by artificial intelligence. At Aerobott, we're revolutionizing Indian aviation through intelligent drone systems that leverage computer vision, deep learning algorithms, and neural networks. Our autonomous UAVs integrate predictive analytics, real-time data processing, and edge computing to deliver smart aerial solutions. From machine learning-enhanced flight optimization to AI-driven object detection and autonomous navigation, we're transforming industries with next-generation intelligent aviation technology.
        </p>
        
        {/* CTA Button */}
        <div className="relative inline-block w-full text-center">
          <button className="relative px-8 py-4 bg-indigo-600 rounded-xl shadow-[0px_0px_28.6px_0px_rgba(58,72,224,0.5)] border border-blue-300/30 text-white text-sm font-medium overflow-hidden group hover:bg-indigo-700 transition-all duration-300" style={{ fontFamily: 'Raleway, sans-serif' }}>
            {/* Button glow effects */}
            <div className="absolute w-32 h-12 left-4 top-8 bg-blue-300/20 rounded-full blur-md" />
            <div className="absolute inset-0 bg-gradient-radial from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <span className="relative z-10">Explore AI Solutions</span>
          </button>
        </div>
      </div>
      
      {/* Custom styles for the marquee animation */}
      <style jsx>{`
        @keyframes marquee-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes marquee-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .marquee-up {
          animation: marquee-up 25s linear infinite;
          display: flex;
          flex-direction: column;
        }

        .marquee-down {
          animation: marquee-down 30s linear infinite;
          display: flex;
          flex-direction: column;
        }

        /* Pause animation on hover for better UX */
        .marquee-up:hover,
        .marquee-down:hover {
          animation-play-state: paused;
        }

        /* Ensure smooth hardware acceleration */
        .marquee-up,
        .marquee-down {
          will-change: transform;
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default AerobottTeamSection;