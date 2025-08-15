import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8 px-8">
      <div className="w-full max-w-none mx-auto">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1">
            <img 
              src="/images/logo/logo.png" 
              alt="Aerobott Logo" 
              className="h-10 brightness-0 invert mb-6" 
            />
            <p className="text-gray-400 mb-6 font-raleway font-normal leading-relaxed">
              Leading the drone industry with innovative technology for aerial imaging, 
              defense systems, and drone-as-a-service solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-raleway font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Drone Tech', 'Defence', 'DAAS', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 font-raleway font-normal"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Products */}
          <div className="col-span-1">
            <h3 className="text-lg font-raleway font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              {['Consumer Drones', 'Enterprise Drones', 'Defense Systems', 'Accessories', 'Software Solutions'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 font-raleway font-normal"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="text-lg font-raleway font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-gray-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400 font-raleway font-normal leading-relaxed">
                Hotel Sahara Star, North Tower Ground Floor, Chhatrapati Shivaji International, 70-C, Nehru Rd, Navpada, Airport Area, Vile Parle, Mumbai, Maharashtra 400099
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-gray-400 mr-3 flex-shrink-0" />
                <a href="tel+919004711184" className="text-gray-400 hover:text-white transition-colors duration-300 font-raleway font-normal">
                +91 9004711184 
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-gray-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@aerobott.com" className="text-gray-400 hover:text-white transition-colors duration-300 font-raleway font-normal">
                info@aerobott.com
                </a>
              </li>
            </ul>
          </div>
        </div>
     
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0 font-raleway font-normal">
            &copy; {new Date().getFullYear()} AEROBOTT. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300 font-raleway font-normal">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300 font-raleway font-normal">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300 font-raleway font-normal">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;