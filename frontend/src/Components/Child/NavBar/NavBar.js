
import { FaBars } from 'react-icons/fa';
import logo from './assets/logo.png';
import MenuBar from './MenuBar';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NavBar = ({ showNavBar, navRef,title }) => {
  
    return (
        <>
            <Helmet>
                <title> {title}</title>
            </Helmet>
            <header>
                    <div className="title-content">

                        <button className='nav-btn' onClick={showNavBar}>
                            <FaBars></FaBars>
                        </button>

                        <img src={logo} alt="brand logo" />

                        <div className="brand-title">
                            <h1>BrokerLk.lk</h1>
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