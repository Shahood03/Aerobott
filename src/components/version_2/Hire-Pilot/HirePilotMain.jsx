import HowItWorksSection from "./HowItWorksSection";
import LandingBanner from "./LandingBanner";
import TrustSafetySection from "./TrustSafetySection";
import OurTopPilot from "./OurTopPilot";
import TestimonialCarousel from "./Testimonial";
import NewsletterSubscription from "../Home/ContactusForm";


function HirePilot(){
    return(
        <>
        <LandingBanner/>
        <HowItWorksSection/>
        <TrustSafetySection/>
        <OurTopPilot />
        <TestimonialCarousel />
        <NewsletterSubscription/>
        </>
    )
}

export default HirePilot;