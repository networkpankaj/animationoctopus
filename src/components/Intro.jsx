import React from 'react';

const Intro = () => {
  return (
    <div className="section min-h-screen bg-[#fdf7ecd8] py-20" id="intro">
      <div className="max-w-[1400px] mx-auto px-20">
        <div className="flex items-center justify-between gap-20">
          {/* Left Column - Content */}
          <div className="w-1/2">
            <div className="mb-6">
              <span className="text-7xl font-bold text-[#3B67B6]">01</span>
            </div>
            <h2 className="text-5xl font-semibold mb-8 text-zinc-800">
              3D Animation Design for Website
            </h2>
            <p className="text-zinc-600 leading-relaxed mb-4 text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus 
              voluptas a porro libero recusandae quae, aut ratione, incidunt laborum, 
              necessitatibus similique enim doloremque ex.
            </p>
            <p className="text-zinc-600 leading-relaxed text-lg">
              Laudantium obcaecati aspernatur doloremque illo beatae, 
              maxime hic itaque consequatur nisi accusantium veritatis, 
              voluptatem ratione!
            </p>
            
            {/* Optional: Add a button or call to action */}
            <button className="mt-8 px-8 py-3 bg-[#3B67B6] text-white rounded-lg
              hover:bg-[#2d4f8c] transition-colors duration-300">
              Learn More
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="w-1/2">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              <img 
                src="/path-to-your-image.jpg" 
                alt="3D Animation Design" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              {/* Optional: Add overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;