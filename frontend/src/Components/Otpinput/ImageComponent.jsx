import React from 'react';
import Image from './Inputimage/verifiy.jpg'
import './ImageComponent.css'

const ImageComponent = () => {
  return (
    <div>
      <img className='im'  src={Image} alt="Description of the image" />
     </div>
  );
};

export default ImageComponent;