import { useState } from 'react';

export default function SimplicityFAQ() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const faqs = [
     {
      question: "Is this training recognized by DGCA?",
      answer: "Yes, the training is recognized by the Directorate General of Civil Aviation (DGCA)."
    },
    {
      question: "Do I need to have prior drone flying experience?",
      answer: "No prior experience is required. This course is ideal for beginners who wish to develop their skills and pursue a career in the drone aviation industry. It is also suitable for enthusiasts interested in exploring drone technology for the first time."
    },
    {
      question: "What certification will I get?",
      answer: "You will receive a DGCA-recognized certificate upon successful completion of the course."
    },
    {
      question: "What drones will I train on?",
      answer: "You will receive hands-on training on industry-standard drones of your respective class of training."
    },
    {
      question: "Is there a written or practical test?",
      answer: "Yes, the course includes both written and practical assessments."
    },
    {
      question: "What is the minimum age to enroll?",
      answer: "The eligibility requirements are: Minimum Age: 18 years, Education: At least 10th grade, Medical: Valid Class 3 Medical Certificate, Identification: Passport, Driving License, Voter ID Card or Ration Card."
    },
    {
      question: "Will I receive support in registering for DGCA portals?",
      answer: "Yes, you will be guided through the DGCA portal registration process as part of the training support."
    },
    {
      question: "Are job placements provided after the course?",
      answer: "Yes, graduates of at least 10th grade can pursue entry-level opportunities as drone pilots in photography, videography, inspections, and recreational flying. The course also serves as a pathway to advanced drone certifications. The certificate is valid for 10 years."
    },
    {
      question: "Is accommodation provided for outstation students?",
      answer: "Yes, accommodation is available for outstation students at an additional cost."
    },
    {
      question: "How long is the course duration?",
      answer: "The course duration varies based on the type of certification you choose. Typically, basic drone pilot certification takes 5-7 days of intensive training including both theoretical and practical sessions."
    }
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // Split FAQs into two columns for desktop
  const leftColumnFAQs = faqs.slice(0, 5);
  const rightColumnFAQs = faqs.slice(5, 10);

  const FAQColumn = ({ faqList, startIndex }) => (
    <div className="space-y-3 sm:space-y-4">
      {faqList.map((faq, index) => {
        const actualIndex = startIndex + index;
        return (
          <div
            key={actualIndex}
            className="border border-gray-800 rounded-xl sm:rounded-2xl bg-black/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
            onMouseEnter={() => handleMouseEnter(actualIndex)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-left flex items-center justify-between">
              <span className="text-base sm:text-lg font-medium text-white pr-3 sm:pr-4 font-raleway leading-tight">
                {faq.question}
              </span>
              <div className="flex-shrink-0">
                <div
                  className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center transform transition-transform duration-300 ${
                    hoveredIndex === actualIndex ? 'rotate-45' : 'rotate-0'
                  }`}
                >
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
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
            </div>
            
            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                hoveredIndex === actualIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6">
                <div className="h-px bg-gray-800 mb-4 sm:mb-5 md:mb-6"></div>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-raleway">
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
    <div className="mt-10 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="w-full max-w-none mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 tracking-wide font-raleway">Frequently Asked Questions</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-5 md:mb-6 font-raleway px-2 sm:px-0">
            Everything you <em className="italic text-gray-300">need</em> to know.
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-raleway px-4 sm:px-0">
            Got questions? We've got answers. Here's everything you need to know before getting started.
          </p>
        </div>

        {/* FAQ Items - Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Mobile/Tablet: Single Column, Desktop: Left Column */}
          <div className="lg:hidden">
            {/* Single column layout for mobile/tablet */}
            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-800 rounded-xl sm:rounded-2xl bg-black/40 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-left flex items-center justify-between">
                    <span className="text-base sm:text-lg font-medium text-white pr-3 sm:pr-4 font-raleway leading-tight">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      <div
                        className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center transform transition-transform duration-300 ${
                          hoveredIndex === index ? 'rotate-45' : 'rotate-0'
                        }`}
                      >
                        <svg
                          className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400"
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
                  </div>
                  
                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      hoveredIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-5 md:pb-6">
                      <div className="h-px bg-gray-800 mb-4 sm:mb-5 md:mb-6"></div>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-raleway">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Two Column Layout */}
          <div className="hidden lg:contents">
            {/* Left Column */}
            <FAQColumn faqList={leftColumnFAQs} startIndex={0} />
            
            {/* Right Column */}
            <FAQColumn faqList={rightColumnFAQs} startIndex={5} />
          </div>
        </div>
      </div>
    </div>
  );
}