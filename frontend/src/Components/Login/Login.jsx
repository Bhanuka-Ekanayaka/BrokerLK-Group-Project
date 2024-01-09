import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Login.css'; 
import './LoginAssets/image.png'
import image from './LoginAssets/image.png'
import google from './LoginAssets/google.png'
import { FaUser, FaLock, FaSignInAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

const Login = () => {

  const { login } = useAuth();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleLogin = () => {
    login(formData);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 bg-white shadow box-area">
        <div className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box" style={{ background: '#FF3951' }}>
          <div className="featured-image mb-3">
            <img src={image} className="img-fluid" style={{ width: '250px' }} alt="Logo" />
          </div>
          <p className="text-white fs-2" style={{ fontFamily: 'Courier New', fontWeight: 600 }}>realBROKER</p>
          <strong><small className="text-white text-wrap text-center" style={{ width: '17rem', fontFamily: 'Courier New' }}>Create and Sell Your Rooms <br></br>Adopt The Boarding House</small></strong>
        </div>

        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <div className="header-text mb-4">
              <h2>Welcome Back</h2>
              <p>We are happy to have you back.</p>
            </div>
            <div className="input-group mb-3">
              <FaUser className='icon'/>
              <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })}/>
            </div>
            <div className="input-group mb-1">
              <FaLock className='icon'/>
              <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })}/>
            </div>
            <div className="input-group mb-5 d-flex justify-content-between">
              <div className="form-check">
                <FaSignInAlt className='icon1'/>
              </div>
              <div className="forgot">
                <small><a href="#">Forgot Password?</a></small>
              </div>
            </div>
            <div className="input-group mb-3">
              <button onClick={handleLogin} className="btn btn-lg btn-danger w-100 fs-6">Login</button>
            </div>
            <div className="input-group mb-3">
              <button className="btn btn-lg btn-light w-100 fs-6"><img src={google} style={{ width: '20px' }} className="me-2" alt="Google Icon" /><small>Sign In with Google</small></button>
            </div>
            <div className="row">
              <small>Don't have an account? <Link to='/register'>Sign Up</Link></small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;