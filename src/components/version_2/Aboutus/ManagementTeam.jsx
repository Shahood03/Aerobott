import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Linkedin, Twitter, Mail, Globe, Users, Shield, Brain, Settings, MapPin, Award } from 'lucide-react';

const ChromaGrid = ({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (url) => {
    if (url) window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCardMove = (e) => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  // Calculate grid layout based on number of items
  const getGridConfig = (itemCount) => {
    if (itemCount <= 2) return { cols: Math.min(2, itemCount), maxWidth: '800px' };
    if (itemCount <= 3) return { cols: 3, maxWidth: '1200px' };
    if (itemCount <= 4) return { cols: 3, maxWidth: '1200px' }; // Changed to 3 columns for 4 items
    return { cols: 3, maxWidth: '1400px' };
  };

  const gridConfig = getGridConfig(items.length);

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full mx-auto ${className}`}
      style={{
        "--r": `${radius}px`,
        "--x": "50%",
        "--y": "50%",
        maxWidth: gridConfig.maxWidth,
        minHeight: '600px',
        padding: '40px 20px'
      }}
    >
      <div 
        className="grid gap-8 place-items-center"
        style={{
          gridTemplateColumns: `repeat(${gridConfig.cols}, minmax(350px, 1fr))`,
          justifyContent: 'center'
        }}
      >
        {items.map((c, i) => (
          <article
            key={i}
            onMouseMove={handleCardMove}
            onClick={() => handleCardClick(c.url)}
            className="group relative flex flex-col w-[350px] h-[600px] rounded-[20px] overflow-hidden border-2 border-transparent transition-colors duration-300 cursor-pointer"
            style={{
              "--card-border": c.borderColor || "transparent",
              background: c.gradient,
              "--spotlight-color": "rgba(255,255,255,0.3)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
              }}
            />
            <div className="relative z-10 flex-shrink-0 p-[10px] box-border">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="w-full h-80 object-cover rounded-[10px]"
              />
            </div>
            <footer className="relative z-10 p-4 text-white font-sans flex-1 flex flex-col">
              <h3 className="m-0 text-[1.1rem] font-semibold mb-2 leading-tight">{c.title}</h3>
              <p className="m-0 text-[0.9rem] opacity-90 mb-3 font-medium text-blue-200 leading-tight">{c.subtitle}</p>
              <p className="m-0 text-[0.8rem] opacity-80 leading-relaxed text-gray-300 mb-4 flex-1 overflow-hidden">{c.description}</p>
              {c.socialLinks && (
                <div className="flex justify-center mt-auto">
                  {c.socialLinks.filter(social => social.icon === Linkedin).map((social, idx) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={idx}
                        href={social.url}
                        onClick={(e) => e.stopPropagation()}
                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <IconComponent size={16} className="text-white" />
                      </a>
                    );
                  })}
                </div>
              )}
            </footer>
          </article>
        ))}
      </div>
      
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
        }}
      />
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
        style={{
          backdropFilter: "grayscale(1) brightness(0.78)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.78)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          opacity: 1,
        }}
      />
    </div>
  );
};

const ManagementTeamSection = () => {
  // Complete team data with only the requested sections
  const teamData = {
    leadership: {
      title: "Leadership Team",
      icon: Users,
      members: [
        {
          name: "Sanjay Vaidh",
          position: "Founder",
          description: "Visionary leader driving Aerobott's mission in Defence, UAV, AI, and emerging technologies. Leading the transformation of India's aerospace and defense capabilities through cutting-edge drone technology and strategic partnerships.",
          image: "/images/team/t2.png",
          socialLinks: [
            { icon: Linkedin, url: "https://www.linkedin.com/in/sanjay-vaidh-118a0a43" },
            { icon: Mail, url: "mailto:sanjay@aerobott.com" }
          ],
          borderColor: "#4F46E5",
          gradient: "linear-gradient(145deg,#4F46E5,#000)"
        },
        {
          name: "Arpana Mishra",
          position: "Co-Founder & Chief Operating Officer (COO)",
          description: "Oversees operations, strategic partnerships, and long-term growth. Arpana is the visionary Co-Founder and Director driving the strategic growth and innovation at the heart of our organization.",
          image: "/images/team/t4.jpg",
          socialLinks: [
            { icon: Linkedin, url: "https://www.linkedin.com/in/arpana-mishra-162a6543" },
            { icon: Mail, url: "mailto:ceo@aerobott.com" }
          ],
          borderColor: "#10B981",
          gradient: "linear-gradient(210deg,#10B981,#000)"
        },
        {
          name: "Deepak Vaidh",
          position: "Co-Founder",
          description: "Co-Founder playing a pivotal role in shaping the vision and direction of the organization. With a forward-thinking mindset and passion for innovation, he contributes significantly to strategic growth.",
          image: "/images/team/t3.png",
          socialLinks: [
            { icon: Linkedin, url: "https://www.linkedin.com/in/deepak-vaidh-a26b00274" },
            { icon: Mail, url: "mailto:deepak@aerobott.com" }
          ],
          borderColor: "#F59E0B",
          gradient: "linear-gradient(165deg,#F59E0B,#000)"
        }
      ]
    },
    advisory: {
      title: "Advisory Board",
      icon: Award,
      members: [
        {
          name: "Mr. Ajay Kumar",
          position: "Principal Advisor",
          description: "Former UPSC Chairman & Defence Secretary, Government of India – Strategic advisor on RPTO, Defence, and UAV initiatives. Brings decades of defense expertise and policy insights.",
          image: "/images/team/t12.jpeg",
          socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Mail, url: "#" }],
          borderColor: "#EF4444",
          gradient: "linear-gradient(195deg,#EF4444,#000)"
        },
        {
          name: "Mr. Vishal Mirchandani",
          position: "Advisor",
          description: "Former CEO, Adani Airports – Advisory on Integrated Defence & Drone Technology Park (IDDP) and Drone Port operations. Expert in aviation infrastructure.",
          image: "/images/team/t10.jpeg",
          socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Mail, url: "#" }],
          borderColor: "#8B5CF6",
          gradient: "linear-gradient(225deg,#8B5CF6,#000)"
        },
        {
          name: "Mr. Kaustav Dhar",
          position: "Advisor",
          description: "CEO, Zoom Air & Asthana Air – Advisor on air taxi operations and advanced aerial mobility. Leading expert in commercial aviation and emerging aerial transportation technologies.",
          image: "/images/team/t11.jpeg",
          socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Mail, url: "#" }],
          borderColor: "#06B6D4",
          gradient: "linear-gradient(135deg,#06B6D4,#000)"
        }
      ]
    },
    management: {
      title: "Core Management",
      icon: Settings,
      members: [
        {
          name: "Vaibhav Gupta",
          position: "Chief Technology Officer (CTO)",
          description: "Leads R&D in drones, AI solutions, and defence technologies. Drives technological innovation and oversees the development of cutting-edge UAV systems and autonomous flight technologies.",
          image: "/images/team/t13.png",
          socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Twitter, url: "#" }, { icon: Mail, url: "#" }],
          borderColor: "#2563EB",
          gradient: "linear-gradient(215deg,#2563EB,#000)"
        },
        {
          name: "Mr. Harsh",
          position: "General Manager",
          description: "Manages RPTO Drone Pilot curriculum and AI & Data Science courses. Develops comprehensive training programs and certification processes for drone pilots and technical personnel.",
          image: "/images/team/t14.jpeg",
          socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Mail, url: "#" }],
          borderColor: "#D97706",
          gradient: "linear-gradient(275deg,#D97706,#000)"
        },
        {
          name: "Somay Vaidh",
          position: "AI & Data Science Director",
          description: "Industry leader in AI/ML, analytics, and defence tech applications. Spearheads artificial intelligence initiatives and data-driven solutions for defense and commercial drone operations.",
          image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=300&fit=crop&crop=face",
          socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Twitter, url: "#" }, { icon: Mail, url: "#" }],
          borderColor: "#7C3AED",
          gradient: "linear-gradient(245deg,#7C3AED,#000)"
        },
      ]
    },
    technical: {
      title: "Technical & Training Division",
      icon: Brain,
      members: [
        {
          name: "Mr. Gautam Lakhani",
          position: "Drone Operations Lead",
          description: "Supervises drone testing, pilot certification, and field operations. Ensures operational excellence and safety standards in all drone-related activities and training programs.",
          image: "/images/team/t15.jpg",
          socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Mail, url: "#" }],
          borderColor: "#DC2626",
          gradient: "linear-gradient(335deg,#DC2626,#000)"
        },
        {
          name: "Mr. Altamash Shaikh",
          position: "AI/ML Lead Engineer",
          description: "Develops AI models for defence and commercial applications. Specializes in machine learning algorithms, computer vision, and autonomous systems for advanced drone capabilities.",
          image: "/images/team/t17.jpeg",
          socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Twitter, url: "#" }, { icon: Mail, url: "#" }],
          borderColor: "#7C3AED",
          gradient: "linear-gradient(25deg,#7C3AED,#000)"
        },
        {
          name: "Mr. Sonu Saini",
          position: "RPTO Training Instructor",
          description: "Certified drone pilot and defence trainer. Provides hands-on training and certification for drone pilots, ensuring compliance with DGCA regulations and industry standards.",
          image: "/images/team/t16.jpeg",
          socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Mail, url: "#" }],
          borderColor: "#059669",
          gradient: "linear-gradient(65deg,#059669,#000)"
        },
        // {
        //   name: "Ms. Samina Shaikh",
        //   position: "AI & Data Science Trainer",
        //   description: "Industry-certified instructor delivering hands-on training. Specializes in AI/ML education, data analytics, and practical implementation of artificial intelligence in drone technology.",
        //   image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
        //   socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Mail, url: "#" }],
        //   borderColor: "#DC2626",
        //   gradient: "linear-gradient(95deg,#DC2626,#000)"
        // }
      ]
    }
  };

  // Convert team data to ChromaGrid format
  const convertToChromaItems = (members) => {
    return members.map(member => ({
      image: member.image,
      title: member.name,
      subtitle: member.position,
      description: member.description,
      borderColor: member.borderColor,
      gradient: member.gradient,
      socialLinks: member.socialLinks,
      url: member.socialLinks?.[0]?.url || "#"
    }));
  };

  const sectionOrder = ['leadership', 'advisory', 'management', 'technical'];

  return (
    <section className="bg-black text-white min-h-screen pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Import Raleway font */}
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      {/* Background blur effects */}
      <div className="absolute w-48 sm:w-72 lg:w-96 h-40 sm:h-60 lg:h-80 left-0 top-40 sm:top-60 lg:top-80 bg-blue-600 rounded-full blur-[75px] sm:blur-[120px] lg:blur-[150px] opacity-20" />
      <div className="absolute w-48 sm:w-72 lg:w-96 h-40 sm:h-60 lg:h-80 right-0 top-30 sm:top-45 lg:top-60 bg-purple-600 rounded-full blur-[75px] sm:blur-[120px] lg:blur-[150px] opacity-15" />
      <div className="absolute w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 left-1/2 transform -translate-x-1/2 bottom-10 sm:bottom-15 lg:bottom-20 bg-indigo-600 rounded-full blur-[60px] sm:blur-[90px] lg:blur-[120px] opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 px-4">
          <h1 className="text-[#d5dbe6] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Aerobott Team Structure
          </h1>
          <p className="text-[#d5dbe6]/60 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Meet our exceptional team of visionaries, experts, and innovators driving the future of drone technology and defense solutions across India
          </p>
        </div>

        {/* Team Sections with ChromaGrid */}
        {sectionOrder.map((section, index) => (
          <div key={section} className={`${index !== sectionOrder.length - 1 ? 'mb-24' : 'mb-0'}`}>
            <div className="text-center mb-16 px-4">
              <div className="flex items-center justify-center gap-3 mb-6">
                {React.createElement(teamData[section].icon, { 
                  size: 32, 
                  className: "text-blue-400" 
                })}
                <h2 className="text-[#d5dbe6] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  {teamData[section].title}
                </h2>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            {/* ChromaGrid for each section */}
            <div className="w-full">
              <ChromaGrid 
                items={convertToChromaItems(teamData[section].members)}
                radius={300}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManagementTeamSection;