import React from 'react';
import Particles from './Particles';


const Banner = () => {
  return (
    <div style={{ backgroundColor: 'black', position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Particle Background */}
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={250}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={80}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      {/* Foreground Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        {/* Center Heading & Subheading (static in middle) */}
        <div className="flex flex-col items-center justify-center flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Master the Skies with FLYT-I
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mb-6">
            India's premier indigenous training quadcopter designed for professional drone education, certification programs, and advanced simulation training.
          </p>
          <a
            href="#contact"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 rounded-full text-white font-medium hover:opacity-90 transition"
          >
            Contact us →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;