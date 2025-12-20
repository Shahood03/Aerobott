import React from 'react';
import { Settings, Code, Wrench } from 'lucide-react';

export default function UnderDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto mt-8 pt-12  text-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-indigo-500 rounded-full opacity-10 animate-pulse delay-500"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10">
          {/* 3D Image placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src="/images/banner/b3.avif" 
                alt="3D Development Illustration" 
                className="w-72 h-72 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              {/* 3D effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-20 rounded-2xl"></div>
            </div>
          </div>

          {/* Animated icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="animate-spin-slow">
              <Settings className="w-12 h-12 text-blue-400" />
            </div>
            <div className="animate-bounce">
              <Code className="w-12 h-12 text-purple-400" />
            </div>
            <div className="animate-pulse">
              <Wrench className="w-12 h-12 text-indigo-400" />
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Under Development
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-delay">
            We're crafting something amazing for you
          </p>

          {/* Description */}
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-gray-400 text-lg leading-relaxed animate-fade-in-delay-2">
              Our team is working hard to bring you an exceptional experience. 
              This page is currently being developed with cutting-edge technology 
              and innovative design principles.
            </p>
          </div>

          {/* Progress indicator */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-sm text-gray-400 mb-2">
              <span>Development Progress</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full animate-pulse" style={{width: '75%'}}></div>
            </div>
          </div>

          {/* Contact section */}
          {/* <div className="text-center animate-fade-in-delay-3">
            <p className="text-gray-400 mb-4">
              Have questions? We'd love to hear from you!
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Contact Us
            </button>
          </div> */}

          {/* Footer */}
          <div className="mt-12 text-gray-500 text-sm animate-fade-in-delay-4">
            <p>© 2025 AeroBott. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fadeIn 1s ease-out 0.6s both;
        }
        
        .animate-fade-in-delay-3 {
          animation: fadeIn 1s ease-out 0.9s both;
        }
        
        .animate-fade-in-delay-4 {
          animation: fadeIn 1s ease-out 1.2s both;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}