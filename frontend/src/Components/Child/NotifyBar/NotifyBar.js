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
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import axios from 'axios';
import Usertoken from '../../../Services/token.userToken';

const NotifyBar = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const token = Usertoken();

    const [username,setUserName] = useState(token.userid);
    const [mynotify, setMyNotify] = useState([]);
    const [count, setCount] = useState(0);
    const [reload, setReload] = useState(false);

    console.log("This is username"+username);

    const markasallread = async (username) => {
        try {

            const response = await axios.put(`http://localhost:5001/notification/details/update-all/${username}`);
            console.log('all notification mark as read', response.data);
            if (response.data.success) {
                setReload(!reload);
            } else {
                console.log('cannot mark all notify read');
            }
        } catch (err) {
            console.log('All read notifications are deleted' + err);
        }
    }


    const markasread = async (notifyid) => {
        try {
            const response = await axios.put(`http://localhost:5001/notification/details/update/${notifyid}`);
            console.log('update notify reqest sent to the backend', response.data);
            if (response.data.success) {
                console.log('identify your notify is read');
                // setUserName('3');
                setReload(!reload);
            } else {
                console.log('cannot update the backend table');
            }

        } catch (err) {
            console.log('Cannot update a backend table' + err);
        }
    }

    const deleteAllReadNotify = async (username) => {
        try {
            const response = await axios.delete(`http://localhost:5001/notification/details/delete-all/${username}`);
            if (response.data.success) {
                console.log('all read data are deleted', response);
                setReload(!reload);
            } else {
                console.log('all read notification are not deleted');
            }
        } catch (err) {
            console.log('cannot delete all read notify' + err);
        }
    }

    const deleteNotify = async (notifyid) => {
        try {
            const response = await axios.delete(`http://localhost:5001/notification/details/delete/${notifyid}`);
            console.log('delete the notify', response.data);
            if (response.data.success) {
                console.log('delete your notofucation');
                //setUserName('3');
                setReload(!reload);
            } else {
                console.log('cannot delete your notofiction');
            }

        } catch (err) {
            console.log('cannot delete the notify' + err);
        }
    }



    useEffect(() => {
        const fetchNotifyData = async (username) => {
            try {
                const response = await axios.get(`http://localhost:5001/notification/details/${username}`);
                console.log('notify data mine', response);
                setMyNotify(response.data.result[0]);
            } catch (err) {
                console.log('cannot fetch the notification data' + err);
            }
        }
        fetchNotifyData(username);
    }, [username, reload])

    useEffect(() => {
        setCount(mynotify.filter(notify => notify.mark_as_read === 0));
    }, [mynotify, reload])




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
                                        <NavDropdown.Item onClick={(e) => markasallread(username)}>Mark All as Read</NavDropdown.Item>
                                        <NavDropdown.Item onClick={(e) => deleteAllReadNotify(username)}>Delete All Read</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                                <Nav>
                                    <Nav.Link onClick={(e) => markasallread(username)}>
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip>Mark All as Read</Tooltip>}
                                        >
                                            <i class="bi bi-book-fill"></i>
                                        </OverlayTrigger>
                                    </Nav.Link>

                                    <Nav.Link onClick={(e) => deleteAllReadNotify(username)}>
                                        <OverlayTrigger
                                            placement="top"
                                            overlay={<Tooltip>Delete All Read</Tooltip>}
                                        >
                                            <i class="bi bi-trash3-fill"></i>
                                        </OverlayTrigger>
                                    </Nav.Link>
                                </Nav>

                            </Container>
                        </Navbar>
                        <Container>
                            <NotifyShow mynotify={mynotify} markasread={markasread} deleteNotify={deleteNotify} />
                        </Container>

                    </div>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    );
}

export default NotifyBar;