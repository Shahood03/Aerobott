import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsSection = () => {
  const navigate = useNavigate();

  const handleProductNavigation = (productPath) => {
    navigate(productPath);
  };

  return (
    <section 
      id="products" 
      className="relative flex flex-col items-center justify-center w-full bg-black overflow-hidden px-4 sm:px-6 md:px-8 lg:px-16 z-2 pb-8 sm:pb-12 lg:pb-16 pt-8 sm:pt-12 lg:pt-16"
    >
      {/* Background gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/7 to-transparent z-1"></div>
      
      {/* Background glow effect */}
      <div className="absolute top-[-249px] left-1/2 transform -translate-x-1/2 w-[793px] h-[499px] bg-gradient-radial from-white/10 to-transparent opacity-10 rounded-lg pointer-events-none z-1"></div>
      
      <div className="flex flex-col items-center justify-center gap-8 sm:gap-11 w-full relative z-1">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-3xl">
          
          {/* Main Heading */}
          <div className="w-full">
            <h2 className="text-center text-[#d5dbe6] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-raleway font-medium leading-tight">
              Our{' '}
              <span className="font-raleway font-normal text-[#d5dbe6]">Products</span>
            </h2>
          </div>
          
          {/* Subtitle */}
          <div className="w-full">
            <p className="text-center text-[#d5dbe6]/60 text-sm sm:text-base font-raleway leading-relaxed px-2">
              Advanced drone technology engineered for excellence
            </p>
          </div>
        </div>

        {/* Products Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 w-full">
          <ProductCard
            title="FLYT-I"
            description="Next-generation intelligent flight system with AI-powered autonomous navigation and real-time data processing capabilities"
            imageUrl="/images/products/p4.jpg"
            altText="FLYT-1 autonomous drone with AI navigation"
            badge="AI-Powered"
            customHeight="h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px]"
            onKnowMore={() => handleProductNavigation('/products/flyt-i')}
          />

          <ProductCard
            title="Survey Master Pro"
            description="Professional-grade surveying drone with high-precision mapping, LiDAR integration, and advanced geospatial analytics"
            imageUrl="/images/products/p2.avif"
            altText="Survey Master Pro professional mapping drone"
            badge="Professional"
            customHeight="h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px]"
            onKnowMore={() => handleProductNavigation('/products/survey-master-pro')}
          />

          <ProductCard
            title="Aero Agri"
            description="Specialized agricultural drone with precision spraying, crop monitoring, and smart farming automation solutions"
            imageUrl="/images/products/p3.jpg"
            altText="Aero Agri agricultural drone for precision farming"
            badge="Agriculture"
            customHeight="h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px]"
            onKnowMore={() => handleProductNavigation('/products/aero-agri')}
          />
        </div>

      </div>
    </section>
  );
};

// Product Card Component with customizable dimensions and Know More button
const ProductCard = ({ 
  title, 
  description, 
  imageUrl, 
  altText, 
  badge, 
  customHeight = "h-80", // Default height
  customWidth = "w-full", // Default width
  onKnowMore
}) => {
  return (
    <div className={`group relative ${customWidth} ${customHeight} bg-black border border-white/7 rounded-2xl overflow-hidden shadow-inner hover:shadow-lg transition-all duration-300 will-change-transform`}>
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <img 
          src={imageUrl} 
          alt={altText}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

      {/* Badge */}
      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
        <span className="px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-raleway font-medium rounded-full border border-white/30">
          {badge}
        </span>
      </div>

      {/* Text Content positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-3 p-4 sm:p-6 lg:p-7 text-center bg-gradient-to-t from-black/90 via-black/70 to-transparent">
        <div className="relative z-10">
          <h3 className="text-white text-lg sm:text-xl font-raleway font-medium leading-tight mb-1.5 sm:mb-2">
            {title}
          </h3>
          <p className="text-white/90 text-sm sm:text-base font-raleway leading-relaxed text-center mb-3 sm:mb-4">
            {description}
          </p>
          
          {/* Know More Button - styled similar to Explore AI Solutions */}
          <div className="relative inline-block">
            <button 
              onClick={onKnowMore}
              className="relative px-4 sm:px-6 py-2 sm:py-3 bg-indigo-600 rounded-xl shadow-[0px_0px_28.6px_0px_rgba(58,72,224,0.5)] border border-blue-300/30 text-white text-xs sm:text-sm font-medium overflow-hidden group/btn hover:bg-indigo-700 transition-all duration-300 font-raleway"
            >
              {/* Button glow effects */}
              <div className="absolute w-16 sm:w-24 h-6 sm:h-8 left-2 sm:left-3 top-4 sm:top-6 bg-blue-300/20 rounded-full blur-md" />
              <div className="absolute inset-0 bg-gradient-radial from-black/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              
              <span className="relative z-10">Know More</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hover effect corner accents */}
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-l-2 border-white/0 group-hover:border-white/40 transition-all duration-300"></div>
      <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-r-2 border-white/0 group-hover:border-white/40 transition-all duration-300"></div>
    </div>
  );
};

export default ProductsSection;