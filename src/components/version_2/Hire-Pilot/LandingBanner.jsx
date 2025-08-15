
// /images/element/v1.mp4\
import React from 'react';
import { ArrowRight, Plus, Users } from 'lucide-react';

export default function LandingBanner() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          transform: 'scale(1.5)',
          transformOrigin: 'center center'
        }}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/element/v1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Bottom Gradient Fade to Black */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-15"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3A48E0 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #99DAFF 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 z-20">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-30 container mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-center gap-12 min-h-screen text-center">
          
          {/* Main Content */}
          <div className="max-w-4xl">
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-light text-gray-200 leading-tight tracking-wide" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  THE WORLD'S LARGEST NETWORK OF COMMERCIAL DRONE PILOTS
                </h1>
                <p className="text-xl lg:text-2xl text-gray-200 font-normal leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  On-Demand Aerial Intelligence, Delivered by Aerobott
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                {/* Post Job Button */}
                <button className="group relative px-10 py-5 bg-indigo-600 rounded-xl overflow-hidden transition-all duration-300 hover:bg-indigo-700 hover:scale-105 hover:shadow-[0px_0px_35px_0px_rgba(58,72,224,0.7)]"
                  style={{
                    boxShadow: '0px 0px 28.6px 0px rgba(58,72,224,0.50)',
                    outline: '1px solid rgba(147, 197, 253, 0.3)',
                    outlineOffset: '-1px'
                  }}>
                  
                  {/* Button Background Effects */}
                  <div className="absolute w-28 h-14 left-4 top-8 bg-blue-400 rounded-full blur-md opacity-30"></div>
                  {/* <div className="absolute w-36 h-11 left-11 top-4 bg-gradient-radial from-black/20 via-transparent to-transparent rounded-full"></div> */}
                  
                  <div className="relative flex items-center gap-3">
                    <Plus className="w-5 h-5 text-white" />
                    <span className="text-white text-lg font-normal leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      Post a Job
                    </span>
                    <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
                  </div>
                </button>

                {/* Join Network Button */}
                <button className="group relative px-10 py-5 bg-transparent border border-indigo-600 rounded-xl overflow-hidden transition-all duration-300 hover:bg-indigo-600/20 hover:scale-105 hover:shadow-[0px_0px_25px_0px_rgba(58,72,224,0.5)]"
                  style={{
                    outline: '1px solid rgba(147, 197, 253, 0.3)',
                    outlineOffset: '-1px'
                  }}>
                  
                  <div className="relative flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-300" />
                    <span className="text-blue-300 text-lg font-normal leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      Join Network
                    </span>
                    <ArrowRight className="w-5 h-5 text-blue-300 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .preserve-3d {
          transform-style: preserve-3d;
        }
        
        .translate-z-8 {
          transform: translateZ(8px);
        }
        
        .rotate-y-90 {
          transform: rotateY(90deg);
        }
        
        .rotate-x-90 {
          transform: rotateX(90deg);
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}