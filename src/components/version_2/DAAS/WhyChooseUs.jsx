import React from "react";

// Note: Make sure to include Raleway font in your project
// Add this to your index.html or import in your CSS:
// <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
// And configure Tailwind to use Raleway in your tailwind.config.js:
// fontFamily: { 'raleway': ['Raleway', 'sans-serif'] }

const WhyChooseUs = () => {
  const features = [
    {
      title: "Lower Upfront Costs",
      text: "Eliminate the need to invest in expensive drone hardware, trained pilots, analytics software, and visualization platforms—we've got it all covered."
    },
    {
      title: "Faster Time-to-Value & Higher ROI",
      text: "Get immediate access to aerial data and insights to accelerate project timelines and decision-making—maximizing return on every flight."
    },
    {
      title: "Effortless Scalability",
      text: "Scale drone operations as your business grows. Add new capabilities, fly more frequently, or expand to new sites without infrastructure overhead."
    },
    {
      title: "Built-In Drone Expertise",
      text: "Leverage Aerobott's technical and operational know-how. From mission planning to AI-powered analysis, we optimize every step for better outcomes."
    },
    {
      title: "Lower Operational Risk",
      text: "Avoid the financial, compliance, and safety risks of managing drones in-house. We handle permissions, flight safety, and data integrity."
    },
    {
      title: "Fully Customizable Solutions",
      text: "Our services are tailored to fit your industry, goals, and use case—whether it's surveying, inspection, agriculture, or surveillance."
    }
  ];

  return (
    <section className="w-full bg-black min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 flex flex-col items-center justify-center">
      <div className="w-full text-center h-full flex flex-col justify-center max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-3xl mb-8 sm:mb-12 md:mb-16 mx-auto">
          
          {/* Main Heading */}
          <div className="w-full px-2 sm:px-0">
            <h2 className="text-center text-[#d5dbe6] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-raleway font-medium leading-tight">
              Why Choose{' '}
              <span className="font-raleway font-normal text-[#d5dbe6]">Us</span>
            </h2>
          </div>
          
          {/* Subtitle */}
          <div className="w-full px-4 sm:px-0">
            <p className="text-center text-[#d5dbe6]/60 text-sm sm:text-base md:text-lg font-raleway leading-relaxed">
              Experience the advantages of our comprehensive aerial solutions
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start lg:items-center w-full">
          
          {/* Features */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 md:p-6 rounded-xl border border-purple-500 text-[#d5dbe6]/80 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:scale-105"
                >
                  <h3 className="font-semibold text-base sm:text-lg mb-2 font-raleway">{feature.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed font-raleway">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[565px]">
              <img
                src="/images/industries/i1.png"
                alt="Why Choose Us"
                className="rounded-xl sm:rounded-2xl object-cover w-full h-full shadow-lg"
                onError={(e) => {
                  console.error('Failed to load image: /images/industries/i1.png');
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;