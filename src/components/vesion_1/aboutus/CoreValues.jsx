import { useState, useRef, useEffect } from 'react';

export default function CoreValues() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cardsHeight, setCardsHeight] = useState(0);
  const cardsContainerRef = useRef(null);
  
  const coreValues = [
    {
      id: 1,
      title: "Innovation First",
      description: "We build tech that challenges the norm. We prototype, test, and scale ideas that others only imagine.",
      icon: "eye"
    },
    {
      id: 2,
      title: "Agility",
      description: "We move fast, learn faster. Our teams adapt quickly to deliver value in dynamic environments",
      icon: "lightbulb"
    },
    {
      id: 3,
      title: "Integrity Always",
      description: "We hold ourselves to the highest standards, acting with honesty, accountability, and respect in everything we do.",
      icon: "shield"
    },
    {
      id: 4,
      title: "Collaboration",
      description: "We believe in collective brilliance—our solutions are built in partnership with institutions, industries, and communities.",
      icon: "users"
    },
    {
      id: 5,
      title: "Customer Focused",
      description: "We design begins with our end-users in mind—students, professionals, and industries alike.",
      icon: "target"
    },
  ];

  useEffect(() => {
    const updateHeight = () => {
      if (cardsContainerRef.current) {
        setCardsHeight(cardsContainerRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  // Function to render the appropriate icon
  const renderIcon = (iconName) => {
    switch(iconName) {
      case 'eye':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        );
      case 'lightbulb':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600">
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
            <path d="M9 18h6"></path>
            <path d="M10 22h4"></path>
          </svg>
        );
      case 'shield':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
          </svg>
        );
      case 'users':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        );
      case 'target':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-zinc-300 flex justify-center items-center py-16 px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 items-start justify-between">
        {/* Left side - Image */}
        <div className="w-full md:w-[45%] rounded-3xl overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1553484771-898ed465e931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
            alt="Building blocks with business icons" 
            className="w-full object-cover"
            style={{ height: cardsHeight > 0 ? `${cardsHeight}px` : 'auto' }}
          />
        </div>
        
        {/* Right side - Cards */}
        <div 
          ref={cardsContainerRef}
          className="w-full md:w-[50%] flex flex-col gap-4"
        >
          {coreValues.map((value) => (
            <div 
              key={value.id}
              className="w-full"
              onMouseEnter={() => handleMouseEnter(value.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div 
                className={`w-full px-5 py-4 ${
                  value.id === 1 
                    ? "bg-blue-100" 
                    : "bg-white"
                } rounded-xl shadow-sm transition-all duration-300 hover:shadow-md`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                    {renderIcon(value.icon)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-black text-lg font-semibold font-['Montserrat'] mb-1">{value.title}</h3>
                    <p className="text-slate-600 text-sm font-light font-['Montserrat'] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}