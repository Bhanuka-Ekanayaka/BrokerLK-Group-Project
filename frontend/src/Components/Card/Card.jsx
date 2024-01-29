import React from 'react';
import './card.css';
import Button from 'react-bootstrap/Button';
import card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Card() {
  return (
    <Container>
    <Row xs={1} md={2} lg={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <card style={{ width: '100%' }}>
            <card.Img variant="top" src="holder.js/100px180" />
            <card.Body>
              <card.Title>Card Title {idx + 1}</card.Title>
              <card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </card.Text>
              <Button variant="primary">Go somewhere</Button>
            </card.Body>
          </card>
        </Col>
      ))}
    </Row>
  </Container>
  )
}