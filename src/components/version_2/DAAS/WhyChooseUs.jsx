import React from "react";

// Desktop Component - Exact Original Design
const WhyChooseUsDesktop = () => {
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
    <section className="hidden lg:block w-full bg-black pt-16 pb-16 px-16 flex flex-col items-center justify-center">
      <div className="w-full text-center h-full flex flex-col justify-center">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-3xl mb-16 mx-auto">
          
          {/* Main Heading */}
          <div className="w-full">
            <h2 className="text-center text-[#d5dbe6] text-4xl md:text-5xl font-raleway font-medium leading-tight">
              Why Choose{' '}
              <span className="font-raleway font-normal text-[#d5dbe6]">Us</span>
            </h2>
          </div>
          
          {/* Subtitle */}
          <div className="w-full">
            <p className="text-center text-[#d5dbe6]/60 text-base font-raleway leading-relaxed">
              Experience the advantages of our comprehensive aerial solutions
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Features */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-purple-500 text-[#d5dbe6]/80 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white"
              >
                <h3 className="font-semibold text-lg mb-2 font-raleway">{feature.title}</h3>
                <p className="text-sm leading-relaxed font-raleway">{feature.text}</p>
              </div>
            ))}
          </div>
          
          {/* Image */}
          <div className="flex justify-center items-center">
            <img
              src="/images/industries/i1.png"
              alt="Why Choose Us"
              className="rounded-2xl object-cover w-full h-full max-h-[565px]"
              onError={(e) => {
                console.error('Failed to load image: /images/WCU.avif');
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Mobile Component
const WhyChooseUsMobile = () => {
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
    <section className="block lg:hidden w-full bg-black px-4 py-12">
      <div className="w-full text-center flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-3 w-full mb-10">
          
          {/* Main Heading */}
          <div className="w-full">
            <h2 className="text-center text-[#d5dbe6] text-3xl sm:text-4xl font-medium leading-tight">
              Why Choose{' '}
              <span className="font-normal text-[#d5dbe6]">Us</span>
            </h2>
          </div>
          
          {/* Subtitle */}
          <div className="w-full px-2">
            <p className="text-center text-[#d5dbe6]/60 text-sm sm:text-base leading-relaxed">
              Experience the advantages of our comprehensive aerial solutions
            </p>
          </div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="flex flex-col gap-8 w-full">
          
          {/* Image Section - Moved to top */}
          <div className="w-full h-[250px] sm:h-[300px]">
            <img
              src="/images/industries/i1.avif"
              alt="Why Choose Us"
              className="rounded-2xl object-cover w-full h-full"
              onError={(e) => {
                console.error('Failed to load image: /images/WCU.avif');
                e.target.style.display = 'none';
              }}
            />
          </div>
          
          {/* Features - Single column on mobile */}
          <div className="grid grid-cols-1 gap-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-purple-500 text-[#d5dbe6]/80 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white"
              >
                <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
                <p className="text-sm leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Tablet Component
const WhyChooseUsTablet = () => {
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
    <section className="hidden md:block lg:hidden w-full bg-black px-8 py-16">
      <div className="w-full text-center flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-3 w-full max-w-2xl mb-12 mx-auto">
          
          {/* Main Heading */}
          <div className="w-full">
            <h2 className="text-center text-[#d5dbe6] text-4xl font-medium leading-tight">
              Why Choose{' '}
              <span className="font-normal text-[#d5dbe6]">Us</span>
            </h2>
          </div>
          
          {/* Subtitle */}
          <div className="w-full">
            <p className="text-center text-[#d5dbe6]/60 text-base leading-relaxed">
              Experience the advantages of our comprehensive aerial solutions
            </p>
          </div>
        </div>

        {/* Tablet Layout - Stacked with more spacing */}
        <div className="flex flex-col gap-10 w-full max-w-4xl mx-auto">
          
          {/* Image Section */}
          <div className="w-full h-[350px]">
            <img
              src="/images/industries/i1.avif"
              alt="Why Choose Us"
              className="rounded-2xl object-cover w-full h-full"
              onError={(e) => {
                console.error('Failed to load image: /images/WCU.avif');
                e.target.style.display = 'none';
              }}
            />
          </div>
          
          {/* Features - 2 columns on tablet */}
          <div className="grid grid-cols-2 gap-5">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-purple-500 text-[#d5dbe6]/80 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white"
              >
                <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
                <p className="text-sm leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Component that renders all views
const WhyChooseUs = () => {
  return (
    <>
      <WhyChooseUsDesktop />
      <WhyChooseUsTablet />
      <WhyChooseUsMobile />
    </>
  );
};

export default WhyChooseUs;