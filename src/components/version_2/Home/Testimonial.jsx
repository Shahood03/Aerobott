import React, { useEffect, useRef, useState } from 'react';

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      quote: "Aerobott's training gave our team the confidence and certification needed to handle commercial drone operations with ease. Highly recommended for professionals looking to upskill.",
      name: "Ravi Kumar",
      position: "Operations Head",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      backgroundImage: "/images/element/Rectangle.png" // Add your PNG background path
    },
    {
      id: 2,
      quote: "The comprehensive curriculum and hands-on approach made all the difference. Our drone pilots are now fully certified and operating at peak efficiency.",
      name: "Roshan khandelwall",
      position: "Technical Director",
      image: "/images/team/t5.jpg",
      backgroundImage: "/images/element/Rectangle.png" // Add your PNG background path
    },
    {
      id: 3,
      quote: "Outstanding training program that covers everything from basic operations to advanced commercial applications. The certification process was seamless.",
      name: "P r Sharma",
      position: "Fleet Manager",
      image: "/images/team/t6.jpg",
      backgroundImage: "/images/element/Rectangle.jpg" // Add your PNG background path
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
    <div className="min-h-screen bg-black flex items-center justify-center p-8 relative overflow-hidden font-raleway">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-violet-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
      </div>
      
      {/* Header */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center space-x-4 mb-2">
          <div className="w-5 h-0 border-t border-indigo-300"></div>
          <div className="w-20 h-0 border-t border-indigo-300"></div>
        </div>
        <h1 className="text-white text-3xl font-light leading-9 text-center tracking-wider">
          TESTIMONIAL
        </h1>
        <div className="flex items-center justify-center space-x-4 mt-2">
          <div className="w-5 h-0 border-t border-indigo-300"></div>
          <div className="w-20 h-0 border-t border-indigo-300"></div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center">
        {/* Side Cards (Dimmed) */}
        <div className="absolute left-0 z-10 opacity-30 transform -translate-x-8 scale-75">
          <TestimonialCard 
            testimonial={testimonials[getPreviousIndex()]} 
            isCenter={false}
          />
        </div>

        <div className="absolute right-0 z-10 opacity-30 transform translate-x-8 scale-75">
          <TestimonialCard 
            testimonial={testimonials[getNextIndex()]} 
            isCenter={false}
          />
        </div>

        {/* Center Card (Active) */}
        <div className="z-20 transform scale-100 transition-all duration-700 ease-in-out">
          <TestimonialCard 
            testimonial={testimonials[currentSlide]} 
            isCenter={true}
          />
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/30 hover:bg-white/50'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => goToSlide(getPreviousIndex())}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
      >
        <svg className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => goToSlide(getNextIndex())}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
      >
        <svg className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

const TestimonialCard = ({ testimonial, isCenter }) => {
  return (
    <div className={`${isCenter ? 'w-[641px] h-[457px]' : 'w-[480px] h-[343px]'} rounded-3xl border-2 border-white/20 backdrop-blur-sm relative transition-all duration-500 ease-in-out transform hover:scale-105 shadow-2xl overflow-hidden`}>
      
      {/* Background - Different for center vs side cards */}
      {isCenter ? (
        // Active card - gradient background
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-fuchsia-600"></div>
      ) : (
        // Inactive cards - background image with overlay
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${testimonial.backgroundImage || '/images/testimonial-bg.png'}')`
            }}
          ></div>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </>
      )}

      {/* Quote Icon - Increased size */}
      <div className="absolute top-8 left-8 z-10">
        <div className={`${isCenter ? 'w-14 h-11' : 'w-12 h-9'} bg-white/20 rounded-2xl flex items-center justify-center transition-all duration-300`}>
          <svg className={`${isCenter ? 'w-8 h-6' : 'w-6 h-5'} text-white/70 transition-all duration-300`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
          </svg>
        </div>
      </div>

      {/* Quote Text - Increased font size */}
      <div className="relative z-10 px-8 pt-20 pb-8">
        <p className={`text-white ${isCenter ? 'text-lg' : 'text-base'} font-light leading-8 tracking-wide text-center mb-10 transition-all duration-300 ${!isCenter ? 'drop-shadow-lg' : ''}`}>
          "{testimonial.quote}"
        </p>

        {/* Profile Section - Increased sizes */}
        <div className="flex flex-col items-center space-y-5">
          <div className="relative">
            <img 
              className={`${isCenter ? 'w-20 h-20' : 'w-16 h-16'} rounded-full border-2 border-cyan-600 object-cover transition-all duration-300 shadow-lg`}
              src={testimonial.image}
              alt={testimonial.name}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent"></div>
          </div>
          <div className="text-center">
            <div className={`text-neutral-200 ${isCenter ? 'text-xl' : 'text-lg'} font-medium leading-snug tracking-tight transition-all duration-300 ${!isCenter ? 'drop-shadow-lg' : ''}`}>
              {testimonial.name}
            </div>
            <div className={`text-slate-300 ${isCenter ? 'text-base' : 'text-sm'} font-light leading-relaxed mt-2 transition-all duration-300 ${!isCenter ? 'drop-shadow-lg' : ''}`}>
              {testimonial.position}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
   

      {/* Subtle glow effect for center card */}
      {isCenter && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/5 to-fuchsia-400/5 pointer-events-none z-5"></div>
      )}
    </div>
  );
};

export default TestimonialCarousel;