import Container from "react-bootstrap/esm/Container";
import Img from './Image/profile.png';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";
import { useEffect, useState } from "react";
import axios from "axios";

const NotifyShow = () => {

    const username = '3';
    const [mynotify,setMyNotify]=useState([]);


    useEffect(() => {
        const fetchNotifyData = async (username) => {
            try {
                const response = await axios.get(`http://localhost:5001/notification/details/${username}`);
                setMyNotify(response.data.result[0]);
                
            } catch (err) {
                console.log('cannot fetch the notification data' + err);
            }
        }
        fetchNotifyData(username);
    }, [username])
  
    return (
        <>
            <div className="custom-notfycomponent" >
                <Container>

                    <Row className="my-2" style={{ backgroundColor: '#F8F9FA' }}>
                        {Array.isArray(mynotify) && mynotify.map(detail => (
                            <div className="d-flex justify-content-around align-items-center" style={{ height: '100px', width: 'auto' }} key={detail.notify_id}>
                                <Col lg={4}>
                                    <Image src={Img} className="custom-image-sidebar" roundedCircle></Image>
                                </Col>
                                <Col lg={8}>
                                    <h8>{detail.description}</h8>
                                    <div className="notify-tools d-flex justify-content-end ">
                                        <Button size='sm' variant="danger">Mark as Read</Button>
                                        <div>  <i class="bi bi-trash2-fill"></i></div>
                                    </div>
                                </Col>
                            </div>
                        ))}
                    </Row>

                </Container>
            </div>
        </>
    );
}

export default NotifyShow;