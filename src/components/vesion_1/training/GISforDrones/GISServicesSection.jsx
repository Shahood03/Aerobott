import React, { useState } from 'react';
import { MapPin, Camera, BarChart3, Layers, Zap, Users, ArrowRight, CheckCircle } from 'lucide-react';

const GISServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      title: "Aerial Mapping & Surveying",
      description: "High-precision topographic mapping and land surveying using advanced drone technology",
      icon: <MapPin className="h-8 w-8" />,
      features: [
        "Sub-centimeter accuracy mapping",
        "Digital elevation models (DEM)",
        "Contour line generation",
        "Volume calculations",
        "Progress monitoring"
      ],
      applications: ["Construction", "Mining", "Agriculture", "Urban Planning"],
      image: "/images/survey/s1.jpg"
    },
    {
      id: 2,
      title: "Photogrammetry & 3D Modeling",
      description: "Create detailed 3D models and orthomosaic maps from high-resolution aerial imagery",
      icon: <Camera className="h-8 w-8" />,
      features: [
        "High-resolution orthomosaics",
        "3D point cloud generation",
        "Building Information Modeling (BIM)",
        "Asset documentation",
        "Virtual site tours"
      ],
      applications: ["Real Estate", "Architecture", "Heritage Sites", "Insurance"],
      image: "/images/survey/s2.jpg"
    },
    {
      id: 3,
      title: "GIS Data Analysis",
      description: "Advanced spatial analysis and data visualization for informed decision making",
      icon: <BarChart3 className="h-8 w-8" />,
      features: [
        "Spatial data analysis",
        "Custom GIS applications",
        "Interactive web mapping",
        "Database management",
        "Reporting & visualization"
      ],
      applications: ["Environmental", "Government", "Utilities", "Research"],
      image: "/images/survey/s3.jpg"
    },
    {
      id: 4,
      title: "Multi-Spectral Imaging",
      description: "Specialized imaging for agriculture, environmental monitoring, and vegetation analysis",
      icon: <Layers className="h-8 w-8" />,
      features: [
        "NDVI vegetation indices",
        "Crop health monitoring",
        "Precision agriculture",
        "Environmental assessment",
        "Change detection analysis"
      ],
      applications: ["Farming", "Forestry", "Environmental", "Research"],
      image: "/images/survey/s1.jpg"
    }
  ];

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast & Efficient",
      description: "Complete surveys in hours, not days"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "High Accuracy",
      description: "Sub-centimeter precision mapping"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Team",
      description: "Certified GIS professionals"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our GIS & Drone Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive geospatial solutions combining cutting-edge drone technology 
            with advanced GIS analysis for accurate, actionable insights.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Service Cards */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`bg-white rounded-xl p-6 cursor-pointer transition-all duration-300 border-2 ${
                  activeService === index
                    ? 'border-green-500 shadow-lg transform scale-105'
                    : 'border-gray-200 hover:border-green-300 hover:shadow-md'
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${
                    activeService === index ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.applications.map((app, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className={`h-5 w-5 transition-colors ${
                    activeService === index ? 'text-green-600' : 'text-gray-400'
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="h-64 relative">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white text-2xl font-bold">
                  {services[activeService].title}
                </h3>
              </div>
            </div>
            
            <div className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
              <ul className="space-y-3">
                {services[activeService].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Why Choose Our GIS Services?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-green-600">
                    {benefit.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Our Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understand your project requirements" },
              { step: "02", title: "Planning", desc: "Design optimal flight paths and data collection" },
              { step: "03", title: "Execution", desc: "Deploy drones and collect high-quality data" },
              { step: "04", title: "Delivery", desc: "Process data and deliver actionable insights" }
            ].map((item, index) => (
              <div key={index} className="relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-green-200 z-0"></div>
                )}
                <div className="relative z-10 bg-white rounded-lg p-6 text-center shadow-md border border-gray-100">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Data?
          </h3>
          <p className="text-xl mb-6 opacity-90">
            Get started with professional GIS and drone mapping services today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
              Get Quote
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-medium py-3 px-8 rounded-lg transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GISServicesSection;