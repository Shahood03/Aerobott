import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const NewsletterSubscription = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Indian Flag Component
  const IndianFlag = () => (
    <img 
      src="/images/element/flg.png" 
      alt="Indian Flag" 
      className="w-6 h-4 object-cover rounded-sm"
    />
  );

  return (
    <section className="w-full bg-black py-16 px-16 relative overflow-hidden">
      {/* Full black background with decorative elements */}
      <div className="absolute inset-0 bg-black">
        {/* Decorative background lines and dots scattered across the section */}
        <div className="absolute inset-0 opacity-30">
          {/* Top area decorative elements */}
          <div className="w-96 h-1 left-[20%] top-[15%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0" />
          <div className="w-1.5 h-1.5 left-[85%] top-[12%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-slate-500 rounded-full" />
          <div className="w-80 h-1 left-[60%] top-[20%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0" />
          <div className="w-1.5 h-1.5 left-[90%] top-[25%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-slate-500 rounded-full" />
          
          {/* Left side decorative elements */}
          <div className="w-64 h-1 left-[5%] top-[70%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0" />
          <div className="w-1.5 h-1.5 left-[3%] top-[75%] absolute bg-gradient-to-l from-blue-500/0 via-blue-500/50 to-slate-500 rounded-full" />
          <div className="w-72 h-1 left-[8%] top-[65%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0" />
          <div className="w-1.5 h-1.5 left-[2%] top-[80%] absolute bg-gradient-to-l from-blue-500/0 via-blue-500/50 to-slate-500 rounded-full" />
          
          {/* Right side decorative elements */}
          <div className="w-56 h-1 left-[75%] top-[60%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0" />
          <div className="w-1.5 h-1.5 left-[95%] top-[65%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-slate-500 rounded-full" />
          <div className="w-48 h-1 left-[70%] top-[85%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0" />
          <div className="w-1.5 h-1.5 left-[92%] top-[90%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-slate-500 rounded-full" />
          
          {/* Top left area */}
          <div className="w-64 h-1 left-[10%] top-[10%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0" />
          <div className="w-1.5 h-1.5 left-[5%] top-[8%] absolute bg-gradient-to-l from-blue-500/0 via-blue-500/50 to-slate-500 rounded-full" />
          <div className="w-80 h-1 left-[15%] top-[5%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0" />
          <div className="w-1.5 h-1.5 left-[12%] top-[3%] absolute bg-gradient-to-l from-blue-500/0 via-blue-500/50 to-slate-500 rounded-full" />
          
          {/* Cyan accent elements */}
          <div className="w-16 h-1 left-[25%] top-[30%] absolute bg-gradient-to-r from-cyan-600/0 via-cyan-600/60 to-cyan-600/0" />
          <div className="w-1.5 h-1.5 left-[22%] top-[32%] absolute bg-gradient-to-l from-cyan-600 via-cyan-600 to-blue-500/0 rounded-full" />
          
          {/* Vertical decorative lines */}
          <div className="w-1 h-32 left-[88%] top-[40%] absolute bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0" />
          <div className="w-1 h-24 left-[15%] top-[45%] absolute bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0" />
          <div className="w-1 h-40 left-[92%] top-[35%] absolute bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0" />
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 w-full max-w-none mx-auto">
        {/* Newsletter Form Container with gradient background */}
        <div className="relative bg-gradient-to-b from-[#152063] via-[#10194E]/75 to-black rounded-[20px] overflow-hidden p-12 lg:p-16">
          
          {/* Additional decorative elements inside the form container */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-[484.72px] h-1 left-[60%] top-[25%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0" />
            <div className="w-1.5 h-1.5 left-[95%] top-[28%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/40 to-slate-500 rounded-full" />
            <div className="w-96 h-1 left-[5%] top-[80%] absolute bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0" />
            <div className="w-1.5 h-1.5 left-[2%] top-[85%] absolute bg-gradient-to-l from-blue-500/0 via-blue-500/40 to-slate-500 rounded-full" />
          </div>

          <div className="relative z-10">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-white text-3xl lg:text-4xl font-light font-raleway leading-tight mb-6">
                STAY CONNECT WITH AEROBOTT
              </h1>
              <p className="text-white text-base font-normal font-raleway leading-normal tracking-tight max-w-[591px] mx-auto">
                Sign up for our newsletter to get the latest news, exclusive offers, and insider tips delivered straight to your inbox.
              </p>
            </div>

            {/* Form Section */}
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                
                {/* Name Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-white text-base font-normal font-raleway leading-normal">
                    Name
                  </label>
                  <div className="h-14 px-3.5 py-2.5 bg-white rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-gray-300 flex items-center">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter Your Name"
                      className="flex-1 bg-transparent text-gray-900 text-base font-normal font-raleway leading-normal outline-none placeholder:text-gray-500 placeholder:font-light placeholder:leading-loose"
                    />
                  </div>
                </div>
                   <div className="flex flex-col gap-1.5">
                  <label className="text-white text-base font-normal font-raleway leading-normal">
                    Phone Number
                  </label>
                  <div className="h-14 bg-white rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-gray-300 flex overflow-hidden">
                    {/* Country Code Section */}
                    <div className="pl-3.5 pr-3 py-2.5 flex items-center gap-1 border-r border-gray-200">
                      <IndianFlag />
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </div>
                    {/* Phone Input Section */}
                    <div className="flex-1 px-3.5 py-2.5 flex items-center gap-2">
                      <span className="text-gray-500 text-base font-normal font-raleway leading-normal">+91</span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter Your Phone Number"
                        className="flex-1 bg-transparent text-gray-900 text-base font-normal font-raleway leading-normal outline-none placeholder:text-gray-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-white text-base font-normal font-raleway leading-normal">
                  Message 
                  </label>
                  <div className="h-14 px-3.5 py-2.5 bg-white rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border border-gray-300 flex items-center">
                    <input
                      type="Type your message"
                      name="Type your message"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter Your Email"
                      className="flex-1 bg-transparent text-gray-900 text-base font-normal font-raleway leading-normal outline-none placeholder:text-gray-500 placeholder:font-light placeholder:leading-loose"
                    />
                  </div>
                </div>

                {/* Phone Field */}
             
              </div>

              {/* Subscribe Button */}
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => console.log('Form submitted:', formData)}
                  className="w-72 h-14 px-3 py-2.5 bg-[#152063] hover:bg-[#1a2570] transition-colors duration-200 rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex justify-center items-center gap-2 cursor-pointer"
                >
                  <span className="text-white text-base font-normal font-raleway leading-tight">
                    Subscribe
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;