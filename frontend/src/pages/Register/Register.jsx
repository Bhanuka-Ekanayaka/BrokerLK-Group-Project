import { Alert, Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import './registerpage.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { apiRequest } from '../../lib/apiRequest';

const RegisterPage = () => {

    const [validated, setValidated] = useState(false);
    const [value, setValue] = useState(false);
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const showAlert = () => {
        setTimeout(() => {
            setShow(false);
            navigate("/login");
        }, 2000)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            const formData = new FormData(e.target);
            const inputs = Object.fromEntries(formData);

            if (inputs.password === inputs.repassword) {
                console.log(inputs);
                setValue(false);

                try {
                    const user = await apiRequest.post("/auth/register", inputs);
                    
                    if(user.data.success){
                        setShow(true);
                        showAlert();
                    }
                } catch(err) {
                    console.log(err);
                }

            } else {
                e.stopPropagation();
                setValue(true);
                setShow(false);
            }



        }

        setValidated(true);

    }


    return (
        <div className="registerPage " >
            <div className="registerwrapper border">
                <div className="regiterpagedescription">
                    <div className="title">
                        <img src="/favicon.png" alt="" />
                        <span>Broker.lk</span>
                    </div>
                    <div className="description">
                        <h1>What is the Broker.lk</h1>
                        <p>Find boarding place, apartments and more comprehensive search and filtering options. Read guest reviews, view high quality photos and compare prices to make informed decisions. Enjoy exclusive site to deals, discount and promotions. </p>
                        <img src="/regitercover.jpg" alt="" />
                    </div>
                </div>
                <div className="registerPageFormelements">
                    <div className="wrapper">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridFName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="First Name" name="fname" required />
                                    <Form.Control.Feedback>Please Enter Your First Name</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridLName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Last Name" name="lname" required />
                                    <Form.Control.Feedback>Please Enter Your Last Name</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="example@gmail.com" name="email" required />
                                <Form.Control.Feedback>Please Enter Your Email Address</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="password" name="password" required />
                                <Form.Control.Feedback>Please Enter Your Password</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridRePassword">
                                <Form.Label>Re-Enter Password</Form.Label>
                                <Form.Control type="password" placeholder="password" name="repassword" isInvalid={validated && value} required />
                                <Form.Control.Feedback type="invalid">Please Enter Same Password</Form.Control.Feedback>
                            </Form.Group>

                            <Button variant="danger" type="submit">
                                Create an Account
                            </Button>

                            <Link to="/login" className='mx-auto px-10'>Already Have an Account</Link>
                            <hr />
                        </Form>
                        <Form>
                            <InputGroup className="mb-3 d-flex justify-center">
                                <InputGroup.Text id="basic-addon1"><img src="/google.jpg" alt="" /></InputGroup.Text>
                                <Button variant="danger" type="submit">
                                    Create Using My Google Account
                                </Button>
                            </InputGroup>
                        </Form>
                        {show ? <Alert variant="danger" className='show-alert'>
                            <h2> You Are Succefully Registered😊! </h2>
                        </Alert> : <p></p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;