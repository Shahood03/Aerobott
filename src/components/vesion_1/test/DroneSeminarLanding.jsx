import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Award, CheckCircle, Users, X, Loader2, Info } from 'lucide-react';

// Animation keyframes setup
const useAnimationStyles = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0% { transform: translateY(0px); box-shadow: 0 5px 15px 0px rgba(0,0,0,0.3); }
        50% { transform: translateY(-6px); box-shadow: 0 15px 15px 0px rgba(0,0,0,0.15); }
        100% { transform: translateY(0px); box-shadow: 0 5px 15px 0px rgba(0,0,0,0.3); }
      }
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes slideUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @media (max-width: 768px) {
        @keyframes float {
          0% { transform: translateY(0px); box-shadow: 0 3px 10px 0px rgba(0,0,0,0.3); }
          50% { transform: translateY(-3px); box-shadow: 0 8px 10px 0px rgba(0,0,0,0.15); }
          100% { transform: translateY(0px); box-shadow: 0 3px 10px 0px rgba(0,0,0,0.3); }
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
};

// Animated Button Component
const FloatingAnimatedButton = ({ type = "register", onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  useAnimationStyles();
  
  const buttonConfig = {
    register: {
      text: "Register Now - FREE",
      mobileText: "Register FREE",
      bgColor: "bg-orange-500 hover:bg-orange-600 active:bg-orange-700",
      icon: <Users className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
    },
    learn: {
      text: "Learn More",
      mobileText: "Learn More",
      bgColor: "bg-blue-500 hover:bg-blue-600 active:bg-blue-700",
      icon: <Info className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
    }
  };
  
  const config = buttonConfig[type];

  return (
    <button 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        inline-flex items-center ${config.bgColor} text-white 
        py-3 px-5 sm:py-3 sm:px-6 rounded-full 
        text-base sm:text-lg font-medium 
        transition-all duration-300 shadow-lg
        ${isHovered ? 'scale-105' : 'scale-100'}
        w-full sm:w-auto justify-center
        min-h-[48px] touch-manipulation
      `}
      style={{
        animation: 'float 3s ease-in-out infinite, pulse 2s ease-in-out infinite'
      }}
    >
      {config.icon}
      <span className="relative">
        <span className="hidden sm:inline">{config.text}</span>
        <span className="sm:hidden">{config.mobileText}</span>
        <span className="absolute -top-1 -right-2 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
        </span>
      </span>
    </button>
  );
};

// Registration Form Popup Component
const RegistrationFormPopup = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [recentBookings, setRecentBookings] = useState(127);
  const [loading, setLoading] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const API_URL = process.env.REACT_APP_API_URL || '';
  
  useAnimationStyles();

  useEffect(() => {
    if (isOpen) {
      fetchRecentBookings();
      document.body.style.overflow = 'hidden';
      
      // Focus the popup for better accessibility
      const modalElement = document.getElementById('registration-modal');
      if (modalElement) modalElement.focus();
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Simulate fetch recent bookings (replace with actual API call)
  const fetchRecentBookings = async () => {
    try {
      setLoading(true);
      // Simulated API call
      setTimeout(() => {
        setRecentBookings(127);
        setLoading(false);
      }, 500);
    } catch (err) {
      console.error('Error fetching recent bookings:', err);
      setLoading(false);
    }
  };

  // Validate phone number
  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[6-9]\d{9}$/; 
    return phoneRegex.test(number);
  };

  // Validate email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = async () => {
    setError('');
    setSuccess('');
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    if (!validatePhoneNumber(phoneNumber)) {
      setError('Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9');
      return;
    }

    setBookingLoading(true);

    try {
      // Simulated API call
      setTimeout(() => {
        setSuccess('Registration successful! You will receive a confirmation WhatsApp message shortly.');
        setRecentBookings(prev => prev + 1);
        setPhoneNumber('');
        setEmail('');
        setBookingLoading(false);
        
        // Close popup after 3 seconds
        setTimeout(() => {
          onClose();
        }, 3000);
      }, 1500);
    } catch (err) {
      console.error('Error booking slot:', err);
      setError('Failed to book slot. Please try again later.');
      setBookingLoading(false);
    }
  };
  
  // Handle escape key to close modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center bg-black bg-opacity-50 p-2 sm:p-4 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div 
        id="registration-modal"
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-[95vw] sm:max-w-md mx-auto my-4 sm:my-0 overflow-hidden"
        style={{ animation: 'slideUp 0.4s ease-out forwards' }}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button - Larger touch target for mobile */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2.5 rounded-full bg-white/95 hover:bg-white transition-all shadow-lg active:scale-95"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>
        
        {/* Header - Better mobile spacing */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-5 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold leading-tight pr-12">
            Register for Drone Technology Seminar
          </h2>
          <p className="mt-2 text-sm sm:text-base opacity-90">
            Saturday, June 7th, 2025 • Absolutely FREE
          </p>
        </div>
        
        {/* Form - Improved mobile padding and spacing */}
        <div className="p-5 sm:p-6">
          {error && (
            <div className="mb-4 p-4 border rounded-xl text-sm bg-red-50 border-red-200 text-red-700">
              <div className="flex items-start gap-3">
                <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{error}</span>
              </div>
            </div>
          )}
          
          {success && (
            <div className="mb-4 p-4 border rounded-xl text-sm bg-green-50 border-green-200 text-green-700">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{success}</span>
              </div>
            </div>
          )}
          
          <div className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-3">
                Email Address *
              </label>
              <input
                type="email"
                className="border border-gray-300 rounded-xl py-4 px-4 w-full text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
              <p className="mt-2 text-xs text-gray-500">
                We'll send you event updates and reminders
              </p>
            </div>

            {/* Phone Number Field - Better mobile UX */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-3">
                Mobile Number *
              </label>
              <div className="flex">
                <div className="flex items-center border border-gray-300 rounded-l-xl px-4 bg-gray-50 border-r-0">
                  <span className="text-gray-600 text-base font-medium">+91</span>
                </div>
                <input
                  type="tel"
                  className="flex-1 border border-gray-300 rounded-r-xl py-4 px-4 w-full text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder-gray-400"
                  placeholder="Enter 10-digit number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                  maxLength={10}
                  inputMode="numeric"
                  autoComplete="tel"
                />
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Must start with 6, 7, 8, or 9
              </p>
            </div>
            
            {/* Register Button - Larger for mobile */}
            <button 
              type="button" 
              className={`w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 active:scale-98 transition-all text-lg flex items-center justify-center shadow-lg min-h-[56px] touch-manipulation ${bookingLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
              onClick={handleSubmit}
              disabled={bookingLoading}
            >
              {bookingLoading ? (
                <>
                  <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                  <span>Registering...</span>
                </>
              ) : (
                'Register Now - FREE'
              )}
            </button>
            
            {/* Bookings Counter - Better mobile formatting */}
            <div className="flex items-center justify-center text-gray-600 gap-3 mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <Users className="h-5 w-5 text-blue-500 flex-shrink-0" />
              <span className="text-sm sm:text-base text-center">
                {loading ? (
                  <Loader2 className="inline h-4 w-4 animate-spin mr-2" />
                ) : null}
                <strong className="text-blue-600">{recentBookings}+</strong> students registered in last 24 hours
              </span>
            </div>
            
            {/* Terms - Better mobile readability */}
            <div className="text-center pt-2">
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                By registering, you agree to receive updates about the seminar via WhatsApp and email.
                We respect your privacy and will not share your information with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main component for the Drone Seminar Landing Page
const DroneSeminarLanding = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [registrations, setRegistrations] = useState(127);
  
  useEffect(() => {
    // Simulate fetching registration count
    const fetchRegistrations = async () => {
      try {
        setTimeout(() => {
          setRegistrations(127);
        }, 500);
      } catch (error) {
        console.error("Error fetching registrations:", error);
      }
    };
    
    fetchRegistrations();
  }, []);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="">
      <div className="relative overflow-hidden pt-8 sm:pt-12 lg:pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-sky-400/10"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <span className="inline-block bg-orange-100 text-orange-800 px-4 py-2 sm:px-6 py-3 rounded-full text-sm sm:text-base font-semibold mb-4">
                  FREE SEMINAR • JUNE 7, 2025
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 sm:mb-8">
                <span className="text-blue-600">Master the Sky</span>
                <br />
                <span className="text-gray-800">with</span> <span className="text-orange-500">Aerobott</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 leading-relaxed">
                Join India's Leading Drone Manufacturer for an Exclusive FREE Seminar on Drone Technology & Career Opportunities
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start mb-8 sm:mb-10">
                <FloatingAnimatedButton type="register" onClick={openPopup} />
                <FloatingAnimatedButton type="learn" onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })} />
              </div>
            </div>

            {/* Right Content - Event Details Card */}
            <div className="w-full lg:w-[420px]">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Drone Technology Seminar</h3>
                  <div className="w-20 h-1 bg-blue-500 mx-auto rounded"></div>
                </div>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <Calendar className="h-6 w-6 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-base">
                      <strong>Date:</strong> Saturday, June 7th, 2025
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-base">
                      <strong>Time:</strong> 11:00 AM - 4:00 PM
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-base">
                      <strong>Venue:</strong> Hotel Sahara Star
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Award className="h-6 w-6 text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-base">
                      <strong>Cost:</strong> Absolutely FREE
                    </span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex items-center gap-3 text-green-700">
                    <CheckCircle className="h-6 w-6 flex-shrink-0" />
                    <span className="font-semibold text-base">DGCA Approved Training Partner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Registration Form Popup */}
      <RegistrationFormPopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
};

export default DroneSeminarLanding;