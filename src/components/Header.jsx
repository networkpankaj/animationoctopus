import React from 'react';
// import { div } from 'three/tsl';
// import '../styles/Header.css';

const Header = () => {
  return (
    <div className='fixed z-[999] w-full px-20 py-8 font-["Montserrat"] flex justify-between items-center'>
      <div className='logo'>
        <img src="https://isuremedia.com/wp-content/uploads/2022/07/isurelogo-320by110.-1.webp" alt="" width={120} />
      </div>
      <div className='links flex gap-10'>
        {["Services", "Our Work" ,"About Us", "Insights", "contact"].map((item, index) => (
          <a 
            key={index} 
            className={`
              text-md capitalize font-light cursor-pointer
              relative overflow-hidden
              group transition-all duration-300 ease-in-out
              select-none
              ${index === 4 ? "ml-32" : ""}
            `}
          >
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              {item}
            </span>
            <span className="inline-block absolute top-full left-0 transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              {item}
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"/>
          </a>
        ))}
      </div>
    </div>
    // <header className='bg-black w-full h-auto'>
    //   <div className="content-fit">
    //     <div className="logo text-3xl font-semibold text-white">ISUREMEDIA</div>
    //     <nav>
    //       <ul>
    //         <li>Contacts</li>
    //         <li>Category</li>
    //         <li>Login</li>
    //       </ul>
    //     </nav>
    //   </div>
    // </header>
  );
};

export default Header;