import React, { useState, useEffect } from 'react';

const PilotMatchingHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Background elements with animation */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-full h-full opacity-10">
          <div className="absolute w-64 h-64 rounded-full bg-orange-500 blur-xl top-20 left-20 animate-pulse"></div>
          <div className="absolute w-96 h-96 rounded-full bg-orange-600 blur-3xl bottom-20 right-20 animate-pulse"></div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg className="w-10 h-10 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.5L17 9v6l-5 3-5-3V9l5-3.5z" />
          </svg>
          <span className="text-white font-bold text-xl">PilotMatch</span>
        </div>
        <div className="hidden md:flex space-x-8 text-white">
          <a href="#" className="hover:text-orange-400 transition-colors">How It Works</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Pilots</a>
          <a href="#" className="hover:text-orange-400 transition-colors">Pricing</a>
          <a href="#" className="hover:text-orange-400 transition-colors">About Us</a>
        </div>
        <div>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors transform hover:scale-105 duration-300">
            Sign Up
          </button>
        </div>
      </nav>
      
      {/* Hero content */}
      <div className="relative z-10 px-6 md:px-16 pt-20 pb-24 flex flex-col md:flex-row items-center max-w-7xl mx-auto">
        <div className={`w-full md:w-1/2 transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Get matched with the </span>
            <span className="text-orange-500">best pilots</span>
            <span className="text-white"> for your needs & budget</span>
          </h1>
          
          <p className="text-gray-300 text-lg mb-8">
            Connect with expert pilots tailored to your specific requirements. 
            Fast, reliable, and affordable drone services at your fingertips.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg">
              Find Your Pilot
            </button>
            <button className="px-8 py-4 border border-white text-white rounded-md hover:bg-white hover:text-gray-900 transition-all duration-300">
              Learn More
            </button>
          </div>
          
          <div className="mt-12 flex items-center">
            <div className="flex -space-x-4">
              <img src="/api/placeholder/48/48" alt="Customer" className="w-12 h-12 rounded-full border-2 border-orange-500" />
              <img src="/api/placeholder/48/48" alt="Customer" className="w-12 h-12 rounded-full border-2 border-orange-500" />
              <img src="/api/placeholder/48/48" alt="Customer" className="w-12 h-12 rounded-full border-2 border-orange-500" />
            </div>
            <div className="ml-4">
              <div className="text-orange-400 font-semibold">500+ Happy Customers</div>
              <div className="text-gray-400 text-sm">Join our growing community</div>
            </div>
          </div>
        </div>
        
        <div className={`w-full md:w-1/2 mt-12 md:mt-0 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 bg-orange-500 rounded-xl blur-xl opacity-20 animate-pulse"></div>
            <div className="relative bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-2xl">
              <div className="text-white font-bold text-xl mb-4">Find Your Perfect Pilot Match</div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-400 mb-1 text-sm">Service Type</label>
                  <select className="w-full bg-gray-700 text-white rounded-md p-3 border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none">
                    <option>Aerial Photography</option>
                    <option>Video Production</option>
                    <option>Mapping & Surveying</option>
                    <option>Inspection Services</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-1 text-sm">Location</label>
                  <input 
                    type="text" 
                    placeholder="Enter your location"
                    className="w-full bg-gray-700 text-white rounded-md p-3 border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-400 mb-1 text-sm">Budget Range</label>
                  <select className="w-full bg-gray-700 text-white rounded-md p-3 border border-gray-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none">
                    <option>$100 - $500</option>
                    <option>$500 - $1000</option>
                    <option>$1000 - $2000</option>
                    <option>$2000+</option>
                  </select>
                </div>
                
                <button className="w-full py-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg mt-2">
                  Match Me Now
                </button>
              </div>
              
              <div className="mt-6 text-center text-gray-400 text-sm">
                Get matched with top-rated pilots within 24 hours
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements for visual effect */}
      <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-orange-500 opacity-20 animate-bounce"></div>
      <div className="absolute top-40 right-20 w-8 h-8 rounded-full bg-orange-500 opacity-30 animate-pulse"></div>
    </div>
  );
};

export default PilotMatchingHero;