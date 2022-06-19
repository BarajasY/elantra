import React from "react";
import "./Carousel.css";
import elantra_2 from '../../assets/elantra_2.jpg';
import elantra1 from '../../assets/elantra1.jpg';
import elantra3 from '../../assets/elantra3.jpg';
import interior2 from '../../assets/interior2.jfif';

const Carousel = () => {
  return (
    <div className="carousel_container">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <img src={elantra_2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Elegance</h5>
              <p>Top notch design is what you get with the new Elantra</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={elantra1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Elantra N</h5>
              <p>The performance version that never sees rear lights</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={elantra3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Drive</h5>
              <p>Get to the places you want with the people you love</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={interior2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>You're in control</h5>
              <p>Largest screen in class available housed together in a single panel</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel
