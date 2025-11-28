import React, { useState } from 'react';
import { Sparkles, Mail, Bell } from 'lucide-react';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNotify = () => {
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse top-0 left-0"></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse bottom-0 right-0 animation-delay-2000"></div>
        <div className="absolute w-96 h-96 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-full p-6 inline-block">
            <Sparkles className="w-16 h-16 text-white animate-pulse" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          Coming Soon
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-16 max-w-2xl mx-auto">
          We're working on something amazing. Stay tuned for our launch!
        </p>

        {/* Email subscription */}
        <div className="max-w-md mx-auto">
          {!subscribed ? (
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition"
                />
              </div>
              <button
                onClick={handleNotify}
                className="px-8 py-4 bg-white text-indigo-900 font-semibold rounded-xl hover:bg-opacity-90 transition duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Bell className="w-5 h-5" />
                Notify Me
              </button>
            </div>
          ) : (
            <div className="bg-green-500 bg-opacity-20 backdrop-blur-lg border border-green-400 border-opacity-30 rounded-xl p-4 text-green-100 animate-pulse">
              ✓ Thanks! We'll notify you when we launch.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}