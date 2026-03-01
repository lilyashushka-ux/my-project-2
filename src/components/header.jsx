import React, { Component } from 'react';
import { Button, Container, Form, FormControl, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../assets/react.svg";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home.jsx';
//import About from './pages/About.jsx';
//import Contact from './pages/Contact.jsx';
//import Blog from './pages/Blog.jsx';

export default class Header extends Component {
    render() {
        return (
            <>
       <Navbar fixed='top' collapseOnSelect expand="md" bg="dark"variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                <img
                src={Logo}
                height="30"
                width="30"
                className='d-inline-block align-top'
                alt='Logo'
                />
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <div className="d-flex w-100 justify-content-center align-items-center">
                <Nav className='me-auto'>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/about'>About us</Nav.Link>
                <Nav.Link href='/contact'>Contact</Nav.Link>
                <Nav.Link href='/blog'>Blog</Nav.Link>
                </Nav>
                <Form className="d-flex align-items-center ms-3">
                <FormControl type="text" placeholder="Search" className="me-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
                </div>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <Router>
               <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
            </Router>
            </>
        );
    }
}