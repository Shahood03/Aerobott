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

// ScrollToTop component to handle scroll restoration
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
          {/* Existing defined routes */}
          {/* <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/howitworks" element={<Howitworks />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/products" element={<ProductsPageMain />} />
          <Route path="/products/:productId" element={<DetailProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/enroll/:trainingId" element={<EnrollNowPage />} />
          <Route path="/defence/surveillance-drone" element={<Surveillance />} />
          <Route path="/defence/kamikaze-drone" element={<Kamikaze />} />
          <Route path="/defence/fpv-combat" element={<FPVDrone />} />
          <Route path="/defence/logistics-drone" element={<LogisticsMedicalDrone />} />
          <Route path="/defence/anti-drone" element={<AntiDroneSystem />} />
          <Route path="/drone-pilot-training" element={<DroneTrainingUserPage />} />
          <Route path="/gis-drones" element={<GISDrones />} />
          <Route path="/drone-agriculture" element={<Agriculture />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/daas" element={<DaasMain/>} />
          <Route path="/contact-us" element={<Contactus/>} />
                   
          <Route path="/page-under-development" element={<UnderDevelopmentPage />} /> */}
          
          {/* Routes that should show UnderDevelopmentPage */}
                  
          {/* *****************************  Version *************************************** */}
          <Route path="/" element={<HomeMain />} />
          <Route path="/drone-as-service" element={<Daas />} />
          <Route path="/about-us" element={<AboutUsMain />} />       
          <Route path="/hire-pilot" element={<HirePilot />} />
          <Route path="/products" element={<ProductMain />} />
          <Route path="/products/flyt-i" element={<FlytMain />} />
          <Route path="/products/aero-agri" element={<AeroAgriMain />} />
          <Route path="/products/survey-master-pro" element={<SurveyMain />} />
          <Route path="/training" element={<TrainingMain />} />
          <Route path="/training/course/:courseId" element={<CourseDetailsPage />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />           
          <Route path="/contact-us" element={<Contactus/>} />                                     
        </Route>
      </Routes>
    </Router>
  );
}

export default App;