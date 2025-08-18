import React, { useState, useEffect } from 'react';

const WhyChooseAerobottSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      title: "Globally Recognized Excellence",
      description: "Our pursuit of quality and innovation has earned us recognition from the World Book of Records, reaffirming our leadership in drone education.",
      bgColor: "bg-indigo-200"
    },
    {
      title: "Industry-Leading Training Programs",
      description: "Whether you're a beginner exploring drones or a professional seeking advanced commercial pilot certification, our courses are designed to equip you for real-world success.",
      bgColor: "bg-white"
    },
    {
      title: "Expanding Nationwide Footprint",
      description: "With training hubs in Gurgaon, Meerut, Nagpur, Indore, and Kolkata—and new centers launching soon in Guwahati, Jaipur, Jammu, Madurai, Raipur, Bhubaneswar, Goa, Patna, Lucknow, Banaras, and Dehradun—we're making drone training accessible across India.",
      bgColor: "bg-white"
    },
    {
      title: "Cutting-Edge Technology & Tools",
      description: "Train with the latest drones, high-resolution sensors, precision cameras, and modern IT systems—ensuring hands-on experience with today's industry standards.",
      bgColor: "bg-white"
    },
    {
      title: "Learn from Certified Experts",
      description: "Our DGCA-certified instructors bring years of real-world drone operation and training experience, guiding you every step of the way to become a confident drone pilot.",
      bgColor: "bg-white"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="bg-black text-white  sm:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-16 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Import Raleway font */}
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      {/* Background blur effects - responsive */}
      <div className="absolute w-[250px] sm:w-[350px] lg:w-[500px] h-[200px] sm:h-[300px] lg:h-[400px] left-[-100px] sm:left-[-150px] lg:left-[-200px] top-[150px] sm:top-[200px] lg:top-[300px] bg-indigo-600 rounded-full blur-[90px] sm:blur-[135px] lg:blur-[180px] opacity-20" />
      <div className="absolute w-[300px] sm:w-[450px] lg:w-[600px] h-[250px] sm:h-[375px] lg:h-[500px] right-[-125px] sm:right-[-185px] lg:right-[-250px] top-[100px] sm:top-[150px] lg:top-[200px] bg-purple-600 rounded-full blur-[100px] sm:blur-[150px] lg:blur-[200px] opacity-15" />
      <div className="absolute w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] left-[50%] bottom-[-75px] sm:bottom-[-112px] lg:bottom-[-150px] bg-blue-600 rounded-full blur-[80px] sm:blur-[120px] lg:blur-[160px] opacity-10" />

      <div className="w-full h-full flex flex-col justify-center relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-[#d5dbe6] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-raleway font-medium leading-tight mb-4">
            Why Choose Aerobott
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start max-w-7xl mx-auto w-full">
          
          {/* Left Side - Feature Cards */}
          <div className="w-full flex flex-col justify-start items-center gap-4 sm:gap-5">
            {features.map((feature, index) => (
              <div key={index} className={`w-full max-w-[620px] min-h-24 sm:min-h-32 pl-4 sm:pl-5 pr-2 sm:pr-2.5 py-3 sm:py-4 ${
                index === activeIndex ? 'bg-indigo-200' : 'bg-white'
              } rounded-2xl flex justify-center items-center gap-4 sm:gap-6 transition-colors duration-700 ease-in-out`}>
                <div className="flex-1 flex justify-start items-start gap-3 sm:gap-6">
                  {/* Icon Container */}
                  <div className="w-8 sm:w-10 h-8 sm:h-10 relative flex-shrink-0">
                    <img 
                      src="/images/element/icon2.png" 
                      alt={feature.title}
                      className="w-8 sm:w-10 h-8 sm:h-10 object-contain"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-center items-start gap-1 sm:gap-2">
                    <div className="w-full flex justify-start items-center gap-3">
                      <div className="text-black text-base sm:text-lg lg:text-xl font-raleway font-medium leading-tight">
                        {feature.title}
                      </div>
                    </div>
                    <div className="w-full text-black/60 text-sm sm:text-base font-raleway leading-relaxed">
                      {feature.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Image */}
          <div className="relative h-full w-full flex justify-center xl:justify-end">
            <img 
              className="w-full max-w-[620px] h-[400px] sm:h-[500px] lg:h-[600px] xl:h-full rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] object-cover" 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=620&h=776&fit=crop" 
              alt="Why Choose Aerobott - Professional team member"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAerobottSection;