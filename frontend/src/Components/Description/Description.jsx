import React from 'react';
import NavBar from '../Child/NavBar/NavBar';
import Footer from '../Child/Footer/Footer';
import DeCard from './DeCard';

export default function Description() {
  return (
    <div>
        <NavBar/>
        
        <DeCard/>
        <Footer animation="flip-right"/>
    </div>
  )
}
