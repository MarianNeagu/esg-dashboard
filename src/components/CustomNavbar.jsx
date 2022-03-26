import React, { Component } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import esg_data from "../Data/esg_data.json"


class CustomNavbar extends Component {
    state = {
        esg_data: esg_data
    }

    

    render() { 
        console.log(esg_data);
        return (
            <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">ESG Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >

                    {/* INDUSTRY */}
                    <NavDropdown title="Industry" id="industryDropdown">
                    <NavDropdown.Item href="#action1">Automotive</NavDropdown.Item>
                    <NavDropdown.Item href="#action2">Semiconductor Manufacturing</NavDropdown.Item>
                    </NavDropdown>

                    {/* COMPANIES*/}
                    <NavDropdown title="Companies" id="companiesDropdown">
                    <NavDropdown.Item href="#action3">Automotive</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Semiconductor Manufacturing</NavDropdown.Item>
                    </NavDropdown>

                    
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        );
    }
}
 
export default CustomNavbar;
