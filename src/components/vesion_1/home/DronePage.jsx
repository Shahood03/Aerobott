import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const DronePage = () => {
  // Slide data constant
  const DRONE_SECTIONS = [
    {
      id: 1,
      title: "Defence",
      image: "/api/placeholder/600/400",
      imageAlt: "Defence drone with advanced surveillance capabilities",
      points: [
        "Our drones are designed for critical defense operations, including border surveillance, battlefield monitoring, and intelligence gathering.",
        "Features include high-resolution imaging, thermal sensors, and real-time data transmission for enhanced situational awareness.",
        "Equipped for deployment in tactical scenarios, providing support in logistics, communication, and strategic planning.",
        "Customizable payloads for specific mission requirements."
      ]
    },
    {
      id: 2,
      title: "Urban & Industrial Solutions",
      image: "/api/placeholder/600/400",
      imageAlt: "Industrial drone with camera systems",
      points: [
        "Drones for inspecting critical infrastructure with high-definition cameras and sensors to detect structural anomalies.",
        "Drones for air quality assessment, pollution tracking, and environmental data collection to support smart city initiatives.",
        "Drones for urban monitoring including traffic management, public safety, and event surveillance with sophisticated imaging technology.",
        "Capable of carrying loads ranging from small packages to large, heavy cargo. Aerocode's Cargo Drones feature robust airframes and powerful propulsion systems."
      ]
    },
    {
      id: 3,
      title: "Agriculture",
      image: "/api/placeholder/600/400",
      imageAlt: "Agricultural drone spraying crops",
      points: [
        "Precision agriculture drones for crop monitoring, mapping, and management to optimize farming practices.",
        "Advanced imaging systems for detecting plant stress, disease, and nutrient deficiencies before visible symptoms appear.",
        "Capable of targeted spraying applications, reducing chemical usage by up to 90% compared to traditional methods.",
        "Real-time data analytics integration for immediate field insights and decision support."
      ]
    },
    {
      id: 4,
      title: "Mapping & Surveying",
      image: "/api/placeholder/600/400",
      imageAlt: "Mapping drone flying over landscape",
      points: [
        "High-precision mapping drones equipped with LiDAR and photogrammetry capabilities for detailed terrain analysis.",
        "Capable of creating centimeter-accurate 3D models and digital elevation maps for construction and development projects.",
        "Significantly reduces surveying time from weeks to hours while increasing data accuracy and completeness.",
        "Specialized systems for corridor mapping, mining operations, and large-scale infrastructure inspection."
      ]
    },
    {
      id: 5,
      title: "Emergency Response",
      image: "/api/placeholder/600/400",
      imageAlt: "Emergency response drone in action",
      points: [
        "Rapid deployment drones for disaster assessment, search and rescue, and emergency management operations.",
        "Thermal imaging systems for locating survivors in disaster zones, even under rubble or in low-visibility conditions.",
        "Drones equipped with medical payload delivery capabilities for critical supplies in hard-to-reach areas.",
        "Real-time video streaming to command centers for coordinated emergency response and situation awareness."
      ]
    },
    {
      id: 6,
      title: "Research & Development",
      image: "/api/placeholder/600/400",
      imageAlt: "Advanced drone technology in research lab",
      points: [
        "Cutting-edge drone platforms for scientific research including atmospheric sampling, wildlife monitoring, and environmental studies.",
        "Customizable research platforms with modular sensor integration capabilities for specialized scientific applications.",
        "Advanced autonomous navigation systems capable of operating in GPS-denied environments.",
        "Experimental propulsion and energy systems research for extended flight time and reduced environmental impact."
      ]
    }
  ];

  // Refs for intersection observer
  const sectionRefs = useRef([]);
  
  // Setup intersection observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sectionRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });
    
    return () => {
      sectionRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="bg-[#f5f5f5] min-h-screen p-0 font-sans">
      {/* Header */}
      <div className="text-center py-12 transform transition-all duration-700 hover:scale-105">
        <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-3">Crafted Excellence</h1>
        <p className="text-[#666666] text-lg">Our involvement enhances drone capabilities across multiple sectors.</p>
      </div>
      
      {/* Vertical Section Layout */}
      <div className="flex flex-col w-full space-y-12 mb-12">
        {DRONE_SECTIONS.map((section, index) => (
          <div 
            key={section.id} 
            className="w-full opacity-0 translate-y-10 transition-all duration-1000"
            ref={el => (sectionRefs.current[index] = el)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4">
              {/* Text Section - conditionally ordered based on index */}
              <div 
                className={`flex flex-col justify-center p-8 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-lg bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl ${
                  index % 2 === 0 ? 'order-1 lg:order-1' : 'order-2 lg:order-2'
                }`}
              >
                <h2 className="text-3xl font-bold text-[#ff9950] mb-6">{section.title}</h2>
                <ol className="space-y-4 text-[#444444]">
                  {section.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex">
                      <span className="mr-2 font-bold">{pointIndex + 1}.</span> 
                      <p>{point}</p>
                    </li>
                  ))}
                </ol>
                <div className="mt-6">
                  <button className="flex items-center bg-white border border-[#ff9950] text-[#ff9950] px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#ff9950] hover:text-white hover:px-6 group">
                    <span>Know More</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
              
              {/* Image Section - conditionally ordered based on index */}
              <div 
                className={`flex items-center justify-center overflow-hidden rounded-3xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                  index % 2 === 0 ? 'order-2 lg:order-2' : 'order-1 lg:order-1'
                }`}
              >
                <img 
                  src={section.image} 
                  alt={section.imageAlt} 
                  className="w-full h-full object-cover rounded-3xl transform transition-all duration-700 hover:scale-110"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
     
    </div>
  );
};

export default DronePage;