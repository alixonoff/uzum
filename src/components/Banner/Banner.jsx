import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';


function CarouselFadeExample() {
  return (
  <div className="container">
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.uzum.uz/cs7s82lpq3ghb2qjbe70/main_page_banner.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.uzum.uz/csu96ltpq3ggq63e69o0/main_page_banner.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.uzum.uz/ct034cb4nkdilc6c59r0/main_page_banner.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
 
  </div>  
  );
}

export default CarouselFadeExample;
