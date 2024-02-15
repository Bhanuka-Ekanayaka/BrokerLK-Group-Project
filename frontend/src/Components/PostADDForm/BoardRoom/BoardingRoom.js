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
            <NavBar />
            <div className="postadd-room">
                <Container style={{ marginTop: '60px', backgroundColor: '#FFFFFF', borderRadius: '5px', border: '2px solid red' }}>
                    <Row>
                        <Navbar style={{ color: 'Black', paddingLeft: '5px', paddingRight: '5px' }}>
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

                        <Form.Group as={Col} controlId="formGridDistrict">
                            <Form.Label>District</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Colombo</option>
                                <option>Gampaha</option>
                                <option>Kandy</option>
                                <option>Matale</option>
                                <option>Kalutara</option>
                                <option>Nuwara Eliya</option>
                                <option>Galle</option>
                                <option>Matara</option>
                                <option>Hambantota</option>
                                <option>Jaffna</option>
                                <option>Kilinochchi</option>
                                <option>Mannar</option>
                                <potion>Mullaitivu</potion>
                                <option>Vavuniya</option>
                                <option>Trincomalee</option>
                                <option>Batticaloa</option>
                                <option>Ampara</option>
                                <option>Puttalam</option>
                                <option>Kurunegala</option>
                                <option>Anuradhapura</option>
                                <option>Polonnaruwa</option>
                                <option>Badulla</option>
                                <option>Monaragala</option>
                                <option>Kegalle</option>
                                <option>Ratnapura</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Room Size</Form.Label>
                            <Form.Control type="text" placeholder="eg:-100sq.ft" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Kitchen</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>No</option>
                                <option>Yes</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>


                    <Row style={{ paddingTop: '5px' }}>

                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>No of Tenants</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Bath Rooms</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Beds</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </Form.Select>
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
                        <h6 className="text-center ">Insert Boarding Images</h6>
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
                        <h6 className="text-center">Add Your Boarding Location</h6>
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
                        <h6 className="text-center">Your Deatails</h6>

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