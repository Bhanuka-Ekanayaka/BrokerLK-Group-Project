import Badge from 'react-bootstrap/Badge';
import { useState, useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoMdNotifications } from "react-icons/io";
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NotifyBar.css';
import NotifyShow from './NotifyShow';
import axios from 'axios';

const NotifyBar = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const username = '3';
    const [mynotify, setMyNotify] = useState([]);
    const [count, setCount] = useState(0);
    const [reload,setReload] = useState(false);
   

    const markasread = async (notifyid) => {
        try {
            const response = await axios.put(`http://localhost:5001/notification/details/update/${notifyid}`);
            console.log('update reqest sent to the backend',response);
            if (response.success) {
                console.log('identify your notify is read');
                setReload(!reload);
            } else {
                console.log('cannot update the backend table');
            }

        } catch (err) {
            console.log('Cannot update a backend table' + err);
        }
    }

    const fetchNotifyData = async (username) => {
        try {
            const response = await axios.get(`http://localhost:5001/notification/details/${username}`);
            setMyNotify(response.data.result[0]);
        } catch (err) {
            console.log('cannot fetch the notification data' + err);
        }
    }

    useEffect(() => {  
        fetchNotifyData(username);
    }, [username,reload])

    useEffect(() => {
        setCount(mynotify.filter(notify => notify.mark_as_read === 0));
    }, [mynotify])

  


    return (
        <>
            <div className='d-flex align-items-center position-relative' >
                <IoMdNotifications onClick={handleShow} style={{ fontSize: '25px' }} />
                {(count.length === 0) ?
                    <div></div> :
                    <div>
                        {(count.length > 9) ?

                            <Badge className="position-absolute top-0 start-100 translate-middle bg-danger rounded-pill" >
                                +9
                            </Badge>
                            :
                            <Badge className="position-absolute top-0 start-100 translate-middle bg-danger rounded-pill" >
                                {count.length}
                            </Badge>
                        }
                    </div>
                }
            </div>


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
                            <NotifyShow mynotify={mynotify} markasread={markasread}/>
                        </Container>

                    </div>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    );
}

export default NotifyBar;