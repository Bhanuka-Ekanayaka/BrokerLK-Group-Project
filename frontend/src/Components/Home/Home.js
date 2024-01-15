
import {useRef} from 'react';
import NavBar from '../Child/NavBar/NavBar';

const Home = () => {
  const navRef = useRef();

    const showNavbar =()=>{
        navRef.current.classList.toggle('active');
    }
  
  return ( 
          <>
            <NavBar navRef={navRef} showNavBar={showNavbar}></NavBar>
            <h1>This is Home Page</h1>
          </>
   );
}
 
export default Home;