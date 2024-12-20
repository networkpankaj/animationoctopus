import React from 'react';
import '../styles/Sections.css';

const Description = () => {
  return (
    <div className="section" id="description">
      <div className="content-fit">
        <div className="number">Services</div>
        <div className="des">
          <div className="title">virtual Octopus</div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus 
            voluptas a porro libero recusandae quae, aut ratione, incidunt laborum, 
            necessitatibus similique enim doloremque ex. Laudantium obcaecati 
            aspernatur doloremque illo beatae, maxime hic itaque consequatur nisi 
            accusantium veritatis, voluptatem ratione! Placeat numquam nisi 
            reiciendis harum quibusdam tempore eaque deleniti accusantium, veniam 
            quae eos sed, asperiores laborum corporis odit mollitia consequatur 
            adipisci? Quibusdam quis eos debitis non esse blanditiis laudantium 
            rerum odit tempora? Corrupti maiores velit consequuntur cupiditate 
            reiciendis similique provident repudiandae.
          </p>
        </div>
      </div>
      {/* <img 
        src="/img/leaf1.png" 
        className="decorate" 
        alt="" 
        style={{ width: '70vw', bottom: 0, right: 0, zIndex: 101 }} 
      /> */}
    </div>
  );
};

export default Description;