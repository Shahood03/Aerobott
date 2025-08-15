import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Menu, 
  X, 
  Map, 
  Video, 
  Package, 
  Droplet, 
  GraduationCap, 
  Users, 
  Camera, 
  Zap, 
  Code, 
  MapPin, 
  AlertTriangle, 
  Leaf, 
  Cpu, 
  Eye, 
  Box, 
  Link, 
  Anchor
} from 'lucide-react';

// Enhanced DroneDropdown component with responsive UI
const DroneDropdown = ({ scrolled, isOpen: propIsOpen, toggleDropdown: propToggleDropdown }) => {
  const [isOpen, setIsOpen] = useState(propIsOpen || false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920);
  const dropdownRef = useRef(null);
  
  const toggleDropdown = (e) => {
    if (e) {
      e.stopPropagation();
    }
    // Only use the prop's toggle function
    if (propToggleDropdown) {
      propToggleDropdown(e);
    } else {
      setIsOpen(!isOpen);
    }
  };
  
  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize(); // Set initial width
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only close if the dropdown is currently open
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) && isOpen) {
        if (propToggleDropdown) {
          // Call with false to close
          propToggleDropdown();
        } else {
          setIsOpen(false);
        }
      }
    };

    // Only add the event listener when the dropdown is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [propToggleDropdown, isOpen]);
  
  // Sync with prop changes
  useEffect(() => {
    if (propIsOpen !== undefined) {
      setIsOpen(propIsOpen);
    }
  }, [propIsOpen]);

  // Define categories and items with icons
  const categories = [
    {
      title: "Services",
      items: [
        { 
          icon: <Map className="w-5 h-5 text-blue-600" />, 
          label: "Drone Survey and Mapping", 
          href: "/drone-survey",
        },
        { 
          icon: <Video className="w-5 h-5 text-blue-600" />, 
          label: "Drone Surveillance and Videography", 
          href: "/drone-surveillance",
        },
        { 
          icon: <Package className="w-5 h-5 text-blue-600" />, 
          label: "Drone Delivery", 
          href: "/drone-delivery",
        }
      ],
      footer: {
        title: "Your Trusted Partner for End-to-End Drone Solutions",
        link: { label: "Learn More", href: "/consultancy" }
      }
    },
    {
      title: "Training",
      items: [
        { 
          icon: <GraduationCap className="w-5 h-5 text-blue-600" />, 
          label: "Drone Pilot Training", 
          href: "/drone-pilot-training",
          badge: "DGCA Certified",
        },
        { 
          icon: <Camera className="w-5 h-5 text-blue-600" />, 
          label: "Drone Building", 
          href: "/drone-building",
        },
        { 
          icon: <MapPin className="w-5 h-5 text-blue-600" />, 
          label: "GIS for Drones", 
          href: "/gis-drones",
        },
        // { 
        //   icon: <AlertTriangle className="w-5 h-5 text-blue-600" />, 
        //   label: "Disaster Management", 
        //   href: "/disaster-management",
        // },
        { 
          icon: <Leaf className="w-5 h-5 text-blue-600" />, 
          label: "Drone in Agriculture", 
          href: "/drone-agriculture",
        }
      ]
    },
    {
      title: "Products",
      items: [
        { 
          icon: <Package className="w-5 h-5 text-blue-600" />, 
          label: "Survey Master Pro - Survey Drone", 
          href: "/defence/surveillance",
        },
        { 
          icon: <Cpu className="w-5 h-5 text-blue-600" />, 
          label: "FLYT-I - Training Drone", 
          href: "/defence/kamikaze",
          // badge: "Coming Soon",
        },
        { 
          icon: <Cpu className="w-5 h-5 text-blue-600" />, 
          label: "Aero Agri - Spraying Drone", 
          href: "/agriveer-drone",
        },
        { 
          icon: <Eye className="w-5 h-5 text-blue-600" />, 
          label: "Edu - Educational Drone", 
          href: "/fpv-drone",
        },
        // { 
        //   icon: <Box className="w-5 h-5 text-blue-600" />, 
        //   label: "Lander for Arya - Drone in a box", 
        //   href: "/lander-arya",
        //   badge: "Coming Soon",
        // },
        // { 
        //   icon: <Link className="w-5 h-5 text-blue-600" />, 
        //   label: "Tethered System for Drone", 
        //   href: "/tethered-system",
        //   badge: "Coming Soon",
        // },
        // { 
        //   icon: <Anchor className="w-5 h-5 text-blue-600" />, 
        //   label: "Aquarius - Underwater Drone", 
        //   href: "/aquarius-drone",
        // },
        { 
          icon: <Package className="w-5 h-5 text-blue-600" />, 
          label: "Logistic Drone", 
          href: "/delivery-drone",
          badge: "Coming Soon",
        }
      ]
    }
  ];

  // Enhanced promo cards with background images
  const promoCards = [
    {
      title: "Get trained for the Geo Aerial Industry",
      description: "World-class training programs for drone pilots and operators",
      ctaText: "Visit Drone Gurukul",
      ctaLink: "/drone-gurukul",
      icon: <GraduationCap className="w-12 h-12 text-white" />,
      bgImage: "/api/placeholder/800/600", // Replace with your actual training image path
      gradientFrom: "from-blue-600",
      gradientTo: "to-indigo-700"
    },
    {
      title: "Explore cutting edge Geo Aerial products",
      description: "Advanced drones and accessories for professionals",
      ctaText: "Buy now at DroneUdyog",
      ctaLink: "/drone-udyog",
      icon: <Box className="w-12 h-12 text-white" />,
      bgImage: "/api/placeholder/800/600", // Replace with your actual products image path
      gradientFrom: "from-cyan-600",
      gradientTo: "to-blue-700"
    }
  ];

  // Item component with proper positioning and styling
  const DropdownItem = ({ item }) => {
    return (
      <a 
        href={item.href} 
        className="flex items-center p-2 rounded-lg hover:bg-blue-50 transition-all duration-300"
      >
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-3 rounded-md bg-blue-50">
          {item.icon}
        </div>
        <div className="flex-1">
          <span className="text-gray-700 hover:text-blue-600 font-medium transition-colors whitespace-normal">
            {item.label}
          </span>
          {item.badge && (
            <span className="ml-2 text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-600">
              {item.badge}
            </span>
          )}
        </div>
      </a>
    );
  };

  // Calculate responsive widths based on window size
  const getDropdownStyle = () => {
    // Base styles that remain consistent
    const baseStyle = {
      transition: 'all 0.3s ease-in-out',
    };
    
    // Width calculations based on screen size
    if (windowWidth >= 2560) { // 4K and higher resolutions
      return {
        ...baseStyle,
        width: '1600px',
        maxWidth: '90vw',
        left: '50%',
        transform: 'translateX(-50%)',
      };
    } else if (windowWidth >= 1920) { // Full HD
      return {
        ...baseStyle,
        width: '1600px',
        maxWidth: '90vw',
        left: '50%',
        transform: 'translateX(-50%)',
      };
    } else if (windowWidth >= 1440) { // Common laptop resolution
      return {
        ...baseStyle,
        width: '1400px',
        maxWidth: '90vw',
        left: '50%',
        transform: 'translateX(-50%)',
      };
    } else if (windowWidth >= 1280) { // Common laptop resolution
      return {
        ...baseStyle,
        width: '1200px',
        maxWidth: '95vw',
        left: '50%',
        transform: 'translateX(-50%)',
      };
    } else if (windowWidth >= 1024) { // Small laptop/tablets
      return {
        ...baseStyle,
        width: '950px',
        maxWidth: '95vw',
        left: '50%',
        transform: 'translateX(-50%)',
      };
    } else {
      return {
        ...baseStyle,
        width: '95vw',
        left: '50%',
        transform: 'translateX(-50%)',
      };
    }
  };

  // Determine column layout based on window width
  const getColumnLayout = () => {
    if (windowWidth >= 1280) {
      return "grid-cols-3"; // 3 columns for larger screens
    } else if (windowWidth >= 1024) {
      return "grid-cols-3"; // 3 columns but smaller for medium screens
    } else {
      return "grid-cols-1"; // 1 column for smaller screens
    }
  };

  // Determine sidebar width based on window width
  const getSidebarWidth = () => {
    if (windowWidth >= 1440) {
      return "w-72"; // Larger sidebar for larger screens
    } else if (windowWidth >= 1280) {
      return "w-64"; // Medium sidebar for medium screens
    } else if (windowWidth >= 1024) {
      return "w-56"; // Smaller sidebar for smaller screens
    } else {
      return "w-full"; // Full width for mobile
    }
  };

  // Dynamic layout for dropdown panel
  const getDropdownLayout = () => {
    if (windowWidth >= 1024) {
      return "flex"; // Horizontal layout for larger screens
    } else {
      return "block"; // Vertical layout for smaller screens
    }
  };

  return (
    <div className="relative group " ref={dropdownRef}>
      {/* Dropdown trigger button */}
      <button
        onClick={toggleDropdown}
        className={`flex items-center text-sm font-medium transition-all duration-300 ${
          scrolled
            ? 'text-blue-600 hover:text-blue-800'
            : 'text-white hover:text-blue-200'
        }`}
      >
        <span className="mr-1">Drone Tech</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      
      {/* Dropdown panel - Professional design with icons */}
      <div 
        className={`absolute z-50 ml-24 transition-all mt-6 m-8 p-8 duration-300 ease-in-out bg-white rounded-lg shadow-xl ${
          isOpen 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={getDropdownStyle()}
      >
        {/* Content container */}
        <div className={`${getDropdownLayout()} rounded-lg overflow-hidden`}>
          {/* Categories - responsive column layout */}
          <div className={`flex-1 grid ${getColumnLayout()} gap-0`}>
            {/* Services Column */}
            <div className={`p-4 ${windowWidth >= 1024 ? 'border-r border-gray-100' : 'border-b border-gray-100'}`}>
              <h3 className="text-base font-semibold mb-4 text-gray-700 flex items-center">
                <Map className="w-4 h-4 mr-2 text-blue-600" />
                {categories[0].title}
              </h3>
              <ul className="space-y-1">
                {categories[0].items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <DropdownItem item={item} />
                  </li>
                ))}
              </ul>
              {categories[0].footer && (
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <p className="text-sm font-medium text-gray-700">{categories[0].footer.title}</p>
                  <a 
                    href={categories[0].footer.link.href} 
                    className="text-xs text-blue-600 hover:text-blue-800 flex items-center mt-1"
                  >
                    {categories[0].footer.link.label} 
                    <span className="ml-1">→</span>
                  </a>
                </div>
              )}
            </div>
            
            {/* Training Column */}
            <div className={`p-4 ${windowWidth >= 1024 ? 'border-r border-gray-100' : 'border-b border-gray-100'}`}>
              <h3 className="text-base font-semibold mb-4 text-gray-700 flex items-center">
                <GraduationCap className="w-4 h-4 mr-2 text-blue-600" />
                {categories[1].title}
              </h3>
              <ul className="space-y-1 pr-2">
                {categories[1].items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <DropdownItem item={item} />
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Products Column */}
            <div className="p-4">
              <h3 className="text-base font-semibold mb-4 text-gray-700 flex items-center">
                <Box className="w-4 h-4 mr-2 text-blue-600" />
                {categories[2].title}
              </h3>
              <ul className="space-y-1 pr-2">
                {categories[2].items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <DropdownItem item={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Promo cards - Right sidebar with enhanced 3D effect */}
          <div className={`${getSidebarWidth()} bg-gray-50 p-4 rounded-r-lg`}>
            <div className="space-y-6">
              {promoCards.map((card, index) => (
                <div 
                  key={index} 
                  className="relative rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{ perspective: "1000px" }}
                >
                  <div 
                    className="p-4 h-full bg-cover bg-center relative group"
                    style={{ 
                      backgroundImage: `url(${card.bgImage})`,
                      transformStyle: "preserve-3d",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    {/* Overlay gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${card.gradientFrom} ${card.gradientTo} opacity-85 group-hover:opacity-75 transition-opacity duration-300`}></div>
                    
                    {/* Content with 3D hover effect */}
                    <div className="absolute top-4 right-4 transform transition-transform duration-300 group-hover:translate-y-1 group-hover:translate-x-1 z-10">
                      {card.icon}
                    </div>
                    
                    <div className="relative pt-12 pb-4 z-10 transform transition-transform duration-300 group-hover:translate-z-10">
                      <h3 className="text-lg font-medium mb-2 text-white">{card.title}</h3>
                      <p className="text-sm text-blue-100 mb-4">{card.description}</p>
                      <a 
                        href={card.ctaLink} 
                        className="text-sm bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-800 px-4 py-2 rounded-lg inline-flex items-center font-medium transition-all duration-300 hover:shadow-md transform group-hover:translate-y-0 group-hover:translate-x-0"
                      >
                        {card.ctaText}
                        <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DroneDropdown };