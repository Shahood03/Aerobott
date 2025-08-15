import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Award, Shield, Star, Users } from 'lucide-react';

const RecognitionCertificationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates = [
    {
      id: 1,
      title: "DGCA Certification",
      image: "/images/certifications/c1.png",
      description: "Directorate General of Civil Aviation approved training center"
    },
    {
      id: 2,
      title: "ISO 9001:2015",
      image: "/images/certifications/c2.png",
      description: "Quality Management System Certification"
    },
    {
      id: 3,
      title: "World Book of Records",
      image: "/images/certifications/c3.png",
      description: "Recognition for excellence in drone education"
    },
    {
      id: 4,
      title: "Industry Excellence Award",
      image: "/images/certifications/c4.png",
      description: "Leading innovation in UAV technology"
    },
    // {
    //   id: 5,
    //   title: "Safety Standards Compliance",
    //   image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=300&h=400&fit=crop",
    //   description: "Adherence to international safety protocols"
    // }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  const getVisibleCertificates = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % certificates.length;
      visible.push(certificates[index]);
    }
    return visible;
  };

  return (
    <section className="bg-black text-white  px-16 pt-16 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Import Raleway font */}
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      {/* Background blur effects */}
     

      <div className="w-full h-full flex flex-col justify-center relative z-10">
        {/* Left Side Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Header with accent line */}
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col items-start">
                <div className="w-5 flex flex-col items-start">
                  <div className="w-5 h-0 border-t border-indigo-300" />
                  <div className="w-[0.02px] h-5 border-l border-indigo-300" />
                </div>
                <h2 className="text-white text-3xl font-bold leading-9 mt-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Recognition & Certifications
                </h2>
              </div>
              
              {/* Subtitle */}
              <h3 className="text-white text-xl font-semibold leading-normal" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Trusted by Industry Leaders, Backed by Certifications
              </h3>
              
              {/* Accent line */}
              <div className="w-20 h-0 border-t border-indigo-300" />
            </div>

            {/* Description */}
            <p className="text-white/70 text-base font-medium leading-snug tracking-tight text-justify" style={{ fontFamily: 'Raleway, sans-serif' }}>
              At Aerobott, we are driven by a vision to build India's next generation of drone professionals and innovators. Our certified training programs and cutting-edge drone solutions meet the highest industry and regulatory standards. Trusted by enterprises, government bodies, and aspiring pilots alike, we are committed to delivering excellence, safety, and impact across the aerial technology landscape.
            </p>
            <p>
                Beyond training, our cutting-edge drone solutions are engineered to meet the highest industry and regulatory standards, delivering unmatched performance, reliability, and precision. Trusted by leading enterprises, government bodies, defense organizations, and aspiring pilots alike, we provide end-to-end services spanning aerial surveying, mapping, agriculture, infrastructure inspection, security, and disaster management.
            </p>

            {/* Stats or Key Points */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-white font-semibold" style={{ fontFamily: 'Raleway, sans-serif' }}>DGCA Approved</div>
                  <div className="text-white/60 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Official Training Center</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-white font-semibold" style={{ fontFamily: 'Raleway, sans-serif' }}>ISO Certified</div>
                  <div className="text-white/60 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Quality Standards</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <div className="text-white font-semibold" style={{ fontFamily: 'Raleway, sans-serif' }}>World Records</div>
                  <div className="text-white/60 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Excellence Recognition</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-red-500/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <div className="text-white font-semibold" style={{ fontFamily: 'Raleway, sans-serif' }}>Industry Trust</div>
                  <div className="text-white/60 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Enterprise Partners</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Certificate Carousel */}
          <div className="relative">
            {/* Certificate Display */}
            <div className="flex items-center justify-center space-x-4">
              {getVisibleCertificates().map((cert, index) => {
                const isCenter = index === 1;
                const sizeClass = isCenter 
                  ? "w-80 h-[30rem]" 
                  : "w-40 h-64";
                const opacityClass = isCenter 
                  ? "opacity-100 scale-100" 
                  : "opacity-20 scale-90";
                
                return (
                  <div
                    key={cert.id}
                    className={`${sizeClass} ${opacityClass} p-4 rounded-[34px] outline outline-[3px] outline-offset-[-3px] outline-white/60 transition-all duration-500 ease-in-out flex items-center justify-center`}
                  >
                    <div className="w-full h-full rounded-[30px] overflow-hidden border-2 border-white/15 bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center p-4">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-3/4 object-cover rounded-lg mb-4"
                      />
                      {isCenter && (
                        <div className="text-center">
                          <h4 className="text-white font-semibold text-sm mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            {cert.title}
                          </h4>
                          <p className="text-white/60 text-xs leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
                            {cert.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-8 h-8 p-2 rounded-full outline outline-1 outline-white flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              
              <div className="flex space-x-2">
                {certificates.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="w-8 h-8 p-2 rounded-full outline outline-1 outline-white flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionCertificationsSection;