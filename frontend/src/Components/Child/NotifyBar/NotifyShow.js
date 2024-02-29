import Container from "react-bootstrap/esm/Container";
import Img from './Image/profile.png';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";
import { useEffect } from "react";




const NotifyShow = ({ mynotify,markasread,deleteNotify}) => {

    useEffect(()=>{

    },[mynotify])


    return (
        <>
            <div className="custom-notfycomponent" >
                <Container>

                    <Row className="my-1">
                        {Array.isArray(mynotify) && mynotify.map(detail => (
                            <div className="mark-read" style={{ backgroundColor: detail.mark_as_read === 0 ? '#CCCCCC' : '#F8F9FA' }} key={detail.notify_id}>
                                <Col lg={3}>
                                    <Image src={Img} className="custom-image-sidebar mx-auto" roundedCircle></Image>
                                </Col>
                                <Col lg={9}>
                                    <div>
                                        <p style={{ marginBottom: '0', fontSize: '11px' }} className="text-muted d-flex justify-content-end ">{detail.date} {detail.time}</p>
                                        <p className="text-muted" style={{ marginBottom: '0' }}><small>{detail.description}</small></p>
                                    </div>
                                    <div className="notify-tools">
                                        {detail.mark_as_read === 0 ?
                                            <Button size='sm' variant="danger" className="mx-1" onClick={(e) => markasread(detail.notify_id)}>Mark as Read</Button>
                                            :
                                            <div></div>
                                        }
                                        <button onClick={(e)=>deleteNotify(detail.notify_id)}><div className="mx-1">  <i class="bi bi-trash2-fill"></i></div></button>
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