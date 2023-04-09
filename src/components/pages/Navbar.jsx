import React, { useEffect, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
// import service1 from '../../assets/service1.jpeg';

export default function MainNavbar({ handlePageChange }) {
  const [expanded, setExpanded] = useState(false);

  // const [navbarClass, setNavbarClass] = useState('navbar navbar-expand-lg navbar-light bg-light'); // set the initial class for the navbar

  // useEffect(() => {
  //   // add an event listener to the window object to detect scroll events
  //   window.addEventListener('scroll', () => {
  //     // get the current scroll position
  //     const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  //     // if the user has scrolled down, add the "scrolled" class to the navbar
  //     if (scrollPos > 0) {
  //       setNavbarClass('navbar navbar-expand-lg navbar-light scrolled'); // add the "scrolled" class
  //     } else {
  //       setNavbarClass('navbar navbar-expand-lg navbar-light bg-light'); // remove the "scrolled" class
  //     }
  //   });
  // }, []);

  return (
    <Navbar expand="md" fixed="top" expanded={expanded} className="navbar-light bg-light px-4">
      <Navbar.Brand href="#Home" onClick={() => handlePageChange('Home')}>
        J &amp; Z CONSTRUCTION
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setExpanded(expanded ? false : 'expanded')} />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#Home" 
          onClick={() => { handlePageChange('Home'); setExpanded(false) }}
          >Home</Nav.Link>
          <Nav.Link href="#About" 
          // onClick={() => { handlePageChange('About'); setExpanded(false) }}
          >About</Nav.Link>
          <Nav.Link href="#Services" 
          // onClick={() => { handlePageChange('Services'); setExpanded(false) }}
          >Services</Nav.Link>
          <Nav.Link href="#Gallery" 
          // onClick={() => { handlePageChange('Gallery'); setExpanded(false) }}
          >Gallery</Nav.Link>
          <Nav.Link href="#Quote" 
          onClick={() => { handlePageChange('Quote'); setExpanded(false) }}
          >Quote</Nav.Link>
          <Nav.Link href="#Testimonials" 
          // onClick={() => { handlePageChange('Testimonials'); setExpanded(false) }}
          >Testimonials</Nav.Link>
          <Nav.Link href="#More" 
          // onClick={() => { handlePageChange('More'); setExpanded(false) }}
          >More</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

// export default Navbar;

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// export default function Navbar2({ handlePageChange }) {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

