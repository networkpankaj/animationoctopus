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

  // Enhanced GSAP Animation with smoother transitions
  useEffect(() => {
    const tl = gsap.timeline({ 
      defaults: { 
        ease: "power2.out",  // Changed to smoother easing
        duration: 1.2        // Slightly longer duration
      } 
    });

    // Add gradient animation to the background
    gsap.fromTo(".gradient-bg",
      {
        backgroundImage: "linear-gradient(to top, rgba(253, 247, 236, 0.7) 0%, transparent 100%)",
        opacity: 0,
        y: "100%"
      },
      {
        opacity: 1,
        y: "0%",
        duration: 1.5,
        ease: "power2.inOut"
      }
    );

    tl.fromTo(welcomeRef.current,
      { 
        y: 30, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        ease: "power3.inOut"  // Smoother easing for first element
      }
    )
    .fromTo(virtualRef.current,
      { 
        y: 60,               // Changed from x to y for consistency
        opacity: 0,
        scale: 0.95         // Slight scale effect
      },
      { 
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.4,
        ease: "expo.out"    // Very smooth easing
      },
      "-=0.7"              // Adjusted overlap
    )
    .fromTo(octopusRef.current,
      { 
        y: 60,
        opacity: 0,
        scale: 0.95
      },
      { 
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.4,
        ease: "expo.out"
      },
      "-=1.2"              // More overlap for connected feel
    )
    .fromTo(typewriterRef.current,
      { 
        y: 20, 
        opacity: 0,
        scale: 0.98
      },
      { 
        y: 0, 
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out"
      },
      "-=0.8"
    )
    .fromTo(descriptionRef.current,
      { 
        y: 30, 
        opacity: 0,
        scale: 0.98
      },
      { 
        y: 0, 
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out"
      },
      "-=0.8"
    );

    // Optional: Add a smooth reveal to the entire section
    gsap.fromTo(".textstructure",
      { 
        opacity: 0.8,
        scale: 0.98 
      },
      { 
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out"
      }
    );

    // Add floating animation to the background squares
    gsap.to(".floating-bg", {
      y: -20,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      stagger: {
        each: 0.2,
        from: "start"
      }
    });

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
    <div className='w-full h-screen bg-[#fdf7ecd8] pt-2 relative overflow-hidden'>
      {/* Add gradient overlay */}
      <div className="gradient-bg absolute inset-0 pointer-events-none" />
      
      <div className='flex justify-between items-center px-20 py-20'>
        {/* Text Section */}
        <div className='textstructure mt-40 w-1/2 relative z-10'>
          <p ref={welcomeRef} className='text-2xl text-zinc-800 mb-8 font-light opacity-0'>
            Welcome to our creative world
          </p>
          <div className='masker mb-4'>
            <h1 
              ref={virtualRef}
              className=' uppercase text-8xl tracking-tighter font-semibold leading-[5vw] text-[#3B67B6] opacity-0'
            >
              Virtual
            </h1>
          </div>
          <div className='masker mb-8'>
            <h1 
              ref={octopusRef}
              className=' uppercase text-8xl text-zinc-800 font-semibold opacity-0'
            >
              Octopus
            </h1>
          </div>
          <div 
            ref={typewriterRef} 
            className='flex items-center gap-2 mt-8 mb-8 opacity-0'
          >
            <p className='text-xl text-black'>I am a</p>
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
        <div className='w-1/2 mt-40 pl-10 relative z-10'>
          <div 
            className='
              floating-bg
              w-[480px] h-[480px] 
              bg-black
              rounded-[30px]
              absolute top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2
              z-[-5]
              before:content-[""]
              before:absolute
              before:inset-0
              before:bg-[#3B67B6]
              before:rounded-[30px]
              before:translate-x-4
              before:translate-y-4
              before:floating-bg
            '
          />
        </div>
      </div>
    </div>
  );
};

// Add this to your global CSS or Tailwind config
const styles = `
  .gradient-bg {
    background: linear-gradient(to top, rgba(253, 247, 236, 0.7) 0%, transparent 100%);
  }
`;

export default Banner;