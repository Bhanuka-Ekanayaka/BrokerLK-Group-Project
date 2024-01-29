
import { useRef, useEffect, useState } from 'react';
import NavBar from '../Child/NavBar/NavBar';
import Footer from '../Child/Footer/Footer';
import SlideShow from '../Child/SlideShow/SlideShow';
import PageNavbar from '../Child/PageNavbar/PageNavbar';
import ReportAdd from '../Child/Form/ReportADD/ReportAdd';
import Otpinput from '../Otpinput/Otpinput';
import Card from '../Card/Card';
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
      <SlideShow></SlideShow>
      <PageNavbar></PageNavbar>
      <Otpinput></Otpinput>
      <div className='hd1'>
        <Card/>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;