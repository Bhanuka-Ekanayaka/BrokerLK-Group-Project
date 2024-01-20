
import {useRef} from 'react';
import NavBar from '../Child/NavBar/NavBar';
import Footer from '../Child/Footer/Footer';
import SlideShow from '../Child/SlideShow/SlideShow';
import PageNavbar from '../Child/PageNavbar/PageNavbar';

const Home = () => {
  const navRef = useRef();

    const showNavbar =()=>{
        navRef.current.classList.toggle('active');
    }
  
  return ( 
          <>
            <NavBar navRef={navRef} showNavBar={showNavbar}></NavBar>
            <SlideShow></SlideShow>
            <PageNavbar></PageNavbar>
            <Footer></Footer>
          </>
   );
}
 
export default Home;