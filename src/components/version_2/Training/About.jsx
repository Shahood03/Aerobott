import React, { useState } from 'react';
import { ChevronDown, Download } from 'lucide-react';

// Note: Make sure to include Raleway font in your project
// Add this to your index.html or import in your CSS:
// <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
// And configure Tailwind to use Raleway in your tailwind.config.js:
// fontFamily: { 'raleway': ['Raleway', 'sans-serif'] }

export default function About() {
  const [openDropdowns, setOpenDropdowns] = useState({
    innovation: false,
    ecosystem: false,
    mission: false
  });

  const toggleDropdown = (key) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleMouseEnter = (key) => {
    // Only enable hover on larger screens
    if (window.innerWidth >= 1024) {
      setOpenDropdowns(prev => ({
        ...prev,
        [key]: true
      }));
    }
  };

  const handleMouseLeave = (key) => {
    // Only enable hover on larger screens
    if (window.innerWidth >= 1024) {
      setOpenDropdowns(prev => ({
        ...prev,
        [key]: false
      }));
    }
  };

  return (
    <section 
      id="about" 
      className="relative flex flex-col items-center justify-center w-full bg-black overflow-hidden px-4 sm:px-6 md:px-8 lg:px-16 z-2 py-16"
    >
      {/* Background gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/7 to-transparent z-1"></div>
      
      {/* Background glow effect */}
      <div className="absolute bottom-[-249px] left-1/2 transform -translate-x-1/2 w-[793px] h-[499px] bg-gradient-radial from-white/10 to-transparent opacity-10 rounded-lg pointer-events-none z-1"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-1">
        <div className="flex flex-col lg:flex-row gap-12 sm:gap-12 lg:gap-20 justify-between items-stretch min-h-full">

          {/* Left section */}
<div className="w-full lg:w-[620px] flex flex-col gap-8">
  <h2 className="text-[#d5dbe6] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-raleway font-medium leading-tight">
    DGCA Drone Pilot Certification Training?
  </h2>
  
  <h3 className="text-[#d5dbe6] text-lg sm:text-xl font-raleway font-normal leading-relaxed">
    At Aerobott, we're not just building drones. We're building the future of intelligent flight
  </h3>
  
  <div className="text-[#d5dbe6]/80 text-sm sm:text-base font-raleway leading-relaxed space-y-4">
<p>
  Join{" "}
  <a href="#certification" className="text-blue-400 hover:underline">
    <strong>AeroBott’s DGCA-certified Drone Pilot Training Course</strong>
  </a>{" "}
  and earn your Remote Pilot Certificate (RPC) in just 5 days.
</p>

    <p>
      This government-approved program is designed for students, job seekers, farmers, professionals, and anyone aspiring to build a career in the drone industry. 
    </p>
    <p>
      The course combines theoretical knowledge with hands-on flying sessions, ensuring that you learn how to operate drones legally and confidently. 
    </p>
    <p>
      With training available across major cities in India, participants also benefit from 100% job support upon completion, opening opportunities in agriculture, surveying, cinematography, mapping, inspections, and various other industries. 
    </p>
  </div>
  
  {/* Download button with hover effect */}
  <button 
    className="w-72 h-12 bg-[#3171C9] hover:bg-[#173D82] rounded-[699px] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)] transition-colors duration-300 outline outline-1 outline-offset-[-1px] outline-[#3171C9] hover:outline-[#173D82]"
  >
    <div className="flex justify-center items-center gap-2 h-full">
      <Download className="w-4 h-4 text-white" />
      <span className="text-white text-base font-raleway font-medium leading-tight">
        Download Training Brochure
      </span>
    </div>
  </button>
</div>


          
          {/* Right section with images - Mobile Responsive - FIXED */}
          <div className="w-full lg:w-2/5 relative flex justify-center lg:justify-end order-first lg:order-last">
            {/* Mobile-first image container with proper padding to prevent cutoff */}
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-md relative pt-16 sm:pt-20 lg:pt-28 pr-12 sm:pr-16 lg:pr-32">
              {/* Main image */}
              <div className="relative">
                <img 
                  src="/images/home/w1.avif" 
                  alt="Aerobott team in action" 
                  className="w-full h-auto object-cover rounded-2xl shadow-lg border border-white/10"
                  loading="lazy"
                />
              </div>
              
              {/* Overlapping image - Fixed positioning to prevent cutoff */}
              <div className="absolute top-0 right-0 w-2/3 sm:w-3/5 z-10">
                <div className="relative">
                  <div className="rounded-lg sm:rounded-xl overflow-hidden border-2 sm:border-4 border-black shadow-lg sm:shadow-xl bg-black">
                    <img 
                      src="/images/home/w2.avif" 
                      alt="Drone technology showcase" 
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Floating badge - Responsive */}
                  <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg shadow-lg">
                    <span className="text-xs sm:text-sm font-raleway font-medium">Est. 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for enhanced mobile experience and dark theme */}
      <style jsx>{`
        .touch-manipulation {
          touch-action: manipulation;
        }
        
        /* Ensure proper focus styles for accessibility */
        button:focus {
          outline: none;
        }
        
        /* Smooth transitions for all interactive elements */
        button {
          transition: all 0.3s ease-in-out;
        }
        
        /* Disable hover effects on touch devices */
        @media (hover: none) {
          button:hover {
            transform: none;
            border-color: rgba(255, 255, 255, 0.1);
            background-color: rgba(255, 255, 255, 0.05);
          }
        }
        
        /* Enhanced hover effects for desktop only */
        @media (hover: hover) and (min-width: 1024px) {
          button:hover {
            transform: translateY(-2px);
          }
        }
        
        /* Optimize for very small screens */
        @media (max-width: 320px) {
          .px-4 {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          
          .space-y-4 > * + * {
            margin-top: 0.75rem;
          }
        }
        
        /* Better spacing for tablet landscape */
        @media (min-width: 768px) and (max-width: 1023px) and (orientation: landscape) {
          .lg\\:flex-row {
            flex-direction: row;
          }
          
          .lg\\:w-3\\/5 {
            width: 60%;
          }
          
          .lg\\:w-2\\/5 {
            width: 40%;
          }
        }
        
        /* Optimize dropdown content for mobile */
        @media (max-width: 640px) {
          .max-h-[500px] {
            max-height: 400px;
          }
        }
        
        /* Dark theme enhancements */
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
}