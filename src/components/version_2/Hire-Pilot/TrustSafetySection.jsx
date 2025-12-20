import React, { useState } from 'react';
import { Shield, Check, Star, MessageCircle, User, CreditCard, Lock, Search, Users } from 'lucide-react';

const TrustSafetySection = () => {
  const [activeTab, setActiveTab] = useState('trust-safety');

  const tabContent = {
    'trust-safety': {
      title: "TRUST & SAFETY GUARANTEE",
      description: "Rest assured that you're in good hands when using our platform.",
      image: (
        // Original Trust & Safety mockup - showing hire pilot interface
        <div className="w-80 h-[600px] bg-gray-800 rounded-[3rem] shadow-2xl border-8 border-gray-700 relative overflow-hidden">
          <div className="absolute inset-4 bg-gray-900 rounded-[2rem] overflow-hidden">
            {/* Status Bar */}
            <div className="h-6 bg-black flex items-center justify-center relative">
              <div className="absolute left-3 top-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <div className="absolute right-3 top-1 flex space-x-1">
                <div className="w-4 h-2 bg-white rounded-sm"></div>
              </div>
            </div>

            {/* App Header */}
            <div className="bg-gray-800 p-4 flex items-center justify-between border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-300">✕</span>
                </button>
                <span className="text-sm font-medium text-gray-200" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Aerobott
                </span>
              </div>
              <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-xs text-gray-300">⋯</span>
              </button>
            </div>

            {/* Pilot Profile Card */}
            <div className="p-4">
              <div className="bg-gray-800 rounded-lg p-4 shadow-lg border border-gray-700">
                
                {/* Pilot Avatar and Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 font-raleway">
                      Aerobott
                    </p>
                  </div>
                </div>

                {/* Bid Information */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-400">Bid:</span>
                    <span className="font-semibold ml-2 text-white">₹2000</span>
                  </div>
                  <div>
                    <span className="text-blue-400 font-semibold">Due Now:</span>
                    <span className="font-semibold ml-2 text-white">₹0</span>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mb-4 font-raleway">
                  We'll ship you a review of the footage.
                </p>

                {/* Hire Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold mb-3 transition-colors font-raleway">
                  HIRE PILOT
                </button>

                <button className="text-blue-400 text-sm underline hover:text-blue-300 transition-colors font-raleway">
                  cancel
                </button>

                {/* Security Icons */}
                <div className="flex items-center justify-center space-x-2 mt-4">
                  <div className="w-6 h-4 bg-gray-900 border border-gray-600 rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold">VISA</span>
                  </div>
                  <Lock className="w-4 h-4 text-green-500" />
                </div>
              </div>
            </div>

            {/* Home Button */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-gray-400 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    recommendations: {
      title: "RECOMMENDATIONS",
      description: "Get pilot recommendations, compare prices & portfolios to find the best fit.",
      image: (
        // Recommendations mockup - showing pilot search/comparison
        <div className="w-80 h-[600px] bg-gray-800 rounded-[3rem] shadow-2xl border-8 border-gray-700 relative overflow-hidden">
          <div className="absolute inset-4 bg-gray-900 rounded-[2rem] overflow-hidden">
            {/* Status Bar */}
            <div className="h-6 bg-black flex items-center justify-center relative">
              <div className="absolute left-3 top-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <div className="absolute right-3 top-1 flex space-x-1">
                <div className="w-4 h-2 bg-white rounded-sm"></div>
              </div>
            </div>

            {/* App Header */}
            <div className="bg-gray-800 p-4 flex items-center justify-between border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <Search className="w-5 h-5 text-gray-300" />
                <span className="text-sm font-medium text-gray-200 font-raleway">
                  Find Pilots
                </span>
              </div>
              <Users className="w-5 h-5 text-gray-300" />
            </div>

            {/* Search Results */}
            <div className="p-4 space-y-3 overflow-y-auto">
              {/* Pilot 1 */}
              <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-xs text-gray-400">SkyHigh Productions</p>
                  </div>
                  <span className="text-green-400 font-bold text-sm">$120</span>
                </div>
              </div>

              {/* Pilot 2 */}
              <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-3 h-3 text-gray-400" />
                    </div>
                    <p className="text-xs text-gray-400">AeroVision Co.</p>
                  </div>
                  <span className="text-green-400 font-bold text-sm">$95</span>
                </div>
              </div>

              {/* Pilot 3 - Selected */}
              <div className="bg-red-600/20 border-red-500 rounded-lg p-3 border-2">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-xs text-red-300">Aerobott</p>
                  </div>
                  <span className="text-red-300 font-bold text-sm">₹2000</span>
                </div>
                <div className="flex items-center justify-center">
                  <Check className="w-4 h-4 text-red-300 mr-1" />
                  <span className="text-xs text-red-300">SELECTED</span>
                </div>
              </div>

              {/* Pilot 4 */}
              <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-3 h-3 text-gray-400" />
                    </div>
                    <p className="text-xs text-gray-400">DroneWorks Inc.</p>
                  </div>
                  <span className="text-green-400 font-bold text-sm">$200</span>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="absolute bottom-8 left-4 right-4">
              <button className="w-full bg-red-600 text-white py-3 rounded-md font-semibold font-raleway">
                COMPARE SELECTED
              </button>
            </div>
          </div>
        </div>
      )
    },
    chat: {
      title: "PILOT CHAT",
      description: "Get your questions answered and the details before making a decision.",
      image: (
        // Chat mockup - showing conversation with pilot
        <div className="w-80 h-[600px] bg-gray-800 rounded-[3rem] shadow-2xl border-8 border-gray-700 relative overflow-hidden">
          <div className="absolute inset-4 bg-gray-900 rounded-[2rem] overflow-hidden">
            {/* Status Bar */}
            <div className="h-6 bg-black flex items-center justify-center relative">
              <div className="absolute left-3 top-1">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <div className="absolute right-3 top-1 flex space-x-1">
                <div className="w-4 h-2 bg-white rounded-sm"></div>
              </div>
            </div>

            {/* Chat Header */}
            <div className="bg-gray-800 p-4 flex items-center space-x-3 border-b border-gray-700">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-medium text-sm font-raleway">
                  AEROBOTT
                </h3>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-400">Online</span>
                </div>
              </div>
              <MessageCircle className="w-5 h-5 text-gray-400" />
            </div>

            {/* Chat Messages */}
            <div className="p-4 space-y-4 overflow-y-auto h-96">
              {/* Pilot message */}
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-800 rounded-lg p-3 max-w-48">
                  <p className="text-white text-sm font-raleway">
                    Hi! I can definitely help with your drone footage project. What kind of shots are you looking for?
                  </p>
                  <span className="text-xs text-gray-500 mt-1 block">2:34 PM</span>
                </div>
              </div>

              {/* User message */}
              <div className="flex justify-end space-x-2">
                <div className="bg-red-600 rounded-lg p-3 max-w-48">
                  <p className="text-white text-sm font-raleway">
                    I need aerial shots of a wedding venue. How long will it take?
                  </p>
                  <span className="text-xs text-red-200 mt-1 block">2:35 PM</span>
                </div>
              </div>

              {/* Pilot message */}
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-800 rounded-lg p-3 max-w-48">
                  <p className="text-white text-sm font-raleway">
                    Perfect! I specialize in wedding aerials. Typically 2-3 hours for full coverage. Can deliver edited footage in 48 hours.
                  </p>
                  <span className="text-xs text-gray-500 mt-1 block">2:36 PM</span>
                </div>
              </div>

              {/* User message */}
              <div className="flex justify-end space-x-2">
                <div className="bg-red-600 rounded-lg p-3 max-w-48">
                  <p className="text-white text-sm font-raleway">
                    Sounds great! What's included in the $150?
                  </p>
                  <span className="text-xs text-red-200 mt-1 block">2:37 PM</span>
                </div>
              </div>

              {/* Pilot typing indicator */}
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-gray-800 rounded-full flex items-center px-4 py-2 border border-gray-700">
                <input 
                  type="text" 
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-400 font-raleway"
                />
                <button className="ml-2 text-red-400">
                  <MessageCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <section className="bg-black my-16 p-12 flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            
           {/* Main Trust & Safety Banner */}
            <div 
              className={`p-6 rounded-lg shadow-lg border border-gray-700/50 border-l-4 cursor-pointer transition-all duration-300 ${
                activeTab === 'trust-safety' 
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white border-red-400 shadow-red-500/50 transform scale-105 shadow-2xl' 
                  : 'bg-gray-900/50 backdrop-blur-sm border-l-red-500 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 hover:text-white hover:border-red-400 hover:shadow-red-500/50 hover:shadow-2xl hover:scale-105'
              }`}
              onClick={() => setActiveTab('trust-safety')}
            >
              <h2 className={`text-2xl font-bold mb-3 font-raleway transition-colors ${
                activeTab === 'trust-safety' ? 'text-white' : 'text-red-400'
              }`}>
                TRUST & SAFETY GUARANTEE
                {activeTab === 'trust-safety' && <span className="ml-2 text-lg">✓</span>}
              </h2>
              <p className={`leading-relaxed font-raleway transition-colors ${
                activeTab === 'trust-safety' ? 'text-white/90' : 'text-gray-300'
              }`}>
                Rest assured that you're in good hands when using our platform.
              </p>
            </div>

            {/* Recommendations Section */}
            <div 
              className={`p-6 rounded-lg shadow-lg border border-gray-700/50 border-l-4 cursor-pointer transition-all duration-300 ${
                activeTab === 'recommendations' 
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white border-red-400 shadow-red-500/50 transform scale-105 shadow-2xl' 
                  : 'bg-gray-900/50 backdrop-blur-sm border-l-red-500 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 hover:text-white hover:border-red-400 hover:shadow-red-500/50 hover:shadow-2xl hover:scale-105'
              }`}
              onClick={() => setActiveTab('recommendations')}
            >
              <h3 className={`text-2xl font-bold mb-3 transition-colors font-raleway ${
                activeTab === 'recommendations' ? 'text-white' : 'text-red-400'
              }`}>
                RECOMMENDATIONS
                {activeTab === 'recommendations' && <span className="ml-2 text-lg">✓</span>}
              </h3>
              <p className={`leading-relaxed font-raleway transition-colors ${
                activeTab === 'recommendations' ? 'text-white/90' : 'text-gray-300'
              }`}>
                Get pilot recommendations, compare prices & portfolios to find the best fit.
              </p>
            </div>

            {/* Pilot Chat Section */}
            <div 
              className={`p-6 rounded-lg shadow-lg border border-gray-700/50 border-l-4 cursor-pointer transition-all duration-300 ${
                activeTab === 'chat' 
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white border-red-400 shadow-red-500/50 transform scale-105 shadow-2xl' 
                  : 'bg-gray-900/50 backdrop-blur-sm border-l-red-500 hover:bg-gradient-to-r hover:from-red-600 hover:to-red-700 hover:text-white hover:border-red-400 hover:shadow-red-500/50 hover:shadow-2xl hover:scale-105'
              }`}
              onClick={() => setActiveTab('chat')}
            >
              <h3 className={`text-2xl font-bold mb-3 transition-colors font-raleway ${
                activeTab === 'chat' ? 'text-white' : 'text-red-400'
              }`}>
                PILOT CHAT
                {activeTab === 'chat' && <span className="ml-2 text-lg">✓</span>}
              </h3>
              <p className={`leading-relaxed font-raleway transition-colors ${
                activeTab === 'chat' ? 'text-white/90' : 'text-gray-300'
              }`}>
                Get your questions answered and the details before making a decision.
              </p>
            </div>
          </div>

          {/* Right Side - Dynamic Phone Mockup */}
          <div className="flex flex-col items-center space-y-8">
            
            {/* Dynamic Phone Mockup */}
            <div className="relative transition-all duration-500 ease-in-out">
              {tabContent[activeTab].image}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSafetySection;