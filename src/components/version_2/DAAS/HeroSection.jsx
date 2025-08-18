import React, { memo, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';

const AerobottLanding = memo(() => {
  // Memoize the floating particles to prevent re-renders
  const floatingParticles = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
          animationDuration: `${3 + Math.random() * 4}s`
        }}
      />
    )), []
  );

  return (
    <div className="min-h-screen bg-black pt-8 relative overflow-hidden will-change-auto">
      {/* Optimized Background Pattern with CSS Variables */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(circle at 25% 25%, #3A48E0 0%, transparent 50%), radial-gradient(circle at 75% 75%, #99DAFF 0%, transparent 50%)`
        }}
      />

      {/* Optimized Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

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

              {/* Optimized CTA Button */}
              <button 
                className="group relative px-8 py-4 bg-indigo-600 rounded-xl overflow-hidden transition-all duration-300 hover:bg-indigo-700 hover:scale-105 transform-gpu"
                style={{
                  boxShadow: '0px 0px 28.6px 0px rgba(58,72,224,0.50)',
                  outline: '1px solid rgba(147, 197, 253, 0.3)',
                  outlineOffset: '-1px',
                  willChange: 'transform'
                }}
              >
                <div className="absolute w-28 h-14 left-4 top-8 bg-blue-400 rounded-full blur-md opacity-30" />
                <div className="relative flex items-center gap-3">
                  <span className="text-white text-sm font-normal font-raleway leading-tight">
                    Contact us
                  </span>
                  <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Content - Optimized Image */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative">
              {/* Image with loading optimization */}
              <img 
                className="w-[577px] h-[543px] object-contain"
                src="/images/element/design.png" 
                alt="Drone formation"
                loading="eager" // Load immediately since it's above the fold
                decoding="sync"
                style={{ 
                  contentVisibility: 'visible',
                  containIntrinsicSize: '577px 543px'
                }}
              />
              {/* Optimized glow effect */}
              <div 
                className="absolute inset-0 rounded-full blur-3xl -z-10 opacity-10"
                style={{
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Optimized floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingParticles}
      </div>

      {/* Inline critical CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
          }
        }
        
        .animate-float {
          animation: float linear infinite;
          will-change: transform;
        }
        
        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
});

AerobottLanding.displayName = 'AerobottLanding';

export default AerobottLanding;