import React from 'react';
import { CheckCircle, Clock, Users, Award, MapPin, Calendar, Leaf, Droplets } from 'lucide-react';

const AgricultureDrone = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full bg-black overflow-hidden px-4 sm:px-6 md:px-8 lg:px-16 z-2 pb-8 sm:pb-12 lg:pb-16 pt-8 sm:pt-12 lg:pt-16">
      {/* Import Raleway font */}
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      {/* Background effects */}
      <div className="absolute w-96 h-80 left-0 top-80 bg-green-600 rounded-full blur-[150px] opacity-20" />
      <div className="absolute w-96 h-80 right-0 top-60 bg-emerald-600 rounded-full blur-[150px] opacity-15" />
      
      <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 w-full relative z-1 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="w-full text-center">
            <h1 className="text-[#d5dbe6] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Agriculture Specific
            </h1>
            <p className="text-[#d5dbe6] text-xl sm:text-2xl font-normal" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Drone Training
            </p>
          </div>
          
          <div className="w-full max-w-3xl">
            <p className="text-center text-[#d5dbe6]/70 text-base sm:text-lg leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Specialized training for agricultural drone applications including crop monitoring, precision spraying, and advanced farming techniques.
            </p>
          </div>
        </div>

        {/* Course Image */}
        <div className="w-full max-w-4xl">
          <img 
            src="/images/agri/a4.png" 
            alt="Agriculture Specific Drone Training"
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-2xl"
            onError={(e) => {
              e.target.src = "/images/training/t17.jpg";
            }}
          />
        </div>

        {/* Why Choose This Course */}
        <div className="w-full bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-zinc-700/30">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#d5dbe6] mb-6 text-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Why Choose This Course
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Leaf className="text-green-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Specialized Curriculum</h3>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Designed for agri-professionals, drone operators, and service providers in precision farming.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Users className="text-blue-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Hands-On Drone Operation</h3>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Practical field sessions with agricultural drones equipped for liquid spraying.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Droplets className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Efficient Spraying Techniques</h3>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Master droplet calibration, spray width optimization, and pesticide dilution ratios.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <MapPin className="text-orange-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Real Farm Conditions</h3>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Train in real agricultural environments to understand wind, terrain, and crop variations.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Award className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Industry-Ready Certification</h3>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Get certified to support drone-based agri-services or start your own drone spraying business.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility and Course Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Eligibility Section */}
          <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-zinc-700/30">
            <h2 className="text-2xl font-bold text-[#d5dbe6] mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Who is Eligible
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="text-blue-400 flex-shrink-0" size={20} />
                <span className="text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>Age Limit: 18 to 65 Years</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Award className="text-green-400 flex-shrink-0" size={20} />
                <span className="text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>Education: 10th Pass (preferred background in agriculture is a plus)</span>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <span className="text-white block mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Valid ID Proof (Any One):</span>
                  <ul className="text-white/70 text-sm space-y-1 ml-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <li>• Aadhaar Card</li>
                    <li>• PAN Card</li>
                    <li>• Voter ID</li>
                    <li>• Passport</li>
                    <li>• Driving License</li>
                    <li>• Ration Card</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Course Schedule */}
          <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-zinc-700/30">
            <h2 className="text-2xl font-bold text-[#d5dbe6] mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Program Overview
            </h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-white font-semibold" style={{ fontFamily: 'Raleway, sans-serif' }}>Day 1-2: Theory Class</h3>
                <ul className="text-white/70 text-sm space-y-1 mt-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  <li>• Introduction to agricultural drones and applications</li>
                  <li>• Crop monitoring and data collection techniques</li>
                  <li>• Precision agriculture and variable rate technology</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-white font-semibold" style={{ fontFamily: 'Raleway, sans-serif' }}>Day 3: Simulation Class</h3>
                <ul className="text-white/70 text-sm space-y-1 mt-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  <li>• Simulated flight missions for crop monitoring</li>
                  <li>• Practice scenarios for spraying and seeding operations</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-white font-semibold" style={{ fontFamily: 'Raleway, sans-serif' }}>Day 4-5: Flying Class</h3>
                <ul className="text-white/70 text-sm space-y-1 mt-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  <li>• Practical flying exercises in agricultural settings</li>
                  <li>• Advanced flying techniques for precision agriculture</li>
                  <li>• Final assessment and review of agricultural drone operations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Course Benefits */}
        <div className="w-full bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-zinc-700/30">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#d5dbe6] mb-6 text-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Course Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <CheckCircle className="text-green-400 mx-auto mb-3" size={32} />
              <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Field-Ready Certification</h3>
              <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Become a certified agricultural drone spray operator.</p>
            </div>
            
            <div className="text-center">
              <Leaf className="text-emerald-400 mx-auto mb-3" size={32} />
              <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Increased Crop Efficiency</h3>
              <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Learn methods that save water, reduce chemical use, and improve yield.</p>
            </div>
            
            <div className="text-center">
              <Award className="text-yellow-400 mx-auto mb-3" size={32} />
              <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Career & Business Ready</h3>
              <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Start your drone spraying service or work with agri-tech companies.</p>
            </div>
          </div>
        </div>

        {/* Alumni Success */}
        <div className="w-full bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-zinc-700/30">
          <h2 className="text-2xl font-bold text-[#d5dbe6] mb-6 text-center" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Alumni Success
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/30">
              <p className="text-white/80 text-sm mb-3 italic" style={{ fontFamily: 'Raleway, sans-serif' }}>
                "After this course, I started my own spraying service in my village. Farmers now rely on me for timely spraying."
              </p>
              <p className="text-green-400 font-semibold text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                — Ramesh T., Farmer & Drone Operator
              </p>
            </div>
            
            <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/30">
              <p className="text-white/80 text-sm mb-3 italic" style={{ fontFamily: 'Raleway, sans-serif' }}>
                "The training gave me the skills to partner with agri-cooperatives for seasonal drone operations."
              </p>
              <p className="text-blue-400 font-semibold text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                — Priya B., Agri Graduate
              </p>
            </div>
            
            <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/30">
              <p className="text-white/80 text-sm mb-3 italic" style={{ fontFamily: 'Raleway, sans-serif' }}>
                "Hands-on practice helped me understand how wind affects spraying, and now I can manage spraying routes effectively."
              </p>
              <p className="text-purple-400 font-semibold text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                — Kunal M., Agripreneur
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="w-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-green-500/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#d5dbe6] mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Ready to Revolutionize Agriculture with Drones?
          </h2>
          <p className="text-white/80 mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Call us now or submit the form to book your slot in the upcoming batch.
          </p>
          
          <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Contact Us Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default AgricultureDrone;