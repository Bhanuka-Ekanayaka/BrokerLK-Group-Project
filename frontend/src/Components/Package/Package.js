import NavBar from "../Child/NavBar/NavBar";
import {useRef,useEffect,useState} from 'react';
import Footer from "../Child/Footer/Footer";
import SlideShow from '../Child/SlideShow/SlideShow';
import PageNavbar from '../Child/PageNavbar/PageNavbar';

const Package = () => {

    const [hasClass, setclass] = useState(false);
    const [outClass, setOutClass] = useState(true)
  
    const navRef = useRef();
  
    const showNavbar = () => {
      if (!hasClass && outClass) {
        navRef.current.classList.add('active');
        setclass(true);
        setOutClass(false);
      } else {
        navRef.current.classList.remove('active');
        setclass(false);
        setOutClass(true);
      }
    }
  
    const hadleclickoutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target))
        navRef.current.classList.remove('active');
      setOutClass(true);
    }
    useEffect(() => {
      document.addEventListener('mousedown', hadleclickoutside);
      return () => document.removeEventListener('mousedown', hadleclickoutside);
    }, []);

    return ( 
        <>
            <NavBar navRef={navRef} showNavBar={showNavbar} title={'Packages'}></NavBar>
            <SlideShow></SlideShow>
            <PageNavbar></PageNavbar>
            <h1>This is Package Page</h1>
            <Footer></Footer>
        </>
     );
}
 
export default Package;