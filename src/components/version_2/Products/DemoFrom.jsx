import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

// Note: Make sure to include Raleway font in your project
// Add this to your index.html or import in your CSS:
// <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
// And configure Tailwind to use Raleway in your tailwind.config.js:
// fontFamily: { 'raleway': ['Raleway', 'sans-serif'] }

export default function DemoForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    product: '',
    state: '',
    city: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState('');
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const products = ['Flyt-1 Drone', 'AeroAgri Drone', 'Survey Drone'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProductSelect = (product) => {
    setFormData(prev => ({
      ...prev,
      product: product
    }));
    setIsProductDropdownOpen(false);
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section id="demo-form" className="bg-black text-white px-4 sm:px-6 md:px-8 lg:px-16 mb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column - Certification Info */}
          <div className="space-y-8">
            {/* Header Badge */}
            {/* <div className="inline-flex items-center bg-gradient-to-r from-gray-800 to-gray-700 text-gray-200 px-5 py-3 rounded-full text-sm font-raleway font-medium shadow-lg">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
              Become DGCA Certified in 5 days.
            </div> */}
            
            {/* Certification Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-raleway font-regular text-[#d5dbe6] leading-tight">
              Certification
            </h2>
            
            {/* Description */}
            <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-800/50">
              <p className="text-[#d5dbe6]/90 font-raleway leading-relaxed text-lg">
                  Designed for agri-professionals, drone operators, and service providers in precision farming.
              </p>
            </div>
            

            {/* Contact Us */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-raleway font-medium text-[#d5dbe6] flex items-center">
                <span className="w-1 h-8 bg-blue-400 rounded-full mr-4"></span>
                Contact Us
              </h3>
              
              <div className="space-y-5 text-[#d5dbe6]/80 font-raleway">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <span className="text-blue-400 mt-1 text-xl">📍</span>
                  <p className="leading-relaxed text-base">
                    Hotel Sahara Star, North Tower Ground Floor, Chhatrapati Shivaji International, 
                    70-C, Nehru Rd, Navpada, Airport Area, Vile Parle, Mumbai, Maharashtra 400099
                  </p>
                </div>
                
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <span className="text-blue-400 text-xl">📞</span>
                  <a href="tel:+919004711184" className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-lg">
                    +91 9004711184
                  </a>
                </div>
                
                {/* Email */}
                <div className="flex items-center gap-4">
                  <span className="text-blue-400 text-xl">✉️</span>
                  <a href="mailto:info@aerobott.com" className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-lg">
                    info@aerobott.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="bg-gradient-to-br from-gray-900/60 to-gray-900/40 p-8 rounded-3xl border border-gray-800/50 backdrop-blur-sm shadow-2xl">
            <div className="mb-8">
              <h3 className="text-3xl font-raleway font-medium text-[#d5dbe6] mb-2">
                Request More Info
              </h3>
              <div className="w-16 h-1 bg-blue-400 rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-[#d5dbe6]/90 font-raleway text-sm font-medium mb-3">
                  Full Name*
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('fullName')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Enter your full name"
                  className={`w-full px-5 py-4 bg-gray-800/60 border-2 rounded-xl text-white placeholder-gray-400 font-raleway focus:outline-none transition-all duration-300 ${
                    focusedField === 'fullName' ? 'border-blue-400 bg-gray-800/80' : 'border-gray-700/50 hover:border-gray-600/50'
                  }`}
                />
              </div>
              
              {/* Phone Number */}
              <div>
                <label className="block text-[#d5dbe6]/90 font-raleway text-sm font-medium mb-3">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('phoneNumber')}
                  onBlur={() => setFocusedField('')}
                  placeholder="+91 12345 67890"
                  className={`w-full px-5 py-4 bg-gray-800/60 border-2 rounded-xl text-white placeholder-gray-400 font-raleway focus:outline-none transition-all duration-300 ${
                    focusedField === 'phoneNumber' ? 'border-red-400 bg-gray-800/80' : 'border-gray-700/50 hover:border-gray-600/50'
                  }`}
                />
              </div>

              {/* Product Dropdown */}
              <div>
                <label className="block text-[#d5dbe6]/90 font-raleway text-sm font-medium mb-3">
                  Product*
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                    onFocus={() => setFocusedField('product')}
                    onBlur={() => {
                      setTimeout(() => {
                        setFocusedField('');
                        setIsProductDropdownOpen(false);
                      }, 150);
                    }}
                    className={`w-full px-5 py-4 bg-gray-800/60 border-2 rounded-xl text-left font-raleway focus:outline-none transition-all duration-300 flex items-center justify-between ${
                      focusedField === 'product' || isProductDropdownOpen ? 'border-blue-400 bg-gray-800/80' : 'border-gray-700/50 hover:border-gray-600/50'
                    } ${formData.product ? 'text-white' : 'text-gray-400'}`}
                  >
                    <span>{formData.product || 'Select a product'}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isProductDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isProductDropdownOpen && (
                    <div className="absolute z-10 w-full mt-2 bg-gray-800 border-2 border-gray-700/50 rounded-xl shadow-xl">
                      {products.map((product) => (
                        <button
                          key={product}
                          type="button"
                          onClick={() => handleProductSelect(product)}
                          className="w-full px-5 py-4 text-left font-raleway text-white hover:bg-gray-700/50 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl flex items-center justify-between"
                        >
                          <span>{product}</span>
                          {formData.product === product && (
                            <Check className="w-5 h-5 text-blue-400" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* State and City Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#d5dbe6]/90 font-raleway text-sm font-medium mb-3">
                    State*
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('state')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Your State"
                    className={`w-full px-5 py-4 bg-gray-800/60 border-2 rounded-xl text-white placeholder-gray-400 font-raleway focus:outline-none transition-all duration-300 ${
                      focusedField === 'state' ? 'border-blue-400 bg-gray-800/80' : 'border-gray-700/50 hover:border-gray-600/50'
                    }`}
                  />
                </div>
                
                <div>
                  <label className="block text-[#d5dbe6]/90 font-raleway text-sm font-medium mb-3">
                    City*
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('city')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Your City"
                    className={`w-full px-5 py-4 bg-gray-800/60 border-2 rounded-xl text-white placeholder-gray-400 font-raleway focus:outline-none transition-all duration-300 ${
                      focusedField === 'city' ? 'border-blue-400 bg-gray-800/80' : 'border-gray-700/50 hover:border-gray-600/50'
                    }`}
                  />
                </div>
              </div>
              
              {/* Message */}
              <div>
                <label className="block text-[#d5dbe6]/90 font-raleway text-sm font-medium mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Tell us more about your requirements..."
                  rows={5}
                  className={`w-full px-5 py-4 bg-gray-800/60 border-2 rounded-xl text-white placeholder-gray-400 font-raleway focus:outline-none transition-all duration-300 resize-vertical ${
                    focusedField === 'message' ? 'border-blue-400 bg-gray-800/80' : 'border-gray-700/50 hover:border-gray-600/50'
                  }`}
                />
              </div>
              
              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-5 rounded-full font-raleway font-semibold text-lg hover:bg-blue-700 active:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}