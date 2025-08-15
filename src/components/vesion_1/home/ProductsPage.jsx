export default function NewProductsPage() {
  const products = [
    {
      id: 1,
      name: "FLYT-I - Training Drone",
      description: "Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically.",
      image: "/images/products/p1.png"
    },
    {
      id: 2,
      name: "Survey Master Pro - Survey Drone",
      description: "Professional-grade mapping drone with LiDAR sensors. Extended 45-minute flight time for large-scale projects.",
      image: "/images/products/p2.png"
    },
    {
      id: 3,
      name: "Aero Agri - Agriculture Drone",
      description: "Autonomous inspection drone with advanced AI. Real-time defect detection and automated reporting capabilities.",
      image: "/images/agri/a2.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-black text-4xl md:text-5xl font-semibold font-['Montserrat'] leading-tight mb-6">
            New Products
          </h1>
          <p className="max-w-4xl mx-auto text-gray-600 text-lg font-light font-['Montserrat'] leading-relaxed">
            Our new drone products feature advanced AI, extended flight time, and high-resolution sensors, offering superior performance for surveying, inspection, mapping, and real-time data analysis across industries.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-full flex flex-col"
            >
              {/* Product Image */}
              <div className="w-full h-48 bg-gray-100 overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                  src={product.image} 
                  alt={product.name}
                />
              </div>
              
              {/* Product Content - Flex grow to push button to bottom */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Product Name */}
                <h3 className="text-gray-800 text-xl font-semibold font-['Montserrat'] leading-tight mb-4 text-center">
                  {product.name}
                </h3>
                
                {/* Product Description - Flex grow to take available space */}
                <p className="text-gray-600 text-base font-light font-['Montserrat'] leading-relaxed text-center mb-6 flex-grow">
                  {product.description}
                </p>
                
                {/* CTA Button - Always at bottom */}
                <div className="mt-auto">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium font-['Montserrat'] py-3 px-6 rounded-full transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                    GET NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Section */}
        <div className="mt-24">
          <h2 className="text-center text-black text-3xl font-semibold font-['Montserrat'] leading-tight mb-12">
            Why Choose Our Drones?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-blue-600 text-xl font-semibold font-['Montserrat'] mb-3">
                Advanced AI Technology
              </h3>
              <p className="text-gray-600 font-light font-['Montserrat'] leading-relaxed">
                Cutting-edge artificial intelligence for autonomous flight and intelligent data processing.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-blue-600 text-xl font-semibold font-['Montserrat'] mb-3">
                Extended Flight Time
              </h3>
              <p className="text-gray-600 font-light font-['Montserrat'] leading-relaxed">
                Industry-leading battery technology providing up to 45 minutes of continuous operation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-blue-600 text-xl font-semibold font-['Montserrat'] mb-3">
                High-Resolution Sensors
              </h3>
              <p className="text-gray-600 font-light font-['Montserrat'] leading-relaxed">
                Professional-grade cameras and sensors delivering crystal-clear imagery and precise data.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}