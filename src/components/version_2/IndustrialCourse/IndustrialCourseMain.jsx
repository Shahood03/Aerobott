import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Banner from "./Banner";
import AlExcellence from './IndustrialCourse';
import DroneBuilding from './courses/DroneBuilding';

function IndustrialCourseMain(){
  return (
    <Routes>
      {/* Main training page */}
      <Route path="/" element={
        <>
          <Banner />
          <AlExcellence />
        </>
      } />

      <Route path="/drone-building" element={<DroneBuilding />} />
      {/* <Route path="/remote-pilot-medium" element={<RemotePilotMedium />} />
      <Route path="/comprehensive-flight-small" element={<ComprehensiveFlightSmall />} />
      <Route path="/comprehensive-flight-medium" element={<ComprehensiveFlightMedium />} />
      <Route path="/agriculture-drone" element={<AgricultureDrone />} />
      <Route path="/drone-technician" element={<DroneTechnician />} />
      <Route path="/fpv-racing" element={<FPVRacing />} />
      <Route path="/aerial-cinematography" element={<AerialCinematography />} />
      <Route path="/gis-survey" element={<GISSurvey />} />
      <Route path="/drone-instructor" element={<DroneInstructor />} />
      <Route path="/ai-ml-uavs" element={<AIMLForUAVs />} />
      <Route path="/mapping-surveying" element={<MappingSurveying />} /> */} 
    </Routes>
  );
}

export default IndustrialCourseMain;