import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AerobottLanding() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3A48E0 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #99DAFF 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-screen">
          
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-light text-gray-200 leading-tight tracking-wide font-raleway">
                  DRONES THAT WORK FOR YOU
                </h1>
                <p className="text-xl text-gray-200 font-normal font-raleway leading-relaxed">
                  On-Demand Aerial Intelligence, Delivered by Aerobott
                </p>
              </div>

              {/* CTA Button */}
              <button className="group relative px-8 py-4 bg-indigo-600 rounded-xl overflow-hidden transition-all duration-300 hover:bg-indigo-700 hover:scale-105 hover:shadow-[0px_0px_35px_0px_rgba(58,72,224,0.7)]"
                style={{
                  boxShadow: '0px 0px 28.6px 0px rgba(58,72,224,0.50)',
                  outline: '1px solid rgba(147, 197, 253, 0.3)',
                  outlineOffset: '-1px'
                }}>
                
                {/* Button Background Effects */}
                <div className="absolute w-28 h-14 left-4 top-8 bg-blue-400 rounded-full blur-md opacity-30"></div>
                {/* <div className="absolute w-36 h-11 left-11 top-4 bg-gradient-radial from-black/20 via-transparent to-transparent rounded-full"></div> */}
                
                <div className="relative flex items-center gap-3">
                  <span className="text-white text-sm font-normal font-raleway leading-tight">
                    Contact us
                  </span>
                  <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative">
              <img 
                className="w-[577px] h-[543px] object-contain" 
                src="/images/element/design.png" 
                alt="Drone formation"
              />
              {/* Optional glow effect around the image */}
              <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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