import DroneLandingPage from "./DroneLandingPage";
// CORRECT
import IndustriesSection from './IndustriesSection';

import ScrollContainer from "./ScrollContainer";
import WhyChooseSection from "./WhyChooseSection";

function DaasMain() {
  return (
    <div>
    <DroneLandingPage/>
    <WhyChooseSection/>
    {/* <ScrollContainer/> */}
    <IndustriesSection/>
</div>
  );
}

export default DaasMain;
