import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../Layouts/ExampleCarouselImage';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;






// function ourmenu() {
//   return (
//     <div>
//     <div id="carouselExampleIndicators" class="carousel slide" style={{width: "100%" , height: "500px"}}>
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" class="d-block w-100" alt="..." style={{width: "100%" , height: "500px"}} />
//     </div>
//     <div class="carousel-item">
//       <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" class="d-block w-100" alt="..." style={{width: "100%" , height: "500px"}} />
//     </div>
//     <div class="carousel-item">
//       <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" class="d-block w-100" alt="..." style={{width: "100%" , height: "500px"}} />
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
//   </div>
//   )
// }

// export default ourmenu