import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Img from './Assets/house.jpg';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaBath } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";
import { FaKitchenSet } from "react-icons/fa6";

const HorizontalCard = () => {
    return (
        <section className="new-card">
            <Container>
                <Card data-aos='fade-up'>
                    <Card.Img variant="top" src={Img} />
                    <Card.Body>
                        <div className='d-flex align-items-center justify-content-between'>
                            <Card.Title>Card Title</Card.Title>
                            <div className='d-flex'>
                                <div className='p-2 ' ><div className='candp'style={{backgroundColor:'#8A3DFD'}}><i class="bi bi-geo-alt"></i> Kurunegala</div></div>
                                <div className='p-2 '><div className='candp' style={{backgroundColor:'green'}}><i class="bi bi-tag"></i> RS:5000</div></div>
                                <Card.Link className='p-2 starmark'> <h2><i class="bi bi-bookmark-star-fill"></i></h2></Card.Link>
                            </div>
                        </div>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <div>
                            <Row>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex align-items-center'><i class="bi bi-people"></i> <div className='available-numbers'>3</div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><FaBath className='p-1' style={{fontSize:'35px'}}/> <div className='available-numbers'>2</div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><i class="bi bi-bounding-box"></i><div className='available-numbers'>15<small className='text-muted'>sq.ft</small></div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><IoCarSportSharp className='p-1 ' style={{fontSize:'35px'}}/> <div className='available-numbers'>1</div></h3>
                                </Col>
                                <Col sm={6} md={2} >

                                    <h3 className='p-2 d-flex  align-items-center'><FaKitchenSet className='p-1' style={{fontSize:'35px'}}/> <div className='available-numbers'>1</div></h3>
                                </Col>
                            </Row>
                        </div>
                        <div className='d-flex justify-content-end show-btn'>
                            <Button variant="primary">Read More <i class="bi bi-arrow-right-circle-fill"></i></Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card data-aos="fade-up">
                    <Card.Img variant="top" src={Img} />
                    <Card.Body>
                        <div className='d-flex align-items-center justify-content-between'>
                            <Card.Title>Card Title</Card.Title>
                            <div className='d-flex'>
                                <div className='p-2 ' ><div className='candp'style={{backgroundColor:'#8A3DFD'}}><i class="bi bi-geo-alt"></i> Kurunegala</div></div>
                                <div className='p-2 '><div className='candp' style={{backgroundColor:'green'}}><i class="bi bi-tag"></i> RS:5000</div></div>
                                <Card.Link className='p-2 starmark'> <h2><i class="bi bi-bookmark-star-fill"></i></h2></Card.Link>
                            </div>
                        </div>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <div>
                            <Row>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex align-items-center'><i class="bi bi-people"></i> <div className='available-numbers'>3</div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><FaBath className='p-1' style={{fontSize:'35px'}}/> <div className='available-numbers'>2</div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><i class="bi bi-bounding-box"></i><div className='available-numbers'>15<small className='text-muted'>sq.ft</small></div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><IoCarSportSharp className='p-1 ' style={{fontSize:'35px'}}/> <div className='available-numbers'>1</div></h3>
                                </Col>
                                <Col sm={6} md={2} >

                                    <h3 className='p-2 d-flex  align-items-center'><FaKitchenSet className='p-1' style={{fontSize:'35px'}}/> <div className='available-numbers'>1</div></h3>
                                </Col>
                            </Row>
                        </div>
                        <div className='d-flex justify-content-end show-btn'>
                            <Button variant="primary">Read More <i class="bi bi-arrow-right-circle-fill"></i></Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card data-aos="fade-up">
                    <Card.Img variant="top" src={Img} />
                    <Card.Body>
                        <div className='d-flex align-items-center justify-content-between'>
                            <Card.Title>Card Title</Card.Title>
                            <div className='d-flex'>
                                <div className='p-2 ' ><div className='candp'style={{backgroundColor:'#8A3DFD'}}><i class="bi bi-geo-alt"></i>Kurunegala</div></div>
                                <div className='p-2 '><div className='candp' style={{backgroundColor:'green'}}><i class="bi bi-tag"></i> RS:5000</div></div>
                                <Card.Link className='p-2 starmark'> <h2><i class="bi bi-bookmark-star-fill"></i></h2></Card.Link>
                            </div>
                        </div>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <div>
                            <Row>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex align-items-center'><i class="bi bi-people"></i> <div className='available-numbers'>3</div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><FaBath className='p-1' style={{fontSize:'35px'}}/> <div className='available-numbers'>2</div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><i class="bi bi-bounding-box"></i><div className='available-numbers'>15<small className='text-muted'>sq.ft</small></div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><IoCarSportSharp className='p-1 ' style={{fontSize:'35px'}}/> <div className='available-numbers'>1</div></h3>
                                </Col>
                                <Col sm={6} md={2} >

                                    <h3 className='p-2 d-flex  align-items-center'><FaKitchenSet className='p-1' style={{fontSize:'35px'}}/> <div className='available-numbers'>1</div></h3>
                                </Col>
                            </Row>
                        </div>
                        <div className='d-flex justify-content-end show-btn'>
                            <Button variant="primary">Read More <i class="bi bi-arrow-right-circle-fill"></i></Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card data-aos="fade-up">
                    <Card.Img variant="top" src={Img} />
                    <Card.Body>
                        <div className='d-flex align-items-center justify-content-between'>
                            <Card.Title>Card Title</Card.Title>
                            <div className='d-flex'>
                                <div className='p-2 ' ><div className='candp'style={{backgroundColor:'#8A3DFD'}}><i class="bi bi-geo-alt"></i>Kurunegala</div></div>
                                <div className='p-2 '><div className='candp' style={{backgroundColor:'green'}}><i class="bi bi-tag"></i> RS:5000</div></div>
                                <Card.Link className='p-2 starmark'> <h2><i class="bi bi-bookmark-star-fill"></i></h2></Card.Link>
                            </div>
                        </div>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <div>
                            <Row>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex align-items-center'><i class="bi bi-people"></i> <div className='available-numbers'>3</div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><FaBath className='p-1' style={{fontSize:'35px'}}/> <div className='available-numbers'>2</div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><i class="bi bi-bounding-box"></i><div className='available-numbers'>15<small className='text-muted'>sq.ft</small></div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><IoCarSportSharp className='p-1 ' style={{fontSize:'35px'}}/> <div className='available-numbers'>1</div></h3>
                                </Col>
                                <Col sm={6} md={2} >

                                    <h3 className='p-2 d-flex  align-items-center'><FaKitchenSet className='p-1' style={{fontSize:'35px'}}/> <div className='available-numbers'>1</div></h3>
                                </Col>
                            </Row>
                        </div>
                        <div className='d-flex justify-content-end show-btn'>
                            <Button variant="primary">Read More <i class="bi bi-arrow-right-circle-fill"></i></Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card data-aos="fade-up">
                    <Card.Img variant="top" src={Img} />
                    <Card.Body>
                        <div className='d-flex align-items-center justify-content-between'>
                            <Card.Title>Card Title</Card.Title>
                            <div className='d-flex'>
                                <div className='p-2 ' ><div className='candp'style={{backgroundColor:'#8A3DFD'}}><i class="bi bi-geo-alt"></i>Kurunegala</div></div>
                                <div className='p-2 '><div className='candp' style={{backgroundColor:'green'}}><i class="bi bi-tag"></i> RS:5000</div></div>
                                <Card.Link className='p-2 starmark'> <h2><i class="bi bi-bookmark-star-fill"></i></h2></Card.Link>
                            </div>
                        </div>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <div>
                            <Row>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex align-items-center'><i class="bi bi-people"></i> <div className='available-numbers'>3</div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><FaBath className='p-1' style={{fontSize:'35px'}}/> <div className='available-numbers'>2</div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><i class="bi bi-bounding-box"></i><div className='available-numbers'>15<small className='text-muted'>sq.ft</small></div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><IoCarSportSharp className='p-1 ' style={{fontSize:'35px'}}/> <div className='available-numbers'>1</div></h3>
                                </Col>
                                <Col sm={6} md={2} >

                                    <h3 className='p-2 d-flex  align-items-center'><FaKitchenSet className='p-1' style={{fontSize:'35px'}}/> <div className='available-numbers'>1</div></h3>
                                </Col>
                            </Row>
                        </div>
                        <div className='d-flex justify-content-end show-btn'>
                            <Button variant="primary">Read More <i class="bi bi-arrow-right-circle-fill"></i></Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card data-aos="fade-up">
                    <Card.Img variant="top" src={Img} />
                    <Card.Body>
                        <div className='d-flex align-items-center justify-content-between'>
                            <Card.Title>Card Title</Card.Title>
                            <div className='d-flex'>
                                <div className='p-2 ' ><div className='candp'style={{backgroundColor:'#8A3DFD'}}><i class="bi bi-geo-alt"></i>Kurunegala</div></div>
                                <div className='p-2 '><div className='candp' style={{backgroundColor:'green'}}><i class="bi bi-tag"></i> RS:5000</div></div>
                                <Card.Link className='p-2 starmark'> <h2><i class="bi bi-bookmark-star-fill"></i></h2></Card.Link>
                            </div>
                        </div>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <div>
                            <Row>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex align-items-center'><i class="bi bi-people"></i> <div className='available-numbers'>3</div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><FaBath className='p-1' style={{fontSize:'35px'}}/> <div className='available-numbers'>2</div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><i class="bi bi-bounding-box"></i><div className='available-numbers'>15<small className='text-muted'>sq.ft</small></div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><IoCarSportSharp className='p-1 ' style={{fontSize:'35px'}}/> <div className='available-numbers'>1</div></h3>
                                </Col>
                                <Col sm={6} md={2} >

                                    <h3 className='p-2 d-flex  align-items-center'><FaKitchenSet className='p-1' style={{fontSize:'35px'}}/> <div className='available-numbers'>1</div></h3>
                                </Col>
                            </Row>
                        </div>
                        <div className='d-flex justify-content-end show-btn'>
                            <Button variant="primary">Read More <i class="bi bi-arrow-right-circle-fill"></i></Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card data-aos="fade-up">
                    <Card.Img variant="top" src={Img} />
                    <Card.Body>
                        <div className='d-flex align-items-center justify-content-between'>
                            <Card.Title>Card Title</Card.Title>
                            <div className='d-flex'>
                                <div className='p-2 ' ><div className='candp'style={{backgroundColor:'#8A3DFD'}}><i class="bi bi-geo-alt"></i>Kurunegala</div></div>
                                <div className='p-2 '><div className='candp' style={{backgroundColor:'green'}}><i class="bi bi-tag"></i> RS:5000</div></div>
                                <Card.Link className='p-2 starmark'> <h2><i class="bi bi-bookmark-star-fill"></i></h2></Card.Link>
                            </div>
                        </div>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <div>
                            <Row>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex align-items-center'><i class="bi bi-people"></i> <div className='available-numbers'>3</div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><FaBath className='p-1' style={{fontSize:'35px'}}/> <div className='available-numbers'>2</div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><i class="bi bi-bounding-box"></i><div className='available-numbers'>15<small className='text-muted'>sq.ft</small></div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><IoCarSportSharp className='p-1 ' style={{fontSize:'35px'}}/> <div className='available-numbers'>1</div></h3>
                                </Col>
                                <Col sm={6} md={2} >

                                    <h3 className='p-2 d-flex  align-items-center'><FaKitchenSet className='p-1' style={{fontSize:'35px'}}/> <div className='available-numbers'>1</div></h3>
                                </Col>
                            </Row>
                        </div>
                        <div className='d-flex justify-content-end show-btn'>
                            <Button variant="primary">Read More <i class="bi bi-arrow-right-circle-fill"></i></Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card data-aos="fade-up">
                    <Card.Img variant="top" src={Img} />
                    <Card.Body>
                        <div className='d-flex align-items-center justify-content-between'>
                            <Card.Title>Card Title</Card.Title>
                            <div className='d-flex'>
                                <div className='p-2 ' ><div className='candp'style={{backgroundColor:'#8A3DFD'}}><i class="bi bi-geo-alt"></i>Kurunegala</div></div>
                                <div className='p-2 '><div className='candp' style={{backgroundColor:'green'}}><i class="bi bi-tag"></i> RS:5000</div></div>
                                <Card.Link className='p-2 starmark'> <h2><i class="bi bi-bookmark-star-fill"></i></h2></Card.Link>
                            </div>
                        </div>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <div>
                            <Row>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex align-items-center'><i class="bi bi-people"></i> <div className='available-numbers'>3</div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><FaBath className='p-1' style={{fontSize:'35px'}}/> <div className='available-numbers'>2</div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><i class="bi bi-bounding-box"></i><div className='available-numbers'>15<small className='text-muted'>sq.ft</small></div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><IoCarSportSharp className='p-1 ' style={{fontSize:'35px'}}/> <div className='available-numbers'>1</div></h3>
                                </Col>
                                <Col sm={6} md={2} >

                                    <h3 className='p-2 d-flex  align-items-center'><FaKitchenSet className='p-1' style={{fontSize:'35px'}}/> <div className='available-numbers'>1</div></h3>
                                </Col>
                            </Row>
                        </div>
                        <div className='d-flex justify-content-end show-btn'>
                            <Button variant="primary">Read More <i class="bi bi-arrow-right-circle-fill"></i></Button>
                        </div>
                    </Card.Body>
                </Card>
                <Card data-aos="fade-up">
                    <Card.Img variant="top" src={Img} />
                    <Card.Body>
                        <div className='d-flex align-items-center justify-content-between'>
                            <Card.Title>Card Title</Card.Title>
                            <div className='d-flex'>
                                <div className='p-2 ' ><div className='candp'style={{backgroundColor:'#8A3DFD'}}><i class="bi bi-geo-alt"></i>Kurunegala</div></div>
                                <div className='p-2 '><div className='candp' style={{backgroundColor:'green'}}><i class="bi bi-tag"></i> RS:5000</div></div>
                                <Card.Link className='p-2 starmark'> <h2><i class="bi bi-bookmark-star-fill"></i></h2></Card.Link>
                            </div>
                        </div>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <div>
                            <Row>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex align-items-center'><i class="bi bi-people"></i> <div className='available-numbers'>3</div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><FaBath className='p-1' style={{fontSize:'35px'}}/> <div className='available-numbers'>2</div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><i class="bi bi-bounding-box"></i><div className='available-numbers'>15<small className='text-muted'>sq.ft</small></div></h3>
                                </Col>
                                <Col sm={6} md={2} >
                                    <h3 className='p-2 d-flex  align-items-center'><IoCarSportSharp className='p-1 ' style={{fontSize:'35px'}}/> <div className='available-numbers'>1</div></h3>
                                </Col>
                                <Col sm={6} md={2} >

                                    <h3 className='p-2 d-flex  align-items-center'><FaKitchenSet className='p-1' style={{fontSize:'35px'}}/> <div className='available-numbers'>1</div></h3>
                                </Col>
                            </Row>
                        </div>
                        <div className='d-flex justify-content-end show-btn'>
                            <Button variant="primary">Read More <i class="bi bi-arrow-right-circle-fill"></i></Button>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </section>
    );
}

export default HorizontalCard;