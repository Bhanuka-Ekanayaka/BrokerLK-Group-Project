import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../Card/Card';
import './autolayout.css';
import img1 from './CardImage/b1.jpg';

export default function AutoLayout() {
  return (
    <Container className='ac1'>
        <Row className='ar1'>
            <Col lg={3} md={4} sm = {6} className = 'ca1'><Card al='image' image={img1} /></Col>
            <Col lg={3} md={4} sm = {6} className = 'ca1'><Card al='image' image={img1}/></Col>
            <Col lg={3} md={4} sm = {6} className = 'ca1'><Card al='image' image={img1}/></Col>
            <Col lg={3} md={4} sm = {6} className = 'ca1'><Card al='image' image={img1}/></Col>
        </Row>
        
    </Container>
  )
}
