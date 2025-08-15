import NewsletterSubscription from "../Home/ContactusForm";
import AerobottTeamSection from "./AerobottTeamSection";
import RecognitionCertificationsSection from "./Certifications";
import ManagementTeamSection from "./ManagementTeam";
import AerobottStorySection from "./OurStory";
import WhatWeOfferSection from "./WhatWeOffer";
import WhyChooseAerobottSection from "./WhyChooseAerobott";

function AboutUsMain(){
    return(
        <>
      <AerobottTeamSection />
      <AerobottStorySection/>
      <ManagementTeamSection/>
      <WhyChooseAerobottSection/>
        {/* <RecognitionCertificationsSection/> */}
         
      <WhatWeOfferSection/>
     
         <NewsletterSubscription/>
        </>
    )
}

export default AboutUsMain;