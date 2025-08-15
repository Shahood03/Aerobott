
import DJIBanner from "./HeroSection";
import ProductCard from "./DroneShowcase"; // <-- Assuming you meant to import this


import ProductFieldsSection from "./ProductFieldsSection";
import SolutionsPage from "./SolutionsCard";
import DronePage from "./DronePage";
import ProductsPageMain from "../products/ProductsPageMain/ProductsPageMain";
import SolutionsAcrossIndustries from "./SolutionsAcrossIndustries";
import DroneProductsPage from "./DroneProductsPage";
import AerobottPage from "./AerobottPage";
import NewsletterForm from "./NewsletterForm";
import ContactMapComponent from "./ContactMapComponent";
import NewProductsPage from "./ProductsPage";


// import ProductsPage from "./ProductsPage";

function Home() {
  return (
    <div>
      <DJIBanner />
      <SolutionsAcrossIndustries/>
      {/* <DroneProductsPage/> */}
      <NewProductsPage/>
      <AerobottPage/>
     
      <NewsletterForm/>
      <ContactMapComponent/>
      {/* <ProductCard /> */}
      {/* <DronePage/> */}
    
      {/* <ProductFieldsSection/> */}
      {/* <SolutionsPage/> */}
      {/* <ProductsPageMain/> */}
      {/* <TechSolutionsUI /> */}

    {/* <ProductsPage /> */}
    </div>
  );
}

export default Home;
