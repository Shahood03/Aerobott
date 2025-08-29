import React from 'react';
import MagicBento from './DroneInstructor/MagicBento';
import WhoCanApply from './DroneInstructor/WhoCanApply';
import Hero from './DroneInstructor/Hero';
import About from '../About';
import CertificationSection from './DroneInstructor/CertificationSection';

const DroneInstructor = () => {
  return (
    <>
      {/* Hero full width */}
      <Hero />
      {/* All other sections with same side margin & padding */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <MagicBento />
        <About />
        <WhoCanApply />
        <CertificationSection />
      </div>
    </>
  );
};

export default DroneInstructor;
