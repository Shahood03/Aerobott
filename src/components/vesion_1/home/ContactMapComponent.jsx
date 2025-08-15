import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.city.trim()) newErrors.city = 'City is required';
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);
      alert('Thank you for contacting us! We will get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        message: ''
      });
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Responsive */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto px-4 leading-relaxed">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        
        {/* Main Content Grid - Mobile First */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          
          {/* Google Map Container - Mobile Optimized */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden h-full order-last lg:order-first">
            <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-600 to-indigo-600">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">Visit Our Office</h3>
              <p className="text-blue-100 text-sm sm:text-base">Hotel Sahara Star, Mumbai</p>
            </div>
            <div className="w-full h-64 sm:h-80 lg:h-full lg:min-h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7661159962385!2d72.85107157516673!3d19.095726082090757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c84d72dc43bd%3A0xa4514aaf014d9ae4!2sHotel%20Sahara%20Star!5e0!3m2!1sen!2sin!4v1684923456789!5m2!1sen!2sin"
                className="w-full h-full"
                frameBorder="0" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                aria-hidden="false" 
                tabIndex="0"
                title="Hotel Sahara Star Location"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form Container - Mobile Optimized */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden relative order-first lg:order-last">
            {/* Background Image - Responsive */}
            <div 
              className="absolute inset-0 w-full h-full z-0 opacity-30 sm:opacity-40"
              style={{
                backgroundImage: "url('/images/home/c1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              }}
            ></div>
            
            {/* Form Content - Enhanced for Mobile */}
            <div className="relative z-10 p-4 sm:p-6 lg:p-8 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl m-2 sm:m-4">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">Get In Touch</h3>
                <p className="text-gray-600 text-base sm:text-lg">You can reach us anytime</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {/* Full Name Field */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-3 border-2 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 bg-white text-sm sm:text-base min-h-[44px] touch-manipulation ${
                      errors.name ? 'border-red-400' : 'border-gray-300 hover:border-blue-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
                </div>
                
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-3 border-2 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 bg-white text-sm sm:text-base min-h-[44px] touch-manipulation ${
                      errors.email ? 'border-red-400' : 'border-gray-300 hover:border-blue-300'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
                </div>
                
                {/* Phone Field - Mobile Optimized */}
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Phone Number *
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-2 sm:px-4 text-gray-700 bg-gray-100 border-2 border-r-0 border-gray-300 rounded-l-lg sm:rounded-l-xl font-medium text-sm sm:text-base">
                      +91
                    </span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      className={`flex-1 block w-full px-3 sm:px-4 py-3 border-2 rounded-r-lg sm:rounded-r-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 bg-white text-sm sm:text-base min-h-[44px] touch-manipulation ${
                        errors.phone ? 'border-red-400' : 'border-gray-300 hover:border-blue-300'
                      }`}
                      placeholder="Enter 10-digit number"
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>}
                </div>
                
                {/* City Field */}
                <div>
                  <label htmlFor="city" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-3 border-2 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 bg-white text-sm sm:text-base min-h-[44px] touch-manipulation ${
                      errors.city ? 'border-red-400' : 'border-gray-300 hover:border-blue-300'
                    }`}
                    placeholder="Enter your city"
                  />
                  {errors.city && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.city}</p>}
                </div>
                
                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-3 border-2 border-gray-300 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 bg-white hover:border-blue-300 text-sm sm:text-base resize-none touch-manipulation"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                
                {/* Submit Button - Mobile Optimized */}
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 text-sm sm:text-base min-h-[48px] touch-manipulation ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="hidden sm:inline">Submitting...</span>
                      <span className="sm:hidden">Sending...</span>
                    </span>
                  ) : (
                    <>
                      <span className="hidden sm:inline">Send Message</span>
                      <span className="sm:hidden">Send</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Contact Info - Mobile Responsive */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Phone</h4>
            <p className="text-gray-600 text-xs sm:text-sm">+91 98765 43210</p>
          </div>
          
          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Email</h4>
            <p className="text-gray-600 text-xs sm:text-sm">contact@aerobott.com</p>
          </div>
          
          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg text-center sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">Office Hours</h4>
            <p className="text-gray-600 text-xs sm:text-sm">Mon-Fri: 9AM-6PM</p>
          </div>
        </div>
      </div>

      {/* Custom CSS for enhanced mobile experience */}
      <style jsx>{`
        .touch-manipulation {
          touch-action: manipulation;
        }
        
        /* Ensure proper focus styles for accessibility */
        input:focus, textarea:focus, button:focus {
          outline: none;
        }
        
        /* Smooth transitions for all interactive elements */
        input, textarea, button {
          transition: all 0.3s ease-in-out;
        }
        
        /* Disable hover effects on touch devices */
        @media (hover: none) {
          button:hover {
            transform: none;
          }
        }
        
        /* Enhanced hover effects for desktop only */
        @media (hover: hover) {
          button:hover:not(:disabled) {
            transform: translateY(-1px) scale(1.02);
          }
        }
        
        /* Optimize for very small screens */
        @media (max-width: 320px) {
          .px-4 {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          
          .space-y-4 > * + * {
            margin-top: 0.75rem;
          }
        }
        
        /* Better input styling for iOS */
        @supports (-webkit-touch-callout: none) {
          input, textarea {
            -webkit-appearance: none;
            border-radius: 0.5rem;
          }
        }
        
        /* Ensure proper map height on mobile */
        @media (max-width: 1024px) {
          iframe {
            min-height: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactUs;