import React from 'react';

export default function Benefit() {
  // Reference image directly from public folder
  const benefitDroneImage = "/images/Benefit/benefit.svg";

  return (
    <section className="relative">
      <div className="w-full flex flex-col justify-center bg-[#0F172A] pb-80 md:pb-80 px-6 md:px-0">
        <div className="flex flex-col text-center mb-14">
          <h1 className="font-semibold text-4xl md:text-5xl text-white mt-24 mb-7">
            Why Drone Light?
          </h1>
          <p className="font-normal text-2xl md:text-2xl leading-9 md:leading-11 text-gray-300 opacity-85 w-full md:max-w-[645px] mx-auto mb-5">
            We provide a best self drone easy to use and operate. With
            auto pilot, the device will take a beautiful view for the
            best of flying operation.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0 text-center w-full md:max-w-[748px] mx-auto mb-20">
          <div>
            <h1 className="text-white font-semibold text-3xl md:text-4xl mb-5">4K</h1>
            <p className="text-gray-300 opacity-85 font-normal text-lg md:text-xl">
              Camera
              <br />
              Resolution
            </p>
          </div>
          <div>
            <h1 className="text-white font-semibold text-3xl md:text-4xl mb-5">2 TB</h1>
            <p className="text-gray-300 opacity-85 font-normal text-lg md:text-xl">
              Storage
              <br />
              Capacity
            </p>
          </div>
          <div>
            <h1 className="text-white font-semibold text-3xl md:text-4xl mb-5">60 m/s</h1>
            <p className="text-gray-300 opacity-85 font-normal text-lg md:text-xl">
              Super
              <br />
              Max Speed
            </p>
          </div>
          <div>
            <h1 className="text-white font-semibold text-3xl md:text-4xl mb-5">30 mins</h1>
            <p className="text-gray-300 opacity-85 font-normal text-lg md:text-xl">
              Long Flight
              <br />
              Time
            </p>
          </div>
        </div>
      </div>
      
      <div className=" pt-24 w-full bd-gray-900">
        <img 
          src={benefitDroneImage} 
          alt="Benefit" 
          className="block absolute w-full  left-0 right-0 bottom-0 mx-auto w-4/5 md:w-auto md:max-w-[468px] filter brightness-110"
        />
      </div>
    </section>
  );
}