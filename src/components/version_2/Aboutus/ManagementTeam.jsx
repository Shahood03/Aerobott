// import React from 'react';
// import { Linkedin, Twitter, Mail, Globe, Users, Shield, Brain, Settings, MapPin, Award } from 'lucide-react';

// const ManagementTeamSection = () => {

//   const teamData = {
//     leadership: {
//       title: "Leadership Team",
//       icon: Users,
//       members: [
//         {
//           name: "Sanjay Vaidh",
//           position: "Founder",
//           description: "Visionary leader driving Aerobott's mission in Defence, UAV, AI, and emerging technologies. Leading the transformation of India's aerospace and defense capabilities through cutting-edge drone technology and strategic partnerships.",
//           image: "/images/team/t2.jpg",
//           socialLinks: [
//             { icon: Linkedin, url: "#" },
//             { icon: Twitter, url: "#" },
//             { icon: Mail, url: "#" }
//           ]
//         },
//         {
//           name: "Arpana Mishra",
//           position: "Co-Founder & Chief Operating Officer (COO)",
//           description: "Oversees operations, strategic partnerships, and long-term growth. Arpana is the visionary Co-Founder and Director driving the strategic growth and innovation at the heart of our organization, empowering teams and shaping the future of drone technology in India.",
//           image: "/images/team/t4.jpg",
//           socialLinks: [
//             { icon: Linkedin, url: "#" },
//             { icon: Globe, url: "#" },
//             { icon: Mail, url: "#" }
//           ]
//         },
//         {
//           name: "Deepak Vaidh",
//           position: "Co-Founder",
//           description: "Co-Founder playing a pivotal role in shaping the vision and direction of the organization. With a forward-thinking mindset and passion for innovation, he contributes significantly to strategic growth, partnerships, and advancement of drone technology solutions.",
//           image: "/images/team/t3.jpg",
//           socialLinks: [
//             { icon: Linkedin, url: "#" },
//             { icon: Twitter, url: "#" },
//             { icon: Mail, url: "#" }
//           ]
//         }
//       ]
//     },
    // advisory: {
    //   title: "Advisory Board",
    //   icon: Award,
    //   members: [
    //     {
    //       name: "Mr. Ajay Kumar",
    //       position: "Principal Advisor",
    //       description: "Former UPSC Chairman & Defence Secretary, Government of India – Strategic advisor on RPTO, Defence, and UAV initiatives. Brings decades of defense expertise and policy insights to guide Aerobott's strategic direction.",
    //       image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
    //       socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Mail, url: "#" }]
    //     },
    //     {
    //       name: "Mr. Vishal Mirchandani",
    //       position: "Advisor",
    //       description: "Former CEO, Adani Airports – Advisory on Integrated Defence & Drone Technology Park (IDDP) and Drone Port operations. Expert in aviation infrastructure and strategic airport operations management.",
    //       image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
    //       socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Mail, url: "#" }]
    //     },
    //     {
    //       name: "Mr. Kaustav Dhar",
    //       position: "Advisor",
    //       description: "CEO, Zoom Air & Asthana Air – Advisor on air taxi operations and advanced aerial mobility. Leading expert in commercial aviation and emerging aerial transportation technologies.",
    //       image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face",
    //       socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Mail, url: "#" }]
    //     },
    //     {
    //       name: "Mr. P.R. Sharma",
    //       position: "Advisor",
    //       description: "Former CEO, REPC, Government of Rajasthan – Advisor on export-oriented strategies and IDDP development. Specializes in renewable energy policy and strategic government initiatives.",
    //       image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=300&h=300&fit=crop&crop=face",
    //       socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Mail, url: "#" }]
    //     },
    //     {
    //       name: "Mr. Rajeev Jain",
    //       position: "Advisor",
    //       description: "Former Joint Secretary, Petroleum & Urban Development – Advisor on urban development surveys and mapping. Expert in urban planning, infrastructure development, and government policy implementation.",
    //       image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    //       socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Mail, url: "#" }]
    //     }
    //   ]
    // },
    // directors: {
    //   title: "Board of Directors & Specialized Directors",
    //   icon: Shield,
    //   members: [
    //     {
    //       name: "Mr. Mahendra Vaidh",
    //       position: "Board of Directors",
    //       description: "Strategic board member contributing to organizational governance and long-term vision. Brings extensive business acumen and industry expertise to guide company decisions and growth strategies.",
    //       image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
    //       socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Mail, url: "#" }]
    //     },
    //     {
    //       name: "Somay Vaidh",
    //       position: "AI & Data Science Director",
    //       description: "Industry leader in AI/ML, analytics, and defence tech applications. Spearheads artificial intelligence initiatives and data-driven solutions for defense and commercial drone operations.",
    //       image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=300&fit=crop&crop=face",
    //       socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Twitter, url: "#" }, { icon: Mail, url: "#" }]
    //     },
    //     {
    //       name: "Raja Ji",
    //       position: "Corporate & Government Relations Director",
    //       description: "Expert in policy, compliance, and strategic liaison. Manages relationships with government agencies, regulatory bodies, and corporate partners to ensure seamless operations and compliance.",
    //       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    //       socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Mail, url: "#" }]
    //     }
    //   ]
    // },
    // management: {
    //   title: "Core Management",
    //   icon: Settings,
    //   members: [
    //     {
    //       name: "Vaibhav Gupta",
    //       position: "Chief Technology Officer (CTO)",
    //       description: "Leads R&D in drones, AI solutions, and defence technologies. Drives technological innovation and oversees the development of cutting-edge UAV systems and autonomous flight technologies.",
    //       image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop&crop=face",
    //       socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Twitter, url: "#" }, { icon: Mail, url: "#" }]
    //     },
    //     {
    //       name: "Mr. Harsh",
    //       position: "Chief Training Officer (CTO - Training)",
    //       description: "Manages RPTO Drone Pilot curriculum and AI & Data Science courses. Develops comprehensive training programs and certification processes for drone pilots and technical personnel.",
    //       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    //       socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Mail, url: "#" }]
    //     },
    //     {
    //       name: "Mr. L.N. Agarwal",
    //       position: "Head - Business Development",
    //       description: "Builds partnerships with defence units, corporates, and educational institutions. Focuses on strategic alliances and expanding Aerobott's market presence across various sectors.",
    //       image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=face",
    //       socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Mail, url: "#" }]
    //     }
    //   ]
    // },
    // technical: {
    //   title: "Technical & Training Division",
    //   icon: Brain,
    //   members: [
    //     {
    //       name: "Mr. Gautam Lakhani",
    //       position: "Drone Operations Lead",
    //       description: "Supervises drone testing, pilot certification, and field operations. Ensures operational excellence and safety standards in all drone-related activities and training programs.",
    //       image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
    //       socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Mail, url: "#" }]
    //     },
    //     {
    //       name: "Mr. Altemesh",
    //       position: "AI/ML Lead Engineer",
    //       description: "Develops AI models for defence and commercial applications. Specializes in machine learning algorithms, computer vision, and autonomous systems for advanced drone capabilities.",
    //       image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
    //       socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Twitter, url: "#" }, { icon: Mail, url: "#" }]
    //     },
    //     {
    //       name: "Mr. Sonu Saini",
    //       position: "RPTO Training Instructor",
    //       description: "Certified drone pilot and defence trainer. Provides hands-on training and certification for drone pilots, ensuring compliance with DGCA regulations and industry standards.",
    //       image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=300&h=300&fit=crop&crop=face",
    //       socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Mail, url: "#" }]
    //     },
    //     {
    //       name: "Ms. Sameena",
    //       position: "AI & Data Science Trainer",
    //       description: "Industry-certified instructor delivering hands-on training. Specializes in AI/ML education, data analytics, and practical implementation of artificial intelligence in drone technology.",
    //       image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    //       socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Mail, url: "#" }]
    //     }
    //   ]
    // },
    // regional: {
    //   title: "Regional Leadership",
    //   icon: MapPin,
    //   members: [
    //     {
    //       name: "Mr. Jay Motwani",
    //       position: "West India Regional Manager",
    //       description: "Oversees Maharashtra, Gujarat, Rajasthan operations. Manages regional strategies, client relationships, and operational excellence across western India's drone technology initiatives.",
    //       image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
    //       socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Mail, url: "#" }]
    //     },
    //     {
    //       name: "Mrs. Gittanjali Vaidh",
    //       position: "Central India Regional Director",
    //       description: "Oversees Madhya Pradesh & Chhattisgarh projects. Leads regional expansion efforts and coordinates with local stakeholders to drive growth in central India markets.",
    //       image: "https://images.unsplash.com/photo-1494790108755-2616c3dc2c83?w=300&h=300&fit=crop&crop=face",
    //       socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Mail, url: "#" }]
    //     },
    //     {
    //       name: "Mr. Pranay Kumar",
    //       position: "North India Regional Director",
    //       description: "Oversees Delhi NCR, J&K, Uttar Pradesh, Punjab. Strategic leader managing northern region operations and government relations in key defense and commercial markets.",
    //       image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=300&h=300&fit=crop&crop=face",
    //       socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Mail, url: "#" }]
    //     },
    //     {
    //       name: "Mr. Kamal Vaidh",
    //       position: "East & North-East Regional Director",
    //       description: "Oversees West Bengal, Assam, and NE states. Develops regional partnerships and manages operations across eastern India's emerging drone technology landscape.",
    //       image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    //       socialLinks: [{ icon: Linkedin, url: "#" }, { icon: Mail, url: "#" }]
    //     }
    //   ]
    // }
  // };

  // Only include sections that exist in teamData
  import React from 'react';
