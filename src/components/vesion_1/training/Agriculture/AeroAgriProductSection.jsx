import React, { useState, useRef, useEffect } from 'react';
import { 
  Droplets, 
  Zap, 
  Shield, 
  Clock, 
  MapPin, 
  Settings, 
  Battery,
  Gauge,
  Thermometer,
  Wind,
  Play,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Star,
  Award,
  Users,
  ArrowRight,
  Download,
  Leaf,
  BarChart3,
  Eye,
  TrendingUp
} from 'lucide-react';

const AeroAgriProductSection = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [activeSpec, setActiveSpec] = useState('overview');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const productImages = [
    {
      src: "/images/agri/a2.avif",
      alt: "Aero Agri Spraying Drone - Main View",
      caption: "Professional Agriculture Spraying Drone"
    },
    {
      src: "/images/agri/a3.avif",
      alt: "Aero Agri in Action",
      caption: "Precision Spraying in Action"
    },
    {
      src: "/images/agri/a2.avif",
      alt: "Tank System Detail",
      caption: "20L High-Capacity Tank System"
    },
    {
      src: "/images/agri/a4.avif",
      alt: "Control System",
      caption: "Advanced Flight Control System"
    }
  ];

  const keyMetrics = [
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Tank Capacity",
      value: "20L",
      description: "High-capacity liquid tank for extended operations",
      details: ["Food-grade PE material", "Anti-slosh design", "Quick-drain system"],
      color: "blue"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Coverage Rate",
      value: "12Ha/hr",
      description: "Maximum field coverage per hour with optimal spray pattern",
      details: ["Variable spray width", "GPS precision", "Overlap prevention"],
      color: "green"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Flight Time",
      value: "22min",
      description: "Extended operation time with high-capacity battery system",
      details: ["Hot-swappable batteries", "Smart power management", "Low battery return"],
      color: "purple"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Protection",
      value: "IP67",
      description: "Weather-resistant design for all-condition operations",
      details: ["Dust-proof sealing", "Water-resistant coating", "Temperature stable"],
      color: "orange"
    }
  ];

  const specifications = {
    overview: {
      title: "Performance",
      icon: <TrendingUp className="h-5 w-5" />,
      color: "green",
      specs: [
        { label: "Payload Capacity", value: "20 Liters", icon: <Droplets className="h-5 w-5" /> },
        { label: "Flight Time", value: "18-22 Minutes", icon: <Clock className="h-5 w-5" /> },
        { label: "Coverage Area", value: "8-12 Hectares/Hour", icon: <MapPin className="h-5 w-5" /> },
        { label: "Operating Range", value: "2 km", icon: <Zap className="h-5 w-5" /> },
        { label: "Max Speed", value: "15 m/s", icon: <Gauge className="h-5 w-5" /> },
        { label: "Protection Rating", value: "IP67", icon: <Shield className="h-5 w-5" /> }
      ]
    },
    technical: {
      title: "Technical",
      icon: <Settings className="h-5 w-5" />,
      color: "blue",
      specs: [
        { label: "Dimensions", value: "1850 × 1850 × 650 mm", icon: <Settings className="h-5 w-5" /> },
        { label: "Empty Weight", value: "24.5 kg", icon: <Gauge className="h-5 w-5" /> },
        { label: "Max Takeoff Weight", value: "47 kg", icon: <Gauge className="h-5 w-5" /> },
        { label: "Battery", value: "12S 16000mAh", icon: <Battery className="h-5 w-5" /> },
        { label: "Operating Temperature", value: "-10°C to 50°C", icon: <Thermometer className="h-5 w-5" /> },
        { label: "Wind Resistance", value: "6 m/s", icon: <Wind className="h-5 w-5" /> }
      ]
    },
    spraying: {
      title: "Spraying",
      icon: <Droplets className="h-5 w-5" />,
      color: "cyan",
      specs: [
        { label: "Nozzle Type", value: "4x Anti-drift Nozzles", icon: <Droplets className="h-5 w-5" /> },
        { label: "Flow Rate", value: "0.6-4.8 L/min", icon: <Droplets className="h-5 w-5" /> },
        { label: "Spray Width", value: "3-7 meters", icon: <MapPin className="h-5 w-5" /> },
        { label: "Droplet Size", value: "150-300 μm", icon: <Droplets className="h-5 w-5" /> },
        { label: "Tank Material", value: "PE Food Grade", icon: <Shield className="h-5 w-5" /> },
        { label: "Pump Type", value: "Diaphragm Pump", icon: <Settings className="h-5 w-5" /> }
      ]
    }
  };

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI Flight Planning",
      description: "Automated flight path optimization with obstacle avoidance and terrain following",
      benefits: ["Reduces flight time by 30%", "Ensures complete coverage", "Prevents crop damage"],
      color: "green"
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Precision Spraying",
      description: "Variable rate application with real-time flow control and wind compensation",
      benefits: ["Reduces chemical waste", "Improves crop coverage", "Customizable spray patterns"],
      color: "blue"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Smart Monitoring",
      description: "Real-time telemetry and health monitoring with predictive maintenance alerts",
      benefits: ["Prevents system failures", "Optimizes performance", "Reduces downtime"],
      color: "purple"
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Hot-Swap Battery",
      description: "Quick battery replacement system for continuous operation without interruption",
      benefits: ["Minimal downtime", "Extended operation", "Multiple battery support"],
      color: "orange"
    }
  ];

  const testimonials = [
    {
      name: "Prem kumar",
      role: "Commercial Farmer",
      location: "Punjab,India",
      rating: 5,
      text: "The Aero Agri has revolutionized our spraying operations. We've reduced chemical costs by 40% while improving coverage quality.",
      acres: "2,500 acres managed",
      // image: "/api/placeholder/60/60?text=JM"
    },
    {
      name: "Ashish Shew",
      role: "Agricultural Consultant",
      location: "Chhattisgarh,India",
      rating: 5,
      text: "Exceptional precision and reliability. The weather adaptive technology is a game-changer for our variable climate conditions.",
      acres: "5,000+ acres consulted",
      // image: "/api/placeholder/60/60?text=SC"
    },
    {
      name: "Sandhiya Jadhav",
      role: "Crop Protection Specialist",
      location: "Maharastra,India",
      rating: 5,
      text: "Outstanding performance in large-scale operations. The AI flight planning saves us hours of manual work every day.",
      acres: "10,000 acres protected",
      // image: "/api/placeholder/60/60?text=MS"
    }
  ];

  // Intersection Observer for card animations (matching AgricultureBenefitsSection)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.cardIndex);
            setVisibleCards(prev => [...new Set([...prev, cardIndex])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('[data-card-index]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % productImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getColorClasses = (color) => {
    const colors = {
      green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200', button: 'bg-green-600 hover:bg-green-700' },
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200', button: 'bg-blue-600 hover:bg-blue-700' },
      cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', border: 'border-cyan-200', button: 'bg-cyan-600 hover:bg-cyan-700' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200', button: 'bg-purple-600 hover:bg-purple-700' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200', button: 'bg-orange-600 hover:bg-orange-700' }
    };
    return colors[color] || colors.green;
  };

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div ref={sectionRef} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Matching AgricultureBenefitsSection style */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full text-green-700 text-sm font-medium mb-4">
            <Leaf className="h-4 w-4 mr-2" />
            Professional Spraying Solution
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet the <span className="text-green-600">Aero Agri</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Next-generation agricultural spraying drone designed for precision, efficiency, and reliability. 
            Transform your crop protection with advanced autonomous technology.
          </p>
        </div>

        {/* Key Metrics Grid - Matching the benefits card style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {keyMetrics.map((metric, index) => {
            const colorClasses = getColorClasses(metric.color);
            const isVisible = visibleCards.includes(index);
            
            return (
              <div
                key={index}
                data-card-index={index}
                className={`transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group">
                  <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={colorClasses.text}>
                      {metric.icon}
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{metric.title}</h3>
                    <span className={`ml-auto text-2xl font-bold ${colorClasses.text}`}>
                      {metric.value}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {metric.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {metric.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 className={`h-4 w-4 mr-2 ${colorClasses.text}`} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Product Showcase - Enhanced with AgricultureBenefitsSection styling */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 mb-20 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Image Gallery */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                {productImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 transform ${
                      index === activeImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                      <p className="text-sm font-medium">{image.caption}</p>
                    </div>
                  </div>
                ))}
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>

                {/* Video Play Button */}
                {!isVideoPlaying && (
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110"
                  >
                    <Play className="h-8 w-8 text-green-600 ml-1" />
                  </button>
                )}
              </div>

              {/* Image Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeImage ? 'bg-green-600 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Specifications Panel */}
            <div className="space-y-8">
              {/* Tab Navigation - Matching AgricultureBenefitsSection style */}
              <div className="flex flex-wrap gap-2">
                {Object.keys(specifications).map((key) => {
                  const spec = specifications[key];
                  const colorClasses = getColorClasses(spec.color);
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveSpec(key)}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                        activeSpec === key
                          ? `${colorClasses.bg} ${colorClasses.text} ${colorClasses.border} border`
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200'
                      }`}
                    >
                      {spec.icon}
                      <span>{spec.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Specification Content */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="grid grid-cols-1 gap-4">
                  {specifications[activeSpec].specs.map((spec, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                      <div className="flex items-center space-x-3">
                        <div className="text-green-600">{spec.icon}</div>
                        <span className="font-medium text-gray-900">{spec.label}</span>
                      </div>
                      <span className="text-gray-600 font-mono text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-md">
                  <span>Request Demo</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center space-x-2 border border-gray-300">
                  <Download className="h-5 w-5" />
                  <span>Download Specs</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid - Matching AgricultureBenefitsSection style */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Features
            </h3>
            <p className="text-lg text-gray-600">
              Cutting-edge technology for modern agriculture operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const colorClasses = getColorClasses(feature.color);
              const isVisible = visibleCards.includes(index + 4); // Offset for previous cards
              
              return (
                <div
                  key={index}
                  data-card-index={index + 4}
                  className={`transform transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 group">
                    <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={colorClasses.text}>
                        {feature.icon}
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 mb-4 text-sm">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle2 className={`h-4 w-4 mr-2 ${colorClasses.text}`} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials - Enhanced with AgricultureBenefitsSection styling */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h3>
            <p className="text-lg text-gray-600">
              Real results from farmers around the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center space-x-4 border-t pt-4">
                  {/* <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  /> */}
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                    <div className="text-xs text-green-600 mt-1">{testimonial.acres}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section - Matching AgricultureBenefitsSection style */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4">
              <Leaf className="h-16 w-16" />
            </div>
            <div className="absolute bottom-4 right-4">
              <Droplets className="h-12 w-12" />
            </div>
            <div className="absolute top-1/2 right-12">
              <Zap className="h-8 w-8" />
            </div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Upgrade Your Spraying Operations?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of farmers worldwide who trust Aero Agri for their precision spraying needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-md">
                <span>Schedule Free Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                Download Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AeroAgriProductSection;