import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const DroneTechPage = () => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    setAnimate(true);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Header Banner */}
      <div className="bg-gray-100 p-3 px-8">
        <div className={`inline-block bg-rose-50 px-4 py-2 rounded-md font-medium text-gray-700 transition-all duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
          <span className="font-medium">Drone Tech</span> <span className="text-red-500 font-medium">&amp; Beyond.</span>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 pt-6">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-6">
          {/* Heading */}
          <div className={`transition-all duration-1000 ${animate ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Pioneering Solutions: Unveiling Our<br /> 
              Expertise in Aerial Mastery
            </h1>
          </div>
          
          {/* Right side icons and learn more */}
          <div className={`flex items-center gap-3 transition-all duration-1000 ${animate ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                <path d="M12 5C7.03 5 3 9.03 3 14V19C3 20.1 3.9 21 5 21H9V13H5V14C5 10.13 8.13 7 12 7C15.87 7 19 10.13 19 14V15H15V23H19C20.1 23 21 22.1 21 21V14C21 9.03 16.97 5 12 5Z" fill="#374151"/>
              </svg>
            </div>
            
            <div className="border-l border-r border-gray-300 px-5 py-1">
              <div className="flex items-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                  <path d="M12 2L4 7V17L12 22L20 17V7L12 2ZM12 4.2L18 8.1V15.9L12 19.8L6 15.9V8.1L12 4.2Z" fill="#374151"/>
                  <path d="M12 9C10.9 9 10 9.9 10 11C10 12.1 10.9 13 12 13C13.1 13 14 12.1 14 11C14 9.9 13.1 9 12 9Z" fill="#374151"/>
                </svg>
                
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                  <path d="M12 7C13.1 7 14 7.9 14 9C14 10.1 13.1 11 12 11C10.9 11 10 10.1 10 9C10 7.9 10.9 7 12 7ZM12 15C14.7 15 17.8 16.29 18 17V18H6V17.01C6.2 16.29 9.3 15 12 15ZM12 5C9.79 5 8 6.79 8 9C8 11.21 9.79 13 12 13C14.21 13 16 11.21 16 9C16 6.79 14.21 5 12 5ZM12 13C9.33 13 4 14.34 4 17V20H20V17C20 14.34 14.67 13 12 13Z" fill="#374151"/>
                </svg>
              </div>
            </div>
            
            <div className="flex items-center gap-1 text-gray-700 font-medium">
              Learn about us
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {/* Card 1 - Drone Manufacturing */}
          <div className={`bg-gray-50 p-8 rounded-lg shadow-sm flex flex-col items-center text-center transition-all duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
            <div className="mb-6">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4.5 6V10L2 12L4.5 14V18L12 22L19.5 18V14L22 12L19.5 10V6L12 2Z" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22V12" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12L19.5 6" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12L4.5 6" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Drone Manufacturing</h3>
            <p className="text-gray-600 text-sm">Precision-Crafted Drones Redefining<br />Aerial Innovation</p>
          </div>

          {/* Card 2 - Drone Services */}
          <div className={`bg-red-500 p-8 rounded-lg shadow-sm text-white flex flex-col items-center text-center transition-all duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
            <div className="mb-6">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="white" strokeWidth="1.5"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Drone Services</h3>
            <p className="text-sm">Data capturing, logistics, survey and<br />mapping, inspection, and beyond.</p>
          </div>

          {/* Card 3 - Drone Training */}
          <div className={`bg-gray-50 p-8 rounded-lg shadow-sm flex flex-col items-center text-center transition-all duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
            <div className="mb-6">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6H8C9.06087 6 10.0783 6.42143 10.8284 7.17157C11.5786 7.92172 12 8.93913 12 10V20C12 19.2044 11.6839 18.4413 11.1213 17.8787C10.5587 17.3161 9.79565 17 9 17H2V6Z" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6H16C14.9391 6 13.9217 6.42143 13.1716 7.17157C12.4214 7.92172 12 8.93913 12 10V20C12 19.2044 12.3161 18.4413 12.8787 17.8787C13.4413 17.3161 14.2044 17 15 17H22V6Z" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Drone Training</h3>
            <p className="text-gray-600 text-sm">DGCA certified Drone Pilot Training<br />and diverse Drone Courses.</p>
          </div>

          {/* Card 4 - Data Intelligence */}
          <div className={`bg-gray-50 p-8 rounded-lg shadow-sm flex flex-col items-center text-center transition-all duration-700 ${animate ? 'opacity-100' : 'opacity-0'}`}>
            <div className="mb-6">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 7H17V14" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Data Intelligence</h3>
            <p className="text-gray-600 text-sm">GIS Data Solutions for upgrading your<br />current workflows.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneTechPage;