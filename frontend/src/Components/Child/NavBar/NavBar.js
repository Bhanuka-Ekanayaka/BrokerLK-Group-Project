import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './assets/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import NotifyBar from '../NotifyBar/NotifyBar';
import { useState,useEffect } from 'react';
import Usertoken from '../../../Services/token.userToken';

const NavBar = () => {

    const user = Usertoken();
    const [userLogin, setUserLogin] = useState(false);
    console.log(user);

    useEffect(()=>{
        if(user !== null){
            setUserLogin(true);
        }
    },[user])

    const logout = () => {
        localStorage.removeItem('token');
      };

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
                                <NavDropdown.Item as={Link} to="/profile">
                                    Profile
                                </NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/dashboard">DashBoard</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/login" onClick={logout}>
                                    Log Out
                                </NavDropdown.Item>
                            </NavDropdown>
                            :
                            <div></div>
                        }

                        <Nav.Link as={Link} to='about'>About us</Nav.Link>
                    </Nav>

                    {userLogin ?
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