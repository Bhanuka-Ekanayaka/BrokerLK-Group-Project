
import { useRef, useEffect, useState } from 'react';
import NavBar from '../Child/NavBar/NavBar';
import Footer from '../Child/Footer/Footer';
import SlideShow from '../Child/SlideShow/SlideShow';
import PageNavbar from '../Child/PageNavbar/PageNavbar';
import ReportAdd from '../Child/Form/ReportADD/ReportAdd';
import Otpinput from '../Otpinput/Otpinput';
import AutoLayout from '../Card/AutoLayout';
import './home.css';

const Home = () => {
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
      <NavBar navRef={navRef} showNavBar={showNavbar}></NavBar>
      <SlideShow ></SlideShow>

      <PageNavbar className='hs1'></PageNavbar>
      
     
        <AutoLayout/>
      
      <Footer className='hf1'></Footer>
    </>
  );
}

export default Home;