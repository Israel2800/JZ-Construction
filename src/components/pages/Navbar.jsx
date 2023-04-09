import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
// import service1 from '../../assets/service1.jpeg';

function Navbar({ handlePageChange }) {
  const [navbarClass, setNavbarClass] = useState('navbar navbar-expand-lg navbar-light bg-light'); // set the initial class for the navbar

  useEffect(() => {
    // add an event listener to the window object to detect scroll events
    window.addEventListener('scroll', () => {
      // get the current scroll position
      const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

      // if the user has scrolled down, add the "scrolled" class to the navbar
      if (scrollPos > 0) {
        setNavbarClass('navbar navbar-expand-lg navbar-light scrolled'); // add the "scrolled" class
      } else {
        setNavbarClass('navbar navbar-expand-lg navbar-light bg-light'); // remove the "scrolled" class
      }
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
      <div className="container-fluid">
        {/* Brand */}
        <a className="navbar-brand" 
            href="#Home"
            onClick={() => handlePageChange('Home')}
        >
          J & Z CONSTRUCTION
        </a>
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                href="#Home"
                className="nav-link"
                onClick={() => handlePageChange('Home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#About"
                className="nav-link"
                // onClick={() => handlePageChange('About')}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Services"
                className="nav-link"
                // onClick={() => handlePageChange('Services')}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Gallery"
                className="nav-link"
                // onClick={() => handlePageChange('Gallery')}
              >
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Quote"
                className="nav-link"
                onClick={() => handlePageChange('Quote')}
              >
                Quote
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#Testimonials"
                className="nav-link"
                // onClick={() => handlePageChange('Testimonials')}
              >
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#More"
                className="nav-link"
                // onClick={() => handlePageChange('More')}
              >
                More
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
