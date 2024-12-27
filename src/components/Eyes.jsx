import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Eyes = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth floating animation for left clouds
      gsap.to(".cloud-left", {
        x: "random(-15, 15)", 
        y: "random(-15, 15)",
        rotation: "random(-5, 5)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 1.5,
          from: "random"
        }
      });

      // Smooth floating animation for right clouds
      gsap.to(".cloud-right", {
        x: "random(-15, 15)",
        y: "random(-15, 15)",
        rotation: "random(-5, 5)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 1.5,
          from: "random"
        }
      });

      // Subtle pulse animation for center image
      gsap.to(".center-image", {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  const leftServices = [
    "3D Animation",
    "Web Design",
    "UI/UX Design",
    "Motion Graphics"
  ];

  const rightServices = [
    "Development",
    "Branding",
    "Marketing",
    "Consulting"
  ];

  return (
    <div 
      ref={containerRef}
      className="section min-h-screen bg-[#fdf7ecd8] relative overflow-hidden py-20" 
      id="description"
    >
      <div className="max-w-[1400px] mx-auto px-20 flex justify-between items-center">
        {/* Left Clouds */}
        <div className="w-1/3 flex flex-col gap-8">
          {leftServices.map((service, index) => (
            <div 
              key={index}
              className={`
                cloud-left bg-white p-6 rounded-full shadow-lg 
                hover:scale-105 hover:bg-[#3B67B6] hover:text-white
                transition-all duration-500 ease-out cursor-pointer
                flex items-center justify-center text-lg font-medium text-[#3B67B6]
                transform translate-x-0 translate-y-0
                backdrop-blur-sm bg-white/90
              `}
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {service}
            </div>
          ))}
        </div>

        {/* Center GIF */}
        <div className="w-1/3 flex justify-center items-center">
          <div className="center-image relative 
        ">
            <img 
              src="/abcd.png" 
              alt="Services Animation" 
              className="w-full h-full "
            />
            <div className="absolute inset-0  " />
          </div>
        </div>

        {/* Right Clouds */}
        <div className="w-1/3 flex flex-col gap-8">
          {rightServices.map((service, index) => (
            <div 
              key={index}
              className={`
                cloud-right bg-white p-6 rounded-full shadow-lg 
                hover:scale-105 hover:bg-[#3B67B6] hover:text-white
                transition-all duration-500 ease-out cursor-pointer
                flex items-center justify-center text-lg font-medium text-[#3B67B6]
                transform translate-x-0 translate-y-0
                backdrop-blur-sm bg-white/90
              `}
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Eyes;