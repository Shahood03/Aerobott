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
    <section className="w-full bg-black min-h-screen px-16 flex flex-col items-center justify-center">
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
                console.error('Failed to load image: /images/WCU.jpg');
                e.target.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;