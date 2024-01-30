import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaUserEdit } from "react-icons/fa";

const DisplayDetail = ({showDeatils}) => {
    return ( 
        <Card style={{ width: '50rem', backgroundColor: '#FF3951' }}  className="active-content-profile">

        <ListGroup variant="flush" style={{ backgroundColor: '#FF3951' }}>
            <ListGroup.Item>Bhanuka Ekanayaka</ListGroup.Item>
            <ListGroup.Item>epbhanuka98@gmail.com</ListGroup.Item>
            <ListGroup.Item>Pussegoda,Ambaruppa,Harankahawa,Kandy</ListGroup.Item>
            <ListGroup.Item>Sri Lanka</ListGroup.Item>
            <ListGroup.Item>076-7454068</ListGroup.Item>
            <ListGroup.Item>081-2325678</ListGroup.Item>
        </ListGroup>

        <Button onClick={showDeatils}><FaUserEdit></FaUserEdit></Button>
    </Card>
     );
}
 
export default DisplayDetail;