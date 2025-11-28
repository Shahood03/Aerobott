import React from "react";
import HeroSection from "./Meteorology/HeroSection";
import MagicBento from "./Meteorology/MagicBento";
import CertificationMumbaiChandigarh from "./CertificationMumbaiChandigarh";
import WhoCanApply from "./WhoCanApply";

const MeteorologyMain = () => {
  return (
    <div>
      <HeroSection />
      <WhoCanApply />
      <MagicBento />
      <CertificationMumbaiChandigarh />
    </div>
  );
};

export default MeteorologyMain;
