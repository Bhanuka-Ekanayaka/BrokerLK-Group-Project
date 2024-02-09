import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import './SearchBar.css';

const SearchBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="searchbar-home sticky-top" data-aos="fade-down" >


            <Navbar expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="dark">

                <Container>
                    <Button variant="danger" onClick={handleShow}>
                    <i class="bi bi-filter">Filter</i>
                    </Button>

                    <Offcanvas show={show} onHide={handleClose} scroll='true'>
                        <Offcanvas.Header>
                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            Some text as placeholder. In real life you can have the elements you
                            have chosen. Like, text, images, lists, etc.
                        </Offcanvas.Body>
                    </Offcanvas>

                    <Form>
                        <InputGroup >
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                            />
                            <Button className="btn-danger" id="button-addon2">
                                <i class="bi bi-search"></i>
                            </Button>
                        </InputGroup>

                    </Form>


                </Container>


            </Navbar>
        </div>
    );
}

export default SearchBar;