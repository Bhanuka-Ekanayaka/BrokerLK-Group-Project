import NavBar from "../Child/NavBar/NavBar";
import {useRef} from 'react';


const Package = () => {
    const navRef = useRef();

    const showNavbar =()=>{
        navRef.current.classList.toggle('active');
    }

    return ( 
        <>
            <NavBar navRef={navRef} showNavBar={showNavbar}></NavBar>
            <h1>This is Package Page</h1>
        </>
     );
}
 
export default Package;