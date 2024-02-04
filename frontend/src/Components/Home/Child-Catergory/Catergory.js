import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from './Assets/1.jpg';
import img2 from './Assets/2.jpg';
import img3 from './Assets/3.jpg';
import './Catergory.css';

const Catergory = () => {
    return (
        <>
            <div className="catergory-home"  data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="400" id="find">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center" style={{ marginTop: '100px',color:'#4D4D4D' }}>
                            <h1>Choose Your Home</h1>
                        </div>
                    </div>
                </div>
                <div className='container'>    
                    <div className="row  my-3">
                        <div className="col-md-4">
                            <Card >
                                <Card.Img variant="top" src={img1} />
                                <Card.Body>
                                    <Card.Title>Boarding Building</Card.Title>
                                    <Card.Text>
                                    A boarding building is a place with many individual rooms, each a home for someone different. Students, travelers, and workers all come together under one roof. It's like a mini-town within a city.
                                    </Card.Text>
                                    <Button variant="primary" className='position-absolute top-1'>Let's Find</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 ">
                            <Card >
                                <Card.Img variant="top" src={img2} />
                                <Card.Body>
                                    <Card.Title>Rental House</Card.Title>
                                    <Card.Text>
                                    Renting a house is all about! It's like having more space and privacy than an apartment, often with a yard or porch to enjoy.
                                    </Card.Text>
                                    <Button variant="primary" className='position-absolute top-1'>Let's Find</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-4 ">
                            <Card >
                                <Card.Img variant="top" src={img3} />
                                <Card.Body>
                                    <Card.Title>Boarding Room</Card.Title>
                                    <Card.Text>
                                    Boarding rooms can vary in size and amenities, but they typically have a bed, dresser, and chair. Some boarding rooms also have a private bathroom or kitchenette.
                                    </Card.Text>
                                    <Button variant="primary" className='position-absolute top-1'>Let's Find</Button>
                                </Card.Body>
                            </Card>
                            </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Catergory;