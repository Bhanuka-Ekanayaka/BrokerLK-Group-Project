
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoMdNotifications } from "react-icons/io";
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NotifyBar.css';
import NotifyShow from './NotifyShow';

const NotifyBar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <IoMdNotifications onClick={handleShow} style={{ fontSize: '25px' }} />



            <Offcanvas show={show} onHide={handleClose} placement='end' className='custom-notifyBar' scroll='true'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='custom-notifybar-navbar'>
                        <Navbar expand="lg" className="bg-body-tertiary">
                            <Container>
                                <Nav >
                                    <NavDropdown title="Notifications" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Mark All as Read</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.1">Delete All</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Nav>    
                                    <Nav.Link>
                                        <i class="bi bi-book-fill"></i>
                                    </Nav.Link>

                                    <Nav.Link>
                                        <i class="bi bi-trash2-fill"></i>
                                    </Nav.Link>
                                </Nav>

                            </Container>
                        </Navbar>
                        <Container>
                            <NotifyShow/>
                        </Container>

                    </div>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    );
}

export default NotifyBar;