import React from 'react';
import MagicBento from './ComprehensiveFlightSmall/MagicBento';
import WhoCanApply from './ComprehensiveFlightSmall/WhoCanApply';
import Hero from './ComprehensiveFlightSmall/Hero';
import About from '../About';
import CertificationSection from './ComprehensiveFlightSmall/CertificationSection';


const ComprehensiveFlightSmall = () => {
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

export default ComprehensiveFlightSmall;
