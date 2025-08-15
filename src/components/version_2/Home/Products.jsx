import React from 'react';

const ProductsSection = () => {
  return (
    <section 
      id="products" 
      className="relative flex flex-col items-center justify-center w-full  bg-[#04070d] overflow-hidden px-16 z-2 pb-16 pt-16"
    >
      {/* Background gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/7 to-transparent z-1"></div>
      
      {/* Background glow effect */}
      <div className="absolute top-[-249px] left-1/2 transform -translate-x-1/2 w-[793px] h-[499px] bg-gradient-radial from-white/10 to-transparent opacity-10 rounded-lg pointer-events-none z-1"></div>
      
      <div className="flex flex-col items-center justify-center gap-11 w-full  relative z-1">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-3xl">
          
          {/* Main Heading */}
          <div className="w-full">
            <h2 className="text-center text-[#d5dbe6] text-4xl md:text-5xl font-raleway font-medium leading-tight">
              Our{' '}
              <span className="font-raleway font-normal text-[#d5dbe6]">Products</span>
            </h2>
          </div>
          
          {/* Subtitle */}
          <div className="w-full">
            <p className="text-center text-[#d5dbe6]/60 text-base font-raleway leading-relaxed">
              Advanced drone technology engineered for excellence
            </p>
          </div>
        </div>

      {/* Products Cards Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full">
  <ProductCard
    title="FLYT-I"
    description="Next-generation intelligent flight system with AI-powered autonomous navigation and real-time data processing capabilities"
    imageUrl="/images/products/p4.jpg"
    altText="FLYT-1 autonomous drone with AI navigation"
    badge="AI-Powered"
    customHeight="h-[550px]"
  />

  <ProductCard
    title="Survey Master Pro"
    description="Professional-grade surveying drone with high-precision mapping, LiDAR integration, and advanced geospatial analytics"
    imageUrl="/images/products/p2.png"
    altText="Survey Master Pro professional mapping drone"
    badge="Professional"
    customHeight="h-[550px]"
  />

  <ProductCard
    title="Aero Agri"
    description="Specialized agricultural drone with precision spraying, crop monitoring, and smart farming automation solutions"
    imageUrl="/images/products/p3.jpg"
    altText="Aero Agri agricultural drone for precision farming"
    badge="Agriculture"
    customHeight="h-[550px]"
  />
</div>

      </div>
    </section>
  );
};

// Product Card Component with customizable dimensions
const ProductCard = ({ 
  title, 
  description, 
  imageUrl, 
  altText, 
  badge, 
  customHeight = "h-80", // Default height
  customWidth = "w-full" // Default width
}) => {
  return (
    <div className={`group relative ${customWidth} ${customHeight} bg-[#04070d] border border-white/7 rounded-2xl overflow-hidden shadow-inner hover:shadow-lg transition-all duration-300 will-change-transform`}>
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
      <div className="absolute top-4 right-4 z-20">
        <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-raleway font-medium rounded-full border border-white/30">
          {badge}
        </span>
      </div>

      {/* Text Content positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-1.5 p-7 text-center bg-gradient-to-t from-black/80 via-black/60 to-transparent">
        <div className="relative z-10">
          <h3 className="text-white text-xl font-raleway font-medium leading-tight mb-2">
            {title}
          </h3>
          <p className="text-white/90 text-base font-raleway leading-relaxed text-center">
            {description}
          </p>
        </div>
      </div>

      {/* Hover effect corner accents */}
      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-white/0 group-hover:border-white/40 transition-all duration-300"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-white/0 group-hover:border-white/40 transition-all duration-300"></div>
    </div>
  );
};

export default ProductsSection;