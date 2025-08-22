import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WhyChooseAerobottSection from "../Aboutus/WhyChooseAerobott";
import AIandML from "./AIandML";
import Training from "./Training";
import DronewithAi from "./DronewithAi";
import SimplicityFAQ from "./SimplicityFAQ";
import Banner from "./Banner";
import NewsletterSubscription from "../Home/ContactusForm";

// Import individual course components
import RemotePilotSmall from "./courses/RemotePilotSmall";
import RemotePilotMedium from "./courses/RemotePilotMedium";
import ComprehensiveFlightSmall from "./courses/ComprehensiveFlightSmall";
import ComprehensiveFlightMedium from "./courses/ComprehensiveFlightMedium";
import AgricultureDrone from "./courses/AgricultureDrone";
import DroneTechnician from "./courses/DroneTechnician";
import FPVRacing from "./courses/FPVRacing";
import AerialCinematography from "./courses/AerialCinematography";
import GISSurvey from "./courses/GISSurvey";
import DroneInstructor from "./courses/DroneInstructor";
import AIMLForUAVs from "./courses/AIMLForUAVs";
import MappingSurveying from "./courses/MappingSurveying";

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
      <Route path="/agriculture-drone" element={<AgricultureDrone />} />
      <Route path="/drone-technician" element={<DroneTechnician />} />
      <Route path="/fpv-racing" element={<FPVRacing />} />
      <Route path="/aerial-cinematography" element={<AerialCinematography />} />
      <Route path="/gis-survey" element={<GISSurvey />} />
      <Route path="/drone-instructor" element={<DroneInstructor />} />
      <Route path="/ai-ml-uavs" element={<AIMLForUAVs />} />
      <Route path="/mapping-surveying" element={<MappingSurveying />} />
    </Routes>
  );
}

export default TrainingMain;