import React, { useState } from "react";
import { Form, Button, Row, Col, Container, ListGroup  } from "react-bootstrap";
import Home from "./Home";
import service4 from "../../assets/images/service4.jpeg";
const sendMail = require("./services/sendMail");


export default function Quote() {
//         const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     service: "",
//     comments: "",
//   });

//   const handleInputChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//   };

const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        sendMail(formData);
};
      

  return (
       
        
        <Container className="mb-5" id="Quote">
                <section
                        className="d-flex align-items-center"
                        style={{
                        backgroundImage: `url(${service4})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed', /* keeps the background fixed while scrolling */
                        height: '480px',
                        }}
                >
                <Container>
                        <h1 className="text-white">MAKING YOUR VISION BECOME A REALITY</h1>
                        <p className="text-white">MORE THAN 10 YEARS OF EXPERIENCE</p>
                </Container>
                </section>
                <Form onSubmit={handleSubmit}>
                        <ListGroup>
                                <ListGroup.Item className="rounded-0">
                                        <Form.Group controlId="formBasicName">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control
                                                        type="text"
                                                        placeholder="Enter name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        required
                                                />
                                        </Form.Group>
                                </ListGroup.Item>

                                <ListGroup.Item className="rounded-0">
                                        <Form.Group controlId="formBasicPhone">
                                                <Form.Label>Phone</Form.Label>
                                                <Form.Control
                                                        type="tel"
                                                        placeholder="Enter phone number"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        required
                                                />
                                        </Form.Group>
                                </ListGroup.Item>

                                <ListGroup.Item className="rounded-0">
                                        <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control
                                                        type="email"
                                                        placeholder="Enter email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        required
                                                />
                                        </Form.Group>
                                </ListGroup.Item>

                                <ListGroup.Item className="rounded-0">
                                        <Form.Group controlId="formBasicService">
                                                <Form.Label>Service Requested</Form.Label>
                                                <Form.Control
                                                        as="select"
                                                        name="service"
                                                        value={formData.service}
                                                        onChange={handleInputChange}
                                                        required
                                                >
                                                <option value="">Choose a service</option>
                                                <option value="Service 1">Service 1</option>
                                                <option value="Service 2">Service 2</option>
                                                <option value="Service 3">Service 3</option>
                                                </Form.Control>
                                        </Form.Group>
                                </ListGroup.Item>

                                <ListGroup.Item className="rounded-0">
                                        <Form.Group controlId="formBasicComments">
                                                <Form.Label>Request Description</Form.Label>
                                                <Form.Control
                                                        as="textarea"
                                                        rows={5}
                                                        placeholder="Enter comments"
                                                        name="comments"
                                                        value={formData.comments}
                                                        onChange={handleInputChange}
                                                        required
                                                />
                                        </Form.Group>
                                </ListGroup.Item>

                                <ListGroup.Item className="rounded-0 text-center">
                                <Button variant="primary" type="submit" size="" 
                                style={{ 
                                        backgroundColor: "#1a237e", 
                                        border: "none", 
                                        borderRadius: "0px", 
                                        padding: "10px 25px",
                                }}>
                                        Send
                                </Button>
                                </ListGroup.Item>
                        </ListGroup>
                </Form>
        </Container>

  );
};

