import React from 'react';

// Note: Make sure to include Raleway font in your project
// Add this to your index.html or import in your CSS:
// <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
// And configure Tailwind to use Raleway in your tailwind.config.js:
// fontFamily: { 'raleway': ['Raleway', 'sans-serif'] }

const AboutUsSection = () => {
  return (
    <section 
      id="about" 
      className="relative flex flex-col items-center justify-center w-full  bg-black overflow-hidden py-12 px-16 z-2"
    >
      {/* Background gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/7 to-transparent z-1"></div>
      
      {/* Background glow effect */}
      <div className="absolute top-[-249px] left-1/2 transform -translate-x-1/2 w-[793px] h-[499px] bg-gradient-radial from-white/10 to-transparent opacity-10 rounded-lg pointer-events-none z-1"></div>
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full h-full relative z-1 max-w-7xl">
        
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start justify-center gap-8 w-full">
          
          {/* Header Section */}
          <div className="flex flex-col items-start justify-start gap-4 w-full">
            
            {/* Main Heading */}
            <div className="w-full">
              <h2 className="text-left text-[#d5dbe6] text-4xl md:text-5xl lg:text-6xl font-raleway font-medium leading-tight">
                About{' '}
                <span className="font-raleway font-normal text-[#d5dbe6]">Us</span>
              </h2>
            </div>
            
            {/* Company Name */}
        
          </div>

          {/* Description Content */}
          <div className="flex flex-col gap-6 w-full">
            <p className="text-justify text-[#d5dbe6]/80 text-lg font-raleway leading-relaxed">
              At Aerobott, we're shaping the future of intelligent flight through{' '}
              <span className="text-white font-medium">AI-powered drone innovation</span>. 
              More than just building drones, we're creating a comprehensive aerial ecosystem 
              that delivers scalable solutions for India and beyond.
            </p>
            
<p className="text-justify text-[#d5dbe6]/80 text-lg font-raleway leading-relaxed">
  Our high-performance drones and cutting-edge technology drive{' '}
  <span className="text-white font-medium">precision, efficiency, and safety</span>{' '}
  across diverse sectors — from agriculture and infrastructure to disaster management and defense.
  By combining advanced AI, real-time data analytics, and autonomous navigation, we empower
  organizations to make faster, smarter decisions from the skies. Together, we are redefining the
  boundaries of what’s possible in aerial innovation.
</p>


          </div>

          {/* Feature Highlights */}
          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
              <span className="text-[#d5dbe6]/70 text-base font-raleway">
                AI-Powered Intelligent Flight Systems
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
              <span className="text-[#d5dbe6]/70 text-base font-raleway">
                Comprehensive Aerial Ecosystem
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
              <span className="text-[#d5dbe6]/70 text-base font-raleway">
                Scalable Solutions for Multiple Industries
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
              <span className="text-[#d5dbe6]/70 text-base font-raleway">
                High-Performance & Cutting-Edge Technology
              </span>
            </div>
          </div>
        </div>

        {/* Right Visual Content */}
        <div className="flex-1 w-full h-[600px] lg:h-[700px] relative">
          <AboutVisualCard
            imageUrl="/images/team/t1.avif"
            altText="Aerobott AI-powered drone innovation and technology"
          />
        </div>
      </div>
    </section>
  );
};

// About Visual Card Component
const AboutVisualCard = ({ imageUrl, altText }) => {
  return (
    <div className="group relative w-full h-full bg-black border border-white/7 rounded-2xl overflow-hidden shadow-inner hover:shadow-lg transition-all duration-300 will-change-transform">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <img 
          src={imageUrl} 
          alt={altText}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Subtle Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30 group-hover:from-black/30 group-hover:to-black/40 transition-all duration-500"></div>

      {/* Corner accent */}
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/20 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/20 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
    </div>
  );
};

export default AboutUsSection;