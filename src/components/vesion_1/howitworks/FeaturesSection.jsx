import React, { useState, useEffect } from 'react';

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate features every 5 seconds
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "Verified Professional Pilots",
      description: "Every pilot in our network is thoroughly vetted, certified, and insured. We verify credentials and experience to ensure top-quality service.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Custom Matching Algorithm",
      description: "Our proprietary algorithm matches you with pilots based on your specific needs, location, budget, and timeline to ensure the perfect fit.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Secure Payment Protection",
      description: "Your payment is held securely until you're satisfied with the service. Our protection plan ensures you only pay for work that meets your standards.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "24/7 Project Support",
      description: "Our team provides round-the-clock support for your projects. Get assistance with scheduling, communication, and resolving any issues quickly.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-gray-900 py-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-500 opacity-5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-orange-500 opacity-5 rounded-tr-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-orange-500">Why Choose </span>
            <span className="text-white">Our Pilot Matching Service</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We connect you with skilled drone pilots who deliver exceptional results for all your aerial needs. 
            Our platform makes finding the right professional simple, safe, and stress-free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Features list */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 transform ${activeFeature === index ? 'bg-gray-700 scale-105 shadow-xl border-l-4 border-orange-500' : 'hover:bg-gray-700/50'}`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start">
                  <div className={`p-2 rounded-lg ${activeFeature === index ? 'text-orange-500' : 'text-gray-400'}`}>
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className={`font-bold text-xl mb-2 ${activeFeature === index ? 'text-orange-500' : 'text-white'}`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Visual demo */}
          <div className={`relative transition-all duration-1000 delay-400 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="relative mx-auto max-w-md">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-xl blur-xl animate-pulse"></div>
              
              {/* Tablet/screen frame */}
              <div className="relative bg-gray-700 rounded-xl overflow-hidden shadow-2xl border border-gray-600">
                {/* Header */}
                <div className="p-4 bg-gray-800 border-b border-gray-600 flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-400">Pilot Dashboard</div>
                  <div className="w-6"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="text-white font-bold mb-4">Available Pilot Matches</div>
                  
                  {/* Pilot cards */}
                  <div className="space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="p-3 bg-gray-800 rounded-lg border border-gray-600 flex items-center">
                        <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3 flex-1">
                          <div className="text-white font-medium">Professional Drone Pilot</div>
                          <div className="text-gray-400 text-sm">Aerial Photography • 4.8 ★</div>
                        </div>
                        <div className="bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                          Match
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full mt-4 py-2 bg-orange-500/20 text-orange-500 rounded-md border border-orange-500/30 font-medium text-sm">
                    View All Matches
                  </button>
                </div>
              </div>
              
              {/* Floating notifications */}
              <div className="absolute -right-4 top-20 bg-gray-800 p-3 rounded-lg border border-gray-600 shadow-xl w-48 animate-bounce">
                <div className="text-white text-sm font-medium">New Match Found!</div>
                <div className="text-gray-400 text-xs">Perfect for your project</div>
              </div>
              
              <div className="absolute -left-4 bottom-20 bg-gray-800 p-3 rounded-lg border border-gray-600 shadow-xl w-48 transform rotate-3">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <div className="ml-2">
                    <div className="text-white text-sm font-medium">Pilot Available</div>
                    <div className="text-gray-400 text-xs">Ready to hire</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Banner */}
        <div className={`mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-700 shadow-xl relative overflow-hidden transition-all duration-1000 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full opacity-10 -mt-32 -mr-32"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">Ready to find your perfect pilot?</h3>
              <p className="text-gray-400">Join thousands of satisfied customers who found the right match.</p>
            </div>
            <button className="px-8 py-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;