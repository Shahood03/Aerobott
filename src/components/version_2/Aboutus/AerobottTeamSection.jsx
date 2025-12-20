import React from 'react';

const AerobottTeamSection = () => {
  // Team member images - you can replace these with your actual team photos
  const teamImages1 = [
    "/images/gallery/g1.avif",
    "/images/gallery/g2.avif",
    "/images/gallery/g3.avif",
    "/images/gallery/g4.jpg",
    "/images/gallery/g5.avif",
  ];

  const teamImages2 = [
    "/images/training/t7.avif",
    "/images/agri/a3.avif",
    "/images/training/t6.avif",
    "/images/training/t16.avif",
    "/images/gallery/g2.avif",
  ];

  return (
    <div className="w-full min-h-screen px-4 pt-20 sm:p-6 lg:p-12 relative bg-zinc-950 overflow-hidden">
      {/* Import Raleway font */}
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      {/* Background blur effects - responsive */}
      <div className="w-[300px] sm:w-[450px] lg:w-[599px] h-32 sm:h-44 lg:h-56 absolute left-[150px] sm:left-[300px] lg:left-[439px] top-[-150px] sm:top-[-220px] lg:top-[-296px] bg-zinc-800 rounded-full blur-[75px] sm:blur-[120px] lg:blur-[150px]" />
      <div className="w-[300px] sm:w-[450px] lg:w-[599px] h-[300px] sm:w-[450px] lg:h-[622px] absolute left-[200px] sm:left-[500px] lg:left-[755px] top-[400px] sm:top-[500px] lg:top-[582px] bg-fuchsia-600 rounded-full blur-[100px] sm:blur-[150px] lg:blur-[204px]" />
      <div className="w-[300px] sm:w-[450px] lg:w-[599px] h-[300px] sm:h-[450px] lg:h-[622px] absolute left-[50px] sm:left-[80px] lg:left-[133px] top-[350px] sm:top-[450px] lg:top-[539px] bg-indigo-600 rounded-full blur-[100px] sm:blur-[150px] lg:blur-[204px]" />
      
      {/* Overlay gradients - responsive */}
      <div className="w-full h-24 sm:h-32 lg:h-36 absolute left-0 bottom-0 bg-gradient-to-b from-transparent to-zinc-950 z-10" />
      <div className="w-full h-24 sm:h-32 lg:h-36 absolute left-0 top-0 bg-gradient-to-t from-transparent to-zinc-950 z-10" />
      <div className="w-36 sm:w-48 lg:w-72 h-full absolute right-0 top-0 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent z-10" />
      
      {/* Desktop/Tablet Layout - Animated columns */}
      <div className="hidden md:block">
        {/* First column - Moving upward */}
        <div className="absolute right-[200px] lg:right-[350px] top-0 w-48 lg:w-64 h-full overflow-hidden">
          <div className="marquee-up">
            {/* First set */}
            <div className="flex flex-col">
              {teamImages1.map((image, index) => (
                <div key={`set1-${index}`} className="w-48 lg:w-64 h-60 lg:h-80 mb-4 lg:mb-6 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl shadow-lg overflow-hidden flex-shrink-0">
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
                <div key={`set1-dup-${index}`} className="w-48 lg:w-64 h-60 lg:h-80 mb-4 lg:mb-6 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl shadow-lg overflow-hidden flex-shrink-0">
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
        <div className="absolute right-[20px] lg:right-[50px] top-0 w-48 lg:w-64 h-full overflow-hidden">
          <div className="marquee-down">
            {/* First set */}
            <div className="flex flex-col">
              {teamImages2.map((image, index) => (
                <div key={`set2-${index}`} className="w-48 lg:w-64 h-60 lg:h-80 mb-4 lg:mb-6 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl shadow-lg overflow-hidden flex-shrink-0">
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
                <div key={`set2-dup-${index}`} className="w-48 lg:w-64 h-60 lg:h-80 mb-4 lg:mb-6 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl shadow-lg overflow-hidden flex-shrink-0">
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
      </div>
      
      {/* Mobile Layout - Static grid */}
      <div className="block md:hidden absolute right-4 top-16 bottom-16 w-20 sm:w-24">
        <div className="grid grid-cols-1 gap-3 h-full overflow-hidden">
          {teamImages1.slice(0, 3).map((image, index) => (
            <div key={`mobile-${index}`} className="w-20 sm:w-24 h-24 sm:h-28 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg shadow-lg overflow-hidden">
              <img 
                src={image} 
                alt={`Team member ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Main content - responsive positioning */}
      <div className="relative md:absolute md:left-1/3 md:top-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-20 max-w-3xl w-full px-4 sm:px-6 lg:px-8 pt-8 md:pt-0">
        {/* Main heading - responsive typography */}
        <h1 className="text-gray-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight sm:leading-relaxed lg:leading-[58.8px] mb-6 lg:mb-8 text-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Pioneering AI-Powered Drone Innovation
        </h1>
        
        {/* Subheading with gradient text - responsive */}
        <h2 className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-lg sm:text-xl lg:text-2xl font-normal mb-6 lg:mb-8 text-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Where Machine Learning Meets Autonomous Flight
        </h2>
        
        {/* Description - responsive typography */}
        <p className="text-zinc-400 text-sm sm:text-base lg:text-xl font-normal leading-relaxed mb-8 lg:mb-12 text-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
          Rooted in vision, powered by artificial intelligence. At Aerobott, we're revolutionizing Indian aviation through intelligent drone systems that leverage computer vision, deep learning algorithms, and neural networks. Our autonomous UAVs integrate predictive analytics, real-time data processing, and edge computing to deliver smart aerial solutions. From machine learning-enhanced flight optimization to AI-driven object detection and autonomous navigation, we're transforming industries with next-generation intelligent aviation technology.
        </p>
        
        {/* CTA Button - responsive */}
        <div className="relative inline-block w-full text-center">
          <button className="relative px-6 sm:px-8 py-3 sm:py-4 bg-indigo-600 rounded-xl shadow-[0px_0px_28.6px_0px_rgba(58,72,224,0.5)] border border-blue-300/30 text-white text-sm font-medium overflow-hidden group hover:bg-indigo-700 transition-all duration-300" style={{ fontFamily: 'Raleway, sans-serif' }}>
            {/* Button glow effects */}
            <div className="absolute w-24 sm:w-32 h-8 sm:h-12 left-3 sm:left-4 top-6 sm:top-8 bg-blue-300/20 rounded-full blur-md" />
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

        /* Respect reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .marquee-up,
          .marquee-down {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default AerobottTeamSection;