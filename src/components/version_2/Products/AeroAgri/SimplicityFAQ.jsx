import { useState } from 'react';

export default function AeroAgriFAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "What crops is Aero Agri suitable for?",
      answer: "Aero Agri is suitable for a wide range of crops including rice, wheat, cotton, sugarcane, maize, soybeans, vegetables, and fruit orchards. Its precision spray system can be configured for different crop heights and canopy densities."
    },
    {
      question: "How much land can it spray per flight?",
      answer: "With its 10L tank capacity and optimized flight planning, Aero Agri can cover approximately 8-12 acres per flight, depending on spray volume requirements and terrain conditions."
    },
    {
      question: "Is it DGCA-compliant and eligible for government subsidies?",
      answer: "Yes, Aero Agri is fully DGCA-compliant and eligible for government subsidies under various agricultural schemes including SMAM, Kisan Drone subsidies, and state-specific agricultural mechanization programs."
    },
    {
      question: "What is the spray tank capacity and maximum payload?",
      answer: "Aero Agri features a 10L smart tank system with a maximum payload capacity of 15kg, allowing for efficient chemical application while maintaining stable flight performance."
    },
    {
      question: "What is the flight time on a full battery?",
      answer: "The drone provides 20-25 minutes of continuous flight time per battery with the swappable battery system allowing for quick changeover and continuous field operations."
    },
    {
      question: "Does it have obstacle detection and avoidance features?",
      answer: "Yes, Aero Agri is equipped with advanced obstacle detection sensors and terrain-aware flying capabilities that automatically adjust altitude for uneven fields and avoid obstacles during flight."
    },
    {
      question: "Does it support automated flight planning and GPS-based spraying?",
      answer: "Yes, the intelligent flight planning system allows you to create and save field maps via the mobile app with GPS-based path automation for precise, repeatable spraying patterns."
    },
    {
      question: "What weather conditions can it safely operate in?",
      answer: "Aero Agri can operate safely in wind speeds up to 15 km/h with its wind-resistant spray technology. It should not be operated during rain, fog, or extreme weather conditions."
    },
    {
      question: "What training and after-sales support are provided?",
      answer: "We provide comprehensive pilot training, operational guidance, and technical support. Our certified training program covers drone operation, maintenance, and regulatory compliance with ongoing technical assistance."
    },
    {
      question: "What is the warranty period and coverage?",
      answer: "Aero Agri comes with a 2-year comprehensive warranty covering manufacturing defects, components, and software. Extended warranty and maintenance packages are also available."
    }
  ];

  const handleClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Split FAQs into two columns for larger screens
  const leftColumnFAQs = faqs.slice(0, 5);
  const rightColumnFAQs = faqs.slice(5, 10);

  const FAQColumn = ({ faqList, startIndex }) => (
    <div className="space-y-3 sm:space-y-4">
      {faqList.map((faq, index) => {
        const actualIndex = startIndex + index;
        return (
          <div
            key={actualIndex}
            className="border border-gray-800 rounded-xl sm:rounded-2xl bg-black/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-gray-700"
          >
            <button 
              className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-left flex items-start sm:items-center justify-between hover:bg-gray-800/50 transition-colors duration-200 group"
              onClick={() => handleClick(actualIndex)}
            >
              <span className="text-sm sm:text-base md:text-lg font-medium text-white pr-3 sm:pr-4 font-raleway leading-snug sm:leading-normal flex-1">
                {faq.question}
              </span>
              <div className="flex-shrink-0 mt-1 sm:mt-0">
                <div
                  className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 ${
                    expandedIndex === actualIndex ? 'rotate-45' : 'rotate-0'
                  }`}
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-gray-300 transition-colors duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </div>
              </div>
            </button>
            
            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedIndex === actualIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6">
                <div className="h-px bg-gray-800 mb-4 sm:mb-5 md:mb-6"></div>
                <p className="text-gray-300 leading-relaxed font-raleway text-sm sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      {/* Load Raleway font from Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" 
        rel="stylesheet" 
      />
      
      <style jsx global>{`
        .font-raleway {
          font-family: 'Raleway', sans-serif;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
        <div className="w-full max-w-none mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 tracking-wide font-raleway uppercase">
              Frequently Asked Questions
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 font-raleway leading-tight">
              Everything you <em className="italic text-gray-300">need</em> to know.
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-raleway leading-relaxed px-4 sm:px-0">
              Got questions? We've got answers. Here's everything you need to know about Aero Agri.
            </p>
          </div>

          {/* FAQ Items - Responsive Layout */}
          <div className="max-w-7xl mx-auto">
            {/* Mobile: Single Column */}
            <div className="block lg:hidden">
              <div className="space-y-3 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-800 rounded-xl sm:rounded-2xl bg-black/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-gray-700"
                  >
                    <button 
                      className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-start justify-between hover:bg-gray-800/50 transition-colors duration-200 group"
                      onClick={() => handleClick(index)}
                    >
                      <span className="text-sm sm:text-base font-medium text-white pr-3 font-raleway leading-snug flex-1">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0 mt-1">
                        <div
                          className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 ${
                            expandedIndex === index ? 'rotate-45' : 'rotate-0'
                          }`}
                        >
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-300 transition-colors duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M12 6v12m6-6H6"
                            />
                          </svg>
                        </div>
                      </div>
                    </button>
                    
                    {/* Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        expandedIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                        <div className="h-px bg-gray-800 mb-4 sm:mb-5"></div>
                        <p className="text-gray-300 leading-relaxed font-raleway text-sm sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: Two Columns */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-6 xl:gap-8">
              {/* Left Column */}
              <FAQColumn faqList={leftColumnFAQs} startIndex={0} />
              
              {/* Right Column */}
              <FAQColumn faqList={rightColumnFAQs} startIndex={5} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}