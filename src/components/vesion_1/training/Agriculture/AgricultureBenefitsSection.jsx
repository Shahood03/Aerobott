import React, { useState, useRef, useEffect } from 'react';
import { 
  Sprout, 
  Droplets, 
  Bug, 
  BarChart3, 
  Clock, 
  DollarSign, 
  Leaf, 
  MapPin,
  TrendingUp,
  Shield,
  Eye,
  Zap,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const AgricultureBenefitsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const tabs = [
    {
      id: 'monitoring',
      title: 'Crop Monitoring',
      icon: <Eye className="h-6 w-6" />,
      description: 'Real-time crop health assessment and growth tracking',
      color: 'green'
    },
    {
      id: 'spraying',
      title: 'Precision Spraying',
      icon: <Sprout className="h-6 w-6" />,
      description: 'Targeted application of fertilizers and pesticides',
      color: 'blue'
    },
    {
      id: 'irrigation',
      title: 'Smart Irrigation',
      icon: <Droplets className="h-6 w-6" />,
      description: 'Water stress detection and irrigation optimization',
      color: 'cyan'
    },
    {
      id: 'analytics',
      title: 'Data Analytics',
      icon: <BarChart3 className="h-6 w-6" />,
      description: 'Advanced field analytics and yield prediction',
      color: 'purple'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Increase Yield",
      percentage: "+25%",
      description: "Average crop yield improvement through precision agriculture techniques",
      details: ["Early pest detection", "Optimal nutrient management", "Growth pattern analysis"],
      color: "green"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Reduce Costs",
      percentage: "-30%",
      description: "Operational cost reduction through efficient resource utilization",
      details: ["Reduced chemical usage", "Lower labor costs", "Fuel savings"],
      color: "blue"
    },
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Save Water",
      percentage: "-40%",
      description: "Water conservation through smart irrigation and monitoring",
      details: ["Soil moisture mapping", "Targeted watering", "Leak detection"],
      color: "cyan"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Save Time",
      percentage: "-60%",
      description: "Faster field surveys and automated monitoring processes",
      details: ["Automated field scanning", "Real-time data collection", "Quick decision making"],
      color: "orange"
    }
  ];

  const applications = [
    {
      title: "NDVI Mapping",
      description: "Vegetation health analysis using normalized difference vegetation index",
      image: "/images/agri/s1.jpg",
      features: ["Chlorophyll content", "Plant stress detection", "Growth monitoring"]
    },
    {
      title: "Thermal Imaging",
      description: "Heat signature analysis for irrigation and plant health assessment",
      image: "/images/agri/s2.jpg",
      features: ["Water stress detection", "Disease identification", "Soil analysis"]
    },
    {
      title: "Multispectral Analysis",
      description: "Multi-band imagery for comprehensive crop health evaluation",
      image: "/images/agri/s3.jpg",
      features: ["Nutrient deficiency", "Pest infestation", "Yield prediction"]
    }
  ];

  // Intersection Observer for card animations
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

  const getColorClasses = (color) => {
    const colors = {
      green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200' },
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200' },
      cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600', border: 'border-cyan-200' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' }
    };
    return colors[color] || colors.green;
  };

  return (
    <div ref={sectionRef} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full text-green-700 text-sm font-medium mb-4">
            <Leaf className="h-4 w-4 mr-2" />
            Agriculture Technology
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Revolutionize Your <span className="text-green-600">Farming</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform traditional farming practices with cutting-edge drone technology. 
            Monitor, analyze, and optimize your crops like never before.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const colorClasses = getColorClasses(benefit.color);
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
                      {benefit.icon}
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                    <span className={`ml-auto text-2xl font-bold ${colorClasses.text}`}>
                      {benefit.percentage}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {benefit.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {benefit.details.map((detail, idx) => (
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

        {/* Tabbed Applications Section */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Imaging Technologies
            </h3>
            <p className="text-lg text-gray-600">
              Leverage multiple imaging technologies for comprehensive crop analysis
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {tabs.map((tab, index) => {
              const colorClasses = getColorClasses(tab.color);
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === index
                      ? `${colorClasses.bg} ${colorClasses.text} ${colorClasses.border} border`
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 transform ${
                  activeTab === index ? 'scale-105 ring-2 ring-green-200' : 'hover:shadow-xl'
                }`}
              >
                <div className="h-48 relative">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover"
                  />
                  {activeTab === index && (
                    <div className="absolute inset-0 bg-green-600/20 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <Zap className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {app.title}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {app.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {app.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h3>
            <p className="text-lg text-gray-600">
              Simple 4-step process to transform your farming operations
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-blue-200 to-purple-200 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Flight Planning', desc: 'AI-powered route optimization', icon: <MapPin className="h-6 w-6" />, color: 'green' },
                { step: '02', title: 'Data Collection', desc: 'Multi-sensor data capture', icon: <Eye className="h-6 w-6" />, color: 'blue' },
                { step: '03', title: 'AI Analysis', desc: 'Machine learning insights', icon: <BarChart3 className="h-6 w-6" />, color: 'purple' },
                { step: '04', title: 'Action Plans', desc: 'Automated recommendations', icon: <Zap className="h-6 w-6" />, color: 'orange' }
              ].map((item, index) => {
                const colorClasses = getColorClasses(item.color);
                return (
                  <div key={index} className="relative">
                    <div className="text-center">
                      <div className={`w-32 h-32 mx-auto ${colorClasses.bg} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                        <div className="text-center">
                          <div className={`${colorClasses.text} mb-2`}>
                            {item.icon}
                          </div>
                          <div className={`text-2xl font-bold ${colorClasses.text}`}>
                            {item.step}
                          </div>
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
         
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4">
              <Leaf className="h-16 w-16" />
            </div>
            <div className="absolute bottom-4 right-4">
              <Sprout className="h-12 w-12" />
            </div>
            <div className="absolute top-1/2 right-12">
              <Droplets className="h-8 w-8" />
            </div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Modernize Your Farm?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of farmers who have already increased their yields and reduced costs with our drone technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Schedule Free Consultation</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                Download Case Studies
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AgricultureBenefitsSection;