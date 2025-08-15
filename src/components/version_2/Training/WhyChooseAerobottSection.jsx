import React from 'react';

const WhyChooseAerobottSection = () => {
  const features = [
    {
      title: "Globally Recognized Excellence",
      description: "Our pursuit of quality and innovation has earned us recognition from the World Book of Records, reaffirming our leadership in drone education.",
      bgColor: "bg-indigo-200"
    },
    {
      title: "DGCA Approved",
      description: "We are certified by the Directorate General of Civil Aviation (DGCA), ensuring our training meets the highest national standards for drone operation and safety.",
      bgColor: "bg-white"
    },
    {
      title: "Industry-Leading Training Programs",
      description: "Whether you're a beginner exploring drones or a professional seeking advanced commercial pilot certification, our courses are designed to equip you for real-world success.",
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

  return (
    <section className="bg-black text-white min-h-screen p-12 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Import Raleway font */}
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      {/* Background blur effects */}
      <div className="absolute w-[500px] h-[400px] left-[-200px] top-[300px] bg-indigo-600 rounded-full blur-[180px] opacity-20" />
      <div className="absolute w-[600px] h-[500px] right-[-250px] top-[200px] bg-purple-600 rounded-full blur-[200px] opacity-15" />
      <div className="absolute w-[400px] h-[400px] left-[50%] bottom-[-150px] bg-blue-600 rounded-full blur-[160px] opacity-10" />

      <div className="w-full h-full flex flex-col justify-center relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#d5dbe6] text-4xl md:text-5xl font-raleway font-medium leading-tight mb-4">
            Why Aerobott Academy
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          
          {/* Left Side - Feature Cards */}
          <div className="w-[630px] inline-flex flex-col justify-start items-start gap-5">
            {features.map((feature, index) => (
              <div key={index} className={`w-[620px] min-w-[620px] min-h-32 pl-5 pr-2.5 py-4 ${feature.bgColor} rounded-2xl inline-flex justify-center items-center gap-6`}>
                <div className="flex-1 flex justify-start items-start gap-6">
                  {/* Icon Container */}
                  <div className="w-10 h-10 relative">
                    <img 
                      src="/images/element/icon2.png" 
                      alt={feature.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 inline-flex flex-col justify-center items-start gap-2">
                    <div className="self-stretch inline-flex justify-start items-center gap-3">
                      <div className="justify-start text-black text-xl font-raleway font-medium">
                        {feature.title}
                      </div>
                    </div>
                    <div className="self-stretch text-black/60 text-base font-raleway leading-relaxed">
                      {feature.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Image */}
          <div className="relative h-full">
            <img 
              className="w-[620px] h-full rounded-[40px] object-cover" 
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
