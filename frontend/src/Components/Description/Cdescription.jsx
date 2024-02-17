import React from 'react';
import NavBar from '../Child/NavBar/NavBar';
import Footer from '../Child/Footer/Footer';
import './Sdescription.css';
import Sshow from './Sshow';

export default function Cdescription() {
  return (
    <div>
        <NavBar/>
        <div className='Dd1'>
            <div className='Dd2' style={{height: 'auto'}}>
                <Sshow/>
            </div>
            <div className='Dd3' >
                <br/>
                <h3>Name of the boarding house</h3>
                <p className='Dp1'>Boarding Type:<br/>Monthly Fee:<br/>Number of rooms:<br/>Number of Barth Rooms:</p>
                <h3><br/>Description:</h3>
            </div>
        </div>
        <Footer animation="flip-right"/>
    </div>
  )
}
