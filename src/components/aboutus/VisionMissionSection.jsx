import React, { useState, useEffect } from 'react';

const VisionMissionSection = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 100);
  }, []);

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-zinc-300 to-white overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 p-12 flex flex-col gap-12 max-w-xl h-full justify-center">
        {/* Heading */}
        <div className={`text-[#333] text-3xl font-semibold font-['Montserrat'] leading-10 transform transition-all duration-700 ${loaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          Our Vision & Mission
        </div>
        
        {/* Vision section */}
        <div className={`flex flex-col gap-4 transform transition-all duration-700 delay-300 ${loaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 relative flex items-center justify-center">
              <div className="w-7 h-7 bg-gradient-to-br from-blue-600 to-cyan-900 rounded-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>
            </div>
            <div className="text-[#333] text-2xl font-semibold font-['Montserrat'] leading-9">
              Vision
            </div>
          </div>
          <div className="self-stretch text-[#333] text-xl font-normal font-['Montserrat'] leading-7 ml-11">
            To revolutionize the drone industry by delivering sustainable, AI-powered aerial solutions that redefine automation.
          </div>
        </div>
        
        {/* Flight path graphic */}
        <div className={`relative h-16 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <svg className="absolute w-64 h-16" viewBox="0 0 240 60" fill="none">
            <path d="M10,30 Q60,10 100,40 Q140,70 200,30" stroke="#ccc" strokeWidth="2" strokeDasharray="5,5" fill="none" />
            <path d="M190,30 L200,30 L195,25" stroke="#ccc" strokeWidth="2" fill="none" />
          </svg>
        </div>
        
        {/* Mission section */}
        <div className={`flex flex-col gap-4 transform transition-all duration-700 delay-1000 ${loaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 relative flex items-center justify-center">
              <div className="w-7 h-7 bg-gradient-to-br from-blue-600 to-cyan-900 rounded-sm" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
                  <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
                  <path d="M16 10v8h2v-8h-2zm-4 4v4h2v-4h-2zm-4 0v4h2v-4H8z" />
                </svg>
              </div>
            </div>
            <div className="text-[#333] text-2xl font-semibold font-['Montserrat'] leading-9">
              Mission
            </div>
          </div>
          <div className="self-stretch text-[#333] text-xl font-normal font-['Montserrat'] leading-7 ml-11">
            To empower industries through innovative, cost-effective drones and skill development platforms rooted in deep tech.
          </div>
        </div>
      </div>
      
      {/* Diamond-shaped images grid */}
      <div className="absolute right-0 top-0 w-2/3 h-full">
        {/* Top diamond - drone in sky */}
        <div className={`absolute top-[10%] right-[18%] w-64 h-64 transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-full h-full origin-center rotate-45 overflow-hidden rounded-3xl shadow-lg">
            <img 
              className="w-[120%] h-[120%] object-cover origin-center -rotate-45 scale-125 "
              src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Drone flying in the sky"
            />
          </div>
        </div>
        <div className="w-16 h- origin-top-left rotate-[-135deg] bg-gradient-to-l from-slate-200 to-amber-100" />
        {/* Connecting element between top and middle diamond */}
        <div className={`absolute top-[35%] right-[16%] w-6 h-10 origin-top-left rotate-[135deg] bg-gradient-to-l from-slate-300 to-slate-200 transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
        
        {/* Middle diamond - person operating drone */}
        <div className={`absolute top-[32%] right-[34%] w-64 h-64 transition-all duration-1000 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-full h-full origin-center rotate-45 overflow-hidden rounded-3xl shadow-lg">
            <img 
              className="w-[120%] h-[120%] object-cover origin-center -rotate-45 scale-125 -translate-x-50" 
              src="https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Person flying a drone"
            />
          </div>
        </div>
        
        {/* Connecting element between middle and bottom diamond */}
        <div className={`absolute top-[31%] right-[35%] w-6 h-8 origin-top-left rotate-45 bg-gradient-to-l from-slate-300 to-zinc-100 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
        
        {/* Bottom diamond - agricultural field */}
        <div className={`absolute top-[55%] right-[18%] w-64 h-64 transition-all duration-1000 delay-600 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-full h-full origin-center rotate-45 overflow-hidden rounded-3xl shadow-lg">
            <img 
              className="w-[120%] h-[120%] object-cover origin-center -rotate-45 scale-125" 
              src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Aerial view of green fields"
            />
          </div>
        </div>
        
        {/* Connecting element to the large image */}
        <div className={`absolute top-[56%] right-[36%] w-6 h-11 origin-top-left rotate-[-45deg] bg-gradient-to-l rom-slate-200 to-zinc-100 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
        
        {/* Large diamond - drone at sunset */}
        <div className={`absolute top-[26%] left-[72%] translate-x-[100px] w-96 h-96 transition-all duration-1000 delay-800 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="w-full h-full origin-center rotate-45 overflow-hidden rounded-3xl shadow-lg">
            <img 
              className="w-[120%] h-[120%] object-cover origin-center -rotate-45 scale-125" 
              src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Drone at sunset"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionSection;