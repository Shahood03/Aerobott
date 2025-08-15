import React, { useEffect, useState } from 'react';
import { ChevronDown, Shield, Clock, Award, Zap, Compass } from 'lucide-react';

const DronesServices = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show content with a slight delay for animation
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);

        // Parallax effect on scroll
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, []);

    const services = [
        {
            icon: <Shield />,
            title: "Aerial Security",
            description: "Advanced surveillance and security monitoring for events, properties, and infrastructure"
        },
        {
            icon: <Compass />,
            title: "Precision Mapping",
            description: "High-resolution topographic surveys and 3D mapping for construction and land development"
        },
        {
            icon: <Clock />,
            title: "Rapid Response",
            description: "Emergency assessment and real-time monitoring for disaster management and search operations"
        },
        {
            icon: <Award />,
            title: "Professional Training",
            description: "Certified drone piloting courses and specialized industry training programs"
        },
        {
            icon: <Zap />,
            title: "Equipment Rental",
            description: "High-end drone equipment rental for film production, events, and specialized applications"
        }
    ];

    return (
        <div className="relative min-h-screen overflow-hidden bg-gray-900">
            <div className="absolute inset-0 overflow-hidden">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-orange-500"
                        style={{
                            width: `${Math.random() * 6 + 2}px`,
                            height: `${Math.random() * 6 + 2}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.5 + 0.2,
                            animation: `float ${Math.random() * 8 + 4}s infinite ease-in-out ${Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>

            {/* Content container */}
            <div className="container mx-auto px-4 py-20 relative z-10">
                <div
                    className={`flex flex-col items-center text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                >
                    <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
                        Our <span className="text-orange-500">Drone Services</span>
                    </h1>
                    <div className="h-1.5 w-24 bg-orange-500 rounded-full mb-8"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mb-12 leading-relaxed">
                        Leveraging cutting-edge drone technology to deliver exceptional solutions for businesses,
                        government agencies, and creative professionals worldwide.
                    </p>

                    {/* Services grid */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
                    >
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`bg-gray-800/60 backdrop-blur-md p-8 rounded-xl border border-gray-700 hover:border-orange-500/50 
                  transition-all duration-500 hover:bg-gray-800/80 hover:shadow-lg hover:shadow-orange-500/10 transform hover:-translate-y-2
                  transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="text-orange-500 mb-4 flex justify-center">
                                    <div className="p-3 bg-gray-700 rounded-full">
                                        {React.cloneElement(service.icon, { size: 28 })}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-gray-300">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white opacity-70">
                        <ChevronDown size={32} />
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-30px) scale(1.2);
          }
        }
      `}</style>
        </div>
    );
};

export default DronesServices;