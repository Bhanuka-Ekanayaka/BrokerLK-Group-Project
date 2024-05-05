import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { apiRequest } from '../../lib/apiRequest';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {

    const {updateUser} = useContext(AuthContext)
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
         const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }else{
            const formData = new FormData(e.target)
            const inputs = Object.fromEntries(formData);
            console.log(inputs)
            try {
                const user = await apiRequest.post('/auth/logins', inputs);
                console.log("Response Data",user.data);
                updateUser(user.data);
                navigate("/");
            } catch (err) {
                console.log(err);
            }
        }
       
        setValidated(true);
    }

    return (
        <div className="loginpage">
            <div className="loginwrapper border" >
                <div className="login-left">
                    <div className="description">
                        <h1>Your home away from home, at your fingertips</h1>
                        <p>Welcome to Broker.lk , your one -stop shop  for boarding accommodations.
                            Whether you are a university student or a working person, we are here to
                            make your stay unforgettable.</p>
                        <img src="/houserent.png" alt="" />
                        <div className='sign-up'>
                            <h2>Don’t you have an account ?</h2>
                            <Link to="/register"><span>SIGN UP</span></Link>
                        </div>
                    </div>
                </div>
                <div className="login-right">
                    <div className="login-wrapper">
                        <div className="signtitle">
                            <img src="/favicon.png" alt="" />
                            <span>Broker.lk</span>
                        </div>

                        <div className="formelementssign">
                            <Form style={{ width: '100%' }} noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" required />
                                    <Form.Control.Feedback>Please Enter Your Email Address</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password" required />
                                    <Form.Control.Feedback>Please Enter Your Password</Form.Control.Feedback>
                                </Form.Group>

                                <Button variant="danger" type="submit">Log in</Button>
                            </Form>

                        </div>


                        <div className="sign-button">

                            <hr style={{ width: "100%" }} />

                            <InputGroup className="mb-3 d-flex justify-center">
                                <InputGroup.Text id="basic-addon1"><img src="/google.jpg" alt="" /></InputGroup.Text>
                                <Button variant="danger">
                                    Create Using My Google Account
                                </Button>
                            </InputGroup>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;