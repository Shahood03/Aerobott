import React from 'react';

const ProductFieldsSection = () => {
  // Product data
  const productFields = [
    {
      id: 1,
      title: "Video Production",
      description: "Professional Aerial and Ground Filmmaking Tools",
      link: "#",
      image: "/api/placeholder/500/600" // Using placeholder images
    },
    {
      id: 2,
      title: "Enterprise",
      description: "Drone Solutions for a New Generation of Work",
      link: "#",
      image: "/api/placeholder/500/600"
    },
    {
      id: 3,
      title: "Agriculture",
      description: "Efficient and Intelligent Agricultural Solution",
      link: "#",
      image: "/api/placeholder/500/600"
    }
  ];

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Explore AEROBOTT Products in Different Fields
        </h2>
      </div>

      {/* Product Fields Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {productFields.map((field) => (
          <div 
            key={field.id}
            className="relative overflow-hidden group h-[500px]"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-blue-700 bg-opacity-50"
              style={{
                backgroundImage: `url(${field.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Blue Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-700 via-blue-600 to-transparent opacity-80"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col p-8 text-white">
              {/* Text Content - Top */}
              <div className="mb-8">
                <h3 className="text-3xl font-semibold mb-2">{field.title}</h3>
                <p className="text-white text-opacity-90 mb-6">
                  {field.description}
                </p>
                <a 
                  href={field.link} 
                  className="inline-flex items-center text-white hover:underline transition-all duration-300"
                >
                  Learn More <span className="ml-1">›</span>
                </a>
              </div>

              {/* Image occupies bottom portion - showing through overlay */}
              <div className="mt-auto">
                {/* Images are shown via the background with overlay */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductFieldsSection;