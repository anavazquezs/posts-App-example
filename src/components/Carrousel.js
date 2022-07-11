import React from 'react';
import './Carrousel.css';

function Carrousel() {
  return (
    <section className='hero-section'>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
           <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://cdn.pixabay.com/photo/2016/11/18/13/23/action-1834465__340.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Sports</h5>
                <p>Sharing our efforts</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://cdn.pixabay.com/photo/2014/07/21/03/53/digital-art-398342__340.png" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Special moments</h5>
                <p>Sharing our relationships</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://cdn.pixabay.com/photo/2015/06/01/00/20/man-792821__340.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Moments of solitude</h5>
                <p>Sharing our thoughts</p>
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
      </section>
  )
}

export default Carrousel