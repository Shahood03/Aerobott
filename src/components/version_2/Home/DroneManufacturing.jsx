

// Note: Make sure to include Raleway font in your project
// Add this to your index.html or import in your CSS:
// <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
// And configure Tailwind to use Raleway in your tailwind.config.js:
// fontFamily: { 'raleway': ['Raleway', 'sans-serif'] }

// const BenefitsSection = () => {
//   return (
//     <section 
//       id="benefits" 
//       className="relative flex flex-col items-center justify-center w-full p-16 bg-[#04070d] overflow-hidden  px-16 z-2"
//     >
//       {/* Background gradient at bottom */}
//       <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/7 to-transparent z-1"></div>
      
//       {/* Background glow effect */}
//       <div className="absolute bottom-[-249px] left-1/2 transform -translate-x-1/2 w-[793px] h-[499px] bg-gradient-radial from-white/10 to-transparent opacity-10 rounded-lg pointer-events-none z-1"></div>
      
//       <div className="flex flex-col items-center justify-center gap-11 w-full h-full relative z-1">
        
//         {/* Header Section */}
//         <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-2xl">

          
//           {/* Main Heading */}
//           <div className="w-full">
//             <h2 className="text-center text-[#d5dbe6] text-4xl md:text-5xl font-raleway font-medium leading-tight">
//               Drone{' '}
//               <span className="font-raleway font-normal  text-[#d5dbe6]">Manufacturing</span>
//             </h2>
//           </div>
          
//           {/* Subtitle */}
//           <div className="w-full">
//             <p className="text-center text-[#d5dbe6]/60 text-base font-raleway leading-relaxed">
//               Complete drone solutions from design to maintenance
//             </p>
//           </div>
//         </div>

//         {/* Benefits Cards Grid */}
//         <div className="flex flex-wrap items-start justify-center gap-7 w-full flex-1">
          
//           {/* Drone Building Card */}
//           <div className="flex-1 min-w-[300px] h-[347px] relative">
//             <BenefitCard
//               title="Drone Building"
//               description="Covering design & assembly with precision engineering and quality components"
//               imageUrl="/images/daas/d3.jpg"
//               altText="Drone assembly and manufacturing process"
//             />
//           </div>

//           {/* Drone Manufacturing Training Card */}
//           <div className="flex-1 min-w-[300px] h-[347px] relative">
//             <BenefitCard
//               title="Drone Manufacturing Training"
//               description="Covering skill development for making drones with expert guidance and hands-on experience"
//               imageUrl="/images/daas/d4.jpg"
//               altText="Drone manufacturing training and education"
//             />
//           </div>

//           {/* Drone Repair & Maintenance Card */}
//           <div className="flex-1 min-w-[300px] h-[347px] relative">
//             <BenefitCard
//               title="Drone Repair & Maintenance"
//               description="After-sales service, upgrades, and performance tuning for optimal drone operations"
//               imageUrl="/images/daas/d5.jpg"
//               altText="Drone repair and maintenance services"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Benefit Card Component
// const BenefitCard = ({ title, description, imageUrl, altText }) => {
//   return (
//     <div className="group relative w-full h-full bg-[#04070d] border border-white/7 rounded-2xl overflow-hidden shadow-inner hover:shadow-lg transition-all duration-300 will-change-transform">
//       {/* Full Background Image */}
//       <div className="absolute inset-0">
//         <img 
//           src={imageUrl} 
//           alt={altText}
//           className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
//         />
//       </div>

//       {/* Overlay for better text readability */}
//       <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

//       {/* Text Content positioned at bottom */}
//       <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-1.5 p-7 text-center bg-gradient-to-t from-black/80 via-black/60 to-transparent ">
//         <div className="relative z-10">
//           <h3 className="text-white text-xl font-raleway font-medium leading-tight mb-2">
//             {title}
//           </h3>
//           <p className="text-white/90 text-base font-raleway leading-relaxed text-center">
//             {description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BenefitsSection;

import React, { useState, useEffect, useRef } from "react";

// Note: Make sure to include Raleway font in your project
// Add this to your index.html or import in your CSS:
// <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
// And configure Tailwind to use Raleway in your tailwind.config.js:
// fontFamily: { 'raleway': ['Raleway', 'sans-serif'] }

