import './Navbar.css';
import {useRef} from 'react';
import NavBar from './ChildComponents/NavBar';

const Home = () => {
  const navRef = useRef();

    const showNavbar =()=>{
        navRef.current.classList.toggle('active');
    }
  
  return ( 
          <>
            <NavBar navRef={navRef} showNavBar={showNavbar}></NavBar>
            <h1>Bhanuka Ekanayaka</h1>
          </>
   );
}
 
export default Home;