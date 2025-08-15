import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Shield, 
  Target, 
  Video, 
  Radio, 
  Cpu, 
  GraduationCap, 
  Users, 
  Crosshair, 
  Code, 
  Map, 
  AlertTriangle, 
  Zap, 
  Radar, 
  Eye, 
  Box,
  Anchor
} from 'lucide-react';

// Enhanced DefenceDropdown component with consistent navbar styling
const DefenceDropdown = ({ scrolled, isOpen: propIsOpen, toggleDropdown: propToggleDropdown }) => {
    const [isOpen, setIsOpen] = useState(propIsOpen || false);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920);
    const dropdownRef = useRef(null);
    
    const toggleDropdown = (e) => {
      if (e) {
        e.stopPropagation();
      }
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
      title: "Defence Training",
      items: [
        { 
            icon: <Map className="w-5 h-5 text-blue-600" />, 
            label: "Tactical Mapping", 
            href: "/defence/tactical-mapping",
          },
        { 
          icon: <GraduationCap className="w-5 h-5 text-blue-600" />, 
          label: "Drone Pilot Training", 
          href: "/defence/combat-training",
          badge: "DGCA Certified",
        },
        { 
          icon: <Users className="w-5 h-5 text-blue-600" />, 
          label: "Drone Building", 
          href: "/defence/command-training",
          badge: "",
        },
        { 
          icon: <Crosshair className="w-5 h-5 text-blue-600" />, 
          label: "GSI Drone", 
          href: "/defence/target-training",
        }
      ]
    },
    {
      title: "Defence Products",
      items: [
        { 
          icon: <Zap className="w-5 h-5 text-blue-600" />, 
          label: "Surveillance Drone System", 
          href: "/defence/surveillance-drone",
        },
        { 
          icon: <Zap className="w-5 h-5 text-blue-600" />, 
          label: "Kamikaze/Suicide Drone", 
          href: "/defence/kamikaze-drone",
          badge: "Coming Soon",
        },
        { 
          icon: <Eye className="w-5 h-5 text-blue-600" />, 
          label: "FPV Combat Drone", 
          href: "/defence/fpv-combat",
        },
        { 
          icon: <Box className="w-5 h-5 text-blue-600" />, 
          label: "Logistics Support Drone", 
          href: "/defence/logistics-drone",
          badge: "Coming Soon",
        },
        { 
          icon: <Shield className="w-5 h-5 text-blue-600" />, 
          label: "Anti-Drone Systems", 
          href: "/defence/anti-drone",
          badge: "Coming Soon",
        },
        { 
          icon: <Cpu className="w-5 h-5 text-blue-600" />, 
          label: "Defence AI Module", 
          href: "/defence/ai-module",
          badge: "Coming Soon",
        }
      ]
    }
  ];

  // Item component with white background and black text
  const DropdownItem = ({ item }) => {
    return (
      <a 
        href={item.href} 
        className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-all duration-300 group"
        style={{ fontFamily: 'Raleway, sans-serif' }}
      >
        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center mr-3 rounded-md bg-gray-100 group-hover:bg-gray-200">
          {item.icon}
        </div>
        <div className="flex-1">
          <span className="text-gray-700 group-hover:text-blue-600 font-medium transition-colors whitespace-normal">
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
        width: '1000px',
        maxWidth: '90vw',
        left: '50%',
        transform: 'translateX(-50%)',
      };
    } else if (windowWidth >= 1920) { // Full HD
      return {
        ...baseStyle,
        width: '1000px',
        maxWidth: '90vw',
        left: '50%',
        transform: 'translateX(-50%)',
      };
    } else if (windowWidth >= 1440) { // Common laptop resolution
      return {
        ...baseStyle,
        width: '900px',
        maxWidth: '90vw',
        left: '50%',
        transform: 'translateX(-50%)',
      };
    } else if (windowWidth >= 1280) { // Common laptop resolution
      return {
        ...baseStyle,
        width: '800px',
        maxWidth: '95vw',
        left: '50%',
        transform: 'translateX(-50%)',
      };
    } else if (windowWidth >= 1024) { // Small laptop/tablets
      return {
        ...baseStyle,
        width: '700px',
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
    if (windowWidth >= 1024) {
      return "grid-cols-2"; // 2 columns for larger screens
    } else {
      return "grid-cols-1"; // 1 column for smaller screens
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
    <div className="relative group" ref={dropdownRef}>
      {/* Dropdown trigger button - matching navbar styling */}
      <button
        onClick={toggleDropdown}
        className="relative font-medium transition-all duration-300 group text-white hover:text-blue-200 flex items-center"
        style={{ fontFamily: 'Raleway, sans-serif' }}
      >
        <span className="mr-1">Defence</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
        {/* Underline effect matching other nav items */}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </button>
      
      {/* Dropdown panel - White background with black text */}
      <div 
        className={`absolute z-50 transition-all mt-6 mb-24 pb-4 duration-300 ease-in-out bg-white border border-gray-200 rounded-lg shadow-xl ${
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
            {/* Training Column */}
            <div className={`p-4 ${windowWidth >= 1024 ? 'border-r border-gray-200' : 'border-b border-gray-200'}`}>
              <h3 className="text-base font-semibold mb-4 text-gray-800 flex items-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <GraduationCap className="w-4 h-4 mr-2 text-blue-600" />
                {categories[0].title}
              </h3>
              <ul className="space-y-1 pr-2">
                {categories[0].items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <DropdownItem item={item} />
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Products Column */}
            <div className="p-4">
              <h3 className="text-base font-semibold mb-4 text-gray-800 flex items-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <Box className="w-4 h-4 mr-2 text-blue-600" />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export { DefenceDropdown };