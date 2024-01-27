
import { FaBars } from 'react-icons/fa';
import logo from './assets/logo.png';
import MenuBar from './MenuBar';
import { Link } from 'react-router-dom';

const NavBar = ({ showNavBar, navRef }) => {


    return (
        <>
            <header>
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

                        <Link to='/login'>Sign-In</Link>
                        <Link to='/postadd'>Post-Add</Link>

                    </nav>
              
            </header>

            <MenuBar navRef={navRef}></MenuBar>

        </>

    );
}

export default NavBar;