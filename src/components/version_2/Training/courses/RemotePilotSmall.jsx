import React from 'react';
import MagicBento from './RemotePilotSmall/MagicBento';
import WhoCanApply from './RemotePilotSmall/WhoCanApply';
import Hero from './RemotePilotSmall/Hero';
import About from './RemotePilotSmall/About';
import CertificationSection from './RemotePilotSmall/CertificationSection';

const RemotePilotSmall = () => {
  return (
    <>
      {/* Hero full width */}
      <Hero />

      {/* All other sections with same side margin & padding */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <MagicBento />
        <About />
        {/* <CourseSchedule/> */}
        <WhoCanApply />
        <CertificationSection />
      </div>
    </>
  );
};

export default RemotePilotSmall;
