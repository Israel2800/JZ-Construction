import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home({ handlePageChange }) {
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
        <h1 className="text-white">Making your vision become a reality</h1>
        <p className="text-white">Making your vision become a reality</p>
    </Container>
    </section>
    
    <Container>
        <Row className="justify-content-center" style={{
            display: "flex",
            flexWrap: "wrap",
            marginRight: "-.5rem",
            marginLeft: "-.5rem",
            marginTop: "var(--bs-gutter-y)",
        }}>
        <Col md={6} className="my-3">
            <img
                src="https://via.placeholder.com/500x300"
                alt="Construction image 1"
                className="img-fluid"
            />
        </Col>
        <Col md={6} className="my-3">
        <img
                src="https://via.placeholder.com/500x300"
                alt="Construction image 2"
                className="img-fluid"
                />
        </Col>
        <Col md={6} className="my-3">
        <img
                src="https://via.placeholder.com/500x300"
                alt="Construction image 3"
                className="img-fluid"
                />
        </Col>
        <Col md={6} className="my-3">
        <img
                src="https://via.placeholder.com/500x300"
                alt="Construction image 4"
                className="img-fluid"
                />
        </Col>
        </Row>
    </Container>
    
</section>
);
}
