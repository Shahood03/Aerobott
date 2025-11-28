import React from 'react';
import MagicBento from './ComprehensiveFlightMedium/MagicBento';
import WhoCanApply from './ComprehensiveFlightSmall/WhoCanApply';
import Hero from './ComprehensiveFlightMedium/Hero';
import About from '../About';
import CertificationChandigarh from '../CertificationChandigarh';


const ComprehensiveFlightMedium = () => {
  return (
    <>
      {/* Hero full width */}
      <Hero />
      {/* All other sections with same side margin & padding */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <MagicBento />
        <About />
        <WhoCanApply />
        <CertificationChandigarh />
      </div>
    </>
  );
};

export default ComprehensiveFlightMedium;
