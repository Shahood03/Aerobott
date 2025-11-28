import React, { useRef, useEffect } from 'react';
import { ArrowRight, Plus, Users } from 'lucide-react';
import Prism from '../../reactbits/Prism';
import SplitText from "../../reactbits/SplitText";

export default function Banner() {
  const videoRef = useRef(null);
const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Force play on load
      video.play().catch(err => console.log('Autoplay prevented:', err));
      
      // Ensure seamless loop
      video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play();
      });
    }
  }, []);

  return (
    <div className="h-screen bg-black relative overflow-hidden">
      {/* Prism Background */}
      <div className="absolute inset-0">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1          }
          noise={0}
          glow={1}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10"></div>

      {/* Center Text */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <h1 className="text-7xl md:text-9xl font-medium text-white tracking-tight" style={{ fontFamily: 'Raleway, sans-serif' }}>
         <SplitText
            text=" AI Center of Excellence"
            className="text-7xl font text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </h1>
      </div>
    </div>
  );
}