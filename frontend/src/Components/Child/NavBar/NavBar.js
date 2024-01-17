
import { FaBars } from 'react-icons/fa';
import logo from './assets/logo.png';
import MenuBar from './MenuBar';

const NavBar = ({ showNavBar, navRef }) => {


    return (
        <>
            <header>
                <div className='header-partA'>
                    <div className="title-content">

                        <button className='nav-btn' onClick={showNavBar}>
                            <FaBars></FaBars>
                        </button>

                        <img src={logo} alt="brand logo" />

                        <div className="brand-title">
                            <h1>Broker.lk</h1>
                            <p>Your home away  from home, at your fingertips</p>
                        </div>
                    </div>


                    <nav className='additional'>

                        <a href='/login'>Sign-In</a>
                        <a href='/postadd'>Post-Add</a>

                    </nav>
                </div>
                <div className='header-partB'>
                        <a href='/'>Home</a>
                        <a href='/'>Packages</a>
                        <a href='/'>About-Us</a>
                </div>
            </header>

            <MenuBar navRef={navRef}></MenuBar>

        </>

    );
}

export default NavBar;