import React, { useState } from 'react';
import { ChevronDown, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const NewsletterSubscription = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [errors, setErrors] = useState([]);

  // Get API URL from environment variable
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear errors when user starts typing
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
      const response = await fetch(`${API_URL}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors([data.error || 'Failed to subscribe to newsletter']);
        }
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrors(['Network error. Please check your connection and try again.']);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Indian Flag Component
  const IndianFlag = () => (
    <img 
      src="/images/element/flg.png" 
      alt="Indian Flag" 
      className="w-5 sm:w-6 h-3 sm:h-4 object-cover rounded-sm"
    />
  );

  return (
    <section className="w-full bg-black py-8 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Full black background with decorative elements */}
      <div className="absolute inset-0 bg-black">
        {/* Decorative background lines and dots scattered across the section */}
        <div className="absolute inset-0 opacity-20 sm:opacity-30">
          {/* Top area decorative elements */}
          <div className="w-48 sm:w-72 lg:w-96 h-1 left-[20%] top-[15%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0" />
          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 left-[85%] top-[12%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-slate-500 rounded-full" />
          <div className="w-40 sm:w-60 lg:w-80 h-1 left-[60%] top-[20%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0" />
          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 left-[90%] top-[25%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-slate-500 rounded-full" />
          
          {/* Left side decorative elements */}
          <div className="w-32 sm:w-48 lg:w-64 h-1 left-[5%] top-[70%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0" />
          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 left-[3%] top-[75%] absolute bg-gradient-to-l from-blue-500/0 via-blue-500/50 to-slate-500 rounded-full" />
          <div className="w-36 sm:w-54 lg:w-72 h-1 left-[8%] top-[65%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0" />
          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 left-[2%] top-[80%] absolute bg-gradient-to-l from-blue-500/0 via-blue-500/50 to-slate-500 rounded-full" />
          
          {/* Right side decorative elements */}
          <div className="w-28 sm:w-42 lg:w-56 h-1 left-[75%] top-[60%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0" />
          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 left-[95%] top-[65%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-slate-500 rounded-full" />
          <div className="w-24 sm:w-36 lg:w-48 h-1 left-[70%] top-[85%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0" />
          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 left-[92%] top-[90%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-slate-500 rounded-full" />
          
          {/* Top left area */}
          <div className="w-32 sm:w-48 lg:w-64 h-1 left-[10%] top-[10%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0" />
          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 left-[5%] top-[8%] absolute bg-gradient-to-l from-blue-500/0 via-blue-500/50 to-slate-500 rounded-full" />
          <div className="w-40 sm:w-60 lg:w-80 h-1 left-[15%] top-[5%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0" />
          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 left-[12%] top-[3%] absolute bg-gradient-to-l from-blue-500/0 via-blue-500/50 to-slate-500 rounded-full" />
          
          {/* Cyan accent elements */}
          <div className="w-8 sm:w-12 lg:w-16 h-1 left-[25%] top-[30%] absolute bg-gradient-to-r from-cyan-600/0 via-cyan-600/60 to-cyan-600/0" />
          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 left-[22%] top-[32%] absolute bg-gradient-to-l from-cyan-600 via-cyan-600 to-blue-500/0 rounded-full" />
          
          {/* Vertical decorative lines */}
          <div className="w-1 h-16 sm:h-24 lg:h-32 left-[88%] top-[40%] absolute bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0" />
          <div className="w-1 h-12 sm:h-18 lg:h-24 left-[15%] top-[45%] absolute bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0" />
          <div className="w-1 h-20 sm:h-30 lg:h-40 left-[92%] top-[35%] absolute bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0" />
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-none mx-auto">
        {/* Newsletter Form Container with gradient background */}
        <div className="relative bg-gradient-to-b from-[#152063] via-[#10194E]/75 to-black rounded-[20px] overflow-hidden p-6 sm:p-8 lg:p-12 xl:p-16">
          
          {/* Additional decorative elements inside the form container */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-[200px] sm:w-[300px] lg:w-[484.72px] h-1 left-[60%] top-[25%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0" />
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 left-[95%] top-[28%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-slate-500 rounded-full" />
            <div className="w-[150px] sm:w-[250px] lg:w-96 h-1 left-[5%] top-[80%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0" />
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 left-[2%] top-[85%] absolute bg-gradient-to-l from-blue-500/0 via-blue-500/40 to-slate-500 rounded-full" />
          </div>

          <div className="relative z-10">
            {/* Header Section */}
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h1 className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light font-raleway leading-tight mb-4 sm:mb-6">
                STAY CONNECT WITH AEROBOTT
              </h1>
              <p className="text-white text-sm sm:text-base font-normal font-raleway leading-normal tracking-tight max-w-[591px] mx-auto px-4">
                Sign up for our newsletter to get the latest news, exclusive offers, and insider tips delivered straight to your inbox.
              </p>
            </div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-xl backdrop-blur-sm">
                <div className="flex items-center">
                  <CheckCircle className="text-green-400 mr-3 text-xl flex-shrink-0" />
                  <div>
                    <p className="text-green-300 text-sm font-semibold font-raleway">
                      Successfully subscribed to newsletter!
                    </p>
                    <p className="text-green-300/80 text-xs mt-1 font-raleway">
                      Thank you for subscribing. You'll receive the latest updates in your inbox.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Messages */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-xl backdrop-blur-sm">
                <div className="flex items-start">
                  <AlertCircle className="text-red-400 mr-3 text-xl mt-0.5 flex-shrink-0" />
                  <div>
                    {errors.map((error, index) => (
                      <p key={index} className="text-red-300 text-sm font-raleway">
                        {error}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="w-full">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                
                {/* Name Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-white text-sm sm:text-base font-normal font-raleway leading-normal">
                    Name
                  </label>
                  <div className="h-12 sm:h-14 px-3 sm:px-3.5 py-2 sm:py-2.5 bg-white rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-gray-300 flex items-center">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter Your Name"
                      className="flex-1 bg-transparent text-gray-900 text-sm sm:text-base font-normal font-raleway leading-normal outline-none placeholder:text-gray-500 placeholder:font-light placeholder:leading-loose"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-white text-sm sm:text-base font-normal font-raleway leading-normal">
                    Phone Number
                  </label>
                  <div className="h-12 sm:h-14 bg-white rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-gray-300 flex overflow-hidden">
                    {/* Country Code Section */}
                    <div className="pl-3 sm:pl-3.5 pr-2 sm:pr-3 py-2 sm:py-2.5 flex items-center gap-1 border-r border-gray-200">
                      <IndianFlag />
                      <ChevronDown className="w-4 sm:w-5 h-4 sm:h-5 text-gray-500" />
                    </div>
                    {/* Phone Input Section */}
                    <div className="flex-1 px-2 sm:px-3.5 py-2 sm:py-2.5 flex items-center gap-2">
                      <span className="text-gray-500 text-sm sm:text-base font-normal font-raleway leading-normal">+91</span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter Your Phone Number"
                        className="flex-1 bg-transparent text-gray-900 text-sm sm:text-base font-normal font-raleway leading-normal outline-none placeholder:text-gray-500"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-white text-sm sm:text-base font-normal font-raleway leading-normal">
                    Message 
                  </label>
                  <div className="h-12 sm:h-14 px-3 sm:px-3.5 py-2 sm:py-2.5 bg-white rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-gray-300 flex items-center">
                    <input
                      type="text"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Type your message"
                      className="flex-1 bg-transparent text-gray-900 text-sm sm:text-base font-normal font-raleway leading-normal outline-none placeholder:text-gray-500 placeholder:font-light placeholder:leading-loose"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
              </div>

              {/* Subscribe Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-72 h-12 sm:h-14 px-3 py-2 sm:py-2.5 bg-[#152063] hover:bg-[#1a2570] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex justify-center items-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 text-white animate-spin" />
                      <span className="text-white text-sm sm:text-base font-normal font-raleway leading-tight">
                        Subscribing...
                      </span>
                    </>
                  ) : (
                    <span className="text-white text-sm sm:text-base font-normal font-raleway leading-tight">
                      Subscribe
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;