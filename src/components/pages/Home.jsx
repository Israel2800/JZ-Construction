import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { services } from '../../data';
import { images } from '../../data';
import { FaHardHat, FaTools, FaShieldAlt } from 'react-icons/fa';
// import { FaRegBuilding, FaHardHat, FaClock } from 'react-icons/fa';
import service1 from "../../assets/images/service1.jpeg";

// import { useContext } from 'react';
// import { ThemeContext } from '../../ThemeContext';

export default function Home({ handlePageChange }) {
    // const context = useContext(ThemeContext);

    // if (!context) {
    //     return null;
    // }

    // const { darkMode } = context;

return (
<section className="bg-white">
    <section
        className="d-flex align-items-center"
        style={{
            backgroundImage: 'url("https://via.placeholder.com/1200x800")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed', /* keeps the background fixed while scrolling */
            height: '450px',
        }}
    >
    <Container>
        <h1 className="text-white">MAKING YOUR VISION BECOME A REALITY</h1>
        <p className="text-white">MORE THAN 10 YEARS OF EXPERIENCE</p>
    </Container>
    </section>
    
    <Container className="p-4" style={{ maxWidth: '100%' }}>
      <Row className="align-items-center justify-content-center d-flex">
        <Col md={6} className = "p-0">
          <img
            src="https://via.placeholder.com/400x400"
            alt="Placeholder Image"
            className=""
            style={{ height: '350px', width: "100%" }}
          />
        </Col>
        <Col md={6} className = "p-4">
          <div className="text-dark">
            <h5 className='text-dark'>Trusted Professionals</h5>
            <h1 className='text-dark'>Section Title</h1>
            <p className='text-dark text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel felis nec nulla tempus varius nec eu elit. Donec ullamcorper vestibulum tellus, in finibus dolor bibendum ac. In hac habitasse platea dictumst. Aenean at sapien eget augue bibendum porttitor.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </Col>
      </Row>
    </Container>

    <Container className="d-flex flex-wrap p-4 align-items-center justify-content-center">
            <p className='w-100 text-center m-2 text-dark' style={{ fontWeight: 'bold', fontSize: '28px' }}>Our Services</p>
            <p className='w-100 text-center mb-4 text-dark'>We provide services that set high standards for quality, reliability, durability and value for money</p>

        {services.map((service) => (
            <a className="col-sm-6 col-md-4 col-lg-3 p-2 text-decoration-none" key={service.title}>
                <Card className="border-0 p-0 m-2" style={{ width: '100%', maxWidth: '300px' }}>
                    <Card.Img 
                        src={service.image} 
                        style={{ height: '260px' }}
                    />
                    <Card.Body className="p-2 d-flex flex-column justify-content-center">
                        <Card.Title className='text-center'>{service.title}</Card.Title>
                        <Card.Text className='text-justify'>{service.description}</Card.Text>
                        {/* <Button>{service.button}</Button> */}
                    </Card.Body>
                </Card>
            </a>
        ))}
    </Container>
    <section className="bg-dark text-white">
        <Container className="py-5">
            <h2 className="text-center mb-5">Why Choose Us</h2>
            <Row className="justify-content-center">
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
    <Container className="p-4">
        <h2 className="text-center mb-4">Roller Gallery</h2>
        <Row>
            {images.map((image) => (
            <Col key={image.id} md={4} className="mb-4">
                <Card>
                <Card.Img variant="top" src={image.imageUrl} />
                </Card>
            </Col>
            ))}
        </Row>
    </Container>

    <div className="contact-us-section" style={{ 
        backgroundImage: `linear-gradient(rgba(26, 35, 126, 0.2), rgba(26, 35, 126, 0.6)), url(${service1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}>
        <Container className="d-flex flex-column align-items-center justify-content-center">
            <h2 className="text-white mb-4">Contact Us</h2>
            <p className="text-white mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel felis nec nulla tempus varius nec eu elit. Donec ullamcorper vestibulum tellus, in finibus dolor bibendum ac.</p>
            <Button variant="primary" size="" 
                style={{ 
                    backgroundColor: "#1a237e", 
                    border: "none", 
                    borderRadius: "0px", 
                    padding: "10px 20px",
                }}>
                Get in Touch
            </Button>
        </Container>
</div>



   
</section>
);
}
