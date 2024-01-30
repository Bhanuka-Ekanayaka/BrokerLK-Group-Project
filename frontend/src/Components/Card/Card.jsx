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
        <card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </card.Text>
        <Button className='cb1' variant="primary">Go somewhere</Button>
      </card.Body>
    </card>
  )
}