import React from 'react';


export default function DeckBuilts({ handlePageChange }) {
    return(
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
    );
}

