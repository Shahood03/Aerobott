import React, { useState, useEffect } from 'react';
import { CheckCircle, Users, Award, Clock, ArrowRight, Play, Star } from 'lucide-react';

const DronePilotTrainingHero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    { name: "Rajesh Kumar", role: "Commercial Pilot", rating: 5, text: "Excellent training program!" },
    { name: "Priya Sharma", role: "Survey Engineer", rating: 5, text: "DGCA certification made easy!" },
    { name: "Arjun Patel", role: "Agriculture Specialist", rating: 5, text: "Professional and comprehensive!" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/banner/b1.avif')",
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-80"></div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #3b82f6 2px, transparent 2px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              {/* DGCA Badge */}
              <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-6 py-3 shadow-sm">
                <Award className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-green-700 font-semibold text-sm">DGCA APPROVED TRAINING CENTER</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  <span className="block">Drone Pilot</span>
                  <span className="block text-blue-600">
                    Training
                  </span>
                </h1>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                  <span className="text-2xl lg:text-3xl font-semibold text-gray-600">DGCA Certified</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Master the skies with India's premier DGCA-approved drone pilot training program. 
                Get certified, get flying, get ahead in the booming drone industry.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">DGCA Approved Curriculum</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-blue-500" />
                  <span className="text-gray-700">Expert Instructors</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-orange-500" />
                  <span className="text-gray-700">Flexible Schedules</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-purple-500" />
                  <span className="text-gray-700">Industry Recognition</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 py-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-500 text-sm">Certified Pilots</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-green-600">98%</div>
                  <div className="text-gray-500 text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-orange-600">15+</div>
                  <div className="text-gray-500 text-sm">Years Experience</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                  <span>Start Your Training</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => setIsVideoPlaying(true)}
                  className="group border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center bg-white hover:bg-blue-50"
                >
                  <Play className="mr-2 w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>

              {/* Testimonial Slider */}
              <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 border border-gray-200 shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    {testimonials[currentTestimonial].name[0]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic">"{testimonials[currentTestimonial].text}"</p>
                    <p className="text-gray-500 text-sm mt-1">
                      - {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual Elements */}
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-blue-100 rounded-2xl blur-2xl opacity-30 transform rotate-3"></div>
                <div className="relative bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-xl">
                  <img 
                    src="/api/placeholder/500/400"
                    alt="Drone pilot training session"
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                  
                  {/* Floating Video Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button 
                      onClick={() => setIsVideoPlaying(true)}
                      className="w-16 h-16 bg-white bg-opacity-95 hover:bg-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300 group border border-gray-200"
                    >
                      <Play className="w-6 h-6 text-blue-600 ml-1 group-hover:text-blue-700" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-green-50 border border-green-200 rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-green-600" />
                  <div>
                    <div className="text-green-700 font-semibold text-sm">DGCA Certified</div>
                    <div className="text-green-600 text-xs">Government Approved</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-blue-50 border border-blue-200 rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="text-blue-700 font-semibold text-sm">500+ Students</div>
                    <div className="text-blue-600 text-xs">Successfully Trained</div>
                  </div>
                </div>
              </div>

              {/* Drone Icon */}
              <div className="absolute top-8 left-8 w-12 h-12 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center transform hover:rotate-12 transition-transform duration-500 shadow-md">
                <div className="w-6 h-6 bg-blue-600 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={() => setIsVideoPlaying(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ✕
            </button>
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/api/placeholder/800/450"
                alt="Training video preview"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DronePilotTrainingHero;