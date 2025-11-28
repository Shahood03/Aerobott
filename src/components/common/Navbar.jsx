import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

// Hook to get current active section
const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('');
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // Get current path
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
      
      // If we're on a specific page, set that as active
      const path = window.location.pathname;
      if (path === '/about-us') setActiveSection('about-us');
      else if (path === '/training') setActiveSection('training');
      else if (path === '/drone-as-service') setActiveSection('daas');
      else if (path === '/hire-pilot') setActiveSection('hire-pilot');
      else if (path === '/contact-us') setActiveSection('contact-us');
      else if (path.startsWith('/products/')) setActiveSection('products');
      else if (path === '/') setActiveSection('home');
      else setActiveSection('');
    }

    // For single page applications with sections, you can also check scroll position
    const handleScroll = () => {
      if (window.location.pathname === '/') {
        // Only do scroll-based detection on homepage
        const sections = ['home', 'about-us', 'products', 'training', 'daas', 'hire-pilot', 'contact-us'];
        
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            const isVisible = rect.top <= 100 && rect.bottom >= 100;
            
            if (isVisible) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      // Initial check
      handleScroll();
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return { activeSection, currentPath };
};

// Centralized function for all navigation links
const useNavigationLinks = () => {
  // Main navigation items
  const mainNavLinks = [
    { label: 'About Us', href: '/about-us', id: 'about-us' },
    // Products and Training will be handled as dropdowns
    { label: 'DAAS', href: '/drone-as-service', id: 'daas' },
    { label: 'Hire a Pilot', href: '/hire-pilot', id: 'hire-pilot' },
    { label: 'Contact Us', href: '/contact-us', id: 'contact-us' }
  ];

  // Training submenu items for mobile and desktop
  const trainingSubItems = [
   {
      name: 'Remote Pilot Training',
      description: 'DGCA certified drone pilot training program',
      image: '/images/training/t13.png',
      href: '/training',
      isExternal: false
    },
    {
      name: 'AI Center of Excellence',
      description: 'Learn to build and assemble drones from scratch',
      image: '/images/AIExcellence/aimlfordrone/aid6.jpg',
      href: '/AIExcellence',
      isExternal: false
    },
    {
      name: 'Industrial Course',
      description: 'Geographic Information Systems for drone mapping',
      image: '/images/industries/WCU.jpg',
      href: '/IndustrialCourse',
      isExternal: false
    }
  ];

  // Products submenu items for mobile
  const productsSubItems = [
    {
      name: 'FLYT-I - Training Drone',
      image: '/images/products/p10.png',
      description: 'Professional training drone for pilot certification',
      href: '/products/flyt-i',
      isExternal: false
    },
    {
      name: 'Survey Master Pro - Survey Drone', 
      image: '/images/products/p2.png',
      description: 'Advanced surveying and mapping solutions',
      href: '/products/survey-master-pro',
      isExternal: false
    },
    {
      name: 'Aero Agri - Agriculture Drone',
      image: '/images/agri/a7.jpg', 
      description: 'Smart farming and crop monitoring technology',
      href: '/products/aero-agri',
      isExternal: false
    }
  ];

  return { mainNavLinks, trainingSubItems, productsSubItems };
};

// Navigation link component - updated with active state highlighting
const NavLink = ({ href, label, isExternal = false, isActive = false }) => {
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : ""}
      className={`relative font-medium transition-all duration-300 group ${
        isActive 
          ? 'text-blue-300' 
          : 'text-white hover:text-blue-200'
      }`}
      style={{ fontFamily: 'Raleway, sans-serif' }}
    >
      <span>{label}</span>
      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 transform transition-transform duration-300 origin-left ${
        isActive 
          ? 'scale-x-100' 
          : 'scale-x-0 group-hover:scale-x-100'
      }`}></span>
    </a>
  );
};

// Logo component - now with home redirection
const Logo = () => {
  return (
    <a href="/" className="flex items-center">
      <div>
        <img
          src="/images/logo/logo.png"
          alt="Aerobott Logo"
          className="h-10"
        />
      </div>
    </a>
  );
};

// Partner with us button component
const PartnerButton = () => {
  return (
    <a
      href="/partner-with-us"
      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      style={{ fontFamily: 'Raleway, sans-serif' }}
    >
      Partner with Us
    </a>
  );
};

// Mobile menu toggle button
const MobileMenuButton = ({ isOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className="transition-colors duration-300 text-white transform hover:scale-110 hover:text-blue-200"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
};

// Mobile dropdown component for navigation items
const MobileDropdown = ({ title, items, isOpen, toggleDropdown, setMobileMenuOpen, currentPath }) => {
  return (
    <div>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full font-medium transition-all duration-300 text-white hover:text-blue-200"
        style={{ fontFamily: 'Raleway, sans-serif' }}
      >
        <span>{title}</span>
        {isOpen ? (
          <ChevronUp className="ml-1 w-4 h-4" />
        ) : (
          <ChevronDown className="ml-1 w-4 h-4" />
        )}
      </button>
      
      <div 
        className={`pl-4 mt-2 space-y-2 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {items.map((item, index) => {
          const isActive = currentPath === item.href;
          return (
            <a
              key={index}
              href={item.href}
              target={item.isExternal ? "_blank" : "_self"}
              rel={item.isExternal ? "noopener noreferrer" : ""}
              className={`block pl-2 border-l-2 font-medium transition-all duration-300 ${
                isActive 
                  ? 'border-blue-300 text-blue-300' 
                  : 'border-gray-300/50 text-white hover:text-blue-200 hover:border-blue-300/50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              <div className="flex items-center py-1 transform transition-transform duration-300 hover:translate-x-2">
                {item.image && (
                  <div className={`w-8 h-8 rounded-full overflow-hidden mr-2 border transition-all duration-300 ${
                    isActive ? 'border-blue-300' : 'border-transparent hover:border-blue-300'
                  }`}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <span className="text-sm">
                  {item.name}
                  {item.isExternal && (
                    <span className="inline-block ml-1 text-xs text-blue-300">↗</span>
                  )}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

// Mobile menu component - updated with active states
const MobileMenu = ({ 
  isOpen, 
  setMobileMenuOpen,
  mobileTrainingDropdownOpen,
  toggleMobileTrainingDropdown,
  trainingSubItems,
  mobileProductsDropdownOpen,
  toggleMobileProductsDropdown,
  productsSubItems,
  mainNavLinks,
  activeSection,
  currentPath
}) => {
  // Function to check if a link is active
  const isLinkActive = (item) => {
    if (currentPath === item.href) return true;
    if (item.id === activeSection) return true;
    return false;
  };

  // Check if products should be highlighted in mobile menu
  const isProductsActive = activeSection === 'products' || currentPath.startsWith('/products/');
  
  // Check if training should be highlighted in mobile menu
  const isTrainingActive = activeSection === 'training' || 
    currentPath === '/drone-pilot-training' || 
    currentPath === '/drone-building' || 
    currentPath === '/gis-drones' || 
    currentPath === '/drone-defence' || 
    currentPath === '/drone-agriculture';

  return (
    <div
      className={`md:hidden transition-all duration-500 ease-in-out mt-8 overflow-hidden bg-gray-500/30 backdrop-blur-md border-t border-gray-300/20 ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="container mx-auto px-6 py-4 space-y-4">
        {/* Navigation items with Products and Training inserted */}
        {mainNavLinks.map((item, index) => {
          const isActive = isLinkActive(item);
          
          if (item.label === 'About Us') {
            return (
              <React.Fragment key={item.label}>
                {/* About Us Link */}
                <a
                  href={item.href}
                  className={`block font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-blue-300 border-l-2 border-blue-300 pl-3' 
                      : 'text-white hover:text-blue-200'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  {item.label}
                </a>
                
                {/* Products Dropdown - Right after About Us */}
                <div className={`${isProductsActive ? 'border-l-2 border-blue-300 pl-3' : ''}`}>
                  <MobileDropdown 
                    title="Products"
                    items={productsSubItems}
                    isOpen={mobileProductsDropdownOpen}
                    toggleDropdown={toggleMobileProductsDropdown}
                    setMobileMenuOpen={setMobileMenuOpen}
                    isProductsDropdown={true}
                  />
                </div>

                {/* Training Dropdown - After Products */}
                <div className={`${isTrainingActive ? 'border-l-2 border-blue-300 pl-3' : ''}`}>
                  <MobileDropdown 
                    title="Training"
                    items={trainingSubItems}
                    isOpen={mobileTrainingDropdownOpen}
                    toggleDropdown={toggleMobileTrainingDropdown}
                    setMobileMenuOpen={setMobileMenuOpen}
                    isProductsDropdown={true}
                  />
                </div>
              </React.Fragment>
            );
          }
          
          return (
            <a
              key={item.label}
              href={item.href}
              className={`block font-medium transition-all duration-300 ${
                isActive 
                  ? 'text-blue-300 border-l-2 border-blue-300 pl-3' 
                  : 'text-white hover:text-blue-200'
              }`}
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              {item.label}
            </a>
          );
        })}
        
        {/* Partner with Us Mobile */}
        <a
          href="/partner-with-us"
          className="block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg text-center transition-all duration-300"
          onClick={() => setMobileMenuOpen(false)}
          style={{ fontFamily: 'Raleway, sans-serif' }}
        >
          Partner with Us
        </a>
      </div>
    </div>
  );
};

// Enhanced Training Dropdown with images
const EnhancedTrainingDropdown = ({ scrolled, isOpen, toggleDropdown, isActive }) => {
  const trainingItems = [
    {
      name: 'Remote Pilot Training',
      description: 'DGCA certified drone pilot training program',
      image: '/images/training/t13.png',
      href: '/training'
    },
    {
      name: 'AI Center of Excellence',
      description: 'Learn to build and assemble drones from scratch',
      image: '/images/AIExcellence/aimlfordrone/aid6.jpg',
      href: '/AIExcellence'
    },
    {
      name: 'Industrial Course',
      description: 'Geographic Information Systems for drone mapping',
      image: '/images/industries/WCU.jpg',
      href: '/IndustrialCourse'
    }
  ];

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`relative font-medium transition-all duration-300 group flex items-center ${
          isActive 
            ? 'text-blue-300' 
            : 'text-white hover:text-blue-200'
        }`}
        style={{ fontFamily: 'Raleway, sans-serif' }}
      >
        <span>Training</span>
        <ChevronDown 
          className={`ml-1 w-4 h-4 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`} 
        />
        <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 transform transition-transform duration-300 origin-left ${
          isActive 
            ? 'scale-x-100' 
            : 'scale-x-0 group-hover:scale-x-100'
        }`}></span>
      </button>
      
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-6 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-300/20 rounded-xl shadow-xl animate-fade-in-down">
          <div className="p-4">
            <div className="space-y-3">
              {trainingItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-gray-800/50 group"
                >
                  <div className="w-12 h-12 rounded-lg overflow-hidden mr-4 border border-gray-600 group-hover:border-blue-400 transition-colors duration-300">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium text-sm group-hover:text-blue-200 transition-colors duration-300" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-xs mt-1 group-hover:text-gray-300 transition-colors duration-300" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      {item.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Enhanced Products Dropdown with active state
const EnhancedProductsDropdown = ({ scrolled, isOpen, toggleDropdown, isActive }) => {
  const products = [
    {
      name: 'FLYT-I - Training Drone',
      description: 'Professional training drone for pilot certification',
      image: '/images/products/p10.png',
      href: '/products/flyt-i'
    },
    {
      name: 'Survey Master Pro - Survey Drone',
      description: 'Advanced surveying and mapping solutions',
      image: '/images/products/p2.png', 
      href: '/products/survey-master-pro'
    },
    {
      name: 'Aero Agri - Agriculture Drone',
      description: 'Smart farming and crop monitoring technology',
      image: '/images/agri/a7.jpg',
      href: '/products/aero-agri'
    }
  ];

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`relative font-medium transition-all duration-300 group flex items-center ${
          isActive 
            ? 'text-blue-300' 
            : 'text-white hover:text-blue-200'
        }`}
        style={{ fontFamily: 'Raleway, sans-serif' }}
      >
        <span>Products</span>
        <ChevronDown 
          className={`ml-1 w-4 h-4 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`} 
        />
        <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 transform transition-transform duration-300 origin-left ${
          isActive 
            ? 'scale-x-100' 
            : 'scale-x-0 group-hover:scale-x-100'
        }`}></span>
      </button>
      
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-6 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-300/20 rounded-xl shadow-xl animate-fade-in-down">
          <div className="p-4">
            <div className="space-y-3">
              {products.map((product, index) => (
                <a
                  key={index}
                  href={product.href}
                  className="flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-gray-800/50 group"
                >
                  <div className="w-12 h-12 rounded-lg overflow-hidden mr-4 border border-gray-600 group-hover:border-blue-400 transition-colors duration-300">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium text-sm group-hover:text-blue-200 transition-colors duration-300" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      {product.name}
                    </h3>
                    <p className="text-gray-400 text-xs mt-1 group-hover:text-gray-300 transition-colors duration-300" style={{ fontFamily: 'Raleway, sans-serif' }}>
                      {product.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Animation styles component
const AnimationStyles = () => {
  return (
    <style jsx global>{`
      @keyframes fadeInDown {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .animate-fade-in-down {
        animation: fadeInDown 0.3s ease-in-out forwards;
      }
      
      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7);
        }
        70% {
          box-shadow: 0 0 0 10px rgba(59, 130, 246, 0);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
        }
      }
      
      .animate-pulse-blue {
        animation: pulse 2s infinite;
      }
    `}</style>
  );
};

// Main Navbar component
const Navbar = () => {
  const navbarRef = useRef(null);
  const trainingDropdownRef = useRef(null);
  const productsDropdownRef = useRef(null);
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [trainingDropdownOpen, setTrainingDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileTrainingDropdownOpen, setMobileTrainingDropdownOpen] = useState(false);
  const [mobileProductsDropdownOpen, setMobileProductsDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1920);

  // Get navigation links and active section
  const { mainNavLinks, trainingSubItems, productsSubItems } = useNavigationLinks();
  const { activeSection, currentPath } = useActiveSection();

  // Function to check if a navigation item is active
  const isNavItemActive = (item) => {
    if (currentPath === item.href) return true;
    if (item.id === activeSection) return true;
    return false;
  };

  // Check if products dropdown should be highlighted - only when actually on products pages
  const isProductsActive = currentPath.startsWith('/products/');
  
  // Check if training dropdown should be highlighted
  const isTrainingActive = currentPath === '/drone-pilot-training' || 
    currentPath === '/drone-building' || 
    currentPath === '/gis-drones' || 
    currentPath === '/drone-defence' || 
    currentPath === '/drone-agriculture';

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

  useEffect(() => {
    // Close dropdowns when clicking outside navbar
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
        setTrainingDropdownOpen(false);
        setProductsDropdownOpen(false);
      }
    };
  
    if (trainingDropdownOpen || productsDropdownOpen || mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [trainingDropdownOpen, productsDropdownOpen, mobileMenuOpen]);
  

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleTrainingDropdown = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setTrainingDropdownOpen(!trainingDropdownOpen);
    // Close other dropdowns if they're open
    if (productsDropdownOpen) setProductsDropdownOpen(false);
  };

  const toggleProductsDropdown = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setProductsDropdownOpen(!productsDropdownOpen);
    // Close other dropdowns if they're open
    if (trainingDropdownOpen) setTrainingDropdownOpen(false);
  };

  const toggleMobileTrainingDropdown = (e) => {
    // Stop event propagation
    if (e) e.stopPropagation();
    setMobileTrainingDropdownOpen(!mobileTrainingDropdownOpen);
    if (mobileProductsDropdownOpen) setMobileProductsDropdownOpen(false);
  };

  const toggleMobileProductsDropdown = (e) => {
    // Stop event propagation
    if (e) e.stopPropagation();
    setMobileProductsDropdownOpen(!mobileProductsDropdownOpen);
    if (mobileTrainingDropdownOpen) setMobileTrainingDropdownOpen(false);
  };

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-500/30 backdrop-blur-md border border-gray-300/20 shadow-[0px_0px_20px_4px_rgba(92,92,92,0.3)] py-2"
    >
      <div className="w-full px-16">
        <div className="flex items-center justify-between">
          {/* Logo - Left side */}
          <Logo />

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Navigation items with Products and Training inserted */}
            {mainNavLinks.map((item) => {
              if (item.label === 'About Us') {
                return (
                  <React.Fragment key={item.label}>
                    {/* About Us Link */}
                    <NavLink 
                      href={item.href} 
                      label={item.label}
                      isActive={isNavItemActive(item)}
                    />
                    
                    {/* Products Dropdown - Right after About Us */}
                    <div data-dropdown="products" className="relative">
                      <div ref={productsDropdownRef}>
                        <EnhancedProductsDropdown 
                          scrolled={true} 
                          isOpen={productsDropdownOpen} 
                          toggleDropdown={toggleProductsDropdown}
                          isActive={isProductsActive}
                        />
                      </div>
                    </div>

                    {/* Training Dropdown - After Products */}
                    <div data-dropdown="training" className="relative">
                      <div ref={trainingDropdownRef}>
                        <EnhancedTrainingDropdown 
                          scrolled={true} 
                          isOpen={trainingDropdownOpen} 
                          toggleDropdown={toggleTrainingDropdown}
                          isActive={isTrainingActive}
                        />
                      </div>
                    </div>
                  </React.Fragment>
                );
              }
              
              return (
                <NavLink 
                  key={item.label} 
                  href={item.href} 
                  label={item.label}
                  isActive={isNavItemActive(item)}
                />
              );
            })}
          </div>

          {/* Partner Button and Mobile Menu Button - Right side */}
          <div className="flex items-center space-x-4">
            {/* Partner Button - Desktop only */}
            <div className="hidden lg:block">
              <PartnerButton />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <MobileMenuButton 
                isOpen={mobileMenuOpen} 
                toggleMenu={toggleMobileMenu} 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileTrainingDropdownOpen={mobileTrainingDropdownOpen}
        toggleMobileTrainingDropdown={toggleMobileTrainingDropdown}
        trainingSubItems={trainingSubItems}
        mobileProductsDropdownOpen={mobileProductsDropdownOpen}
        toggleMobileProductsDropdown={toggleMobileProductsDropdown}
        productsSubItems={productsSubItems}
        mainNavLinks={mainNavLinks}
        activeSection={activeSection}
        currentPath={currentPath}
      />
      
      {/* Global animation styles */}
      <AnimationStyles />
    </nav>
  );
};

export default Navbar;