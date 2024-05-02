import { useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import './postselectbar.css';

const PostSelectBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className='catergoryselect'>
            <Nav.Link as={Link} onClick={handleShow}>Post-Add</Nav.Link>


            <Offcanvas show={show} onHide={handleClose} placement="bottom" className='selectctergory'>
                <Container>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Select Your Boarding Catergory</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className='postselectbar'>
                            <div className='catergory'>
                                <Link to="/create-listing/boarding-room">
                                    <img src='/boardingroom.jpg' alt='' />
                                    <h2>Boarding Room</h2>
                                </Link>
                            </div>
                            <div className='catergory'>
                                <Link to="/create-listing/boarding-room">
                                    <img src='/boarding_building.jpg' alt='' />
                                    <h2>Boarding Building</h2>
                                </Link>
                            </div>
                            <div className='catergory'>
                                <Link to="/create-listing/boarding-room">
                                    <img src='/rentalhouse.jpg' alt='' />
                                    <h2>Rental House</h2>
                                </Link>
                            </div>
                        </div>
                    </Offcanvas.Body>
                </Container>
            </Offcanvas >

        </div>

    );
}

export default PostSelectBar;