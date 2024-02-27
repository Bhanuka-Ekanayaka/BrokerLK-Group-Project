import React from 'react';
import NavBar from '../Child/NavBar/NavBar';
import Footer from '../Child/Footer/Footer';
import './Sdescription.css';
import Sshow from './Sshow';
import  { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cdescription() {
  const [boardingHouseData, setBoardingHouseData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the backend API endpoint that serves boarding house data
        const response = await axios.get('/description/boarding-room');
        // Update state with the fetched data
        setBoardingHouseData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

      fetchData();
  }, []);
  return (
    <div>
        <NavBar/>
        <div className='Dd1'>
            <div className='Dd2' style={{height: 'auto'}}>
                <Sshow/>
            </div>
            <div className='Dd3' >
                <br/>
                <h1>Name of the boarding house</h1>
                <p className='Dp1'>Boarding Type:<br/>Monthly Fee:<br/>Number of rooms:<br/>Number of Barth Rooms:</p>
                <h3><br/>Description:</h3>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
