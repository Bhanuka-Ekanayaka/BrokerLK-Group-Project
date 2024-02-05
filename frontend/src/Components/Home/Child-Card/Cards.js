import './Card.css';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Img1 from './Assets/Crd.jpg';

const Cards = ({ title, animation, CardAnimate }) => {
    return (
        <section className='post-add-card-home' id={title}>
            <Container>
                <div className='text-center' style={{ color: '#4D4D4D' }} data-aos={animation}>
                    <h2>Latest From {title}</h2>
                    <div className='text-muted'>
                        --get our latest posts--
                    </div>
                </div>
                <Row className='gy-3 my-3'>
                    <Col sm={6} md={4} lg={3} >
                        <div className='holder' data-aos={CardAnimate}>
                            <Card >
                                <Card.Body>
                                    <Card.Img variant="top" src={Img1} />
                                    <div className='price-reviews'>
                                        <Card.Link style={{ color: '#FFFFFF', background: 'green', borderRadius: '5px', paddingLeft: '2px', paddingRight: '2px' }}>Rs:5000</Card.Link>
                                        <Card.Link href="#" style={{ color: '#4D4D4D' }} >Reviews</Card.Link>
                                    </div>

                                    <Card.ImgOverlay>
                                        <div >
                                            <Card.Link>Kandy</Card.Link>
                                        </div>
                                    </Card.ImgOverlay>
                                
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button>Read More <i class="bi bi-arrow-right-circle-fill"></i></Button>

                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3} >
                        <div className='holder' data-aos={CardAnimate}>
                            <Card >
                                <Card.Body>
                                    <Card.Img variant="top" src={Img1} />
                                    <div className='price-reviews'>
                                        <Card.Link style={{ color: '#FFFFFF', background: 'green', borderRadius: '5px', paddingLeft: '2px', paddingRight: '2px' }}>Rs:5000</Card.Link>
                                        <Card.Link href="#" style={{ color: '#4D4D4D' }} >Reviews</Card.Link>
                                    </div>
                                    <Card.ImgOverlay >
                                        <div>
                                            <Card.Link>Kandy</Card.Link>
                                        </div>
                                    </Card.ImgOverlay>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button>Read More <i class="bi bi-arrow-right-circle-fill"></i></Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3} >
                        <div className='holder' data-aos={CardAnimate}>
                            <Card >
                                <Card.Body>
                                    <Card.Img variant="top" src={Img1} />
                                    <div className='price-reviews'>
                                        <Card.Link style={{ color: '#FFFFFF', background: 'green', borderRadius: '5px', paddingLeft: '2px', paddingRight: '2px' }}>Rs:5000</Card.Link>
                                        <Card.Link href="#" style={{ color: '#4D4D4D' }} >Reviews</Card.Link>
                                    </div>
                                    <Card.ImgOverlay >
                                        <div>
                                            <Card.Link>Kandy</Card.Link>
                                        </div>
                                    </Card.ImgOverlay>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button>Read More <i class="bi bi-arrow-right-circle-fill"></i></Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <div className='holder' data-aos={CardAnimate}>
                            <Card >
                                <Card.Body>
                                    <Card.Img variant="top" src={Img1} />
                                    <div className='price-reviews'>
                                        <Card.Link style={{ color: '#FFFFFF', background: 'green', borderRadius: '5px', paddingLeft: '2px', paddingRight: '2px' }}>Rs:5000</Card.Link>
                                        <Card.Link href="#" style={{ color: '#4D4D4D' }} >Reviews</Card.Link>
                                    </div>
                                    <Card.ImgOverlay >
                                        <div>
                                            <Card.Link>Kandy</Card.Link>
                                        </div>
                                    </Card.ImgOverlay>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button>Read More <i class="bi bi-arrow-right-circle-fill"></i></Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <div className='holder' data-aos={CardAnimate}>
                            <Card >
                                <Card.Body>
                                    <Card.Img variant="top" src={Img1} />
                                    <div className='price-reviews'>
                                        <Card.Link style={{ color: '#FFFFFF', background: 'green', borderRadius: '5px', paddingLeft: '2px', paddingRight: '2px' }}>Rs:5000</Card.Link>
                                        <Card.Link href="#" style={{ color: '#4D4D4D' }} >Reviews</Card.Link>
                                    </div>
                                    <Card.ImgOverlay >
                                        <div>
                                            <Card.Link>Kandy</Card.Link>
                                        </div>
                                    </Card.ImgOverlay>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button>Read More <i class="bi bi-arrow-right-circle-fill"></i></Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <div className='holder' data-aos={CardAnimate}>
                            <Card >
                                <Card.Body>
                                    <Card.Img variant="top" src={Img1} />
                                    <div className='price-reviews'>
                                        <Card.Link style={{ color: '#FFFFFF', background: 'green', borderRadius: '5px', paddingLeft: '2px', paddingRight: '2px' }}>Rs:5000</Card.Link>
                                        <Card.Link href="#" style={{ color: '#4D4D4D' }} >Reviews</Card.Link>
                                    </div>
                                    <Card.ImgOverlay >
                                        <div>
                                            <Card.Link>Kandy</Card.Link>
                                        </div>
                                    </Card.ImgOverlay>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button>Read More <i class="bi bi-arrow-right-circle-fill"></i></Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <div className='holder' data-aos={CardAnimate}>
                            <Card >
                                <Card.Body>
                                    <Card.Img variant="top" src={Img1} />
                                    <div className='price-reviews'>
                                        <Card.Link style={{ color: '#FFFFFF', background: 'green', borderRadius: '5px', paddingLeft: '2px', paddingRight: '2px' }}>Rs:5000</Card.Link>
                                        <Card.Link href="#" style={{ color: '#4D4D4D' }} >Reviews</Card.Link>
                                    </div>
                                    <Card.ImgOverlay >
                                        <div>
                                            <Card.Link>Kandy</Card.Link>
                                        </div>
                                    </Card.ImgOverlay>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button>Read More <i class="bi bi-arrow-right-circle-fill"></i></Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <div className='holder' data-aos={CardAnimate}>
                            <Card >
                                <Card.Body>
                                    <Card.Img variant="top" src={Img1} />
                                    <div className='price-reviews'>
                                        <Card.Link style={{ color: '#FFFFFF', background: 'green', borderRadius: '5px', paddingLeft: '2px', paddingRight: '2px' }}>Rs:5000</Card.Link>
                                        <Card.Link href="#" style={{ color: '#4D4D4D' }} >Reviews</Card.Link>
                                    </div>
                                    <Card.ImgOverlay >
                                        <div>
                                            <Card.Link>Kandy</Card.Link>
                                        </div>
                                    </Card.ImgOverlay>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button>Read More <i class="bi bi-arrow-right-circle-fill"></i></Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <div className='holder' data-aos={CardAnimate}>
                            <Card >
                                <Card.Body>
                                    <Card.Img variant="top" src={Img1} />
                                    <div className='price-reviews'>
                                        <Card.Link style={{ color: '#FFFFFF', background: 'green', borderRadius: '5px', paddingLeft: '2px', paddingRight: '2px' }}>Rs:5000</Card.Link>
                                        <Card.Link href="#" style={{ color: '#4D4D4D' }} >Reviews</Card.Link>
                                    </div>
                                    <Card.ImgOverlay >
                                        <div>
                                            <Card.Link>Kandy</Card.Link>
                                        </div>
                                    </Card.ImgOverlay>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button>Read More <i class="bi bi-arrow-right-circle-fill"></i></Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <div className='holder' data-aos={CardAnimate}>
                            <Card >
                                <Card.Body>
                                    <Card.Img variant="top" src={Img1} />
                                    <div className='price-reviews'>
                                        <Card.Link style={{ color: '#FFFFFF', background: 'green', borderRadius: '5px', paddingLeft: '2px', paddingRight: '2px' }}>Rs:5000</Card.Link>
                                        <Card.Link href="#" style={{ color: '#4D4D4D' }} >Reviews</Card.Link>
                                    </div>
                                    <Card.ImgOverlay >
                                        <div>
                                            <Card.Link>Kandy</Card.Link>
                                        </div>
                                    </Card.ImgOverlay>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button>Read More <i class="bi bi-arrow-right-circle-fill"></i></Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    <Col sm={6} md={4} lg={3}>
                        <div className='holder' data-aos={CardAnimate}>
                            <Card >
                                <Card.Body>
                                    <Card.Img variant="top" src={Img1} />
                                    <div className='price-reviews'>
                                        <Card.Link style={{ color: '#FFFFFF', background: 'green', borderRadius: '5px', paddingLeft: '2px', paddingRight: '2px' }}>Rs:5000</Card.Link>
                                        <Card.Link href="#" style={{ color: '#4D4D4D' }} >Reviews</Card.Link>
                                    </div>
                                    <Card.ImgOverlay >
                                        <div>
                                            <Card.Link>Kandy</Card.Link>
                                        </div>
                                    </Card.ImgOverlay>
                                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button>Read More <i class="bi bi-arrow-right-circle-fill"></i></Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>

                </Row>

            </Container>

        </section>
    );
}

export default Cards;