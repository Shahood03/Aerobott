import { useRef, useEffect, useState, useCallback } from "react";

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = "132, 0, 255";
const MOBILE_BREAKPOINT = 768;

// Updated card data with working placeholder images
const cardData = [
  {
    color: "#060010",
    title: "Introduction to Survey Drone Piloting",
    label: "Basics",
    image: "/images/drone/d10.avif",
  },
  {
    color: "#060010",
    title: "Drone Flight Planning and Preparation",
    label: "Planning",
    image: "/images/course/g7.avif",
  },
  {
    color: "#060010",
    title: "Land Mapping Basics",
    label: "Mapping",
    image: "/images/course/g1.avif",
  },
  {
    color: "#060010",
    title: "Aerial Data Collection Techniques",
    label: "Data Collection",
    image: "/images/course/g2.avif",
  },
  {
    color: "#060010",
    title: "Data Processing and Analysis",
    label: "Analysis",
    image: "/images/course/g8.avif",
  },
  {
    color: "#060010",
    title: "Specialization in Land Mapping",
    label: "Advanced Mapping",
    image: "/images/course/g3.avif",
  },

];

const createParticleElement = (
  x,
  y,
  color = DEFAULT_GLOW_COLOR
) => {
  const el = document.createElement("div");
  el.className = "particle";
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const calculateSpotlightValues = (radius) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75,
});

const updateCardGlowProperties = (
  card,
  mouseX,
  mouseY,
  glow,
  radius
) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty("--glow-x", `${relativeX}%`);
  card.style.setProperty("--glow-y", `${relativeY}%`);
  card.style.setProperty("--glow-intensity", glow.toString());
  card.style.setProperty("--glow-radius", `${radius}px`);
};

