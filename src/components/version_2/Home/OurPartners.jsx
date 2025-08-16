import React from 'react';
import { Image } from 'lucide-react';

const OurPartners = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full bg-black overflow-hidden px-4 sm:px-6 md:px-8 lg:px-16 z-2 pb-8 sm:pb-12 lg:pb-16 pt-8 sm:pt-12 lg:pt-16">
      {/* Background gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/7 to-transparent z-1"></div>
      
      {/* Background glow effect */}
      <div className="absolute top-[-249px] left-1/2 transform -translate-x-1/2 w-[793px] h-[499px] bg-gradient-radial from-white/10 to-transparent opacity-10 rounded-lg pointer-events-none z-1"></div>

      <div className="flex flex-col items-center justify-center gap-8 sm:gap-11 w-full relative z-1">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-3xl">
          
          {/* Main Heading */}
          <div className="w-full">
            <h2 className="text-center text-[#d5dbe6] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-raleway font-medium leading-tight">
              Our{' '}
              <span className="font-raleway font-normal text-[#d5dbe6]">Partners</span>
            </h2>
          </div>
          
          {/* Subtitle */}
          <div className="w-full">
            <p className="text-center text-[#d5dbe6]/60 text-sm sm:text-base font-raleway leading-relaxed mb-6 sm:mb-8 px-2">
              Explore our collaborative partnerships and creative works
            </p>
          </div>
        </div>

        {/* Gallery Moving Rows */}
        <div className="space-y-4 sm:space-y-6 w-full">
          {/* First Row - Moving Left to Right */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="flex animate-scroll-left space-x-3 sm:space-x-4">
              {/* First set of images */}
              <div className="flex items-center space-x-3 sm:space-x-4 shrink-0">
                <PartnerImage src="/images/partners/p1.png" alt="Partner collaboration 1" />
                <PartnerImage src="/images/partners/p2.png" alt="Technology innovation partnership" />
                <PartnerImage src="/images/partners/p3.png" alt="Strategic alliance workshop" />
                <PartnerImage src="/images/partners/p4.png" alt="Innovation lab partnership" />
                <PartnerImage src="/images/partners/p5.png" alt="Skills development initiative" />
                <PartnerImage src="/images/partners/p6.png" alt="Joint venture achievement" />
                <PartnerImage src="/images/partners/p7.jpg" alt="Collaborative project" />
                <PartnerImage src="/images/partners/p8.png" alt="Partnership milestone" />
                <PartnerImage src="/images/partners/p9.png" alt="Strategic alliance workshop" />
                <PartnerImage src="/images/partners/p10.png" alt="Innovation lab partnership" />
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center space-x-3 sm:space-x-4 shrink-0">
                <PartnerImage src="/images/partners/p1.png" alt="Partner collaboration 1" />
                <PartnerImage src="/images/partners/p2.png" alt="Technology innovation partnership" />
                <PartnerImage src="/images/partners/p3.png" alt="Strategic alliance workshop" />
                <PartnerImage src="/images/partners/p4.png" alt="Innovation lab partnership" />
                <PartnerImage src="/images/partners/p5.png" alt="Skills development initiative" />
                <PartnerImage src="/images/partners/p6.png" alt="Joint venture achievement" />
                <PartnerImage src="/images/partners/p7.jpg" alt="Collaborative project" />
                <PartnerImage src="/images/partners/p8.png" alt="Partnership milestone" />
                <PartnerImage src="/images/partners/p9.png" alt="Strategic alliance workshop" />
                <PartnerImage src="/images/partners/p10.png" alt="Innovation lab partnership" />
              </div>
            </div>
          </div>

          {/* Second Row - Moving Right to Left */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="flex animate-scroll-right space-x-3 sm:space-x-4">
              {/* First set of images */}
              <div className="flex items-center space-x-3 sm:space-x-4 shrink-0">
                <PartnerImage src="/images/partners/p10.png" alt="Innovation lab partnership" />
                <PartnerImage src="/images/partners/p9.png" alt="Strategic alliance workshop" />
                <PartnerImage src="/images/partners/p8.png" alt="Partnership milestone" />
                <PartnerImage src="/images/partners/p7.jpg" alt="Collaborative project" />
                <PartnerImage src="/images/partners/p6.png" alt="Joint venture achievement" />
                <PartnerImage src="/images/partners/p5.png" alt="Skills development initiative" />
                <PartnerImage src="/images/partners/p4.png" alt="Innovation lab partnership" />
                <PartnerImage src="/images/partners/p3.png" alt="Strategic alliance workshop" />
                <PartnerImage src="/images/partners/p2.png" alt="Technology innovation partnership" />
                <PartnerImage src="/images/partners/p1.png" alt="Partner collaboration 1" />
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center space-x-3 sm:space-x-4 shrink-0">
                <PartnerImage src="/images/partners/p10.png" alt="Innovation lab partnership" />
                <PartnerImage src="/images/partners/p9.png" alt="Strategic alliance workshop" />
                <PartnerImage src="/images/partners/p8.png" alt="Partnership milestone" />
                <PartnerImage src="/images/partners/p7.jpg" alt="Collaborative project" />
                <PartnerImage src="/images/partners/p6.png" alt="Joint venture achievement" />
                <PartnerImage src="/images/partners/p5.png" alt="Skills development initiative" />
                <PartnerImage src="/images/partners/p4.png" alt="Innovation lab partnership" />
                <PartnerImage src="/images/partners/p3.png" alt="Strategic alliance workshop" />
                <PartnerImage src="/images/partners/p2.png" alt="Technology innovation partnership" />
                <PartnerImage src="/images/partners/p1.png" alt="Partner collaboration 1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for the scrolling animations */}
      <style jsx>{`
        @keyframes scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 35s linear infinite;
        }

        /* Ensure hardware acceleration for smoother animation */
        .animate-scroll-left,
        .animate-scroll-right {
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }

        /* Pause animation on hover for better UX */
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }

        /* Respect reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-left,
          .animate-scroll-right {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

// Partner Image Component with responsive sizing
const PartnerImage = ({ src, alt }) => {
  return (
    <div className="group relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 will-change-transform flex-shrink-0">
      {/* Image Container with padding for better logo display */}
      <div className="absolute inset-3 sm:inset-4 flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          className="max-w-full max-h-full w-auto h-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Subtle hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Hover effect corner accents */}
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-5 sm:w-6 h-5 sm:h-6 border-t-2 border-l-2 border-gray-300/0 group-hover:border-gray-400/60 transition-all duration-300"></div>
      <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-5 sm:w-6 h-5 sm:h-6 border-b-2 border-r-2 border-gray-300/0 group-hover:border-gray-400/60 transition-all duration-300"></div>
    </div>
  );
};

export default OurPartners;