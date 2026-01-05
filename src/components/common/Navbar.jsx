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
      else if (path === '/drone-pilot-training-courses') setActiveSection('training');
      else if (path === '/drone-as-a-service') setActiveSection('daas');
      else if (path === '/hire-pilot') setActiveSection('hire-pilot');
      else if (path === '/contact-us') setActiveSection('contact-us');
      else if (path === '/blogs') setActiveSection('blogs');
      else if (path.startsWith('/products/')) setActiveSection('products');
      else if (path === '/') setActiveSection('home');
      else setActiveSection('');
    }

    // For single page applications with sections, you can also check scroll position
    const handleScroll = () => {
      if (window.location.pathname === '/') {
        // Only do scroll-based detection on homepage
        const sections = ['home', 'about-us', 'products', 'training', 'daas', 'hire-pilot', 'blogs', 'contact-us'];
        
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
          src="/images/logo/logo.avif"
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
const MobileDropdown = ({ title, items, isOpen, toggleDropdown, setMobileMenuOpen, currentPath, isActive }) => {
  return (
    <div>
      <button
        onClick={toggleDropdown}
        className={`flex items-center justify-between w-full font-medium transition-all duration-300 ${
          isActive ? 'text-blue-300' : 'text-white hover:text-blue-200'
        }`}
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
          const isItemActive = currentPath === item.href;
          return (
            <a
              key={index}
              href={item.href}
              target={item.isExternal ? "_blank" : "_self"}
              rel={item.isExternal ? "noopener noreferrer" : ""}
              className={`block pl-2 border-l-2 font-medium transition-all duration-300 ${
                isItemActive
                  ? 'border-blue-300 text-blue-300'
                  : 'border-gray-300/50 text-white hover:text-blue-200 hover:border-blue-300/50'
              }`}
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              <div className="flex items-center py-1 transform transition-transform duration-300 hover:translate-x-2">
                {item.image && (
                  <div className={`w-8 h-8 rounded-full overflow-hidden mr-2 border transition-all duration-300 ${
                    isItemActive ? 'border-blue-300' : 'border-transparent hover:border-blue-300'
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

// Mobile menu component - ALL LINKS INCLUDED
const MobileMenu = ({
  isOpen,
  setMobileMenuOpen,
  mobileTrainingDropdownOpen,
  toggleMobileTrainingDropdown,
  trainingSubItems,
  mobileProductsDropdownOpen,
  toggleMobileProductsDropdown,
  productsSubItems,
  activeSection,
  currentPath
}) => {
  // Check if products should be highlighted
  const isProductsActive = activeSection === 'products' || currentPath.startsWith('/products/');

  // Check if training should be highlighted
  const isTrainingActive = activeSection === 'training' ||
    currentPath === '/drone-pilot-training-courses' ||
    currentPath === '/AIExcellence' ||
    currentPath === '/IndustrialCourse';

  // Helper function to check if link is active
  const isLinkActive = (href, id) => {
    if (currentPath === href) return true;
    if (id === activeSection) return true;
    return false;
  };

  return (
    <div
      className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-300/20 ${
        isOpen ? 'max-h-[80vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="container mx-auto px-6 py-4 space-y-4">
        
        {/* 1. About Us */}
        <a
          href="/about-us"
          className={`block font-medium transition-all duration-300 ${
            isLinkActive('/about-us', 'about-us')
              ? 'text-blue-300 border-l-2 border-blue-300 pl-3'
              : 'text-white hover:text-blue-200'
          }`}
          onClick={() => setMobileMenuOpen(false)}
          style={{ fontFamily: 'Raleway, sans-serif' }}
        >
          About Us
        </a>

        {/* 2. Products Dropdown */}
        <div className={`${isProductsActive ? 'border-l-2 border-blue-300 pl-3' : ''}`}>
          <MobileDropdown
            title="Products"
            items={productsSubItems}
            isOpen={mobileProductsDropdownOpen}
            toggleDropdown={toggleMobileProductsDropdown}
            setMobileMenuOpen={setMobileMenuOpen}
            currentPath={currentPath}
            isActive={isProductsActive}
          />
        </div>

        {/* 3. Training Dropdown */}
        <div className={`${isTrainingActive ? 'border-l-2 border-blue-300 pl-3' : ''}`}>
          <MobileDropdown
            title="Training"
            items={trainingSubItems}
            isOpen={mobileTrainingDropdownOpen}
            toggleDropdown={toggleMobileTrainingDropdown}
            setMobileMenuOpen={setMobileMenuOpen}
            currentPath={currentPath}
            isActive={isTrainingActive}
          />
        </div>

        {/* 4. DAAS */}
        <a
          href="/drone-as-a-service"
          className={`block font-medium transition-all duration-300 ${
            isLinkActive('/drone-as-a-service', 'daas')
              ? 'text-blue-300 border-l-2 border-blue-300 pl-3'
              : 'text-white hover:text-blue-200'
          }`}
          onClick={() => setMobileMenuOpen(false)}
          style={{ fontFamily: 'Raleway, sans-serif' }}
        >
          DAAS
        </a>

        {/* 5. Hire a Pilot */}
        <a
          href="/hire-pilot"
          className={`block font-medium transition-all duration-300 ${
            isLinkActive('/hire-pilot', 'hire-pilot')
              ? 'text-blue-300 border-l-2 border-blue-300 pl-3'
              : 'text-white hover:text-blue-200'
          }`}
          onClick={() => setMobileMenuOpen(false)}
          style={{ fontFamily: 'Raleway, sans-serif' }}
        >
          Hire a Pilot
        </a>

        {/* 6. Careers (External Link) */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScAJKH8uMbRmIKT3gYmR5RuVdiLpDLSMwnpEVJU00KWNnKyrQ/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
          className="block font-medium transition-all duration-300 text-white hover:text-blue-200"
          onClick={() => setMobileMenuOpen(false)}
          style={{ fontFamily: 'Raleway, sans-serif' }}
        >
          Careers <span className="inline-block ml-1 text-xs">↗</span>
        </a>

        {/* 7. Blogs */}
        <a
          href="/blogs"
          className={`block font-medium transition-all duration-300 ${
            isLinkActive('/blogs', 'blogs')
              ? 'text-blue-300 border-l-2 border-blue-300 pl-3'
              : 'text-white hover:text-blue-200'
          }`}
          onClick={() => setMobileMenuOpen(false)}
          style={{ fontFamily: 'Raleway, sans-serif' }}
        >
          Blogs
        </a>

        {/* 8. Contact Us */}
        <a
          href="/contact-us"
          className={`block font-medium transition-all duration-300 ${
            isLinkActive('/contact-us', 'contact-us')
              ? 'text-blue-300 border-l-2 border-blue-300 pl-3'
              : 'text-white hover:text-blue-200'
          }`}
          onClick={() => setMobileMenuOpen(false)}
          style={{ fontFamily: 'Raleway, sans-serif' }}
        >
          Contact Us
        </a>

        {/* 9. Partner with Us Button */}
        <a
          href="/partner-with-us"
          className="block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg text-center transition-all duration-300 mt-4"
          onClick={() => setMobileMenuOpen(false)}
          style={{ fontFamily: 'Raleway, sans-serif' }}
        >
          Partner with Us
        </a>
      </div>
    </div>
  );
};

// Enhanced Training Dropdown with images (Desktop)
const EnhancedTrainingDropdown = ({ isOpen, toggleDropdown, isActive }) => {
  const trainingItems = [
    {
      name: 'Remote Pilot Training',
      description: 'DGCA certified drone pilot training program',
      image: '/images/training/t13.png',
      href: '/drone-pilot-training-courses'
    },
    {
      name: 'AI Center of Excellence',
      description: 'Learn to build and assemble drones from scratch',
      image: '/images/AIExcellence/aimlfordrone/aid6.avif',
      href: '/AIExcellence'
    },
    {
      name: 'Industrial Course',
      description: 'Geographic Information Systems for drone mapping',
      image: '/images/industries/WCU.avif',
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
        <div className="absolute top-full left-0 mt-6 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-300/20 rounded-xl shadow-xl animate-fade-in-down z-50">
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

// Enhanced Products Dropdown with active state (Desktop)
const EnhancedProductsDropdown = ({ isOpen, toggleDropdown, isActive }) => {
  const products = [
    {
      name: 'FLYT-I - Training Drone',
      description: 'Professional training drone for pilot certification',
      image: '/images/products/p10.avif',
      href: '/products/flyt-i-drone'
    },
    {
      name: 'Survey Master Pro - Survey Drone',
      description: 'Advanced surveying and mapping solutions',
      image: '/images/products/p2.avif',
      href: '/products/survey-master-pro-drone'
    },
    {
      name: 'Aero Agri - Agriculture Drone',
      description: 'Smart farming and crop monitoring technology',
      image: '/images/agri/a7.avif',
      href: '/products/aero-agri-drone'
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
        <div className="absolute top-full left-0 mt-6 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-300/20 rounded-xl shadow-xl animate-fade-in-down z-50">
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

  // Get active section
  const { activeSection, currentPath } = useActiveSection();

  // Training submenu items for mobile
  const trainingSubItems = [
    {
      name: 'Remote Pilot Training',
      description: 'DGCA certified drone pilot training program',
      image: '/images/training/t13.png',
      href: '/drone-pilot-training-courses',
      isExternal: false
    },
    {
      name: 'AI Center of Excellence',
      description: 'Learn to build and assemble drones from scratch',
      image: '/images/AIExcellence/aimlfordrone/aid6.avif',
      href: '/AIExcellence',
      isExternal: false
    },
    {
      name: 'Industrial Course',
      description: 'Geographic Information Systems for drone mapping',
      image: '/images/industries/WCU.avif',
      href: '/IndustrialCourse',
      isExternal: false
    }
  ];

  // Products submenu items for mobile
  const productsSubItems = [
    {
      name: 'FLYT-I - Training Drone',
      image: '/images/products/p10.avif',
      description: 'Professional training drone for pilot certification',
      href: '/products/flyt-i-drone',
      isExternal: false
    },
    {
      name: 'Survey Master Pro - Survey Drone',
      image: '/images/products/p2.avif',
      description: 'Advanced surveying and mapping solutions',
      href: '/products/survey-master-pro',
      isExternal: false
    },
    {
      name: 'Aero Agri - Agriculture Drone',
      image: '/images/agri/a7.avif',
      description: 'Smart farming and crop monitoring technology',
      href: '/products/aero-agri-drone',
      isExternal: false
    }
  ];

  // Function to check if a navigation item is active
  const isNavItemActive = (href, id) => {
    if (currentPath === href) return true;
    if (id === activeSection) return true;
    return false;
  };

  // Check if products dropdown should be highlighted
  const isProductsActive = currentPath.startsWith('/products/');

  // Check if training dropdown should be highlighted
  const isTrainingActive = 
    currentPath === '/drone-pilot-training-courses' ||
    currentPath === '/AIExcellence' ||
    currentPath === '/IndustrialCourse';

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
    if (productsDropdownOpen) setProductsDropdownOpen(false);
  };

  const toggleProductsDropdown = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setProductsDropdownOpen(!productsDropdownOpen);
    if (trainingDropdownOpen) setTrainingDropdownOpen(false);
  };

  const toggleMobileTrainingDropdown = (e) => {
    if (e) e.stopPropagation();
    setMobileTrainingDropdownOpen(!mobileTrainingDropdownOpen);
    if (mobileProductsDropdownOpen) setMobileProductsDropdownOpen(false);
  };

  const toggleMobileProductsDropdown = (e) => {
    if (e) e.stopPropagation();
    setMobileProductsDropdownOpen(!mobileProductsDropdownOpen);
    if (mobileTrainingDropdownOpen) setMobileTrainingDropdownOpen(false);
  };

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-500/30 backdrop-blur-md border border-gray-300/20 shadow-[0px_0px_20px_4px_rgba(92,92,92,0.3)] py-2"
    >
      <div className="w-full px-4 lg:px-16">
        <div className="flex items-center justify-between">
          {/* Logo - Left side */}
          <Logo />

          {/* Desktop Navigation - Center (Hidden on mobile/tablet) */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* 1. About Us */}
            <NavLink
              href="/about-us"
              label="About Us"
              isActive={isNavItemActive('/about-us', 'about-us')}
            />

            {/* 2. Products Dropdown */}
            <div data-dropdown="products" className="relative">
              <div ref={productsDropdownRef}>
                <EnhancedProductsDropdown
                  isOpen={productsDropdownOpen}
                  toggleDropdown={toggleProductsDropdown}
                  isActive={isProductsActive}
                />
              </div>
            </div>

            {/* 3. Training Dropdown */}
            <div data-dropdown="training" className="relative">
              <div ref={trainingDropdownRef}>
                <EnhancedTrainingDropdown
                  isOpen={trainingDropdownOpen}
                  toggleDropdown={toggleTrainingDropdown}
                  isActive={isTrainingActive}
                />
              </div>
            </div>

            {/* 4. DAAS */}
            <NavLink
              href="/drone-as-a-service"
              label="DAAS"
              isActive={isNavItemActive('/drone-as-a-service', 'daas')}
            />

            {/* 5. Hire a Pilot */}
            <NavLink
              href="/hire-pilot"
              label="Hire a Pilot"
              isActive={isNavItemActive('/hire-pilot', 'hire-pilot')}
            />

            {/* 6. Careers (External) */}
            <NavLink
              href="https://docs.google.com/forms/d/e/1FAIpQLScAJKH8uMbRmIKT3gYmR5RuVdiLpDLSMwnpEVJU00KWNnKyrQ/viewform?usp=publish-editor"
              label="Careers"
              isExternal={true}
              isActive={false}
            />

            {/* 7. Blogs */}
            <NavLink
              href="/blogs"
              label="Blogs"
              isActive={isNavItemActive('/blogs', 'blogs')}
            />

            {/* 8. Contact Us */}
            <NavLink
              href="/contact-us"
              label="Contact Us"
              isActive={isNavItemActive('/contact-us', 'contact-us')}
            />
          </div>

          {/* Partner Button and Mobile Menu Button - Right side */}
          <div className="flex items-center space-x-4">
            {/* Partner Button - Desktop only */}
            <div className="hidden lg:block">
              <PartnerButton />
            </div>

            {/* Mobile Menu Button - Visible on mobile/tablet */}
            <div className="lg:hidden">
              <MobileMenuButton
                isOpen={mobileMenuOpen}
                toggleMenu={toggleMobileMenu}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - ALL LINKS MATCHING DESKTOP */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        mobileTrainingDropdownOpen={mobileTrainingDropdownOpen}
        toggleMobileTrainingDropdown={toggleMobileTrainingDropdown}
        trainingSubItems={trainingSubItems}
        mobileProductsDropdownOpen={mobileProductsDropdownOpen}
        toggleMobileProductsDropdown={toggleMobileProductsDropdown}
        productsSubItems={productsSubItems}
        activeSection={activeSection}
        currentPath={currentPath}
      />

      {/* Global animation styles */}
      <AnimationStyles />
    </nav>
  );
};

export default Navbar;