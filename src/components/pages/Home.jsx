import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { services } from '../../data';

export default function Home({ handlePageChange }) {
return (
<section className="bg-dark">
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
        <h1 className="text-white">Making your vision become a reality</h1>
        <p className="text-white">Making your vision become a reality</p>
    </Container>
    </section>
    
    <Container className="" style={{ maxWidth: '100%' }}>
      <Row className="align-items-center">
        <Col md={6} className = "p-0">
          <img
            src="https://via.placeholder.com/400x400"
            alt="Placeholder Image"
            className=""
            style={{ height: '350px', width: "100%" }}
          />
        </Col>
        <Col md={6} className = "p-4">
          <div className="text-white">
            <h2>Section Title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel felis nec nulla tempus varius nec eu elit. Donec ullamcorper vestibulum tellus, in finibus dolor bibendum ac. In hac habitasse platea dictumst. Aenean at sapien eget augue bibendum porttitor.
            </p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </Col>
      </Row>
    </Container>

    <Container className="d-flex flex-wrap p-4">
        {services.map((service) => (
            <a key={service.image} className="col-sm-6 w-80 p-4 text-decoration-none">
                <Card className = "border-0 p-0" 
                    style={{ 
                        width: '', 
                        margin: '' 
                    }}>
                    <Card.Img
                        src={service.image}
                    />
                    <Card.Body>
                        <Card.Title>
                            {service.title}
                        </Card.Title>
                        <Card.Text>
                            {service.description}
                        </Card.Text>
                        <Button>
                            {service.button}
                        </Button>
                    </Card.Body>
                </Card>
            </a>
        ))}


    </Container>
   
    
</section>
);
}
