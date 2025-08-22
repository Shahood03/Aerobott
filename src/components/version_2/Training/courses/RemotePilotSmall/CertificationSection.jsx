import React, { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

// Note: Make sure to include Raleway font in your project
// Add this to your index.html or import in your CSS:
// <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
// And configure Tailwind to use Raleway in your tailwind.config.js:
// fontFamily: { 'raleway': ['Raleway', 'sans-serif'] }

export default function CertificationSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    country: '',
    city: '',
    training: '',
    location: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column - Certification Info */}
          <div className="space-y-8">
            {/* Header Badge */}
            <div className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-lg text-sm font-raleway">
              Become DGCA Certified in 5 days.
            </div>
            
            {/* Certification Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-raleway font-medium text-[#d5dbe6] leading-tight">
              Certification
            </h2>
            
            {/* Description */}
            <p className="text-[#d5dbe6]/80 font-raleway leading-relaxed text-base">
              The course is aligned with the Drone Rules of 2021, and upon completion, you will be awarded a 
              DGCA Remote Pilot Certificate (RPC) valid for ten years.
            </p>
            
            {/* RPTO Locations */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-raleway font-medium text-[#d5dbe6]">
                RPTO Locations
              </h3>
              
              <div className="space-y-3 text-[#d5dbe6]/80 font-raleway">
                <div className="flex flex-wrap gap-2">
                  <span className="text-gray-400">1. Mumbai</span>
                 
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="text-gray-400">2. Chandigarh</span>
                 
                </div>
                
            
              </div>
            </div>
             <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-raleway font-medium text-[#d5dbe6]">
                Contact Us
              </h3>
              
              <div className="space-y-4 text-[#d5dbe6]/80 font-raleway">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">📍</span>
                  <p className="leading-relaxed">
                    Hotel Sahara Star, North Tower Ground Floor, Chhatrapati Shivaji International, 
                    70-C, Nehru Rd, Navpada, Airport Area, Vile Parle, Mumbai, Maharashtra 400099
                  </p>
                </div>
                
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <span className="text-gray-400">📞</span>
                  <a href="tel:+919004711184" className="text-red-400 hover:text-red-300 transition-colors">
                    +91 9004711184
                  </a>
                </div>
                
                {/* Email */}
                <div className="flex items-center gap-3">
                  <span className="text-gray-400">✉️</span>
                  <a href="mailto:info@aerobott.com" className="text-red-400 hover:text-red-300 transition-colors">
                    info@aerobott.com
                  </a>
                </div>
              </div>
            </div>
            {/* Additional Features */}
            {/* <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-raleway font-medium text-[#d5dbe6]">
                Additional
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-red-400 flex items-center justify-center">
                    <Check className="w-3 h-3 text-red-400" />
                  </div>
                  <span className="text-[#d5dbe6]/80 font-raleway">Complimentary Meals</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-red-400 flex items-center justify-center">
                    <Check className="w-3 h-3 text-red-400" />
                  </div>
                  <span className="text-[#d5dbe6]/80 font-raleway">Pick & Drop Facility (Office to Field)</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-red-400 flex items-center justify-center">
                    <Check className="w-3 h-3 text-red-400" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#d5dbe6]/80 font-raleway">Subsidized Accommodation</span>
                    <div className="flex gap-1">
                      <span className="text-yellow-400 text-lg">⭐</span>
                      <span className="text-yellow-400 text-lg">⭐</span>
                      <span className="text-yellow-400 text-lg">⭐</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          
          {/* Right Column - Contact Form */}
          <div className="bg-gray-900/50 p-6 sm:p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl sm:text-3xl font-raleway font-medium text-[#d5dbe6] mb-8">
              Request More Info
            </h3>
            
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-[#d5dbe6]/80 font-raleway text-sm mb-2">
                  Full Name*
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter Name"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 font-raleway focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              
              {/* Phone and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#d5dbe6]/80 font-raleway text-sm mb-2">
                    Your phone number*
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Tel: +06 51 42 44 12"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 font-raleway focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-[#d5dbe6]/80 font-raleway text-sm mb-2">
                    Email address*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 font-raleway focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
              
              {/* Country and City Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#d5dbe6]/80 font-raleway text-sm mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="Your Country"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 font-raleway focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-[#d5dbe6]/80 font-raleway text-sm mb-2">
                    City*
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Your City"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 font-raleway focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
              
              {/* Training and Location Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#d5dbe6]/80 font-raleway text-sm mb-2">
                    Select Training*
                  </label>
                  <div className="relative">
                    <select
                      name="training"
                      value={formData.training}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white font-raleway focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">—Please choose an option—</option>
                      <option value="basic">Basic Training</option>
                      <option value="advanced">Advanced Training</option>
                      <option value="commercial">Commercial Training</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-[#d5dbe6]/80 font-raleway text-sm mb-2">
                    Preferred Location*
                  </label>
                  <div className="relative">
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white font-raleway focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">—Please choose an option—</option>
                      <option value="pune">Pune</option>
                      <option value="iit-ropar">IIT Ropar</option>
                      <option value="jaipur">Jaipur</option>
                      <option value="noida">Noida</option>
                      <option value="coimbatore">Coimbatore</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>
              
              {/* Message */}
              <div>
                <label className="block text-[#d5dbe6]/80 font-raleway text-sm mb-2">
                  Write your message below
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 font-raleway focus:outline-none focus:border-blue-500 transition-colors resize-vertical"
                />
              </div>
              
              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-white text-black py-4 rounded-full font-raleway font-medium text-lg hover:bg-gray-200 transition-colors duration-300 shadow-lg"
              >
                Submit form
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}