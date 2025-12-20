import React from "react";

// Note: Make sure to include Raleway font in your project
// Add this to your index.html or import in your CSS:
// <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
// And configure Tailwind to use Raleway in your tailwind.config.js:
// fontFamily: { 'raleway': ['Raleway', 'sans-serif'] }

const WhoCanApply = () => {
  const requirements = [
    {
      title: "Age Limit",
      value: "18 to 65 Years",
      icon: "/images/element/age.avif",
      description: "Minimum age requirement for enrollment",
    },
    {
      title: "Education",
      value: "10th Pass",
      icon: "/images/element/edu.avif",
      description: "Basic educational qualification required",
    },
    {
      title: "Valid Govt. ID",
      value: "Aadhaar, Pan, Voter ID, Passport",
      icon: "/images/element/id.avif",
      description: "Any valid government identification document",
    },
    {
      title: "Valid RPC",
      value: "Small or Medium Class",
      icon: "/images/element/certificate.avif", 
      description: "Remote Pilot Certificate in small or medium class drones",
    },
  ];

  return (
    <section className="w-full bg-black py-16 font-raleway">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-4 w-full mb-12">
          <h2 className="text-center text-[#d5dbe6] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-raleway font-medium leading-tight">
            Who Can <span className="font-normal">Apply?</span>
          </h2>
          <p className="text-center text-[#d5dbe6]/60 text-sm sm:text-base font-raleway leading-relaxed px-2">
            Simple eligibility criteria to get started with drone training
          </p>
        </div>

        {/* Requirements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {requirements.map((requirement, index) => (
            <div
              key={index}
              className="requirement-card rounded-2xl p-6 sm:p-8 text-center group bg-[#111] hover:bg-[#1a1a1a] transition-colors duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                  <img
                    src={requirement.icon}
                    alt={`${requirement.title} icon`}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[#d5dbe6] text-lg sm:text-xl font-medium mb-3">
                {requirement.title}
              </h3>

              {/* Value */}
              <p className="text-[#d5dbe6] text-xl sm:text-2xl font-semibold leading-tight mb-4">
                {requirement.value}
              </p>

              {/* Description */}
              <p className="text-[#d5dbe6]/70 text-sm sm:text-base leading-relaxed">
                {requirement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;