const ParticleCard = ({
  children,
  className = "",
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false,
}) => {
  const cardRef = useRef(null);
  const particlesRef = useRef([]);
  const timeoutsRef = useRef([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef([]);
  const particlesInitialized = useRef(false);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(
        Math.random() * width,
        Math.random() * height,
        glowColor
      )
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    particlesRef.current.forEach((particle) => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true);
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        // Simple animation without GSAP dependency
        clone.style.transform = 'scale(0)';
        clone.style.opacity = '0';
        
        setTimeout(() => {
          clone.style.transition = 'all 0.3s ease';
          clone.style.transform = 'scale(1)';
          clone.style.opacity = '1';
        }, 10);

        // Floating animation
        let angle = 0;
        const floatAnimation = () => {
          if (!isHoveredRef.current) return;
          angle += 0.02;
          const x = Math.sin(angle) * 30;
          const y = Math.cos(angle) * 20;
          clone.style.transform = `translate(${x}px, ${y}px) scale(1)`;
          requestAnimationFrame(floatAnimation);
        };
        floatAnimation();
      }, index * 100);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();

      if (enableTilt) {
        element.style.transition = 'transform 0.3s ease';
        element.style.transform = 'perspective(1000px) rotateX(5deg) rotateY(5deg)';
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();

      if (enableTilt) {
        element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      }

      if (enableMagnetism) {
        element.style.transform = 'translate(0px, 0px)';
      }
    };

    const handleMouseMove = (e) => {
      if (!enableTilt && !enableMagnetism) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;

        element.style.transform = `translate(${magnetX}px, ${magnetY}px)`;
      }
    };

    const handleClick = (e) => {
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, transparent 70%);
        left: ${x - 50}px;
        top: ${y - 50}px;
        pointer-events: none;
        z-index: 1000;
        transform: scale(0);
        opacity: 1;
        transition: all 0.6s ease;
      `;

      element.appendChild(ripple);

      setTimeout(() => {
        ripple.style.transform = 'scale(4)';
        ripple.style.opacity = '0';
      }, 10);

      setTimeout(() => ripple.remove(), 600);
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("click", handleClick);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("click", handleClick);
      clearAllParticles();
    };
  }, [
    animateParticles,
    clearAllParticles,
    disableAnimations,
    enableTilt,
    enableMagnetism,
    clickEffect,
    glowColor,
  ]);

  return (
    <div
      ref={cardRef}
      className={`${className} relative overflow-hidden`}
      style={{ ...style, position: "relative", overflow: "hidden" }}
    >
      {children}
    </div>
  );
};

const GlobalSpotlight = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
}) => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;

    const spotlight = document.createElement("div");
    spotlight.className = "global-spotlight";
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
      transition: opacity 0.3s ease;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e) => {
      if (!spotlightRef.current || !gridRef.current) return;

      const section = gridRef.current.closest(".bento-section");
      const rect = section?.getBoundingClientRect();
      const mouseInside =
        rect &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      const cards = gridRef.current.querySelectorAll(".card");

      if (!mouseInside) {
        spotlightRef.current.style.opacity = '0';
        cards.forEach((card) => {
          card.style.setProperty("--glow-intensity", "0");
        });
        return;
      }

      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) -
          Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity =
            (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }

        updateCardGlowProperties(
          card,
          e.clientX,
          e.clientY,
          glowIntensity,
          spotlightRadius
        );
      });

      spotlightRef.current.style.left = e.clientX + 'px';
      spotlightRef.current.style.top = e.clientY + 'px';

      const targetOpacity =
        minDistance <= proximity
          ? 0.8
          : minDistance <= fadeDistance
            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
            : 0;

      spotlightRef.current.style.opacity = targetOpacity.toString();
    };

    const handleMouseLeave = () => {
      gridRef.current?.querySelectorAll(".card").forEach((card) => {
        card.style.setProperty("--glow-intensity", "0");
      });
      if (spotlightRef.current) {
        spotlightRef.current.style.opacity = '0';
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

  return null;
};

const BentoCardGrid = ({ children, gridRef }) => (
  <div
    className="bento-section w-full px-4 sm:px-6 lg:px-8 select-none relative"
    style={{ fontSize: "clamp(1rem, 0.9rem + 0.5vw, 1.5rem)" }}
    ref={gridRef}
  >
    {children}
  </div>
);

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

const MagicBento = ({
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
}) => {
  const gridRef = useRef(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;

  return (
<div className="w-full min-h-screen bg-black flex items-center justify-center">
      <div className="container mx-auto max-w-7xl px-4 py-16">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
          
          .bento-section {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 200px;
            --glow-color: ${glowColor};
            --border-color: #392e4e;
            --background-dark: #060010;
            --white: hsl(0, 0%, 100%);
            --purple-primary: rgba(132, 0, 255, 1);
            --purple-glow: rgba(132, 0, 255, 0.2);
            --purple-border: rgba(132, 0, 255, 0.8);
            font-family: 'Raleway', sans-serif;
          }
          
          .card-responsive {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
            width: 100%;
          }
          
          @media (min-width: 600px) {
            .card-responsive {
              grid-template-columns: repeat(2, 1fr);
              gap: 1.5rem;
            }
          }
          
          @media (min-width: 1024px) {
            .card-responsive {
              grid-template-columns: repeat(4, 1fr);
              gap: 2rem;
            }
            
            .card-responsive .card:nth-child(3) {
              grid-column: span 2;
              grid-row: span 2;
            }
            
            .card-responsive .card:nth-child(4) {
              grid-column: 1 / span 2;
              grid-row: 2 / span 2;
            }
            
            .card-responsive .card:nth-child(6) {
              grid-column: 4;
              grid-row: 3;
            }
          }
          
          .card--border-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 6px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
                rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 30%,
                transparent 60%);
            border-radius: inherit;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: subtract;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 10;
          }
          
          .card--border-glow:hover::after {
            opacity: 1;
          }
          
          .card--border-glow:hover {
            box-shadow: 0 4px 20px rgba(46, 24, 78, 0.4), 0 0 30px rgba(${glowColor}, 0.2);
          }
          
          .particle::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: rgba(${glowColor}, 0.2);
            border-radius: 50%;
            z-index: -1;
          }
        
          .card-bg-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.8;
            z-index: 1;
            transition: opacity 0.3s ease, transform 0.3s ease;
          }

          .card:hover .card-bg-image {
            opacity: 0.9;
            transform: scale(1.05);
          }

          .card-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, 
              rgba(6, 0, 16, 0.1) 0%, 
              rgba(6, 0, 16, 0.3) 50%,
              rgba(6, 0, 16, 0.5) 100%);
            z-index: 2;
            pointer-events: none;
          }

          .card-content-wrapper {
            position: relative;
            z-index: 3;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          
          @media (max-width: 599px) {
            .card-responsive {
              grid-template-columns: 1fr;
              width: 90%;
              margin: 0 auto;
              padding: 0.5rem;
            }
            
            .card-responsive .card {
              width: 100%;
              min-height: 180px;
            }
          }
        `}
      </style>

      {/* Header Section */}
      <div className="flex flex-col items-center justify-center gap-4 w-full max-w-7xl mx-auto mb-12 px-16 sm:px-6 lg:px-8">
        <div className="w-full">
          <h2 className="text-center text-[#d5dbe6] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight" style={{fontFamily: 'Raleway, sans-serif'}}>
            What You'll{' '}
            <span className="font-normal text-[#d5dbe6]">Learn</span>
          </h2>
        </div>
        <div className="w-full">
          <p className="text-center text-[#d5dbe6]/60 text-sm sm:text-base leading-relaxed px-2" style={{fontFamily: 'Raleway, sans-serif'}}>
            Comprehensive drone training covering technology, operations, and industry applications
          </p>
        </div>
      </div>

      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      <BentoCardGrid gridRef={gridRef}>
        <div className="card-responsive grid gap-2">
          {cardData.map((card, index) => {
            const baseClassName = `card flex flex-col justify-between relative aspect-[4/3] min-h-[240px] w-full max-w-full p-6 rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] ${enableBorderGlow ? "card--border-glow" : ""
              }`;

            const cardStyle = {
              backgroundColor: card.color || "var(--background-dark)",
              borderColor: "var(--border-color)",
              color: "var(--white)",
              "--glow-x": "50%",
              "--glow-y": "50%",
              "--glow-intensity": "0",
              "--glow-radius": "200px",
            };

            if (enableStars) {
              return (
                <ParticleCard
                  key={index}
                  className={baseClassName}
                  style={cardStyle}
                  disableAnimations={shouldDisableAnimations}
                  particleCount={particleCount}
                  glowColor={glowColor}
                  enableTilt={enableTilt}
                  clickEffect={clickEffect}
                  enableMagnetism={enableMagnetism}
                >
                  {/* Background Image */}
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="card-bg-image"
                    loading="lazy"
                    onError={(e) => {
                      console.log('Image failed to load:', card.image);
                      e.target.style.display = 'none';
                    }}
                    onLoad={(e) => {
                      console.log('Image loaded successfully:', card.image);
                    }}
                  />
                  
                  {/* Overlay for better text readability */}
                  <div className="card-overlay" />
                  
                  {/* Content wrapper */}
                  <div className="card-content-wrapper">
                    <div className="card__header flex justify-between gap-3 relative text-white">
                      <span className="card__label text-sm font-normal text-[#d5dbe6]/70" style={{fontFamily: 'Raleway, sans-serif'}}>{card.label}</span>
                    </div>
                    <div className="card__content flex flex-col relative text-white">
                      <h3
                        className={`card__title font-medium text-lg sm:text-xl text-[#d5dbe6] m-0 mb-2 ${textAutoHide ? "text-clamp-1" : ""}`}
                        style={{fontFamily: 'Raleway, sans-serif'}}
                      >
                        {card.title}
                      </h3>
                      <p
                        className={`card__description text-sm sm:text-base leading-relaxed text-[#d5dbe6]/80 ${textAutoHide ? "text-clamp-2" : ""}`}
                        style={{fontFamily: 'Raleway, sans-serif'}}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>
                </ParticleCard>
              );
            }

            return (
              <div
                key={index}
                className={baseClassName}
                style={cardStyle}
              >
                {/* Background Image */}
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="card-bg-image"
                  loading="lazy"
                  onError={(e) => {
                    console.log('Image failed to load:', card.image);
                    e.target.style.display = 'none';
                  }}
                  onLoad={(e) => {
                    console.log('Image loaded successfully:', card.image);
                  }}
                />
                
                {/* Overlay for better text readability */}
                <div className="card-overlay" />
                
                {/* Content wrapper */}
                <div className="card-content-wrapper">
                  <div className="card__header flex justify-between gap-3 relative text-white">
                    <span className="card__label text-sm font-normal text-[#d5dbe6]/70" style={{fontFamily: 'Raleway, sans-serif'}}>{card.label}</span>
                  </div>
                  <div className="card__content flex flex-col relative text-white">
                    <h3
                      className={`card__title font-medium text-lg sm:text-xl text-[#d5dbe6] m-0 mb-2 ${textAutoHide ? "text-clamp-1" : ""}`}
                      style={{fontFamily: 'Raleway, sans-serif'}}
                    >
                      {card.title}
                    </h3>
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </BentoCardGrid>
    </div>
    </div>
  );
};

export default MagicBento;