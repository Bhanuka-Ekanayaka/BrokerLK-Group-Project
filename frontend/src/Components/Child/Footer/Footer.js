import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

import './footerstyle.css';

const Footer = () => {
    return (
        <footer>
            <div className="foot-container">

                <div className="col1">
                    <h4>Broker.lk</h4>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/packages'>Packages</a></li>
                        <li><a href='/about'>About us</a></li>
                        <li><a href='/postadd'>Post Your Add</a></li>
                    </ul>
                </div>
                <div className="col2">
                    <h4>Boding Places</h4>
                    <ul>
                        <li><a href='/packages'>Boarding Rooms</a></li>
                        <li><a href='/packages'>Rental Houses</a></li>
                    </ul>
                </div>
                <div className="col3">
                    <h4>Get Help</h4>
                    <ul>
                        <li><a href='/login'>Customer Support</a></li>
                        <li><a href='/login'>Privancy and Policy</a></li>
                    </ul>
                </div>

                <div className="col4">
                    <h4>Follow Us</h4>
                    <ul>
                        <li>
                            <div className="social-links">
                                <a href='/'><FaFacebook></FaFacebook></a>
                                <a href='/'><FaInstagram></FaInstagram></a>
                                <a href='/'><FaSquareTwitter></FaSquareTwitter></a>
                                <a href='/'><FaLinkedin ></FaLinkedin></a>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    );
}

export default Footer;