import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home({ handlePageChange }) {
return (
<section className="bg-white">
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
