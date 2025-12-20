import React from 'react';
import { ArrowRight } from 'lucide-react';

function AerobottOverview() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light tracking-widest relative inline-block">
            Overview
            {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 w-16 h-px bg-indigo-500"></div> */}
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/Flyt1.avif"
                alt="Professional team working on drone technology"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Heading */}
            <div>
              <h3 className="text-2xl font-semibold italic text-gray-300 mb-2">
                Built in India. Built for Training.
              </h3>
            </div>

            {/* Main Content */}
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                 FLYT-I is a robust, ready-to-fly training drone designed and assembled in India. Developed by Dronetech Solutions Pvt. Ltd., it is crafted with durable materials, a modular design, and reliable autopilot systems like Pixhawk Cube Orange 2.0. Whether you're running an RPTO, a technical institute, or a drone certification course, FLYT-I is your go-to platform for real-world UAV training.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 hover:gap-3">
                Contact us
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default AerobottOverview