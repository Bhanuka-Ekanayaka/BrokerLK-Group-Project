
import {useRef} from 'react';
import NavBar from '../Child/NavBar/NavBar';
import Footer from '../Child/Footer/Footer';



const Home = () => {
  const navRef = useRef();

    const showNavbar =()=>{
        navRef.current.classList.toggle('active');
    }
  
  return ( 
          <>
            <NavBar navRef={navRef} showNavBar={showNavbar}></NavBar>
                  <h1>This</h1>
                  <h1>is</h1>
                  <h1>Home</h1>
                  <h1>Page</h1>
            <Footer></Footer>
          </>
   );
}
 
export default Home;