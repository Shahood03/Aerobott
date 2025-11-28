import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WhyChooseAerobottSection from "../Aboutus/WhyChooseAerobott";
import Training from "./Training";
import SimplicityFAQ from "./SimplicityFAQ";
import Banner from "./Banner";
import NewsletterSubscription from "../Home/ContactusForm";

// Import individual course components
import RemotePilotSmall from "./courses/RemotePilotSmall";
import RemotePilotMedium from "./courses/RemotePilotMedium";
import ComprehensiveFlightSmall from "./courses/ComprehensiveFlightSmall";
import ComprehensiveFlightMedium from "./courses/ComprehensiveFlightMedium";
import DroneInstructor from "./courses/DroneInstructor";

function TrainingMain() {
  return (
    <Routes>
      {/* Main training page */}
      <Route path="/" element={
        <>
          <Banner />
          <Training />
          {/* Uncomment these sections as needed */}
          {/* <AIandML />
          <DronewithAi />
          <SimplicityFAQ />
          <NewsletterSubscription />
          <WhyChooseAerobottSection /> */}
        </>
      } />
      
      {/* Individual course routes */}
      <Route path="/remote-pilot-small" element={<RemotePilotSmall />} />
      <Route path="/remote-pilot-medium" element={<RemotePilotMedium />} />
      <Route path="/comprehensive-flight-small" element={<ComprehensiveFlightSmall />} />
      <Route path="/comprehensive-flight-medium" element={<ComprehensiveFlightMedium />} />
      <Route path="/drone-instructor" element={<DroneInstructor />} />
    </Routes>
  );
}

export default TrainingMain;