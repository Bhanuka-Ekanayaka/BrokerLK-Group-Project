import React from 'react'
import './Otpinput.css'
import ImageComponent from './ImageComponent';
import { button } from 'bootstrap';



export default function Otpinput() {
  return (
    <div className='con d-flex justify-content-center align-items-center min-vh-100'>
      <div className='oc1'>
        <div className='c1'>
            <h2>Almost There</h2>
            <br></br>
            <p>Please enter the 6-digit code sent to your <br/>
email contact.uiuxexperts@gmail.com for <br></br>verification.
            </p><div style={{ height: '20vh' }}></div>
           
            <div className="d-flex justify-content-center align-items-center" style={{ height: '30px' }}>
                <button  className="custom-button custom-button-danger  ">Verify</button>
            </div>
            <div  className=" justify-content-center align-items-center">
                <p className='op1'>Didn’t receive any code? Resend Again</p>
                <p className='op2'>Request new code in </p>
            </div>
            
        </div>
        
        <div className='c2'><ImageComponent /></div>
      </div>
    </div>
  )
}
