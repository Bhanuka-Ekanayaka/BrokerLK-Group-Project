import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';


export default function Navbar() {
  return (
    
    <nav className='navbar'>
      <div className='container'>
        <div>
          
          <spam>Broker.lk</spam>
        </div>
        <div>
          <ul>
            <li ><Link className='nav-link' to="/login">Login</Link></li>
            <li>< Link className='nav-link' to ="/register">Registor</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
