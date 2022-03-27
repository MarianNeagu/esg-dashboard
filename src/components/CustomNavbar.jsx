import React, { Component, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import esg_data from "../Data/esg_data.json"






export default function CustomNavbar({viewTypeHandler, viewType, JsonData}) {

    const getCompaniesFromJason = (JsonData, viewType)=>{
        let Companies_V = [];
        for(let i=0;i<JsonData.Industries.length;i++){
            if(JsonData.Industries[i].name==viewType.industry)
            for(let j=0;j<JsonData.Industries[i].companies.length;j++){
                Companies_V.push(JsonData.Industries[i].companies[j].name)
            }
        }
        
        return Companies_V
    }
    useEffect(()=>{
        getCompaniesFromJason(JsonData,viewType);
    },[])
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
                    <NavDropdown title={`${viewType.industry}`} id="industryDropdown" 
                        onSelect={
                            function(evt){
                                let company = JsonData.Industries.filter((e)=>e.name==evt.substring(1))[0].companies[0].name
                                viewTypeHandler(evt.substring(1),company,viewType.view)
                            }
                        }>
                        {JsonData.Industries.map((e)=><NavDropdown.Item key={e.name} href={`#${e.name}`}>{e.name}</NavDropdown.Item>)}
                    </NavDropdown>

                    {/* COMPANIES*/}
                    <NavDropdown title={`${viewType.company}`} id="companiesDropdown"
                        onSelect={
                            function(evt){
                                viewTypeHandler(viewType.industry,evt.substring(1),viewType.view)
                            }
                        }>
                        {getCompaniesFromJason(JsonData, viewType).map((e)=>
                            <NavDropdown.Item href={`#${e}`} key={e}>{e}</NavDropdown.Item>
                        )}
                        
                    {/* <NavDropdown.Item href="#action3">Automotive</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Semiconductor Manufacturing</NavDropdown.Item> */}
                    </NavDropdown>

                    <NavDropdown title={`${viewType.view.charAt(0).toUpperCase() + viewType.view.slice(1)}`} id="viewDropdown"
                        onSelect={
                            function(evt){
                                if(evt=="#action5"){
                                    viewTypeHandler(viewType.industry,viewType.company,"analytics")
                                }
                                if(evt=="#action6"){
                                    viewTypeHandler(viewType.industry,viewType.company,"predictions")
                                }
                            }
                        }>
                    <NavDropdown.Item href="#action5">Analytics</NavDropdown.Item>
                    <NavDropdown.Item href="#action6">Predictions</NavDropdown.Item>
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
  )
}
