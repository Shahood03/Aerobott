import React from 'react';

const ProgrammeHighlights = () => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Programme Highlights
          </h1>
          <p className="text-lg text-gray-600">
            What makes our AI Workshop special
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Moment of Pride */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="bg-purple-100 rounded-lg p-4 w-fit mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 19H5V5H19V19M7 7H17V9H7V7M7 11H17V13H7V11M7 15H14V17H7V15Z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-purple-700 mb-3">
              Moment of Pride
            </h3>
            <p className="text-gray-600 text-sm">
              Your Child's Project Will Be Featured in The AeroCamp – Digital
            </p>
          </div>

          {/* Expert-Led Workshop */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="bg-purple-100 rounded-lg p-4 w-fit mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3H21C21.6 3 22 3.4 22 4V20C22 20.6 21.6 21 21 21H3C2.4 21 2 20.6 2 20V4C2 3.4 2.4 3 3 3M20 8H4V19H20V8M4 5V6H20V5H4M10 10H14V11H10V10M10 12H14V13H10V12M5 17H19V15H5V17Z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-purple-700 mb-3">
              Expert-Led Workshop
            </h3>
            <p className="text-gray-600 text-sm">
              20+ Hours of Transformative Learning with Industry experts
            </p>
          </div>

          {/* Interactive Learning */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="bg-blue-100 rounded-lg p-4 w-fit mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L19 9L14.74 13.25L16 19L12 16.9L8 19L9.26 13.25L5 9L10.91 8.26L12 2Z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Interactive Learning
            </h3>
            <p className="text-gray-600 text-sm">
              6 engaging activities designed for practical application
            </p>
          </div>

          {/* Cutting-Edge AI Tools */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="bg-green-100 rounded-lg p-4 w-fit mb-6">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L19 9L14.74 13.25L16 19L12 16.9L8 19L9.26 13.25L5 9L10.91 8.26L12 2M14.5 14.5L15.5 16L17.5 15.5L16.5 13.5L14.5 14.5M9.5 9.5L8.5 8L6.5 8.5L7.5 10.5L9.5 9.5M12 6L11 7.5L12.5 8.5L13.5 7L12 6M12 18L13 16.5L11.5 15.5L10.5 17L12 18Z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-green-700 mb-3">
              Cutting-Edge AI Tools
            </h3>
            <p className="text-gray-600 text-sm">
              Hands-On to 10+ AI tools to elevate your kid's learning
            </p>
          </div>

          {/* Same-Day Class Recordings */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="bg-orange-100 rounded-lg p-4 w-fit mb-6">
              <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-orange-700 mb-3">
              Same-Day Class Recordings
            </h3>
            <p className="text-gray-600 text-sm">
              Recordings are made available the same day and stay accessible for a full year!
            </p>
          </div>

          {/* TOI Certification */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="bg-red-100 rounded-lg p-4 w-fit mb-6">
              <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 4C16.6 4 17 4.4 17 5S16.6 6 16 6H12C11.4 6 11 5.6 11 5S11.4 4 12 4H16M7 8H17C17.6 8 18 8.4 18 9S17.6 10 17 10H7C6.4 10 6 9.6 6 9S6.4 8 7 8M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2M20 20H4V4H20V20M7 16H17C17.6 16 18 16.4 18 17S17.6 18 17 18H7C6.4 18 6 17.6 6 17S6.4 16 7 16M7 12H17C17.6 12 18 12.4 18 13S17.6 14 17 14H7C6.4 14 6 13.6 6 13S6.4 12 7 12Z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-red-700 mb-3">
           AeroCamp Certification
            </h3>
            <p className="text-gray-600 text-sm">
              Industry-recognized certification from The AeroCamp
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammeHighlights;