import React from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Validation from './RegisterValidation'

import image from '../Login/LoginAssets/image.png'

import { FaUser, FaLock, FaSignInAlt } from "react-icons/fa"
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const Register = () => {

    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({
        name :'',
        mobile :'',
        email: '',
        password: ''
    })
    const navigate = useNavigate()
  
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.name === "" && errors.mobile === "" && errors.email === "" && errors.password === "" ){
            axios.post('http://localhost:8081/register', values)
            .then(res => {
              if(res.data.Status === "success") {
                navigate('/login')
              } else {
                alert("No Record Existed")
              }
            })
            .catch(err => console.log(err))
          }
    }
    
    const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
    }

  return (
    <div className='registerPage flex'>
      <div className='container flex'>

        <div className='videoDiv'>
          <img src={image} ></img>
          <div className='textDiv'>
            <h2 className='title'>Create and Sell Your Rooms</h2>
            <p><strong>Adopt The Boarding House</strong></p>
          </div>

          <div className='footerDiv flex'>
            <span className='text'><strong>Already a member?</strong></span>
            <Link to={'/'} className='signBtn'>
              <button className='btn'><strong>Login</strong></button>
            </Link>
          </div>
        </div>

        <div className='formDiv flex'>
          <div className='headerDiv'>
            <img src='' alt='Logo Image' />
            <h3>Let Us Know You</h3>
          </div>

          <form action='' className='form grid' onSubmit={handleSubmit}>

          <div className='inputDiv'>
              <label htmlFor='name'><strong>Full Name</strong></label>
              <div className='input flex'>
                <FaUser className='icon' />
                <input type='text' id='name' name='name' placeholder='Enter Full Name' onChange={handleInput}></input>
                {errors.name && <span className='text-danger'>{errors.name}</span>}
              </div>
            </div>

            <div className='inputDiv'>
              <label htmlFor='email'><strong>Email</strong></label>
              <div className='input flex'>
                <MdEmail className='icon' />
                <input type='text' id='email' name='email' placeholder='Enter Email' onChange={handleInput}></input>
                {errors.email && <span className='text-danger'>{errors.email}</span>}
              </div>
            </div>

            <div className='inputDiv'>
              <label htmlFor='mobile'><strong>Phone Number</strong></label>
              <div className='input flex'>
                <FaMobileScreenButton className='icon' />
                <input type='text' id='mobile' name='mobile' placeholder='Enter Mobile Number' onChange={handleInput}></input>
                {errors.mobile && <span className='text-danger'>{errors.mobile}</span>}
              </div>
            </div>

            <div className='inputDiv'>
              <label htmlFor='password'><strong>Password</strong></label>
              <div className='input flex'>
                <FaLock className='icon' />
                <input type='password' id='password' name='password' placeholder='Enter Password' onChange={handleInput}></input>
                {errors.password && <span className='text-danger'>{errors.password}</span>}
              </div>
            </div>

            <button type='submit' className='btn flex'>
              <span><strong>Register</strong></span>
              <FaSignInAlt className='icon' />
            </button>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Register