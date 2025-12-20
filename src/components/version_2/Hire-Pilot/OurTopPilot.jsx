import React from 'react';
import { Linkedin, Twitter, Mail, Globe, Users, Shield, Brain, Settings, MapPin, Award } from 'lucide-react';

const OurTopPilot = () => {

  const teamData = {
    leadership: {
      members: [
        // {
        //   name: "Gautam Lakhani",
        //   position: "Remote Pilot Instructor Small",
        //   image: "/images/hirePilot/p1.avif",
        //   socialLinks: [
        //     { icon: Linkedin, url: "#" },
        //   ]
        // },
        {
          name: "Arpana Mishra",
          position: "Remote Pilot Instructor Small",
          image: "/images/team/t4.avif",
          socialLinks: [
            { icon: Linkedin, url: "https://www.linkedin.com/in/arpana-mishra-162a6543?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
          ]
        },
        {
          name: "Deepak Vaidh",
          position: "Remote Pilot Instructor Small",
          image: "/images/team/t3.avif",
          socialLinks: [
            { icon: Linkedin, url: "https://www.linkedin.com/in/deepak-vaidh-a26b00274" },
          ]
        },
        // {
        //   name: "Harsh Srivastava",
        //   position: "Remote Pilot Instructor Medium & Small",
        //   image: "/images/hirePilot/p2.avif",
        //   socialLinks: [
        //     { icon: Linkedin, url: "https://www.linkedin.com/in/harsh-srivastava-7284a91b1" },
        //   ]
        // },
        // {
        //   name: "Sonu Saini",
        //   position: "Remote Pilot Instructor Medium & Small",
        //   image: "/images/hirePilot/p4.avif",
        //   socialLinks: [
        //     { icon: Linkedin, url: "www.linkedin.com/in/sonu-saini-640589215" },
        //   ]
        // },
        {
          name: "Shantanu Mane",
          position: "Remote Pilot Instructor Small",
          image: "/images/hirePilot/p3.avif",
          socialLinks: [
            { icon: Linkedin, url: "https://www.linkedin.com/in/shantanu-mane-08669326b" },
          ]
        }
      ]
    }
  };

  const sectionOrder = ['leadership'];

  return (
    <section className="bg-black text-white pt-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      {/* Import Raleway font */}
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      {/* Background blur effects */}
      <div className="absolute w-48 sm:w-72 lg:w-96 h-40 sm:h-60 lg:h-80 left-0 top-40 sm:top-60 lg:top-80 bg-blue-600 rounded-full blur-[75px] sm:blur-[120px] lg:blur-[150px] opacity-20" />
      <div className="absolute w-48 sm:w-72 lg:w-96 h-40 sm:h-60 lg:h-80 right-0 top-30 sm:top-45 lg:top-60 bg-purple-600 rounded-full blur-[75px] sm:blur-[120px] lg:blur-[150px] opacity-15" />
      <div className="absolute w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 left-1/2 transform -translate-x-1/2 bottom-10 sm:bottom-15 lg:bottom-20 bg-indigo-600 rounded-full blur-[60px] sm:blur-[90px] lg:blur-[120px] opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-[#d5dbe6] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight mb-3 sm:mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Our Top Pilots
          </h1>
        </div>

        {/* Team Section */}
        {sectionOrder.map((section) => (
          <div key={section} className="mb-12 sm:mb-16 lg:mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {teamData[section].members.map((member, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 backdrop-blur-md rounded-xl overflow-hidden shadow-xl hover:scale-[1.02] transform transition duration-500 cursor-pointer border border-zinc-700/30 max-w-xs mx-auto w-full"
                >
                  {/* Image */}
                  <div className="relative w-full h-52 sm:h-64 lg:h-72 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-4 space-y-2 sm:space-y-3">
                    <h3 
                      className="text-white text-base sm:text-lg font-medium leading-snug text-center" 
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                      {member.name}
                    </h3>

                    <h4 
                      className="text-blue-300 text-xs sm:text-sm font-semibold leading-normal text-center" 
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                    >
                      {member.position}
                    </h4>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-2 sm:space-x-3 pt-2 sm:pt-3">
                      {member.socialLinks.map((social, socialIndex) => {
                        const IconComponent = social.icon;
                        return (
                          <a
                            key={socialIndex}
                            href={social.url}
                            className="w-7 sm:w-8 h-7 sm:h-8 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 hover:border-white/30 hover:bg-white/10 hover:scale-110 transition-all duration-300 group"
                          >
                            <IconComponent 
                              size={14} 
                              className="sm:w-[16px] sm:h-[16px] text-white/70 group-hover:text-white transition-colors duration-300" 
                            />
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  {/* Accent line */}
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

export default OurTopPilot;
