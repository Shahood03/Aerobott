import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import "./index.css";
import "./App.css";
import HomeMain from "./components/version_2/Home/HomeMain";
import Daas from "./components/version_2/DAAS/DaasMain";
import AboutUsMain from "./components/version_2/Aboutus/AboutusMain";
import TrainingMain from "./components/version_2/Training/TrainingMain";
import HirePilot from "./components/version_2/Hire-Pilot/HirePilotMain";
import ProductMain from "./components/version_2/Products/ProductMain";
import FlytMain from "./components/version_2/Products/FLYT-I/FlytMain";
import AeroAgriMain from "./components/version_2/Products/AeroAgri/AeroAgriMain";
import SurveyMain from "./components/version_2/Products/Survey-Master-Pro/SurveyMain";
import CourseDetailsPage from "./components/version_2/Training/CourseDetailsPage";
import Contactus from "./components/vesion_1/contactus/Contactus";
import PartnerWithUs from "./components/version_2/PartnerWithUs/PartnerWithUs";

// Import individual course components
import RemotePilotSmall from "./components/version_2/Training/courses/RemotePilotSmall";
import RemotePilotMedium from "./components/version_2/Training/courses/RemotePilotMedium";
import ComprehensiveFlightSmall from "./components/version_2/Training/courses/ComprehensiveFlightSmall";
import ComprehensiveFlightMedium from "./components/version_2/Training/courses/ComprehensiveFlightMedium";
import AgricultureDrone from "./components/version_2/Training/courses/AgricultureDrone";
import DroneTechnician from "./components/version_2/Training/courses/DroneTechnician";
import FPVRacing from "./components/version_2/Training/courses/FPVRacing";
import AerialCinematography from "./components/version_2/Training/courses/AerialCinematography";
import GISSurvey from "./components/version_2/Training/courses/GISSurvey";
import DroneInstructor from "./components/version_2/Training/courses/DroneInstructor";
import AIMLForUAVs from "./components/version_2/Training/courses/AIMLForUAVs";
import MappingSurveying from "./components/version_2/Training/courses/MappingSurveying";

// ScrollToTop component to handle scroll restoration
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Aboutus } from "./components/vesion_1/aboutus/Aboutus";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Use "smooth" if you want smooth scrolling
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          {/* *****************************  Version 2 Routes *************************************** */}
          <Route path="/" element={<HomeMain />} />
          <Route path="/drone-as-service" element={<Daas />} />
          <Route path="/about-us" element={<AboutUsMain />} />       
          <Route path="/hire-pilot" element={<HirePilot />} />
          <Route path="/products" element={<ProductMain />} />
          <Route path="/products/flyt-i" element={<FlytMain />} />
          <Route path="/products/aero-agri" element={<AeroAgriMain />} />
          <Route path="/products/survey-master-pro" element={<SurveyMain />} />
          
          {/* Training Routes */}
          <Route path="/training" element={<TrainingMain />} />
          <Route path="/training/course/:courseId" element={<CourseDetailsPage />} />
          
          {/* Individual Course Detail Routes */}
          <Route path="/training/remote-pilot-small" element={<RemotePilotSmall />} />
          <Route path="/training/remote-pilot-medium" element={<RemotePilotMedium />} />
          <Route path="/training/comprehensive-flight-small" element={<ComprehensiveFlightSmall />} />
          <Route path="/training/comprehensive-flight-medium" element={<ComprehensiveFlightMedium />} />
          <Route path="/training/agriculture-drone" element={<AgricultureDrone />} />
          <Route path="/training/drone-technician" element={<DroneTechnician />} />
          <Route path="/training/fpv-racing" element={<FPVRacing />} />
          <Route path="/training/aerial-cinematography" element={<AerialCinematography />} />
          <Route path="/training/gis-survey" element={<GISSurvey />} />
          <Route path="/training/drone-instructor" element={<DroneInstructor />} />
          <Route path="/training/ai-ml-uavs" element={<AIMLForUAVs />} />
          <Route path="/training/mapping-surveying" element={<MappingSurveying />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          
          {/* Other Routes */}
          <Route path="/partner-with-us" element={<PartnerWithUs />} />           
          <Route path="/contact-us" element={<Contactus/>} />                                     
        </Route>
      </Routes>
    </Router>
  );
}

export default App;