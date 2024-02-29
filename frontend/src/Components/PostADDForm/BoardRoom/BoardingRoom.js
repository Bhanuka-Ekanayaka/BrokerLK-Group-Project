import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import './Room.css';
import Footer from "../../Child/Footer/Footer";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavBar from "../../Child/NavBar/NavBar";
import { useState, useEffect } from "react";
import Message from "../Confirmationmsg/Message";
import axios from 'axios';
import moment from 'moment';

const BoardingRoom = () => {


    const [district, setDistrict] = useState('Colombo');
    const [size, setSize] = useState('');
    const [kitchen, setKitchen] = useState(0);
    const [tenant, setTenant] = useState(1);
    const [bathroom, setBathroom] = useState(1);
    const [beds, setBeds] = useState(0);
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [number, setNumber] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [validated, setValidated] = useState(false);
    const [isValid, setIsValid] = useState(true);
    const [boardingHouseImage, setBoardingHouseImage] = useState(null);
    const [roomImage, setRoomImage] = useState(null);
    const [bedImage, setBedImage] = useState(null);
    const [washRoomImage, setWashRoomImage] = useState(null);
    const [kithchenImage, setKitchenImage] = useState(null);
    const [additionalImage, setAdditionalImage] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [currentTime, setCurrentTime] = useState('');
    const [currrentDate, setCurrentDate] = useState('');
    const notifyDescription = 'Your new post is added successfully to our website.';
    const owner_id = '3';

    useEffect(() => {
        const interval = setInterval(() => {
            const time = moment().format('hh:mm A');
            const date = moment().format('DD/MM/YYYY');
            setCurrentDate(date);
            setCurrentTime(time);
        }, 1000);

        return () => clearInterval(interval);
    }, [])




    const handleChange = (e) => {
        const inputValue = e.target.value.replace(/\D/g, '');
        setNumber(inputValue);
        // Check if the entered value is a valid ten-digit mobile number
        const mobileNumberRegex = /^0\d{9}$/;
        if (mobileNumberRegex.test(inputValue) || inputValue === '') {
            setMobileNumber(inputValue);
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {

            // Here, you can send the form data to your backend server or perform other actions
            const formData = {
                district,
                size,
                kitchen,
                tenant,
                bathroom,
                beds,
                price,
                description,
                mobileNumber,
                addressLine1,
                addressLine2,
                owner_id,
                currentTime,
                currrentDate,
                notifyDescription
            };

            const formPhoto = new FormData();
            formPhoto.append('boardingHouseImage', boardingHouseImage);
            formPhoto.append('roomImage', roomImage);
            formPhoto.append('bedImage', bedImage);
            formPhoto.append('washRoomImage', washRoomImage);
            formPhoto.append('kitchenImage', kithchenImage);
            formPhoto.append('additionalImage', additionalImage);

            try {
                const responsePostData = await axios.post('http://localhost:5001/postadd/boarding-room', formData);
                console.log('Form Data Insert Successfully', responsePostData.data);




                const responseUplodPhotos = await axios.post('http://localhost:5001/postadd/boarding-room/upload', formPhoto, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    params: {
                        post_ID: responsePostData.data.post_ID // Pass post_ID as a query parameter
                    }
                });

                setShowAlert(true);


                console.log('Images Upload SuccessFully', responseUplodPhotos.data);
            } catch (err) {
                console.error('Image Uplaod or Form Data Upload error', (err));
            }






            // For demonstration purposes, let's just log the data to the console
            console.log('Form data:', formData);
        }
        setValidated(true);
    };



    return (
        <>
            <NavBar />
            <div className="postadd-room">
                <Container style={{ marginTop: '60px', backgroundColor: '#FFFFFF', borderRadius: '5px' }}>
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
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row>
                            <Form.Group as={Col} controlId="formGridDistrict">
                                <Form.Label>District</Form.Label>
                                <Form.Select defaultValue="Colombo" value={district} onChange={(e) => setDistrict(e.target.value)} required>
                                    <option value='Colombo'>Colombo</option>
                                    <option value='Gampaha'>Gampaha</option>
                                    <option value='Kandy'>Kandy</option>
                                    <option value='Matale'>Matale</option>
                                    <option value='Kalutara'>Kalutara</option>
                                    <option value='Nuwara Eliya'>Nuwara Eliya</option>
                                    <option value='Galle'>Galle</option>
                                    <option value='Matara'>Matara</option>
                                    <option value='Hambantota'>Hambantota</option>
                                    <option value='Jaffna'>Jaffna</option>
                                    <option value='Kilinochchi'>Kilinochchi</option>
                                    <option value='Mannar'>Mannar</option>
                                    <potion value='Mullaitivu'>Mullaitivu</potion>
                                    <option value='Vavuniya'>Vavuniya</option>
                                    <option value='Trincomalee'>Trincomalee</option>
                                    <option value='Batticaloa'>Batticaloa</option>
                                    <option value='Ampara'>Ampara</option>
                                    <option value='Puttalam'>Puttalam</option>
                                    <option Value='Kurunegala'>Kurunegala</option>
                                    <option value='Anuradhapura'>Anuradhapura</option>
                                    <option value='Polonnaruwa'>Polonnaruwa</option>
                                    <option value='Badulla'>Badulla</option>
                                    <option value='Monaragala'>Monaragala</option>
                                    <option value='Kegalle'>Kegalle</option>
                                    <option value='Ratnapura'>Ratnapura</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    Please choose a district.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Room Size<small className="text-muted"> *in sq.ft</small></Form.Label>
                                <Form.Control type="number" placeholder="100" value={size} onChange={(e) => setSize(e.target.value)} min='0' required />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a room size.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Kitchen</Form.Label>
                                <Form.Select defaultValue="false" value={kitchen} onChange={(e) => setKitchen(e.target.value)} required>
                                    <option value='0'>No</option>
                                    <option value='1'>Yes</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    Please choose a kitchen option.
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Row>


                        <Row style={{ paddingTop: '5px' }}>

                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>No of Tenants</Form.Label>
                                <Form.Control type='number' defaultValue='1' value={tenant} onChange={(e) => setTenant(e.target.value)} min='1' required />

                                <Form.Control.Feedback type="invalid">
                                    Please choose a Tenant option.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Bath Rooms</Form.Label>
                                <Form.Control type='number' defaultValue="1" value={bathroom} onChange={(e) => setBathroom(e.target.value)} min='1' required />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a bathroom option.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Beds</Form.Label>
                                <Form.Control type='number' defaultValue="0" value={beds} onChange={(e) => { setBeds(e.target.value) }} min='0' required />
                                <Form.Control.Feedback type="invalid">
                                    Please choose a beds option.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row style={{ paddingTop: '5px' }}>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Price <small className="text-muted">*RS:</small></Form.Label>
                                <Form.Control type="number" placeholder="5000" value={price} onChange={(e) => setPrice(e.target.value)} min='0' required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter price.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Description about your post" value={description} onChange={(e) => setDescription(e.target.value)} required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a description.
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Row>

                        <hr className="mb-4" style={{ color: "#4D4D4D" }} />

                        <Row>
                            <h6 className="text-center ">Insert Boarding Images</h6>
                            <Form.Group controlId="formFileMultiple" className="mb-3">
                                <Form.Label>Boarding House Image</Form.Label>
                                <Form.Control type="file" onChange={(e) => { setBoardingHouseImage(e.target.files[0]) }} />
                            </Form.Group>
                            <Form.Group controlId="formFileMultiple" className="mb-3" >
                                <Form.Label>Room Image<small className="text-muted"> *Cover-Image</small></Form.Label>
                                <Form.Control type="file" onChange={(e) => { setRoomImage(e.target.files[0]) }} required />
                                <Form.Control.Feedback type="invalid">
                                    Please upload a room image.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formFileMultiple" className="mb-3">
                                <Form.Label>Bed Image</Form.Label>
                                <Form.Control type="file" onChange={(e) => { setBedImage(e.target.files[0]) }} />
                            </Form.Group>
                            <Form.Group controlId="formFileMultiple" className="mb-3">
                                <Form.Label>Wash Room Image</Form.Label>
                                <Form.Control type="file" onChange={(e) => { setWashRoomImage(e.target.files[0]) }} />
                            </Form.Group>
                            <Form.Group controlId="formFileMultiple" className="mb-3" >
                                <Form.Label>Kitchen Image</Form.Label>
                                <Form.Control type="file" onChange={(e) => { setKitchenImage(e.target.files[0]) }} />
                            </Form.Group>
                            <Form.Group controlId="formFileMultiple" className="mb-3">
                                <Form.Label>Additional Image</Form.Label>
                                <Form.Control type="file" multiple onChange={(e) => { setAdditionalImage(e.target.files[0]) }} />
                            </Form.Group>
                        </Row>
                        <hr className="mb-4" style={{ color: "#4D4D4D" }} />

                        <Row>
                            <h6 className="text-center">Add Your Boarding Location</h6>
                            <Form.Group className="mb-3" controlId="formGridAddress1" >
                                <Form.Label>Address Line 1</Form.Label>
                                <Form.Control placeholder="1234 Main St" value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter address Line 1.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2" >
                                <Form.Label>Address Line 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter Adress Line 2.
                                </Form.Control.Feedback>
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

                            <Form.Group className="mb-3" controlID="formMobileNumber">
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="text" placeholder="0767454068" value={number} onChange={handleChange} isInvalid={!isValid} maxLength={10} required />
                                <Form.Control.Feedback type="invalid">
                                    Please enter a valid ten-digit mobile number.
                                </Form.Control.Feedback>
                            </Form.Group>

                        </Row>
                        <Button variant="primary" type="submit" style={{ marginBottom: '5px', marginRight: '5px' }} >
                            Submit
                        </Button>
                        <h2>{currentTime}</h2>
                        <h2>{currrentDate}</h2>

                        {showAlert && (
                            <Message />
                        )}

                    </Form>
                </Container>


            </div>

            <Footer animation="flip-right" />
        </>
    );
}

export default BoardingRoom;