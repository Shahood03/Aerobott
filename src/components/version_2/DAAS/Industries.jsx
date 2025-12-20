import React from "react";

// Note: Make sure to include Raleway font in your project
// Add this to your index.html or import in your CSS:
// <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
// And configure Tailwind to use Raleway in your tailwind.config.js:
// fontFamily: { 'raleway': ['Raleway', 'sans-serif'] }

const Industries = () => {
  const industries = [
    { name: "Agriculture", image: "/images/industries/agriculture.avif" },
    { name: "GIS", image: "/images/industries/GIS.avif" },
    { name: "Defence", image: "/images/industries/defence.avif" },
    { name: "Energy And Utility", image: "/images/industries/telecommunication.avif" },
    { name: "Mining and Metals", image: "/images/industries/MaM.avif" },
    { name: "Security and Surveillance", image: "/images/industries/SaS.avif" }
  ];

  return (
    <section className="bg-black text-white  px-16 flex flex-col items-center justify-center">
      <div className="w-full text-center h-full flex flex-col justify-center">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-3xl mb-16 mx-auto">
          
          {/* Main Heading */}
          <div className="w-full">
            <h2 className="text-center text-[#d5dbe6] text-4xl md:text-5xl font-raleway font-medium leading-tight">
              Industries
            </h2>
          </div>
          
          {/* Subtitle */}
          <div className="w-full">
            <p className="text-center text-[#d5dbe6]/60 text-base font-raleway leading-relaxed">
              Comprehensive solutions across diverse sectors
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {industries.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer"
            >
              <div className="relative w-full h-80">
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    console.error(`Failed to load image: ${item.image}`);
                    e.target.style.display = 'none';
                  }}
                />
                {/* Glassy Text Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-md p-4">
                  <p className="text-lg font-semibold font-raleway">{item.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;

