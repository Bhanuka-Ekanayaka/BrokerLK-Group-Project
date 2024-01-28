import React from 'react';
import Image from './Welcomeimage/welcome.jpg';
import './welcome.css';
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100'>
         <div className='wd1'> 
            <div className='wd2'>
                <h1 className='wh1'>Welcome to home!</h1>
            </div>
            <div className='wd3'>
                <img className='wi1' src={Image} alt="welcome image"></img>
                <div className='wd4'>
                    <Link to='../Login' className='wl1'>
                        <FaArrowCircleRight  className='iconwa'  style={{ height: '35px', width: '35px', color:'black' } }/>
                    </Link>
                </div>
            </div>
           
             
        </div>     
    </div>
  )
}
