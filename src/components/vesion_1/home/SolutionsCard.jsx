import React from 'react';

const SolutionsPage = () => {
  const solutions = [
    {
      title: "Railways",
      image: "/api/placeholder/400/250",
      gridSpan: "col-span-1"
    },
    {
      title: "Oil & Gas",
      image: "/api/placeholder/400/250",
      gridSpan: "col-span-1"
    },
    {
      title: "Agriculture",
      image: "/api/placeholder/400/250",
      gridSpan: "col-span-1"
    },
    {
      title: "Mining",
      image: "/api/placeholder/400/250",
      gridSpan: "col-span-1"
    },
    {
      title: "Disaster Management",
      image: "/api/placeholder/400/250",
      gridSpan: "col-span-1"
    },
    {
      title: "Telecommunication",
      image: "/api/placeholder/400/250",
      gridSpan: "col-span-1"
    },
    {
      title: "Construction & Infrastructure",
      image: "/api/placeholder/400/250",
      gridSpan: "col-span-1 sm:col-span-1"
    },
    {
      title: "Government & Smart Cities",
      image: "/api/placeholder/400/250",
      gridSpan: "col-span-1 sm:col-span-1"
    }
  ];

  const SolutionCard = ({ title, image, gridSpan }) => {
    return (
      <div className={`relative overflow-hidden transition-all duration-300 transform hover:scale-105 ${gridSpan} flex flex-col mb-6 mx-2`}>
        <div className="overflow-hidden rounded-md h-48 md:h-56 relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
          />
        </div>
        <div className="bg-yellow-300 py-2 px-4 text-center font-semibold text-gray-800 mt-0 hover:bg-yellow-400 transition-colors duration-300">
          {title}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-10 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Solutions</h1>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {solutions.slice(0, 6).map((solution, index) => (
            <div key={index} className="animate-fadeIn" style={{animationDelay: `${index * 100}ms`}}>
              <SolutionCard {...solution} />
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-0">
          {solutions.slice(6).map((solution, index) => (
            <div key={index + 6} className="animate-fadeIn" style={{animationDelay: `${(index + 6) * 100}ms`}}>
              <SolutionCard {...solution} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SolutionsPage;