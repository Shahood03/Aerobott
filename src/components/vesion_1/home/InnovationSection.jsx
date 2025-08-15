import React, { useEffect } from 'react';

const InnovationSection = () => {
  // Animation effect when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0');
          entry.target.classList.remove('translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-16 px-0 w-full">
      {/* Heading with animation */}
      <div className="text-center mb-12 animate-on-scroll">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Become a Drone Pilot With AEROBOTT
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          As we explore new technology, we push the capabilities of what is possible, driving 
          progress through continuous innovation.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">{/* Removed gap-8 and made it gap-0 */}
        {/* Left Card */}
        <div className="group p-4 overflow-hidden transition-all duration-500 hover:shadow-2xl animate-on-scroll">{/* Removed rounded-lg and shadow-lg */}
          <div className="bg-gray-200 bg-opacity-70 p-16 relative h-full">
            <div className="mb-20">
              <p className="text-gray-700 mb-2">Remote Pilot Certification</p>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Remote Pilot Certification
              </h3>
              <a 
                href="#" 
                className="inline-flex items-center text-gray-800 hover:text-gray-600 transition-all duration-300 group-hover:translate-x-2"
              >
                Learn More <span className="ml-1">›</span>
              </a>
            </div>
            <div className="transform transition-transform duration-700 group-hover:scale-105 mt-6">
              <img 
                src="/api/placeholder/600/400" 
                alt="Aerobott Ronin Series equipment with Emmy Award" 
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="group p-4 overflow-hidden transition-all duration-500 hover:shadow-2xl animate-on-scroll">{/* Removed rounded-lg and shadow-lg for second card as well */}
          <div className="bg-gray-200 bg-opacity-60 p-8 relative h-full">
            <div className="mb-20">
              <p className="text-gray-700 mb-2">Industry Insight Report</p>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Drone Manufacturing
              </h3>
              <a 
                href="#" 
                className="inline-flex items-center text-gray-800 hover:text-gray-600 transition-all duration-300 group-hover:translate-x-2"
              >
                Learn More <span className="ml-1">›</span>
              </a>
            </div>
            <div className="transform transition-transform duration-700 group-hover:scale-105 mt-6">
              <img 
                src="/api/placeholder/600/400" 
                alt="Aerobott Agricultural drone flying over mountains" 
                className="w-full object-contain" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;