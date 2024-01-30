import { useRef, useEffect, useState } from 'react';
import NavBar from '../Child/NavBar/NavBar';
import Footer from '../Child/Footer/Footer';
import Image from 'react-bootstrap/esm/Image';

import{ IoIosNotifications } from "react-icons/io";
import './profile.css';
import ProfileCard from './Child/ProfileCard';


const Profile = () => {

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
        <NavBar showNavBar={showNavbar} navRef={navRef} title={'Profile'}></NavBar>
        <ProfileCard></ProfileCard>
        <Footer></Footer>
        </>
     );
}
 
export default Profile;