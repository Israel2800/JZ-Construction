import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { services } from '../../data';
import { images } from '../../data';
import { testimonials } from '../../data';
import { FaHardHat, FaTools, FaShieldAlt, FaComments } from 'react-icons/fa';
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Quote from "../pages/Quote";
import { faConstruction } from '@fortawesome/free-solid-svg-icons';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';

import { FaRegBuilding, FaHardHat, FaClock } from 'react-icons/fa';
import service4 from "../../assets/images/service4.jpeg";

import service1 from "../../assets/images/service1.jpeg";

export default function Home({ handlePageChange }) {


    return (
        <section className="bg-white" id="Home">
            <section
                className="d-flex align-items-center img-small-devices"
                style={{
                    backgroundImage: `linear-gradient(rgba(26, 35, 126, 0.2), rgba(26, 35, 126, 0.6)), url(${service4})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: "no-repeat",
                    height: '100vh',
                }}
            >
                <Container>
                    <h1 className="text-white">MAKING YOUR VISION BECOME A REALITY</h1>
                    <p className="text-white">MORE THAN 10 YEARS OF EXPERIENCE</p>
                    <Button
                        className='my-2'
                        variant="primary"
                        size=""
                        style={{
                            backgroundColor: '#fff',
                            border: 'none',
                            borderRadius: '0px',
                            padding: '10px 20px',
                            color: '#1a237e',
                            fontWeight: 'bold',
                        }}
                        href="#Services"
                        // target="_blank"
                    >
                        Learn More
                    </Button>
                </Container>
            </section>
            
            <section id="About">
                <Container className="p-4" style={{ maxWidth: '100%' }}>
                    <HouseSidingIcon  className='w-100' style={{ fontSize: '36px', color: 'brown' }}/>
                    <h5 className='w-100 text-center text-dark my-2'>Trusted Professionals</h5>

                    <Row className="align-items-center justify-content-center d-flex">
                        <Col md={6} className = "p-4">
                            <div className="text-dark text-end">
                                <h2 className='text-dark'>Our Story</h2>
                                <p className='text-dark'>
                                    Our construction company has been in the industry for the past 10 years, providing high-quality services to our clients. Throughout the years, we have gained extensive experience in various types of construction projects, from small renovations to large-scale commercial and residential buildings. Our team is composed of skilled workers who are dedicated to delivering exceptional workmanship and adhering to strict safety and quality standards. We pride ourselves on our attention to detail, clear communication with clients, and timely completion of projects. 
                                </p>
                                {/* <button className="btn btn-primary">Learn More</button> */}
                            </div>
                        </Col>
                        <Col md={6} className = "p-4 text-start">
                            <div className="text-dark">
                                <h2 className='text-dark'>Our Values</h2>
                                <p className='text-dark'>
                                    Values are important for our company because they guide our decisions and actions, ensuring that we deliver the best possible service to our clients.                            </p>
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center mb-3">
                                        <FaShieldAlt className="me-2" size={30} color="#774b0e" />
                                        <h4 className="m-0">Safety</h4>
                                    </li>
                                    <li className="d-flex align-items-center mb-3">
                                        <FaTools className="me-2" size={30} color="#774b0e" />
                                        <h4 className="m-0">Quality</h4>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <FaComments className="me-2" size={30} color="#774b0e" />
                                        <h4 className="m-0">Communication</h4>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            
            <section id="Services">
                <div className='bg-gray'>
                    <Container className="d-flex flex-wrap p-4 align-items-center justify-content-center">
                            <p className='w-100 text-center m-2 text-dark' style={{ fontWeight: 'bold', fontSize: '32px' }}>Our Services</p>
                            <p className='w-100 text-center mb-4 text-dark'>We provide services that set high standards for quality, reliability, durability and value for money</p>

                        {services.map((service) => (
                            <a className="col-sm-6 col-md-4 col-lg-3 p-2 text-decoration-none" key={service.title}>
                                <Card className="border-0 p-0 m-2" style={{ width: '', maxWidth: '300px' }}>
                                    <Card.Img 
                                        src={service.image} 
                                        style={{ height: '260px' }}
                                    />
                                    <Card.Body className="p-2 d-flex flex-column justify-content-center text-dark m-3">
                                        <Card.Title className='text-center'>{service.title}</Card.Title>
                                        <Card.Text className='text-justify'>{service.description}</Card.Text>
                                        <Button style={{ fontSize: '14px', padding: '5px 8px' }}>{service.button}</Button>
                                    </Card.Body>
                                </Card>
                            </a>
                        ))}
                    </Container>
                </div>
            </section>

            <section className="bg-dark text-white">
                <Container className="py-5">
                    <h2 className="text-center mt-5">Why Choose Us</h2>
                    <Row className="justify-content-center mt-5 mb-4">
                        <Col xs={10} md={4} className="text-center mb-4">
                            <FaHardHat size={50} className="mb-4" />
                            <h4>Experienced</h4>
                            <p>Our team has years of experience in the construction industry.</p>
                        </Col>
                        <Col xs={10} md={4} className="text-center mb-4">
                            <FaTools size={50} className="mb-4" />
                            <h4>Quality Work</h4>
                            <p>We take pride in delivering high-quality workmanship.</p>
                        </Col>
                        <Col xs={10} md={4} className="text-center mb-4">
                            <FaShieldAlt size={50} className="mb-4" />
                            <h4>Safe and Secure</h4>
                            <p>We prioritize safety and security on every job site.</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id="Gallery">
                <Container className="p-4 my-5">
                <p className='w-100 text-center m-2 text-dark' style={{ fontWeight: 'bold', fontSize: '32px' }}>Our Latest Work</p>
                            <p className='w-100 text-center mb-4 text-dark'>We provide services that set high standards for quality, reliability, durability and value for money</p>                <Row>
                        {images.map((image) => (
                        <Col key={image.id} md={4} className="mb-4">
                            <Card>
                            <Card.Img variant="top" src={image.imageUrl} />
                            </Card>
                        </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section id="Quote">
                <div className="contact-us-section" style={{ 
                    backgroundImage: `linear-gradient(rgba(26, 35, 126, 0.2), rgba(26, 35, 126, 0.6)), url(${service1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}>
                    <Container className="d-flex flex-column align-items-center justify-content-center">
                        <h2 className="text-white mb-4">Contact Us Today for a FREE Estimation</h2>
                        <p className="text-white mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel felis nec nulla tempus varius nec eu elit. Donec ullamcorper vestibulum tellus, in finibus dolor bibendum ac.</p>
                        <Link to={Quote}>
                            <Button variant="primary" size="" 
                                style={{ 
                                    backgroundColor: "#1a237e", 
                                    border: "none", 
                                    borderRadius: "0px", 
                                    padding: "10px 20px",
                                }}>
                                Contact Now
                            </Button>
                        </Link>
                    </Container>
                </div>
            </section>
            <section id="Testimonials" className="testimonials-section py-5">
                <Container>
                    <h5 className="text-center testimonials">Testimonials</h5>
                    <h2 className="text-center mb-5">What our clients are saying</h2>
                    <Row className="justify-content-center">
                    {testimonials.map((testimonial) => (
                        <Col key={testimonial.id} md={4} className="mb-4">
                        <Card className="testimonial-card h-100">
                            <Card.Body>
                            <div className="d-flex flex-column align-items-center mb-3">
                                <FaQuoteLeft size={25} className="mb-2" />
                                <div>
                                    {Array.from(Array(testimonial.rating), (e, i) => {
                                    return <FaStar key={i} color="#ffc107" />;
                                    })}
                                </div>
                            </div>
                            <Card.Text className="mb-3 text-center">{testimonial.comment}</Card.Text>
                            <Card.Title as="h5" className="font-weight-bold text-center">{testimonial.name}</Card.Title>
                            </Card.Body>
                        </Card>
                        </Col>
                    ))}
                    </Row>
                </Container>
            </section>
        
        </section>
    );
}
