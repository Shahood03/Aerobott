import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSend, FiCheckCircle, FiAlertCircle, FiCalendar, FiMapPin, FiUser, FiPhone, FiMessageSquare } from 'react-icons/fi';

const DemoRequestPopup = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    state: "",
    city: "",
    preferred_date: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState([]);
  const [focusedField, setFocusedField] = useState(null);
  
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';
  
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };
  
  useEffect(() => {
    if (!isOpen) {
      setFormState({
        name: "",
        phone: "",
        state: "",
        city: "",
        preferred_date: "",
        message: ""
      });
      setSubmitStatus(null);
      setErrors([]);
      setFocusedField(null);
    }
  }, [isOpen]);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
    
    if (errors.length > 0) {
      setErrors([]);
      setSubmitStatus(null);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors([]);
    setSubmitStatus(null);
    
    try {
      const response = await fetch(`${API_URL}/api/demo/request`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        setSubmitStatus('error');
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors([data.error || 'Failed to submit demo request']);
        }
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrors(['Network error. Please check your connection and try again.']);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Load Inter font */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/90 backdrop-blur-md"
            onClick={handleBackdropClick}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ 
                type: "spring", 
                duration: 0.6,
                bounce: 0.3
              }}
              className="relative w-full max-w-md h-fit bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Floating Background Elements */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <motion.div 
                  animate={{ 
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 left-8 w-16 h-16 bg-blue-500 rounded-full blur-xl"
                />
                <motion.div 
                  animate={{ 
                    x: [0, -15, 0],
                    y: [0, 15, 0],
                    scale: [1, 0.9, 1]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute bottom-8 right-8 w-12 h-12 bg-purple-500 rounded-full blur-xl"
                />
                <motion.div 
                  animate={{ 
                    x: [0, 10, 0],
                    y: [0, -10, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                  className="absolute top-1/2 left-1/4 w-8 h-8 bg-cyan-500 rounded-full blur-xl"
                />
              </div>
              
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-3 right-3 z-10 p-2 text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-full backdrop-blur-sm"
              >
                <FiX size={18} />
              </motion.button>
              
              {/* Header */}
              <div className="p-5 pb-2 text-center">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-3 shadow-lg shadow-blue-500/25"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <FiSend className="text-white text-xl" />
                    </motion.div>
                  </motion.div>
                  
                  <h2 className="text-2xl font-bold text-white mb-1 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Request Demo
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed px-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Experience precision farming with AI-powered drones
                  </p>
                </motion.div>
              </div>
              
              {/* Form */}
              <motion.form
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                onSubmit={handleSubmit}
                className="p-5 pt-2"
              >
                {/* Success Message */}
                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -10 }}
                      className="mb-4 p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-xl backdrop-blur-sm"
                    >
                      <div className="flex items-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", bounce: 0.6 }}
                        >
                          <FiCheckCircle className="text-green-400 mr-2 text-lg flex-shrink-0" />
                        </motion.div>
                        <div>
                          <p className="text-green-300 text-sm font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Demo request submitted! 🎉
                          </p>
                          <p className="text-green-300/80 text-xs mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>
                            We'll contact you within 24 hours.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Error Messages */}
                <AnimatePresence>
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -10 }}
                      className="mb-4 p-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-400/30 rounded-xl backdrop-blur-sm"
                    >
                      <div className="flex items-start">
                        <FiAlertCircle className="text-red-400 mr-2 text-lg mt-0.5 flex-shrink-0" />
                        <div>
                          {errors.map((error, index) => (
                            <motion.p 
                              key={index} 
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="text-red-300 text-sm" 
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              {error}
                            </motion.p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {/* Form Fields */}
                <div className="space-y-3">
                  {/* Name */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="relative group"
                  >
                    <label className="block text-xs font-medium text-gray-300 mb-1 transition-colors group-focus-within:text-blue-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <FiUser className="inline mr-1 text-sm" />
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-3 py-2.5 bg-white/5 border border-white/20 rounded-xl text-white text-sm placeholder-gray-400 focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 backdrop-blur-sm"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        placeholder="Enter your full name"
                        required
                        disabled={isSubmitting}
                      />
                      <AnimatePresence>
                        {focusedField === 'name' && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                  
                  {/* Phone */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="relative group"
                  >
                    <label className="block text-xs font-medium text-gray-300 mb-1 transition-colors group-focus-within:text-blue-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <FiPhone className="inline mr-1 text-sm" />
                      Phone Number *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-3 py-2.5 bg-white/5 border border-white/20 rounded-xl text-white text-sm placeholder-gray-400 focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 backdrop-blur-sm"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        placeholder="+91 9876543210"
                        required
                        disabled={isSubmitting}
                      />
                      <AnimatePresence>
                        {focusedField === 'phone' && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                  
                  {/* State and City */}
                  <div className="grid grid-cols-2 gap-3">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="relative group"
                    >
                      <label className="block text-xs font-medium text-gray-300 mb-1 transition-colors group-focus-within:text-blue-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <FiMapPin className="inline mr-1 text-sm" />
                        State *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="state"
                          value={formState.state}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('state')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-3 py-2.5 bg-white/5 border border-white/20 rounded-xl text-white text-sm placeholder-gray-400 focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 backdrop-blur-sm"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                          placeholder="Maharashtra"
                          required
                          disabled={isSubmitting}
                        />
                        <AnimatePresence>
                          {focusedField === 'state' && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                      className="relative group"
                    >
                      <label className="block text-xs font-medium text-gray-300 mb-1 transition-colors group-focus-within:text-blue-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                        <FiMapPin className="inline mr-1 text-sm" />
                        City/Village *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="city"
                          value={formState.city}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('city')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-3 py-2.5 bg-white/5 border border-white/20 rounded-xl text-white text-sm placeholder-gray-400 focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 backdrop-blur-sm"
                          style={{ fontFamily: 'Inter, sans-serif' }}
                          placeholder="Mumbai"
                          required
                          disabled={isSubmitting}
                        />
                        <AnimatePresence>
                          {focusedField === 'city' && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2"
                            >
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Preferred Date */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="relative group"
                  >
                    <label className="block text-xs font-medium text-gray-300 mb-1 transition-colors group-focus-within:text-blue-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <FiCalendar className="inline mr-1 text-sm" />
                      Preferred Demo Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="preferred_date"
                        value={formState.preferred_date}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('preferred_date')}
                        onBlur={() => setFocusedField(null)}
                        min={getMinDate()}
                        className="w-full px-3 py-2.5 bg-white/5 border border-white/20 rounded-xl text-white text-sm focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 backdrop-blur-sm"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        disabled={isSubmitting}
                      />
                      <AnimatePresence>
                        {focusedField === 'preferred_date' && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                  
                  {/* Message */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                    className="relative group"
                  >
                    <label className="block text-xs font-medium text-gray-300 mb-1 transition-colors group-focus-within:text-blue-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <FiMessageSquare className="inline mr-1 text-sm" />
                      Additional Message
                    </label>
                    <div className="relative">
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        rows={2}
                        className="w-full px-3 py-2.5 bg-white/5 border border-white/20 rounded-xl text-white text-sm placeholder-gray-400 focus:border-blue-500/60 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none backdrop-blur-sm"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                        placeholder="Tell us about your requirements..."
                        disabled={isSubmitting}
                      />
                      <AnimatePresence>
                        {focusedField === 'message' && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="absolute right-2 top-2"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </div>
                
                {/* Submit Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 text-white font-semibold rounded-xl transition-all duration-500 hover:from-blue-700 hover:via-blue-800 hover:to-purple-800 hover:shadow-lg hover:shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {/* Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-300"
                    animate={{
                      x: isSubmitting ? ['-100%', '100%'] : 0,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: isSubmitting ? Infinity : 0,
                      ease: "linear"
                    }}
                  />
                  
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"
                      ></motion.div>
                      <span className="text-sm">Submitting...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.6 }}
                      >
                        <FiCheckCircle className="mr-2 text-base" />
                      </motion.div>
                      <span className="text-sm">Request Submitted!</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="mr-2 text-base" />
                      <span className="text-sm">Request Demo</span>
                    </>
                  )}
                </motion.button>
                
                {/* Footer Text */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="text-gray-400 text-xs text-center mt-3 leading-relaxed px-2" 
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  🔒 Secure & confidential. We'll contact you within 24 hours.
                </motion.p>
              </motion.form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DemoRequestPopup;