import { Linkedin, Twitter, Mail, Globe, Users, Shield, Brain, Settings, MapPin, Award } from 'lucide-react';

const ManagementTeamSection = () => {

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
            { icon: Linkedin, url: "https://www.linkedin.com/in/sanjay-vaidh-118a0a43?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " },
            // { icon: Twitter, url: "#" },
            { icon: Mail, url: "#" }
          ]
        },
        {
          name: "Arpana Mishra",
          position: "Co-Founder & Chief Operating Officer (COO)",
          description: "Oversees operations, strategic partnerships, and long-term growth. Arpana is the visionary Co-Founder and Director driving the strategic growth and innovation at the heart of our organization, empowering teams and shaping the future of drone technology in India.",
          image: "/images/team/t4.jpg",
          socialLinks: [
            { icon: Linkedin, url: "https://www.linkedin.com/in/arpana-mishra-162a6543?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " },
            // { icon: Globe, url: "#" },
            { icon: Mail, url: "ceo@aerobott.com" }
          ]
        },
        {
          name: "Deepak Vaidh",
          position: "Co-Founder",
          description: "Co-Founder playing a pivotal role in shaping the vision and direction of the organization. With a forward-thinking mindset and passion for innovation, he contributes significantly to strategic growth, partnerships, and advancement of drone technology solutions.",
          image: "/images/team/t3.png",
          socialLinks: [
            { icon: Linkedin, url: "https://www.linkedin.com/in/deepak-vaidh-a26b00274" },
            // { icon: Twitter, url: "#" },
            { icon: Mail, url: "#" }
          ]
        }
      ]
    }
  };

  // Only include sections that exist in teamData
  const sectionOrder = ['leadership'];

  return (
    <section className="bg-black text-white min-h-screen pt-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Import Raleway font */}
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      {/* Background blur effects - responsive */}
      <div className="absolute w-48 sm:w-72 lg:w-96 h-40 sm:h-60 lg:h-80 left-0 top-40 sm:top-60 lg:top-80 bg-blue-600 rounded-full blur-[75px] sm:blur-[120px] lg:blur-[150px] opacity-20" />
      <div className="absolute w-48 sm:w-72 lg:w-96 h-40 sm:h-60 lg:h-80 right-0 top-30 sm:top-45 lg:top-60 bg-purple-600 rounded-full blur-[75px] sm:blur-[120px] lg:blur-[150px] opacity-15" />
      <div className="absolute w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 left-1/2 transform -translate-x-1/2 bottom-10 sm:bottom-15 lg:bottom-20 bg-indigo-600 rounded-full blur-[60px] sm:blur-[90px] lg:blur-[120px] opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-[#d5dbe6] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight mb-3 sm:mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Aerobott Team Structure
          </h1>
          <p className="text-[#d5dbe6]/60 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto px-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Meet our exceptional team of visionaries, experts, and innovators driving the future of drone technology and defense solutions across India
          </p>
        </div>

        {/* Team Sections - Only Leadership */}
        {sectionOrder.map((section) => (
          <div key={section} className="mb-12 sm:mb-16 lg:mb-20">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                {React.createElement(teamData[section].icon, { 
                  size: window.innerWidth < 640 ? 24 : 32, 
                  className: "text-blue-400" 
                })}
                <h2 className="text-[#d5dbe6] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  {teamData[section].title}
                </h2>
              </div>
              <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            </div>

            {/* Team Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
              {teamData[section].members.map((member, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transform transition duration-500 cursor-pointer border border-zinc-700/30 max-w-sm mx-auto w-full"
                >
                  {/* Profile Image */}
                  <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    {/* Name */}
                    <h3 
                      className="text-white text-lg sm:text-xl font-medium leading-snug text-center" 
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                      {member.name}
                    </h3>

                    {/* Position */}
                    <h4 
                      className="text-blue-300 text-sm sm:text-base font-semibold leading-normal text-center" 
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                      {member.position}
                    </h4>

                    {/* Description */}
                    <p 
                      className="text-white/80 text-xs sm:text-sm font-normal leading-relaxed text-justify min-h-[80px] sm:min-h-[100px]" 
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                      {member.description}
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex justify-center space-x-3 sm:space-x-4 pt-3 sm:pt-4">
                      {member.socialLinks.map((social, socialIndex) => {
                        const IconComponent = social.icon;
                        return (
                          <a
                            key={socialIndex}
                            href={social.url}
                            className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:border-white/30 hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
                          >
                            <IconComponent 
                              size={16} 
                              className="sm:w-[18px] sm:h-[18px] text-white/70 group-hover:text-white transition-colors duration-300" 
                            />
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default ManagementTeamSection;