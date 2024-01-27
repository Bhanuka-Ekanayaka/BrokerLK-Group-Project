import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import {Link} from 'react-router-dom';

import './footerstyle.css';

const Footer = () => {
    return (
        <footer>
            <div className="foot-container">

                <div className="col1">
                    <h4>Broker.lk</h4>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/packages'>Packages</Link></li>
                        <li><Link to='/about'>About us</Link></li>
                        <li><Link to='/postadd'>Post Your Add</Link></li>
                    </ul>
                </div>
                <div className="col2">
                    <h4>Boding Places</h4>
                    <ul>
                        <li><Link to='/packages'>Boarding Rooms</Link></li>
                        <li><Link to='/packages'>Rental Houses</Link></li>
                    </ul>
                </div>
                <div className="col3">
                    <h4>Get Help</h4>
                    <ul>
                        <li><Link to='/login'>Customer Support</Link></li>
                        <li><Link to='/login'>Privancy and Policy</Link></li>
                    </ul>
                </div>

                <div className="col4">
                    <h4>Follow Us</h4>
                    <ul>
                        <li>
                            <div className="social-links">
                                <Link to='/'><FaFacebook></FaFacebook></Link>
                                <Link to='/'><FaInstagram></FaInstagram></Link>
                                <Link to='/'><FaSquareTwitter></FaSquareTwitter></Link>
                                <Link to='/'><FaLinkedin ></FaLinkedin></Link>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    );
}

export default Footer;