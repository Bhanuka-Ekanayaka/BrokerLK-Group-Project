import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import './Room.css';
import Footer from "../../Child/Footer/Footer";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react';
import NavBar from "../../Child/NavBar/NavBar";


const BoardingRoom = () => {
    return (
             <>
             <NavBar/>
              <div className="postadd-room">
                <Container style={{ marginTop: '60px', backgroundColor: '#FFFFFF', borderRadius: '5px', border: '2px solid red' }}>
                    <Row>
                        <Navbar style={{ color: '#4D4D4D', paddingLeft: '5px', paddingRight: '5px' }}>
                            <Nav className="me-auto">
                                <h6> <i class="bi bi-pencil-fill" style={{ color: '#FF3951', opacity: '0.9' }}></i>  Fill in the following Form</h6>
                            </Nav>
                            <Nav>
                                <h6> <i class="bi bi-house-add-fill" style={{ color: '#FF3951', opacity: '0.9', fontSize: '25px' }}></i>   Boarding Room</h6>
                            </Nav>
                        </Navbar>
                        <hr className="mb-4" style={{ color: "#4D4D4D" }} />
                    </Row>

                    <Row>

                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Room Size</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Post Code</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>


                    <Row style={{ paddingTop: '5px' }}>

                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>No of Tenants</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>No of Wash Rooms</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>No of Beds</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <Row style={{ paddingTop: '5px' }}>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder="eg:-Rs:5000" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Description about your post" />
                        </Form.Group>

                    </Row>

                    <hr className="mb-4" style={{ color: "#4D4D4D" }} />

                    <Row>
                        <h6 className="text-center text-muted">Insert Boarding Images</h6>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Boarding House Image</Form.Label>
                            <Form.Control type="file" multiple />
                        </Form.Group>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Room Image</Form.Label>
                            <Form.Control type="file" multiple />
                        </Form.Group>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Bed Image</Form.Label>
                            <Form.Control type="file" multiple />
                        </Form.Group>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Wash Room Image</Form.Label>
                            <Form.Control type="file" multiple />
                        </Form.Group>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Additional Image</Form.Label>
                            <Form.Control type="file" multiple />
                        </Form.Group>
                    </Row>
                    <hr className="mb-4" style={{ color: "#4D4D4D" }} />

                    <Row>
                        <h6 className="text-center text-muted">Add Your Boarding Location</h6>
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                    </Row>

                    <hr className="mb-4" style={{ color: "#4D4D4D" }} />

                    <Row>
                        <h6 className="text-center text-muted">Your Deatails</h6>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Bhanuka Ekanayaka" readOnly />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="epbhanuka98@gmail.com" readOnly />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicMobile">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>

                    </Row>
                    <Button variant="primary" type="submit" style={{ marginBottom: '5px', marginRight: '5px' }} className="">
                        Submit
                    </Button>

                </Container>


            </div>

            <Footer animation="flip-right" />
            </>
     );
}
 
export default BoardingRoom;