import React, { useState } from 'react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async () => {
    if (email) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        console.log('Subscribed with email:', email);
        alert('Thank you for subscribing!');
        setEmail('');
        setIsLoading(false);
      }, 1000);
    } else {
      alert('Please enter your email address');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  return (
    <div className="w-full mx-auto bg-white py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8 xl:px-32">
      <div 
        className="rounded-2xl sm:rounded-3xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 text-center shadow-xl"
        style={{
          background: 'linear-gradient(95.57deg, #0E2C61 0.21%, #1D5AC7 99.53%)'
        }}
      >
        {/* Header Section - Responsive */}
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight px-2">
            Stay Connected With Aerobott
          </h2>
          
          <p className="text-blue-100 text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 lg:mb-10 max-w-xs sm:max-w-lg lg:max-w-3xl mx-auto leading-relaxed px-2">
            Sign up for our newsletter to get the latest news, exclusive offers, and insider 
            tips delivered straight to your inbox.
          </p>
        </div>

        {/* Subscription Form - Fully Responsive */}
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
          {/* Mobile-First: Stacked Layout */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isLoading}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-gray-700 bg-white rounded-lg sm:rounded-l-lg sm:rounded-r-none border-none outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-blue-600 placeholder-gray-400 text-sm sm:text-base transition-all duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] touch-manipulation"
              />
              {/* Email validation indicator */}
              {email && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  {email.includes('@') ? (
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              )}
            </div>
            
            <button
              onClick={handleSubscribe}
              disabled={isLoading || !email}
              className="bg-orange-500 hover:bg-orange-600 active:bg-orange-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-r-lg sm:rounded-l-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-blue-600 text-sm sm:text-base shadow-sm hover:shadow-md transform hover:scale-105 active:scale-95 min-h-[44px] touch-manipulation flex items-center justify-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="hidden sm:inline">Subscribing...</span>
                  <span className="sm:hidden">...</span>
                </>
              ) : (
                <>
                  <span>Subscribe</span>
                  <svg className="ml-1 sm:ml-2 w-4 h-4 transition-transform duration-200 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Additional Info - Mobile Responsive */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-blue-200 text-xs sm:text-sm opacity-80 max-w-md mx-auto px-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>

        {/* Social Proof - Optional */}
        <div className="mt-4 sm:mt-6 flex items-center justify-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1 sm:gap-2 text-blue-200 text-xs sm:text-sm">
            <div className="flex -space-x-1">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-orange-400 border-2 border-white"></div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-400 border-2 border-white"></div>
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-400 border-2 border-white"></div>
            </div>
            <span className="hidden sm:inline">5,000+ subscribers</span>
            <span className="sm:hidden">5k+ joined</span>
          </div>
          
          <div className="flex items-center gap-1 text-blue-200 text-xs sm:text-sm">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="hidden sm:inline">Trusted by professionals</span>
            <span className="sm:hidden">Trusted</span>
          </div>
        </div>
      </div>

      {/* Custom CSS for enhanced mobile experience */}
      <style jsx>{`
        .touch-manipulation {
          touch-action: manipulation;
        }
        
        /* Ensure proper focus styles for accessibility */
        // input:focus {
        //   box-shadow: 0 0 0 2px rgba(251, 146, 60, 0.5);
        // }
        
        // button:focus {
        //   box-shadow: 0 0 0 2px rgba(251, 146, 60, 0.5);
        // }
        
        /* Smooth transitions for all interactive elements */
        input, button {
          transition: all 0.2s ease-in-out;
        }
        
        /* Enhanced hover effects for desktop */
        @media (hover: hover) {
          button:hover {
            transform: translateY(-1px);
          }
        }
        
        /* Optimize for very small screens */
        @media (max-width: 320px) {
          .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        /* Better spacing for large screens */
        @media (min-width: 1280px) {
          .max-w-xl {
            max-width: 32rem;
          }
        }
      `}</style>
    </div>
  );
};

export default NewsletterSubscription;