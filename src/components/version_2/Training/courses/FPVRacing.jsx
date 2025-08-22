import React from 'react';
import { CheckCircle, Clock, Users, Award, MapPin, Calendar, Zap, Target, Settings } from 'lucide-react';

const FPVRacing = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full bg-black overflow-hidden px-4 sm:px-6 md:px-8 lg:px-16 z-2 pb-8 sm:pb-12 lg:pb-16 pt-8 sm:pt-12 lg:pt-16">
      {/* Import Raleway font */}
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      {/* Background effects */}
      <div className="absolute w-96 h-80 left-0 top-80 bg-red-600 rounded-full blur-[150px] opacity-20" />
      <div className="absolute w-96 h-80 right-0 top-60 bg-orange-600 rounded-full blur-[150px] opacity-15" />
      
      <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 w-full relative z-1 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="w-full text-center">
            <h1 className="text-[#d5dbe6] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
              FPV Drone
            </h1>
            <p className="text-[#d5dbe6] text-xl sm:text-2xl font-normal" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Racing Course
            </p>
          </div>
          
          <div className="w-full max-w-3xl">
            <p className="text-center text-[#d5dbe6]/70 text-base sm:text-lg leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
              High-speed FPV drone racing training with competitive racing techniques, equipment mastery, and professional racing strategies.
            </p>
          </div>
        </div>

        {/* Course Image */}
        <div className="w-full max-w-4xl">
          <img 
            src="/images/training/t5.jpg" 
            alt="FPV Drone Racing Course"
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
              <Zap className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Performance-Driven Curriculum</h3>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Comprehensive training in assembly, tuning, and high-speed flight.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Settings className="text-blue-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Hands-On Build & Tune Workshops</h3>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Learn soldering, component setup, ESC calibration, PID tuning, and antenna alignment.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Target className="text-green-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Simulator + Real-World Racing</h3>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Advance your skills through both simulator sessions and track drills.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Award className="text-purple-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Pro FPV Gear Setup</h3>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>FPV camera, VTX, receiver, and goggle configuration for minimal lag.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="text-red-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Race-Ready Certified Racer</h3>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Earn a recognized certification and the confidence to compete.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility and Course Details Grid */}
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
                <span className="text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>Prerequisites: 10th pass</span>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={20} />
                <div>
                  <span className="text-white block mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Valid ID Proof (Any One):</span>
                  <ul className="text-white/70 text-sm space-y-1 ml-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    <li>• Aadhaar Card</li>
                    <li>• PAN Card</li>
                    <li>• Passport</li>
                    <li>• Driving License</li>
                    <li>• Voter ID</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Course Overview */}
          <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-zinc-700/30">
            <h2 className="text-2xl font-bold text-[#d5dbe6] mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Course Overview
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle className="text-green-400 flex-shrink-0" size={16} />
                <span className="text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>DGCA Approved Course</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <Clock className="text-blue-400 flex-shrink-0" size={16} />
                <span className="text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>10 Day Course for Small & Medium Category</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <Target className="text-purple-400 flex-shrink-0" size={16} />
                <span className="text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>Flight Simulator Sessions</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <Settings className="text-orange-400 flex-shrink-0" size={16} />
                <span className="text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>Assembly of Custom Drones</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <Award className="text-yellow-400 flex-shrink-0" size={16} />
                <span className="text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>Can apply for UAOP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Course Schedule */}
        <div className="w-full bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-zinc-700/30">
          <h2 className="text-2xl font-bold text-[#d5dbe6] mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
            5-Day Course Schedule
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Day 1-2: Theory Class</h3>
              <ul className="text-white/70 text-sm space-y-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <li>• Introduction to FPV drone technology</li>
                <li>• FPV equipment and safety protocols</li>
                <li>• FPV drone mechanics and flight dynamics</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Day 3: Simulation Class</h3>
              <ul className="text-white/70 text-sm space-y-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <li>• Simulated FPV flight missions</li>
                <li>• Obstacle navigation practice</li>
                <li>• Race track and freestyle maneuvers</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Day 4-5: Flying Class</h3>
              <ul className="text-white/70 text-sm space-y-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <li>• Practical FPV flying exercises</li>
                <li>• Advanced FPV flying techniques</li>
                <li>• Final assessment and review</li>
              </ul>
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
              <CheckCircle className="text-red-400 mx-auto mb-3" size={32} />
              <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Certified FPV Pilot Status</h3>
              <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Credibility to compete and train others</p>
            </div>
            
            <div className="text-center">
              <Target className="text-blue-400 mx-auto mb-3" size={32} />
              <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Live Flight Experience</h3>
              <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>From simulators to real-world race tracks</p>
            </div>
            
            <div className="text-center">
              <Zap className="text-yellow-400 mx-auto mb-3" size={32} />
              <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Competition-Ready</h3>
              <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Prepare for national & international FPV events</p>
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
                "I went from zero to competing in my first local FPV race in just 3 months!"
              </p>
              <p className="text-red-400 font-semibold text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                — Arjun R., FPV Racer
              </p>
            </div>
            
            <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/30">
              <p className="text-white/80 text-sm mb-3 italic" style={{ fontFamily: 'Raleway, sans-serif' }}>
                "Flawless tuning sessions helped me shave seconds off my lap time."
              </p>
              <p className="text-blue-400 font-semibold text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                — Sneha M., Tech Enthusiast
              </p>
            </div>
            
            <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/30">
              <p className="text-white/80 text-sm mb-3 italic" style={{ fontFamily: 'Raleway, sans-serif' }}>
                "Now I film cinematic FPV drone footage for adventure brands."
              </p>
              <p className="text-green-400 font-semibold text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                — Karan J., FPV Cinematographer
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="w-full bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-red-500/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#d5dbe6] mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Ready to Race at High Speed?
          </h2>
          <p className="text-white/80 mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Join the elite community of FPV racers and experience the thrill of high-speed drone racing.
          </p>
          
          <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-500/25" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Contact Us Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FPVRacing;