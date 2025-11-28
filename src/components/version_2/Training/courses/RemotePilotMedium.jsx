import React from 'react';
import MagicBento from './RemotePilotMedium/MagicBento';
import WhoCanApply from '../WhoCanApply';
import Hero from './RemotePilotMedium/Hero';
import About from '../About';
import CertificationChandigarh from '../CertificationChandigarh';

const RemotePilotSmall = () => {
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

export default RemotePilotSmall;
