import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './assets/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import NotifyBar from '../NotifyBar/NotifyBar';
import { useState } from 'react';

const NavBar = () => {


    const [userLogin, setUserLogin] = useState(true);

    return (
        <Navbar expand="lg" className="bg-body-tertiary fixed-top" >

            <Container>
                <Navbar.Brand as={Link} to="/">
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
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/rental-post">Rental</Nav.Link>
                        {userLogin ?
                            <NavDropdown title="Account" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    Profile
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">DashBoard</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/login">
                                    Log Out
                                </NavDropdown.Item>
                            </NavDropdown>
                            :
                            <div></div>
                        }

                        <Nav.Link as={Link} to='#about-us'>About us</Nav.Link>
                    </Nav>

                    {userLogin ?
                        <Nav>

                            <div className="nav-btn">
                                <Nav.Link as={Link} to='postad' >Post-Add</Nav.Link>
                            </div>
                            <Nav.Link href=''>
                                <NotifyBar />
                            </Nav.Link>

                        </Nav>
                        :
                        <Nav>
                            <div className="nav-btn">
                                <Nav.Link as={Link} to='login' >Sign-In</Nav.Link>
                            </div>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;