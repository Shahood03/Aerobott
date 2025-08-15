import HowItWorks from "../home/DroneTechPage";
import Benefit from "./Benefit";
import FeaturesSection from "./FeaturesSection";
import PilotMatchingHero from "./PilotMatchingHero";



function Howitworks() {
  return (
    <div>
        <PilotMatchingHero/>
        {/* <DroneHeroSection/> */}
        <HowItWorks/>
        <Benefit/>
        <FeaturesSection/>
    </div>
  );
}

export default Howitworks;