// PixelCard Component
class Pixel {
  constructor(canvas, context, x, y, color, speed, delay) {
    this.width = canvas.width;
    this.height = canvas.height;
    this.ctx = context;
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = this.getRandomValue(0.1, 0.9) * speed;
    this.size = 0;
    this.sizeStep = Math.random() * 0.4;
    this.minSize = 0.5;
    this.maxSizeInteger = 2;
    this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger);
    this.delay = delay;
    this.counter = 0;
    this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01;
    this.isIdle = false;
    this.isReverse = false;
    this.isShimmer = false;
  }

  getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
  }

  draw() {
    const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(
      this.x + centerOffset,
      this.y + centerOffset,
      this.size,
      this.size
    );
  }

  appear() {
    this.isIdle = false;
    if (this.counter <= this.delay) {
      this.counter += this.counterStep;
      return;
    }
    if (this.size >= this.maxSize) {
      this.isShimmer = true;
    }
    if (this.isShimmer) {
      this.shimmer();
    } else {
      this.size += this.sizeStep;
    }
    this.draw();
  }

  disappear() {
    this.isShimmer = false;
    this.counter = 0;
    if (this.size <= 0) {
      this.isIdle = true;
      return;
    } else {
      this.size -= 0.1;
    }
    this.draw();
  }

  shimmer() {
    if (this.size >= this.maxSize) {
      this.isReverse = true;
    } else if (this.size <= this.minSize) {
      this.isReverse = false;
    }
    if (this.isReverse) {
      this.size -= this.speed;
    } else {
      this.size += this.speed;
    }
  }
}

function getEffectiveSpeed(value, reducedMotion) {
  const min = 0;
  const max = 100;
  const throttle = 0.001;
  const parsed = parseInt(value, 10);

  if (parsed <= min || reducedMotion) {
    return min;
  } else if (parsed >= max) {
    return max * throttle;
  } else {
    return parsed * throttle;
  }
}

const VARIANTS = {
  default: {
    activeColor: null,
    gap: 5,
    speed: 35,
    colors: "#f8fafc,#f1f5f9,#cbd5e1",
    noFocus: false,
  },
  blue: {
    activeColor: "#e0f2fe",
    gap: 10,
    speed: 25,
    colors: "#e0f2fe,#7dd3fc,#0ea5e9",
    noFocus: false,
  },
  yellow: {
    activeColor: "#fef08a",
    gap: 3,
    speed: 20,
    colors: "#fef08a,#fde047,#eab308",
    noFocus: false,
  },
  pink: {
    activeColor: "#fecdd3",
    gap: 6,
    speed: 80,
    colors: "#fecdd3,#fda4af,#e11d48",
    noFocus: true,
  },
};

