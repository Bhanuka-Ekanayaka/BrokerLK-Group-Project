import { Container, Row, Col } from "react-bootstrap";

const Footer = ({animation}) => {
    return (
        <section className="footer-site bg-dark text-white pt-5 pb-4">
            <Container className="text-center text-md-left">
                <Row className="gy-3 my-3 text-center text-md-left">
                    <Col xl={3} md={3} lg={3} className="mx-auto mt-3 ">
                        <h3 className="text-uppercase mb-4 font-weight-bold text-danger " data-aos={animation}>BrokerLK</h3>
                        <p data-aos={animation}>Welcome to Broker.lk , your one -stop shop  for boarding accommodations.
                            Whether you are a university student or a working person, we are here to
                            make your stay unforgettable.
                        </p>
                    </Col>

                    <Col xl={2} md={2} lg={2} className="mx-auto mt-3 ">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-danger ">Property types</h5>
                        <p >
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Boarding Room</a>
                        </p>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Boarding Building</a>
                        </p>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Rental House</a>
                        </p>
                    </Col>

                    <Col xl={2} md={3} lg={2} className="mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-danger">Usefull Links</h5>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Your Account</a>
                        </p>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Your Dasboard</a>
                        </p>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Post New Add</a>
                        </p>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Help</a>
                        </p>
                    </Col>
                    <Col xl={3} md={4} lg={3} className="mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-danger">Contact</h5>

                        <p>
                            <i class="bi bi-house-door"></i> No 10, Matara, Sri Lanka.
                        </p>
                        <p>
                            <i class="bi bi-envelope"></i> broker2024@gmail.com
                        </p>
                        <p>
                        <i class="bi bi-telephone-fill"></i> +94 77 677 5454
                        </p>
                        <p>
                        <i class="bi bi-whatsapp"></i> +94 11 456 4556
                        </p>

                    </Col>
                </Row>

                <hr className="mb-4"/>

                <Row className="align-items-center">
                    <Col md={7} lg={8}>
                        <p>Copyright <i class="bi bi-c-circle"></i> 2024 All right reserved by:
                        <a href="#" style={{textDecoration:'none'}} className="text-danger">
                            <strong> BrokerLK.lk</strong>
                        </a>
                        </p>
                    </Col>
                    <Col md={5} lg={4}>
                        <div className="text-center text-md-right">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <a href="#" className="btn-floating btm-sm text-white" style={{fontSize:'23px'}}><i class="bi bi-facebook"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="btn-floating btm-sm text-white" style={{fontSize:'23px'}}><i class="bi bi-twitter"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#" className="btn-floating btm-sm text-white" style={{fontSize:'23px'}}><i class="bi bi-whatsapp"></i></a>
                                </li>
                            </ul>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Footer;