import React from 'react';

// Particles Component - Simplified version for demonstration
const Particles = ({ 
  particleColors = ['#ffffff', '#ffffff'], 
  particleCount = 250, 
  particleSpread = 10, 
  speed = 0.1, 
  particleBaseSize = 80, 
  moveParticlesOnHover = true, 
  alphaParticles = false, 
  disableRotation = false 
}) => {
  // For demonstration purposes, creating a simple particle effect
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: Math.min(particleCount, window.innerWidth < 640 ? 50 : window.innerWidth < 1024 ? 150 : 250) }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 rounded-full bg-white opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(-5px); }
          75% { transform: translateY(-15px) translateX(3px); }
        }
      `}</style>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="relative h-screen overflow-hidden" style={{ backgroundColor: 'black' }}>
      {/* Load Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
        rel="stylesheet" 
      />

      {/* Particle Background - Responsive particle count */}
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={typeof window !== 'undefined' && window.innerWidth < 640 ? 50 : 
                      typeof window !== 'undefined' && window.innerWidth < 1024 ? 150 : 250}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={80}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      {/* Foreground Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Center Heading & Subheading (static in middle) */}
        <div className="flex flex-col items-center justify-center flex-1 max-w-6xl mx-auto">
          <h1 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Master the Skies with FLYT-I
          </h1>
          <p 
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mb-6 sm:mb-8 leading-relaxed px-2"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            India's premier indigenous training quadcopter designed for professional drone education, certification programs, and advanced simulation training.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-white text-sm sm:text-base md:text-lg font-medium hover:opacity-90 hover:scale-105 transition-all duration-300 active:scale-95"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Contact us →
          </a>
        </div>
      </div>

      {/* Additional responsive styles */}
      <style jsx>{`
        /* Ensure proper touch targets on mobile */
        @media (max-width: 640px) {
          a {
            min-height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        /* Optimize particle animations for different screen sizes */
        @media (max-width: 640px) {
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-5px) translateX(2px); }
          }
        }

        @media (min-width: 641px) and (max-width: 1024px) {
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-8px) translateX(4px); }
            50% { transform: translateY(-4px) translateX(-4px); }
            75% { transform: translateY(-12px) translateX(2px); }
          }
        }

        @media (min-width: 1025px) {
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-10px) translateX(5px); }
            50% { transform: translateY(-5px) translateX(-5px); }
            75% { transform: translateY(-15px) translateX(3px); }
          }
        }

        /* Respect reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;