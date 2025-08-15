import OverviewSection from "./Overview";
import WhyChooseUs from "./WhyChooseUs";
import Industries from "./Industries"
import NewsletterSubscription from "../Home/ContactusForm";
import AerobottLanding from "./HeroSection";
import SimplicityFAQ from "../Training/SimplicityFAQ";
function Daas(){
    return(
        <>
        <AerobottLanding/>
      <OverviewSection />
      <WhyChooseUs />
      <Industries />
      <SimplicityFAQ/>
       <NewsletterSubscription/>
        </>
    )
}

export default Daas;