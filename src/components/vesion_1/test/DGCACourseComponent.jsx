import React from 'react';
import { Calendar, Award, Phone, Users, CheckCircle, Shield } from 'lucide-react';

const DgcaInfo = () => {
  const courseDetails = {
    duration: "5 Days",
    validity: "10 Years",
    components: [
      "2 Days Theory Ground Training",
      "1 Day Simulator Training", 
      "2 Days Flying Training"
    ],
    provider: "AEROBOTT",
    contact: "9004711184",
    certifications: ["NSDC Certificate", "MSDE"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            DGCA Certified Drone Pilot Training
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Become a certified drone pilot with our comprehensive training program. 
            Master the skies with professional-grade certification that opens doors to exciting career opportunities.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Left Column - Course Overview */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Course Overview</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                  <Calendar className="text-blue-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">Course Duration</h3>
                    <p className="text-gray-600 text-lg">{courseDetails.duration}</p>
                    <p className="text-sm text-gray-500 mt-1">Intensive hands-on training</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                  <Award className="text-green-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">Certificate Validity</h3>
                    <p className="text-gray-600 text-lg">{courseDetails.validity}</p>
                    <p className="text-sm text-gray-500 mt-1">Long-term certification value</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                  <Phone className="text-purple-600 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">Contact</h3>
                    <p className="text-gray-600 text-lg font-mono">{courseDetails.contact}</p>
                    <p className="text-sm text-gray-500 mt-1">24/7 support available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Provider Info */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl shadow-lg p-8">
              <div className="text-center">
                <Shield size={48} className="mx-auto mb-4 opacity-90" />
                <h3 className="text-xl font-bold mb-2">Training Provider</h3>
                <p className="text-2xl font-bold text-blue-100">{courseDetails.provider}</p>
                <p className="text-blue-200 mt-2">Authorized Training Partner</p>
              </div>
            </div>
          </div>

          {/* Center Column - Training Components */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-full">
              <div className="flex items-center gap-3 mb-8 justify-center">
                <Users className="text-blue-600" size={28} />
                <h2 className="text-2xl font-bold text-gray-800">Training Components</h2>
              </div>
              
              <div className="space-y-6">
                {courseDetails.components.map((component, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-200">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 text-lg mb-2">{component}</h3>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(index + 1) * 33.33}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    {index < courseDetails.components.length - 1 && (
                      <div className="w-px h-4 bg-gray-300 ml-9 my-2"></div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                <div className="text-center">
                  <CheckCircle className="text-green-600 mx-auto mb-3" size={32} />
                  <h3 className="font-bold text-gray-800 text-lg mb-2">Comprehensive Training</h3>
                  <p className="text-gray-600">Theory + Practical + Real Flight Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits & Certifications */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Certifications</h2>
              
              <div className="space-y-4">
                {courseDetails.certifications.map((cert, index) => (
                  <div key={index} className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                      <span className="font-semibold text-blue-800 text-lg">{cert}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
                <h3 className="font-bold text-gray-800 text-lg mb-3">Government Recognized</h3>
                <p className="text-gray-600">Official certification backed by government authorities</p>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-center">Additional Benefits</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white bg-opacity-10 rounded-lg">
                  <CheckCircle size={20} className="text-green-200 flex-shrink-0" />
                  <span className="text-green-50">100% Job Opportunities Assistance</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white bg-opacity-10 rounded-lg">
                  <CheckCircle size={20} className="text-green-200 flex-shrink-0" />
                  <span className="text-green-50">Passport not mandatory for certification</span>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white bg-opacity-10 rounded-lg">
                  <CheckCircle size={20} className="text-green-200 flex-shrink-0" />
                  <span className="text-green-50">Industry-recognized credentials</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-3xl shadow-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Flight?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of certified drone pilots and unlock exciting career opportunities in the rapidly growing drone industry.
          </p>
          

        </div>
      </div>
    </div>
  );
};

export default DgcaInfo;