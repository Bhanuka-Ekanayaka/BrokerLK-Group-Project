
import {FaBars,FaTimes} from 'react-icons/fa';
import logo from '../assets/logo.png';
const NavBar = ({showNavBar,navRef}) => {


    return ( 
        <header>

            <div className="title-content">

                <button className='nav-btn'onClick={showNavBar}>
                    <FaBars></FaBars>
                </button>    

                <img src={logo} alt="brand logo"/>
               
                <div className="brand-title">
                    <h1>Broker.lk</h1>
                    <p>Your home away  from home, at your fingertips</p>
                </div>
            </div>

            <nav ref={navRef}>
                {/* <a href='/'>Home</a>
                <a href='/packages'>Packages</a>
                <a href='/about'>About</a>
                <a href='/customerSupport'>Customer</a> */}

               <a href='/signin'>Sign-In</a>
               <a href='/postadd'>Post-Add</a>
                <button className="nav-btn nav-close-button" onClick={showNavBar}>
                    <FaTimes></FaTimes>
                </button>
            </nav>
           
        </header>
     );
}
 
export default NavBar;