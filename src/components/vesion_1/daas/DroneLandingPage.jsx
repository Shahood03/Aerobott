import React from "react";

const DroneLandingPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image - Mountains/Sunset */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1440&q=80')",
          backgroundBlendMode: "overlay",
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-100/30 via-transparent to-blue-900/40" />
      
      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 space-y-16">
        {/* Main Heading */}
        <h1 className="w-full max-w-[1005px] text-center text-black text-5xl font-bold font-['Montserrat'] leading-tight">
          Unlock the power of aerial intelligence without the cost and complexity of drone ownership.
        </h1>
        
        {/* Subheading */}
        <h2 className="text-center text-black text-2xl font-bold font-['Montserrat']">
          No hardware to buy. No teams to train. Just results from the sky.
        </h2>
        
        {/* Drone Image - Centered */}
        <div className="relative w-full max-w-2xl mx-auto">
          <img 
            src="/images/daas/d1.avif" 
            alt="Drone flying above mountains" 
            className="w-full h-auto object-contain"
          />
        </div>
        

      </div>
    </div>
  );
};

export default DroneLandingPage;