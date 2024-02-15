import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import im1 from './Dimages/orow.jpg';
import im2 from './Dimages/Orte.jpg';
import im3 from './Dimages/ow5.jpg';

const Sshow = () => {
    
   
    return (
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={im1}
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={im2}
          alt="Second slide"
        />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={im3}
          alt="Third slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Sshow;
