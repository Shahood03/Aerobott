import React, { useState, useEffect } from 'react';
import { Play, Leaf, BarChart3, MapPin, ArrowDown, Droplets, Sun, Wind } from 'lucide-react';

const AgricultureHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const slides = [
    {
      title: "Precision Agriculture",
      subtitle: "Monitor crop health with millimeter accuracy",
      image: "/images/agri/a1.avif",
      stats: { value: "95%", label: "Crop Health Accuracy" }
    },
    {
      title: "Smart Irrigation",
      subtitle: "Optimize water usage with thermal imaging",
      image: "/images/agri/a2.avif",
      stats: { value: "40%", label: "Water Savings" }
    },
    {
      title: "Yield Prediction",
      subtitle: "AI-powered harvest forecasting",
      image: "/images/agri/a3.avif",
      stats: { value: "85%", label: "Prediction Accuracy" }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleVideoPlay = () => {
    setIsPlaying(true);
    // In a real app, this would trigger video playback
    console.log('Playing agriculture drone video');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating farm elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Leaf className="h-16 w-16 text-green-600 animate-pulse" />
        </div>
        <div className="absolute top-40 right-20 opacity-20">
          <Sun className="h-12 w-12 text-yellow-500 animate-spin" style={{ animationDuration: '20s' }} />
        </div>
        <div className="absolute bottom-32 left-16 opacity-20">
          <Droplets className="h-10 w-10 text-blue-500 animate-bounce" />
        </div>
        <div className="absolute top-60 left-1/3 opacity-20">
          <Wind className="h-8 w-8 text-gray-400 animate-pulse" />
        </div>
        
        {/* Organic shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-medium">
              <Leaf className="h-4 w-4 mr-2" />
              Smart Farming Revolution
            </div>

            {/* Main Headlines */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-extrabold">
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Drones
                </span>
                <br />
                <span className="text-gray-900">Transform</span>
                <br />
                <span className="text-gray-700">Agriculture</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                Revolutionize your farming with precision agriculture technology. 
                Monitor crops, optimize resources, and maximize yields with our 
                advanced drone solutions.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Farms Served</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-3xl font-bold text-blue-600">25%</div>
                <div className="text-sm text-gray-600">Yield Increase</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-3xl font-bold text-emerald-600">30%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Your Farm Analysis
              </button>
              
              <button 
                onClick={handleVideoPlay}
                className="px-8 py-4 bg-white/80 hover:bg-white text-gray-800 font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/20 flex items-center justify-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Features Pills */}
            <div className="flex flex-wrap gap-3">
              {['NDVI Mapping', 'Thermal Imaging', 'Crop Monitoring', 'Pest Detection'].map((feature, index) => (
                <span key={index} className="px-4 py-2 bg-white/70 text-gray-700 rounded-full text-sm font-medium backdrop-blur-sm border border-white/30">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Content */}
          <div className="relative">
            {/* Main Image Container with Carousel */}
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 transform ${
                    index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                      <p className="text-white/90">{slide.subtitle}</p>
                    </div>
                    
                    {/* Stats Overlay */}
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">{slide.stats.value}</div>
                      <div className="text-xs text-gray-600">{slide.stats.label}</div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Video Play Overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handleVideoPlay}
                    className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                  >
                    <Play className="h-8 w-8 text-green-600 ml-1" />
                  </button>
                </div>
              )}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-green-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Floating Data Cards */}
            <div className="absolute -left-8 top-20 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 animate-float">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">Crop Health</div>
                  <div className="text-xs text-gray-600">Real-time monitoring</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-8 bottom-32 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900">GPS Precision</div>
                  <div className="text-xs text-gray-600">±2cm accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-600">Discover More</span>
          <ArrowDown className="h-5 w-5 text-gray-600 animate-bounce" />
        </div>
      </div>

      {/* Custom CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AgricultureHeroSection;