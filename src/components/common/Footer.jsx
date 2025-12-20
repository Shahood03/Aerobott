import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const footerSections = {
    products: {
      title: "Products",
      links: [
        { label: "Flyt-1", href: "/products/flyt-i-drone" },
        { label: "Aeroagri", href: "/products/aero-agri-drone" },
        { label: "Survey Master Pro", href: "/products/survey-master-pro-drone" },
      ],
    },
    explore: {
      title: "Explore",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us" },
        { label: "Trainings", href: "/rpce" },
        { label: "Drone as a Service", href: "/drone-as-a-service" },
        { label: "Hire a Pilot", href: "/hire-pilot" },
        { label: "Partner with us", href: "/partner-with-us" },
      ],
    },
    education: {
      title: "Training",
      links: [
        { label: "Remote Pilot Training", href: "/rpce" },
        { label: "AI Drone Excellence", href: "/AIExcellence" },
        { label: "Industrial Course", href: "/IndustrialCourse" },
      ],
    },
  };

  return (
    <>
      {/* Main Footer */}
      <footer className="bg-black backdrop-blur-md border-t border-gray-300/20 text-white pt-12 lg:pt-16 pb-8 px-16">
        <div className="w-full max-w-none mx-auto">
          {/* Footer Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
            {/* Company Info - Takes 2 columns on large screens */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2">
              <div className="mb-6">
                <img
                  src="/images/logo/logo.avif"
                  alt="Aerobott Logo"
                  className="h-10 sm:h-12 brightness-0 invert mb-6"
                />
                <p className="text-gray-300 mb-6 font-raleway font-normal leading-relaxed text-sm sm:text-base max-w-md">
                  Leading the drone industry with innovative technology for
                  aerial imaging, defense systems, and drone-as-a-service
                  solutions. Empowering the future of aviation.
                </p>
              </div>

              {/* Contact Info */}
              <div className="mb-6 space-y-2">
                <p className="flex items-start text-gray-300 text-sm">
                  <MapPin size={16} className="mr-2 mt-0.5 text-blue-300" />
                  Hotel Sahara Star, North Tower Ground Floor, Chhatrapati Shivaji International, 70-C, Nehru Rd, Navpada, Airport Area, Vile Parle, Mumbai, Maharashtra 400099
                </p>
                <p className="flex items-center text-gray-300 text-sm">
                  <Phone size={16} className="mr-2 text-blue-300" />  9004711184
                </p>
                <p className="flex items-center text-gray-300 text-sm">
                  <Mail size={16} className="mr-2 text-blue-300" />{" "}
                  info@aerobott.com
                </p>
              </div>

              {/* Social Media Links */}
              <div className="mb-8">
                <h4 className="text-base font-raleway font-semibold mb-4 text-blue-200">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  {[
                    { Icon: Facebook, href: "https://www.facebook.com/Aerobott", label: "Facebook" },
                    { Icon: Instagram, href: "https://www.instagram.com/aerobott_academy", label: "Instagram" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/company/aerobott/", label: "LinkedIn" },
                    { Icon: Youtube, href: "https://www.youtube.com/@Aerobottdrone", label: "YouTube" },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                      aria-label={label}
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="col-span-1">
              <h3 className="text-base sm:text-lg font-raleway font-semibold mb-6 text-blue-200 relative">
                {footerSections.products.title}
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-400 rounded-full"></span>
              </h3>
              <ul className="space-y-3 mb-8">
                {footerSections.products.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-200 transition-all duration-300 font-raleway font-normal text-sm sm:text-base group flex items-center transform hover:translate-x-2"
                    >
                      <span className="group-hover:text-blue-300">
                        {link.label}
                      </span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore */}
            <div className="col-span-1">
              <h3 className="text-base sm:text-lg font-raleway font-semibold mb-6 text-blue-200 relative">
                {footerSections.explore.title}
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-400 rounded-full"></span>
              </h3>
              <ul className="space-y-3 mb-8">
                {footerSections.explore.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-200 transition-all duration-300 font-raleway font-normal text-sm sm:text-base group flex items-center transform hover:translate-x-2"
                    >
                      <span className="group-hover:text-blue-300">
                        {link.label}
                      </span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="col-span-1">
              <h3 className="text-base sm:text-lg font-raleway font-semibold mb-6 text-blue-200 relative">
                {footerSections.education.title}
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-400 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {footerSections.education.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-blue-200 transition-all duration-300 font-raleway font-normal text-sm sm:text-base group flex items-center transform hover:translate-x-2"
                    >
                      <span className="group-hover:text-blue-300">
                        {link.label}
                      </span>
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700/50 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm font-raleway font-normal">
                &copy; {new Date().getFullYear()} AEROBOTT. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs font-raleway font-normal mt-1">
                Innovating the Future of Drone Technology
              </p>
            </div>

            {/* <div className="flex flex-wrap justify-center lg:justify-end items-center gap-6">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms and Conditions", href: "/terms-and-conditions" },
                { label: "Refund Policy", href: "/refund-policy" },
                { label: "Sitemap", href: "/sitemap" },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-blue-300 text-sm transition-colors duration-300 font-raleway font-normal relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              ))}
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;