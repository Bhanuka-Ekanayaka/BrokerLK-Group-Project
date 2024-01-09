import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Register.css'; 
import image from '../Login/LoginAssets/image.png'
import { FaUser, FaLock, FaMobileAlt, FaAddressCard, FaUserEdit } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import {Registerform} from '../../Services/authServices'
import { showSuccessToast, showErrorToast, CommonToastContainer } from '../../Services/CommonToaster';


const Register = () => {

  const { register } = useAuth();
  const [ formData, setFormData ] = useState({
    fullName: '',
    email: '',
    nic: '',
    mobileNumber: '',
    username: '',
    password: '',
  });

  const handleRegister = async() => {
    console.log('data', formData)
    try{
    const result =  await Registerform(formData);
      console.log('result are ', result)
    if(result.status === 201){
      showSuccessToast('succesfully Registred')
    }else{
      console.log('fail')
      showErrorToast('Oops! Something went wrong.');
    }
    }catch(error){
      showErrorToast('Try Again.');
    }
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
              <p>We are happy to have you back</p>
            </div>
            <div className="input-group mb-3">
              <FaUser className='icon'/>
              <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Full Name" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}/>
            </div>
            <div className="input-group mb-3">
              <MdEmail className='icon'/>
              <input type="email" className="form-control form-control-lg bg-light fs-6" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
            </div>
            <div className="input-group mb-3">
              <FaAddressCard className='icon'/>
              <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="NIC" value={formData.nic} onChange={(e) => setFormData({ ...formData, nic: e.target.value })}/>
            </div>
            <div className="input-group mb-3">
              <FaMobileAlt className='icon'/>
              <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Mobile" onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}/>
            </div>
            <div className="input-group mb-3">
              <FaUserEdit className='icon'/>
              <input type="text" className="form-control form-control-lg bg-light fs-6" placeholder="Username" onChange={(e) => setFormData({ ...formData, username: e.target.value })}/>
            </div>
            <div className="input-group mb-1">
              <FaLock className='icon'/>
              <input type="password" className="form-control form-control-lg bg-light fs-6" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })}/>
            </div>
            <div className="input-group mb-3">
              <button onClick={handleRegister} className="btn btn-lg btn-danger w-100 fs-6">Sign Up</button>
            </div>
            <div className="row">
                <small>Already have an account? <Link to='/login'>Login</Link></small>
            </div>
          </div>
        </div>
      </div>
      <CommonToastContainer/> 
    </div>
  );
};

export default Register;