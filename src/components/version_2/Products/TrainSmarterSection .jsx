import React from 'react';
import { Plus, Users, CheckCircle } from 'lucide-react';

const TrainSmarterSection = () => {
  const steps = [
    {
      title: "Drone Pilot Training (RPTO)",
      description: "Reliable flight modes for all levels of pilot skill"
    },
    {
      title: "Aerospace & Engineering Colleges",
      description: "Used in UAV curriculum, control systems labs"
    },
    {
      title: "DIY & Drone Simulation Workshops",
      description: "Ideal for assembling, configuring, and practicing real flights"
    },
    {
      title: "R&D / Experimental Use",
      description: "Custom payloads, autonomous testing, telemetry data collection"
    },
    {
      title: "Skill Development Missions",
      description: "Aligned with government skilling programs in UAV tech"
    }
  ];

  return (
    <section className="bg-[#000000] text-white py-12 px-6 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="w-full flex flex-col justify-center relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-4xl mx-auto mb-8">
          <div className="w-full">
            <h1 className="text-center text-[#d5dbe6] text-4xl md:text-4xl font-medium leading-tight font-sans">
              Applications & Benefits     
            </h1>
          </div>
        </div>

        {/* Steps Grid - All in one row */}
        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="w-58 h-58 rounded-2xl overflow-hidden relative bg-black border border-white/7 flex-shrink-0">
              {/* Background blur effects */}
              <div className="w-full h-6 left-0 top-0 absolute bg-zinc-300 rounded-bl-[10px] rounded-br-[10px] blur-[100px] opacity-30" />
              <div className="w-full h-32 left-0 top-16 absolute bg-indigo-500/20 blur-[60px] opacity-20" />
              
              {/* Content Container - Centered */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                {/* Step Title */}
                <h3 className="text-[#d5dbe6] text-base font-medium leading-tight mb-3 font-sans">
                  {step.title}
                </h3>
                
                {/* Step Description */}
                <p className="text-[#d5dbe6]/90 text-sm leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line (except for last step) */}
              {index < steps.length - 1 && (
                <div className="absolute right-[-12px] top-[50%] transform -translate-y-1/2 hidden lg:block">
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default TrainSmarterSection;