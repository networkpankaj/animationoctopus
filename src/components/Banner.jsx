import React from 'react';
// import { div } from 'three/tsl';
// import '../styles/Banner.css';

const Banner = () => {
  return (

    <div className='w-full h-screen bg-zinc-900 pt-2'>
    <div className='flex justify-between items-center px-20'>
      {/* Text Section */}
      <div className='textstructure mt-40 w-1/2'>
        <div className='masker'>
          <h1 className='font-["Montserrat"] uppercase text-8xl tracking-tighter font-semibold leading-[5vw]'>Built It</h1>
        </div>
        <div className='masker'>
          <h1 className='font-["Montserrat"] uppercase text-8xl font-semibold '>Solutions</h1>
        </div>
        <div className='masker'>
          <h1 className='font-["Montserrat"] uppercase text-8xl tracking-tighter font-semibold leading-[5vw]'>Presentation</h1>
        </div>
      </div>
  
      {/* Video Section */}
      <div className='w-1/2 mt-40 pl-10'>
        <div className='relative w-full aspect-square overflow-hidden rounded-xl'>
          <video 
            src="/finaloctopus.avi"  // Fixed path
            className='w-full h-full object-contain'
            autoPlay  // Fixed capitalization
            muted     
            loop
            playsInline  // Added for better mobile support
          >
            {/* Fallback sources for better browser support */}
            {/* <source src="/finaloctopus.avi" type="video/x-msvideo" />
            <source src="/finaloctopus.mp4" type="video/mp4" /> */}
          </video>
        </div>
      </div>
    </div>
  </div>
  
    // <div className="section" id="banner">
    //   <div className="content-fit">
    //     <div 
    //       className="text-[#d1ff48] text-[11em] font-devil-breeze font-bold relative text-center
    //       before:content-[attr(data-before)] before:absolute before:top-[0.5em] before:inset-[0.66em_0_0_0] 
    //       before:-z-10 before:text-[#445022]
    //       lg:text-[5em] md:text-[3em]"
    //       data-before="WEBSITEDESIGN"
    //     >
    //       3D ANIMATION
    //     </div>
    //   </div>
    //   <img 
    //     src="/img/flower.png" 
    //     className="decorate w-[50vw]"
    //     alt="" 
    //     style={{ bottom: 0, right: 0 }} 
    //   />
    //   <img 
    //     src="/img/leaf.png" 
    //     className="decorate w-[30vw]"
    //     alt="" 
    //     style={{ bottom: 0, left: 0 }} 
    //   />
    // </div>
  );
};

export default Banner;