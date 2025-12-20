import React, { useEffect, useRef, useState } from 'react';

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      quote: "Great pilot. Went out next day after getting hired and uploaded content very quickly. Did everything asked!",
      name: "Ravi Kumar",
      position: "Operations Head",
      image: "/images/team/t7.avif",
      backgroundImage: "/images/element/Rectangle.avif"
    },
    {
      id: 2,
      quote: "The comprehensive curriculum and hands-on approach made all the difference. Our drone pilots are now fully certified and operating at peak efficiency.",
      name: "Roshani Khandelwal",
      position: "Technical Director",
      image: "/images/team/t9.avif",
      backgroundImage: "/images/element/Rectangle.avif"
    },
    {
      id: 3,
      quote: "Outstanding training program that covers everything from basic operations to advanced commercial applications. The certification process was seamless.",
      name: "Rajesh Yadav",
      position: "Fleet Manager",
      image: "/images/team/t8.avif",
      backgroundImage: "/images/element/Rectangle.avif"
    }
  ];

  useEffect(() => {
    // Auto-advance slides every 4 seconds
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [testimonials.length]);

  const getPreviousIndex = () => {
    return (currentSlide - 1 + testimonials.length) % testimonials.length;
  };

  const getNextIndex = () => {
    return (currentSlide + 1) % testimonials.length;
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    // Reset the interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, 4000);
  };

  return (
    <div className=" bg-black flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden font-raleway">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-gradient-to-br from-blue-600/20 to-violet-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Header */}
      <div className="relative z-30 mb-10 text-center">
        <h2 className="text-[#d5dbe6] text-4xl md:text-5xl font-raleway font-medium leading-tight">
          Clients{" "}
          <span className="text-5xl md:text-8xl inline-block align-middle">
            ♡
          </span>{" "}
          <span className="font-raleway font-normal text-[#d5dbe6] relative">
            Our Pilots
          </span>
        </h2>
        <div className="flex items-center justify-center space-x-3 sm:space-x-4">
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center flex-1">
        {/* Mobile Layout - Single Card */}
        <div className="block lg:hidden w-full max-w-md mx-auto">
          <div className="transform scale-100 transition-all duration-700 ease-in-out">
            <TestimonialCard 
              testimonial={testimonials[currentSlide]} 
              isCenter={true}
              isMobile={true}
            />
          </div>
        </div>

        {/* Desktop Layout - Three Card Carousel */}
        <div className="hidden lg:block relative w-full">
          {/* Side Cards (Dimmed) */}
          <div className="absolute left-0 z-10 opacity-30 transform -translate-x-8 scale-75">
            <TestimonialCard 
              testimonial={testimonials[getPreviousIndex()]} 
              isCenter={false}
              isMobile={false}
            />
          </div>

          <div className="absolute right-0 z-10 opacity-30 transform translate-x-8 scale-75">
            <TestimonialCard 
              testimonial={testimonials[getNextIndex()]} 
              isCenter={false}
              isMobile={false}
            />
          </div>

          {/* Center Card */}
          <div className="relative z-30 transform scale-100 transition-all duration-700 ease-in-out flex justify-center">
            <TestimonialCard 
              testimonial={testimonials[currentSlide]} 
              isCenter={true}
              isMobile={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial, isCenter, isMobile }) => {
  const getCardDimensions = () => {
    if (isMobile) {
      return 'w-full max-w-sm h-[400px] sm:h-[450px]';
    }
    return isCenter ? 'w-[641px] h-[457px]' : 'w-[480px] h-[343px]';
  };

  const getQuoteIconSize = () => {
    if (isMobile) {
      return 'w-12 h-9';
    }
    return isCenter ? 'w-14 h-11' : 'w-12 h-9';
  };

  const getQuoteIconInner = () => {
    if (isMobile) {
      return 'w-6 h-5';
    }
    return isCenter ? 'w-8 h-6' : 'w-6 h-5';
  };

  const getTextSize = () => {
    if (isMobile) {
      return 'text-sm sm:text-base';
    }
    return isCenter ? 'text-lg' : 'text-base';
  };

  const getImageSize = () => {
    if (isMobile) {
      return 'w-16 h-16 sm:w-18 sm:h-18';
    }
    return isCenter ? 'w-20 h-20' : 'w-16 h-16';
  };

  const getNameSize = () => {
    if (isMobile) {
      return 'text-lg sm:text-xl';
    }
    return isCenter ? 'text-xl' : 'text-lg';
  };

  const getPositionSize = () => {
    if (isMobile) {
      return 'text-sm sm:text-base';
    }
    return isCenter ? 'text-base' : 'text-sm';
  };

  return (
    <div className={`${getCardDimensions()} rounded-3xl border-2 border-white/20 backdrop-blur-sm relative transition-all duration-500 ease-in-out transform hover:scale-105 shadow-2xl overflow-hidden mx-auto`}>
      {isCenter || isMobile ? (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-fuchsia-600"></div>
      ) : (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${testimonial.backgroundImage || '/images/testimonial-bg.avif'}')` }}
          ></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </>
      )}

      {/* Quote Icon */}
      <div className="absolute top-6 sm:top-8 left-6 sm:left-8 z-10">
        <div className={`${getQuoteIconSize()} bg-white/20 rounded-2xl flex items-center justify-center transition-all duration-300`}>
          <svg className={`${getQuoteIconInner()} text-white/70 transition-all duration-300`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
          </svg>
        </div>
      </div>

      {/* Quote Text */}
      <div className="relative z-10 px-6 sm:px-8 pt-16 sm:pt-20 pb-6 sm:pb-8 h-full flex flex-col">
        <p className={`text-white ${getTextSize()} font-light leading-6 sm:leading-8 tracking-wide text-center mb-6 sm:mb-8 transition-all duration-300 ${!isCenter && !isMobile ? 'drop-shadow-lg line-clamp-3' : ''} flex-grow`}>
          "{testimonial.quote}"
        </p>

        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-3 sm:space-y-4 mt-auto">
          <div className="relative">
            <img 
              className={`${getImageSize()} rounded-full border-2 border-cyan-600 object-cover transition-all duration-300 shadow-lg`}
              src={testimonial.image}
              alt={testimonial.name}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent"></div>
          </div>
          <div className="text-center">
            <div className={`text-neutral-200 ${getNameSize()} font-medium leading-snug tracking-tight transition-all duration-300 ${!isCenter && !isMobile ? 'drop-shadow-lg' : ''}`}>
              {testimonial.name}
            </div>
            <div className={`text-slate-300 ${getPositionSize()} font-light leading-relaxed mt-1 sm:mt-2 transition-all duration-300 ${!isCenter && !isMobile ? 'drop-shadow-lg' : ''}`}>
              {testimonial.position}
            </div>
          </div>
        </div>
      </div>

      {(isCenter || isMobile) && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/5 to-fuchsia-400/5 pointer-events-none z-5"></div>
      )}
    </div>
  );
};

export default TestimonialCarousel;
