import React from 'react';
import { assets } from "../assets/assets.js"; // Make sure you have actual image paths here

const Hero = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={assets.hero_img} className="d-block w-100 object-cover"
            alt="Slide 1"
            style={{ height: '60vh' }} />
        </div>
        <div className="carousel-item">
          <img src={assets.hero_img} className="d-block w-100 object-cover"
            alt="Slide 1"
            style={{ height: '60vh' }} />
        </div>
        <div className="carousel-item">
          <img src={assets.hero_img} className="d-block w-100 object-cover"
            alt="Slide 1"
            style={{ height: '60vh' }} />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Hero;
