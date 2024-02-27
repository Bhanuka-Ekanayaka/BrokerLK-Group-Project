
import { useRef, useEffect, useState } from 'react';
import NavBar from '../Child/NavBar/NavBar';
import Footer from '../Child/Footer/Footer';
import SlideShow from '../Child/SlideShow/SlideShow';
import PageNavbar from '../Child/PageNavbar/PageNavbar';

import ReportAdd from '../Child/Form/ReportADD/ReportAdd';
import Otpinput from '../Otpinput/Otpinput'
import { showSuccessToast, showErrorToast, CommonToastContainer } from '../../Services/CommonToaster';
import AutoLayout from '../Card/AutoLayout';
import './home.css';


const Home = ({isAuthenticated}) => {
  const [hasClass, setclass] = useState(false);
  const [outClass, setOutClass] = useState(true)

  const navRef = useRef();

  useEffect(()=>{
    if(isAuthenticated){
      showSuccessToast('Succesfully Logged')
    }
    console.log(isAuthenticated)
  }, [])

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
      <NavBar navRef={navRef} showNavBar={showNavbar} title={'BrokerLk.lk'}></NavBar>
      <SlideShow></SlideShow>

      <PageNavbar className='hp1'></PageNavbar>
      

      <PageNavbar></PageNavbar>
     


      <div className='hd1'>
        <AutoLayout/>
      </div>


      <Footer></Footer>
      <CommonToastContainer/>
    </>
  );
}

export default Home;