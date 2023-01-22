import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import './Navigation.css'


export default class Navigation extends Component {
  render() {
    return (
        <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand  className='logo' href="/"><img src={ require('../Pictures/logo.png') } alt="" /></Navbar.Brand>
          <Navbar.Toggle className='bg-light' aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className='logotext' href="/">Home</Nav.Link>
              <Nav.Link className='logotext' href="/AboutUs">About Us</Nav.Link>
              <Nav.Link className='logotext' href="/Discussion">Discussion</Nav.Link>
              <Nav.Link className='logotext' href="/Courses">Courses</Nav.Link>
              <Nav.Link className='logotext' href="/Login">Login</Nav.Link>
              
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-secondary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}
