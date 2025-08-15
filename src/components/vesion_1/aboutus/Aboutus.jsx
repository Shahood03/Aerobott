import AboutSection from "./AboutHeroSection";
import AerobottAboutSection from "./AerobottAboutSection";
import CoreValues from "./CoreValues";
import IndustriesSection from "../daas/IndustriesSection";
import VisionMissionSection from "./VisionMissionSection";

export function Aboutus(){
    return(
        <div>
            <AboutSection/>
            <AerobottAboutSection/>
            <VisionMissionSection/>
            {/* <CoreValues/> */}
            <IndustriesSection/>
        </div>
    )
}