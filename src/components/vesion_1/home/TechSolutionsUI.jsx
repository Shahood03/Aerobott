import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

// This approach uses CSS-in-JS for style isolation
const TechSolutionsUI = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const slides = [
    {
      id: 0,
      icon: "drone",
      title: "DRONE TECH",
      fullTitle: "Drone Technology Solutions",
      description: "Precision-crafted unmanned aerial systems delivering revolutionary capabilities in surveillance, mapping, and industrial applications with unmatched reliability.",
      features: ["Advanced Flight Systems", "Real-time Data Capture", "Precision Navigation", "Extended Flight Duration"]
    },
    {
      id: 1,
      icon: "defence",
      title: "DEFENCE TECH",
      fullTitle: "Defence Technology",
      description: "Cutting-edge defense technologies designed to enhance security operations with sophisticated surveillance, threat detection, and strategic intelligence gathering systems.",
      features: ["Perimeter Security", "Tactical Surveillance", "Encrypted Communications", "Autonomous Systems"]
    },
    {
      id: 2,
      icon: "agri",
      title: "AGRI TECH",
      fullTitle: "Agricultural Technology",
      description: "Smart agricultural solutions that optimize crop yields, resource management, and sustainability through advanced monitoring and precision farming techniques.",
      features: ["Crop Monitoring", "Soil Analysis", "Precision Spraying", "Yield Optimization"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    
    // Animation entrance effect
    setIsVisible(true);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const DroneIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  );

  const DefenceIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v3m0 0v3m0-3h3m-3 0H9" />
    </svg>
  );

  const AgriIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'drone': return <DroneIcon />;
      case 'defence': return <DefenceIcon />;
      case 'agri': return <AgriIcon />;
      default: return <DroneIcon />;
    }
  };

  // Custom styles that will be encapsulated within this component only
  const styles = {
    wrapper: "tech-solutions-container bg-white min-h-screen w-full overflow-hidden font-sans",
    bgGradient: "absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-70 z-0",
    contentWrapper: "w-full px-0 py-12 relative z-10",
    headerSection: `text-center mb-16 space-y-6 transition-all duration-1000 w-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
    mainTitle: "text-5xl font-bold text-gray-900 tracking-tight leading-tight",
    titleSpan: "text-black font-extrabold",
    description: "text-gray-600 text-lg max-w-2xl mx-auto",
    buttonContainer: "flex justify-center space-x-4 pt-2",
    primaryButton: "bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1",
    secondaryButton: "bg-white border border-black text-black hover:bg-gray-50 px-6 py-3 rounded-xl font-medium transition-all shadow-md hover:shadow-lg",
    mainContent: "flex flex-col lg:flex-row gap-0 bg-white rounded-xl p-0 shadow-xl relative overflow-hidden w-full",
    leftPanel: "w-full lg:w-1/3 z-10 p-8",
    sectionTitle: "text-lg font-semibold text-gray-700 mb-6",
    tabItem: (isActive) => `flex items-center gap-4 p-6 mx-0 my-4 rounded-xl cursor-pointer transition-all duration-500 relative overflow-hidden ${
      isActive ? "bg-gray-600 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`,
    tabBg: "absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full",
    iconWrapper: (isActive) => `w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 ${
      isActive ? "bg-white/20" : "bg-white"
    }`,
    iconStyle: (isActive) => isActive ? "text-white" : "text-black",
    tabContent: "z-10",
    tabTitle: "font-bold tracking-wide block",
    tabSubtitle: (isActive) => `text-sm transition-all duration-300 ${
      isActive ? "text-gray-300" : "text-gray-500"
    }`,
    customBox: "mt-8 p-6 bg-gray-50 rounded-xl border-t border-b border-gray-100",
    boxTitle: "font-semibold text-gray-800 mb-3",
    boxText: "text-sm text-gray-600 mb-4",
    textLink: "text-black hover:text-gray-700 font-medium text-sm flex items-center",
    rightPanel: "w-full lg:w-2/3 min-h-[500px] p-8 bg-gray-50",
    contentSlide: (isActive) => `transition-all duration-700 transform h-full ${
      isActive ? "opacity-100 translate-x-0" : "opacity-0 absolute translate-x-8 pointer-events-none"
    }`,
    contentSpace: "space-y-6",
    contentLabel: "text-gray-900 font-medium",
    contentTitle: "text-3xl font-bold text-black mt-1",
    contentDesc: "text-gray-600 text-lg leading-relaxed",
    featureGrid: "grid grid-cols-2 gap-4 my-6",
    featureItem: "flex items-center",
    featureIcon: "w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mr-3",
    featureText: "text-gray-700",
    mediaContainer: "bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-lg relative mt-8",
    videoOverlay: "absolute inset-0 bg-gray-600 flex items-center justify-center z-10",
    playButton: "w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-gray-500/30",
    mediaWrapper: "w-full h-full aspect-w-16 aspect-h-9",
    mediaImage: "w-full h-full object-cover",
    buttonGroup: "flex space-x-4 mt-6",
    learnButton: "bg-gray-600 hover:bg-gray-900 text-white px-5 py-2 rounded-xl font-medium transition-all",
    demoButton: "bg-white border border-gray-300 text-gray-900 hover:bg-gray-50 px-5 py-2 rounded-xl font-medium transition-all",
    clientSection: "mt-20 mb-10 w-full bg-gray-100 py-10",
    clientTitle: "text-center text-gray-700 font-semibold mb-8",
    clientLogos: "flex flex-wrap justify-center items-center gap-12 w-full",
    logoItem: "grayscale hover:grayscale-0 transition-all duration-300",
    logoImage: "h-8 object-contain"
  };

  return (
    <div className={styles.wrapper}>
      {/* Background gradient overlay */}
      <div className={styles.bgGradient}></div>
      
      <div className={styles.contentWrapper}>
        {/* Header Section with transition effects */}
        <div className={styles.headerSection}>
          <h1 className={styles.mainTitle}>
            Innovative <span className={styles.titleSpan}>Technology Solutions</span>
          </h1>
          <p className={styles.description}>
            Pioneering the future through cutting-edge drone, defense, and agricultural technologies tailored for real-world applications
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.primaryButton}>
              Explore Solutions
            </button>
            <button className={styles.secondaryButton}>
              Contact Us
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className={styles.mainContent}>
          {/* Left Side - Tab Navigation */}
          <div className={styles.leftPanel}>
            <h3 className={styles.sectionTitle}>Our Technology Sectors</h3>
            
            {slides.map((slide, index) => (
              <div 
                key={slide.id}
                onClick={() => setActiveSlide(index)}
                className={styles.tabItem(activeSlide === index)}
              >
                {/* Background animation effect for active item */}
                {activeSlide === index && (
                  <div className={styles.tabBg}></div>
                )}
                
                <div className={styles.iconWrapper(activeSlide === index)}>
                  <div className={styles.iconStyle(activeSlide === index)}>
                    {getIcon(slide.icon)}
                  </div>
                </div>
                
                <div className={styles.tabContent}>
                  <span className={styles.tabTitle}>{slide.title}</span>
                  <span className={styles.tabSubtitle(activeSlide === index)}>
                    Professional Solutions
                  </span>
                </div>
              </div>
            ))}
            
            <div className={styles.customBox}>
              <h4 className={styles.boxTitle}>Need custom solutions?</h4>
              <p className={styles.boxText}>Our team of experts is ready to develop tailored technology solutions for your specific requirements.</p>
              <button className={styles.textLink}>
                Request consultation 
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Content with transitions */}
          <div className={styles.rightPanel}>
            {slides.map((slide, index) => (
              <div 
                key={slide.id}
                className={styles.contentSlide(activeSlide === index)}
              >
                <div className={styles.contentSpace}>
                  <div>
                    <span className={styles.contentLabel}>PROFESSIONAL SOLUTIONS</span>
                    <h2 className={styles.contentTitle}>
                      {slide.fullTitle}
                    </h2>
                  </div>
                  
                  <p className={styles.contentDesc}>
                    {slide.description}
                  </p>
                  
                  <div className={styles.featureGrid}>
                    {slide.features.map((feature, i) => (
                      <div key={i} className={styles.featureItem}>
                        <div className={styles.featureIcon}>
                          <svg className="w-3 h-3 text-black" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className={styles.featureText}>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className={styles.mediaContainer}>
                    <div className={styles.videoOverlay}>
                      <div className={styles.playButton}>
                        <Play className="w-8 h-8 text-black ml-1" />
                      </div>
                    </div>
                    <div className={styles.mediaWrapper}>
                      <img 
                        src="/api/placeholder/1200/675" 
                        alt={`${slide.fullTitle} Showcase`}
                        className={styles.mediaImage}
                      />
                    </div>
                  </div>
                  
                  <div className={styles.buttonGroup}>
                    <button className={styles.learnButton}>
                      Learn More
                    </button>
                    <button className={styles.demoButton}>
                      Request Demo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Client Logos Section */}
        <div className={styles.clientSection}>
          <h3 className={styles.clientTitle}>Trusted by Leading Organizations</h3>
          <div className={styles.clientLogos}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={styles.logoItem}>
                <img 
                  src={`/api/placeholder/120/40`} 
                  alt={`Client Logo ${i}`}
                  className={styles.logoImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSolutionsUI;