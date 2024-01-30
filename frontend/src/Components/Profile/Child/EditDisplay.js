import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaSave } from "react-icons/fa";
import Form from 'react-bootstrap/Form';

const EditDisplay = ({showEdits}) => {
    return ( 
        <Card style={{ width: '50rem', backgroundColor: '#FF3951' }} >

        <ListGroup variant="flush" style={{ backgroundColor: '#FF3951' }}>
            <ListGroup.Item><Form.Control  type="text" placeholder="Enter Your Name" /></ListGroup.Item>
            <ListGroup.Item><Form.Control type="email" placeholder="Enter Email" /></ListGroup.Item>
            <ListGroup.Item><Form.Control placeholder="1234 Main St" /></ListGroup.Item>
            <ListGroup.Item><Form.Control type="text" placeholder="Enter Your Country" /></ListGroup.Item>
            <ListGroup.Item><Form.Control type="text" placeholder="Enter Your Number" /></ListGroup.Item>
            <ListGroup.Item><Form.Control type="text" placeholder="Enter Your Number" /></ListGroup.Item>
        </ListGroup>
        <Button onClick={showEdits}><FaSave></FaSave></Button>
    </Card>
     );
}
 
export default EditDisplay;