function PixelCard({
  variant = "default",
  gap,
  speed,
  colors,
  noFocus,
  className = "",
  children,
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const pixelsRef = useRef([]);
  const animationRef = useRef(null);
  const timePreviousRef = useRef(performance.now());
  const reducedMotion = useRef(
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  ).current;

  const variantCfg = VARIANTS[variant] || VARIANTS.default;
  const finalGap = gap ?? variantCfg.gap;
  const finalSpeed = speed ?? variantCfg.speed;
  const finalColors = colors ?? variantCfg.colors;
  const finalNoFocus = noFocus ?? variantCfg.noFocus;

  const initPixels = () => {
    if (!containerRef.current || !canvasRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);
    const ctx = canvasRef.current.getContext("2d");

    canvasRef.current.width = width;
    canvasRef.current.height = height;
    canvasRef.current.style.width = `${width}px`;
    canvasRef.current.style.height = `${height}px`;

    const colorsArray = finalColors.split(",");
    const pxs = [];
    for (let x = 0; x < width; x += parseInt(finalGap, 10)) {
      for (let y = 0; y < height; y += parseInt(finalGap, 10)) {
        const color =
          colorsArray[Math.floor(Math.random() * colorsArray.length)];

        const dx = x - width / 2;
        const dy = y - height / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const delay = reducedMotion ? 0 : distance;

        pxs.push(
          new Pixel(
            canvasRef.current,
            ctx,
            x,
            y,
            color,
            getEffectiveSpeed(finalSpeed, reducedMotion),
            delay
          )
        );
      }
    }
    pixelsRef.current = pxs;
  };

  const doAnimate = (fnName) => {
    animationRef.current = requestAnimationFrame(() => doAnimate(fnName));
    const timeNow = performance.now();
    const timePassed = timeNow - timePreviousRef.current;
    const timeInterval = 1000 / 60;

    if (timePassed < timeInterval) return;
    timePreviousRef.current = timeNow - (timePassed % timeInterval);

    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx || !canvasRef.current) return;

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    let allIdle = true;
    for (let i = 0; i < pixelsRef.current.length; i++) {
      const pixel = pixelsRef.current[i];
      pixel[fnName]();
      if (!pixel.isIdle) {
        allIdle = false;
      }
    }
    if (allIdle) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleAnimation = (name) => {
    cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(() => doAnimate(name));
  };

  const onMouseEnter = () => handleAnimation("appear");
  const onMouseLeave = () => handleAnimation("disappear");
  const onFocus = (e) => {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    handleAnimation("appear");
  };
  const onBlur = (e) => {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    handleAnimation("disappear");
  };

  useEffect(() => {
    initPixels();
    const observer = new ResizeObserver(() => {
      initPixels();
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finalGap, finalSpeed, finalColors, finalNoFocus]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden grid place-items-center transition-colors duration-200 ease-[cubic-bezier(0.5,1,0.89,1)] select-none ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={finalNoFocus ? undefined : onFocus}
      onBlur={finalNoFocus ? undefined : onBlur}
      tabIndex={finalNoFocus ? -1 : 0}
    >
      <canvas
        className="absolute inset-0 w-full h-full pointer-events-none"
        ref={canvasRef}
      />
      {children}
    </div>
  );
}

const DroneManufacturingSection = () => {
  const manufacturingProcess = [
    {
      phase: "Design & Engineering",
      details: "CAD modeling, aerodynamics optimization",
    },
    {
      phase: "Prototyping & Testing",
      details: "Component integration, performance validation",
    },
    {
      phase: "Production & Delivery",
      details: "Final assembly, quality assurance, certification",
    },
  ];

  return (
    <section className="w-full bg-black min-h-screen px-16 flex flex-col items-center justify-center">
      <div className="w-full text-center h-full flex flex-col justify-center">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-3xl mb-16 mx-auto">
          
          {/* Main Heading */}
          <div className="w-full">
            <h2 className="text-center text-[#d5dbe6] text-4xl md:text-5xl font-raleway font-medium leading-tight">
              Drone{' '}
              <span className="font-raleway font-normal text-[#d5dbe6]">Manufacturing</span>
            </h2>
          </div>
          
          {/* Subtitle */}
          <div className="w-full">
            <p className="text-center text-[#d5dbe6]/60 text-base font-raleway leading-relaxed">
              Complete drone solutions from design to maintenance
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10 flex flex-col justify-center text-left">
            
            {/* Description */}
            <div className="flex flex-col gap-6 w-full">
              <p className="text-justify text-[#d5dbe6]/80 text-lg font-raleway leading-relaxed">
                We are{' '}
                <span className="text-white font-medium">Aerobott, pioneers in custom drone manufacturing</span>. 
                From concept to flight-ready systems, we design, engineer, and build cutting-edge drones 
                tailored to your mission requirements with precision and innovation at every step of the process.
              </p>
              
              <p className="text-justify text-[#d5dbe6]/80 text-lg font-raleway leading-relaxed">
                Our high-performance manufacturing capabilities and{' '}
                <span className="text-white font-medium">cutting-edge technology drive precision, efficiency, and quality</span>{' '}
                across diverse applications — from agriculture and infrastructure to disaster management and defense.
                By combining advanced engineering, real-time testing, and autonomous systems integration, we deliver 
                exceptional drone solutions that exceed industry standards.
              </p>
            </div>

            {/* Manufacturing Process Section */}
            <div className="space-y-6">
              <div className="w-full h-px bg-gray-600"></div>
              <h3 className="text-2xl lg:text-3xl font-light text-[#d5dbe6] font-raleway">
                Manufacturing Process
              </h3>

              {/* Process Items */}
              <div className="space-y-4">
                {manufacturingProcess.map((process, index) => (
                  <div
                    key={index}
                    className="transform hover:translate-x-2 transition-all duration-300"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start py-4 px-4 rounded-lg hover:bg-gray-900/30 transition-all duration-300 border-l-2 border-transparent hover:border-gray-600">
                      <div>
                        <span className="text-lg lg:text-xl text-[#d5dbe6] font-medium font-raleway">
                          {process.phase}
                        </span>
                      </div>
                      <div>
                        <span className="text-lg lg:text-xl text-[#d5dbe6]/70 font-raleway leading-relaxed">
                          {process.details}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative flex items-center">
            {/* Animated Pixel Card with Drone Manufacturing Image */}
            <PixelCard
              variant="blue"
              className="w-full h-[600px] lg:h-[700px] rounded-2xl border border-gray-700"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img
                  src="/images/daas/d3.jpg"
                  alt="Aerobott Drone Manufacturing Facility"
                  className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                  onError={(e) => {
                    console.error('Failed to load image: /images/daas/d3.jpg');
                    e.target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-0 transition-all duration-700"></div>
              </div>
            </PixelCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DroneManufacturingSection;