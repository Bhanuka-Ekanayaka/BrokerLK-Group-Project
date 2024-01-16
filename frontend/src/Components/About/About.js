import NavBar from "../Child/NavBar/NavBar";
import {useRef} from 'react';
import Footer from "../Child/Footer/Footer";

const About = () => {
    const navRef = useRef();

    const showNavbar =()=>{
        navRef.current.classList.toggle('active');
    }

    return ( 
        <>
            <NavBar navRef={navRef} showNavBar={showNavbar}></NavBar>
            <h1>This is a About Page</h1>
            <Footer></Footer>
        </>
     );
}
 
export default About;