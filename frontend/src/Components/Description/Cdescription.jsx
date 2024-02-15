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
            <div className='Dd2'>
                <Sshow/>
            </div>
            <h1>Name of the boarding house</h1>
        </div>
        <Footer/>
    </div>
  )
}
