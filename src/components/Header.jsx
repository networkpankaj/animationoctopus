import React, { useState, useEffect } from 'react';
// import { div } from 'three/tsl';
// import '../styles/Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Change color after 50px scroll
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`
      fixed z-[999] w-full px-20 py-8 font-["Montserrat"] 
      flex justify-between items-center 
      transition-all duration-300 ease-in-out
      ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent shadow-none'}
    `}>
      <div className='logo'>
        <img src="https://isuremedia.com/wp-content/uploads/2022/07/isurelogo-320by110.-1-300x103-1.webp" alt="" width={120} />
      </div>
      <div className='links flex gap-10 '>
        {["Services", "Our Work" ,"About Us", "Insights", "contact"].map((item, index) => (
          <a 
            key={index} 
            className={`
              text-[3xl] capitalize font-light cursor-pointer
              relative overflow-hidden
              group transition-all duration-300 ease-in-out
              select-none text-zinc-800 hover:text-[#3B67B6]
              ${index === 4 ? "ml-32" : ""}
            `}
          >
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              {item}
            </span>
            <span className="inline-block absolute top-full left-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              {item}
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#3B67B6] origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"/>
          </a>
        ))}
      </div>
    </div>
    
  );
};

export default Header;