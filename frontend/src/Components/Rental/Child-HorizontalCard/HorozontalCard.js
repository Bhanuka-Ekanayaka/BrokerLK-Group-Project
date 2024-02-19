import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaBath } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";
import { FaKitchenSet } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import axios from 'axios';


const HorizontalCard = () => {

    const [postData, setPostData] = useState([]);


    useEffect(() => {

        const fetchData = async () => {
            try {
                const postAddData = await axios.get('http://localhost:5001/postadd/boarding-room');
                console.log('fetch the data from the backend', postAddData.data)
                setPostData(postAddData.data.postData[0]);
               
            } catch (err) {
                console.log('Cannot fetch data from the backend' + err);
            }
        }
        fetchData();
    }, [])


    return (
        <section className="new-card">
            <Container>
                {Array.isArray(postData) && postData.map(data => (
                    <Card data-aos='fade-up' key={data.post_id}>
                        <Card.Img variant="top" src={`http://localhost:5001/uploads/${data.post_id}/${data.room_inside_img1}`} />
                        <Card.Body>
                            <div className='d-flex align-items-center justify-content-between'>
                                <Card.Title>Card Title</Card.Title>
                                <div className='d-flex'>
                                    <div className='p-2 ' ><div className='candp' style={{ backgroundColor: '#8A3DFD' }}><i class="bi bi-geo-alt"></i> {data.district}</div></div>
                                    <div className='p-2 '><div className='candp' style={{ backgroundColor: 'green' }}><i class="bi bi-tag"></i> RS:{data.advertised_price}</div></div>
                                    <Card.Link className='p-2 starmark'> <h2><i class="bi bi-bookmark-star-fill"></i></h2></Card.Link>
                                </div>
                            </div>
                            <Card.Text>
                                {data.description}
                            </Card.Text>
                            <div>
                                <Row>
                                    <Col sm={6} md={2} >
                                        <h3 className='p-2 d-flex align-items-center'><i class="bi bi-people"></i> <div className='available-numbers'>{data.available_tenants}/{data.no_tenants}</div></h3>
                                    </Col>
                                    <Col sm={6} md={2} >
                                        <h3 className='p-2 d-flex  align-items-center'><FaBath className='p-1' style={{ fontSize: '35px' }} /> <div className='available-numbers'>{data.bath_rooms}</div></h3>
                                    </Col>
                                    <Col sm={6} md={2} >
                                        <h3 className='p-2 d-flex  align-items-center'><i class="bi bi-bounding-box"></i><div className='available-numbers'>{data.room_size}<small className='text-muted'>sq.ft</small></div></h3>
                                    </Col>
                                    <Col sm={6} md={2} >
                                        <h3 className='p-2 d-flex  align-items-center'><IoCarSportSharp className='p-1 ' style={{ fontSize: '35px' }} /> <div className='available-numbers'>0</div></h3>
                                    </Col>
                                    <Col sm={6} md={2} >

                                        <h3 className='p-2 d-flex  align-items-center'><FaKitchenSet className='p-1' style={{ fontSize: '35px' }} /> <div className='available-numbers'>{data.is_kitchen}</div></h3>
                                    </Col>
                                </Row>
                            </div>
                            <div className='d-flex justify-content-end show-btn'>
                                <Button variant="primary" href='/Description'>Read More <i class="bi bi-arrow-right-circle-fill"></i></Button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
             
            </Container>
        </section>
    );
}

export default HorizontalCard;