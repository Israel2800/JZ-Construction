import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
    
    <Container className="p-0" style={{ maxWidth: '100%' }}>
      <Row className="align-items-center">
        <Col md={6}>
          <img
            src="https://via.placeholder.com/400x400"
            alt="Placeholder Image"
            className="d-none d-md-block"
            style={{ height: "100%", width: "100%" }}
          />
        </Col>
        <Col md={6}>
          <div className="d-md-none" style={{ height: "50vh" }}></div>
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

    <Container>
        <Row className="justify-content-center p-5" style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "-8px", /* add negative margin to the row */
        }}>
        
            <Card style={{ width: '18rem', margin: '8px' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin: '8px' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin: '8px' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', margin: '8px' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </Row>
    </Container>
   
    
</section>
);
}
