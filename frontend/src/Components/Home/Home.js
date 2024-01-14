import './Navbar.css';
import {useRef} from 'react';
import NavBar from './ChildComponents/NavBar';
import Slider from './ChildComponents/Slider';

const Home = () => {
  const navRef = useRef();

    const showNavbar =()=>{
        navRef.current.classList.toggle('responsive_nav');
    }
  
  return ( 
          <>
            <NavBar navRef={navRef} showNavBar={showNavbar}></NavBar>
            <Slider></Slider>
          </>
   );
}
 
export default Home;