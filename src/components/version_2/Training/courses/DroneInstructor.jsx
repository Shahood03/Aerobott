import React from 'react';
import MagicBento from './DroneInstructor/MagicBento';
import WhoCanApply from './DroneInstructor/WhoCanApply';
import Hero from './DroneInstructor/Hero';
import About from '../About';
import CertificationMumbaiChandigarh from '../CertificationMumbaiChandigarh';

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
        <CertificationMumbaiChandigarh />
      </div>
    </>
  );
};

export default DroneInstructor;
