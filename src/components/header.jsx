import React, { Component } from 'react';
import { Button, Container, Form, FormControl, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../assets/react.svg";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

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
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/blog" component={Blog} />
                </Switch>
            </Router>
            </>
        );
    }
}