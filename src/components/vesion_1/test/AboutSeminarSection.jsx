import React from 'react';
import { Award, Users, Globe, Zap, Shield, Target, ArrowRight, CheckCircle } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      title: "DGCA Certified Training",
      description: "Official certification recognized by aviation authorities",
      icon: <Shield className="h-8 w-8 text-blue-500" />
    },
    {
      title: "Industry-Leading Technology",
      description: "Cutting-edge drone manufacturing and R&D capabilities",
      icon: <Zap className="h-8 w-8 text-yellow-500" />
    },
    {
      title: "Career Placement Support",
      description: "Direct connections to top aerospace and tech companies",
      icon: <Target className="h-8 w-8 text-green-500" />
    }
  ];

  const certifications = [
    "DGCA Approved Training Partner",
    "Startup India Recognized"
  ];

  return (
    <section id="about-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ABOUT AEROBOTT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            India's Premier <span className="text-blue-600">Drone Technology</span> Company
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leading the future of unmanned aerial vehicles with innovative technology, 
            world-class training, and industry partnerships that shape tomorrow's aviation landscape.
          </p>
        </div>


        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Pioneering Innovation in <span className="text-orange-500">Drone Technology</span>
            </h3>
            
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-8">
              <p>
                Founded with a vision to democratize drone technology in India, Aerobott has emerged as a 
                leading manufacturer and training provider in the unmanned aerial vehicle sector. Our 
                cutting-edge research and development facility produces state-of-the-art drones for 
                defense, agriculture, surveillance, and commercial applications.
              </p>
              
              <p>
                As a DGCA-approved training partner, we've successfully trained over 1,000 students and 
                professionals, establishing ourselves as the go-to destination for drone technology education. 
                Our comprehensive programs bridge the gap between theoretical knowledge and practical 
                industry applications.
              </p>
            </div>

            {/* Certifications */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Our Certifications & Recognition</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Why Choose Aerobott?</h4>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold text-lg mb-2">{feature.title}</h5>
                      <p className="text-gray-200">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-white/10 rounded-lg border border-white/20">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-400" />
                  <span className="font-semibold">Industry Leader</span>
                </div>
                <p className="text-sm text-gray-200 mt-2">
                  Recognized by leading aerospace companies and government agencies for excellence in drone technology and training.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To make drone technology accessible to every student and professional in India, 
              fostering innovation and creating career opportunities in the rapidly growing 
              unmanned aerial vehicle industry.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To position India as a global leader in drone technology by nurturing the next 
              generation of aerospace engineers, pilots, and innovators through world-class 
              training and cutting-edge research.
            </p>
          </div>
        </div>


      </div>
    </section>
  );
};

export default AboutSection;