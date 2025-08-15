import React, { useState, useEffect } from 'react';
import { MapPin, AlertTriangle, Activity, Eye, Shield, Camera, Radio, Wifi, Mountains, Crosshair, Map } from 'lucide-react';

const IndiaDroneSurveillance = () => {
  const [scanLine, setScanLine] = useState(0);
  const [activeDrones, setActiveDrones] = useState(3);
  const [alertsCount, setAlertsCount] = useState(5);
  const [currentTime, setCurrentTime] = useState('');
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    // Scan line animation
    const scanInterval = setInterval(() => {
      setScanLine(prev => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    
    // Update time
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };
    
    // Initial time set
    updateTime();
    const timeInterval = setInterval(updateTime, 60000);
    
    // Occasionally update drone and alert counts for realism
    const statsInterval = setInterval(() => {
      setActiveDrones(prev => Math.max(2, Math.min(5, prev + Math.floor(Math.random() * 3) - 1)));
      setAlertsCount(prev => Math.max(0, Math.min(7, prev + Math.floor(Math.random() * 3) - 1)));
    }, 10000);
    
    // Handle scroll effect (copied from SurveillanceHero)
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(scanInterval);
      clearInterval(timeInterval);
      clearInterval(statsInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Border locations - would be actual coordinates in a real implementation
  const borderLocations = [
    { id: 1, name: "Jammu & Kashmir", lat: "34°5'N", lon: "77°6'E", status: "Alert" },
    { id: 2, name: "Punjab Border", lat: "31°1'N", lon: "74°8'E", status: "Secure" },
    { id: 3, name: "Rajasthan", lat: "27°0'N", lon: "70°9'E", status: "Monitoring" },
    { id: 4, name: "Gujarat", lat: "23°7'N", lon: "69°7'E", status: "Secure" },
    { id: 5, name: "Arunachal", lat: "28°4'N", lon: "94°7'E", status: "Alert" }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-black">
      {/* Background with parallax effect - similar to SurveillanceHero */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('')",
          transform: `translateY(${scrollY * 0.2}px)`,
          filter: "brightness(0.4)"
        }}
      />
      
      {/* Overlay gradient - copied from SurveillanceHero */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-900/50 via-black/20 to-blue-900/50" />
      
      {/* Animated particles - copied from SurveillanceHero */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.6,
              animation: `pulse ${1 + Math.random() * 3}s infinite alternate`,
            }}
          />
        ))}
      </div>
      
      {/* Header Section */}
      <div className="container relative mx-auto px-6 py-16 z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block p-2 bg-blue-900/50 backdrop-blur-sm rounded-full mb-4">
            <Eye className="h-8 w-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-blue-400">In India,</span> Border Surveillance Excellence
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Drones are vital for real-time monitoring of borders, especially in tough terrains. They help detect threats like infiltration and support the army with intelligence.
          </p>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-blue-900/50 p-6 flex flex-col items-center text-center">
            <div className="p-3 bg-blue-900/50 rounded-full mb-4">
              <Map className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-white font-bold text-2xl mb-1">15,106 km</h3>
            <p className="text-gray-300">Total Border Length</p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-blue-900/50 p-6 flex flex-col items-center text-center">
            <div className="p-3 bg-blue-900/50 rounded-full mb-4">
              <Camera className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-white font-bold text-2xl mb-1">60%</h3>
            <p className="text-gray-300">Challenging Terrain</p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-blue-900/50 p-6 flex flex-col items-center text-center">
            <div className="p-3 bg-blue-900/50 rounded-full mb-4">
              <Camera className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-white font-bold text-2xl mb-1">24/7</h3>
            <p className="text-gray-300">Surveillance Coverage</p>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm rounded-lg border border-blue-900/50 p-6 flex flex-col items-center text-center">
            <div className="p-3 bg-blue-900/50 rounded-full mb-4">
              <Radio className="h-6 w-6 text-blue-400" />
            </div>
            <h3 className="text-white font-bold text-2xl mb-1">5 Countries</h3>
            <p className="text-gray-300">Bordering Nations</p>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Map visualization */}
          <div className="w-full lg:w-1/2">
            <div className="relative h-96 md:h-[500px] bg-black/50 backdrop-blur-sm rounded-xl border border-blue-900/70 overflow-hidden shadow-lg shadow-blue-900/20">
              {/* India map outline (stylized) - would be a proper SVG in production */}
              <div className="absolute inset-0 p-6">
                <div className="relative h-full w-full">
                  {/* Stylized map of India */}
                  <svg className="w-full h-full" viewBox="0 0 400 500">
                    <defs>
                      <linearGradient id="indiaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                    
                    {/* Simple stylized India outline */}
                    <path 
                      d="M200,100 C280,120 320,160 340,240 C360,320 340,380 300,420 C260,460 200,480 140,460 C80,440 60,380 80,320 C100,260 80,200 100,160 C120,120 160,90 200,100 Z" 
                      fill="url(#indiaGradient)" 
                      stroke="#60A5FA" 
                      strokeWidth="2"
                    />
                    
                    {/* Border highlight */}
                    <path 
                      d="M200,100 C280,120 320,160 340,240 C360,320 340,380 300,420" 
                      fill="none" 
                      stroke="#3B82F6" 
                      strokeWidth="3"
                      strokeDasharray="5,5"
                      className="animate-pulse-slow"
                    />
                    
                    <path 
                      d="M300,420 C260,460 200,480 140,460" 
                      fill="none" 
                      stroke="#3B82F6" 
                      strokeWidth="3"
                      strokeDasharray="5,5"
                      className="animate-pulse-slow"
                    />
                    
                    <path 
                      d="M140,460 C80,440 60,380 80,320" 
                      fill="none" 
                      stroke="#3B82F6" 
                      strokeWidth="3"
                      strokeDasharray="5,5"
                      className="animate-pulse-slow"
                    />
                    
                    <path 
                      d="M80,320 C100,260 80,200 100,160 C120,120 160,90 200,100" 
                      fill="none" 
                      stroke="#3B82F6" 
                      strokeWidth="3"
                      strokeDasharray="5,5"
                      className="animate-pulse-slow"
                    />
                    
                    {/* Major cities/points */}
                    <circle cx="140" cy="160" r="4" fill="#60A5FA" />
                    <circle cx="320" cy="240" r="4" fill="#60A5FA" />
                    <circle cx="280" cy="380" r="4" fill="#60A5FA" />
                    <circle cx="140" cy="420" r="4" fill="#60A5FA" />
                    <circle cx="100" cy="280" r="4" fill="#60A5FA" />
                    
                    {/* Alert locations */}
                    <circle cx="140" cy="160" r="8" fill="#EF4444" fillOpacity="0.3" className="animate-ping-slow" />
                    <circle cx="280" cy="380" r="8" fill="#EF4444" fillOpacity="0.3" className="animate-ping-slow" />
                  </svg>
                  
                  {/* Drone paths */}
                  <svg className="absolute inset-0 w-full h-full">
                    {/* Drone path 1 */}
                    <path 
                      d="M140,160 C180,200 220,180 240,220" 
                      fill="none" 
                      stroke="#60A5FA" 
                      strokeWidth="1.5"
                      strokeDasharray="4,2"
                      className="drone-path"
                    />
                    
                    {/* Drone path 2 */}
                    <path 
                      d="M320,240 C290,280 260,270 280,380" 
                      fill="none" 
                      stroke="#60A5FA" 
                      strokeWidth="1.5"
                      strokeDasharray="4,2"
                      className="drone-path"
                    />
                    
                    {/* Drone path 3 */}
                    <path 
                      d="M100,280 C140,320 180,350 140,420" 
                      fill="none" 
                      stroke="#60A5FA" 
                      strokeWidth="1.5"
                      strokeDasharray="4,2"
                      className="drone-path"
                    />
                  </svg>
                  
                  {/* Drones */}
                  <div className="absolute w-full h-full">
                    <div className="absolute w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center drone-1">
                      <Crosshair className="h-3 w-3 text-white" />
                    </div>
                    
                    <div className="absolute w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center drone-2">
                      <Crosshair className="h-3 w-3 text-white" />
                    </div>
                    
                    <div className="absolute w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center drone-3">
                      <Crosshair className="h-3 w-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Scan line effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-300 to-transparent opacity-5"
                style={{ 
                  transform: `translateY(${scanLine - 50}%)`,
                  height: '30%'
                }}
              />
              
              {/* Border points list */}
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm p-2 rounded-lg border border-blue-900/70 shadow-md w-60">
                <h3 className="text-sm font-semibold text-blue-300 border-b border-blue-900/50 pb-1 mb-2">Border Monitoring Points</h3>
                <div className="max-h-32 overflow-y-auto text-xs">
                  {borderLocations.map(location => (
                    <div key={location.id} className="flex items-center justify-between py-1 border-b border-blue-900/30">
                      <div className="flex items-center gap-1">
                        <div className={`w-2 h-2 rounded-full ${location.status === 'Alert' ? 'bg-red-500' : location.status === 'Monitoring' ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
                        <span className="font-medium text-gray-200">{location.name}</span>
                      </div>
                      <div className="text-gray-400 text-xs">{location.lat}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm border-t border-blue-900/50 p-3">
                <div className="flex flex-wrap justify-between items-center">
                  <div className="flex gap-3">
                    <div className="bg-blue-900/50 text-blue-300 px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                      <Camera size={12} />
                      <span>ACTIVE DRONES: {activeDrones}</span>
                    </div>
                    
                    <div className="bg-red-900/50 text-red-300 px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                      <AlertTriangle size={12} />
                      <span>ALERTS: {alertsCount}</span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-300 flex items-center gap-1">
                    <Wifi size={12} className="text-blue-400" />
                    <span>LAST UPDATE: {currentTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: Technical info */}
          <div className="w-full lg:w-1/2">
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-blue-900/70 shadow-lg shadow-blue-900/20">
              <h2 className="text-2xl font-bold text-white mb-4">Enhanced Border Protection</h2>
              
              <p className="text-gray-300 mb-6">
                India's vast and diverse border regions present unique security challenges. Our advanced drone surveillance systems are specifically designed to address these challenges by providing real-time intelligence, threat detection, and situational awareness across all terrains.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-blue-900/50 rounded-lg">
                    <MapPin className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">All-Terrain Monitoring</h3>
                    <p className="text-gray-300">
                      Our drones are equipped to operate in mountainous regions, deserts, marshlands, and dense forests, providing continuous surveillance regardless of geographic challenges.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-blue-900/50 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Advanced Threat Detection</h3>
                    <p className="text-gray-300">
                      Multi-spectral imaging capabilities combined with AI-powered analytics detect unauthorized border crossings, suspicious activities, and potential security threats in real-time.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-blue-900/50 rounded-lg">
                    <Activity className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">Military Intelligence Support</h3>
                    <p className="text-gray-300">
                      Seamless integration with command centers provides essential tactical data to military personnel, enabling informed decision-making and coordinated response to emerging situations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-blue-900/50 rounded-lg">
                    <Shield className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">24/7 Border Security</h3>
                    <p className="text-gray-300">
                      Equipped with thermal imaging and night vision capabilities, our drones provide continuous surveillance during day and night, ensuring round-the-clock border protection.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                  <Eye size={18} />
                  <span>View Deployment Map</span>
                </button>
                
                <button className="px-6 py-3 bg-transparent border border-blue-500 text-white font-medium rounded-lg hover:bg-blue-900/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                  <Camera size={18} />
                  <span>Technical Specifications</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tech details floating at bottom */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <div className="flex space-x-8 text-xs text-blue-400/80 bg-black/70 backdrop-blur-sm px-6 py-2 rounded-full">
          <div>RANGE: 10KM</div>
          <div>|</div>
          <div>FLIGHT TIME: 30MIN</div>
          <div>|</div>
          <div>PAYLOAD: UP TO 5KG</div>
          <div>|</div>
          <div>WEIGHT: &lt;2KG</div>
        </div>
      </div>
      
      {/* Custom styles */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.5); opacity: 0.2; }
        }
        
        .drone-path {
          animation: dash 30s linear infinite;
        }
        
        @keyframes dash {
          to {
            stroke-dashoffset: -60;
          }
        }
        
        .drone-1 {
          top: 31%;
          left: 47%;
          animation: moveDrone1 20s infinite alternate ease-in-out;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.3);
        }
        
        .drone-2 {
          top: 58%;
          left: 62%;
          animation: moveDrone2 25s infinite alternate ease-in-out;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.3);
        }
        
        .drone-3 {
          top: 73%;
          left: 37%;
          animation: moveDrone3 22s infinite alternate ease-in-out;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.3);
        }
        
        @keyframes moveDrone1 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, -15px); }
        }
        
        @keyframes moveDrone2 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-25px, 10px); }
        }
        
        @keyframes moveDrone3 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(15px, 20px); }
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 3s infinite;
        }
        
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        .animate-ping-slow {
          animation: pingSlow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        @keyframes pingSlow {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default IndiaDroneSurveillance;