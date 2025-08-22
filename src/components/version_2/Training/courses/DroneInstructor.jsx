import React from 'react';
import { CheckCircle, Clock, Users, Award, MapPin, Calendar, GraduationCap, BookOpen, UserCheck } from 'lucide-react';

const DroneInstructor = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full bg-black overflow-hidden px-4 sm:px-6 md:px-8 lg:px-16 z-2 pb-8 sm:pb-12 lg:pb-16 pt-8 sm:pt-12 lg:pt-16">
      {/* Import Raleway font */}
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      {/* Background effects */}
      <div className="absolute w-96 h-80 left-0 top-80 bg-indigo-600 rounded-full blur-[150px] opacity-20" />
      <div className="absolute w-96 h-80 right-0 top-60 bg-purple-600 rounded-full blur-[150px] opacity-15" />
      
      <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 w-full relative z-1 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="w-full text-center">
            <h1 className="text-[#d5dbe6] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Drone Instructor Course
            </h1>
            <p className="text-[#d5dbe6] text-xl sm:text-2xl font-normal" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Small, Rotorcraft [DGCA CERTIFIED]
            </p>
          </div>
          
          <div className="w-full max-w-3xl">
            <p className="text-center text-[#d5dbe6]/70 text-base sm:text-lg leading-relaxed" style={{ fontFamily: 'Raleway, sans-serif' }}>
              DGCA-authorized train-the-trainer program for aspiring drone instructors specializing in small rotorcraft training.
            </p>
          </div>
        </div>

        {/* Course Image */}
        <div className="w-full max-w-4xl">
          <img 
            src="/images/agri/a3.png" 
            alt="Drone Instructor Course"
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
              <GraduationCap className="text-blue-500 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Instructor-Level Training</h3>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Move beyond flying—develop the knowledge, skills, and confidence to teach others.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Users className="text-green-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Master Medium-Category Drones</h3>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Gain hands-on experience with medium-sized drones used in industrial operations.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <BookOpen className="text-purple-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Pedagogy & Classroom Skills</h3>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Learn how to conduct engaging theory sessions and practical demonstrations.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Advanced Flight & Safety Procedures</h3>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Teach emergency protocols, pre-flight inspections, and mission planning.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <UserCheck className="text-yellow-400 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Certified Trainer Status</h3>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Graduate as a certified drone instructor, qualified to conduct professional pilot training.</p>
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
                <span className="text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>Age Limit: 21 to 60 Years</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Award className="text-green-400 flex-shrink-0" size={20} />
                <span className="text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>Education: 12th Pass or above (Preferred Technical Background)</span>
              </div>
              
              <div className="flex items-center gap-3">
                <GraduationCap className="text-purple-400 flex-shrink-0" size={20} />
                <span className="text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>Experience: Prior Remote Pilot Certification + 10-20 Hours Flight Time</span>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="text-orange-400 flex-shrink-0 mt-1" size={20} />
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

          {/* Course Duration */}
          <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-zinc-700/30">
            <h2 className="text-2xl font-bold text-[#d5dbe6] mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
              Course Duration & Format
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="text-blue-400 flex-shrink-0" size={20} />
                <span className="text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>Duration: 9 Days Intensive Program</span>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="text-green-400 flex-shrink-0" size={20} />
                <span className="text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>Location: Mumbai Training Center</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Users className="text-purple-400 flex-shrink-0" size={20} />
                <span className="text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>Batch Size: Limited to 12 Students</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Award className="text-yellow-400 flex-shrink-0" size={20} />
                <span className="text-white" style={{ fontFamily: 'Raleway, sans-serif' }}>Certification: DGCA Authorized Instructor</span>
              </div>
            </div>
          </div>
        </div>

        {/* Course Curriculum */}
        <div className="w-full bg-gradient-to-br from-zinc-900/60 to-zinc-800/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-zinc-700/30">
          <h2 className="text-2xl font-bold text-[#d5dbe6] mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Medium Upgrade + Instructor Development Program (9 Days)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>Days 1-5: Technical Mastery</h3>
              <ul className="text-white/70 text-sm space-y-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <li>• Advanced Drone Aerodynamics</li>
                <li>• Medium Category Specifications</li>
                <li>• DGCA Regulations for Trainers</li>
                <li>• Medium Drone Assembly & Calibration</li>
                <li>• Practical Flight Operations</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>Days 6-8: Teaching Skills</h3>
              <ul className="text-white/70 text-sm space-y-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <li>• Instructor Skill Development</li>
                <li>• Training Methodologies</li>
                <li>• Advanced Mission Planning</li>
                <li>• Scenario-Based Emergency Handling</li>
                <li>• Live Demo Practice Sessions</li>
              </ul>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'Raleway, sans-serif' }}>Day 9: Assessment</h3>
              <ul className="text-white/70 text-sm space-y-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                <li>• Flight Tests & Assessment Practice</li>
                <li>• Final Instructor Assessment</li>
                <li>• Certification Process</li>
                <li>• Career Guidance Session</li>
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
              <UserCheck className="text-blue-400 mx-auto mb-3" size={32} />
              <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Certified Drone Trainer</h3>
              <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Become eligible to lead DGCA-compliant drone pilot training courses.</p>
            </div>
            
            <div className="text-center">
              <Users className="text-green-400 mx-auto mb-3" size={32} />
              <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Medium Drone Experience</h3>
              <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Work with advanced drones used in mapping, surveillance, and inspections.</p>
            </div>
            
            <div className="text-center">
              <GraduationCap className="text-purple-400 mx-auto mb-3" size={32} />
              <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>Leadership & Career Advancement</h3>
              <p className="text-white/70 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>Take your drone career to the next level as a lead instructor.</p>
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
                "Becoming a certified instructor allowed me to lead my own drone training batches."
              </p>
              <p className="text-blue-400 font-semibold text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                — Rajesh K., Academy Instructor
              </p>
            </div>
            
            <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/30">
              <p className="text-white/80 text-sm mb-3 italic" style={{ fontFamily: 'Raleway, sans-serif' }}>
                "Thanks to Aerobott's TTT program, I've transitioned from pilot to trainer, training over 200 students."
              </p>
              <p className="text-green-400 font-semibold text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                — Sneha P., Lead Trainer
              </p>
            </div>
            
            <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/30">
              <p className="text-white/80 text-sm mb-3 italic" style={{ fontFamily: 'Raleway, sans-serif' }}>
                "I now head drone training sessions for a government skill development project."
              </p>
              <p className="text-purple-400 font-semibold text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                — Faizan M., Drone Training Consultant
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="w-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-indigo-500/20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#d5dbe6] mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Ready to Become a Certified Instructor?
          </h2>
          <p className="text-white/80 mb-6" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Join the elite group of DGCA-authorized drone instructors and shape the future of drone education.
          </p>
          
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/25" style={{ fontFamily: 'Raleway, sans-serif' }}>
            Apply for Instructor Program
          </button>
        </div>
      </div>
    </section>
  );
};

export default DroneInstructor;