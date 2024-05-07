import { Button, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap';
import Footer from '../../Child/Footer/Footer';
import NavBar from '../../Child/NavBar/NavBar';
import './rentalhouse.css';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import moment from 'moment';
import { apiRequest } from '../../../lib/apiRequest';


const RentalHouse = () => {
    const {currentUser} = useContext(AuthContext);
    const [validated, setValidated] = useState(false);
    const [mobileNumber,setMobileNumber] = useState();
    const [isValid, setIsValid] = useState(true);
    const [currentTime, setCurrentTime] = useState('');
    const [currrentDate, setCurrentDate] = useState('');
    const notifyDescription = 'Your new post is added successfully to our website.';

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
        setMobileNumber(inputValue);
        // Check if the entered value is a valid ten-digit mobile number
        const mobileNumberRegex = /^0\d{9}$/;
        if (mobileNumberRegex.test(inputValue) || inputValue === '') {
            setMobileNumber(inputValue);
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };


    const handleSubmit = async (e)=>{
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }else{
            const formdata = new FormData(e.target);
            const inputs = Object.fromEntries(formdata);
            const {rentalHouse_Image,room1_Image,room2_Image,room3_Image,bed_Image,bath_Image,gate_Image,additional_Image,kitchen_Image,...otherformData}= inputs;

            const formPhoto = new FormData();
            formPhoto.append('rentalHouseImage', rentalHouse_Image);
            formPhoto.append('room1Image', room1_Image);
            formPhoto.append('room2Image', room2_Image);
            formPhoto.append('room3Image', room3_Image);
            formPhoto.append('bedImage', bed_Image);
            formPhoto.append('washRoomImage', bath_Image);
            formPhoto.append('gateImage', gate_Image);
            formPhoto.append('kitchenImage', kitchen_Image);
            formPhoto.append('additionalImage', additional_Image);
            try{
                const res = await apiRequest.post('/postadd/rental-house',{otherformData,currentTime,currrentDate,mobileNumber,currentUser,notifyDescription});

                
                const responseUplodPhotos = await apiRequest.post('/postadd/rental-house/upload', formPhoto, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    params: {
                        post_ID: res.data.post_ID // Pass post_ID as a query parameter
                    }
                });

                console.log(responseUplodPhotos);

            }catch(err){
                console.log(err);
            }
           


        }
    
        setValidated(true);
     
    }

    return (
        <div className="rentalhouse">
            <NavBar />
            <Container style={{ marginTop: '60px', backgroundColor: '#FFFFFF', borderRadius: '5px' }}>
                <Row>
                    <Navbar style={{ color: 'Black', paddingLeft: '5px', paddingRight: '5px' }}>
                        <Nav className="me-auto">
                            <h6> <i class="bi bi-pencil-fill" style={{ color: '#FF3951', opacity: '0.9' }}></i>  Fill in the following Form</h6>
                        </Nav>
                        <Nav>
                            <h6> <i class="bi bi-house-add-fill" style={{ color: '#FF3951', opacity: '0.9', fontSize: '25px' }}></i>   Rental House</h6>
                        </Nav>
                    </Navbar>
                    <hr className="mb-4" style={{ color: "#4D4D4D" }} />
                </Row>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridDistrict">
                            <Form.Label>District</Form.Label>
                            <Form.Select defaultValue="Colombo" name="district" required>
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
                            <Form.Control.Feedback type="invalid">Please Select a District</Form.Control.Feedback>
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridSize">
                            <Form.Label>House Size <small className="text-muted"> *in sq.ft</small></Form.Label>
                            <Form.Control type="number" placeholder='100' min='0' required  name='housesize'/>
                            <Form.Control.Feedback type="invalid">Please Enter a House Size</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridNumber">
                            <Form.Label>Number of Rooms</Form.Label>
                            <Form.Control type='number' placeholder='5' min='0' required name='no_rooms'/>
                            <Form.Control.Feedback type="invalid">Please Enter number of Rooms</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridBed">
                            <Form.Label>Number of Beds</Form.Label>
                            <Form.Control type="number" placeholder='100' min='0' required name='no_beds'/>
                            <Form.Control.Feedback type="invalid">Please Enter number of Beds</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridBed">
                            <Form.Label>Number of Bath Rooms</Form.Label>
                            <Form.Control type="number" placeholder='100' min='0' required name='no_bath'/>
                            <Form.Control.Feedback type="invalid">Please Enter number of Bath Rooms</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridBed">
                            <Form.Label>Kitchen</Form.Label>
                            <Form.Select defaultValue={0} required name='kitchen'>
                                <option value="0">No</option>
                                <option value="1">Yes</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">Please Choose a Option</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group as={Col} controlId="formGridPrice">
                            <Form.Label>Price <small className='text-muted'>*Rs:</small></Form.Label>
                            <Form.Control type="number" placeholder='10000' min='0' required name='price'/>
                            <Form.Control.Feedback type="invalid">Please Enter a Price</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridFurniture">
                            <Form.Label>Furniture Status</Form.Label>
                            <Form.Select defaultValue={0} required name='furnitureStatus'>
                                <option value="0">No</option>
                                <option value="1">Yes</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">Please Enter a Price</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className='mb-3'>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Description about your post" name='description' required />
                            <Form.Control.Feedback type="invalid">Please Enter your Description</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <hr className="mb-4" style={{ color: "#4D4D4D" }} />

                    <Row className='mb-3'>
                        <h6 className="text-center ">Insert Boarding Images</h6>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Rental House Image</Form.Label>
                            <Form.Control type="file" name='rentalHouse_Image' required/>
                            <Form.Control.Feedback type="invalid">Please add a House Image</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Room 1 Image</Form.Label>
                            <Form.Control type="file" name='room1_Image' />
                        </Form.Group>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Room 2 Image</Form.Label>
                            <Form.Control type="file" name='room2_Image' />
                        </Form.Group>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Room 3 Image</Form.Label>
                            <Form.Control type="file" name='room3_Image' />
                        </Form.Group>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Bed Image</Form.Label>
                            <Form.Control type="file" name='bed_Image'/>
                        </Form.Group>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Bath Room Image</Form.Label>
                            <Form.Control type="file" name='bath_Image'/>
                        </Form.Group>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Gate Image</Form.Label>
                            <Form.Control type="file" name='gate_Image'/>
                        </Form.Group>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Kitchen Image</Form.Label>
                            <Form.Control type="file" name='kitchen_Image'/>
                        </Form.Group>
                        <Form.Group controlId="formFileMultiple" className="mb-3">
                            <Form.Label>Addtional Image</Form.Label>
                            <Form.Control type="file" name='additional_Image'/>
                        </Form.Group>
                    </Row>

                    <hr className="mb-4" style={{ color: "#4D4D4D" }} />

                    <Row className='mb-3'>
                        <h6 className="text-center ">Add your Boarding Location</h6>
                        <Form.Group className="mb-3" controlId="formGridAddress1" >
                            <Form.Label>Address Line 1</Form.Label>
                            <Form.Control placeholder="1234 Main St" name='addressLine1' required />
                            <Form.Control.Feedback type="invalid">Please Enter AddressLine 1</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGridAddress2" >
                            <Form.Label>Address Line 2</Form.Label>
                            <Form.Control placeholder="Apartment,studio or floor" name='addressLine2' required />
                            <Form.Control.Feedback type="invalid">Please Enter AddressLine 2</Form.Control.Feedback>
                        </Form.Group>
                    </Row>

                    <hr className="mb-4" style={{ color: "#4D4D4D" }} />

                    <Row >
                        <h6 className="text-center ">Your Details</h6>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Bhanuka Ekanayaka" readOnly />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder={currentUser.Email} readOnly />
                        </Form.Group>

                        <Form.Group className="mb-3" controlID="formMobileNumber">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="text" placeholder="0767454068" required  onChange={handleChange}  isInvalid={!isValid} maxLength={10}/>
                            <Form.Control.Feedback type="invalid">Please Enter valid Phone Number</Form.Control.Feedback>
                        </Form.Group>

                    </Row>

                    <Button variant="primary" type="submit" style={{ marginBottom: '5px', marginRight: '5px' }} >
                        Submit
                    </Button>
                </Form>
            </Container>
            <Footer />
        </div>
    );
}

export default RentalHouse;