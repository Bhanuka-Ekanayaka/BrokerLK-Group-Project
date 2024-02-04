import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './slideshow.css';
import img from './Assets/Cover.jpg';


const SlideShow = () => {
  return (
    <div className='position-relative Cover-Image'>
    <Image src={img} fluid />
    <Button href ="#find" className='position-absolute custom-position'>Get Started</Button>
  </div>
  );
}

export default SlideShow;