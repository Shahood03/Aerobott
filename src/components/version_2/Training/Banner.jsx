// /images/drone/d8.avif
import React from 'react';
import { ArrowRight, Plus, Users } from 'lucide-react';

export default function Banner() {
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
        <source src="/images/element/v3.mp4" type="video/mp4" />
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

      {/* Slant Image - Above "Take Off With Confidence" text on right side */}
<div
  className="absolute z-25 w-96 h-72" // bigger size, no overflow hidden
  style={{
    top: '35%',
    right: '5%',
    transform: 'translateY(-100%)'
  }}
>
  <img
    src="/images/drone/d6.avif"
    alt="Slant decoration"
    className="w-full h-full object-contain " // no crop
    style={{
      transform: 'rotate(15deg)',
      transformOrigin: 'center',
      filter: 'brightness(0.8) contrast(1.1)'
    }}
  />
</div>



      <div className="relative z-30 container mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-center gap-12 min-h-screen text-center">
          
          {/* Main Content */}
          <div className="max-w-4xl">
            <div className="space-y-8">
              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-light text-gray-200 leading-tight tracking-wide" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Take Off With Confidence
                </h1>
                <p className="text-xl lg:text-2xl text-gray-200 font-normal leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Train with Aerobott to master professional drone operations, regulations, and flight safety
                </p>
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