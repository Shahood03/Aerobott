import React from 'react';
import MagicBento from './AgricultureDrone/MagicBento';
import WhoCanApply from '../WhoCanApply';
import Hero from './AgricultureDrone/Hero';
import About from '../About';
import CertificationSection from './AgricultureDrone/CertificationSection';

const AgricultureDrone = () => {
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

export default AgricultureDrone;
