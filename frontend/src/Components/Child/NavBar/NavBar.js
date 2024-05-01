import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './assets/logo.png';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import NotifyBar from '../NotifyBar/NotifyBar';
import {  useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import {apiRequest} from '../../../lib/apiRequest';


const NavBar = () => {

    const {currentUser,updateUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async ()=>{
        await apiRequest.post("/auth/logout");
        updateUser(null);
        navigate("/");
    }

    console.log("home page",currentUser);

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
                        {currentUser ?
                            <NavDropdown title="Account" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/profile">
                                    Profile
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/dashboard">DashBoard</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/" onClick={handleLogout}>
                                    Log Out
                                </NavDropdown.Item>
                            </NavDropdown>
                            :
                            <div></div>
                        }

                        <Nav.Link as={Link} to='about'>About us</Nav.Link>
                    </Nav>

                    {currentUser ?
                        <Nav>

                            <div className="nav-btn">
                                <Nav.Link as={Link} to='/postad' >Post-Add</Nav.Link>
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