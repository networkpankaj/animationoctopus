// import React from 'react';
// import { useRippleEffect } from '../hooks/useRippleEffect';
// import '../styles/RippleBackground.css';

// const RippleBackground = () => {
//   // Using the custom hook with options
//   const { canvasRef, createRipple } = useRippleEffect({
//     maxRipples: 15,
//     rippleSpeed: 3,
//     autoCreate: true,
//     autoCreateInterval: 1000,
//     rippleColor: 'rgba(255, 255, 255, 0.8)'
//   });

//   // Handle click events to create ripples
//   const handleClick = (e) => {
//     const rect = canvasRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     createRipple(x, y, 4); // Create a larger ripple on click
//   };

//   return (
//     <div className="ripple-container">
//       <div 
//         className="background-image"
//         style={{
//           backgroundImage: "url('https://i.postimg.cc/J07vSC9q/hero-background.jpg')"
//         }}
//       />
//       <canvas
//         ref={canvasRef}
//         className="ripple-canvas interactive"
//         onClick={handleClick}
//       />
//     </div>
//   );
// };

// export default RippleBackground;