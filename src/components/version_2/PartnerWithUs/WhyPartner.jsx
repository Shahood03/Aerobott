import React from 'react';
import { Users, Zap, Shield, Globe } from 'lucide-react'; // ✅ Import icons

const WhyPartner = () => {
  // Benefits data
  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Dedicated Support',
      description:
        'Get priority access to our expert team and dedicated account management for seamless collaboration.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation Access',
      description:
        "Be first to access cutting-edge features and technologies before they're released to the public.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description:
        'Benefit from our enterprise-grade security infrastructure and compliance certifications.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description:
        'Leverage our worldwide network and infrastructure to scale your business globally.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-black/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-raleway font-medium mb-6 bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
            Why Partner with Us?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-raleway leading-relaxed">
            We believe in the power of collaboration. Our partnerships are built
            on mutual success, innovation, and shared vision for the future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group h-full">
              <div className="h-full flex flex-col bg-black/40 hover:bg-gray-800/50 p-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-800 hover:border-purple-400 backdrop-blur-sm">
                <div className="text-purple-400 mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-raleway font-medium mb-3 text-white group-hover:text-purple-200 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 font-raleway leading-relaxed flex-grow">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
