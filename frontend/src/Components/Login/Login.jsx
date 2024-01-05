import React from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Validation from './LoginValidation'

import image from '../Login/LoginAssets/image.png'

import { FaLock, FaSignInAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md";


const Login = () => {

    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/login', values)
            .then(res => {
              if(res.data === "success") {
                navigate('/home')
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
    <div className='loginPage flex'>
      <div className='container flex'>

        <div className='videoDiv'>
          <img src={image}></img>
          <div className='textDiv'>
            <h2 className='title'>Create and Sell Your Rooms</h2>
            <p><strong>Adopt The Boarding House</strong></p>
          </div>

          <div className='footerDiv flex'>
            <span className='text'><strong>Don't have an Account?</strong></span>
            <Link to={'./register'} className='signBtn'>
              <button className='btn'><strong>Sign Up</strong></button>
            </Link>
          </div>
        </div>

        <div className='formDiv flex'>
          <div className='headerDiv'>
            <img src='' alt='Logo Image' />
            <h3>Welcome To realBROKER</h3>
          </div>

          <form action='POST' className='form grid' onSubmit={handleSubmit}>
            <div className='inputDiv'>
              <label htmlFor='email'><strong>Email</strong></label>
              <div className='input flex'>
                <MdEmail className='icon' />
                <input type='text' id='email' name='email' placeholder='Enter Email' onChange={handleInput}></input>
                {errors.email && <span className='text-danger'>{errors.email}</span>}
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
              <span><strong>Login</strong></span>
              <FaSignInAlt className='icon' />
            </button>

            <span className='forgotPassword'>
              Forgot Your Password?  <a href=''>Click Here</a>
            </span>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Login 