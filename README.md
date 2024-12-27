# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Banner = () => {
  // Refs for animation targets
  const welcomeRef = useRef(null);
  const virtualRef = useRef(null);
  const octopusRef = useRef(null);
  const typewriterRef = useRef(null);
  const descriptionRef = useRef(null);

  // Existing typing animation states
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const words = ['Developer', 'Designer', 'Coder'];
  const [delta, setDelta] = useState(200);

  // GSAP Animation
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(welcomeRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )
    .fromTo(virtualRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 },
      "-=0.5"
    )
    .fromTo(octopusRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 },
      "-=0.8"
    )
    .fromTo(typewriterRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.5"
    )
    .fromTo(descriptionRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.3"
    );
  }, []);

  // Existing typing animation useEffect and tick function
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % words.length;
    let fullText = words[i];
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(200);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };

  return (
    <div className='w-full h-screen bg-[#fdf7ecd8] pt-2'>
      <div className='flex justify-between items-center px-20 py-20'>
        {/* Text Section */}
        <div className='textstructure mt-40 w-1/2'>
          <p ref={welcomeRef} className='text-2xl text-zinc-800 mb-8 font-light opacity-0'>
            Welcome to our creative world
          </p>
          <div className='masker mb-4'>
            <h1 
              ref={virtualRef}
              className='font-["Montserrat"] uppercase text-8xl tracking-tighter font-semibold leading-[5vw] text-[#3B67B6] opacity-0'
            >
              Virtual
            </h1>
          </div>
          <div className='masker mb-8'>
            <h1 
              ref={octopusRef}
              className='font-["Montserrat"] uppercase text-8xl text-zinc-800 font-semibold opacity-0'
            >
              Octopus
            </h1>
          </div>
          <div 
            ref={typewriterRef} 
            className='flex items-center gap-2 mt-8 mb-8 opacity-0'
          >
            <p className='text-xl'>I am a</p>
            <p className='text-xl font-semibold text-[#3B67B6] min-w-[120px]'>
              {text}
              <span className='animate-blink'>|</span>
            </p>
          </div>
          <p 
            ref={descriptionRef}
            className='mt-8 text-gray-600 max-w-md text-[16px] leading-relaxed opacity-0'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
  
        {/* Replacing Image Section with styled background */}
        <div className='w-1/2 mt-40 pl-10 relative'>
          <div 
            className='
              w-[480px] h-[480px] 
              bg-black
              rounded-[30px]
              absolute top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2 
              -rotate-8
              z-[-5]
              before:content-[""]
              before:absolute
              before:inset-0
              before:bg-[#3f67f3]
              before:rounded-[30px]
            '
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;