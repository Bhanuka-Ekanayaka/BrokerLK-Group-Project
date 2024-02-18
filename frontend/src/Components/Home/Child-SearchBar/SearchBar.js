import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import './SearchBar.css';

const SearchBar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="searchbar-home sticky-top" data-aos="fade-down" >


            <Navbar expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="dark">

                <Container>

                    <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                        < Form  >
                            <Row>
                                <Form.Group as={Col} lg={1} className="d-flex justify-content-center align-items-center">
                                    <Button variant="danger" onClick={() => setOpen(!open)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open} >
                                        <i class="bi bi-sliders"></i>
                                    </Button>
                                </Form.Group>

                                <Form.Group as={Col} lg={2} className="d-flex justify-content-center align-items-center">

                                    <Form.Control type="number" placeholder="*Min Tenants" />

                                </Form.Group>


                                <Form.Group as={Col} lg={3} className="d-flex justify-content-center align-items-center">
                                    <Form.Select aria-label="Default select example" className='text-muted'>
                                        <option>Select a Type</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} lg={3} className="d-flex justify-content-center align-items-center mx-auto">
                                    <Form.Select aria-label="Default select example" className='text-muted'>
                                        <option>Monthly Price *Rs</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Form.Group>



                                <Form.Group as={Col} s lg={3} className="d-flex justify-content-center align-items-center" >
                                    <InputGroup >
                                        <Form.Control
                                            type="search"
                                            placeholder="District,City,Area..."
                                            aria-label="Search"
                                            aria-describedby="basic-addon2"
                                        />
                                        <Button className="btn-danger" id="button-addon2">
                                            <i class="bi bi-search"></i>
                                        </Button>
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Collapse in={open}>
                                    <div id="example-collapse-text">
                                        <Row className='mt-3'>
                                            <div className="d-flex justify-content-center align-items-center" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                                                <Form.Group as={Col} lg={3} className="d-flex justify-content-center align-items-center mx-auto">

                                                    <Form.Control type="number" placeholder="*Min Beds" />

                                                </Form.Group>

                                                <Form.Group as={Col} lg={3} className="d-flex justify-content-center align-items-center mx-auto">

                                                    <Form.Control type="text" placeholder="Range of Area" />

                                                </Form.Group>

                                                <Form.Group as={Col} lg={3} className="d-flex justify-content-center align-items-center mx-auto">
                                                    <Form.Select aria-label="Default select example" className='text-muted'>
                                                        <option>Exist of Kitchen</option>
                                                        <option value="1">Not Need</option>
                                                        <option value="2">Need</option>
                                                    </Form.Select>
                                                </Form.Group>



                                                <Form.Group as={Col} lg={3} className="d-flex justify-content-center align-items-center">
                                                    <Form.Select aria-label="Default select example" className='text-muted'>
                                                        <option>Search<small>  *sq.ft</small></option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </Form.Select>
                                                </Form.Group>

                                            </div>
                                        </Row>
                                    </div>
                                </Collapse>
                            </Row>

                        </Form>

                    </div>
                </Container>


            </Navbar>
        </div>
    );
}

export default SearchBar;