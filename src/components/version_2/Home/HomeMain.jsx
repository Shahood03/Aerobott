// import AboutUsSection from "./AboutUs";
import Banner from "./Banner";
import NewsletterSubscription from "./ContactusForm";
import DroneManufacturing from "./DroneManufacturing";
import DroneServicesSection from "./DroneService";
import NewsSection from "./Newslatter";
import OurPartners from "./OurPartners";
import ProductsSection from "./Products";




function HomeMain() {
  return (
    <div>
      <Banner />
      <DroneManufacturing/>
      {/* <AboutUsSection/> */}
      <DroneServicesSection/>
      <ProductsSection/>
      <NewsSection/>
      <OurPartners/>
      <NewsletterSubscription/>
    </div>
  );
}

export default HomeMain;
