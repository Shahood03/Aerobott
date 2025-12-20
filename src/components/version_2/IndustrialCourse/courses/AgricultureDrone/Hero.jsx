import React, { useState, useEffect } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDemoPopupOpen, setIsDemoPopupOpen] = useState(false);

  // Handle scroll effect and mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    checkMobile();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Responsive particle count
  const getParticleCount = () => {
    if (typeof window === "undefined") return 10;
    if (window.innerWidth < 640) return 8;
    if (window.innerWidth < 768) return 10;
    if (window.innerWidth < 1024) return 15;
    return 20;
  };

  const handleDemoRequest = () => {
    setIsDemoPopupOpen(true);
  };

  const closeDemoPopup = () => {
    setIsDemoPopupOpen(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Load Raleway font from Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
        rel="stylesheet"
      />

      {/* Background with responsive parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/course/z1.avif')",
          transform: isMobile ? "none" : `translateY(${scrollY * 0.2}px)`,
          filter: "brightness(0.4)",
        }}
      />

      {/* Animated particles - Responsive count and size */}

      {/* Content Container - Fully responsive */}
      <div className="relative flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-7xl mx-auto text-center">
        {/* Main Content */}
        <div className="text-white z-10 w-full">
          <h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal mb-4 sm:mb-6 md:mb-8 bg-clip-text text-gray-200 leading-tight tracking-wide px-2"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Learn to operate, manage, and maintain agricultural spraying drones
          </h1>

          {/* Responsive button container */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center w-full max-w-sm sm:max-w-md lg:max-w-2xl mx-auto">
            <button
              onClick={() => {
                const section = document.getElementById("certification");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group relative w-full sm:w-auto px-6 sm:px-8 md:px-10 lg:px-12 
             py-3 sm:py-4 md:py-5 bg-gradient-to-r from-blue-600 to-blue-800 
             rounded-lg sm:rounded-xl overflow-hidden transition-all duration-300 
             hover:bg-blue-700 hover:scale-105 hover:shadow-[0px_0px_20px_0px_rgba(59,130,246,0.7)] 
             md:hover:shadow-[0px_0px_35px_0px_rgba(59,130,246,0.7)] active:scale-95"
              style={{
                boxShadow: "0px 0px 20px 0px rgba(59,130,246,0.50)",
                outline: "1px solid rgba(147, 197, 253, 0.3)",
                outlineOffset: "-1px",
              }}
            >
              <span
                className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-normal leading-tight relative z-10"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                Apply Now!
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay for smooth transition to next section */}
      <div className="w-full h-24 sm:h-32 lg:h-36 absolute left-0 bottom-0 bg-gradient-to-b from-transparent to-zinc-950 z-10" />

      {/* Demo Request Popup */}

      {/* Enhanced CSS for animations and responsive design */}
      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.5);
            opacity: 0.2;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(1deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        /* Mobile-first optimizations */
        @media (max-width: 640px) {
          @keyframes float {
            0% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-5px) rotate(0.5deg);
            }
            100% {
              transform: translateY(0px) rotate(0deg);
            }
          }

          /* Ensure touch-friendly buttons */
          button {
            min-height: 48px;
          }
        }

        /* Tablet optimizations */
        @media (min-width: 641px) and (max-width: 1024px) {
          @keyframes float {
            0% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(1.5deg);
            }
            100% {
              transform: translateY(0px) rotate(0deg);
            }
          }
        }

        /* Desktop optimizations */
        @media (min-width: 1025px) {
          @keyframes float {
            0% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(2deg);
            }
            100% {
              transform: translateY(0px) rotate(0deg);
            }
          }
        }

        /* Disable parallax on mobile for better performance */
        @media (max-width: 768px) {
          .parallax-bg {
            transform: none !important;
          }
        }

        /* Respect reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
