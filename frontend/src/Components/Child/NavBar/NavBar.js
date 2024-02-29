import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './assets/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import NotifyBar from '../NotifyBar/NotifyBar';

const NavBar = () => {
   
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
                    </Nav>
                    <Nav>
                        <div className="nav-btn">
                            <Nav.Link as={Link} to='postad' >Post-Add</Nav.Link>
                        </div>
                        <Nav.Link href=''>
                            <NotifyBar />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;