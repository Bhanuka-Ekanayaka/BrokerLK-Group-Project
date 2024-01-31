import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../Register/Register.css'
import image from '../Login/LoginAssets/image.png'
import { FaUser, FaLock, FaMobileAlt, FaAddressCard, FaUserEdit } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import {Registerform} from '../../Services/authServices'
import { showSuccessToast, showErrorToast, CommonToastContainer } from '../../Services/CommonToaster';


const Register = () => {

  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: '',

  });

  const handleRegister = async() => {

    try{
    const result =  await Registerform(formData);

    if(result.status === 201){
      showSuccessToast('succesfully Registred')
    }else{
      console.log('fail')
      showErrorToast('Oops! Something went wrong.');
    }
    }catch(error){
      console.error(error);
      showErrorToast('Try Again.');
    }
  };


  const handleSelectChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            <div className="header mb-4">
              <h2>Welcome Back</h2>
              <p>We are happy to have you back</p>
            </div>
            <div className="input-group mb-3">
              <MdEmail className='icon'/>
              <input type="email" className="form-control form-control-lg bg-light fs-6" name='email' placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
            </div>
            <div className="input-group mb-1">
              <FaLock className='icon'/>
              <input type="password" className="form-control form-control-lg bg-light fs-6" name='password' placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })}/>
            </div>
            <div className="input-group mb-1">
              <FaLock className='icon'/>
              <input type="password" className="form-control form-control-lg bg-light fs-6" name='confirmPassword' placeholder="Confirm Password" onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}/>
            </div>
            <div className="input-group mb-3">
            <FaLock className="icon" />
            <select name='role' className="form-control form-control-lg bg-light fs-6" value={formData.role} onChange={handleSelectChange}>
              <option value="admin" className="form-control form-control-lg bg-light fs-6">
                Admin
              </option>
              <option value="owner" className="form-control form-control-lg bg-light fs-6">
                Owner
              </option>
              <option value="tenant" className="form-control form-control-lg bg-light fs-6">
                Tenant
              </option>
            </select>
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