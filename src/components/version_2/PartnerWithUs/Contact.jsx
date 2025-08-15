import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We\'ll get back to you soon.');
  };

  return (
    <section className="py-20 px-4 bg-black/40">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-raleway font-medium mb-6 bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
            Let's Start the Conversation
          </h2>
          <p className="text-xl white font-raleway leading-relaxed">
            Fill out the form below and our partnership team will get back to you within 24 hours.
          </p>
        </div>

        <div className="bg-black/40 p-8 rounded-2xl border border-gray-800 shadow-2xl backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block white text-sm font-raleway font-medium mb-2">
                Company Name *
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 font-raleway"
                placeholder="Enter your company name"
              />
            </div>
            <div>
              <label className="block white-400 text-sm font-raleway font-medium mb-2">
                Contact Name *
              </label>
              <input
                type="text"
                name="contactName"
                value={formData.contactName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 font-raleway"
                placeholder="Your full name"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block white-400 text-sm font-raleway font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 font-raleway"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="mb-8">
            <label className="block white-400 text-sm font-raleway font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="6"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-white-400 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 resize-none font-raleway"
              placeholder="Tell us more about your company and partnership goals..."
            ></textarea>
          </div>

         <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-raleway font-medium py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl"
          >
            Submit Partnership Application
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
