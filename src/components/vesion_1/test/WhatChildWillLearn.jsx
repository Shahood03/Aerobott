import React from 'react';

const WhatChildWillLearn = () => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What You Will Learn
          </h1>
          <p className="text-lg text-gray-600">
            Comprehensive drone knowledge from fundamentals to career opportunities
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Drone Basics */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex items-start mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9M19 9H14V4H5V19L19 19V9Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Drone Basics
                </h3>
                <p className="text-gray-600">
                  Master fundamental flight controls, safety protocols, and essential terminology for drone operation.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-start mb-2">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-700 font-medium text-sm">How it benefits:</span>
              </div>
              <p className="text-gray-700 text-sm ml-7">
                Build confidence with proper handling techniques and develop the foundation for all advanced drone applications and operations.
              </p>
            </div>
          </div>

          {/* Components Breakdown */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex items-start mb-6">
              <div className="bg-cyan-100 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-cyan-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4L13.09,8.26L17,7L14.74,10.74L16,11L13.09,15.74L12,20L10.91,15.74L7,17L9.26,13.26L8,13L10.91,8.26L12,4Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Components Breakdown
                </h3>
                <p className="text-gray-600">
                  Understand the function of motors, batteries, flight controllers, cameras, and other essential drone parts.
                </p>
              </div>
            </div>
            <div className="bg-cyan-50 rounded-lg p-4">
              <div className="flex items-start mb-2">
                <svg className="w-5 h-5 text-cyan-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-cyan-700 font-medium text-sm">How it benefits:</span>
              </div>
              <p className="text-gray-700 text-sm ml-7">
                This technical knowledge enables you to select appropriate equipment for specific needs, troubleshoot issues, and perform basic repairs and maintenance.
              </p>
            </div>
          </div>

          {/* Science Behind Flying */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex items-start mb-6">
              <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,6A6,6 0 0,1 18,12C18,13.47 17.57,14.83 16.83,16L13.41,16L14.71,14.71L13.29,13.29L10.59,16L9.17,16C8.43,14.83 8,13.47 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Science Behind Flying
                </h3>
                <p className="text-gray-600">
                  Learn the physics of flight, aerodynamics, and how environmental factors like wind and temperature affect drone performance.
                </p>
              </div>
            </div>
            <div className="bg-indigo-50 rounded-lg p-4">
              <div className="flex items-start mb-2">
                <svg className="w-5 h-5 text-indigo-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-indigo-700 font-medium text-sm">How it benefits:</span>
              </div>
              <p className="text-gray-700 text-sm ml-7">
                Understanding these principles helps you adapt to challenging flight conditions, optimize battery life, and make informed decisions about when and where to fly safely.
              </p>
            </div>
          </div>

          {/* Rules & Regulations */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex items-start mb-6">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V10.5A1,1 0 0,0 4,11.5H16A1,1 0 0,0 17,10.5M14,9H13V8H14M4,14A1,1 0 0,0 3,15V18A1,1 0 0,0 4,19H16A1,1 0 0,0 17,18V15A1,1 0 0,0 16,14H4M14,17H13V16H14M18,6V8H21V18H18V20H21A2,2 0 0,0 23,18V8A2,2 0 0,0 21,6H18M1,6V18A2,2 0 0,0 3,20V6A2,2 0 0,0 1,6Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Rules & Regulations
                </h3>
                <p className="text-gray-600">
                  Navigate the legal framework for drone operations, including airspace restrictions, registration requirements, and privacy considerations.
                </p>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="flex items-start mb-2">
                <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-green-700 font-medium text-sm">How it benefits:</span>
              </div>
              <p className="text-gray-700 text-sm ml-7">
                Fly with confidence knowing you're operating legally and responsibly, avoiding penalties while protecting yourself and others from potential liabilities.
              </p>
            </div>
          </div>

          {/* Industry Insights */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex items-start mb-6">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4L13.09,8.26L17,7L14.74,10.74L16,11L13.09,15.74L12,20L10.91,15.74L7,17L9.26,13.26L8,13L10.91,8.26L12,4Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Industry Insights
                </h3>
                <p className="text-gray-600">
                  Discover how drones are revolutionizing industries like agriculture, construction, filmmaking, search and rescue, and more.
                </p>
              </div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-start mb-2">
                <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-purple-700 font-medium text-sm">How it benefits:</span>
              </div>
              <p className="text-gray-700 text-sm ml-7">
                Gain perspective on the diverse applications of drone technology and identify specific sectors where your skills and interests align with industry needs.
              </p>
            </div>
          </div>

          {/* Career Opportunities */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="flex items-start mb-6">
              <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V10.5A1,1 0 0,0 4,11.5H16A1,1 0 0,0 17,10.5M14,9H13V8H14M4,14A1,1 0 0,0 3,15V18A1,1 0 0,0 4,19H16A1,1 0 0,0 17,18V15A1,1 0 0,0 16,14H4M14,17H13V16H14M18,6V8H21V18H18V20H21A2,2 0 0,0 23,18V8A2,2 0 0,0 21,6H18M1,6V18A2,2 0 0,0 3,20V6A2,2 0 0,0 1,6Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Career Opportunities
                </h3>
                <p className="text-gray-600">
                  Explore professional pathways in the drone industry, from commercial piloting to specialized roles in mapping, inspection, and content creation.
                </p>
              </div>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="flex items-start mb-2">
                <svg className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-yellow-700 font-medium text-sm">How it benefits:</span>
              </div>
              <p className="text-gray-700 text-sm ml-7">
                Understand certification requirements, salary expectations, and growth trajectories in this rapidly expanding field to plan your professional development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default WhatChildWillLearn;