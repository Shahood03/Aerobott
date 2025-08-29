import React, { useState, useEffect } from "react";

// Note: Make sure to include Raleway font in your project
// Add this to your index.html or import in your CSS:
// <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
// And configure Tailwind to use Raleway in your tailwind.config.js:
// fontFamily: { 'raleway': ['Raleway', 'sans-serif'] }

const ClientsLovePilotsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const newsItems = [
    {
      id: 1,
      title: "Aerobott Launches Revolutionary AI-Powered Drone Technology",
      publication: "Tech Innovation Today",
      date: "March 2025",
      excerpt:
        "Breaking new ground in autonomous flight systems with cutting-edge artificial intelligence integration.",
      imageUrl: "/images/news/ai-drone-launch.jpg",
    },
    {
      id: 2,
      title: "Indian Startup Aerobott Secures Major Defense Contract",
      publication: "Defense Weekly",
      date: "February 2025",
      excerpt:
        "Strategic partnership marks significant milestone in indigenous drone manufacturing for national security.",
      imageUrl: "/images/news/defense-contract.jpg",
    },
    {
      id: 3,
      title:
        "Precision Agriculture Revolution: Aerobott's Smart Farming Solutions",
      publication: "AgriTech Magazine",
      date: "January 2025",
      excerpt:
        "Transforming traditional farming with intelligent drone technology and precision agriculture capabilities.",
      imageUrl: "/images/news/agri-revolution.jpg",
    },
    {
      id: 4,
      title: "Aerobott Wins 'Best Innovation Award' at Drone Tech Summit",
      publication: "Aviation Today",
      date: "December 2024",
      excerpt:
        "Recognition for outstanding contribution to drone technology and aerospace innovation in India.",
      imageUrl: "/images/news/innovation-award.jpg",
    },
    {
      id: 5,
      title: "Breakthrough in Drone Battery Technology by Aerobott",
      publication: "Energy Tech Weekly",
      date: "November 2024",
      excerpt:
        "New lithium-ion advancement extends flight time by 40% for commercial drone operations.",
      imageUrl: "/images/news/battery-tech.jpg",
    },
    {
      id: 6,
      title: "Aerobott Partners with Leading Universities for R&D",
      publication: "Research Today",
      date: "October 2024",
      excerpt:
        "Collaboration aims to accelerate innovation in drone technology and aerospace engineering education.",
      imageUrl: "/images/news/university-partnership.jpg",
    },
  ];

  // Duplicate news items for seamless loop
  const duplicatedNews = [...newsItems, ...newsItems];

  return (
    <section
      id="news"
      className="relative flex flex-col items-center justify-center w-full  bg-black overflow-hidden px-16 pt-12 z-2"
    >
      {/* Background gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/7 to-transparent z-1"></div>

      {/* Background glow effect */}
      <div className="absolute bottom-[-249px] left-1/2 transform -translate-x-1/2 w-[793px] h-[499px] bg-gradient-radial from-white/10 to-transparent opacity-10 rounded-lg pointer-events-none z-1"></div>

      <div className="flex flex-col items-center justify-center gap-3 w-full  relative z-1">
        {/* Header Section with Animation */}
        <div
          className={`flex flex-col items-center justify-center gap-2.5 w-full max-w-3xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Main Heading */}
          <div className="w-full">
            <h2 className="text-center text-[#d5dbe6] text-4xl md:text-5xl font-raleway font-medium leading-tight">
              Clients {" "}
              <span className="text-5xl md:text-8xl inline-block align-middle">
                ♡
              </span>{" "}
              <span className="font-raleway font-normal text-[#d5dbe6] relative">
                Pilots
              </span>
            </h2>
          </div>

          {/* Subtitle */}
          <div className="w-full">
            <p className="text-center text-[#d5dbe6]/60 text-base font-raleway leading-relaxed">
              Latest coverage and recognition of our innovations
            </p>
          </div>
        </div>

        {/* Scrolling News Container */}
        <div className="w-full flex-1 flex items-start pt-8 pb-8 relative overflow-hidden">
          {/* Left Fade Gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#04070d] to-transparent z-10 pointer-events-none"></div>

          {/* Right Fade Gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#04070d] to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div className="flex gap-6 animate-scroll">
            {duplicatedNews.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex-shrink-0 w-80 h-96"
              >
                <ScrollingNewsCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for infinite scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

// Scrolling News Card Component
const ScrollingNewsCard = ({ title, publication, date, excerpt, imageUrl }) => {
  return (
    <div className="group relative w-full h-full bg-black border border-white/7 rounded-2xl overflow-hidden shadow-inner hover:shadow-lg transition-all duration-500 will-change-transform hover:scale-105 hover:border-white/20">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Overlay with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 group-hover:from-black/40 group-hover:via-black/60 group-hover:to-black/85 transition-all duration-500"></div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-between p-6">
        {/* Top Section */}
        <div className="flex justify-between items-start">
          <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white/80 text-xs font-raleway font-medium rounded-full border border-white/20 group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
            {publication}
          </span>
          <span className="text-white/60 text-xs font-raleway">{date}</span>
        </div>

        {/* Bottom Content */}
        <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
          <h3 className="text-white text-lg font-raleway font-medium leading-tight mb-3 group-hover:text-white/95 transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          <p className="text-white/80 text-sm font-raleway leading-relaxed group-hover:text-white/90 transition-colors duration-300 line-clamp-3">
            {excerpt}
          </p>

          {/* Read More Indicator */}
          <div className="mt-4 flex items-center gap-2 text-white/60 group-hover:text-white/80 transition-colors duration-300">
            <span className="text-xs font-raleway">Read More</span>
            <svg
              className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Glowing edge effect on hover */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/30 group-hover:shadow-lg group-hover:shadow-white/10 transition-all duration-500"></div>
    </div>
  );
};

export default ClientsLovePilotsSection;
