import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './assets/logo.png';
import './Navbar.css';
import { IoMdNotifications } from "react-icons/io";


const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary fixed-top" >

            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="40"
                        height="30"
                        className="d-inline-block align-top"
                    />{'BrokerLk'}

                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/rental-post">Rental</Nav.Link>
                        <NavDropdown title="Account" id="basic-nav-dropdown">

                            <NavDropdown.Item href="#action/3.1">
                                Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">DashBoard</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/login">
                                Log Out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <div className="nav-btn">

                           

                            <Nav.Link href='postad' >Post-Add</Nav.Link>

                        </div>
                        <Nav.Link href="#memes">
                       
                            < IoMdNotifications style={{ fontSize: '25px' }} />
                           
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;