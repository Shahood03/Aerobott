import React from 'react';

const HaveQuestions = () => {
  return (
    <div className="bg-gray-900 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
          Have Questions? We're Here to Help!
        </h1>

        {/* Description */}
        <div className="mb-12">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Curious about the camp, the workshop schedule, or whether your child is the right fit?
          </p>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Just drop us a message or give us a quick call—we'd love to chat!
          </p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          {/* Email Button */}
          <a 
            href="mailto:info@aerocamp.in" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-full flex items-center transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            info@aerocamp.com
          </a>

          {/* Phone Button */}
          <a 
            href="tel:+919004711184" 
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-full flex items-center transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            +91 9004711184
          </a>
        </div>

        {/* Bottom Text */}
        <p className="text-gray-300 text-lg md:text-xl font-medium">
          Let's make this summer smart, creative, and unforgettable for your young innovator!
        </p>
      </div>
    </div>
  );
};

export default HaveQuestions;