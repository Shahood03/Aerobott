import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import "./index.css";
import "./App.css";
import HomeMain from "./components/version_2/Home/HomeMain";
import Daas from "./components/version_2/DAAS/DaasMain";
import AboutUsMain from "./components/version_2/Aboutus/AboutusMain";
import TrainingMain from "./components/version_2/Training/TrainingMain";
import AIExcellenceMain from "./components/version_2/AIExcellence/AIExcellenceMain";
import IndustrialCourseMain from "./components/version_2/IndustrialCourse/IndustrialCourseMain";
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
import DroneInstructor from "./components/version_2/Training/courses/DroneInstructor";

// ScrollToTop component to handle scroll restoration
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Aboutus } from "./components/vesion_1/aboutus/Aboutus";
import DroneManufacturingMain from "./components/version_2/AIExcellence/course/DroneManufacturingMain";
import MeteorologyMain from "./components/version_2/AIExcellence/course/MeteorologyMain";
import DataScienceMain from "./components/version_2/AIExcellence/course/DataScienceMain";
import CyberSecurityMain from "./components/version_2/AIExcellence/course/CyberSecurityMain";
import AimlForDroneApplicationMain from "./components/version_2/AIExcellence/course/AimlForDroneApplicationMain";
import AimlMain from "./components/version_2/AIExcellence/course/AimlMain";
import GISMain from "./components/version_2/AIExcellence/course/GISMain";
import DroneBuilding from "./components/version_2/IndustrialCourse/courses/DroneBuilding";
import DroneRepair from "./components/version_2/IndustrialCourse/courses/DroneRepair";
import FPVRacing from "./components/version_2/IndustrialCourse/courses/FPVRacing";
import Cinematography from "./components/version_2/IndustrialCourse/courses/Cinematography";
import GISSurvey from "./components/version_2/IndustrialCourse/courses/GISSurvey";
import MappingSurveying from "./components/version_2/IndustrialCourse/courses/MappingSurveying";
import BlogMain from "./components/version_2/blogs/BlogMain";
import AiPowerDrone from "./components/version_2/blogs/components/blogs/AIPoweredDrone";
import BuildCareer from "./components/version_2/blogs/components/blogs/BuildCareer";
import DGCACertification from "./components/version_2/blogs/components/blogs/DGCACertification";
import RemotePilotTraining from "./components/version_2/blogs/components/blogs/RemotePilotTraining";


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
          <Route path="/drone-as-a-service" element={<Daas />} />
          <Route path="/about-us" element={<AboutUsMain />} />       
          <Route path="/hire-pilot" element={<HirePilot />} />
          <Route path="/blogs" element={<BlogMain />} />
          <Route path="/blogs/AI-powered-drones" element={<AiPowerDrone />} />
          <Route path="/blogs/build-a-career-drone-technology" element={<BuildCareer />} />
          <Route path="/blogs/dgca-drone-certification" element={<DGCACertification />} />
          <Route path="/blogs/remote-pilot-training" element={<RemotePilotTraining />} />
          <Route path="/products" element={<ProductMain />} />
          <Route path="/products/flyt-i-drone" element={<FlytMain />} />
          <Route path="/products/aero-agri-drone" element={<AeroAgriMain />} />
          <Route path="/products/survey-master-pro-drone" element={<SurveyMain />} />
          
          {/* Training Routes */}
          <Route path="/drone-pilot-training-courses" element={<TrainingMain />} />
          
          {/* Individual Course Detail Routes */}   
          <Route path="/drone-pilot-training-small-category" element={<RemotePilotSmall />} />
          <Route path="/drone-pilot-training-medium-category" element={<RemotePilotMedium />} />
          <Route path="/drone-flight-training-small-category" element={<ComprehensiveFlightSmall />} />
          <Route path="/drone-flight-training-medium-category" element={<ComprehensiveFlightMedium />} />
          <Route path="/remote-pilot-instructor" element={<DroneInstructor />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          

          <Route path="/AIExcellence" element={<AIExcellenceMain /> } />

          {/* AI Excellence Course Detail Routes */}   
          <Route path="/AIExcellence/drone-manufacturing-and-assembly" element={<DroneManufacturingMain />} />
          <Route path="/AIExcellence/meteorology" element={<MeteorologyMain />} />
          <Route path="/AIExcellence/data-science" element={<DataScienceMain />} />
          <Route path="/AIExcellence/cyber-security" element={<CyberSecurityMain />} />
          <Route path="/AIExcellence/ai-and-ml" element={<AimlMain />} />
          <Route path="AIExcellence/aiml-for-drone-applications" element={<AimlForDroneApplicationMain />} />
          <Route path='/AIExcellence/geographic-information-system' element={<GISMain />}/>




          <Route path="/IndustrialCourse" element={<IndustrialCourseMain />} />
          <Route path="/IndustrialCourse/drone-building" element={<DroneBuilding />} />
          <Route path="/IndustrialCourse/drone-repair" element={<DroneRepair />} />
          <Route path="/IndustrialCourse/fpv-racing" element={<FPVRacing />} />
          <Route path="/IndustrialCourse/aerial-cinematography" element={<Cinematography />} />
          <Route path="/IndustrialCourse/gis-survey" element={<GISSurvey />} />
          <Route path="/IndustrialCourse/gis-data-processing" element={<MappingSurveying />} />

          {/* Other Routes */}
          <Route path="/partner-with-us" element={<PartnerWithUs />} />           
          <Route path="/contact-us" element={<Contactus/>} />                                     
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
