import Container from "react-bootstrap/esm/Container";
import Img from './Image/profile.png';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";


const NotifyShow = () => {
    return (
        <>
            <div className="custom-notfycomponent" >
                <Container>

                    <Row className="my-2" style={{ backgroundColor: '#F8F9FA' }}>
                        <div className="d-flex justify-content-around align-items-center" style={{ height: '100px', width: 'auto' }}>
                            <Col lg={4}>
                                <Image src={Img} className="custom-image-sidebar" roundedCircle></Image>
                            </Col>
                            <Col lg={8}>
                                <h8>Successfully Added your Add to the website.</h8>
                                <div className="notify-tools d-flex justify-content-end align-items-center">
                                    <Button size='sm' variant="danger">Mark as Read</Button>
                                    <div>  <i class="bi bi-trash2-fill"></i></div>
                                </div>
                            </Col>
                        </div>

                        <div className="d-flex justify-content-around align-items-center" style={{ height: '100px', width: 'auto' }}>
                            <Col lg={4}>
                                <Image src={Img} className="custom-image-sidebar"  roundedCircle></Image>
                            </Col>
                            <Col lg={8}>
                                <h8>Your add will be shown soon in website</h8>
                                <div className="notify-tools d-flex justify-content-end ">
                                    <Button size='sm' variant="danger">Mark as Read</Button>
                                    <div>  <i class="bi bi-trash2-fill"></i></div>
                                </div>
                            </Col>
                        </div>
                    </Row>

                </Container>
            </div>
        </>
    );
}

export default NotifyShow;