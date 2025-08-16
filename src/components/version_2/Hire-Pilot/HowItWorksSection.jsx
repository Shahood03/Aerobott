import React from 'react';
import { Plus, Users, CheckCircle } from 'lucide-react';

// Note: Make sure to include Raleway font in your project
// Add this to your index.html or import in your CSS:
// <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
// And configure Tailwind to use Raleway in your tailwind.config.js:
// fontFamily: { 'raleway': ['Raleway', 'sans-serif'] }

const HowItWorksSection = () => {
const steps = [
  {
    step: "01",
    icon: <Plus className="w-12 h-12 text-blue-400" />,
    title: "POST A JOB",
    description: "We'll immediately match you with local pilots who are capable and interested in capturing your footage."
  },
  {
    step: "02", 
    icon: <Users className="w-12 h-12 text-blue-400" />,
    title: "HIRE A PILOT",
    description: "Compare prices & portfolios to help in hiring the best pilot for your needs & budget. Every pilot is vetted for the proper licenses to legally operate a drone."
  },
  {
    step: "03",
    icon: <CheckCircle className="w-12 h-12 text-blue-400" />,
    title: "REVIEW & PAY",
    description: "Pay after you've received your footage using our secure payment platform."
  }
];

  return (
    <section className="bg-black text-white px-16 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background blur effects */}
      

      <div className="w-full h-full flex flex-col justify-center relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center gap-2.5 w-full max-w-3xl mx-auto mb-11">
          
          {/* Main Heading */}
          <div className="w-full">
            <h2 className="text-center text-[#d5dbe6] text-4xl md:text-5xl font-medium leading-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
              How It{' '}
              <span className="font-normal text-[#d5dbe6]" style={{ fontFamily: 'Raleway, sans-serif' }}>Works</span>
            </h2>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="w-96 h-[500px] rounded-[20px] overflow-hidden relative bg-black border border-white/7">
              {/* Background blur effects */}
              <div className="w-96 h-8 left-[-7px] top-0 absolute bg-zinc-300 rounded-bl-[10px] rounded-br-[10px] blur-[197px]" />
              <div className="w-96 h-8 left-[-7px] top-0 absolute bg-zinc-300 rounded-bl-[10px] rounded-br-[10px] blur-[197px]" />
              <div className="w-96 h-[1440px] left-[1440px] top-[519px] absolute origin-top-left rotate-90 bg-indigo-500 blur-[117.50px]" />
              
              {/* Step Number */}
              <div className="absolute left-[44px] top-[30px]">
                <span className="text-blue-400 text-sm font-medium opacity-60" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  STEP {step.step}
                </span>
              </div>
              
              {/* Icon Container */}
              <div className="left-[44px] top-[65px] absolute inline-flex flex-col justify-center items-start">
                {step.icon}
              </div>
              
              {/* Step Title */}
              <div className="absolute left-[44px] top-[140px] w-80">
                <h3 className="text-[#d5dbe6] text-xl font-medium leading-tight mb-2" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  {step.title}
                </h3>
              </div>
              
              {/* Step Description */}
              <div className="w-80 left-[44px] top-[190px] absolute">
                <p className="text-[#d5dbe6]/90 text-base leading-relaxed text-justify" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  {step.description}
                </p>
              </div>

              {/* Connecting Line (except for last step) */}
              {index < steps.length - 1 && (
                <div className="absolute right-[-20px] top-[50%] transform -translate-y-1/2 hidden md:block">
                  <div className="w-10 h-0.5 bg-gradient-to-r from-blue-400 to-transparent opacity-30"></div>
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

export default HowItWorksSection;