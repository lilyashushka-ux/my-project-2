import React, { Component } from 'react';
import { Container, Navbar, Nav, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../assets/dog.icon.png";
import { Link, useNavigate } from 'react-router-dom';
import Search from "../components/search.jsx";

// Обгортка, щоб використовувати хук useNavigate у класовому компоненті
function HeaderWrapper(props) {
    const navigate = useNavigate();

    const handleSearchSelect = (tabKey) => {
        // Переходимо на About з хешем таба
        navigate(`/about#${tabKey}`);
    };

    return <Header {...props} onSearchSelect={handleSearchSelect} />;
}

class Header extends Component {
    render() {
        return (
            <Navbar fixed='top' collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={Logo}
                            height="30"
                            width="30"
                            className='d-inline-block align-top'
                            alt='Logo'
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <div className="d-flex w-100 justify-content-center align-items-center">
                            <Nav className='me-auto'>
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/about">About us</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            </Nav>
                            <Form className="d-flex align-items-center ms-3">
                                {/* Передаємо колбек у Search */}
                                <Search onSelectTab={this.props.onSearchSelect} />
                            </Form>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default HeaderWrapper;
