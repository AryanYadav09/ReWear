import React from 'react';
import { assets } from "../assets/assets.js";

const Hero = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        {/* I've changed object-cover to object-contain and moved the height style to a class */}
        <div className="carousel-item active">
          <img
            src={assets.caraousel}
            className="d-block w-100 object-contain h-[60vh]" // Changed class
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src={assets.caraousel}
            className="d-block w-100 object-contain h-[60vh]" // Changed class
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src={assets.caraousel2}
            className="d-block w-100 object-contain h-[60vh]" // Changed class
            alt="Slide 3"
          />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Hero;