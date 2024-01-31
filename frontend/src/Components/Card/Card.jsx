import React from 'react';
import './card.css';
import Button from 'react-bootstrap/Button';
import card from 'react-bootstrap/Card';



export default function Card({al,image}) {
  return (
    <card  style={{ width: '18rem' }}>
      <card.Img variant="top" src={image}  alt={al}/>
      <card.Body>
        <card.Title>Card Title</card.Title>
        <card.Text className='ct1'>
          Distance to nearest town 2Km <br/>
          Type - Bording room<br/>
          For Boys
        </card.Text>
        <Button className='cb1' variant="primary">More Details...</Button>
      </card.Body>
    </card>
  )
}