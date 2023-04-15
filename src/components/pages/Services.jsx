import React from 'react';

export default function About({ HandlePageChange }) {
    return(
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
    );
}