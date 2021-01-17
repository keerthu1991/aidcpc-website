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
              <ReactBootstrap.NavDropdown.Item href="/aidcpc">
                AIDC
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="/healthprofessionals">
                Health Professionals
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="/credentials">
                Credentials
              </ReactBootstrap.NavDropdown.Item>
              <ReactBootstrap.NavDropdown.Item href="/locations">
                Locations(Hospital,Nursing Home,Office)
              </ReactBootstrap.NavDropdown.Item>
            </ReactBootstrap.NavDropdown>
            <ReactBootstrap.NavDropdown
              title="Services"
              id="basic-nav-dropdown"
            >
              <ReactBootstrap.NavDropdown.Item href="/services">
                ID CARE-DISEASES/TREATMENT PROVIDED
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
      </ReactBootstrap.Navbar>
    </>
  );
}
export default Header;
