import { useState } from 'react';

export default function SimplicityFAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
     {
      question: "Is FLYT-I DGCA compliant?",
      answer: "Yes, FLYT-I meets DGCA compliance standards."
    },
    {
      question: "Can FLYT-I be used for RPTO?",
      answer: "Yes, it is approved for RPTO (Remote Pilot Training Organisation) use."
    },
    {
      question: "Can it be flown indoors and outdoors?",
      answer: "It is designed for outdoor operation only, preferably in open areas."
    },
    {
      question: "What tools/software are supported?",
      answer: "FLYT-I supports only the pre-installed software provided in the package."
    },
    {
      question: "Can the drone be repaired easily?",
      answer: "Yes, the drone is designed for easy maintenance and repair."
    },
    {
      question: "Does it come with safety protocols?",
      answer: "Yes, it is equipped with all mandatory safety features as per aviation guidelines."
    },
    {
      question: "What flight modes are supported?",
      answer: "The drone supports Loiter, Altitude Hold, and Stabilize flight modes."
    },
    {
      question: "What is the warranty policy?",
      answer: "FLYT-I comes with a 1-year warranty covering manufacturing defects, as per the terms outlined in the warranty policy document provided at purchase."
    }
  ];

  const handleClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Split FAQs into two columns for larger screens
  const leftColumnFAQs = faqs.slice(0, 4);
  const rightColumnFAQs = faqs.slice(4, 8);

  const FAQColumn = ({ faqList, startIndex }) => (
    <div className="space-y-3 sm:space-y-4">
      {faqList.map((faq, index) => {
        const actualIndex = startIndex + index;
        return (
          <div
            key={actualIndex}
            className="border border-gray-800 rounded-lg sm:rounded-xl lg:rounded-2xl bg-black/40 backdrop-blur-sm overflow-hidden transition-all duration-300"
          >
            <button 
              className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-200"
              onClick={() => handleClick(actualIndex)}
            >
              <span className="text-sm sm:text-base lg:text-lg font-medium text-white pr-3 sm:pr-4 font-raleway leading-tight">
                {faq.question}
              </span>
              <div className="flex-shrink-0">
                <div
                  className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center transform transition-transform duration-300 ${
                    expandedIndex === actualIndex ? 'rotate-45' : 'rotate-0'
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
            </button>
            
            {/* Answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                expandedIndex === actualIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-5 lg:pb-6">
                <div className="h-px bg-gray-800 mb-4 sm:mb-5 lg:mb-6"></div>
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
        <div className="w-full max-w-none mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 xs:py-12 sm:py-16 lg:py-20">
          {/* Header - Fully responsive */}
          <div className="text-center mb-8 xs:mb-12 sm:mb-16">
            <p className="text-gray-400 text-xs xs:text-sm mb-3 xs:mb-4 tracking-wide font-raleway">
              Frequently Asked Questions
            </p>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light mb-4 xs:mb-6 font-raleway leading-tight px-2 sm:px-0">
              Everything you <em className="italic text-gray-300">need</em> to know.
            </h1>
            <p className="text-gray-400 text-sm xs:text-base sm:text-lg lg:text-xl max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl mx-auto font-raleway leading-relaxed px-2 sm:px-0">
              Got questions? We've got answers. Here's everything you need to know about FLYT-I.
            </p>
          </div>

          {/* FAQ Items - Responsive grid */}
          <div className="max-w-7xl mx-auto">
            {/* Mobile: Single column, all FAQs */}
            <div className="block lg:hidden">
              <div className="space-y-3 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-800 rounded-lg sm:rounded-xl bg-black/40 backdrop-blur-sm overflow-hidden transition-all duration-300"
                  >
                    <button 
                      className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-200"
                      onClick={() => handleClick(index)}
                    >
                      <span className="text-sm sm:text-base font-medium text-white pr-3 sm:pr-4 font-raleway leading-tight">
                        {faq.question}
                      </span>
                      <div className="flex-shrink-0">
                        <div
                          className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center transform transition-transform duration-300 ${
                            expandedIndex === index ? 'rotate-45' : 'rotate-0'
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

            {/* Desktop: Two columns */}
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6 xl:gap-8">
              {/* Left Column */}
              <FAQColumn faqList={leftColumnFAQs} startIndex={0} />
              
              {/* Right Column */}
              <FAQColumn faqList={rightColumnFAQs} startIndex={4} />
            </div>
          </div>
        </div>
        
        {/* Custom CSS for responsive design */}
        <style jsx>{`
          /* Custom responsive breakpoint for very small devices */
          @media (max-width: 475px) {
            .xs\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
            .xs\\:py-12 { padding-top: 3rem; padding-bottom: 3rem; }
            .xs\\:mb-12 { margin-bottom: 3rem; }
            .xs\\:text-sm { font-size: 0.875rem; line-height: 1.25rem; }
            .xs\\:mb-4 { margin-bottom: 1rem; }
            .xs\\:text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
            .xs\\:mb-6 { margin-bottom: 1.5rem; }
            .xs\\:text-base { font-size: 1rem; line-height: 1.5rem; }
            .xs\\:max-w-sm { max-width: 24rem; }
            .xs\\:space-y-4 > :not([hidden]) ~ :not([hidden]) { 
              --tw-space-y-reverse: 0; 
              margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse))); 
              margin-bottom: calc(1rem * var(--tw-space-y-reverse)); 
            }
          }
          
          /* Enhanced mobile optimizations */
          @media (max-width: 640px) {
            .leading-tight {
              line-height: 1.25;
            }
          }
          
          /* Tablet optimizations */
          @media (min-width: 641px) and (max-width: 1023px) {
            .sm\\:rounded-xl { border-radius: 0.75rem; }
            .sm\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
            .sm\\:py-5 { padding-top: 1.25rem; padding-bottom: 1.25rem; }
            .sm\\:text-base { font-size: 1rem; line-height: 1.5rem; }
            .sm\\:w-6 { width: 1.5rem; }
            .sm\\:h-6 { height: 1.5rem; }
            .sm\\:pr-4 { padding-right: 1rem; }
            .sm\\:pb-5 { padding-bottom: 1.25rem; }
            .sm\\:mb-5 { margin-bottom: 1.25rem; }
            .sm\\:space-y-4 > :not([hidden]) ~ :not([hidden]) { 
              --tw-space-y-reverse: 0; 
              margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse))); 
              margin-bottom: calc(1rem * var(--tw-space-y-reverse)); 
            }
          }
        `}</style>
      </div>
    </>
  );
}