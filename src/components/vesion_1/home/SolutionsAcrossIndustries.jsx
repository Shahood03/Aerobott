import React from 'react';

const SolutionsAcrossIndustries = () => {
  const solutions = [
    {
      title: "Agriculture",
      description: "Drone-powered precision agriculture with AI crop analysis and targeted spraying to maximize yields and reduce chemical use.",
      image: "/images/home/s1.jpg",
      link: "/solutions/agriculture",
      iconPath: "/images/icon/i1.png" // Replace with your PNG icon path
    },
    {
      title: "GIS Surveying & Mapping",
      description: "High-precision drone mapping delivering detailed topographical data and 3D models for intelligent land planning.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "/solutions/gis-mapping",
      iconPath: "/images/icon/i2.png" // Replace with your PNG icon path
    },
    {
        title: "Defense",
        description: "Military-grade UAV systems for tactical reconnaissance, perimeter security, and intelligence gathering in harsh environments.",
        image: "/images/drone/c2.jpg",
        link: "/solutions/defense",
        iconPath: "/images/icon/i5.png" // Replace with your PNG icon path
      },
    {
      title: "Security & Surveillance",
      description: "Autonomous drone patrols with real-time video analytics for smart cities, borders, and large campus security.",
      image: "/images/home/s3.png",
      link: "/solutions/security",
      iconPath: "/images/icon/i3.png" // Replace with your PNG icon path
    },
    {
      title: "Energy & Utility",
      description: "Specialized drones for power line inspection, wind turbine monitoring, and solar farm assessment with thermal imaging.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: "/solutions/energy-utility",
      iconPath: "/images/icon/i6.png" // Replace with your PNG icon path
    },
    {
      title: "Mining & Metal",
      description: "Heavy-duty drones for volumetric stockpile analysis, pit mapping, and inaccessible area inspection in mining operations.",
      image: "/images/home/s3.jpg",
      link: "/solutions/mining-metal",
      iconPath: "/images/icon/i7.png" // Replace with your PNG icon path
    }
  ];

  // Function to handle redirection
  const handleRedirect = (link) => {
    // In a real application, you would use router.push(link) or window.location
    console.log(`Redirecting to: ${link}`);
    // For demo purposes, alert the link
    alert(`Navigating to: ${link}`);
  };

  return (
    <div className="w-full mx-auto bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-32">
      {/* Header Section - Responsive */}
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 px-2 leading-tight">
          Drone Solutions Across Industries
        </h2>
        <p className="text-gray-600 max-w-xs sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto text-sm sm:text-base lg:text-lg xl:text-xl px-4 leading-relaxed">
          Our advanced UAV technologies deliver innovative drone solutions tailored for each industry's unique challenges, 
          enhancing data collection, operational safety, and decision-making across diverse sectors.
        </p>
      </div>

      {/* Grid Section - Fully Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {solutions.map((solution, index) => (
          <div 
            key={index} 
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer h-64 sm:h-72 lg:h-80 xl:h-96 group touch-manipulation"
            onClick={() => handleRedirect(solution.link)}
          >
            {/* Image with better loading */}
            <img 
              src={solution.image} 
              alt={solution.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 z-10"></div>
            
            {/* Interactive overlay on hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-15"></div>
            
            {/* Content container - Responsive */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-between p-3 sm:p-4 lg:p-6">
              {/* PNG Icon in the center - Responsive sizes */}
              <div className="flex-1 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 sm:p-3 lg:p-4 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
                  <img 
                    src={solution.iconPath} 
                    alt={`${solution.title} icon`} 
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 object-contain filter brightness-0 invert transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Text at the bottom - Responsive */}
              <div className="w-full text-white text-center sm:text-left">
                <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-1 sm:mb-2 transition-all duration-300 group-hover:text-blue-200 leading-tight">
                  {solution.title}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed transition-all duration-300 group-hover:text-gray-200 line-clamp-3">
                  {solution.description}
                </p>
              </div>
            </div>
            
            {/* Hover indicator */}
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-1.5 sm:p-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Optional: View More Button for smaller screens */}
      <div className="text-center mt-8 sm:mt-12 lg:hidden">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-sm font-medium min-h-[44px] touch-manipulation">
          Explore All Solutions
        </button>
      </div>

      {/* Custom CSS for enhanced responsiveness */}
      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .touch-manipulation {
          touch-action: manipulation;
        }
        
        /* Ensure proper spacing on very small screens */
        @media (max-width: 320px) {
          .grid {
            gap: 0.75rem;
          }
        }
        
        /* Optimize for tablet landscape */
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
        }
        
        /* Large desktop optimization */
        @media (min-width: 1536px) {
          .grid {
            gap: 2rem;
          }
        }
        
        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          img {
            image-rendering: -webkit-optimize-contrast;
          }
        }
      `}</style>
    </div>
  );
};

export default SolutionsAcrossIndustries;



// import React, { useState } from 'react';

// const SolutionsSection = () => {
//   const solutions = [
//     {
//       title: "Agriculture",
//       description: "Increase yield and sustainability through AI-powered spraying and crop analysis.",
//       image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=620&h=400&fit=crop&auto=format",
//       iconPath: "/images/icon/i1.png",
//       link: "/solutions/agriculture"
//     },
//     {
//       title: "GIS Surveying & Mapping",
//       description: "High-resolution topographical data for smart planning and land use.",
//       image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=620&h=400&fit=crop&auto=format",
//       iconPath: "/images/icon/i2.png",
//       link: "/solutions/gis-mapping"
//     },
//     {
//       title: "Security & Surveillance",
//       description: "Real-time aerial monitoring for smart cities, borders, and campuses.",
//       image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=620&h=400&fit=crop&auto=format",
//       iconPath: "/images/icon/i3.png",
//       link: "/solutions/security"
//     },
//     {
//       title: "Disaster Management",
//       description: "Rapid response, damage assessment, and search & rescue using UAVs.",
//       image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=620&h=400&fit=crop&auto=format",
//       iconPath: "/images/icon/i4.png",
//       link: "/solutions/disaster-management"
//     }
//   ];

//   const SolutionCard = ({ solution, index }) => {
//     const [isHovered, setIsHovered] = useState(false);

//     const handleNavigate = () => {
//       // In a real app, you'd use React Router or Next.js routing
//       console.log(`Navigating to: ${solution.link}`);
//       // window.location.href = solution.link;
//     };

//     return (
//       <div 
//         className="relative w-full max-w-[620px] group cursor-pointer transform transition-all duration-500 hover:translate-y-[-8px]"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* Main Card Container */}
//         <div className="w-[620px] inline-flex flex-col justify-start items-start">
//           <div className="w-[620px] rounded-[20px] flex flex-col justify-start items-start gap-2.5 overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl">
//             <div className="self-stretch relative flex flex-col justify-start items-start gap-2.5">
//               <img 
//                 className="self-stretch h-96 relative rounded-[20px] transition-transform duration-700 group-hover:scale-110" 
//                 src={solution.image}
//                 alt={solution.title}
//               />
              
//               {/* Gradient Overlay */}
//               <div className="w-[620px] left-0 top-[269px] absolute rounded-bl-[20px] rounded-br-[20px] flex flex-col justify-start items-start gap-2.5">
//                 <div className="self-stretch h-32 relative">
//                   <div className="w-[620px] h-32 left-[620px] top-[131px] absolute origin-top-left rotate-180 bg-gradient-to-b from-black to-black/0 rounded-tl-[20px] rounded-tr-[20px]" />
//                 </div>
                
//                 {/* Text Content */}
//                 <div className="left-[19px] top-[19px] absolute flex flex-col justify-start items-start gap-2.5">
//                   <div className="w-[581px] flex flex-col justify-start items-start gap-2.5">
//                     <div className="self-stretch justify-start text-white text-2xl font-semibold font-['Montserrat'] leading-9">
//                       {solution.title}
//                     </div>
//                     <div className="self-stretch justify-start text-white text-base font-normal font-['Montserrat'] leading-normal">
//                       {solution.description}
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
              
//               {/* Centered Icon that disappears on hover */}
//               <div className={`w-24 h-24 left-1/2 top-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${
//   isHovered ? 'opacity-0' : 'opacity-100'
// }`}>
//   <div className="w-24 h-24 left-0 top-0 absolute bg-gray- rounded-full flex items-center justify-center">
//     <img 
//       src={solution.iconPath} 
//       alt={`${solution.title} icon`} 
//       className="w-24 h-24 object-contain"  // Increased from w-8 h-8
//       loading="lazy"
//     />
//   </div>
// </div>

//             </div>
//           </div>
//         </div>
        
//         {/* Enhanced Read More Button */}
//         <div 
//           className={`absolute left-1/2 transform -translate-x-1/2 -bottom-8 transition-all duration-500 ease-out z-20 ${
//             isHovered 
//               ? 'opacity-100 translate-y-0 scale-100' 
//               : 'opacity-0 translate-y-4 scale-95'
//           }`}
//         >
//           <div 
//             data-hover="False" 
//             data-property-1="Button" 
//             data-show-icon="false" 
//             className="w-48 p-2.5 bg-white rounded-[20px] shadow-2xl transform transition-all duration-300 hover:scale-105"
//           >
//             <button 
//               onClick={handleNavigate}
//               className="w-full h-11 px-4 py-2.5 bg-sky-700 rounded-2xl shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)] inline-flex justify-center items-center gap-2.5 transition-all duration-300 hover:bg-sky-800 hover:shadow-[inset_0px_6px_6px_0px_rgba(0,0,0,0.3)] active:scale-95"
//             >
//               <div className="text-center text-white text-base font-semibold font-['Inter']">
//                 Read More
//               </div>
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="w-full min-h-screen bg-white">
//       <div className="max-w-7xl mx-auto px-6 py-20">
//         {/* Enhanced Header with animation */}
//         <div className="text-center mb-16">
//           <div className="text-black text-4xl md:text-5xl font-semibold font-['Montserrat'] leading-tight mb-6">
//             Solutions Across Industries
//           </div>
//           <div className="max-w-4xl mx-auto text-gray-600 text-lg font-light font-['Montserrat'] leading-relaxed">
//             Solutions Across Industries provides cutting-edge drone technologies tailored for agriculture, construction, energy, logistics, and public safety, enhancing efficiency, data collection, and operational safety across diverse sectors.
//           </div>
//         </div>

//         {/* Solutions Grid with enhanced spacing */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-12">
//           {solutions.map((solution, index) => (
//             <div 
//               key={index} 
//               className="flex justify-center animate-fadeInUp"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <SolutionCard solution={solution} index={index} />
//             </div>
//           ))}
//         </div>

//         {/* Enhanced Navigation Dots */}
//         <div className="flex justify-center items-center gap-3 mt-16">
//           <div className="w-4 h-4 bg-black rounded-full transform transition-all duration-300 hover:scale-125 cursor-pointer" />
//           <div className="w-4 h-4 bg-zinc-300 rounded-full transform transition-all duration-300 hover:scale-125 hover:bg-zinc-400 cursor-pointer" />
//         </div>
//       </div>

//       {/* CSS Animations */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
        
//         @keyframes slideDown {
//           from { 
//             opacity: 0;
//             transform: translateY(-30px);
//           }
//           to { 
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes slideUp {
//           from { 
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to { 
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes fadeInUp {
//           from { 
//             opacity: 0;
//             transform: translateY(40px);
//           }
//           to { 
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 0.8s ease-out;
//         }
        
//         .animate-slideDown {
//           animation: slideDown 0.8s ease-out;
//         }
        
//         .animate-slideUp {
//           animation: slideUp 0.8s ease-out 0.2s both;
//         }
        
//         .animate-fadeInUp {
//           animation: fadeInUp 0.8s ease-out both;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SolutionsSection;