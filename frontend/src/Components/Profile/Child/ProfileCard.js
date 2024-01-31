import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import img1 from '../../Child/NavBar/assets/1.jpg';
import DeatailPanel from './DeatailPanel';
import { useState } from 'react';


const ProfileCard = () => {


    return (
        <div className='ProfileCard-details'>
            <Card style={{ width: '18rem' }} className='custom-card'>

                <Card.Body>
                    <Card.Img variant="top" className='rounded-circle' src={img1} />
                    <Card.Title className='text-center custom-text'>Bhanuka Ekanayaka</Card.Title>
                    <Card.Subtitle className="mb-2 text-center custom-address">Ambaruppa,Harankahawa,Kandy</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-center custom-address">Sri Lanka</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-center custom-email">epbhanuka98@gmail.com</Card.Subtitle>
                    <div className="d-flex justify-content-around">
                        <Button variant="primary" className='btn-sm' href='/login'>Log Out</Button>
                        <Button variant="primary" className='btn-sm' href='/#'>Change Password</Button>
                    </div>
                </Card.Body>
            </Card>
        <DeatailPanel></DeatailPanel>
        </div>
    );
}

export default ProfileCard;