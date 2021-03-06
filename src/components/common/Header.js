import * as ReactBootstrap from 'react-bootstrap';

import React from 'react';
function Header() {
  return (
    <>
      <ReactBootstrap.Navbar bg="primary" variant="dark" expand="lg">
        <ReactBootstrap.Navbar.Brand href="/">AIDC</ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">
            <ReactBootstrap.NavDropdown
              title="About Us"
              id="basic-nav-dropdown"
            >
              <ReactBootstrap.NavDropdown.Item href="/aidc">
                AIDC
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="/healthprofessionals">
                Health Professionals
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="/testimonials">
                Testimonials
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="/locations">
                Locations
                <br />
                (Office,Hospitals)
              </ReactBootstrap.NavDropdown.Item>
            </ReactBootstrap.NavDropdown>
            <ReactBootstrap.NavDropdown
              title="Services"
              id="basic-nav-dropdown"
            >
              <ReactBootstrap.NavDropdown.Item href="/services">
                AIDC-
                <br />
                Treatment Provided
              </ReactBootstrap.NavDropdown.Item>
            </ReactBootstrap.NavDropdown>
            <ReactBootstrap.Nav.Link href="/faqs">
              FAQ's
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.NavDropdown
              title="Patient Help"
              id="basic-nav-dropdown"
            >
              <ReactBootstrap.NavDropdown.Item href="/forms">
                Forms
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="/requestapt">
                Request Appointment
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="/insuranceaccepted">
                Insurance Accepted
              </ReactBootstrap.NavDropdown.Item>
            </ReactBootstrap.NavDropdown>
            <ReactBootstrap.Nav.Link href="/career">
              Career
            </ReactBootstrap.Nav.Link>
            <ReactBootstrap.Nav.Link href="/news">News</ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
        <ReactBootstrap.Navbar.Collapse className="justify-content-end">
          <ReactBootstrap.Navbar.Text>
            For Appointments Call: <a href="/requestapt">732-230-2828</a>
          </ReactBootstrap.Navbar.Text>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
    </>
  );
}
export default Header;
