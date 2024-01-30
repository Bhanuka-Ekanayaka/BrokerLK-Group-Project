
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { FaUserEdit,FaSave } from "react-icons/fa";
import DisplayDetail from './DisplayDetails';
import EditDisplay from './EditDisplay';
import { useState } from 'react';


const DeatailPanel = () => {

    const [showEdit,setShowEdit]=useState(true);

    const showDeatils = ()=>{
        setShowEdit(false);
    }

    const showEdits =()=>{
        setShowEdit(true);
    }
    return (
        <>
            <div className='d-flex'>
                <Card style={{ width: '18rem', backgroundColor: '#FF3951' }}>

                    <ListGroup variant="flush">
                        <ListGroup.Item>Full Name</ListGroup.Item>
                        <ListGroup.Item>Email</ListGroup.Item>
                        <ListGroup.Item>Address</ListGroup.Item>
                        <ListGroup.Item>Country</ListGroup.Item>
                        <ListGroup.Item>Mobile</ListGroup.Item>
                        <ListGroup.Item>Telephone</ListGroup.Item>
                    </ListGroup>
                </Card>
               
                {showEdit ? <DisplayDetail showDeatils={showDeatils}/>:<EditDisplay showEdits={showEdits}/>}
               
                   
                
            </div>
        </>
    );
}

export default DeatailPanel;